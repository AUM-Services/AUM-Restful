// Copyright aumono.com - 2022

import "./json-formatter-js/dist/json-formatter.umd.js"

let OutputFormatter;

export class AUMRestful {

    static GetViaHTTPS(urlBox, endpointBox, outputBox) {
        let localURL = urlBox.value;
        let localEndpoint = endpointBox.value;
        let jsonTest = "https://ericdee.blog/?rest_route=/wp/v2/posts&_embed";
        let outputType = jsonTest;

        console.log("Starting a new HTTPS GET request:");

        fetch(outputType)
            .then(response => response.json())
            .then(json => {
                OutputFormatter = new JSONFormatter(json);
                outputBox.appendChild(OutputFormatter.render());
                OutputFormatter.openAtDepth(1);
            })
            .catch(e => {
                alert(e);
            });
    }
}