'use client'
import React from 'react';
import { Container, Title, Text, Button, Image,Center } from '@mantine/core';
import Header from './Header';
import FeaturesCards from './FeaturesCards';
import { TextInput } from '@mantine/core';
import Footer from './Footer';
import { useRouter } from 'next/navigation';
import AffixComponent from './AffixComponent';

const Home = () => {
  const router = useRouter();

  return (
    <>
      <Header />
      <section className="hero" style={{ background: '#1f2937', color: '#fff', padding: '100px 0' }}>
        <Container size="xl">
          <div style={{ textAlign: 'center' }}>
            <Title order={1} size={100}>Welcome to Ezdashboard</Title>
            <Text size='xl'  mt={10}>Your code, your way. Say goodbye to library clutter.</Text>
            <Button
              variant="light"
              color="blue"
              size="xl"
              radius="xl"
              style={{ marginTop: 20 }}
              onClick={() => router.push('/docs/api-reference')}
            >
              Get Started
            </Button>
          </div>
        </Container>
      </section>

      <FeaturesCards style={{ backgroundColor: '#1f2937', }}  />

      <section className="dashboard-section" style={{ background: '#1f2937', color: '#fff', padding: '50px 0' }}>
        <Container size="xl">
          <Title order={2} align={'center'} mb={50}>Supercharge Your Dashboards: Unleashing EzDashboard's Potential</Title>
 
          <iframe
            style={{
              width: "100%",
              height: 900,
              outline: "1px solid #252525",
              border: 0,
              borderRadius: 8,
              marginBottom: 16,
              zIndex: 100
            }}
            src="https://codesandbox.io/p/sandbox/react-new?file=/src/index.js"
          ></iframe>
          <Button
            variant="gradient"
            gradient={{ from: '#1f2937', to: '#4b5563', deg: 45 }}
            size="lg"
            radius="xl"
            onClick={() => router.push('/dashboard')}
          >
            View Demo Dashboard
          </Button>
        </Container>
      </section>

      <section className="newsletter" style={{ background: '#1f2937', color: '#fff', padding: '100px 0' }}>
        <Container size="xl">
          <Title order={2}>Subscribe to Our Newsletter</Title>
          <Text size="lg" mt={10}>Stay up-to-date with the latest updates and news.</Text>
          <div style={{ marginTop: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <TextInput placeholder="Your email" size="lg" style={{ marginRight: 20 }} />
            <Button variant="outline" color="blue" size="lg" radius="xl">Subscribe</Button>
          </div>
        </Container>
      </section>

      <Footer />
      <AffixComponent />
    </>
  )
}

export default Home; 
