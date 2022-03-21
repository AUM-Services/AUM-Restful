// Copyright aumono.com - 2022

import { AUMRestful } from "./AUM Restful.js"

console.log("Bar Main.js loaded.");

const URLInput = document.getElementById("URL-Input");

const EndpointInput = document.getElementById("Endpoint-Input");

const ResponseOutput = document.getElementById("Response-Content-Render");

AUMRestful.GetViaHTTPS(URLInput, EndpointInput, ResponseOutput);