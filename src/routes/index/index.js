import { h, Component } from 'preact';
import Block from '../../components/block';

export default class Index extends Component {
	
	render() {
		return (
			<Block id="home-page-content" default='<h1 id="hello-i-am-kevin-mitchell">Hello, I am Kevin Mitchell</h1><p>This site is intended to serve as an index for things I have made and information about me.</p><p><a href="http://kevinmitchell.io/resume.pdf">Resume</a><a href="http://kevinmitchell.io/blog">Blog</a></p>'/>
		);
	}
}
