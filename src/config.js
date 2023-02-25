import { MODELS } from "./models.js";

export const ConfigFields = [
  {
    type: "static-text",
    id: "info",
    width: 12,
    label: "Information",
    value:
      "This module controls Axis PTZ cameras. In a later release it will ask the camera about the attributes, up till then not all commands will work with each axis camera",
  },
  {
    type: "textinput",
    id: "host",
    label: "Camera IP",
    width: 10,
    // regex: Regex.IP
  },
  {
    type: "number",
    id: "httpPort",
    label: "HTTP Port (Default: 80)",
    width: 10,
    default: 80,
    min: 1,
    max: 65535,
  },
  {
    type: "static-text",
    id: "dummy1",
    width: 12,
    label: " ",
    value: " ",
  },
  {
    type: "textinput",
    id: "user",
    label: "User name",
    tooltip: "The user name.",
    width: 10,
  },
  {
    type: "textinput",
    id: "password",
    label: "Password",
    tooltip: "The password",
    width: 10,
  },
  {
    type: "dropdown",
    id: "authmethod",
    default: "0",
    label: "Authentication method",
    width: 10,

    choices: [
      { id: 0, label: "BasicAuth" },
      { id: 1, label: "DigestAuth" },
    ],

    // regex: Regex.IP
  },
  {
    type: "textinput",
    id: "timeout",
    label: "timeout",
    tooltip: "In case of a high latency network you can set the timeout to another value",
    value: "5000",
    width: 10,
  },
  {
    type: "dropdown",
    id: "debug",
    default: "0",
    label: "extended debug",
    width: 10,

    choices: [
      { id: 0, label: "off" },
      { id: 1, label: "on" },
    ],

  },
];
