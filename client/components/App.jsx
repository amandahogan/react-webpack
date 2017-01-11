import React from 'react'

import Header from './Header'
import Nav from './Nav'
import Photo from './Photo'
import Footer from './Footer'

export default React.createClass({
  render() {
    return (
    <div>
      <Header/>
      <Nav/>
      <Photo/>
      <Footer/>
    </div>
    )
  }
})
