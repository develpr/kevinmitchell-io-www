import { h, render, Component } from "preact";
import BlogSnippet from "../blog-snippet";

export default class BlogList extends Component {
  componentWillMount() {
    // fetch(`http://localhost:3000/content/posts?site=kevinmitchell-io`)
    fetch(`https://api.kevinmitchell.io/content/posts?site=kevinmitchell-io`)
      .then(response => response.json())
      .then(posts => {
        this.setState({ posts: posts });
      });
  }

  render({}, { posts }) {
    if (!posts) {
      return <div />;
    }

    var postsSnippets = [];
    for (var i = 0; i < posts.length; i++) {
      postsSnippets.push(<BlogSnippet snippet={posts[i]} />);
    }

    return <div>{postsSnippets}</div>;
  }
}
