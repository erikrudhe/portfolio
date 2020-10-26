import React from 'react';
import emailjs from 'emailjs-com';
import Hero from "../components/Hero"
import { Button, Form } from "react-bootstrap"
import Content from "../components/Content"

//import './ContactUs.css';
const ContactForm = (props)=>{
  console.log(props)

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_96y4q66', e.target, 'user_5GarGh6Ikg9hH5PTLI7sS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return(
    <div>
      <Hero title={props.title}/>

      <Content>
        <Form onSubmit={sendEmail}>
            <Form.Group>
                <Form.Label htmlFor="full-name">Full name:</Form.Label>
                <Form.Control id="full-name" type="text" name="name"/>
            </Form.Group>

            <Form.Group>
                <Form.Label htmlFor="email">Email:</Form.Label>
                <Form.Control id="email" type="email" name="email"/>
            </Form.Group>
            
            <Form.Group>
                <Form.Label htmlFor="message">Message</Form.Label>
                <Form.Control id="message" type="text"  name="message" as="textarea" rows="3"/>
            </Form.Group>

            <Button type="submit" value="Send">
                Send
            </Button>
        </Form>
        </Content>
      
    </div>
  )
}

export default ContactForm

/*
<form className="contact-form" onSubmit={sendEmail}>
<input type="hidden" name="contact_number" />
<label>Name</label>
<input type="text" name="name" />
<label>Email</label>
<input type="email" name="email" />
<label>Message</label>
<textarea name="message" />
<input type="submit" value="Send" />
</form>
*/