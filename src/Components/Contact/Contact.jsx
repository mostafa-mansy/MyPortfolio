import React from 'react'
import './Contact.scss'
const Contact = () => {
  return (
    <div className='contianer-contact' name="contact">
        <footer>
            <section className="pb-8">
                <h1>Contact</h1>
                <p className="py-6">Submit the form below to get in touch with me</p>
            </section>

            <div>
                <form action="https://getform.io/f/98c2d852-8061-4ce0-a043-69ec03495fd9"
                        method="POST">
                    <input type="text"
                            name="name"
                            placeholder="Enter your name"/>
                    <input type="text"
                            name="email"
                            placeholder="Enter your email"/>
                    <textarea name="message"
                                placeholder="Enter your message"
                                rows="10" >

                    </textarea>
                    <button> Let's Send </button>
                </form>
            </div>
        </footer>        
    </div>
  )
}

export default Contact