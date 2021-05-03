//var { MODELS, SERIES_SPECS } = require('./models.js');
const c = require('./choices');

module.exports = {
    
    setPresets: function(i) {
        var self = i;
        var presets = [];
        var SERIES = {};

        // Set the model and series selected, if in auto, dettect what model is connected via TCP
       // if (self.config.model === 'Auto') {
       //     self.data.model = self.data.modelTCP;
       // } else { self.data.model = self.config.model;}

        //if (self.data.model !== 'NaN') {
        //    self.data.series = MODELS.find(MODELS => MODELS.id == self.data.model).series;
       // }

        // Find the specific commands for a given series 
        //if (self.data.series === 'Auto' || self.data.series === 'Other' || SERIES_SPECS.find(SERIES_SPECS => SERIES_SPECS.id == self.data.series) == undefined) {
        //    SERIES = SERIES_SPECS.find(SERIES_SPECS => SERIES_SPECS.id == 'Other');
        //} else {
        //    SERIES = SERIES_SPECS.find(SERIES_SPECS => SERIES_SPECS.id == self.data.series);
        //}
        var s = {};
        // console.log(SERIES);

        // ##########################
		// #### Pan/Tilt Presets ####
		// ##########################
        s.panTilt = true;
		if (s.panTilt == true)
         { 
            presets.push({
                category: 'Pan/Tilt',
                label: 'UP',
                bank: {
                    style: 'png',
                    text: '',
                    png64: self.ICON_UP,
                    pngalignment: 'center:center',
                    size: '18',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0)
                },
                actions: [
                    {
                        action: 'up',
                        options: {
                            speed: 1,
                        }
                    }
                ],
                release_actions: [
                    {
                        action: 'stop',
                    }
                ]
            });

            presets.push({
                category: 'Pan/Tilt',
                label: 'DOWN',
                bank: {
                    style: 'png',
                    text: '',
                    png64: self.ICON_DOWN,
                    pngalignment: 'center:center',
                    size: '18',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0)
                },
                actions: [
                    {
                        action: 'down',
                        options: {
                        speed: 1,
                    }
                }
                ],
                release_actions: [
                    {
                        action: 'stop',
                    }
                ]
            });
            
            presets.push({
                category: 'Pan/Tilt',
                label: 'LEFT',
                bank: {
                    style: 'png',
                    text: '',
                    png64: self.ICON_LEFT,
                    pngalignment: 'center:center',
                    size: '18',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0)
                },
                actions: [
                    {
                        action: 'left',
                        options: {
                            speed: 1,
                        }
                    }
                ],
                release_actions: [
                    {
                        action: 'stop',
                    }
                ]
            });
            
            presets.push({
                category: 'Pan/Tilt',
                label: 'RIGHT',
                bank: {
                    style: 'png',
                    text: '',
                    png64: self.ICON_RIGHT,
                    pngalignment: 'center:center',
                    size: '18',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0)
                },
                actions: [
                    {
                        action: 'right',
                        options: {
                            speed: 1,
                        }
                    }
                ],
                release_actions: [
                    {
                        action: 'stop',
                    }
                ]
            });
            
            presets.push({
                category: 'Pan/Tilt',
                label: 'UP RIGHT',
                bank: {
                    style: 'png',
                    text: '',
                    png64: self.ICON_UP_RIGHT,
                    pngalignment: 'center:center',
                    size: '18',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0)
                },
                actions: [
                    {
                        action: 'upright',
                        options: {
                            speed: 1,
                        }
                    }
                ],
                release_actions: [
                    {
                        action: 'stop',
                    }
                ]
            });
            
            presets.push({
                category: 'Pan/Tilt',
                label: 'UP LEFT',
                bank: {
                    style: 'png',
                    text: '',
                    png64: self.ICON_UP_LEFT,
                    pngalignment: 'center:center',
                    size: '18',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0)
                },
                actions: [
                    {
                        action: 'upleft',
                        options: {
                            speed: 1,
                        }
                    }
                ],
                release_actions: [
                    {
                        action: 'stop',
                    }
                ]
            });
            
            presets.push({
                category: 'Pan/Tilt',
                label: 'DOWN LEFT',
                bank: {
                    style: 'png',
                    text: '',
                    png64: self.ICON_DOWN_LEFT,
                    pngalignment: 'center:center',
                    size: '18',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0)
                },
                actions: [
                    {
                        action: 'downleft',
                        options: {
                            speed: 1,
                        }
                    }
                ],
                release_actions: [
                    {
                        action: 'stop',
                    }
                ]
            });
            
            presets.push({
                category: 'Pan/Tilt',
                label: 'DOWN RIGHT',
                bank: {
                    style: 'png',
                    text: '',
                    png64: self.ICON_DOWN_RIGHT,
                    pngalignment: 'center:center',
                    size: '18',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0)
                },
                actions: [
                    {
                        action: 'downright',
                        options: {
                            speed: 1,
                        }
                    }
                ],
                release_actions: [
                    {
                        action: 'stop',
                    }
                ]
            });
        
            presets.push({
                category: 'Pan/Tilt',
                label: 'Home',
                bank: {
                    style: 'text',
                    text: 'HOME',
                    size: '18',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0)
                },
                actions: [
                    {
                        action: 'home',
                    }
                ]
            });
        }

    s.ptspeed = false;
    if (s.ptSpeed == true) 
        {
            presets.push({
                category: 'Pan/Tilt',
                label: 'Speed Up',
                bank: {
                    style: 'text',
                    text: 'SPEED\\nUP\\n$(Panasonic-PTZ:ptSpeedVar)',
                    size: '14',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0)
                },
                actions: [
                    {
                        action: 'ptSpeedU',
                    }
                ]
            });
        
            presets.push({
                category: 'Pan/Tilt',
                label: 'Speed Down',
                bank: {
                    style: 'text',
                    text: 'SPEED\\nDOWN\\n$(Panasonic-PTZ:ptSpeedVar)',
                    size: '14',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0)
                },
                actions: [
                    {
                        action: 'ptSpeedD',
                    }
                ]
            });

            presets.push({
                category: 'Pan/Tilt',
                label: 'Speed Set High',
                bank: {
                    style: 'text',
                    text: 'SET\\nSPEED\\nHIGH',
                    size: '14',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0)
                },
                actions: [
                    {
                        action: 'ptSpeedS',
                        options: {
                            speed: 40,
                        }

                    }
                ]
            });

            presets.push({
                category: 'Pan/Tilt',
                label: 'Speed Set Mid',
                bank: {
                    style: 'text',
                    text: 'SET\\nSPEED\\nMID',
                    size: '14',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0)
                },
                actions: [
                    {
                        action: 'ptSpeedS',
                        options: {
                            speed: 25,
                        }

                    }
                ]
            });

            presets.push({
                category: 'Pan/Tilt',
                label: 'Speed Set Low',
                bank: {
                    style: 'text',
                    text: 'SET\\nSPEED\\nLOW',
                    size: '14',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0)
                },
                actions: [
                    {
                        action: 'ptSpeedS',
                        options: {
                            speed: 10,
                        }

                    }
                ]
            });
        }

        // ######################
		// #### Lens Presets ####
		// ######################

        s.zoom = true;
        if (s.zoom == true) 
        {
            presets.push({
                category: 'Lens',
                label: 'Zoom In',
                bank: {
                    style: 'text',
                    text: 'ZOOM\\nIN',
                    size: '18',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0)
                },
                actions: [
                    {
                        action: 'zoomI',
                        options: {
                            speed: 10,
                        }
                    }
                ],
                release_actions: [
                    {
                        action: 'stop',
                    }
                ]
            });
        
            presets.push({
                category: 'Lens',
                label: 'Zoom Out',
                bank: {
                    style: 'text',
                    text: 'ZOOM\\nOUT',
                    size: '18',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0)
                },
                actions: [
                    {
                        action: 'zoomO',
                        options: {
                            speed: 10,
                        }
                    }
                ],
                release_actions: [
                    {
                        action: 'stop',
                    }
                ]
            });
        }

    s.zspeed = false
    if (s.zSpeed == true)
         {
            presets.push({
                category: 'Lens',
                label: 'Zoom Speed Up',
                bank: {
                    style: 'text',
                    text: 'ZOOM\\nSPEED\\nUP\\n$(Panasonic-PTZ:zSpeedVar)',
                    size: '7',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0)
                },
                actions: [
                    {
                        action: 'zSpeedU',
                    }
                ]
            });
            
            presets.push({
                category: 'Lens',
                label: 'Zoom Speed Down',
                bank: {
                    style: 'text',
                    text: 'ZOOM\\nSPEED\\nDOWN\\n$(Panasonic-PTZ:zSpeedVar)',
                    size: '7',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0)
                },
                actions: [
                    {
                        action: 'zSpeedD',
                    }
                ]
            });

            presets.push({
                category: 'Lens',
                label: 'Zoom Speed High',
                bank: {
                    style: 'text',
                    text: 'ZOOM\\nSPEED\\nHIGH',
                    size: '14',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0)
                },
                actions: [
                    {
                        action: 'zSpeedS',
                        options: {
                            speed: 40,
                        }

                    }
                ]
            });

            presets.push({
                category: 'Lens',
                label: 'Zoom Speed Mid',
                bank: {
                    style: 'text',
                    text: 'ZOOM\\nSPEED\\nMID',
                    size: '14',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0)
                },
                actions: [
                    {
                        action: 'zSpeedS',
                        options: {
                            speed: 25,
                        }

                    }
                ]
            });

            presets.push({
                category: 'Lens',
                label: 'Zoom Speed Low',
                bank: {
                    style: 'text',
                    text: 'ZOOM\\nSPEED\\nLOW',
                    size: '14',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0)
                },
                actions: [
                    {
                        action: 'zSpeedS',
                        options: {
                            speed: 10,
                        }

                    }
                ]
            });
        }

       s.focus = false
       if (s.focus == true) 
       {
            presets.push({
                category: 'Lens',
                label: 'Focus Near',
                bank: {
                    style: 'text',
                    text: 'FOCUS\\nNEAR',
                    size: '18',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0),
                },
                actions: [
                    {
                        action: 'focusN',
                        options: {
                            speed: 10,
                        }
                    }
                ],
                release_actions: [
                    {
                        action: 'focusS',
                        options: {
                            speed: 10,
                        }
                    }
                ]
            });
            
            presets.push({
                category: 'Lens',
                label: 'Focus Far',
                bank: {
                    style: 'text',
                    text: 'FOCUS\\nFAR',
                    size: '18',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0),
                },
                actions: [
                    {
                        action: 'focusF',
                    }
                ],
                release_actions: [
                    {
                        action: 'focusS',
                    }
                ]
            });
        }
            
        s.fspeed = false
        if (s.fSpeed == true) 
        {
            presets.push({
                category: 'Lens',
                label: 'Focus Speed Up',
                bank: {
                    style: 'text',
                    text: 'FOCUS\\nSPEED\\nUP\\n$(Panasonic-PTZ:fSpeedVar)',
                    size: '7',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0)
                },
                actions: [
                    {
                        action: 'fSpeedU',
                    }
                ]
            });
            
            presets.push({
                category: 'Lens',
                label: 'focusM Speed Down',
                bank: {
                    style: 'text',
                    text: 'FOCUS\\nSPEED\\nDOWN\\n$(Panasonic-PTZ:fSpeedVar)',
                    size: '7',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0)
                },
                actions: [
                    {
                        action: 'fSpeedD',
                    }
                ]
            });
            presets.push({
                category: 'Lens',
                label: 'Focus Speed High',
                bank: {
                    style: 'text',
                    text: 'FOCUS\\nSPEED\\nHIGH',
                    size: '14',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0)
                },
                actions: [
                    {
                        action: 'fSpeedS',
                        options: {
                            speed: 40,
                        }

                    }
                ]
            });

            presets.push({
                category: 'Lens',
                label: 'Focus Speed Mid',
                bank: {
                    style: 'text',
                    text: 'FOCUS\\nSPEED\\nMID',
                    size: '14',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0)
                },
                actions: [
                    {
                        action: 'fSpeedS',
                        options: {
                            speed: 25,
                        }

                    }
                ]
            });

            presets.push({
                category: 'Lens',
                label: 'Focus Speed Low',
                bank: {
                    style: 'text',
                    text: 'FOCUS\\nSPEED\\nLOW',
                    size: '14',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0)
                },
                actions: [
                    {
                        action: 'fSpeedS',
                        options: {
                            speed: 10,
                        }

                    }
                ]
            });
        }

       s.OAF=false
       if (s.OAF == true) 
       {
            presets.push({
                category: 'Lens',
                label: 'Manual Focus',
                bank: {
                    style: 'text',
                    text: 'MANUAL\\nFOCUS',
                    size: '14',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0),
                },
                actions: [
                    {
                        action: 'focusM',
                        options: {
                            bol: 1,
                        }
                    }
                ],
                feedbacks: [
                    {
                        type: 'autoFocus',
                        options: {
                            option: '0'
                        }
                    }
                ],
            });

            presets.push({
                category: 'Lens',
                label: 'Auto Focus',
                bank: {
                    style: 'text',
                    text: 'AUTO\\nFOCUS',
                    size: '14',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0),
                },
                actions: [
                    {
                        action: 'focusM',
                        options: {
                            bol: 0,
                        }
                    }
                ],
                feedbacks: [
                    {
                        type: 'autoFocus',
                        options: {
                            option: '1'
                        }
                    }
                ],
            });

            presets.push({
                category: 'Lens',
                label: 'One Touch Focus',
                bank: {
                    style: 'text',
                    text: 'OTAF\\nFOCUS',
                    size: '14',
                    color: '16777215',
                    bgcolor: self.rgb(0,0,0),
                },
                actions: [
                    {
                        action: 'focusOTAF',
                        options: {
                            bol: 0,
                        }
                    }
                ],
                feedbacks: [
                    {
                        type: 'autoFocus',
                        options: {
                            option: '1'
                        }
                    }
                ],
            });
        }

        // ##########################
		// #### Exposure Presets ####
		// ##########################

        s.iris=false
        if (s.iris == true) 
        {
            presets.push({
                category: 'Exposure',
                label: 'Iris Up',
                bank: {
                    style: 'text',
                    text: 'IRIS\\nUP',
                    size: '18',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0),
                },
                actions: [
                    {
                        action: 'irisU',
                    }
                ]
            });
            
            presets.push({
                category: 'Exposure',
                label: 'Iris Down',
                bank: {
                    style: 'text',
                    text: 'IRIS\\nDOWN',
                    size: '18',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0),
                },
                actions: [
                    {
                        action: 'irisD',
                    }
                ]
            });

            presets.push({
                category: 'Exposure',
                label: 'Manual Iris',
                bank: {
                    style: 'text',
                    text: 'MANUAL\\nIRIS',
                    size: '14',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0),
                },
                actions: [
                    {
                        action: 'irisM',
                        options: {
                            bol: 1,
                        }
                    }
                ],
                feedbacks: [
                    {
                        type: 'autoIris',
                        options: {
                            option: '0'
                        }
                    }
                ],
            });

            presets.push({
                category: 'Exposure',
                label: 'Auto Iris',
                bank: {
                    style: 'text',
                    text: 'AUTO\\nIRIS',
                    size: '14',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0),
                },
                actions: [
                    {
                        action: 'irisM',
                        options: {
                            bol: 0,
                        }
                    }
                ],
                feedbacks: [
                    {
                        type: 'autoIris',
                        options: {
                            option: '1'
                        }
                    }
                ],
            });
        }

        s.gain=false;
        if (s.gain.cmd)
         {
            presets.push({
                category: 'Exposure',
                label: 'Gain Up',
                bank: {
                    style: 'text',
                    text: 'GAIN\\nUP',
                    size: '18',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0),
                },
                actions: [
                    {
                        action: 'gainU',
                    }
                ]
            });
            
            presets.push({
                category: 'Exposure',
                label: 'Gain Down',
                bank: {
                    style: 'text',
                    text: 'GAIN\\nDOWN',
                    size: '18',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0),
                },
                actions: [
                    {
                        action: 'gainD',
                    }
                ]
            });
        }

       s.shutcmd = false;
       if (s.shutcmd)
        {
            presets.push({
                category: 'Exposure',
                label: 'Shutter Up',
                bank: {
                    style: 'text',
                    text: 'Shut\\nUP',
                    size: '18',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0),
                },
                actions: [
                    {
                        action: 'shutU',
                    }
                ]
            });
            
            presets.push({
                category: 'Exposure',
                label: 'Shutter Down',
                bank: {
                    style: 'text',
                    text: 'Shut\\nDOWN',
                    size: '18',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0),
                },
                actions: [
                    {
                        action: 'shutD',
                    }
                ]
            });
        }      

        s.pedcmd = false;
        if (s.pedcmd) 
        {
            presets.push({
                category: 'Exposure',
                label: 'Pedestal Up',
                bank: {
                    style: 'text',
                    text: 'Pedestal\\nUP',
                    size: '14',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0),
                },
                actions: [
                    {
                        action: 'pedU',
                    }
                ]
            });
            
            presets.push({
                category: 'Exposure',
                label: 'Pedestal Down',
                bank: {
                    style: 'text',
                    text: 'Pedestal\\nDOWN',
                    size: '14',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0),
                },
                actions: [
                    {
                        action: 'pedD',
                    }
                ]
            });
        }
        
        
        // ########################
		// #### System Presets ####
		// ########################

       s.power = false;
       if (s.power == true) 
       {
            presets.push({
                category: 'System',
                label: 'Power Off',
                bank: {
                    style: 'text',
                    text: 'Power\\nOFF',
                    size: '18',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0),
                },
                actions: [
                    {
                        action: 'powerOff',
                    }
                ],
                feedbacks: [
                    {
                        type: 'powerState',
                        options: {
                            option: '0'
                        }
                    }
                ],
            });

            presets.push({
                category: 'System',
                label: 'Power On',
                bank: {
                    style: 'text',
                    text: 'Power\\nON',
                    size: '18',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0),
                },
                actions: [
                    {
                        action: 'powerOn',
                    }
                ],
                feedbacks: [
                    {
                        type: 'powerState',
                        options: {
                            option: '1'
                        }
                    }
                ],
            });
        }
                
        s.tally=false;
        if (s.tally == true) 
        {
            presets.push({
                category: 'System',
                label: 'Tally Off',
                bank: {
                    style: 'text',
                    text: 'Tally\\nOFF',
                    size: '18',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0),
                },
                actions: [
                    {
                        action: 'tallyOff',
                    }
                ],
                feedbacks: [
                    {
                        type: 'tallyState',
                        options: {
                            option: '0'
                        }
                    }
                ],

            });
            
            presets.push({
                category: 'System',
                label: 'Tally On',
                bank: {
                    style: 'text',
                    text: 'Tally\\nON',
                    size: '18',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0),
                },
                actions: [
                    {
                        action: 'tallyOn',
                    }
                ],
                feedbacks: [
                    {
                        type: 'tallyState',
                        options: {
                            option: '1'
                        }
                    }
                ],
            });
        }

        s.ins = false
        if (s.ins == true) 
        {
            presets.push({
                category: 'System',
                label: 'INS Desktop',
                bank: {
                    style: 'text',
                    text: 'INS\\nDesk',
                    size: '18',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0),
                },
                actions: [
                    {
                        action: 'insPosition',
                        options: {
                            position: 0,
                        }
                    }
                ],
                feedbacks: [
                    {
                        type: 'insState',
                        options: {
                            option: '0'
                        }
                    }
                ],
            });

            presets.push({
                category: 'System',
                label: 'INS Hanging',
                bank: {
                    style: 'text',
                    text: 'INS\\nHang',
                    size: '18',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0),
                },
                actions: [
                    {
                        action: 'insPosition',
                        options: {
                            position: 1,
                        }
                    }
                ],
                feedbacks: [
                    {
                        type: 'insState',
                        options: {
                            option: '1'
                        }
                    }
                ],
            });
        }

    s.sdcard = false;
    if (s.sdCard == true)
         {
            presets.push({
                category: 'System',
                label: 'SD Card Recording Start',
                bank: {
                    style: 'text',
                    text: 'SD Card\\nRecording\\nStart',
                    size: '14',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0),
                },
                actions: [
                    {
                        action: 'sdCardRec',
                        options: {
                            value: 'start',
                        }
                    }
                ],
            })

            presets.push({
                category: 'System',
                label: 'SD Card Recording Stop',
                bank: {
                    style: 'text',
                    text: 'SD Card\\nRecording\\nStop',
                    size: '14',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0),
                },
                actions: [
                    {
                        action: 'sdCardRec',
                        options: {
                            value: 'end',
                        }
                    }
                ],
            });
        }
        // ###########################
		// #### Load/save Presets ####
		// ###########################
    
        s.preset = true;
        if (s.preset == true)
         {
            for (var save = 1; save < 100; save++) {
                presets.push({
                    category: 'Save Preset',
                    label: 'Save Preset ' + parseInt(save),
                    bank: {
                        style: 'text',
                        text: 'SAVE\\nPSET\\n' + parseInt(save),
                        size: '14',
                        color: '16777215',
                        bgcolor: self.rgb(0, 0, 0),
                    },
                    actions: [
                        {
                            action: 'Setpreset',
                            options: {
                                preset: save,
                            }
                        }
                    ]
                });
            }
        }

        s.timePset = false;
        if (s.timePset == true) 
        {
            presets.push({
                category: 'Recall Preset',
                label: 'Preset Mode Speed',
                bank: {
                    style: 'text',
                    text: 'PRESET\\nMODE\\nSPEED',
                    size: '14',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0),
                },
                actions: [
                    {
                        action: 'modePset',
                        options: {
                            mode: 0,
                        }
                    }
                ],
            });

            presets.push({
                category: 'Recall Preset',
                label: 'Preset Mode Time',
                bank: {
                    style: 'text',
                    text: 'PRESET\\nMODE\\nTIME',
                    size: '14',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0),
                },
                actions: [
                    {
                        action: 'modePset',
                        options: {
                            mode: 1,
                        }
                    }
                ],
            });
        }

        s.speedPset=false;
        if (s.speedPset == true) 
        {
            presets.push({
                category: 'Recall Preset',
                label: 'Set Recall Speed High',
                bank: {
                    style: 'text',
                    text: 'RECALL\\nSPEED\\nHIGH',
                    size: '14',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0),
                },
                actions: [
                    {
                        action: 'speedPset',
                        options: {
                            speed: 25
                        }
                    }
                ]
            });

            presets.push({
                category: 'Recall Preset',
                label: 'Set Recall Speed Mid',
                bank: {
                    style: 'text',
                    text: 'RECALL\\nSPEED\\nMID',
                    size: '14',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0),
                },
                actions: [
                    {
                        action: 'speedPset',
                        options: {
                            speed: 15
                        }
                    }
                ]
            });

            presets.push({
                category: 'Recall Preset',
                label: 'Set Recall Speed Low',
                bank: {
                    style: 'text',
                    text: 'RECALL\\nSPEED\\nLOW',
                    size: '14',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0),
                },
                actions: [
                    {
                        action: 'speedPset',
                        options: {
                            speed: 5
                        }
                    }
                ]
            });
        }
        
    s.timePset = false;
    if (s.timePset == true)
         {
            presets.push({
                category: 'Recall Preset',
                label: 'Set Recall Time High',
                bank: {
                    style: 'text',
                    text: 'RECALL\\nTIME\\n5 Sec',
                    size: '14',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0),
                },
                actions: [
                    {
                        action: 'speedPset',
                        options: {
                            speed: 5
                        }
                    }
                ]
            });

            presets.push({
                category: 'Recall Preset',
                label: 'Set Recall Time Mid',
                bank: {
                    style: 'text',
                    text: 'RECALL\\nTIME\\n10 Sec',
                    size: '14',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0),
                },
                actions: [
                    {
                        action: 'speedPset',
                        options: {
                            speed: 10
                        }
                    }
                ]
            });

            presets.push({
                category: 'Recall Preset',
                label: 'Set Recall Time Low',
                bank: {
                    style: 'text',
                    text: 'RECALL\\nTIME\\n30 Sec',
                    size: '14',
                    color: '16777215',
                    bgcolor: self.rgb(0, 0, 0),
                },
                actions: [
                    {
                        action: 'speedPset',
                        options: {
                            speed: 30
                        }
                    }
                ]
            });
        }

       s.preset =true;
       if (s.preset == true) 
       {
            for (var recall = 1; recall < 100; recall++) {
                presets.push({
                    category: 'Recall Preset',
                    label: 'Recall Preset ' + parseInt(recall ),
                    bank: {
                        style: 'text',
                        text: 'preset ' + parseInt(recall ),
                        size: '14',
                        color: '16777215',
                        bgcolor: self.rgb(0, 0, 0),
                    },
                    actions: [
                        {
                            action: 'preset',
                            options: {
                                preset: recall,
                            }
                        }
                       


                    ]
                });
            }
        }

        return(presets);
    }
}
