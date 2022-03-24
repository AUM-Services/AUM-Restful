// Copyright aumono.com - 2022

import { AUMRestful } from "./AUM Restful.js"

import baffle from './Ext-Dependencies/baffle/src/baffle.js';

console.log("%c Mode Bar.js loaded.", 'background: #1; color: #1234');

/*
 * 
 * 
/* Input and output elements */

const URLInput = document.getElementById("URL-Input");

const EndpointInput = document.getElementById("Endpoint-Input");

const ResponseOutput = document.getElementById("Response-Content-Render");

AUMRestful.GetViaHTTPS(URLInput, EndpointInput, ResponseOutput);

/*
 * 
 * 
/* Options selector */

let TextToBaffle = document.getElementById("DefaultFieldText");

const BaffledText = baffle(TextToBaffle);

BaffledText.set({
    characters: '01',
    speed: 4
});

BaffledText.start()
    .reveal(16, 256);