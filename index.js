var instance_skel = require('../../instance_skel')
var request = require('request')
var tcp = require('../../tcp')
var presets = require('./presets')
var debug
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
		self.getCameraInformation()
	}

	actions(system) {
		var self = this

		self.system.emit('instance_actions', self.id, {
			left: {
				label: 'Pan Left',
				options: [
					{
						type: 'dropdown',
						label: 'Speed',
						id: 'speed',
						choices: [
							{ id: '1', label: '1 slow' },
							{ id: '2', label: '2' },
							{ id: '3', label: '3' },
							{ id: '4', label: '4' },
							{ id: '5', label: '5' },
							{ id: '6', label: '6' },
							{ id: '7', label: '7' },
							{ id: '8', label: '8 fast' },
							{ id: '-1', label: 'Default speed' },
						],
					},
				],
				default: '1',
			},
			right: {
				label: 'Pan Right',
				options: [
					{
						type: 'dropdown',
						label: 'Speed',
						id: 'speed',
						choices: [
							{ id: '1', label: '1 slow' },
							{ id: '2', label: '2' },
							{ id: '3', label: '3' },
							{ id: '4', label: '4' },
							{ id: '5', label: '5' },
							{ id: '6', label: '6' },
							{ id: '7', label: '7' },
							{ id: '8', label: '8 fast' },
							{ id: '-1', label: 'Default speed' },
						],
					},
				],
				default: '1',
			},
			up: {
				label: 'Tilt up',
				options: [
					{
						type: 'dropdown',
						label: 'Speed',
						id: 'speed',
						choices: [
							{ id: '1', label: '1 slow' },
							{ id: '2', label: '2' },
							{ id: '3', label: '3' },
							{ id: '4', label: '4' },
							{ id: '5', label: '5' },
							{ id: '6', label: '6' },
							{ id: '7', label: '7' },
							{ id: '8', label: '8 fast' },
							{ id: '-1', label: 'Default speed' },
						],
					},
				],
				default: '1',
			},
			down: {
				label: 'Tilt down',
				options: [
					{
						type: 'dropdown',
						label: 'Speed',
						id: 'speed',
						choices: [
							{ id: '1', label: '1 slow' },
							{ id: '2', label: '2' },
							{ id: '3', label: '3' },
							{ id: '4', label: '4' },
							{ id: '5', label: '5' },
							{ id: '6', label: '6' },
							{ id: '7', label: '7' },
							{ id: '8', label: '8 fast' },
							{ id: '-1', label: 'Default speed' },
						],
						default: '1',
					},
				],
			},
			upleft: {
				label: 'Pan Up/Left',
				options: [
					{
						type: 'dropdown',
						label: 'Speed',
						id: 'speed',
						choices: [
							{ id: '1', label: '1 slow' },
							{ id: '2', label: '2' },
							{ id: '3', label: '3' },
							{ id: '4', label: '4' },
							{ id: '5', label: '5' },
							{ id: '6', label: '6' },
							{ id: '7', label: '7' },
							{ id: '8', label: '8 fast' },
							{ id: '-1', label: 'Default speed' },
						],
						default: '1',
					},
				],
			},
			upright: {
				label: 'Pan Up/Right',
				options: [
					{
						type: 'dropdown',
						label: 'Speed',
						id: 'speed',
						choices: [
							{ id: '1', label: '1 slow' },
							{ id: '2', label: '2' },
							{ id: '3', label: '3' },
							{ id: '4', label: '4' },
							{ id: '5', label: '5' },
							{ id: '6', label: '6' },
							{ id: '7', label: '7' },
							{ id: '8', label: '8 fast' },
							{ id: '-1', label: 'Default speed' },
						],
						default: '1',
					},
				],
			},
			downleft: {
				label: 'Pan Down/Left',
				options: [
					{
						type: 'dropdown',
						label: 'Speed',
						id: 'speed',
						choices: [
							{ id: '1', label: '1 slow' },
							{ id: '2', label: '2' },
							{ id: '3', label: '3' },
							{ id: '4', label: '4' },
							{ id: '5', label: '5' },
							{ id: '6', label: '6' },
							{ id: '7', label: '7' },
							{ id: '8', label: '8 fast' },
							{ id: '-1', label: 'Default speed' },
						],
						default: '1',
					},
				],
			},
			downright: {
				label: 'Pan Down/Right',
				options: [
					{
						type: 'dropdown',
						label: 'Speed',
						id: 'speed',
						choices: [
							{ id: '1', label: '1 slow' },
							{ id: '2', label: '2' },
							{ id: '3', label: '3' },
							{ id: '4', label: '4' },
							{ id: '5', label: '5' },
							{ id: '6', label: '6' },
							{ id: '7', label: '7' },
							{ id: '8', label: '8 fast' },
							{ id: '-1', label: 'Default speed' },
						],
						default: '1',
					},
				],
			},
			stop: { label: 'PTZ Stop' },
			zoomI: { label: 'Zoom In' },
			zoomO: { label: 'Zoom Out' },
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
			setDefaultSpeed: {
				label: 'Set default speed',
				options: [
					{
						type: 'dropdown',
						label: 'Speed',
						id: 'speed',
						choices: [
							{ id: '1', label: '1 slow' },
							{ id: '2', label: '2' },
							{ id: '3', label: '3' },
							{ id: '4', label: '4' },
							{ id: '5', label: '5' },
							{ id: '6', label: '6' },
							{ id: '7', label: '7' },
							{ id: '8', label: '8 fast' },
						],
						default: '1',
					},
				],
			},
		})
	}
	ptzConfig(direction, action, speed = 1) {
		var self = this
		self.log('debug', direction + '-' + actio + '-' + speed)

		if (speed == -1) {
			speed = self.instance_speed
		}

		if (isNaN(speed)) {
			self.log('warn', 'INVALID PTZ SPEED')
			return 0
		}

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

		self.log('debug', uri)

		request(uri, function (error, response, body) {
			if (error) {
				self.log('warn', 'Send Error: ' + error)
				// Start init to reconnect to cam because probably network lost
				self.init()
			}
		}).auth(self.config.user, self.config.password, false)
	}

	ptzMove(direction, action, speed = 1) {
		var self = this
		//self.log('debug', direction+'-'+actio+'-'+speed);

		if (speed == -1) {
			speed = self.instance_speed
		}

		if (isNaN(speed)) {
			self.log('warn', 'INVALID PTZ SPEED')
			return 0
		}

		//if ((action !== 'start') && (action !== 'stop')) {
		//	self.log('warn', 'INVALID PTZ COMMAND!');
		//	return 0;
		//}
		var uri = self.BASEURI + '/axis-cgi/com/ptz.cgi?' + action + '=' + direction + '&camera=1'

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
		}).auth(self.config.user, self.config.password, false)
	}

	action(action) {
		var self = this
		var cmd
		var param
		var opt = action.options

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

			case 'setDefaultSpeed':
				// Only speed of this instance, not send to camera
				self.instance_speed = opt.speed
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
						self.log('warn', 'response.statusCode: ' + response.statusCode)
					} else {
						self.status(self.STATUS_OK, 'Connected')
					}
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
instance.prototype.init_presets = function () {
	this.setPresetDefinitions(presets.setPresets(this))
}
instance.prototype.getCameraInformation = function () {
	var self = this

	if (self.config.host) {
		self.BASEURI = 'http://' + self.config.host + ':' + self.config.port
		uri = '/axis-cgi/param.cgi?action=list&group=Properties.PTZ.PTZ'
		//console.log('debug + get info: '+ self.BASEURI + uri);
		request(self.BASEURI + uri, function (error, response, body) {
			//console.log('warn'," axis camera error: " + error);
			if (error) {
				self.status(self.STATUS_ERROR, 'Username/password')
				self.log('warn', 'response.statusCode: ' + response.statusCode)
			} else {
				self.status(self.STATUS_OK, 'Connected')

				var str_raw = String(body.data)
				var str = {}
				if ((body.data = 'Properties.PTZ.PTZ=yes')) {
					//console.log('info'," axis camera body: " + body);
					this.ptzenabled = true
				} else {
					this.ptzenabled = false
					console.log('warn', ' axis camera body: no ptz')
				}

				str_raw = str_raw.split('\r\n') // Split Data in order to remove data before and after command

				for (var i in str_raw) {
					str = str_raw[i].trim() // remove new line, carage return and so on.
					str = str.split(':') // Split Commands and data

					debug('HTTP Recived from PTZ: ' + str_raw[i]) // Debug Recived data
					if (self.config.debug == true) {
						self.log('info', 'Recived CMD: ' + String(str_raw[i]))
					}
					// Store Data
					//self.storeData(str);
				}
			}
		}).auth(self.config.user, self.config.password, false)
	}
}
exports = module.exports = instance
