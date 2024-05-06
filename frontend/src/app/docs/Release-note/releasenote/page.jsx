import React from 'react';
import { Container, Title, Text, Divider } from '@mantine/core';
import './releasenote.module.css'; // Import custom CSS for styling

const PreviousReleasesPage = () => {
  const releases = [
    {
      version: 'v1.0.0',
      date: 'April 1, 2022',
      notes: [
        'Initial release of EzDashboard',
        'Added basic dashboard components',
      ],
    },
    {
      version: 'v1.0.9',
      date: 'April 15, 2022',
      notes: [
        'Added new Charts and Graphs',
        'Improved customization options',
        'Bug fixes and performance enhancements',
      ],
    },
    {
        version: 'v1.1.0',
        date: 'May 7, 2022',
        notes: [
          'Added more dashboard components',
          'Improved performance',
          'Bug fixes',
        ],
        }
    // Add more releases as needed
  ];

  return (
    <Container size="xl" className="previous-releases-container">
      <Title order={1} className="page-title">
        Previous Releases
      </Title>
      <div className="release-list">
        <br />
        {releases.map((release, index) => (
          <div key={index} className="release-item">
            <Text size="lg" weight={500} className="release-version">
              {release.version} ({release.date})
            </Text>
            <ul className="release-notes">
              {release.notes.map((note, noteIndex) => (
                <li key={noteIndex}>{note}</li>
              ))}
            </ul>
            {index < releases.length - 1 && <Divider className="divider" />}
            <br /> 
          </div>
        ))}
        <hr />
      </div>
    </Container>
  );
};

export default PreviousReleasesPage;
