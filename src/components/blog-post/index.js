import { h, render, Component } from 'preact';

export default class BlogPost extends Component {

    constructor(props) {
		super();
		fetch(`https://api.kevinmitchell.io/content/posts/${props.slug}`)
		.then(response => response.json())
		.then(blog => this.setState({post: blog.html, title: blog.title }));
    }
    
    render({}, {post, title}) {
		if(!post || !title) {
			return(<div></div>);
		}
        return (
			<div>
				<h2>
					{title}
				</h2>
				<div  dangerouslySetInnerHTML={{__html:post}}></div>
			</div>
		);
    }
}