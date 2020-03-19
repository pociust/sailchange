import React, { useEffect } from 'react';
import API from '../utils/API';

const Landing = () => {
  useEffect(() => {
    API.getAllData()
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }, [])


  return (
    <div>
      This is a landing
    </div>
  )
}

export default Landing;