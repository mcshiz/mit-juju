import React, { Component } from 'react';
import '../styles/hamburger.css'
import 'react-sliding-pane/dist/react-sliding-pane.css';

export class Menu extends  Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className="menu">
				<span onClick={this.props.toggleMenu} className="wrapper">
					<input type="checkbox" checked={this.props.menuOpen}/>
					<span className="bun">
						<span className="burger"></span>
					</span>
				</span>
			</div>

		)
	}
}
export default Menu