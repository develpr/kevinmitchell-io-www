import { h, render, Component } from 'preact';

export default class Block extends Component {

    constructor(props) {
		super();

		if (typeof window == "undefined") { 
			this.setState({content: props.default});
			// const https = require('https');
			// const http = require('http');
			
			// http.get(`http://localhost:3000/content/blocks/${props.id}`, (resp) => {
			// 	let data = '';
			// 	console.log("asdfads");
			// 	// A chunk of data has been received.
			// 	resp.on('data', (chunk) => {
			// 		console.log("chunk...");
			// 		data += chunk;
			// 	});
				
			// 	resp.on('end', () => {
			// 		this.setState({content: JSON.parse(data).html });
			// 	  });
			// });
			
		} else {
			fetch(`https://api.kevinmitchell.io/content/blocks/${props.id}`)
			// fetch(`http://localhost:3000/content/blocks/${props.id}`)
      		.then(response => response.json())
      		.then(content => this.setState({content: content.html }));
		}
		
		
    }
    
    render({}, {content}) {
		if(!content) {
			return(<div></div>);
		}
        return (
			<div dangerouslySetInnerHTML={{__html:content}}>
			</div>
		);
    }
}