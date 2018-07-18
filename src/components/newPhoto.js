import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';
import '../styles/photo.css'

export class NewPhoto extends  Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>
				<span className="upload-helper">Either Take A Picture or Upload One You've Already Taken</span>
				<ImageUploader
					withIcon={true}
					buttonText='Upload Images'
					onChange={this.onDrop}
					withLabel={false}
					imgExtension={['.jpg', '.gif', '.png', '.gif']}
					maxFileSize={5242880}
				/>
			</div>
		)
	}
}
export default NewPhoto