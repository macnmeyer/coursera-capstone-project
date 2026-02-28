import React from 'react'
import './component_styles.css'
import { Link } from 'react-router'

const FoodCard = ({image, title, price, description}) => {
  return (
    <article className="food-card">
        <div className="food-card-image-container">
          <img src={image} alt={title} />
        </div>
        <div className="food-card-content">
            <header className="banner">
                <h2 className="subtitle-text">{title}</h2>
                <p className="price-text">${price}</p>
            </header>
            <p className="testimonial-text">{description}</p>
            <Link to="/order-online"><h4 className='lead-text' style={{margin: '0px'}}>Order Online ➜</h4></Link>
        </div>
    </article>
  )
}

export default FoodCard