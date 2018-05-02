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
        <h2>
          <Link href="/" activeClass="active">
            🏡
          </Link>
          <LinkList />
        </h2>
      </header>
    );
  }
}
