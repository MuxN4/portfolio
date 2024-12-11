import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>Got a concept you want to develop? <br className='sm:block hidden'/> Let's create something remarkable..</p>
        <Link to='/contact' className='btn'>
            Contact
        </Link>
    </section>
  )
}

export default CTA