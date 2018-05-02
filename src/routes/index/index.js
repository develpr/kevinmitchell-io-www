import { h, Component } from "preact";
import Block from "../../components/block";
import LinkList from "../../components/link-list";

export default class Index extends Component {
  render() {
    return (
      <section>
        <Block id="home-page-content" default="" />
        <LinkList />
      </section>
    );
  }
}
