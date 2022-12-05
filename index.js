var instance_skel = require('../../instance_skel')
var request = require('request')
var tcp = require('../../tcp')

var presets = require('./presets')
var variables = require('./variables')
var feedbacks = require('./feedbacks')
const speeddefinition = {
	type: 'number',
	label: 'Speed',
	id: 'speed',
	min: 1,
	 max: 100,
	  default: 50,
	  step: 1,
	  required: true,
	  range: false
}

var debug
var switchonofftosend
var log
var instance_speed = 1

/**
 * Companion instance for Axis PTZ cameras.
 * @author Frans Bosman
 */



class instance extends instance_skel {
	constructor(system, id, config) {
		super(system, id, config)
		var self = this

		// Characterworks Port #
		self.actions()
		self.BASEURI = ''
		self.init_presets()
		self.init_feedbacks()
		self.getCameraInformation()
		
		 /**
         * @param name Instance variable name
         * @returns Value of instance variable or undefined
         * @description Retrieves instance variable from any vMix instances
         */
		  this.get = (variable) => {
            let data;
            this.instance.parseVariables(variable, (value) => {
                data = value;
            });
            return data;
        };
	}

	actions(system) {
		var self = this

		self.setActions({
			left: {
				label: 'Pan Left',
				options: [
					speeddefinition,
				],
				default: '1',
			},
			right: {
				label: 'Pan Right',
				options: [
					speeddefinition,
				],
				default: '1',
			},
			up: {
				label: 'Tilt up',
				options: [
					speeddefinition,
				],
				default: '1',
			},
			down: {
				label: 'Tilt down',
				options: [
					speeddefinition,
				],
				default: '1',
			},
			upleft: {
				label: 'Pan Up/Left',
				options: [
					speeddefinition,
				],
				default: '1',
			},
			upright: {
				label: 'Pan Up/Right',
				options: [
					speeddefinition,
				],
				default: '1',
			},
			downleft: {
				label: 'Pan Down/Left',
				options: [
					speeddefinition,
				],
				default: '1',
			},
			downright: {
				label: 'Pan Down/Right',
				options: [
					speeddefinition,
				],
				default: '1',
			},
			stop: { label: 'PTZ Stop' },
			zoomI: { label: 'Zoom In' ,
			options: [
				{
					type: 'number',
					label: 'Speed',
					id: 'speed',
					min: -100,
					 max: 100,
					  default: 50,
					  step: 1,
					  required: true,
					  range: false
				},
			],
			default: '1',},

			zoomO: { label: 'Zoom Out' ,
			options: [
				{
					type: 'number',
					label: 'Speed',
					id: 'speed',
					min: -100,
					 max: 100,
					  default: 50,
					  step: 1,
					  required: true,
					  range: false
				},
			],
			default: '1',},
			zoomstop: { label: 'Zoom Stop' },
			preset: {
				label: 'Goto preset',
				options: [
					{
						type: 'textinput',
						width: 3,
						regex: self.REGEX_NUMBER,
						label: 'Preset #',
						id: 'preset',
					},
				],
			},
			Setpreset: {
				label: 'Set preset',
				options: [
					{
						type: 'textinput',
						width: 3,
						regex: self.REGEX_NUMBER,
						label: 'Set Preset #',
						id: 'preset',
					},
				],
			},
			Reload: {
				label: 'Reload Camera Info',
				
			},
			setDefaultSpeed: {
				label: 'Set default speed',
				options: [
					speeddefinition,
				],
			},
			setAutoFocus: {
				label: 'Set Auto Focus',
				options: [
					{
						type: 'dropdown',
						label: 'Autofocus',
						id: 'switchonoff',
						choices: [
							{ id: 'on', label: 'on' },
							{ id: 'off', label: 'off' },
							
						],
						default: 'on',
					},
				],
			},
			Focus: {
				label: 'Adjust Focus',
				options: [
					{
						type: 'number',
						label: 'Steps',
						id: 'steps',
						tooltip: '1 ... 9999 Moves focus n steps to the specified absolute position. A high value means focus far, a low value means focus near. ',
						min: 1,
 						max: 9999,
  						default: 50,
  						step: 1,
  						required: true,
  						range: false
					},
				],
			},
			ContinousFocusMove: {
				label: 'Continous Focus Move',
				options: [
					{
						type: 'number',
						label: 'Steps',
						id: 'steps',
						tooltip: '-100 ... 100 Continuous focus motion. Positive values mean focus far and negative values mean focus near. 0 means stop. ',
						min: -100,
 						max: 100,
  						default: 0,
  						step: 1,
  						required: true,
  						range: false
					},
				],
			},
		})
	}
	ptzConfig(direction, action) {
		var self = this
		//self.log('debug', direction + '-' + actio + '-' + speed)

		//if (speed == -1) {
		//	speed = self.instance_speed
		//}

		//if (isNaN(speed)) {
		//	self.log('warn', 'INVALID PTZ SPEED')
		//	return 0
		//}

		//if ((action !== 'start') && (action !== 'stop')) {
		//	self.log('warn', 'INVALID PTZ COMMAND!');
		//	return 0;
		//}
		var uri = self.BASEURI + '/axis-cgi/com/ptzconfig.cgi?' + action + '=' + direction + '&camera=1'

		//if (direction == 'GotoPreset') {
		//	uri += '&code=' + direction + '&arg1=0&arg2=' + speed + '&arg3=0';
		//} else {
		//	uri += '&code=' + direction + '&arg1=' + speed +'&arg2=' + speed + '&arg3=0';
		//};

		//self.log('debug', uri)

		request(uri, function (error, response, body) {
			if (error) {
				self.log('warn', 'Send Error: ' + error)
				// Start init to reconnect to cam because probably network lost
				self.init()
			}
			self.getCameraInformation()
			self.checkFeedbacks()
		}).auth(self.config.user, self.config.password, false)
	}

