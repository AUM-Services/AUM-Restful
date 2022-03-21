// Written by Eric Dee

import "./restline_style_reset.css";
import "./restline_application_style.css";

import ServicesBar from "./components/services_bar/ServicesBar";
import HistorySideBar from "./components/history_side_bar/history_side_bar";
import ResultsOutputBox from "./components/results_output_box/results_output_box";

function App() {
  return (
    <div className="App">
      <ServicesBar />
      <section className="ImageHeader">
        <img
          src={require("./sign_front_by_eric_dee.png")}
          className="SignFront"
        />
      </section>
      <section id="RestlineGridBox">
        <HistorySideBar />
        <div className="Placeholder"></div>
        <ResultsOutputBox />
      </section>
    </div>
  );
}

export default App;
