import React from "react"
import SearchBar from "../SearchBar/SearchBar"
import "./LandingPage.css"
import logo2 from "../../images/logo-book2.png"
import User from "../User/User"


const LandingPage = () => {
  
  return (
    <section className="landing-body">
      <User />
      <img className="logo" alt="readme logo" src={logo2} />
      <p className="prompt">Welcome to readME! Tell us a book you like and we will help you find your next read!</p>
      <SearchBar />
    </section>
  )
}

export default LandingPage