	ptzMove(direction, action) {
		var self = this
		//self.log('debug', direction+'-'+action);

		//if (speed == '-1,-1') {
			//speed = self.instance_speed
		//}

		//if (isNaN(speed)) {
		//	self.log('warn', 'INVALID PTZ SPEED')
		//	return 0
		//}

		
		var uri = self.BASEURI + '/axis-cgi/com/ptz.cgi?' + action + '=' + direction + '&camera=1'

		//if (direction == 'GotoPreset') {
		//	uri += '&code=' + direction + '&arg1=0&arg2=' + speed + '&arg3=0';
		//} else {
		//	uri += '&code=' + direction + '&arg1=' + speed +'&arg2=' + speed + '&arg3=0';
		//};
		
		//self.log('debug', 'uri: '+uri)

		request(uri, function (error, response, body) {
			if (error) {
				self.log('warn', 'Send Error: ' + error)
				// Start init to reconnect to cam because probably network lost
				self.init()
			}
			self.getCameraInformation()
			
		}).auth(self.config.user, self.config.password, false)
	}
	ptzCommand(option, action, bol= 1) {
		var self = this
		self.log('debug', 'Ptzcommand: '+ option+'-'+action+' '+bol);

	

		
		if (bol == '0') {
			switchonofftosend = 'off'
		}
		if (option == '1') {
			switchonofftosend = 'on'
		}
		
		var uri = self.BASEURI + '/axis-cgi/com/ptz.cgi?' + action + '=' + switchonofftosend + '&camera=1'

		//if (direction == 'GotoPreset') {
		//	uri += '&code=' + direction + '&arg1=0&arg2=' + speed + '&arg3=0';
		//} else {
		//	uri += '&code=' + direction + '&arg1=' + speed +'&arg2=' + speed + '&arg3=0';
		//};

		self.log('debug', uri)

		request(uri, function (error, response, body) {
			if (error) {
				self.log('warn', 'Send Error: ' + error)
				// Start init to reconnect to cam because probably network lost
				self.init()
			}
			self.getCameraInformation()
			self.checkFeedbacks()
		}).auth(self.config.user, self.config.password, false)
	}
	action(action) {
		var self = this
		var cmd
		var param
		var opt = action.options
		//self.log('debug', 'action='+action.action+opt.speed)

		switch (action.action) {
			case 'left':
				cmd = 'continuouspantiltmove'
				param = '-' + opt.speed + ',0'
				self.ptzMove(param, cmd, opt.speed)
				break

			case 'right':
				cmd = 'continuouspantiltmove'
				param = opt.speed + ',0'
				self.ptzMove(param, cmd, opt.speed)
				break

			case 'up':
				cmd = 'continuouspantiltmove'
				param = '0,' + opt.speed
				self.ptzMove(param, cmd, opt.speed)
				break

			case 'down':
				cmd = 'continuouspantiltmove'
				param = '0,-' + opt.speed
				self.ptzMove(param, cmd, opt.speed)
				break

			case 'upleft':
				cmd = 'continuouspantiltmove'
				param = '-' + opt.speed + ',' + opt.speed
				self.ptzMove(param, cmd, opt.speed)
				break

			case 'upright':
				cmd = 'continuouspantiltmove'
				param = opt.speed + ',' + opt.speed
				self.ptzMove(param, cmd, opt.speed)
				break

			case 'downleft':
				cmd = 'continuouspantiltmove'
				param = '-' + opt.speed + ',-' + opt.speed
				self.ptzMove(param, cmd, opt.speed)
				break

			case 'downright':
				cmd = 'continuouspantiltmove'
				param = opt.speed + ',-' + opt.speed
				self.ptzMove(param, cmd, opt.speed)
				break

			case 'stop':
				cmd = 'continuouspantiltmove'
				param = '0,0'
				self.ptzMove(param, cmd, 1)
				break

			case 'zoomI':
				cmd = 'continuouszoommove'
				param = opt.speed
				self.ptzMove(1, cmd, 0)
				break
			case 'zoomO':
				cmd = 'continuouszoommove'
				param = '-' + opt.speed
				self.ptzMove(-1, cmd, 0)
				break
			case 'zoomstop':
				cmd = 'continuouszoommove'
				param = '-' + opt.speed
				self.ptzMove(0, cmd, 0)
				break

			case 'preset':
				cmd = 'gotoserverpresetno'
				param = opt.preset
				self.ptzMove(param, cmd, opt.preset)
				break

			case 'Setpreset':
				cmd = 'setserverpresetno'

				param = opt.preset
				self.ptzMove(param, cmd, opt.preset)

				break
			case 'setAutoFocus':
				cmd = 'autofocus'


				param = opt.switchonoff
				self.ptzMove(param, cmd, opt.switchonoff)

				break
			case 'Focus':
				cmd = 'focus'
				//self.log('debug',' case focus'+action+'-'+action.options.steps)


				param = action.options.steps
				self.ptzMove(param, cmd, action.options.steps)

				break
			case 'ContinousFocusMove':
				cmd = 'continuousfocusmove'
				//self.log('debug',' case focus'+action+'-'+action.options.steps)


				param = action.options.steps
				self.ptzMove(param, cmd, action.options.steps)

				break

			case 'setDefaultSpeed':
				// Only speed of this instance, not send to camera
				self.instance_speed = opt.speed
				break

			case 'reload':
				// Only speed of this instance, not send to camera
				self.getCameraInformation();
				
				self.checkFeedbacks()
				break
		}
	}

