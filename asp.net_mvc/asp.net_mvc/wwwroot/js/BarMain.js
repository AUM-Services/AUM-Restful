// Copyright aumono.com - 2022

import { AUMRestful } from "./AUMRestful.js"

console.log("BarMain.js loaded.");

const URLInput = document.getElementById("URL_Input");

const EndpointInput = document.getElementById("Endpoint_Input");

const ResponseOutput = document.getElementById("Response_Content_Render");

AUMRestful.GetViaHTTPS(URLInput, EndpointInput, ResponseOutput);