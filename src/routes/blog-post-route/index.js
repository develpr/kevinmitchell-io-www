import { h, Component } from 'preact';
import BlogPost from '../../components/blog-post';
import Header from '../../components/header';

export default class BlogPostRoute extends Component {
	
	render({slug}) {
		return (
			<section>
				<Header format="simple" />
				<BlogPost slug={slug} />
			</section>
		);
	}
}

