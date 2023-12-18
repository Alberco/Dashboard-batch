import { BashDatos } from '@/models/Bash'
import useSWR from 'swr'

function useFechSearch(nameProgram: string) {

  const { data, isLoading,error } = useSWR<BashDatos[]>(`http://127.0.0.1:5000/api/programas/searchName?nombrePro=${nameProgram}`, async (url: string) => {
    const res = await fetch(url)
    const req = await res.json()
    return req
  })  

  return (
    {
        data, isLoading, error
    }
  )
}

export default useFechSearch