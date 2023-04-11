import './App.css';
import axios from 'axios';
import React, { Component } from "react";
import { render } from "react-dom";
import { Dropdown } from 'semantic-ui-react';

import "semantic-ui-css/semantic.min.css";


const ENDPOINT = "http://localhost:3000/api/price/";

const coinOptions = [
  {
    key: 'BTC',
    text: 'Bitcoin',
    value: 'BTC',
  },
  {
    key: 'Ethereum',
    text: 'Ethereum',
    value: 'ETH',
  },
  {
    key: 'SHIB',
    text: 'SHIB',
    value: 'SHIB',
  },
  {
    key: 'Tether',
    text: 'Tether',
    value: 'USDT',
  }];


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      price: 0.0,
      coin: "",
      coinText:"",
      isCoinSelected:false,
    };
  }

  getCoin = (event, { value }) => {
    console.log(value);
    this.setState({coin:value})
    this.setState({coinText:event.target.textContent});
  }


  fetchData = () => {
    this.setState({isCoinSelected : true});
    this.state.coin = this.state.coin ? this.state.coin : "BTC";
    let URL = ENDPOINT + this.state.coin;
    axios.get(URL)
      .then((res) => {
        console.log(res.data);
        this.setState({
          price: res.data,
        });
      });
  }

  


  render() {
      const renderPrice = () => {
        if(this.state.isCoinSelected){
         return <b>Current Price of {this.state.coinText} is {this.state.price.toFixed(2)} </b>;
      }
      
    }
    return (
      <div className="root">
        <div className="container">
          <div>
            <p>&nbsp;</p>
            <h2>Available Coins</h2>
            <p>&nbsp;</p>
          </div>


          <div >
            <Dropdown
              placeholder='Select Coin'
              fluid
              selection
              options={coinOptions}
              onChange = {this.getCoin}
            />
          </div>
          <button onClick={this.fetchData}>Get Price</button>

            {renderPrice()}
          
        </div>



      </div>
    );
  }
}

export default App;




