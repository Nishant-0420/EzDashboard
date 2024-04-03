import React from 'react';
import {StatCard} from 'ez-dashboard';

const App = () => {
  return (
    <div>
      <StatCard label={'Users'} description={'Some Description'} value={628}/>
    </div>
  )
}

export default App