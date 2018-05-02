import { h, render, Component } from "preact";
import { Link } from "preact-router/match";

export default class BlogSnippet extends Component {
  constructor(props) {
    super();
    this.setState({ snippet: props.snippet });
  }

  render({}, { snippet }) {
    return (
      <section>
        <h2>
          {snippet.title}
          &nbsp;<Link activeClassName="active" href={"/blog/" + snippet.slug}>
            Link
          </Link>
        </h2>
        <p>{snippet.preview}</p>
      </section>
    );
  }
}
