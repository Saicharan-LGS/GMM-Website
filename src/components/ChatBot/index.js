import  { Component } from 'react';
// Flag to check if the Kommunicate script is already loaded
let isKommunicateLoaded = false;

class ChatBot extends Component {

  componentDidMount() {
    if (!isKommunicateLoaded) {
      (function(d, m) {
        var kommunicateSettings = {
          appId: "1a852afcd2481f81c50865aebe85f1316",
          popupWidget: true,
          automaticChatOpenOnNavigation: true
        };
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0];
        h.appendChild(s);
        window.kommunicate = m;
        m._globals = kommunicateSettings;
        isKommunicateLoaded = true;
      })(document, window.kommunicate || {});
    }
  }

  render() {
    return
  }
}

export default ChatBot;

 

 