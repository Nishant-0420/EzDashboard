'use client'
import React from 'react'
import { TextInput, Textarea, SimpleGrid, Group, Title, Button,Flex } from '@mantine/core';
import { useFormik } from 'formik';
import * as Yup from 'yup';
const contributionValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Required'),
  name: Yup.string().required('Required'),
  subject: Yup.string().required('Required'),
  message: Yup.string(),
});

export function  Contribution() {
 const contributionForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      fetch( "http://localhost:5000/contribution/add",{
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
    validationSchema: contributionValidationSchema,
  }
  )

  return (
    <div style={{width:'70%',margin:'auto',paddingTop:'6%'}}>
      <form onSubmit={contributionForm.handleSubmit} >
      <Title
        order={2}
        size="h1"
        style={{ fontFamily: 'Greycliff CF, var(--mantine-font-family)' }}
        fw={900}
        ta="center"
      >
      Join the Community
      </Title>

      <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
        <TextInput
          label="Name"
          placeholder="Your name"
          name="name"
          variant="filled"
          onChange={contributionForm.handleChange} 
          value={contributionForm.values.name}
          />
     
        <TextInput
          label="Email"
          placeholder="Your email"
          name="email"
          variant="filled"
          onChange={contributionForm.handleChange}
          value={contributionForm.values.email}
          
        />
      </SimpleGrid>

      <TextInput
        label="Subject"
        placeholder="Subject"
        mt="md"
        name="subject"
        variant="filled"
        onChange={contributionForm.handleChange}
        value={contributionForm.values.subject}
        
      />
      <Textarea
        mt="md"
        label="Message"
        placeholder="Your message"
        maxRows={10}
        minRows={5}
        autosize
        name="message"
        variant="filled"
        onChange={contributionForm.handleChange}
        value={contributionForm.values.message}
       
      />

      <Group justify="center" mt="xl">
        <Button type="submit" size="md">
          Send message
        </Button>
      </Group>
    </form>
    
    </div> 
     
  );
}

export default Contribution;