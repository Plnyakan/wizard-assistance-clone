import React from 'react'
import Header from './header'
import Footer from './footer'

const Pagelayout = (props) => {
  return (
    <>
    <Header/>
    {props.children}
    <Footer/>
    </>
  )
}

export default Pagelayout