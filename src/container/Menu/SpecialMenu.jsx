import React from 'react'
import './SpecialMenu.css';
import { data, images } from '../../constants';
import { MenuItem, SubHeading } from '../../components';


const SpecialMenu = () => {

  const wineAndBeerData = data.wines
  const cocktailsrData = data.cocktails

  
  const wineAndBeer = wineAndBeerData.map((wine, index) => (
    <MenuItem 
        key={wine.title + index} 
        title={wine.title}
        price={wine.price}
        tags={wine.tags}
    />
  ))
  
  const cocktails = cocktailsrData.map((cocktail, index) => (
    <MenuItem 
        key={cocktail.title + index} 
        title={cocktail.title}
        price={cocktail.price}
        tags={cocktail.tags}
    />
  ))

  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title='Menu that fits your palatte' />
        <h1 className="headtext__cormorant">Today&apos;s Special</h1>
      </div>     

      <div className="app__specialMenu-menu flex__center">

        <div className="app__specialMenu-menu_wine">
          <h1>Wine & Beer</h1>
          <div className="app__specialMenu-menu_items">
            {wineAndBeer}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="menu__img" />
        </div>

        <div className="app__specialMenu-menu_cocktails">
          <h1>Cocktails</h1>
          <div className="app__specialMenu-menu_items">
            {cocktails}
          </div>
        </div>

      </div> 

      <div style={{ marginTop: 15 }}>
        <button type="button" className="custom__button">View More</button>
      </div>

    </div>
  )
}

export default SpecialMenu

