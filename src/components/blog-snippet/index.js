import { h, render, Component } from "preact";
import { Link } from "preact-router/match";

export default class BlogSnippet extends Component {
  constructor(props) {
    super();
    this.setState({ snippet: props.snippet });
  }

  render({}, { snippet }) {
    return (
      <ul>
        <li>
          <Link activeClassName="active" href={"/blog/" + snippet.slug}>
            {snippet.title}
          </Link>
        </li>
      </ul>
    );
  }
}
