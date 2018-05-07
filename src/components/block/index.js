import { h, render, Component } from "preact";

export default class Block extends Component {
  componentDidMount() {
    if (typeof window == "undefined") {
      const https = require("https");

      https.get(
        `https://api.kevinmitchell.io/content/blocks/${this.props.id}`,
        resp => {
          let data = "";
          console.log("asdfads");
          // A chunk of data has been received.
          resp.on("data", chunk => {
            console.log("chunk...");
            data += chunk;
          });

          resp.on("end", () => {
            this.setState({ content: JSON.parse(data).html });
          });
        }
      );
    } else {
      fetch(`https://api.kevinmitchell.io/content/blocks/${this.props.id}`)
        .then(response => response.json())
        .then(content => this.setState({ content: content.html }));
    }
  }

  render({}, { content }) {
    if (!content) {
      return <div />;
    }
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
  }
}
