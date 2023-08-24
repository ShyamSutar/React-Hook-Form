import React from 'react'
import SimpleForm from './components/SimpleForm'

const Home = () => {
  return (
    <div className='py-24'>
      <div className='container'>
        <h1 className='mb-16 text-2xl font-medium'>React Hook Forms</h1>
        <SimpleForm/>
      </div>
    </div>
  )
}

export default Home