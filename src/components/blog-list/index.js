import { h, render, Component } from "preact";
import BlogSnippet from "../blog-snippet";
import Header from "../header";

export default class BlogList extends Component {
  constructor(props) {
    super();
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

    return (
      <div>
        <Header />
        {postsSnippets}
      </div>
    );
  }
}