	// Web config fields
	config_fields() {
		var self = this
		return [
			{
				type: 'textinput',
				id: 'host',
				label: 'Axis API IP Address',
				tooltip: 'The IP of the camera',
				width: 6,
				regex: self.REGEX_IP,
			},
			{
				type: 'textinput',
				id: 'port',
				label: 'Axis API Port Number (default 80)',
				tooltip: 'The Port Number camera.',
				width: 6,
				default: 80,
				regex: self.REGEX_PORT,
			},
			{
				type: 'textinput',
				id: 'user',
				label: 'User name',
				tooltip: 'The user name.',
				width: 6,
				regex: self.REGEX_SOMETHING,
			},
			{
				type: 'textinput',
				id: 'password',
				label: 'Password',
				tooltip: 'The password',
				width: 6,
				regex: self.REGEX_SOMETHING,
			},
		]
	}

	destroy() {
		var self = this
		debug('destroy')
	}

	init() {
		var self = this
		self.data = {
			autofocus: 'on',
			

			
		}
		debug = self.debug
		log = self.log
		self.instance_speed = 1

		self.status(self.STATUS_WARNING, 'Connecting...')

		// Connecting on init not neccesary for http (request). But during init try to tcp connect
		// to get the status of the module right and automatically try reconnecting. Which is
		// implemented in ../../tcp.
		if (self.config.host !== undefined) {
			self.tcp = new tcp(self.config.host, self.config.port)

			self.tcp.on('status_change', function (status, message) {
				self.status(status, message)
			})

			self.tcp.on('error', function () {
				// Ignore
			})
			self.tcp.on('connect', function () {
				// disconnect immediately because further comm takes place via Request and not
				// via this tcp sockets.
				if (self.tcp !== undefined) {
					self.tcp.destroy()
				}
				delete self.tcp
				self.BASEURI = 'http://' + self.config.host + ':' + self.config.port

				//Try a ptz stop command to be sure username and password are correct and this user is allowed PTZ on this camera
				request(self.BASEURI + '/axis-cgi/com/ptz.cgi?move=stop', function (error, response, body) {
					if (error || response.statusCode !== 204) {
						self.status(self.STATUS_ERROR, 'Username/password')
						// self.log('warn', 'response.statusCode: ' + response.statusCode)
					} else {
						self.status(self.STATUS_OK, 'Connected')
					}
					self.init_variables()
					self.init_feedbacks()
				}).auth(self.config.user, self.config.password, false)
			})
		}
	}

