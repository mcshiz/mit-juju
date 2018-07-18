import React, { Component } from 'react';
import { render } from 'react-dom';
import { Menu } from './menu'
import MyMap from "./map";
class Home extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>
				<MyMap/>
			</div>
		)
	}
}
export default Home