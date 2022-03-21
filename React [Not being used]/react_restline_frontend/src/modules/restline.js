// Written by Eric Dee

// Protocol notes
/* XMLHttpRequest:
 * 0 unsent = Client created, but created.open() has not been called
 * 1 opeend = open has been called
 * 2 headers_received = send() has been called, and the headers and status are available
 * 3 loading = downloading, and responseText may have partial data
 * 4 done = all processes are complete
 */
// End notes

console.log(
  "Does the window response need to be changed?: " +
    window.ResponseNeedsToBeChanged
);

// Acts as en enum
const RESTLINE_PROTOCOLS = {
  http: "http",
  https: "https",
};

export class RestlineURL {
  constructor() {
    this.RestlineURL = "restline.io";
    this.RestlineEndpoint = "";
  }
}

// Acts as a namespace | Can use the this keyword for static fields if preferred, but due to react usage, methods must retain the namespace
export class Restline {
  static URLRepository = undefined;
  static Response = "Results output box placeholder";

  static MakeContextCurrent(urlRepository) {
    try {
      if (Restline.URLRepository === undefined) {
        console.log("Instantiated the static url");
        Restline.URLRepository = urlRepository;
      }
      Restline.URLRepository.RestlineURL = urlRepository.RestlineURL;
      Restline.URLRepository.RestlineEndpoint = urlRepository.RestlineEndpoint;
      window.ResponseNeedsToBeChanged = true;
    } catch (error) {
      console.log(
        "The context could not be changed due to this error: " + error
      );
    }
  }

  static async RestGetHTTPS() {
    let imageTest = `https://${Restline.URLRepository.RestlineURL}/${Restline.URLRepository.RestlineEndpoint}`;
    let contentTest = "text/html";
    // Note: Make a new endpoint to test. The wordpress api is slow, and all browsers cache this right away
    let jsonTest = "https://ericdee.blog/?rest_route=/wp/v2/posts&_embed";
    let externalTest = "https://jsonplaceholder.typicode.com/posts";
    let using = externalTest;

    console.log("****Requesting from: " + using);
    let getRequest = new XMLHttpRequest();
    getRequest.open("GET", using, true);
    getRequest.send();

    getRequest.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        console.log("Data received.");
        switch (using) {
          case contentTest:
            Restline.Response = this.response;
            window.ResponseNeedsToBeChanged = true;
            break;
          case imageTest:
            Restline.Response = this.response;
            window.ResponseNeedsToBeChanged = true;
            break;
          default:
            Restline.Response = JSON.stringify(this.response);
            window.ResponseNeedsToBeChanged = true;
            break;
        }
      }
    };
  }

  static ReadURLInput(input) {
    if (input.target) {
      input = input.target;
    }
    Restline.AssignURL(input.value);
  }

  static ReadEndpointInput(input) {
    if (input.target) {
      input = input.target;
    }
    Restline.AssignEndpoint(input.value);
  }

  static DisplayURL(protocol) {
    console.log(
      protocol +
        "://" +
        Restline.URLRepository.RestlineURL +
        "/" +
        Restline.URLRepository.RestlineEndpoint
    );
  }

  static AssignURL(input) {
    Restline.URLRepository.RestlineURL = input;
  }

  static AssignEndpoint(input) {
    Restline.URLRepository.RestlineEndpoint = input;
  }

  static SendRequest() {
    let n = document.getElementsByTagName("input");
    Restline.ReadURLInput(n.item(0));
    Restline.ReadEndpointInput(n.item(1));
    Restline.DisplayURL(RESTLINE_PROTOCOLS.https);
    Restline.RestGetHTTPS();
  }
}
