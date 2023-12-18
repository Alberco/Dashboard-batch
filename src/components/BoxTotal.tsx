'use client'
import { useFechDataBash } from '@/hooks/useFechDataBash';
import { Activity } from 'lucide-react';
  
function BoxTotal() {

    const { dataTable } = useFechDataBash()
    const positvos =  dataTable.filter(item => item.estado === true).length
    const negativos = dataTable.filter(item => item.estado === false ).length

  return (
    <section className="w-full h-full grid grid-cols-1 gap-4 md:grid-cols-2 grid-flow-row ">
      <div className='dark:bg-white/5 shadow-lg border-2 flex items-center flex-col justify-center gap-3 border-black/5 rounded-md p-6  '>
        <p className='text-2xl font-bold'>Ejecuciones con exito </p>
        <p className='text-3xl font-bold text-center rounded-md px-4 py-1 flex gap-2'>
          <span className=''>
            <Activity color='#4ade80' />
          </span>
          {positvos}
          </p>
      </div>
      <div className='dark:bg-white/5 shadow-lg border-2 flex items-center flex-col justify-center gap-3 border-black/5 rounded-md p-6  '>
        <p className='text-2xl font-bold'>Ejecuciones canceladas </p>
        <p className='text-3xl font-bold text-center rounded-md px-4 py-1 flex gap-2 bg-red'>
          <span>
            <Activity color='rgb(248, 113, 113)' />
          </span>
          {negativos}
          </p>
      </div>
    </section> 
  )
}

export default BoxTotal