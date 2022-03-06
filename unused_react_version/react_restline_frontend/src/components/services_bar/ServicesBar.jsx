// Written by Eric Dee

import React from "react";
import "./services_bar.css";
import "../../modules/restline_main";

// import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";

/* Note: Find alternatives to using window */

export default function ServicesBar() {
  return (
    <main className="ServicesBar">
      <div className="TopServicesBarAlignment">
        <div className="ToServicesBar">
          <section className="TopBarServiceWrapper">
            <div className="TopNavigatorLeft">
              <span className="Logo">Restline</span>
            </div>
            <div className="TopNavigatorRight">
              <div className="TopNavigationInserts">
                <div className="TopNavigationInsert">
                  <pre>URL: </pre>
                  <input
                    className="URLInput"
                    type="text"
                    onChange={window["ReadURLInput"]}
                    defaultValue="symbolicdatabase.com"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="TopBarServiceWrapper">
            <div className="QueryTypes">
              <span className="QueryType">Query</span>
              <select name="query_types" id="query_types">
                <option value="Restful service">Restful service - HTTPS</option>
                <option value="Restful service">Restful service - HTTP</option>
                <option value="DNS Record">DNS Record</option>
                <option value="DNS Record">ICANN/Whois Record</option>
              </select>
            </div>
          </section>

          <section className="TopBarServiceWrapper">
            <div className="RequestTypes">
              <span className="RequestType">Request</span>
              <select name="request_types" id="request_types">
                <option value="Get">Get</option>
                <option value="Post">Post</option>
                <option value="Post">Put</option>
                <option value="Delete">Delete</option>
              </select>
            </div>
          </section>

          <section className="TopBarServiceWrapper">
            <div className="Endpoint">
              <div className="TopNavigatorLeft">
                <span className="EndpointText">Endpoint</span>
              </div>
              <div className="TopNavigatorRight">
                <div className="TopNavigationInserts">
                  <div className="TopNavigationInsert">
                    <pre> / </pre>
                    <input
                      className="EndpointInput"
                      type="text"
                      onChange={window["ReadEndpointInput"]}
                      defaultValue="api/symbol/1"
                    />
                  </div>
                </div>
              </div>
              <button
                className="SendRequestButton"
                onClick={window["SendRequest"]}
              >
                Send
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
