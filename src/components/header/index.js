import { h, render, Component } from "preact";
import LinkList from "../link-list";
import { Link } from "preact-router/match";

export default class Header extends Component {
  constructor(props) {
    super();
  }

  render({}, {}) {
    return (
      <header>
        <h1>
          <Link href="/" activeClass="active">
            👈 Home
          </Link>
        </h1>
        <LinkList />
        <hr />
      </header>
    );
  }
}
