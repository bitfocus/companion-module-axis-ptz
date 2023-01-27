import { combineRgb } from "@companion-module/base";

// ##########################
// #### Define Feedbacks ####
// ##########################
export function getFeedbackDefinitions(self) {
  const feedbacks = {};

  const foregroundColor = combineRgb(255, 255, 255); // White
  const backgroundColorRed = combineRgb(255, 0, 0); // Red

  feedbacks.autoFocus = {
    type: "boolean",
    name: "Lens - Auto Focus State",
    description: "Indicate if Auto focus is ON or OFF",
    defaultStyle: {
      color: foregroundColor,
      bgcolor: backgroundColorRed,
    },
    options: [
      {
        type: "dropdown",
        label: "Indicate in X State",
        id: "option",
        default: "1",
        choices: [
          { id: "0", label: "Manual" },
          { id: "1", label: "Auto" },
        ],
      },
    ],
    callback: function (feedback) {
      const opt = feedback.options;
      const autofocus = self.getVariableValue("autofocus");

      switch (opt.option) {
        case "0":
          if (autofocus == "off") {
            return true;
          }
          break;
        case "1":
          if (autofocus == "on") {
            return true;
          }
          break;
        default:
          break;
      }
      return false;
    },
  };

  feedbacks.MaxPanLimit = {
    type: "boolean",
    name: "PT-MaxPan Limit",
    description:
      "When the camera reaches the max pan-linit the background changes color",
    defaultStyle: {
      color: foregroundColor,
      bgcolor: backgroundColorRed,
    },
    options: [],
    callback: function () {
      var maxpan;

      maxpan = Number(self.getVariableValue("MaxPan")) - 1;

      var pan;
      pan = Number(self.getVariableValue("pan"));

      if (pan > maxpan) {
        return true;
      }

      return false;
    },
  };
  feedbacks.MinPanLimit = {
    type: "boolean",
    name: "PT-MinPan Limit",
    description:
      "When the camera reaches the min (left) pan-linit the background changes color",
    defaultStyle: {
      color: foregroundColor,
      bgcolor: backgroundColorRed,
    },
    options: [],
    callback: function () {
      var minpan;
      minpan = self.getVariableValue("MinPan") + 1;

      var pan;
      pan = self.getVariableValue("pan");

      if (pan < minpan) {
        return true;
      }

      return false;
    },
  };
  feedbacks.MinTiltLimit = {
    type: "boolean",
    name: "PT-MinTiltLimit",
    description:
      "When the camera reaches the min (under) tilt-linit the background changes color",
    defaultStyle: {
      color: foregroundColor,
      bgcolor: backgroundColorRed,
    },
    options: [],
    callback: function () {
      var min;
      min = self.getVariableValue("MinTilt") + 1;

      var pos;
      pos = self.getVariableValue("tilt");

      if (pos < min) {
        return true;
      }

      return false;
    },
  };
  feedbacks.MaxTiltLimit = {
    type: "boolean",
    name: "PT-MaxTiltLimit",
    description:
      "When the camera reaches the max (upper) tilt-linit the background changes color",
    defaultStyle: {
      color: foregroundColor,
      bgcolor: backgroundColorRed,
    },
    options: [],
    callback: function () {
      var max;

      max = self.getVariableValue("MaxTilt") - 1;

      var pos;
      pos = self.getVariableValue("tilt");

      if (pos > max) {
        return true;
      }

      return false;
    },
  };
  feedbacks.maxfocus = {
    type: "boolean",
    name: "maxfocus",
    description:
      "When the camera reaches the maxfocus-linit the background changes color",
    defaultStyle: {
      color: foregroundColor,
      bgcolor: backgroundColorRed,
    },
    options: [],
    callback: function () {
      var max;

      max = self.getVariableValue("MaxFocus") - 1;

      var pos;
      pos = self.getVariableValue("focus");

      if (pos > max) {
        return true;
      }

      return false;
    },
  };
  feedbacks.minfocus = {
    type: "boolean",
    name: "minfocus",
    description:
      "When the camera reaches the minfocus-linit the background changes color",
    defaultStyle: {
      color: foregroundColor,
      bgcolor: backgroundColorRed,
    },
    options: [],
    callback: function () {
      var max;

      min = Number(self.getVariableValue("MinFocus")) - 1;

      var pos;
      pos = Number(self.getVariableValue("focus"));

      if (pos < min) {
        return true;
      }

      return false;
    },
  };

  feedbacks.maxzoom = {
    type: "boolean",
    name: "maxzoom",
    description:
      "When the camera reaches the maxzoom-linit the background changes color",
    defaultStyle: {
      color: foregroundColor,
      bgcolor: backgroundColorRed,
    },
    options: [],
    callback: function () {
      var max;

      max = Number(self.getVariableValue("MaxZoom")) - 1;

      var pos;
      pos = self.getVariableValue("zoom");

      if (pos > max) {
        return true;
      }

      return false;
    },
  };
  feedbacks.minzoom = {
    type: "boolean",
    name: "minzoom",
    description:
      "When the camera reaches the minzoom-linit the background changes color",
    defaultStyle: {
      color: foregroundColor,
      bgcolor: backgroundColorRed,
    },
    options: [],
    callback: function () {
      var min;

      min = Number(self.getVariableValue("MinZoom")) + 1;

      var pos;
      pos = self.getVariableValue("zoom");

      if (pos < min) {
        return true;
      }

      return false;
    },
  };
  return feedbacks;
}
