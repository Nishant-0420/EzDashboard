'use client'
import React from 'react';
import { Container, Title, Button, Image, Center, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import Header from './Header';
import FeaturesCards from './FeaturesCards';
import { TextInput } from '@mantine/core';
import Footer from './Footer';
import { useRouter } from 'next/navigation';
import AffixComponent from './AffixComponent';
import classes from './HeroBullet.module.css';
import { IconCheck } from '@tabler/icons-react';
import { GithubIcon } from '@mantinex/dev-icons';
import { useState } from 'react';
import Link from 'next/link';

const Home = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);

  const handleInputChange = (event) => {
    setEmail(event.target.value.trim()); // Update email state and trim whitespace
    setInvalidEmail(false); // Reset invalidEmail state when user types
  };
  const handleSubscribe = () => {
    if (!email || !isValidEmail(email)) {
      setInvalidEmail(true); // Set invalidEmail state to true if email is invalid or empty
      return;
    }

    // Perform subscription action here (e.g., send email to server)
    console.log('Subscribed with email:', email);

    // Update state to indicate successful subscription
    setSubscribed(true);
    setEmail(''); // Clear email input after successful subscription
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Validate email format
  };

  return (
    <>
      <Header />
      <section className="hero" style={{ background: '#00000', color: '#fff', padding: '100px 0' }}>
        <Container size="md">
          <div className={classes.inner}>
            <div className={classes.content}>
              <Title className={classes.title}>
                <span className={classes.highlight}> EzDashboard</span> React <br /> components library
              </Title>
              <Text c="dimmed" mt="md">
                Build fully functional  dashbaord faster than ever – EzDashboard includes
                more  customizable components and hooks to cover you in any situation
              </Text>

              <List
                mt={30}
                spacing="sm"
                size="sm"
                icon={
                  <ThemeIcon size={20} radius="xl">
                    <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
                  </ThemeIcon>
                }
              >
                <List.Item>
                  <b>TypeScript based</b> – build type safe applications, all components and hooks
                  export types
                </List.Item>
                <List.Item>
                  <b>Free and open source</b> – all packages have MIT license, you can use EzDashboard in
                  your dashboards projects
                </List.Item>
                <List.Item>
                  <b>No annoying focus ring</b> – focus ring will appear only when user navigates with
                  keyboard
                </List.Item>
              </List>

          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control}  onClick={() => router.push('/docs/gettingStarted')}>
           
              Get started
            </Button>
            <Button variant="default" radius="xl" size="md" className={classes.control}  leftSection={<GithubIcon size={20}/>} component={Link} href="https://www.npmjs.com/package/ez-dashboard">
          
            GitHub
            </Button>
          </Group>
        </div>
        <Image src={'./herobullet.svg'} alt="Hero bullet" className={classes.image} />
       
      </div>
    </Container>
      </section>

      <FeaturesCards style={{ backgroundColor: '#00000', }} />

      <section className="dashboard-section" style={{ background: '#00000', color: '#fff', padding: '50px 0' }}>
        <Container size="xl">
          <Title order={2} align={'center'} mb={50}>YOUR CODE, YOUR WAY, SAY GOODBYE TO LIBRARY CLUTTER</Title>

          <iframe
            src="https://codesandbox.io/embed/new?codemirror=1"
            style={{width:"100%", height:"500px", border:0, borderRadius: "4px", overflow:"hidden"}}
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
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

      <section className="newsletter" style={{ background: '#00000', color: '#fff', paddingBottom: 100 }}>
        {/* <Container size="xl">
          <Title order={2}>Subscribe to Our Newsletter</Title>
          <Text size="lg" mt={10}>Stay up-to-date with the latest updates and news.</Text>              
          <div style={{ marginTop: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <TextInput placeholder="Your email" size="lg" style={{ marginRight: 20 }} />
            <Button variant="outline" color="blue" size="lg" radius="xl">Subscribe</Button>
          </div>
        </Container> */}
        <Container size="xl">
          <Title order={2}>Subscribe to Our Newsletter</Title>
          <Text size="lg" mt={10}>
            Stay up-to-date with the latest updates and news.
          </Text>
          <div style={{ marginTop: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {!subscribed ? (
              <>

                <TextInput
                  placeholder="Your email"
                  size="lg"
                  style={{ marginRight: 20 }}
                  value={email}
                  onChange={handleInputChange}
                  error={invalidEmail ? 'Invalid email' : null}
                />
                <Button
                  variant="outline"
                  color={subscribed ? 'green' : 'blue'}
                  size="lg"
                  radius="xl"
                  onClick={handleSubscribe}
                  disabled={!email || subscribed || invalidEmail}
                >
                  Subcribe
                </Button>
              </>
            ) : (
              <b><Text fz={50} style={{ color: 'blue', marginTop: 20, fontWeight: '400px' }}>
                Subscribed successfully!
              </Text></b>
            )}
          </div>
        </Container>

      </section>

      <Footer />
      <AffixComponent />
    </>
  )
}

export default Home; 