	updateConfig(config) {
		var self = this
		self.config = config

		if (self.tcp !== undefined) {
			self.tcp.destroy()
			delete self.tcp
		}

		self.init()
		
	}
}
instance.prototype.init_variables = function () {
	this.setVariableDefinitions(variables.setVariables(this))
}
instance.prototype.getVariablesValue = function () {
	this.setVariableDefinitions(variables.getVariableValue(this))
}

instance.prototype.init_feedbacks = function () {
	this.setFeedbackDefinitions(feedbacks.getFeedbacks(this))
}
instance.prototype.init_presets = function () {
	this.setPresetDefinitions(presets.setPresets(this))
}

//instance.prototype.getVariable = function (name){
//	this.getVariable(name, (val) => (selectedValue = val))
//	return selectedValue
//		//return selectedValue
//}


instance.prototype.getCameraInformation = function () {
	var self = this

	if (self.config.host) {
		self.BASEURI = 'http://' + self.config.host + ':' + self.config.port
		uri = '/axis-cgi/param.cgi?action=list'
		//console.log('debug', ' Axis get info: '+ self.BASEURI + uri);
		request(self.BASEURI + uri, function (error, response, body) {
			//console.log('warn'," axis camera error: " + error)
			if (!(error === null)) {
				self.status(self.STATUS_ERROR, 'Username/password')
				self.log('warn', 'response ' + response)
			} else {
				self.status(self.STATUS_OK, 'Connected')
				//str = JSON.parse(response);
				//console.log('debug', ' Axis connected:'+body)
				let chunks = body.split('\n');
				//console.log('chunks: '+chunks);

			
				const attarr = new Set([]);
				for (let i = 0; i < chunks.length-1; i += 1) {
  					//camattr[chunks[i].split('=')[0]] = chunks[i].split('=')[1].trim()
					
					  attarr.add
					  ( 
							{label: 'Axis Camera '+chunks[i].split('=')[0],
							name: chunks[i].split('=')[0],
							value: chunks[i].split('=')[1].trim(),
					  }
					  )
					  self.setVariable(chunks[i].split('=')[0],chunks[i].split('=')[1].trim())
					  
  					
  					}
				//console.log (attarr)
	
				
			}
		}).auth(self.config.user, self.config.password, false)
	}
	if (self.config.host) {
		self.BASEURI = 'http://' + self.config.host + ':' + self.config.port
		uri = '/axis-cgi/com/ptz.cgi?query=position&camera=1'
		//console.log('debug', ' Axis get info: '+ self.BASEURI + uri);
		request(self.BASEURI + uri, function (error, response, body) {
			//console.log('warn'," axis camera error: " + error)
			if (!(error === null)) {
				self.status(self.STATUS_ERROR, 'Username/password')
				self.log('warn', 'response ' + response)
			} else {
				self.status(self.STATUS_OK, 'Connected')
				//str = JSON.parse(response);
			//	console.log('debug', ' Axis connected:'+body)
				let chunks = body.split('\n');
			//	console.log('chunks: '+chunks);

			
				const attarr = new Set([]);
				for (let i = 0; i < chunks.length-1; i += 1) {
  					//camattr[chunks[i].split('=')[0]] = chunks[i].split('=')[1].trim()
					
					  attarr.add
					  ( 
							{label: 'Axis Camera '+chunks[i].split('=')[0],
							name: chunks[i].split('=')[0],
							value: chunks[i].split('=')[1].trim(),
					  }
					  )
					  self.setVariable(chunks[i].split('=')[0],chunks[i].split('=')[1].trim())
					  if (chunks[i].split('=')[0] == 'autofocus'){
						self.data.autofocus = chunks[i].split('=')[1].trim()
						//self.log('debug','autofocus set: '+self.data.autofocus)
					  }
  					
  					}
				//console.log (attarr)
				self.checkFeedbacks()
				

				
				
				
				
				
				
				
			}
		}).auth(self.config.user, self.config.password, false)
		self.BASEURI = 'http://' + self.config.host + ':' + self.config.port
		uri = '/axis-cgi/com/ptz.cgi?query=limits&camera=1'
		//console.log('debug', ' Axis get info: '+ self.BASEURI + uri);
		request(self.BASEURI + uri, function (error, response, body) {
			//console.log('warn'," axis camera error: " + error)
			if (!(error === null)) {
				self.status(self.STATUS_ERROR, 'Username/password')
				self.log('warn', 'response ' + response)
			} else {
				self.status(self.STATUS_OK, 'Connected')
				//str = JSON.parse(response);
				//console.log('debug', ' Axis connected:'+body)
				let chunks = body.split('\n');
				//console.log('chunks: '+chunks);

			
				const attarr = new Set([]);
				for (let i = 0; i < chunks.length-1; i += 1) {
  					//camattr[chunks[i].split('=')[0]] = chunks[i].split('=')[1].trim()
					
					  attarr.add
					  ( 
							{label: 'Axis Camera '+chunks[i].split('=')[0],
							name: chunks[i].split('=')[0],
							value: chunks[i].split('=')[1].trim(),
					  }
					  )
					  self.setVariable(chunks[i].split('=')[0],chunks[i].split('=')[1].trim())
  					
  					}
				//console.log (attarr)
				self.checkFeedbacks()
				
				
				
				
				
				
				
			}
		}).auth(self.config.user, self.config.password, false)
		self.BASEURI = 'http://' + self.config.host + ':' + self.config.port
		uri = '/axis-cgi/com/ptz.cgi?query=speed&camera=1'
		//console.log('debug', ' Axis speed info: '+ self.BASEURI + uri);
		request(self.BASEURI + uri, function (error, response, body) {
			//console.log('warn'," axis camera error: " + error)
			if (!(error === null)) {
				self.status(self.STATUS_ERROR, 'Username/password')
				self.log('warn', 'response ' + response)
			} else {
				self.status(self.STATUS_OK, 'Connected')
				//str = JSON.parse(response);
				//console.log('debug', ' Axis connected:'+body)
				let chunks = body.split('\n');
			//	console.log('chunks: '+chunks);

			
				const attarr = new Set([]);
				for (let i = 0; i < chunks.length-1; i += 1) {
  					//camattr[chunks[i].split('=')[0]] = chunks[i].split('=')[1].trim()
					
					  attarr.add
					  ( 
							{label: 'Axis Camera '+chunks[i].split('=')[0],
							name: chunks[i].split('=')[0],
							value: chunks[i].split('=')[1].trim(),
					  }
					  )
					  self.setVariable(chunks[i].split('=')[0],chunks[i].split('=')[1].trim())
  					
  					}
				//console.log (attarr)
				
				
				
				
				
				
				
			}
			
		}).auth(self.config.user, self.config.password, false)
	}
}
exports = module.exports = instance
