import React, { Component } from 'react';

class Danus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      harga: 0 ,
    };
    console.log("Constructor");
    this.inputHarga = React.createRef();
    this.changeHarga = this.changeHarga.bind(this);
  }
  componentWillMount() {
    console.log("componentWillMount");
  }
  componentDidMount() {
    console.log("componendDidMount");
  }
  componentWillReceiveProps(newProps) {
    console.log("componentWillReceiveProps",newProps);
  }
  shouldComponentUpdate(newProps,newState) {
    console.log("shouldComponentUpdate",newProps,newState);
    if (newState.harga > 100) return false;
    return true;
  }
  componentWillUpdate(nextProps,nextState) {
    console.log("componentWillUpdate",nextProps,nextState);
  }
  componentDidUpdate(nextProps,nextState) {
    console.log("componentDidUpdate",nextProps,nextState);
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  changeHarga() {
    console.log("current harga state", this.state.harga);
    this.setState({harga: this.inputHarga.current.value});
  }

  render() {
    return (
      <div style={{border:"1px solid red"}}>
        Nama : {this.props.nama} <br/>
        Penjual : {this.props.penjual} <br/>
        Harga : {this.state.harga}<br/>
        <input type="text" ref={this.inputHarga}  placeholder="Harga baru..."/>
        <button onClick={this.changeHarga}>Ganti Harga Ah</button>
        <br/>
      </div>
    );
  }
}

export default Danus;
