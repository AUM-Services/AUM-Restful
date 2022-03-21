// Written by Eric Dee

import "./results_output_box.css";
import { Restline } from "../../modules/restline";

import { useState, useEffect } from "react";

export default function ResultsOutputBox() {
  const [responseOutput, updateOutput] = useState(Restline.Response);

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.ResponseNeedsToBeChanged) {
        console.log("The window response needs to be changed.");
        // let base64Image = new Image();
        // base64Image.src = `data:rdf/xml;base64,${Restline.Response}`;
        // updateOutput(base64Image);
        updateOutput(Restline.Response);
        window.ResponseNeedsToBeChanged = false;
        console.log("The window response has been changed.");
      }
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return <main className="ResultsOutputBox">{responseOutput}</main>;
}
