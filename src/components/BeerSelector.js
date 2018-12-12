import React from 'react';

const BeerSelector = (props) => {
  if (!props.beers) return null;
  const options = props.beers.map((beer, index) => {
    return<option
            value={index}
            key={index}>{beer.name}
            </option>
  })

function handleBeerChange(event){
  props.onBeerSelected(event.target.value);
}

return (
  <select id="beer-selector"
          defaultValue="default"
          onChange={handleBeerChange}>
          <option
            disabledValue="default">Choose your beer</option>{options}

  </select>
)

}

export default BeerSelector;
