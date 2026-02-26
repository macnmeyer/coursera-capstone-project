import React from 'react'
import './component_styles.css'

const FoodCard = ({image, title, price, description}) => {
  return (
    <article className="food-card">
        <img src={image} alt={title} />
        <div className="food-card-content">
            <header className="banner">
                <h2 className="subtitle-text">{title}</h2>
                <p className="price-text">${price}</p>
            </header>
            <p className="description-text">{description}</p>
            <h4>Order Online</h4>
        </div>
    </article>
  )
}

export default FoodCard