"use client"
import useFechData from '@/hooks/useFechData'
import { convertFecha } from '@/tools/recursos'
import React from 'react'
import BoxTotal from './BoxTotal'

function TableComponent() {

 const { data, isLoading, error }  = useFechData() 



    if (isLoading) {
      return <p>Cargando...</p>
    }
    
    if (error) {
        return <p className=' font-semibold  '>Error, Fuera de conexion con el server</p>;
    }

  return (
    <div className='w-full'>
            <div className='w-full space-y-5 '>
              <BoxTotal />
              <table className=" w-full h-full">
                <thead>
                  <tr>
                    <th className=" text-slate-400/80 text-[0.80rem] uppercase py-2 ">Name</th>
                    <th className=" text-slate-400/80 text-[0.80rem] uppercase py-2">HostName</th>
                    <th className=" text-slate-400/80 text-[0.80rem] uppercase py-2">Hora Ini</th>
                    <th className=" text-slate-400/80 text-[0.80rem] uppercase py-2">Hora Fin</th>
                    <th className=" text-slate-400/80 text-[0.80rem] uppercase py-2">State</th>
                    <th className=" text-slate-400/80 text-[0.80rem] uppercase py-2">Ip address</th>
                  </tr>
                </thead>
                <tbody className='w-full  divide-y-0 divide-solid  space-x-3'>
                    {
                        data?.map((item,index) => (
                            <tr className='text-center' key={index + 400}> 
                                <td className=" text-slate-400 py-2 font-semibold">{item.nombrePro}</td>
                                <td className=" text-slate-400 py-2 font-semibold">{item.hostName}</td>
                                <td className=" text-slate-400 py-2 font-semibold">{convertFecha(item.horaIni).toLocaleString()}</td>
                                <td className=" text-slate-400 py-2 font-semibold">{convertFecha(item.horaFin).toLocaleString()}</td>
                                <td className=" text-slate-400 py-2 font-semibold  flex justify-center">
                                <p className={`max-w-min rounded-md px-4 py-1 bg-green-400/30 text-center ${ item.estado ? 'bg-green-400/30' : 'bg-red-400/30'}`}>{item.estado ? "Completado": "Cancelado"}</p>
                                </td>
                                <td className=" text-slate-400 p-2 font-semibold">{item.ipAddress}</td>
                            </tr>      
                        ))
                    }         
                </tbody>
              </table>
            </div>
          </div>
  )
}

export default TableComponent