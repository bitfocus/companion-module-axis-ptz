module.exports = {

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
	getFeedbacks(i) {
		var feedbacks = {};
		var self =i;


		feedbacks['autofocus'] = {
			label: 'AutoFocus',
			description: 'When autofocos is off, the background will change',
			options: [
				{
					type: 'colorpicker',
					label: 'Foreground color',
					id: 'fg',
					default: self.rgb(255, 255, 255)

				},
				{
					type: 'colorpicker',
					label: 'Background color',
					id: 'bg',
					default: self.rgb(255, 0, 0)
				}
			],
			callback: (feedback, bank) => {
				var str
				self.getVariable('autofocus', function(res) {
					str = res
				})
				//self.log('debug', 'feedback: '+str)
				if (str === 'off') {
					//self.log('debug', 'feedback result: '+str)
					return{
						color: feedback.options.fg,
						bgcolor: feedback.options.bg
					}
					
				};
			}
		};
		feedbacks['MaxPanLimit'] = {
			label: 'MaxPanLimit',
			description: 'When de camera reaches the upper PanLimit the background changes color',
			options: [
				{
					type: 'colorpicker',
					label: 'Foreground color',
					id: 'fg',
					default: self.rgb(255, 255, 255)

				},
				{
					type: 'colorpicker',
					label: 'Background color',
					id: 'bg',
					default: self.rgb(255, 0, 0)
				}
			],
			callback: (feedback, bank) => {
				var maxpan
				self.getVariable('MaxPan', function(res) {
					maxpan = Number(res)-1
				})
				//self.log('debug', 'feedback: '+maxpan)
				var pan
				self.getVariable('pan', function(res) {
					pan = Number(res)
				})
				//('debug', 'feedback: '+pan)

				if (pan > maxpan) {
					return {
						color: feedback.options.fg,
						bgcolor: feedback.options.bg
					};
				}
			}
		};
		feedbacks['MinPanLimit'] = {
				label: 'MinPanLimit',
				description: 'When de camera reaches the lower PanLimit the background changes color',
				options: [
					{
						type: 'colorpicker',
						label: 'Foreground color',
						id: 'fg',
						default: self.rgb(255, 255, 255)
	
					},
					{
						type: 'colorpicker',
						label: 'Background color',
						id: 'bg',
						default: self.rgb(255, 0, 0)
					}
				],
			callback: (feedback, bank) => {
				var minpan
				self.getVariable('MinPan', function(res) {
					minpan = Number(res)+1
				})
				//self.log('debug', 'feedback minpan: '+minpan)
				var pan
				self.getVariable('pan', function(res) {
					pan = Number(res)
				})
				//self.log('debug', 'feedback: '+pan)

				if (pan < minpan) {
					return {
						color: feedback.options.fg,
						bgcolor: feedback.options.bg
					};
				}
			}
		};
		feedbacks['MaxTiltLimit'] = {
			label: 'MaxTiltLimit',
			description: 'When de camera reaches the upper TiltLimit the background changes color',
			options: [
				{
					type: 'colorpicker',
					label: 'Foreground color',
					id: 'fg',
					default: self.rgb(255, 255, 255)

				},
				{
					type: 'colorpicker',
					label: 'Background color',
					id: 'bg',
					default: self.rgb(255, 0, 0)
				}
			],
			callback: (feedback, bank) => {
				var maxtilt
				self.getVariable('MaxTilt', function(res) {
					maxtilt = Number(res)-1
				})
				//self.log('debug', 'feedback maxtilt: '+maxtilt)
				var tilt
				self.getVariable('tilt', function(res) {
					tilt = Number(res)
				})
				//self.log('debug', 'feedback tilt: '+tilt)

				if (tilt > maxtilt) {
					return {
						color: feedback.options.fg,
						bgcolor: feedback.options.bg
					};
				}
			}
		};
		feedbacks['MinTiltLimit'] = {
			label: 'MinTiltLimit',
			description: 'When de camera reaches the lower TiltLimit the background changes color',
			options: [
				{
					type: 'colorpicker',
					label: 'Foreground color',
					id: 'fg',
					default: self.rgb(255, 255, 255)

				},
				{
					type: 'colorpicker',
					label: 'Background color',
					id: 'bg',
					default: self.rgb(255, 0, 0)
				}
			],
			callback: (feedback, bank) => {
				var mintilt
				self.getVariable('MinTilt', function(res) {
					mintilt = Number(res)+1
				})
				//self.log('debug', 'feedback mintilt: '+mintilt)
				var tilt
				self.getVariable('tilt', function(res) {
					tilt = Number(res)
				})
				//self.log('debug', 'feedback tilt: '+tilt)

				if (tilt < mintilt) {
					return {
						color: feedback.options.fg,
						bgcolor: feedback.options.bg
					};
				}
			}
		};
		feedbacks['MinZoomLimit'] = {
			label: 'MinZoomLimit',
			description: 'When de camera reaches the lower ZoomLimit the background changes color',
			options: [
				{
					type: 'colorpicker',
					label: 'Foreground color',
					id: 'fg',
					default: self.rgb(255, 255, 255)

				},
				{
					type: 'colorpicker',
					label: 'Background color',
					id: 'bg',
					default: self.rgb(255, 0, 0)
				}
			],
			callback: (feedback, bank) => {
				
				//self.log('debug', 'feedback mintilt: '+mintilt)
				var zoom
				self.getVariable('zoom', function(res) {
					zoom = Number(res)
				})
				//self.log('debug', 'feedback tilt: '+tilt)

				if (zoom == 1) {
					return {
						color: feedback.options.fg,
						bgcolor: feedback.options.bg
					};
				}
			}
		};
		feedbacks['MaxZoomLimit'] = {
			label: 'MaxZoomLimit',
			description: 'When de camera reaches the upper ZoomLimit the background changes color',
			options: [
				{
					type: 'colorpicker',
					label: 'Foreground color',
					id: 'fg',
					default: self.rgb(255, 255, 255)

				},
				{
					type: 'colorpicker',
					label: 'Background color',
					id: 'bg',
					default: self.rgb(255, 0, 0)
				}
			],
			callback: (feedback, bank) => {
				var maxzoom
				self.getVariable('MaxZoom', function(res) {
					maxzoom = Number(res)
				})
				//self.log('debug', 'feedback mintilt: '+mintilt)
				var zoom
				self.getVariable('zoom', function(res) {
					zoom = Number(res)
				})
				//self.log('debug', 'feedback tilt: '+tilt)

				if (zoom == maxzoom) {
					return {
						color: feedback.options.fg,
						bgcolor: feedback.options.bg
					};
				}
			}
		};
		feedbacks['MaxFocusLimit'] = {
			label: 'MaxFocusLimit',
			description: 'When de camera reaches the upper FocusLimit the background changes color',
			options: [
				{
					type: 'colorpicker',
					label: 'Foreground color',
					id: 'fg',
					default: self.rgb(255, 255, 255)

				},
				{
					type: 'colorpicker',
					label: 'Background color',
					id: 'bg',
					default: self.rgb(255, 0, 0)
				}
			],
			callback: (feedback, bank) => {
				var maxfocus
				self.getVariable('MaxFocus', function(res) {
					maxfocus = Number(res)
				})
				self.log('debug', 'feedback minfocus: '+maxfocus)
				var focus
				self.getVariable('focus', function(res) {
					focus = Number(res)
				})
				self.log('debug', 'feedback focus: '+focus)

				if (focus == maxfocus) {
					return {
						color: feedback.options.fg,
						bgcolor: feedback.options.bg
					};
				}
			}
		};
		feedbacks['MinFocusLimit'] = {
			label: 'MinFocusLimit',
			description: 'When de camera reaches the lower FocusLimit the background changes color',
			options: [
				{
					type: 'colorpicker',
					label: 'Foreground color',
					id: 'fg',
					default: self.rgb(255, 255, 255)

				},
				{
					type: 'colorpicker',
					label: 'Background color',
					id: 'bg',
					default: self.rgb(255, 0, 0)
				}
			],
			callback: (feedback, bank) => {
				var minfocus
				self.getVariable('MinFocus', function(res) {
					minfocus = Number(res)
				})
				self.log('debug', 'feedback minfocus: '+minfocus)
				var focus
				self.getVariable('focus', function(res) {
					focus = Number(res)
				})
				self.log('debug', 'feedback focus: '+focus)

				if (focus == minfocus) {
					return {
						color: feedback.options.fg,
						bgcolor: feedback.options.bg
					};
				}
			}
		};
		feedbacks['streaming'] = {
			label: 'Change background when streaming',
			description: 'When camera is streaming, background color will change',
			options: [
				{
					type: 'colorpicker',
					label: 'Foreground color',
					id: 'fg',
					default: self.rgb(255, 255, 255)

				},
				{
					type: 'colorpicker',
					label: 'Background color',
					id: 'bg',
					default: self.rgb(255, 0, 0)
				}
			],
			callback: (feedback, bank) => {
				if (self.streaming == 1) {
					return {
						color: feedback.options.fg,
						bgcolor: feedback.options.bg
					};
				}
			}
		};

		feedbacks['tally_PGM'] = {
			label: 'Tally on PGM',
			description: 'When the camera tally is on, change background color',
			options: [
				{
					type: 'colorpicker',
					label: 'Foreground color',
					id: 'fg',
					default: self.rgb(255, 255, 255)

				},
				{
					type: 'colorpicker',
					label: 'Background color',
					id: 'bg',
					default: self.rgb(255, 0, 0)
				}
			],
			callback: (feedback, bank) => {
				if (self.tally == 'Program') {
					return {
						color: feedback.options.fg,
						bgcolor: feedback.options.bg
					};
				}
			}
		};

		feedbacks['tally_PVW'] = {
			label: 'Tally on PVW',
			description: 'When the camera tally is on, change background color',
			options: [
				{
					type: 'colorpicker',
					label: 'Foreground color',
					id: 'fg',
					default: self.rgb(0, 0, 0)

				},
				{
					type: 'colorpicker',
					label: 'Background color',
					id: 'bg',
					default: self.rgb(250, 255, 0)
				}
			],
			callback: (feedback, bank) => {
				if (self.tally == "Preview") {
					return {
						color: feedback.options.fg,
						bgcolor: feedback.options.bg
					};
				}
			}
		};

		return feedbacks;
	}
}
