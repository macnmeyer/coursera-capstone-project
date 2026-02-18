import React from 'react'
import './component_styles.css'
import foodImage from '../assets/restauranfood.jpg'

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
          <img src={foodImage} alt="Example Food" />
        </figure>
      </section>
      <section className="highlights">
        <banner className="banner">
          <h1 className="title-text">Specials</h1>
          <button className="button">Online Menu</button>
        </banner>
        
      </section>
    </main>
  )
}

export default Main