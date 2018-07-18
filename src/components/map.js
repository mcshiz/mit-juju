import React, { Component, createRef } from 'react'
import Leaflet from 'leaflet'
import { Map, TileLayer, Marker, Popup } from '../../node_modules/react-leaflet'
import '../styles/map.css'
export default class MyMap extends Component {
	constructor(props){
		super(props)
		this.state = {
			lat: 53.350140,
			lng: -6.266155,
			zoom: 10,
			markerLocation: null
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick = (event) => {
		console.log(event)
		let map  = this.mapRef.current.leafletElement.locate();
		let clickEvent = map.mouseEventToLatLng(event.originalEvent)

		this.setState({
			markerLocation: {lat: clickEvent.lat, lng: clickEvent.lng}
		}, () => {
			console.log(this.state.markerLocation)
		})
	};
	mapRef = createRef();
	render() {
		const position = [this.state.lat, this.state.lng]

		const marker = this.state.markerLocation ? (
			<Marker position={this.state.markerLocation} draggable='true'>
				<Popup>
					<a href="#">Add A Blog Post At This Marker</a>
				</Popup>
			</Marker>
		) : null
		return (
			<Map center={position} zoom={this.state.zoom} className={this.props.pickingLocation ? 'picking-location' : ''} onClick={this.handleClick} ref={this.mapRef}>
				<TileLayer
					attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
					url="http://toolserver.org/tiles/hikebike/{z}/{x}/{y}.png"
				/>
				{marker}
			</Map>
		)
	}
}