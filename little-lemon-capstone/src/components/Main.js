import React from 'react'
import './component_styles.css'
import foodImage from '../assets/restaurantfood.jpg'
import bruschetta from '../assets/bruschetta.svg'
import greekSalad from '../assets/greek salad.jpg'
import lemonDessert from '../assets/lemon dessert.jpg'
import FoodCard from './FoodCard'
import TestimonialCard from './TestimonialCard'

const foodItems = [
  {
    image: bruschetta,
    title: "Bruschetta",
    price: "19.99",
    description: "Lorem ipsum dolor sit amet..."
  },
  {
    image: greekSalad,
    title: "Greek Salad",
    price: "12.99",
    description: "Lorem ipsum dolor sit amet..."
  },
  {
    image: lemonDessert,
    title: "Lemon Dessert",
    price: "8.99",
    description: "Lorem ipsum dolor sit amet..."
  }
];

const Main = () => {
  return (
    <main className="main">

      <section className="hero-section">
        <article className="hero-text">
          <h1 className="title-text" style={{color: '#F4CE14'}}>Little Lemon</h1>
          <h2 className="subtitle-text">Chicago</h2>
          <p className="description-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="button">Reserve a Table</button>
        </article>
        <figure className="food-image">
        </figure>
      </section>

      <section className="highlights">
        <header className="banner">
          <h1 className="title-text">Specials</h1>
          <button className="button">Online Menu</button>
        </header>
        <section className="food-card-container">
          {foodItems.map((item) => (
            <FoodCard 
              key={item.title}
              image={item.image}
              title={item.title}
              price={item.price}
              description={item.description}
            />
          ))}
        </section>
      </section>

      <section className="testimonials">
        <header className="banner">
          <h1 className="title-text">Testimonials</h1>
        </header>
        <section className="testimonial-card-container">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </section>
      </section>

      <section className="about">
        <header className="banner">
          <h1 className="title-text">About</h1>
        </header>
        <h2 className="subtitle-text">Our History</h2>
        <p className="description-text">
          Just guys greeking out
        </p>
      </section>

    </main>
  )
}

export default Main