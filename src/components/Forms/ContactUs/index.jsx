import { Button, ContactForm, ContactTitle, Wrapper } from "./ContactUs.styles";
import Input from "../../Input";
import { useState } from "react";

const ContactUs = ({}) => {
  // handle form state

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <Wrapper>
      <ContactTitle>Contact Us</ContactTitle>
      <ContactForm onSubmit={handleSubmit} defaultValue={formState}>
        <Input
          name="name"
          value={formState.name}
          type="text"
          label="your name"
          placeholder="type in your full name"
          onChange={handleInputChange}
        />
        <Input
          name="email"
          value={formState.email}
          type="email"
          label="your email"
          placeholder="type in your email"
          onChange={handleInputChange}
        />
        <Input
          name="message"
          value={formState.message}
          type="text"
          label="your message"
          placeholder="type in your message"
          onChange={handleInputChange}
        />
        <Button type="submit">Send</Button>
      </ContactForm>
    </Wrapper>
  );
};

export default ContactUs;
