import React from 'react'
import Footer from './Footer';
import Header from './Header'
const Layout = ({children}) => {
  console.log(children);
  return (
    <>
      <Header/>
      <div>{children}</div>
      <Footer/>
    </>
    )
}

export default Layout