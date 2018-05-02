import { h, render, Component } from "preact";
import { Link } from "preact-router/match";

export default class LinkList extends Component {
  constructor(props) {
    super();
  }

  render({}, {}) {
    return (
      <nav style="display:inline;">
        <Link activeClassName="active" href="/blog">
          Blog
        </Link>
        <Link activeClassName="active" href="/resume">
          Resume
        </Link>
      </nav>
    );
  }
}
