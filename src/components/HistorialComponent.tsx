'use client'
import useFechData from '@/hooks/useFechData'
import { BashDatos } from '@/models/Bash'
import { convertFecha } from '@/tools/recursos'
import { ActivitySquare, AlertTriangle, CheckCircle } from 'lucide-react'

function HistorialComponent() {

    const { data,isLoading, error  } = useFechData()

    const topData : BashDatos[] | undefined = data?.slice(10,15)
    
    if (error) {
        return <p className=' font-semibold  '>Error, Fuera de conexion con el server</p>;
    }

    if (isLoading) {
        return <p>Cargando...</p>
    }
    
    if (data === undefined) return null;

  return (
    <div className='flex flex-col gap-3 h-[400px] w-full'>
            <div className=''>
                <p className='text-xl font-semibold'>Historial de Programas</p>
            </div>
            <div className=' grid grid-flow-row divide-y divide-solid h-full' >
                {
                    topData?.map((item,index) => (
                        <div className='flex justify-between items-center w-full' key={index + 85522}>
                            <div className='flex gap-3 items-center justify-center'>
                                <div className=' rounded-xl p-2 bg-slate-200'>
                                    <ActivitySquare color='#94a3b8' />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <p className=' text-sm font-bold tracking-wide dark:text-white/60'>{item.nombrePro}</p>
                                    <p className=' text-sm text-black/60 dark:text-white/60'>{item.ipAddress}</p>
                                </div>
                            </div>
                            <div className='flex justify-center items-center gap-4'>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-xs text-gray-400'>{convertFecha(item.horaIni).toLocaleString()}</p>
                                    <p className='text-xs text-gray-400'>{convertFecha(item.horaFin).toLocaleString()}</p>
                                </div>
                                <div className={`p-2 rounded-full ${item.estado ? 'bg-green-400/30': 'bg-red-400/30'}`}>
                                    {item.estado ? <CheckCircle size={25} color='#84cc16' /> :  <AlertTriangle size={25} color='#dc2626'/>  }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
          </div>
  )
}

export default HistorialComponent