import React from 'react'
import FoodItem from '../food/FoodItem';
import Spinner from '../../img/spinner.gif';

const FoodGrid = ({item, isLoading}) => {
    return isLoading ? <img src={Spinner} alt='' style={{width: "10%", margin: "auto", display:"block"}}></img> : <section className="cards">
        {item.map(items => (
            <FoodItem key = {items.recipe.calories} items = {items} />
        ))}
    </section>
}

export default FoodGrid
