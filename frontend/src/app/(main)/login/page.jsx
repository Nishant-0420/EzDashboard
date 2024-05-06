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
import { SegmentedControl } from '@mantine/core';
import { enqueueSnackbar } from 'notistack';
import { useRouter } from 'next/navigation';

const formValidationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Required'),
  password: yup.string().required('Required'),

})
export function Login(props) {
  const router = useRouter();
  const [type, toggle] = useToggle(['login', 'register']);
  const loginForm = useFormik({
    initialValues: {
      email: '', 
      password: '',
    },
    onSubmit: (values) => {
      console.log(values);
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/authenticate`, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
        }}
          )
          .then((response) => {
            console.log(response.status);
            if (response.status === 200) {
              enqueueSnackbar("User login", {variant:"success"})
              router.push("/")

              response.json()
                .then(data => {
                  console.log(data);
                })
            }else{
              enqueueSnackbar("user not logged in", {variant:"error"})
            }
          }).catch((err) => {
            console.log(err); })
    }

    , validationSchema: formValidationSchema,
  });

  const loginContainer = () => {
    return <Container w={530}><Paper radius="md" p="xl" withBorder {...props}>
      <Text size="lg" fw={500}>
        Welcome to EzDashboard, Login with
      </Text>

      <Group grow mb="md" mt="md">
        <GoogleButton radius="xl">Google</GoogleButton>
        <TwitterButton radius="xl">Twitter</TwitterButton>
      </Group>

      <Divider label="Or continue with email" labelPosition="center" my="lg" />

      <form onSubmit={loginForm.handleSubmit}>
        <Stack>

          <TextInput
            required
            label="Email"
            placeholder="hello@mantine.dev"
            name='email'
            value={loginForm.values.email}
            onChange={
              // (event) => signupForm.setFieldValue('email', event.currentTarget.value)
              loginForm.handleChange}
            error={loginForm.errors.email && 'Invalid email'}
            radius="md"
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            name='password'
            value={loginForm.values.password}
            onChange={
              // (event) => signupForm.setFieldValue('password', event.currentTarget.value)
              loginForm.handleChange
            }
            error={loginForm.errors.password && 'Password should include at least 6 characters'}
            radius="md"
          />
          <Checkbox
            label="I accept terms and conditions"
          // checked={form.values.terms}
          // onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
          />

        </Stack>

        <Group justify="space-between" mt="xl">
          <Anchor component="button" type="button" c="dimmed" onClick={() => toggle()} size="xs">

            Already have an account? Login
          </Anchor>
          <Button type="submit" radius="xl">
            Login
          </Button>
        </Group>
      </form>
    </Paper>
    </Container>
  }

  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',  
      password: '',
    },
    onSubmit: (values) => {
      console.log(values);
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
      })
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            response.json()
              .then(data => {
                console.log(data);
              })
          }
        }).catch((err) => {
          console.log(err);
        })
    }
    ,validationSchema: formValidationSchema,
  });

  const signupContainer = () => {
    return <Container w={530}><Paper radius="md" p="xl" withBorder {...props}>
      <Text size="lg" fw={500}>
        Welcome to EzDashboard, Register with
      </Text>
      <Group grow mb="md" mt="md">
        <GoogleButton radius="xl">Google</GoogleButton>
        <TwitterButton radius="xl">Twitter</TwitterButton>
      </Group>

      <Divider label="Or continue with email" labelPosition="center" my="lg" />

      <form onSubmit={signupForm.handleSubmit}>
        <Stack>
          <TextInput

            label="Name"
            placeholder="Your name"
            name='name'
            value={signupForm.values.name}
            onChange={
              //(event) => signupForm.setFieldValue('name', event.currentTarget.value),
              signupForm.handleChange}
            error={signupForm.errors.name && 'Invalid name'}
            radius="md"
          />
          <TextInput
            required
            label="Email"
            placeholder="hello@mantine.dev"
            name='email'
            value={signupForm.values.email}
            onChange={
              // (event) => signupForm.setFieldValue('email', event.currentTarget.value)
              signupForm.handleChange}
            error={signupForm.errors.email && 'Invalid email'}
            radius="md"
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            name='password'
            value={signupForm.values.password}
            onChange={
              // (event) => signupForm.setFieldValue('password', event.currentTarget.value)
              signupForm.handleChange
            }
            error={signupForm.errors.password && 'Password should include at least 6 characters'}
            radius="md"
          />

          <Checkbox
            label="I accept terms and conditions"
          // checked={form.values.terms}
          // onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
          />

        </Stack>

        <Group justify="space-between" mt="xl">
          <Anchor component="button" type="button" c="dimmed" onClick={() => toggle()} size="xs">

            Already have an account? Login
          </Anchor>
          <Button type="submit" radius="xl">
            Signup
          </Button>
        </Group>
      </form>
    </Paper>
    </Container>
  }



  return (
    <>
      <SegmentedControl
        value={type}
        onChange={toggle}
        data={['login', 'register']}
        fullWidth
        variant="outline"
        radius="md"
        size="xl"
        style={{ marginTop: 30, marginBottom: 30, marginLeft: 400, marginRight: 400 }}
      />

      {type === 'login' ? loginContainer() : signupContainer()}


    </>

  );
}

export default Login;
