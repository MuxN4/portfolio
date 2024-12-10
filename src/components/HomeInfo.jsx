import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box relative -mt-5 text-center p-4'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <InfoBox 
            text="Need a project done or are looking for a dev? I’d love to help"
            link="/contact"
            btnText="Get in Touch"
        />
    ),
    2: (
        <InfoBox 
            text='Been working on cool projects over the years. Curious? Take a look'
            link='/projects'
            btnText='visit my portfolio'
        />
    ),
    3: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hello, I'm <span className='font-semibold'>Stephen</span>
            <br />
            A Software Developer from Kenya.
        </h1>
    ),
    4: (
        <InfoBox 
            text='Every step has been a chance to grow and create meaningful work.'
            link='/about'
            btnText='Discover More'
        />
    ),
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo