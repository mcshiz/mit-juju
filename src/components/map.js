import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from '../../node_modules/react-leaflet'
import '../styles/map.css'
export default class MyMap extends Component {
	constructor(props){
		super(props)
		this.state = {
			lat: 53.350140,
			lng: -6.266155,
			zoom: 10,
		}
	}
	render() {
		const position = [this.state.lat, this.state.lng]
		return (
			<Map center={position} zoom={this.state.zoom}>
				<TileLayer
					attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
					url="http://toolserver.org/tiles/hikebike/{z}/{x}/{y}.png"
				/>
				<Marker position={position}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</Map>
		)
	}
}