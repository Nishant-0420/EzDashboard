'use client'
import React from 'react'
import classes from './Home.module.css'
import { Container, Title, Text, Button, Affix} from '@mantine/core';
import Header from './Header';
import FeaturesCards from './FeaturesCards';
import {  TextInput, Image } from '@mantine/core';
// import image from './image.svg';
import Footer from './Footer';
import { useRouter } from 'next/navigation';
import AffixComponent from './AffixComponent';
// import { IconArrowUp } from '@tabler/icons-react';
// import { useWindowScroll } from '@mantine/hooks';

const Home = () => {
  const router = useRouter();
  // const [scroll, scrollTo] = useWindowScroll();
  
  return (
    <>
      <Header/>
      <div className={classes.root}>
        <Container size="lg">
          <div className={classes.inner}>
            <div className={classes.content}>
              <Title className={classes.title}>
                A{' '}
                <Text
                  component="span"
                  inherit
                  variant="gradient"
                  gradient={{  from: 'cyan', to: 'violet', deg: 271 }}
                >
                  fully featured
                </Text>{' '}
                React components library
              </Title>

              <Text className={classes.description} mt={30}>
                Build functional accessible web applications with ease – Mantine includes more
                than 100 customizable components and hooks to cover you in any situation
              </Text>

              <Button
                variant="gradient"
                gradient={{  from: 'cyan', to: 'violet', deg: 271 }}
                size="xl"
                radius={15}
                // style={}
                style={{borderRadius: 15}}
                className={classes.control}
                mt={40}
                onClick={() => router.push('/docs/api-reference')}
              >
                Get started
              </Button>
            </div>
          </div>
        </Container>
      </div>
      <FeaturesCards/>
      
      <div className={classes.wrapper} >
      <div className={classes.body}>
        <Title className={classes.title}>Wait a minute...</Title>
        <Text fw={500} fz="lg" mb={5} c="white">
          Subscribe to our newsletter!
        </Text>
        <Text fz="sm" c="white">
          You will never miss important product updates, latest news and community QA sessions. Our
          newsletter is once a week, every Sunday.
        </Text>

        <div className={classes.controls}>
          <TextInput
            placeholder="Your email"
            classNames={{ input: classes.input, root: classes.inputWrapper }}
          />
          <Button className={classes.control}>Subscribe</Button>
        </div>
      </div>
      
      {/* <Image  src="https://cdn1.vectorstock.com/i/1000x1000/90/65/dashboard-service-concept-banner-header-vector-24529065.jpg"  /> */}
      <Image src="/image/banner-image.png" alt="banner" />
    </div>
      <Footer/>
      <AffixComponent/>
      {/* <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftSection={<IconArrowUp style={{ width:16 , height: 16 }} />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix> */}
    </>
  )

}

export default Home;