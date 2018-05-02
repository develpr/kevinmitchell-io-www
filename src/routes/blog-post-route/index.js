import { h, Component } from 'preact';
import BlogPost from '../../components/blog-post';

export default class BlogPostRoute extends Component {
	
	render({slug}) {
		return (
			<BlogPost slug={slug} />
		);
	}
}

