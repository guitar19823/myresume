import React, { useState } from 'react';
import { Section } from '../sectionHoc/Section';
import { images } from '../../../images';
import './ContactForm.css';

export const ContactForm = () => {
  const [ formIsValid, setFormIsValid ] = useState({
    name: false,
    email: false
  });

  const [ values, setValues ] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [ message, setMessage ] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;

    setMessage(false);

    setValues({
      ...values,
      [name]: value
    });

    if (name === 'name') {
      setFormIsValid({
        ...formIsValid,
        name: value.length > 1
      });
    }

    if (name === 'email') {
      setFormIsValid({
        ...formIsValid,
        email: validateEmail(value)
      });
    }
  };

  const validateEmail = (email) => {
    var reg = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
    
    return reg.test(email);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (formIsValid.name && formIsValid.email) {
      setMessage(true);

      setValues({
        name: '',
        email: '',
        message: ''
      });

      setFormIsValid({
        name: false,
        email: false
      });
    }
  };

  return (
    <div className="ContactForm_wr">
      <Section title={'Send message'} image={images.contact} >
        <form
          className="ContactForm"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder={'name'}
            value={values.name}
            onChange={handleChange}
            className={formIsValid.name || !values.name.length ? '' : 'notValid'}
          />

          <input
            type="text"
            name="email"
            placeholder={'email'}
            value={values.email}
            onChange={handleChange}
            className={formIsValid.email || !values.email.length ? '' : 'notValid'}
          />

          <textarea
            name="message"
            value={values.message}
            onChange={handleChange}
          ></textarea>

          {
            message && <span className="ContactForm_message">Сообщение успешно отправлено</span>
          }

          <input type="submit" value={'send'} />
        </form>
      </Section>
    </div>
  );
};