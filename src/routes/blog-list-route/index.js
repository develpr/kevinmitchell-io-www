import { h, Component } from 'preact';
import BlogList from '../../components/blog-list'

export default class BlogListRoute extends Component {

	constructor(params) {
		super();
	}
	
	render() {
		return (
			<BlogList />
		);
	}
}
