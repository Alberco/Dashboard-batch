'use client'
import useFechDataDate from '@/hooks/useFechDataDate';
import { convertFecha } from '@/tools/recursos';
import React from 'react'

interface Props {
    ini: string
    fin: string
}

function ProgramSearchDate({  ini, fin }: Props) {
  
    const { dataFecha, danger, loading }  = useFechDataDate(ini,fin); 

    const convertirString  = (e: string) => {
        const ultimaBarraIndex = e.lastIndexOf('\\');
        if(ultimaBarraIndex !== -1)
        {
            const d = e.substring(ultimaBarraIndex + 1);
            return d
        }
        return e
    }
    
    if (loading) {
        return <p>No Hay data</p>
    }

    if (danger) {
        return <p className=' font-semibold  '>Error, Fuera de conexion con el server</p>;
    }

  return (
    <div className='text-white mr-4 w-full'>
    {   
        <ul className='text-black dark:text-white flex gap-3 flex-wrap'>
            {
                    dataFecha?.map((item,index) => (
                        <li key={index + 555} className=' flex flex-col w-max px-10 shadow-lg rounded-md bg-white/20 backdrop-blur-md py-2 border-2 border-white/20'>
                            <div className='flex flex-col justify-center items-center gap-2'>
                                <p className='text-center px-4 py-1 text-lg break-words text-black/70 font-bold dark:text-white/90'>{convertirString(item.nombrePro)}</p>
                                <p className={`max-w-min rounded-md px-2 py-1 bg-green-400/30 text-center ${ item.estado ? 'bg-green-400/30' : 'bg-red-400/30'}`}>{item.estado ? "Completado": "Cancelado"}</p>
                                <p className='text-center px-4 py-1 text-black dark:text-white/60 text-sm'>{convertFecha(item.horaIni).toLocaleString()}</p>
                                <p className='text-center px-4 py-1 text-sm'>{item.horaFin}</p>
                            </div>
                        </li> 
                    ))
                
            }
        </ul>
    }
</div>
  )
}

export default ProgramSearchDate