import TableComponent from '@/components/TableComponent'
import React from 'react'

function page() {
  return (
    <section className='dark:bg-white/5 container mx-auto col-span-4 my-6 md:col-span-3 shadow-lg border-2 border-black/5 rounded-md p-6 flex justify-center items-center' >
        <div className=' overflow-auto col-span-2 md:col-span-1  w-full'>
            <TableComponent />
        </div>
    </section>
  )
}

export default page