import {
  runEntrypoint,
  InstanceBase,
  InstanceStatus,
} from "@companion-module/base";
import { UpgradeScripts } from "./upgrades.js";
import { getActionDefinitions } from "./actions.js";
import { getFeedbackDefinitions } from "./feedbacks.js";
import { getPresetDefinitions } from "./presets.js";
import { setVariables, checkVariables } from "./variables.js";
import { ConfigFields } from "./config.js";

import util from "util";
import { HttpClient } from "urllib";

// ########################
// #### Instance setup ####
// ########################
class axisPTZInstance extends InstanceBase {
  getCameraInformation() {
    const urllib = new HttpClient();
    urllib
      .request(
        this.config.host + "/axis-cgi/param.cgi?action=list",
        this.config.authtext
      )
      .then((result) => {
        // store header information
        var resObj = result.data;
        
          this.updateStatus(InstanceStatus.Ok);
          this.processCameraInformation(resObj);
      
      })
      .catch((err) => {
        this.log("debug", "Axis Error: " + util.inspect(err));
        this.updateStatus(InstanceStatus.ConnectionFailure);
      });
  }

  processCameraInformation(data) {
    let resultObj = String(data);
    if (resultObj.includes("401 Unauthorized")) {
      this.updateStatus(InstanceStatus.ConnectionFailure);
    } else {
      this.updateStatus(InstanceStatus.Ok);

      let chunks = resultObj.split("\n");

      var attarr = [];

      for (let i = 0; i < chunks.length - 1; i += 1) {
        const val = chunks[i].split("=")[1];

        switch (String(chunks[i].split("=")[0])) {
          case "root.Brand.ProdShortName":
            attarr["CameraType"] = val;
            break;
          case "root.PTZ.Limit.L1.MaxFocus":
            attarr["MaxFocus"] = Number(val);
            break;
          case "root.PTZ.Limit.L1.MinFocus":
            attarr["MinFocus"] = Number(val);
            break;
          case "root.PTZ.Limit.L1.MaxPan":
            attarr["MaxPan"] = val;
            break;
          case "root.PTZ.Limit.L1.MaxTilt":
            attarr["MaxTilt"] = Number(val);
            break;
          case "root.PTZ.Limit.L1.MaxZoom":
            attarr["MaxZoom"] = Number(val);
            break;
          case "root.PTZ.Limit.L1.MinZoom":
            attarr["MinZoom"] = Number(val);
            break;
          case "root.PTZ.Limit.L1.MinTilt":
            attarr["MinTilt"] = Number(val);
            break;
          case "root.PTZ.Limit.L1.MinPan":
            attarr["MinPan"] = Number(val);
            break;
          case "root.PTZ.UserAdv.U1.MoveSpeed":
            attarr["speed"] = Number(val);
            break;
        }
      }
      this.setVariableValues(attarr);
      this.checkFeedbacks();
    }
  }

  getCameraPosition() {
    const urllib = new HttpClient();
    urllib
      .request(
        this.config.host + "/axis-cgi/com/ptz.cgi?query=position",
        this.config.authtext
      )
      .then((result) => {
        var resObj = result.data;
        this.processCameraPosition(resObj);
      })
      .catch((err) => {
        this.log("debug", "Axis Error: " + util.inspect(err));
      });
  }

  processCameraPosition(data) {
    let resultObj = String(data);
    let chunks = resultObj.split("\n");

    var attarr = [];

    for (let i = 0; i < chunks.length - 1; i += 1) {
      const val = chunks[i].split("=")[1];

      switch (chunks[i].split("=")[0]) {
        case "pan":
          attarr["pan"] = val;
          break;
        case "tilt":
          attarr["tilt"] = val;
          break;
        case "zoom":
          attarr["zoom"] = val;
          break;

        case "focus":
          attarr["focus"] = val;
          break;

        case "autofocus":
          attarr["autofocus"] = val.trim();

          break;
        case "brightness":
          attarr["brightness"] = val;
          break;
      }
    }

    //this.checkVariables(this, attarr)
    this.setVariableValues(attarr);
    this.checkFeedbacks();
  }

  // When module gets deleted
  async destroy() {
    // Remove TCP Server and close all connections
  }
  // Initalize module
  async init(config) {
    this.config = config;

    if (Number(this.config.authmethod) == 1) {
      this.config.authtext = { digestAuth: `root:werken` };
    } else {
      this.config.authtext = { auth: `root:werken` };
    }

    this.data = {
      debug: false,
      modelTCP: "NaN",
      model: "Auto",
      series: "Auto",
      name: "NaN",
      version: "NaN",
      error: "NaN",
      power: "NaN",
      ins: "NaN",
      tally: "NaN",
      oaf: "NaN",
      irisMode: "NaN",
      recallModePset: "NaN",
    };

    this.ptSpeed = 25;
    this.ptSpeedIndex = 25;
    this.zSpeed = 25;
    this.zSpeedIndex = 25;
    this.fSpeed = 25;
    this.fSpeedIndex = 25;

    this.config.host = this.config.host || "";
    this.config.httpPort = this.config.httpPort || 80;
    this.config.tcpPort = this.config.tcpPort || 31004;

    this.config.authmethod = this.config.authmethod || 0;

    this.updateStatus(InstanceStatus.Connecting);

    //	this.init_tcp()
    this.init_actions(); // export actions
    this.init_presets();
    this.init_variables();
    this.init_feedbacks();
    this.getCameraInformation();
    this.getCameraPosition();
    //  this.checkVariables();

    this.checkFeedbacks();
  }
  // Update module after a config change
  async configUpdated(config) {
    this.config = config;
    this.updateStatus(InstanceStatus.Connecting);
    if (Number(this.config.authmethod) == 1) {
      this.config.authtext = { digestAuth: `root:werken` };
    } else {
      this.config.authtext = { auth: `root:werken` };
    }

    //	this.init_tcp()
    this.init_actions(); // export actions
    this.init_presets();
    this.init_variables();
    this.init_feedbacks();
    //   this.checkVariables();
    this.getCameraInformation();
    this.getCameraPosition();

    this.checkFeedbacks();
  }

  // Return config fields for web config
  getConfigFields() {
    return ConfigFields;
  }

  // ##########################
  // #### Instance Presets ####
  // ##########################
  init_presets() {
    this.setPresetDefinitions(getPresetDefinitions(this));
  }
  // ############################
  // #### Instance Variables ####
  // ############################
  init_variables() {
    this.setVariableDefinitions(setVariables(this));
  }
  // Setup Initial Values
  checkVariables() {
    checkVariables(this);
  }
  // ############################
  // #### Instance Feedbacks ####
  // ############################
  init_feedbacks() {
    this.setFeedbackDefinitions(getFeedbackDefinitions(this));
  }

  init_actions() {
    this.setActionDefinitions(getActionDefinitions(this));
  }
}

runEntrypoint(axisPTZInstance, UpgradeScripts);
