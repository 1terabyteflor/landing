import React from 'react';
import { Footer } from 'flowbite-react';
import loguito from '../public/loguito_c7.png'
import Image from 'next/image';



const Pie = () => {
  return (
<Footer container={true} className='border-none bottom-0'>
  <div className="w-full text-center">
    <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
    <Footer.Copyright
      href="#"
      by="C7 Studio"
      year={2022}
      />
    <Image 
    src={loguito}
    width='15px'
    height='15px'
    />
    </div>
  </div>
</Footer>
  )
}

export default Pie