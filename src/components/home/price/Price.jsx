import React from 'react'
import './Price.css'
import Heading from '../../common/Heading'
import PriceCard from './PriceCard'

const Price = () => {
  return (
    <>
    <section className='price padding'>
      <div className="container">
        <Heading title='Select Your Package' subtitle='At vero eos et accusamus odio dignissimos ducimus qui blanditiis preasentium voluptatum deleniti atque corrupti quos dolores' />
        <PriceCard />
      </div>
    </section>
    </>
  )
}

export default Price