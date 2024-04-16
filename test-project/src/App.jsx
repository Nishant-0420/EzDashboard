import React from 'react';
import { StatCard } from 'ez-dashboard';

const App = () => {
  return (
    <div className='m-10'>
      <div className='grid grid-cols-4 gap-5'>
        <StatCard label={'Users'} description={'Some Description'} value={628} />
        <StatCard label={'Orders'} description={''} value={628} color='secondary' />
        <StatCard label={'Products'} description={'Some Description'} value={93} />
        <StatCard label={'Visits'} description={''} value={923} color='primary' />
      </div>
    </div>
  )
}

export default App