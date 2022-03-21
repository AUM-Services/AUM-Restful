// Written by Eric Dee

import { Restline, RestlineURL } from "./restline.js";

/* Startup */
let urls = new RestlineURL();
Restline.MakeContextCurrent(urls);

/* Runtime */
// Note: Try to find a way to iterate over these
window.ReadURLInput = Restline.ReadURLInput;
window.ReadEndpointInput = Restline.ReadEndpointInput;
window.SendRequest = Restline.SendRequest;
