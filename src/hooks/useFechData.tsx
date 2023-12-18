'use client'
import { BashDatos } from "@/models/Bash"
import useSWR from "swr"

function useFechData() {
  
  const { data, isLoading, error } = useSWR<BashDatos[]>("http://127.0.0.1:5000/api/programas", async (url:string) => {
    const res = await fetch(url)
    const req = await res.json()
    console.log(req)
    return req
  })  

  return (
    {
        data, isLoading, error
    }
  )
}

export default useFechData