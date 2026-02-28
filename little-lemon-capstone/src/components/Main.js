import React from 'react'
import './component_styles.css'
import foodImage from '../assets/restaurantfood.jpg'
import bruschetta from '../assets/bruschetta.svg'
import greekSalad from '../assets/greek salad.jpg'
import lemonDessert from '../assets/lemon dessert.jpg'
import FoodCard from './FoodCard'
import TestimonialCard from './TestimonialCard'
import ownersA from '../assets/Mario and Adrian A.jpg'
import ownersB from '../assets/Mario and Adrian b.jpg'
import chefImage from '../assets/restaurant chef B.jpg'
import restaurantImage from '../assets/restaurant.jpg'

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

const testimonials = [
  {
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Amanda Benson",
    location: "New York, USA",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    name: "Charles Davis",
    location: "Los Angeles, USA",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Emily Foster",
    location: "Chicago, USA",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  }
]


const Main = () => {
  return (
    <main className="main">

      <section className="hero-section">
        <div className="hero-content">
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
        </div>

      </section>

      <section className="highlights">
        <figure className="background-image-chef">
        </figure>
        <header className="banner">
          <h1 className="title-text">Specials</h1>
          <button className="button">Online Menu</button>
        </header>
        <section className="food-card-window">
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
      </section>

      <section className="testimonials">
        <header className="banner">
          <h1 className="title-text">Testimonials</h1>
        </header>
        <section className="testimonial-card-window">
          <section className="testimonial-card-container">
            {testimonials.map((testimonial) => (
              <TestimonialCard 
                key={testimonial.name}
                image={testimonial.image}
                name={testimonial.name}
                location={testimonial.location}
                text={testimonial.text}
              />
            ))}
          </section>
        </section>
      </section>
      
      <section className="about">
        <article className="about-content">
          <div className="about-text">
            <h1 className="title-text" style={{color: '#F4CE14'}}>About</h1>
            <h2 className="subtitle-text">Our History</h2>
            <p className="description-text">
              Just guys greeking out
            </p>
          </div>
          <div className="about-photos">
            <figure className="about-image-frame" id="about-image-frame-1">
              <div className="about-image-container">
                <img src={ownersA} alt="Mario and Adrian" />
              </div>
            </figure>
            <figure className="about-image-frame" id="about-image-frame-2">
              <div className="about-image-container">
                <img src={ownersB} alt="Mario and Adrian" />
              </div>
            </figure>
          </div>
          
        </article>
      </section>

    </main>
  )
}

export default Main