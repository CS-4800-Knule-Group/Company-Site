import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'

const Contact = () => {
  return (
    <div>
        <h1 class ="intro">Our Contact Info:</h1>
        <h1 class ="FAQ">Frequently Asked Questions</h1>
        <p class ="link">See our FAQ list here:</p>
        <h1 class ="title-one">Mailing Address</h1>
        <p class ="address">Cal Poly Pomona</p>
        <p class="address-two">3801 West Temple Avenue</p>
        <p class="address-three">Pomona, California 91768</p>
        <h1 class ="title-two">Other Inquiries:</h1>
        <p class="email">businessemail@knull.com</p>
        <p class="number">(xxx)-xxx-xxxx</p>
        <h1 class="title-three">Website Feedback:</h1>
        <p class="form">Fake form buttons</p>
    </div>
  )
}

export default Contact