import React, { Component } from 'react';
import '../styles/blog.css'

export class NewBlog extends  Component {
	constructor(props) {
		super(props);
		this.pickLocation = this.pickLocation.bind(this)
	}
	pickLocation = () => {
		this.props.pickLocation()
	}

	render() {
		return (
			<div>
				<a href="#" onClick={this.pickLocation}>Pick A Location For This Entry</a>
			</div>
		)

	}
}
export default NewBlog