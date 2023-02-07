import React from 'react'
import "./scss/Aboutus.scss"
import { BsFacebook, BsInstagram, BsTwitter, BsSnapchat} from "react-icons/bs";

export  function Contact() {
  return (
    <div className='txt-container'>
      <h1>Thank you for visiting our store!</h1>
      <h2>
      If you have any questions or comments, please don't hesitate to reach out to us.<br/>

      Address: 123 Main St, Anytown, USA 12345<br/>

      Phone: (123) 456-7890<br/>

      Email: info@hifiheadphonesstore.com<br/>

      Business Hours: Monday-Friday 9am-5pm EST<br/>

      We look forward to hearing from you!<br/>

      Follow us on social media for the latest updates and promotions:<br/>
      
      </h2>
      <div id='sm'>
        <BsFacebook/>
        <BsInstagram/>
        <BsTwitter/>
        <BsSnapchat/>
      </div>
    </div>
  )
}
