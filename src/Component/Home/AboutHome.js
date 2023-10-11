import React from 'react'
import SectionAbout from '../About/SectionAbout'
import AboutSection from '../About/AboutSection'
import Counter from '../Home/Counter'
import Testimonial from '../Home/Testimonial'
import TeamSection from '../About/TeamSection'

export default function About() {
  return (
    <div>
      <SectionAbout/>
      <AboutSection/>
      <Counter/>
      <TeamSection/>
      <Testimonial/>
    </div>
  )
}