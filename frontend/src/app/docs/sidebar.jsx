import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, Text } from '@mantine/core';

const Sidebar = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleComponentClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <List>
      <ListItem>
        <Link to="/progressbar" onClick={() => handleComponentClick('progressBar')}>
          Progress Bar
        </Link>
      </ListItem>
      {/* Add more list items for other components */}
    </List>
  );
};

export default Sidebar;
