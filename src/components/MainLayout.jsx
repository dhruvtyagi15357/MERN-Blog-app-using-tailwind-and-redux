import React from 'react'
import Header from './Header'
import Footer from './Footer'
const MainLayout = ({children}) => {
  return (
    <div className=''>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default MainLayout