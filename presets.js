//var { MODELS, SERIES_SPECS } = require('./models.js');
const c = require('./choices')

module.exports = {
	setPresets: function (i) {
		var self = i
		var presets = []
		var SERIES = {}

		
		var s = {}
		

		// ##########################
		// #### Pan/Tilt Presets ####
		// ##########################
		s.panTilt = true
		if (s.panTilt == true) {
			presets.push({
				category: 'Pan/Tilt',
				label: 'UP',
				bank: {
					style: 'png',
					text: '',
					png64: self.ICON_UP,
					pngalignment: 'center:center',
					size: 'auto',
					color: '16777215',
					bgcolor: self.rgb(0, 0, 0),
				},
				actions: [
					{
						action: 'up',
						options: {
							speed: 25,
						},
					},
				],
				release_actions: [
					{
						action: 'stop',
					},
				],
				feedbacks: [
					{
						type: 'MaxTiltLimit',
						options: {
							fg: self.rgb(255, 255, 255),
							bg: self.rgb(255, 0, 0),
						}
					},

				],
			})

			presets.push({
				category: 'Pan/Tilt',
				label: 'DOWN',
				bank: {
					style: 'png',
					text: '',
					png64: self.ICON_DOWN,
					pngalignment: 'center:center',
					size: 'auto',
					color: '16777215',
					bgcolor: self.rgb(0, 0, 0),
				},
				actions: [
					{
						action: 'down',
						options: {
							speed: 25,
						},
					},
				],
				release_actions: [
					{
						action: 'stop',
					},
				],
				feedbacks: [
					{
						type: 'MinTiltLimit',
						options: {
							fg: self.rgb(255, 255, 255),
							bg: self.rgb(255, 0, 0),
						}
					},

				],
			})

			presets.push({
				category: 'Pan/Tilt',
				label: 'LEFT',
				bank: {
					style: 'png',
					text: '',
					png64: self.ICON_LEFT,
					pngalignment: 'center:center',
					size: 'auto',
					color: '16777215',
					bgcolor: self.rgb(0, 0, 0),
				},
				actions: [
					{
						action: 'left',
						options: {
							speed: 25,
						},
					},
				],
				release_actions: [
					{
						action: 'stop',
					},
				],
				feedbacks: [
					{
						type: 'MinPanLimit',
						options: {
							fg: self.rgb(255, 255, 255),
							bg: self.rgb(255, 0, 0),
						}
					},

				],
			})

			presets.push({
				category: 'Pan/Tilt',
				label: 'RIGHT',
				bank: {
					style: 'png',
					text: '',
					png64: self.ICON_RIGHT,
					pngalignment: 'center:center',
					size: 'auto',
					color: '16777215',
					bgcolor: self.rgb(0, 0, 0),
				},
				actions: [
					{
						action: 'right',
						options: {
							speed: 25,
						},
					},
				],
				release_actions: [
					{
						action: 'stop',
					},
				],
				feedbacks: [
					{
						type: 'MaxPanLimit',
						options: {
							fg: self.rgb(255, 255, 255),
							bg: self.rgb(255, 0, 0),
						}
					},

				],
			})

			presets.push({
				category: 'Pan/Tilt',
				label: 'UP RIGHT',
				bank: {
					style: 'png',
					text: '',
					png64: self.ICON_UP_RIGHT,
					pngalignment: 'center:center',
					size: 'auto',
					color: '16777215',
					bgcolor: self.rgb(0, 0, 0),
				},
				actions: [
					{
						action: 'upright',
						options: {
							speed: 25,
						},
					},
				],
				release_actions: [
					{
						action: 'stop',
					},
				],
				feedbacks: [
					{
						type: 'MaxTiltLimit',
						options: {
							fg: self.rgb(255, 255, 255),
							bg: self.rgb(255, 0, 0),
						}
					},
					{
						type: 'MaxPanLimit',
						options: {
							fg: self.rgb(255, 255, 255),
							bg: self.rgb(255, 0, 0),
						}
					},


				],
			})

			presets.push({
				category: 'Pan/Tilt',
				label: 'UP LEFT',
				bank: {
					style: 'png',
					text: '',
					png64: self.ICON_UP_LEFT,
					pngalignment: 'center:center',
					size: 'auto',
					color: '16777215',
					bgcolor: self.rgb(0, 0, 0),
				},
				actions: [
					{
						action: 'upleft',
						options: {
							speed: 25,
						},
					},
				],
				release_actions: [
					{
						action: 'stop',
					},
				],
				feedbacks: [
					{
						type: 'MaxTiltLimit',
						options: {
							fg: self.rgb(255, 255, 255),
							bg: self.rgb(255, 0, 0),
						}
					},
					{
						type: 'MinPanLimit',
						options: {
							fg: self.rgb(255, 255, 255),
							bg: self.rgb(255, 0, 0),
						}
					},


				],
			})

			presets.push({
				category: 'Pan/Tilt',
				label: 'DOWN LEFT',
				bank: {
					style: 'png',
					text: '',
					png64: self.ICON_DOWN_LEFT,
					pngalignment: 'center:center',
					size: 'auto',
					color: '16777215',
					bgcolor: self.rgb(0, 0, 0),
				},
				actions: [
					{
						action: 'downleft',
						options: {
							speed: 25,
						},
					},
				],
				release_actions: [
					{
						action: 'stop',
					},
				],
				feedbacks: [
					{
						type: 'MinTiltLimit',
						options: {
							fg: self.rgb(255, 255, 255),
							bg: self.rgb(255, 0, 0),
						}
					},
					{
						type: 'MinPanLimit',
						options: {
							fg: self.rgb(255, 255, 255),
							bg: self.rgb(255, 0, 0),
						}
					},


				],
			})

			presets.push({
				category: 'Pan/Tilt',
				label: 'DOWN RIGHT',
				bank: {
					style: 'png',
					text: '',
					png64: self.ICON_DOWN_RIGHT,
					pngalignment: 'center:center',
					size: 'auto',
					color: '16777215',
					bgcolor: self.rgb(0, 0, 0),
				},
				actions: [
					{
						action: 'downright',
						options: {
							speed: 25,
						},
					},
				],
				release_actions: [
					{
						action: 'stop',
					},
				],
				feedbacks: [
					{
						type: 'MinTiltLimit',
						options: {
							fg: self.rgb(255, 255, 255),
							bg: self.rgb(255, 0, 0),
						}
					},
					{
						type: 'MaxPanLimit',
						options: {
							fg: self.rgb(255, 255, 255),
							bg: self.rgb(255, 0, 0),
						}
					},


				],
			})

			presets.push({
				category: 'Pan/Tilt',
				label: 'Home',
				bank: {
					style: 'text',
					text: 'HOME',
					size: 'auto',
					color: '16777215',
					bgcolor: self.rgb(0, 0, 0),
				},
				actions: [
					{
						action: 'home',
					},
				],
			})
		}

		
		s.zoom = true
		if (s.zoom == true) {
			presets.push({
				category: 'Lens',
				label: 'Zoom In',
				bank: {
					style: 'text',
					text: 'ZOOM\\nIN',
					size: 'auto',
					color: '16777215',
					bgcolor: self.rgb(0, 0, 0),
				},
				actions: [
					{
						action: 'zoomI',
						options: {
							speed: 10,
						},
					},
				],
				release_actions: [
					{
						action: 'zoomstop',
					},
				],
				feedbacks: [
					{
						type: 'MaxZoomLimit',
						options: {
							fg: self.rgb(255, 255, 255),
							bg: self.rgb(255, 0, 0),
						}
					},
					{
						type: 'MinZoomLimit',
						options: {
							fg: self.rgb(255, 255, 255),
							bg: self.rgb(255, 0, 0),
						}
					},

				],
			})

			presets.push({
				category: 'Lens',
				label: 'Zoom Out',
				bank: {
					style: 'text',
					text: 'ZOOM\\nOUT',
					size: 'auto',
					color: '16777215',
					bgcolor: self.rgb(0, 0, 0),
				},
				actions: [
					{
						action: 'zoomO',
						options: {
							speed: 10,
						},
					},
				],
				release_actions: [
					{
						action: 'zoomstop',
					},
				],
				feedbacks: [
					{
						type: 'MaxZoomLimit',
						options: {
							fg: self.rgb(255, 255, 255),
							bg: self.rgb(255, 0, 0),
						}
					},
					{
						type: 'MinZoomLimit',
						options: {
							fg: self.rgb(255, 255, 255),
							bg: self.rgb(255, 0, 0),
						}
					},

				],
			})
		}

		


		

		s.OAF = true
		if (s.OAF == true) {
			presets.push({
				category: 'Lens',
				label: 'Manual Focus',
				bank: {
					style: 'text',
					text: 'MANUAL\\nFOCUS',
					size: 'auto',
					color: '16777215',
					bgcolor: self.rgb(0, 0, 0),
				},
				actions: [
					{
						action: 'setAutoFocus',
						options: {
							switchonoff: 'off',
						},
					},
				],
				feedbacks: [
					{
						type: 'autofocus',
						options: {
							switchonoff: '0',
						},
					},
				],
			})

			presets.push({
				category: 'Lens',
				label: 'Auto Focus',
				bank: {
					style: 'text',
					text: 'AUTO\\nFOCUS',
					size: 'auto',
					color: '16777215',
					bgcolor: self.rgb(0, 0, 0),
				},
				actions: [
					{
						action: 'setAutoFocus',
						options: {
							switchonoff: 'on',
						},
					},
				],
				feedbacks: [
					{
						type: 'autofocus',
						options: {
							option: '1',
						},
					},
				],
			})
			presets.push({
				category: 'Lens',
				label: 'Focus Adjust',
				bank: {
					style: 'text',
					text: 'AJUST\\nFOCUS',
					size: 'auto',
					color: '16777215',
					bgcolor: self.rgb(0, 0, 0),
				},
				actions: [
					{
						action: 'Focus',
						options: {
							steps: 50,
						},
					},
				],
				feedbacks: [
					{
						type: 'MaxFocusLimit',
						options: {
							fg: self.rgb(255, 255, 255),
							bg: self.rgb(255, 0, 0),
						}
					},
					{
						type: 'MinFocusLimit',
						options: {
							fg: self.rgb(255, 255, 255),
							bg: self.rgb(255, 0, 0),
						}
					},

				],
				
			})
			presets.push({
				category: 'Lens',
				label: 'Continous Focus Move',
				bank: {
					style: 'text',
					text: 'CNT Focus\\nMOVE',
					size: 'auto',
					color: '16777215',
					bgcolor: self.rgb(0, 0, 0),
				},
				actions: [
					{
						action: 'ContinousFocusMove',
						options: {
							steps: 0,
						},
					},
				],
				release_actions: [
					{
						action: 'ContinousFocusMove',
						options: {
							steps: 0,
						},
					},
				],
				feedbacks: [
					{
						type: 'MaxFocusLimit',
						options: {
							fg: self.rgb(255, 255, 255),
							bg: self.rgb(255, 0, 0),
						}
					},
					{
						type: 'MinFocusLimit',
						options: {
							fg: self.rgb(255, 255, 255),
							bg: self.rgb(255, 0, 0),
						}
					},

				],
				
			})
			
		}

		// ##########################
		// #### Exposure Presets ####
		// ##########################

		s.iris = false
		if (s.iris == true) {
			presets.push({
				category: 'Exposure',
				label: 'Iris Up',
				bank: {
					style: 'text',
					text: 'IRIS\\nUP',
					size: 'auto',
					color: '16777215',
					bgcolor: self.rgb(0, 0, 0),
				},
				actions: [
					{
						action: 'irisU',
					},
				],
			})

			presets.push({
				category: 'Exposure',
				label: 'Iris Down',
				bank: {
					style: 'text',
					text: 'IRIS\\nDOWN',
					size: 'auto',
					color: '16777215',
					bgcolor: self.rgb(0, 0, 0),
				},
				actions: [
					{
						action: 'irisD',
					},
				],
			})

			presets.push({
				category: 'Exposure',
				label: 'Manual Iris',
				bank: {
					style: 'text',
					text: 'MANUAL\\nIRIS',
					size: '13',
					color: '16777215',
					bgcolor: self.rgb(0, 0, 0),
				},
				actions: [
					{
						action: 'irisM',
						options: {
							bol: 1,
						},
					},
				],
				feedbacks: [
					{
						type: 'autoIris',
						options: {
							option: '0',
						},
					},
				],
			})

			presets.push({
				category: 'Exposure',
				label: 'Auto Iris',
				bank: {
					style: 'text',
					text: 'AUTO\\nIRIS',
					size: '13',
					color: '16777215',
					bgcolor: self.rgb(0, 0, 0),
				},
				actions: [
					{
						action: 'irisM',
						options: {
							bol: 0,
						},
					},
				],
				feedbacks: [
					{
						type: 'autoIris',
						options: {
							option: '1',
						},
					},
				],
			})
		}

		s.gain = false
		if (s.gain.cmd) {
			presets.push({
				category: 'Exposure',
				label: 'Gain Up',
				bank: {
					style: 'text',
					text: 'GAIN\\nUP',
					size: 'auto',
					color: '16777215',
					bgcolor: self.rgb(0, 0, 0),
				},
				actions: [
					{
						action: 'gainU',
					},
				],
			})

			presets.push({
				category: 'Exposure',
				label: 'Gain Down',
				bank: {
					style: 'text',
					text: 'GAIN\\nDOWN',
					size: 'auto',
					color: '16777215',
					bgcolor: self.rgb(0, 0, 0),
				},
				actions: [
					{
						action: 'gainD',
					},
				],
			})
		}

		s.shutcmd = false
		if (s.shutcmd) {
			presets.push({
				category: 'Exposure',
				label: 'Shutter Up',
				bank: {
					style: 'text',
					text: 'Shut\\nUP',
					size: 'auto',
					color: '16777215',
					bgcolor: self.rgb(0, 0, 0),
				},
				actions: [
					{
						action: 'shutU',
					},
				],
			})

			presets.push({
				category: 'Exposure',
				label: 'Shutter Down',
				bank: {
					style: 'text',
					text: 'Shut\\nDOWN',
					size: 'auto',
					color: '16777215',
					bgcolor: self.rgb(0, 0, 0),
				},
				actions: [
					{
						action: 'shutD',
					},
				],
			})
		}

		s.pedcmd = false
		if (s.pedcmd) {
			presets.push({
				category: 'Exposure',
				label: 'Pedestal Up',
				bank: {
					style: 'text',
					text: 'Pedestal\\nUP',
					size: '13',
					color: '16777215',
					bgcolor: self.rgb(0, 0, 0),
				},
				actions: [
					{
						action: 'pedU',
					},
				],
			})

			presets.push({
				category: 'Exposure',
				label: 'Pedestal Down',
				bank: {
					style: 'text',
					text: 'Pedestal\\nDOWN',
					size: '13',
					color: '16777215',
					bgcolor: self.rgb(0, 0, 0),
				},
				actions: [
					{
						action: 'pedD',
					},
				],
			})
		}

		// ########################
		// #### System Presets ####
		// ########################

		s.power = false
		if (s.power == true) {
			presets.push({
				category: 'System',
				label: 'Power Off',
				bank: {
					style: 'text',
					text: 'Power\\nOFF',
					size: 'auto',
					color: '16777215',
					bgcolor: self.rgb(0, 0, 0),
				},
				actions: [
					{
						action: 'powerOff',
					},
				],
				feedbacks: [
					{
						type: 'powerState',
						options: {
							option: '0',
						},
					},
				],
			})

			presets.push({
				category: 'System',
				label: 'Power On',
				bank: {
					style: 'text',
					text: 'Power\\nON',
					size: 'auto',
					color: '16777215',
					bgcolor: self.rgb(0, 0, 0),
				},
				actions: [
					{
						action: 'powerOn',
					},
				],
				feedbacks: [
					{
						type: 'powerState',
						options: {
							option: '1',
						},
					},
				],
			})
		}

		s.tally = false
		if (s.tally == true) {
			presets.push({
				category: 'System',
				label: 'Tally Off',
				bank: {
					style: 'text',
					text: 'Tally\\nOFF',
					size: 'auto',
					color: '16777215',
					bgcolor: self.rgb(0, 0, 0),
				},
				actions: [
					{
						action: 'tallyOff',
					},
				],
				feedbacks: [
					{
						type: 'tallyState',
						options: {
							option: '0',
						},
					},
				],
			})

			presets.push({
				category: 'System',
				label: 'Tally On',
				bank: {
					style: 'text',
					text: 'Tally\\nON',
					size: 'auto',
					color: '16777215',
					bgcolor: self.rgb(0, 0, 0),
				},
				actions: [
					{
						action: 'tallyOn',
					},
				],
				feedbacks: [
					{
						type: 'tallyState',
						options: {
							option: '1',
						},
					},
				],
			})
		}

		s.ins = false
		if (s.ins == true) {
			presets.push({
				category: 'System',
				label: 'INS Desktop',
				bank: {
					style: 'text',
					text: 'INS\\nDesk',
					size: 'auto',
					color: '16777215',
					bgcolor: self.rgb(0, 0, 0),
				},
				actions: [
					{
						action: 'insPosition',
						options: {
							position: 0,
						},
					},
				],
				feedbacks: [
					{
						type: 'insState',
						options: {
							option: '0',
						},
					},
				],
			})

			presets.push({
				category: 'System',
				label: 'INS Hanging',
				bank: {
					style: 'text',
					text: 'INS\\nHang',
					size: 'auto',
					color: '16777215',
					bgcolor: self.rgb(0, 0, 0),
				},
				actions: [
					{
						action: 'insPosition',
						options: {
							position: 1,
						},
					},
				],
				feedbacks: [
					{
						type: 'insState',
						options: {
							option: '1',
						},
					},
				],
			})
		}

		s.sdcard = false
		if (s.sdCard == true) {
			presets.push({
				category: 'System',
				label: 'SD Card Recording Start',
				bank: {
					style: 'text',
					text: 'SD Card\\nRecording\\nStart',
					size: '13',
					color: '16777215',
					bgcolor: self.rgb(0, 0, 0),
				},
				actions: [
					{
						action: 'sdCardRec',
						options: {
							value: 'start',
						},
					},
				],
			})

			presets.push({
				category: 'System',
				label: 'SD Card Recording Stop',
				bank: {
					style: 'text',
					text: 'SD Card\\nRecording\\nStop',
					size: '13',
					color: '16777215',
					bgcolor: self.rgb(0, 0, 0),
				},
				actions: [
					{
						action: 'sdCardRec',
						options: {
							value: 'end',
						},
					},
				],
			})
		}
		// ###########################
		// #### Load/save Presets ####
		// ###########################

		s.preset = true
		if (s.preset == true) {
			for (var save = 1; save < 100; save++) {
				presets.push({
					category: 'Save Preset',
					label: 'Save Preset ' + parseInt(save),
					bank: {
						style: 'text',
						text: 'SAVE\\nPSET\\n' + parseInt(save),
						size: '13',
						color: '16777215',
						bgcolor: self.rgb(0, 0, 0),
					},
					actions: [
						{
							action: 'Setpreset',
							options: {
								preset: save,
							},
						},
					],
				})
			}
		}

		s.timePset = false
		if (s.timePset == true) {
			presets.push({
				category: 'Recall Preset',
				label: 'Preset Mode Speed',
				bank: {
					style: 'text',
					text: 'PRESET\\nMODE\\nSPEED',
					size: '13',
					color: '16777215',
					bgcolor: self.rgb(0, 0, 0),
				},
				actions: [
					{
						action: 'modePset',
						options: {
							mode: 0,
						},
					},
				],
			})

			presets.push({
				category: 'Recall Preset',
				label: 'Preset Mode Time',
				bank: {
					style: 'text',
					text: 'PRESET\\nMODE\\nTIME',
					size: '13',
					color: '16777215',
					bgcolor: self.rgb(0, 0, 0),
				},
				actions: [
					{
						action: 'modePset',
						options: {
							mode: 1,
						},
					},
				],
			})
		}

		s.speedPset = false
		if (s.speedPset == true) {
			presets.push({
				category: 'Recall Preset',
				label: 'Set Recall Speed High',
				bank: {
					style: 'text',
					text: 'RECALL\\nSPEED\\nHIGH',
					size: '13',
					color: '16777215',
					bgcolor: self.rgb(0, 0, 0),
				},
				actions: [
					{
						action: 'speedPset',
						options: {
							speed: 25,
						},
					},
				],
			})

			presets.push({
				category: 'Recall Preset',
				label: 'Set Recall Speed Mid',
				bank: {
					style: 'text',
					text: 'RECALL\\nSPEED\\nMID',
					size: '13',
					color: '16777215',
					bgcolor: self.rgb(0, 0, 0),
				},
				actions: [
					{
						action: 'speedPset',
						options: {
							speed: 15,
						},
					},
				],
			})

			presets.push({
				category: 'Recall Preset',
				label: 'Set Recall Speed Low',
				bank: {
					style: 'text',
					text: 'RECALL\\nSPEED\\nLOW',
					size: '13',
					color: '16777215',
					bgcolor: self.rgb(0, 0, 0),
				},
				actions: [
					{
						action: 'speedPset',
						options: {
							speed: 5,
						},
					},
				],
			})
		}

		s.timePset = false
		if (s.timePset == true) {
			presets.push({
				category: 'Recall Preset',
				label: 'Set Recall Time High',
				bank: {
					style: 'text',
					text: 'RECALL\\nTIME\\n5 Sec',
					size: '13',
					color: '16777215',
					bgcolor: self.rgb(0, 0, 0),
				},
				actions: [
					{
						action: 'speedPset',
						options: {
							speed: 5,
						},
					},
				],
			})

			presets.push({
				category: 'Recall Preset',
				label: 'Set Recall Time Mid',
				bank: {
					style: 'text',
					text: 'RECALL\\nTIME\\n10 Sec',
					size: '13',
					color: '16777215',
					bgcolor: self.rgb(0, 0, 0),
				},
				actions: [
					{
						action: 'speedPset',
						options: {
							speed: 10,
						},
					},
				],
			})

			presets.push({
				category: 'Recall Preset',
				label: 'Set Recall Time Low',
				bank: {
					style: 'text',
					text: 'RECALL\\nTIME\\n30 Sec',
					size: '13',
					color: '16777215',
					bgcolor: self.rgb(0, 0, 0),
				},
				actions: [
					{
						action: 'speedPset',
						options: {
							speed: 30,
						},
					},
				],
			})
		}

		s.preset = true
		if (s.preset == true) {
			for (var recall = 1; recall < 100; recall++) {
				presets.push({
					category: 'Recall Preset',
					label: 'Recall Preset ' + parseInt(recall),
					bank: {
						style: 'text',
						text: 'preset ' + parseInt(recall),
						size: '13',
						color: '16777215',
						bgcolor: self.rgb(0, 0, 0),
					},
					actions: [
						{
							action: 'preset',
							options: {
								preset: recall,
							},
						},
					],
				})
			}
		}

		return presets
	},
}
