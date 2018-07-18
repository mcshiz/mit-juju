import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/styles.css'
import SlidingPane from 'react-sliding-pane';
import {default as CustomModal} from 'react-responsive-modal';

import Modal from 'react-modal';
import Menu from "./components/menu";
import Home from "./components/home";
import NewPhoto from "./components/newPhoto";
import NewBlog from "./components/newBlog";

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			menuOpen: false,
			modalOpen: false,
			modalContent: null
		}
		this.toggleMenu = this.toggleMenu.bind(this);
		this.onCloseModal = this.onCloseModal.bind(this);
		this.onOpenModal = this.onOpenModal.bind(this);
	}
	componentDidMount() {
		Modal.setAppElement(this.el);
	}

	toggleMenu() {
		this.setState(
			{menuOpen: !this.state.menuOpen}
		)
	}
	onOpenModal = (component) => {
		this.setState({
			menuOpen: false,
			modalOpen: true,
			modalContent: component
		});
	};

	onCloseModal = () => {
		this.setState({ modalOpen: false, modalContent: null });
	};
	populateModal = () => {
		switch(this.state.modalContent) {
			case 'blog':
				return <NewBlog/>
			case 'photo':
				return <NewPhoto/>
		}
	};
	render() {
		return (
			<div className="App" ref={ref => this.el = ref}>
				<header className="App-header">
					<Menu toggleMenu={this.toggleMenu} menuOpen={this.state.menuOpen}/>
				</header>
				<div>
					<Home></Home>
				</div>
				<SlidingPane
					isOpen={this.state.menuOpen}
					title='Mit & JuJu'
					from='left'
					width="30%"
					ariaHideApp={false}
					onRequestClose={() => this.setState({menuOpen: false})}>
					<div>
						<ul className="menu-list">
							<li><a href="./">Map</a></li>
							<li><a href="./photos">View Photos</a></li>
							<li><a href="./blogs">View Blogs</a></li>
							<hr/>
							<li onClick={this.onOpenModal.bind(this, 'photo')}><a href="#" ><span className="fa fa-plus"></span> Add Photo</a></li>
							<li onClick={this.onOpenModal.bind(this, 'blog')}><a href="#"><span className="fa fa-plus"></span> Add Blog</a></li>
						</ul>
					</div>
				</SlidingPane>
				/* https://react-responsive-modal.leopradel.com/#example*/
				<CustomModal open={this.state.modalOpen} onClose={this.onCloseModal} center>
					<div className="modal-content">
						{this.populateModal()}
					</div>
				</CustomModal>
			</div>
		);
	}
}

export default App;
