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
/* Navigation button events */

const HomeButtonLeft = document.getElementById("Default-Home-Button-Left");
const UpdatesButtonLeft = document.getElementById("Default-Updates-Button-Left");
const SendButtonLeft = document.getElementById("Default-Send-Button-Left");
const HomeNavButton = document.getElementById("Home-Navigator");
const UpdatesNavButton = document.getElementById("Updates-Navigator");
const SendNavButton = document.getElementById("Send-Navigator");

function BaffleText(textToBaffle) {

    const BaffledText = baffle(textToBaffle);

    BaffledText.set({
        characters: '01',
        speed: 4
    });

    BaffledText.start()
        .reveal(16, 256);
}

HomeNavButton.onclick = () => {
    BaffleText(HomeButtonLeft);
}

UpdatesNavButton.onclick = () => {
    BaffleText(UpdatesButtonLeft);
}

SendNavButton.onclick = () => {
    BaffleText(SendButtonLeft);
}