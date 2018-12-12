import React from 'react';

const BeerDetail = ({beer}) => {
  if(!beer) return null;
  console.log(beer.name);
  return(

<>
<div id="bigDiv">
  <header>{beer.name}</header>
  <div id="main">
    <article>{beer.description}
    <ul>
      <li> ABV: {beer.abv} </li>
      <li> SRM: {beer.srm} </li>
    </ul>
    </article>


    <aside><img alt="Beer_Image" src={beer.image_url}/> </aside>
  </div>
  <footer>{beer.tagline}</footer>
</div>
</>
  )
}

export default BeerDetail;
