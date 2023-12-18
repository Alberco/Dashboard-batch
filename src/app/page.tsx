import React from 'react'
import Image from 'next/image'
import BoxTotal from '@/components/BoxTotal'

function page() {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4 min-h-screen container mx-auto px-4 w-full place-content-center place-items-center '>
      <div className='flex flex-col gap-8 justify-center items-center'>
        {/* <Image src={"/logoOne.png"} width={400} height={400} alt='logo Principal' /> */}
        <p className='text-3xl md:text-5xl lg:text-7xl font-bold text-black/70 dark:text-slate-200'>Dashboard</p>
        <div className='px-10 md:px-14'>
          <p className='text-black/70 dark:text-white/70 text-2xl font-medium'>Bienvenido a su panel de control, donde podrá obtener datos concretos de las ejecuciones de los batch en producción.</p>
        </div>
        <p></p>
      </div>
      <div className='grid grid-cols-1 grid-flow-row gap-6'>
        <div className='border-2 border-white/5 h-full'>
          <BoxTotal />
        </div>
        <div className=' md:row-span-2 flex justify-center items-center'>
          <Image src={"/img2.svg"} width={600} height={600} alt='logo Principal' />
        </div>
      </div>
    </section>
  )
}

export default page