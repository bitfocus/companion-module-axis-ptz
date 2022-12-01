

module.exports = {
	// ##########################
	// #### Define Variables ####
	// ##########################
	setVariables: function (i) {
		var self = i
		var variables = []
		var SERIES = {}

		// Set the model and series selected, if in auto, dettect what model is connected via TCP
		

		// Find the specific commands for a given series
		
		// console.log(SERIES);

		// console.log('variable set');
		// console.log(self.config.model);
		// console.log(self.data.model);
		// console.log(self.data.modelTCP);
		// console.log(self.data.series);
		variables.push({ name: 'root.Brand.ProdShortName', label: 'root.Brand.ProdShortName'})
		variables.push({ name: 'autofocus', label: 'AutoFocus' })
		variables.push({ name: 'MaxPan', label: 'MaxPan' })
        variables.push({ name: 'MinPan', label: 'MinPan' })
		variables.push({ name: 'MaxTilt', label: 'Maxtilt' })
        variables.push({ name: 'MinTilt', label: 'Mintilt' })
		
		variables.push({ name: 'MaxZoom', label: 'MaxZoom' })
		variables.push({ name: 'MaxFocus', label: 'Maxfocus' })
		variables.push({ name: 'MinFocus', label: 'MinFocus' })
       
		variables.push({ name: 'pan', label: 'Current Pan Position' })
		variables.push({ name: 'tilt', label: 'Current Tilt Position' })
		
		variables.push({ name: 'zoom', label: 'Current Zoom Position' })
		variables.push({ name: 'focus', label: 'Current Focus Position' })
		variables.push({ name: 'speed', label: 'PTZ Speed' })
		return variables
	},

	// #########################
	// #### Check Variables ####
	// #########################
	checkVariables: function (i) {
		var self = i

		self.setVariable('series', self.data.series)
		self.setVariable('model', self.data.model)
		self.setVariable('name', self.data.name)
		self.setVariable('version', self.data.version)
		self.setVariable('error', self.data.error)
		self.setVariable('ins', self.data.ins)
		self.setVariable('power', self.data.power)
		self.setVariable('tally', self.data.tally)
		self.setVariable('OAF', self.data.oaf)
		self.setVariable('irisMode', self.data.irisMode)
		self.setVariable('presetMode', self.data.recallModePset)
		self.setVariable('ptSpeedVar', self.ptSpeed)
		self.setVariable('zSpeedVar', self.zSpeed)
		self.setVariable('fSpeedVar', self.fSpeed)
	},
    getVariableValue(name) {
		let _this = this;
		if (Object.prototype.hasOwnProperty.call(_this.variables.changes.values, name)) {
			return _this.variables.changes.values[name];
		}
		let variable = _this.variables.definitions[name];
		if (variable) {
			return variable.value;
		}
	},

    
}
