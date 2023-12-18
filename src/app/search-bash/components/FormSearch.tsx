'use client'
import React, { ChangeEvent, useState } from 'react'
import ProgramSearch from './ProgramSearch';
import ProgramSearchDate from './ProgramSearchDate';

function FormSearch() {
  const [searchName,setSearchName] = useState<string>("")
  const [searchFechaIni,setSearchFechaIni] = useState<string>("")
  const [searchFechaFin,setSearchFechaFin] = useState<string>("")

  const [formValues,setFormValues] = useState({
    name: "",
    ini: "",
    fin: ""
  })

  const buscarName = (e:ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.target.value)
  }

  const buscarFechaIni = (e:ChangeEvent<HTMLInputElement>) => {
    setSearchFechaIni(e.target.value)
  }

  const buscarFechaFin = (e:ChangeEvent<HTMLInputElement>) => {
    setSearchFechaFin(e.target.value)
  }

  const submitDate =  (e: React.FormEvent) => {
      console.log("click")
      e.preventDefault()
      setFormValues({
        name: searchName,
        ini: searchFechaIni,
        fin: searchFechaFin
      })
  }

  console.log(formValues)

  return (
    <section className='grid grid-cols-3 gap-10 h-screen py-10 container mx-auto px-4 '>
        <div className=' col-span-3  md:col-span-1 h-full shadow-lg border-2 border-black/5 rounded-md space-y-4'>
              <form  onSubmit={submitDate} className='bg-white/10  rounded-md p-8 space-y-4' >
                    <div className='text-white flex flex-col gap-2'>
                      <label className=' font-bold text-black dark:text-white/70'>Search Program Name</label>
                      <input type="text" value={searchName} onChange={buscarName} className='text-black dark:text-white appearance-none w-full px-2 py-1 border-2 focus:outline-none focus:outline-blue-700 focus:border-transparent  border-black dark:border-white/60  bg-transparent rounded-md' />
                    </div>
                    <div className='flex flex-col gap-2'>
                          <p className=' font-bold text-black dark:text-white/70'>Search Program Date</p>
                            <label className=' font-bold text-black dark:text-white'>Hora Inicial  
                              <input type="datetime-local" autoFocus step="0.1" value={searchFechaIni} onChange={buscarFechaIni}  className='text-black dark:text-white appearance-none w-full px-2 py-1 border-2 focus:outline-none focus:outline-blue-700 focus:border-transparent  border-black dark:border-white/60  bg-transparent rounded-md' />
                            </label>
                            <label className=' font-bold text-black dark:text-white py-3'>Hora Fin 
                              <input type="datetime-local" autoFocus step="0.1" value={searchFechaFin}  onChange={buscarFechaFin}  className='text-black dark:text-white appearance-none w-full px-2 py-1 border-2 focus:outline-none focus:outline-blue-700 focus:border-transparent  border-black dark:border-white/60  bg-transparent rounded-md' />
                            </label>
                        
                    </div>
                    <button type="submit" className=' w-full border-2 py-2 border-black dark:border-white cursor-pointer hover:bg-black/70 havor:text-black  dark:hover:bg-white/70 dark:hover:text-black '>Enviar</button> 
              </form>
        </div>
        {
          setFormValues.name === ""
          ? <ProgramSearchDate ini={formValues.ini} fin={formValues.fin}  />
          : <ProgramSearch formValue={formValues} />
        }
    </section>
  )
}


export default FormSearch