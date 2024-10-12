import { combineRgb } from "@companion-module/base";

import { icons } from "./icons.js";

export function getPresetDefinitions(self) {
  const presets = {};

  const foregroundColor = combineRgb(255, 255, 255); // White
  const backgroundColorRed = combineRgb(255, 0, 0); // Red

  const seriesActions = {};
  seriesActions.panTilt = true;

  // console.log(SERIES);

  // ##########################
  // #### Pan/Tilt Presets ####
  // ##########################

  if (seriesActions.panTilt) {
    presets["pan-tilt-up"] = {
      type: "button",
      category: "Pan/Tilt",
      name: "UP",
      style: {
        png64: icons.ICON_UP,
        pngalignment: "center:center",
        size: "18",
        color: 16777215,
        bgcolor: combineRgb(0, 0, 0),
      },
      steps: [
        {
          down: [
            {
              actionId: "up",
              options: {
                speed: 25,
              },
            },
          ],
          up: [
            {
              actionId: "stop",
              options: {},
            },
          ],
        },
      ],
      feedbacks: [
        {
          feedbackId: "MaxTiltLimit",
          style: {
            color: foregroundColor,
            bgcolor: backgroundColorRed,
          },
        },
      ],
    };

    presets["pan-tilt-down"] = {
      type: "button",
      category: "Pan/Tilt",
      name: "DOWN",
      style: {
        text: "",
        png64: icons.ICON_DOWN,
        pngalignment: "center:center",
        size: "18",
        color: 16777215,
        bgcolor: combineRgb(0, 0, 0),
      },
      steps: [
        {
          down: [
            {
              actionId: "down",
              options: {
                speed: 25,
              },
            },
          ],
          up: [
            {
              actionId: "stop",
              options: {},
            },
          ],
        },
      ],
      feedbacks: [
        {
          feedbackId: "MinTiltLimit",
          style: {
            color: foregroundColor,
            bgcolor: backgroundColorRed,
          },
        },
      ],
    };

    presets["pan-tilt-left"] = {
      type: "button",
      category: "Pan/Tilt",
      name: "LEFT",
      style: {
        text: "",
        png64: icons.ICON_LEFT,
        pngalignment: "center:center",
        size: "18",
        color: 16777215,
        bgcolor: combineRgb(0, 0, 0),
      },
      steps: [
        {
          down: [
            {
              actionId: "left",
              options: {
                speed: 25,
              },
            },
          ],
          up: [
            {
              actionId: "stop",
              options: {},
            },
          ],
        },
      ],
      feedbacks: [
        {
          feedbackId: "MinPanLimit",
          style: {
            color: foregroundColor,
            bgcolor: backgroundColorRed,
          },
        },
      ],
    };

    presets["pan-tilt-right"] = {
      type: "button",
      category: "Pan/Tilt",
      name: "RIGHT",
      style: {
        text: "",
        png64: icons.ICON_RIGHT,
        pngalignment: "center:center",
        size: "18",
        color: 16777215,
        bgcolor: combineRgb(0, 0, 0),
      },
      steps: [
        {
          down: [
            {
              actionId: "right",
              options: {
                speed: 25,
              },
            },
          ],
          up: [
            {
              actionId: "stop",
              options: {},
            },
          ],
        },
      ],
      feedbacks: [
        {
          feedbackId: "MaxPanLimit",
          style: {
            color: foregroundColor,
            bgcolor: backgroundColorRed,
          },
        },
      ],
    };

    presets["pan-tilt-up-right"] = {
      type: "button",
      category: "Pan/Tilt",
      name: "UP RIGHT",
      style: {
        text: "",
        png64: icons.ICON_UP_RIGHT,
        pngalignment: "center:center",
        size: "18",
        color: 16777215,
        bgcolor: combineRgb(0, 0, 0),
      },
      steps: [
        {
          down: [
            {
              actionId: "upRight",
              options: {
                speed: 25,
              },
            },
          ],
          up: [
            {
              actionId: "stop",
              options: {},
            },
          ],
        },
      ],
      feedbacks: [
        {
          feedbackId: "MaxTiltLimit",
          style: {
            color: foregroundColor,
            bgcolor: backgroundColorRed,
          },
        },
        {
          feedbackId: "MaxPanLimit",
          style: {
            color: foregroundColor,
            bgcolor: backgroundColorRed,
          },
        },
      ],
    };

    presets["pan-tilt-up-left"] = {
      type: "button",
      category: "Pan/Tilt",
      name: "UP LEFT",
      style: {
        text: "",
        png64: icons.ICON_UP_LEFT,
        pngalignment: "center:center",
        size: "18",
        color: 16777215,
        bgcolor: combineRgb(0, 0, 0),
      },
      steps: [
        {
          down: [
            {
              actionId: "upLeft",
              options: {
                speed: 25,
              },
            },
          ],
          up: [
            {
              actionId: "stop",
              options: {},
            },
          ],
        },
      ],
      feedbacks: [
        {
          feedbackId: "MaxTiltLimit",
          style: {
            color: foregroundColor,
            bgcolor: backgroundColorRed,
          },
        },
        {
          feedbackId: "MinPanLimit",
          style: {
            color: foregroundColor,
            bgcolor: backgroundColorRed,
          },
        },
      ],
    };

    presets["pan-tilt-down-left"] = {
      type: "button",
      category: "Pan/Tilt",
      name: "DOWN LEFT",
      style: {
        text: "",
        png64: icons.ICON_DOWN_LEFT,
        pngalignment: "center:center",
        size: "18",
        color: 16777215,
        bgcolor: combineRgb(0, 0, 0),
      },
      steps: [
        {
          down: [
            {
              actionId: "downLeft",
              options: {
                speed: 25,
              },
            },
          ],
          up: [
            {
              actionId: "stop",
              options: {},
            },
          ],
        },
      ],
      feedbacks: [
        {
          feedbackId: "MinTiltLimit",
          style: {
            color: foregroundColor,
            bgcolor: backgroundColorRed,
          },
        },
        {
          feedbackId: "MinPanLimit",
          style: {
            color: foregroundColor,
            bgcolor: backgroundColorRed,
          },
        },
      ],
    };

    presets["pan-tilt-down-right"] = {
      type: "button",
      category: "Pan/Tilt",
      name: "DOWN RIGHT",
      style: {
        text: "",
        png64: icons.ICON_DOWN_RIGHT,
        pngalignment: "center:center",
        size: "18",
        color: 16777215,
        bgcolor: combineRgb(0, 0, 0),
      },
      steps: [
        {
          down: [
            {
              actionId: "downRight",
              options: {
                speed: 25,
              },
            },
          ],
          up: [
            {
              actionId: "stop",
              options: {},
            },
          ],
        },
      ],
      feedbacks: [
        {
          feedbackId: "MinTiltLimit",
          style: {
            color: foregroundColor,
            bgcolor: backgroundColorRed,
          },
        },
        {
          feedbackId: "MaxPanLimit",
          style: {
            color: foregroundColor,
            bgcolor: backgroundColorRed,
          },
        },
      ],
    };

    presets["pan-tilt-home"] = {
      type: "button",
      category: "Pan/Tilt",
      name: "Home",
      style: {
        text: "HOME",
        size: "18",
        color: 16777215,
        bgcolor: combineRgb(0, 0, 0),
      },
      steps: [
        {
          down: [
            {
              actionId: "home",
              options: {},
            },
          ],
          up: [],
        },
      ],
      feedbacks: [],
    };
  }
  seriesActions.ptSpeed = false;
  if (seriesActions.ptSpeed) {
    presets["pan-tilt-speed-up"] = {
      type: "button",
      category: "Pan/Tilt",
      name: "Speed Up",
      style: {
        text: "SPEED\\nUP\\n$(axis-PTZ:ptSpeedVar)",
        size: "14",
        color: 16777215,
        bgcolor: combineRgb(0, 0, 0),
      },
      steps: [
        {
          down: [
            {
              actionId: "ptSpeedU",
              options: {},
            },
          ],
          up: [],
        },
      ],
      feedbacks: [],
    };

    presets["pan-tilt-speed-down"] = {
      type: "button",
      category: "Pan/Tilt",
      name: "Speed Down",
      style: {
        text: "SPEED\\nDOWN\\n$(axis-PTZ:ptSpeedVar)",
        size: "14",
        color: 16777215,
        bgcolor: combineRgb(0, 0, 0),
      },
      steps: [
        {
          down: [
            {
              actionId: "ptSpeedD",
              options: {},
            },
          ],
          up: [],
        },
      ],
      feedbacks: [],
    };

    presets["pan-tilt-speed-high"] = {
      type: "button",
      category: "Pan/Tilt",
      name: "Speed Set High",
      style: {
        text: "SET\\nSPEED\\nHIGH",
        size: "14",
        color: 16777215,
        bgcolor: combineRgb(0, 0, 0),
      },
      steps: [
        {
          down: [
            {
              actionId: "ptSpeedS",
              options: {
                speed: 40,
              },
            },
          ],
          up: [],
        },
      ],
      feedbacks: [],
    };

    presets["pan-tilt-speed-mid"] = {
      type: "button",
      category: "Pan/Tilt",
      name: "Speed Set Mid",
      style: {
        text: "SET\\nSPEED\\nMID",
        size: "14",
        color: 16777215,
        bgcolor: combineRgb(0, 0, 0),
      },
      steps: [
        {
          down: [
            {
              actionId: "ptSpeedS",
              options: {
                speed: 25,
              },
            },
          ],
          up: [],
        },
      ],
      feedbacks: [],
    };

    presets["pan-tilt-speed-low"] = {
      type: "button",
      category: "Pan/Tilt",
      name: "Speed Set Low",
      style: {
        text: "SET\\nSPEED\\nLOW",
        size: "14",
        color: 16777215,
        bgcolor: combineRgb(0, 0, 0),
      },
      steps: [
        {
          down: [
            {
              actionId: "ptSpeedS",
              options: {
                speed: 10,
              },
            },
          ],
          up: [],
        },
      ],
      feedbacks: [],
    };
  }

  // ######################
  // #### Lens Presets ####
  // ######################

  seriesActions.zoom = true;
  if (seriesActions.zoom) {
    presets["lens-zoom-in"] = {
      type: "button",
      category: "Lens",
      name: "Zoom In",
      style: {
        text: "ZOOM\\nIN",
        size: "18",
        color: 16777215,
        bgcolor: combineRgb(0, 0, 0),
      },
      steps: [
        {
          down: [
            {
              actionId: "zoomI",
              options: {
                zoomspeed: 25,
              },
            },
          ],
          up: [
            {
              actionId: "zoomS",
              options: {},
            },
          ],
        },
      ],
      feedbacks: [
        {
          feedbackId: "maxzoom",
          style: {
            color: foregroundColor,
            bgcolor: backgroundColorRed,
          },
        },
      ],
    };

    presets["lens-zoom-out"] = {
      type: "button",
      category: "Lens",
      name: "Zoom Out",
      style: {
        text: "ZOOM\\nOUT",
        size: "18",
        color: 16777215,
        bgcolor: combineRgb(0, 0, 0),
      },
      steps: [
        {
          down: [
            {
              actionId: "zoomO",
              options: {
                zoomspeed: 25,
              },
            },
          ],
          up: [
            {
              actionId: "zoomS",
              options: {},
            },
          ],
        },
      ],
      feedbacks: [
        {
          feedbackId: "minzoom",
          style: {
            color: foregroundColor,
            bgcolor: backgroundColorRed,
          },
        },
      ],
    };
  }

  seriesActions.focus = true;
  if (seriesActions.focus) {
    presets["lens-focus-near"] = {
      type: "button",
      category: "Lens",
      name: "Focus Near",
      style: {
        text: "FOCUS\\nNEAR",
        size: "18",
        color: 16777215,
        bgcolor: combineRgb(0, 0, 0),
      },
      steps: [
        {
          down: [
            {
              actionId: "focusI",
              options: {
                speed: 50,

              },
            },
          ],
          up: [
            {
              actionId: "focusS",
              options: {},
            },
          ],
        },
      ],
      feedbacks: [],
    };

    presets["lens-focus-far"] = {
      type: "button",
      category: "Lens",
      name: "Focus Far",
      style: {
        text: "FOCUS\\nFAR",
        size: "18",
        color: 16777215,
        bgcolor: combineRgb(0, 0, 0),
      },
      steps: [
        {
          down: [
            {
              actionId: "focusO",
              options: {speed:50,},
            },
          ],
          up: [
            {
              actionId: "focusS",
              options: {},
            },
          ],
        },
      ],
      feedbacks: [],
    };
  }

  seriesActions.OAF = true;
  if (seriesActions.OAF) {
    presets["lens-focus-manual"] = {
      type: "button",
      category: "Lens",
      name: "Manual Focus",
      style: {
        text: "MANUAL\\nFOCUS",
        size: "14",
        color: 16777215,
        bgcolor: combineRgb(0, 0, 0),
      },
      steps: [
        {
          down: [
            {
              actionId: "focusM",
              options: {
                bol: 1,
              },
            },
          ],
          up: [],
        },
      ],
      feedbacks: [
        {
          feedbackId: "autoFocus",
          options: {
            option: "0",
          },
          style: {
            color: foregroundColor,
            bgcolor: backgroundColorRed,
          },
        },
      ],
    };

    presets["lens-focus-auto"] = {
      type: "button",
      category: "Lens",
      name: "Auto Focus",
      style: {
        text: "AUTO\\nFOCUS",
        size: "14",
        color: 16777215,
        bgcolor: combineRgb(0, 0, 0),
      },
      steps: [
        {
          down: [
            {
              actionId: "focusM",
              options: {
                bol: 0,
              },
            },
          ],
          up: [],
        },
      ],
      feedbacks: [
        {
          feedbackId: "autoFocus",
          options: {
            option: "1",
          },
          style: {
            color: foregroundColor,
            bgcolor: backgroundColorRed,
          },
        },
      ],
    };
  }

  // ###########################
  // #### Load/save Presets ####
  // ###########################
  seriesActions.preset = true;
  if (seriesActions.preset) {
    for (let save = 0; save < 100; save++) {
      presets[`save-preset-${save}`] = {
        type: "button",
        category: "Save Preset",
        name: "Save Preset " + parseInt(save),
        style: {
          text: "SAVE\\nPSET\\n" + parseInt(save),
          size: "14",
          color: 16777215,
          bgcolor: combineRgb(0, 0, 0),
        },
        steps: [
          {
            down: [
              {
                actionId: "Setpreset",
                options: {
                  val: ("0" + save.toString(10).toUpperCase()).substr(-2, 2),
                },
              },
            ],
            up: [],
          },
        ],
        feedbacks: [],
      };
    }
  }

  if (seriesActions.timePset) {
    presets["recall-preset-preset-mode-speed"] = {
      type: "button",
      category: "Recall Preset",
      name: "Preset Mode Speed",
      style: {
        text: "PRESET\\nMODE\\nSPEED",
        size: "14",
        color: 16777215,
        bgcolor: combineRgb(0, 0, 0),
      },
      steps: [
        {
          down: [
            {
              actionId: "modePset",
              options: {
                mode: 0,
              },
            },
          ],
          up: [],
        },
      ],
      feedbacks: [],
    };

    presets["recall-preset-preset-mode-time"] = {
      type: "button",
      category: "Recall Preset",
      name: "Preset Mode Time",
      style: {
        text: "PRESET\\nMODE\\nTIME",
        size: "14",
        color: 16777215,
        bgcolor: combineRgb(0, 0, 0),
      },
      steps: [
        {
          down: [
            {
              actionId: "modePset",
              options: {
                mode: 1,
              },
            },
          ],
          up: [],
        },
      ],
      feedbacks: [],
    };
  }

  for (let recall = 0; recall < 100; recall++) {
    presets[`recall-preset-${recall}`] = {
      type: "button",
      category: "Recall Preset",
      name: "Recall Preset " + parseInt(recall),
      style: {
        text: "Recall\\nPSET\\n" + parseInt(recall),
        size: "14",
        color: 16777215,
        bgcolor: combineRgb(0, 0, 0),
      },
      steps: [
        {
          down: [
            {
              actionId: "preset",
              options: {
                val: ("0" + recall.toString(10).toUpperCase()).substr(-2, 2),
              },
            },
          ],
          up: [],
        },
      ],
      feedbacks: [],
    };
  }

  return presets;
}
