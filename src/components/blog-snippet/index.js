import { h, render, Component } from 'preact';

export default class BlogSnippet extends Component {

    constructor(props) {
		super();
		this.setState({snippet: props.snippet});
    }
    
    render({}, {snippet}) {
			console.log("rendering..");
			return (
				<a href={"/blog/" + snippet.slug}>{snippet.title}</a>
			)
    }
}