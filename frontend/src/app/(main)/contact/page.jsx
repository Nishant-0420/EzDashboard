'use client';
import React from 'react'
import { Paper, Text, TextInput, Textarea, Button, Group, SimpleGrid, Container } from '@mantine/core';
import { ContactIconsList } from './ContactIcons';
import bg from './bg.svg';
import classes from './GetInTouch.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const contactValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Required'),
  name: Yup.string().required('Required'),
  subject: Yup.string().required('Required'),
  message: Yup.string(),
});


const Contact = () => {
  const contactForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      fetch( "http://localhost:5000/contact/add",{
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
        },
      })    
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        })    
    },

    validationSchema: contactValidationSchema,

  }
  )
  return (
    <Container>
      <Paper shadow="md" radius="lg">
        <div className={classes.wrapper}>
          <div className={classes.contacts} style={{ backgroundImage: `url(${bg.src})` }}>
            <Text fz="lg" fw={700} className={classes.title} c="#fff">
              Contact information
            </Text>

            <ContactIconsList />
          </div>

          <form className={classes.form} onSubmit={contactForm.handleSubmit}>
            <Text fz="lg" fw={700} className={classes.title}>
              Get in touch
            </Text>

            <div className={classes.fields}>
              <SimpleGrid cols={{ base: 1, sm: 2 }}>
                <TextInput label="Your name" placeholder="Your name" id="name" onChange={contactForm.handleChange} value={contactForm.values.name} required />
                {
                  contactForm.touched.name &&
                  <small className="text-danger">{contactForm.errors.name}</small>
                }
                <TextInput label="Your email" placeholder="hello@mantine.dev" id='email' onChange={contactForm.handleChange} value={contactForm.values.email} required />
                {
                  contactForm.touched.email &&
                  <small className="text-danger">{contactForm.errors.email}</small>
                }

              </SimpleGrid>

              <TextInput mt="md" label="Subject" placeholder="Subject" id='subject' onChange={contactForm.handleChange} value={contactForm.values.subject} required />
              {
                contactForm.touched.subject &&
                <small className="text-danger">{contactForm.errors.subject}</small>
              }

              <Textarea
                mt="md"
                label="Your message"
                placeholder="Please include all relevant information"
                minRows={3}
                id='message' onChange={contactForm.handleChange} value={contactForm.values.message}
              />

              <Group justify="flex-end" mt="md">
                <Button type="submit" className={classes.control}>
                  Send message
                </Button>
              </Group>
            </div>
          </form>
        </div>
      </Paper>
    </Container>
  )
}

export default Contact;
