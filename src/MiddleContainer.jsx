import React from 'react'
import MainPage from './MainPage'
import MostPopular from './MostPopular'
import ExpertFreelancer from './ExpertFreelancer'
import TrendingOffers from './TrendingOffers'
const MiddleContainer = () => {
  return (
    <div>
        <MainPage/>
        <MostPopular/>
        <ExpertFreelancer/>
        <TrendingOffers/>
    </div>
  )
}

export default MiddleContainer