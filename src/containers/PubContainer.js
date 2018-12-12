import React, {Component} from 'react';
import BeerSelector from '../components/BeerSelector.js'


class PubContainer extends React.Component {

//1. Constructor => states *Remember to bind methods!!
  constructor(props){
    super(props);
    this.state = {
      beers: [],
      currentBeer: null
    };
    this.handleBeerSelected = this.handleBeerSelected.bind(this)
  }
 //2. Load API => componentDidMount
 componentDidMount(){
   const url = "https://api.punkapi.com/v2/beers"
   const request = new XMLHttpRequest();
   request.open('GET', url);

   request.addEventListener("load", () => {
     if (request.status !== 200) return;
     const jsonString = request.responseText;
     const data = JSON.parse(jsonString);
     this.setState({beers: data})
   })
   request.send();
 }
  // 3. handleBeerSelected
handleBeerSelected(index){
  const selectedBeer = this.state.beers[index]
  this.setState({currentBeer:selectedBeer})
}

  // 4. Render() => BeerSelector / BeerDetail
  render(){
    return(
      <div>
        <h2>Choose your Beer!!!</h2>
        <BeerSelector beers={this.state.beers} onBeerSelected={this.handleBeerSelected}/>

      </div>
    )
  }







}

export default PubContainer;
