// Copyright aumono.com - 2022

import { AUMStrings, AUMRestful } from "./AUM-Dependencies/AUM restful.js"
import baffle from './Ext-Dependencies/baffle/src/baffle.js'

console.log("%c Mode Bar.js loaded.", 'background: #1; color: #1234')

//// Variables ////

/* Strings: */
const URL_INPUT = document.getElementById("URL-Input")
const ENDPOINT_INPUT = document.getElementById("Endpoint-Input")

/* Results: */
const RESPONSE_OUTPUT = document.getElementById("Response-Content-Render")

//// End of variables ////

/*
 * 
 * 
/* Getting string references from the document */

let StringCache = new AUMStrings()
let URLContext = { "URLInput": URL_INPUT, "EndpointInput": ENDPOINT_INPUT }

StringCache.AddElementToItsContext("URLContext", URLContext)
StringCache.AddString("EndpointInput", "/")

// Placeholder JSON:
AUMRestful.GetViaHTTPS(URL_INPUT, ENDPOINT_INPUT, RESPONSE_OUTPUT)

/*
 * 
 * 
/* Navigation button events */

const HomeButtonLeft = document.getElementById("Default-Home-Button-Left")
const UpdatesButtonLeft = document.getElementById("Default-Updates-Button-Left")
const SendButtonLeft = document.getElementById("Default-Send-Button-Left")
const HomeNavButton = document.getElementById("Home-Navigator")
const UpdatesNavButton = document.getElementById("Updates-Navigator")
const SendNavButton = document.getElementById("Send-Navigator")

function BaffleText(textToBaffle) {

    const BaffledText = baffle(textToBaffle)

    BaffledText.set({
        characters: '01',
        speed: 4
    })

    BaffledText.start()
        .reveal(16, 256)
}

HomeNavButton.onclick = () => {
    BaffleText(HomeButtonLeft)
}

UpdatesNavButton.onclick = () => {
    BaffleText(UpdatesButtonLeft)
}

SendNavButton.onclick = () => {
    BaffleText(SendButtonLeft)
    StringCache.UpdateContextStrings()
    StringCache.CombineStringsWithADecorator("URLContext", "/")
}