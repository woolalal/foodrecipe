import React from 'react'

const FoodItem = ({items}) => {
    
    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                <img src={items.recipe.image} alt='' />
                </div>
                <div className='card-back'>
                <h1>{items.recipe.label}</h1>
                <ul>
                    {items.recipe.ingredients.map(ingredient => (
                        <li key={ingredient.foodId}>{ingredient.text}</li>
                    ))}
                </ul>
                </div>
            </div>
        </div>
    )
}

export default FoodItem
