import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Index from '../routes/index';
import BlogListRoute from '../routes/blog-list-route';
import BlogPostRoute from '../routes/blog-post-route';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

if (module.hot) {
	require('preact/debug');
}

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div className="container">
			<div id="app">
				<Router onChange={this.handleRoute}>
					<Index path="/" />
					<BlogListRoute path="/blog" />
					<BlogPostRoute path="/blog/:slug" />
				</Router>
			</div>
			</div>
		);
	}
}
