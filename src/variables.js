export function setVariables() {
  var variables = [];

  // Set the model and series selected, if in auto, dettect what model is connected via TCP

  // Find the specific commands for a given series

  // console.log(SERIES);

  // console.log('variable set');
  // console.log(self.config.model);
  // console.log(self.data.model);
  // console.log(self.data.modelTCP);
  // console.log(self.data.series);
  variables.push({ variableId: "CameraType", name: "Camera Type" });
  variables.push({ variableId: "autofocus", name: "AutoFocus" });
  variables.push({ variableId: "MaxPan", name: "MaxPan" });
  variables.push({ variableId: "MinPan", name: "MinPan" });
  variables.push({ variableId: "MaxTilt", name: "Maxtilt" });
  variables.push({ variableId: "MinTilt", name: "Mintilt" });

  variables.push({ variableId: "MaxZoom", name: "MaxZoom" });
  variables.push({ variableId: "MinZoom", name: "MinZoom" });
  variables.push({ variableId: "MaxFocus", name: "Maxfocus" });
  variables.push({ variableId: "MinFocus", name: "MinFocus" });

  variables.push({ variableId: "pan", name: "Current Pan Position" });
  variables.push({ variableId: "tilt", name: "Current Tilt Position" });

  variables.push({ variableId: "zoom", name: "Current Zoom Position" });
  variables.push({ variableId: "focus", name: "Current Focus Position" });
  variables.push({ variableId: "brightness", name: "Current Brightness" });
  variables.push({ variableId: "speed", name: "PTZ Speed" });

  return variables;
}

// #########################
// #### Check Variables ####
// #########################
export function checkVariables(self) {
  self.setVariableValues({
    series: self.data.series,
    model: self.data.model,
    name: self.data.name,
    version: self.data.version,
    error: self.data.error,
    ins: self.data.ins,
    power: self.data.power,
    tally: self.data.tally,
    OAF: self.data.oaf,
    irisMode: self.data.irisMode,
    presetMode: self.data.recallModePset,
    ptSpeedVar: self.ptSpeed,
    zSpeedVar: self.zSpeed,
    fSpeedVar: self.fSpeed,
  });
}
export function getVariableValue(name) {
  let _this = this;
  if (
    Object.prototype.hasOwnProperty.call(_this.variables.changes.values, name)
  ) {
    return _this.variables.changes.values[name];
  }
  let variable = _this.variables.definitions[name];
  if (variable) {
    return variable.value;
  }
}
