import { BashDatos } from '@/models/Bash'
import { useEffect, useState } from 'react'

export function useFechSearchProgram(nameProgram: string) {

    const [error,setError] = useState(false)
    const [dataTable,setDataTable] = useState<BashDatos[]>([{
        id: 0,
        estado: true,
        horaFin: "",
        horaIni: "",
        hostName: "",
        ipAddress: "",
        nombrePro: ""
         }
    ])

    const searchProgram = async ()=> {
        try {
            const res = await fetch(`https://localhost:7198/api/programs/searchName?nombrePro=${nameProgram}`)
            const resData: BashDatos[] = await res.json()
            const resDataAdapter: BashDatos[] = resData.map((i,index) => ({
                id: index + 712,
                ...i
            }))
            setDataTable(resDataAdapter)
            console.log(resData)
        } catch (e){
            setError(old=> old!)
            console.log(e)
        }
    }

    useEffect(()=> 
    {
        searchProgram() 
    },[nameProgram])
    
  return (

    {  dataTable, error }
  )
}
