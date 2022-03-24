// Copyright aumono.com - 2022

import "./Ext-Dependencies/json-formatter-js/dist/json-formatter.umd.js"

let OutputFormatter;

export class AUMRestful {

    static GetViaHTTPS(urlBox, endpointBox, outputBox) {
        let localURL = urlBox.value;
        let localEndpoint = endpointBox.value;
        let viewTesting = mockJSONResponse;
        let outputType = viewTesting;

        console.log("Starting a new HTTPS GET request:");

        switch (outputType) {

            case mockJSONResponse:
                OutputFormatter = new JSONFormatter(outputType);
                outputBox.appendChild(OutputFormatter.render());
                OutputFormatter.openAtDepth(1);
                break;

            default:
                fetch(outputType)
                    .then(response => response.json())
                    .then(responseAsJSON => {
                        OutputFormatter = new JSONFormatter(responseAsJSON);
                        outputBox.appendChild(OutputFormatter.render());
                        OutputFormatter.openAtDepth(1);
                    })
                    .catch(e => {
                        alert(e);
                    });
                break;
        }
    }
}

const Today = new Date();

var mockJSONResponse =
{
    "Response": {
        "Name": "Eric",
        "Site": "aumono.com",
        "Copyright": "2022",
        "Art": "aumono.art",
        "Blog": "aumono.blog"
    },
    "Type": "View",
    "Location": "Output",
    "Today's date": `${Today.getFullYear()}:${Today.getMonth()}-${Today.getDate()}`,
}