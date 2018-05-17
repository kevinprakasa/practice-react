import React, { Component } from 'react';
import Danus from './Danus';
class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nama: this.props.nama,
			penjual: this.props.penjual,
			showDanus: true
		};
		this.inputNama = React.createRef();
		this.onClickNamaButton = this.onClickNamaButton.bind(this);
		this.unMountDanus = this.unMountDanus.bind(this);
	}

	onClickNamaButton() {
		this.setState({
			nama: this.inputNama.current.value
		});
	}

	unMountDanus() {
		this.setState({
			showDanus: !this.state.showDanus
		});
	}

	render() {
		let danus = "";
		if (this.state.showDanus) {
			danus = <Danus nama={this.state.nama} penjual={this.state.penjual}/>;
		}

		return (
			<div>
				{danus}
				<input type="text" placeholder="Nama baru..." ref={this.inputNama}/>
				<button onClick={this.onClickNamaButton}>Ganti nama danus ah</button><br/>
				<button onClick={this.unMountDanus}> (Un)Mount Danus</button>
			</div>
			);
	}
}

export default Card;