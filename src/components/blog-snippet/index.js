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
        <br />
				<hr />
				<br />
        <h2>          
          <Link activeClassName="active" href={"/blog/" + snippet.slug}>
					{snippet.title}
          </Link>
        </h2>
        <div dangerouslySetInnerHTML={{__html:snippet.previewHtml}}></div>				
      </section>
			
    );
  }
}
