'use client';
import { useToggle, upperFirst } from '@mantine/hooks';
// import { useForm } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
  Container
} from '@mantine/core';
 import { GoogleButton } from '../login/googleButton';
 import TwitterButton from './twitterButton';
import { useFormik } from 'formik';
import * as yup from 'yup';

const formValidationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Required'),
  name: yup.string().required('Required'),
  password: yup.string().min(6, 'Password should include at least 6 characters').required('Required'),

})
export function Login(props) {
  const [type, toggle] = useToggle(['login', 'register']);
  const form = useFormik({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: true,
    },
    onSubmit: (values) => {
      console.log(values);
    }

    ,validationSchema: formValidationSchema,
  });

  return (
    <Container w={530}>
    <Paper radius="md" p="xl" withBorder {...props}>
      <Text size="lg" fw={500}>
        Welcome to EzDashboard, {type} with
      </Text>

      <Group grow mb="md" mt="md">
        <GoogleButton radius="xl">Google</GoogleButton>
        <TwitterButton radius="xl">Twitter</TwitterButton>
      </Group>

      <Divider label="Or continue with email" labelPosition="center" my="lg" />

      <form onSubmit={form.handleSubmit}>
        <Stack>
          {type === 'register' && (
            <TextInput
              label="Name"
              placeholder="Your name"
              id='name'
              value={form.values.name}
              onChange={
                 //(event) => form.setFieldValue('name', event.currentTarget.value),
                 form.handleChange }
              error={form.errors.name && 'Invalid name'}

              radius="md"
            />
          )}

          <TextInput
            required
            label="Email"
            placeholder="hello@mantine.dev"
            id='email'
            value={form.values.email}
            onChange={
              // (event) => form.setFieldValue('email', event.currentTarget.value)
              form.handleChange}
            error={form.errors.email && 'Invalid email'}
            radius="md"
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            id='password'
            value={form.values.password}
            onChange={
              // (event) => form.setFieldValue('password', event.currentTarget.value)
              form.handleChange
            }
            error={form.errors.password && 'Password should include at least 6 characters'}
            radius="md"
          />

          {type === 'register' && (
            <Checkbox
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
            />
          )}
        </Stack>

        <Group justify="space-between" mt="xl">
          <Anchor component="button" type="button" c="dimmed" onClick={() => toggle()} size="xs">
            {type === 'register'
              ? 'Already have an account? Login'
              : "Don't have an account? Register"}
          </Anchor>
          <Button type="submit" radius="xl">
            {upperFirst(type)}
          </Button>
        </Group>
      </form>
    </Paper>
    </Container>
  );
}

export default Login;
