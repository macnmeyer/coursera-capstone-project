import React from 'react'
import './component_styles.css'

const TestimonialCard = ({image, name, location, text}) => {
  return (
    <article className="testimonial-card">
        <header className="testimonial-card-banner">
            <div className="testimonial-image-container">
                <img src={image} alt={name} />
            </div>
            <div className="testimonial-banner-text">
                <h2>{name}</h2>
                <p className="description-text">{location}</p>
            </div>
        </header>
        <p className="testimonial-text">
            "{text}"
        </p>
        <h4 className="testimonial-author">- {name}</h4>
    </article>
  )
}

export default TestimonialCard