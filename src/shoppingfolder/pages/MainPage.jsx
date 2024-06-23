import React, { useState } from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Collections from '../components/Collections'
import Ladie from '../components/Ladie'
import Footer from '../components/Footer'
import {Gents,Ladies} from '../data'


const MainPage = () => {
  const [gentsfashion, setGentsFashion] = useState(Gents)
  const [ladiesfashion, setLadiesFashion] = useState(Ladies)

  return (
    <div>
      <Header />
      <Banner />
      <Collections gentsFashion={gentsfashion}/><br />
      <div className="bannerBox">     
             <img src="images/LadiesBanner.gif" alt="banner" />
        </div>
      <Ladie ladiesFashion={ladiesfashion}/>
      <Footer />

    </div>
  )
}

export default MainPage
