import { h, Component } from 'preact';
import BlogList from '../../components/blog-list';
import Header from '../../components/header';

export default class BlogListRoute extends Component {

	constructor(params) {
		super();
	}
	
	render() {
		return (
			<section>
				<Header format="simple" />
				<BlogList />
			</section>
		);
	}
}
