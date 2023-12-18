'use client'

import { BashDatos } from "@/models/Bash"
import { useEffect, useState } from "react"

export function useFechDataBash() {
    const [error,setError] = useState(false)
    const [dataTable,setDataTable] = useState<BashDatos[]>([
        {
            id: 0,
            estado: true,
            horaFin: "",
            horaIni: "",
            hostName: "",
            ipAddress: "",
            nombrePro: ""
        }
    ])

    const datares = async ()=> {
            
        try {
            const res = await fetch("http://127.0.0.1:5000/api/programas")
            const resData: BashDatos[] = await res.json()
            const resDataAdapter: BashDatos[] = resData.map((i,index) => ({
                id: index + 42,
                ...i
            }))
            setDataTable(resDataAdapter)
        } catch (e){
            setError(!error)
            console.log(e)
        }
    }

    useEffect(()=> {
        datares()
    },[])
    

  return (
    {
        dataTable,error
    }
  )
}
