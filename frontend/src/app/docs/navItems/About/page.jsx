'use client'
import React from 'react';
import { Container, Paper, Text, Button } from '@mantine/core';
import styles from './About.module.css';

const AboutUsPage = () => {
  return (
    <Container size="lg" className={styles.container}>
      <Paper padding="xl" shadow="lg" className={styles.paper}>
        <Text size="xl" weight={900} align="center"  className={styles.sectionTitle}>
          <b><u>EzDashboard Library</u></b>
        </Text>
        <Text align="justify" className={styles.paragraph}>
          Ezdashboard is a React library designed to empower developers to build professional-looking dashboards with ease. We believe in streamlining the development process, allowing you to focus on the core functionality of your application while Ezdashboard takes care of the visual presentation.
        </Text>
        <Text align="justify" className={styles.paragraph}>
        Ezdashboard&quot;s mission is to revolutionize React dashboard development. We believe beautiful and informative dashboards shouldn&quot;t require a herculean effort to build. Our philosophy revolves around streamlining the process. By offering a comprehensive React library with pre-built, customizable components, Ezdashboard empowers you to reduce development time and maintain a consistent visual style. This lets you focus on the core functionalities of your application, while Ezdashboard handles the visual presentation. But our mission goes beyond efficiency. We prioritize user experience by ensuring clarity and readability of data, allowing for customization to enhance understanding, and enabling interactive features for deeper exploration. With Ezdashboard, you can build feature-rich dashboards that are both visually stunning and functionally effective.
        </Text>



        <Text align='justify' className={styles.paragraph} >
          <b><u>Effortless Setup:</u></b>
          Get started quickly with minimal configuration. Ezdashboard offers a straightforward initialization process, allowing you to integrate it seamlessly into your React application.
        </Text>
        <Text align='justify' className={styles.paragraph} >
          <b><u>Wide Range of Components:</u></b>
          Ezdashboard comes equipped with a rich set of pre-built dashboard components, including charts, graphs, tables, cards, and more. This saves you significant development time and ensures a consistent visual style throughout your dashboard.
        </Text>
        <Text align='justify' className={styles.paragraph} >
          <b><u>Customization Options:</u> </b>
          While Ezdashboard offers pre-defined styles, it also allows for customization to match your specific brand identity. Tailor the look and feel of your dashboard to your liking.
        </Text>
        <Text align='justify' className={styles.paragraph} >
          <b><u>Focus on Functionality:</u> </b>
          Spend less time wrestling with visuals and more time developing the core functionalities of your application. Ezdashboard empowers you to build feature-rich dashboards efficiently.
        </Text>

        <Text size="xl" weight={700} align="center" className={styles.sectionTitle}>
          <strong>Our Team</strong>
        </Text>
        <div className={styles.team}>
          <div className={styles.teamMember}>
            <img src="/image/avatar1.png" alt="Team Member 1" className={styles.avatar} />
            <Text size="md" weight={700} align="center" className={styles.memberName}>
              VAIBHAV YADAV
            </Text>
            <Text align="center" className={styles.memberPosition}>
              --------
            </Text>
          </div>
          <div className={styles.teamMember}>
            <img src="/image/avatar2.png" alt="Team Member 2" className={styles.avatar} />
            <Text size="md" weight={700} align="center" className={styles.memberName}>
              NISHANT BISHT
            </Text>
            <Text align="center" className={styles.memberPosition}>
              --------
            </Text>
          </div>
        </div>

        <Button variant="gradient" fullWidth className={styles.button}>
          Learn More
        </Button>
      </Paper>
    </Container>
  );
};

export default AboutUsPage;
