import React from 'react'
import './Recent.css'
import Heading from '../../common/Heading'
import RecentCard from './RecentCard'

const Recent = () => {
  return (
    <>
    <section className='recent padding'>
        <div className="container">
            <Heading title='Recent Property Listed' subtitle='lorem ipsum dolor sit amet, consectetur adipiscing elit ut enim ad minim veniam incidident fjlk amami zone' />
            <RecentCard />
        </div>
    </section>
    </>
  )
}

export default Recent