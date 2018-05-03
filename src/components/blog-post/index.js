import { h, render, Component } from "preact";
import Header from "../header";

export default class BlogPost extends Component {
  constructor(props) {
    super();
    // fetch(`https://api.kevinmitchell.io/content/posts/${props.slug}`)
    fetch(`http://localhost:3000/content/posts/${props.slug}`)
      .then(response => response.json())
      .then(blog => this.setState({ post: blog.html, title: blog.title }));
  }

  render({}, { post, title }) {
    if (!post || !title) {
      return <div />;
    }
    return (
      <div>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post }} />
      </div>
    );
  }
}
