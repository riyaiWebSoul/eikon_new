import React from 'react'
import SectionService1 from '../Service/SectionService1'
import Medical from '../Service/Medical'
import BookApoint from '../Service/BookApoint'

export default function ServiceMedical() {
  return (
    <div>
      <SectionService1/>
      {/* <SectionService1/> */}
      <Medical/>
      <BookApoint/>
    </div>
  )
}
