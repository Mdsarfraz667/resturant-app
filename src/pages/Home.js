import { Link } from '@mui/material'
import React from 'react'
import Layout from '../components/Layout/Layout'
import Banner from '../images/banner.jpeg'

import '../style/HomeStyle.css'
const Home = () => {
  return (
    <Layout>
    <div className='home' style={{backgroundImage:`url(${Banner})`}}>
      <div className='headerContainer'>
         <h1>Food Website</h1>
         <p>Best Food In India</p>
         <Link to="/menu">
         <button>ORDER NOW</button>
         </Link>
      </div>
    </div>
    </Layout>
  )
}

export default Home