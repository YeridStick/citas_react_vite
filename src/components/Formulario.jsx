import React, { useEffect, useState } from 'react'
import Error from './Error'

export default function Formulario({ paciente, Setpaciente, grudPaciente, SetgrudPaciente }) {
  const [nombreM, SetnombreM] = useState("")
  const [nombreP, SetnombreP] = useState("")
  const [emailP, SetemailP] = useState("")
  const [alta, Setalta] = useState("")
  const [sintoma, Setsintoma] = useState("")

  const [error, Seterror] = useState(false)

  const generarID = () => {
    const random = Math.random().toString(36).substr(2);
    const id = Date.now().toString(36)
    return random + id
  }
  //Objeto de memoria
  useEffect(()=>{
    if (Object.keys(grudPaciente).length > 0) {
      SetnombreM(grudPaciente.nombreM)
      SetnombreP(grudPaciente.nombreP)
      SetemailP(grudPaciente.emailP)
      Setalta(grudPaciente.alta)
      Setsintoma(grudPaciente.sintoma)
    }
  }, [grudPaciente])

  const handleSubmit = (e) => {
    e.preventDefault();//Prevenir accion por defecto de formulario 
    //validacion del comentario
    if([nombreM, nombreP, emailP, alta, sintoma].includes("")){
      Seterror(true)
      return;
    }
    Seterror(false)
    //Objeto de paciente 
    const objetoPaciente = {
      nombreM,
      nombreP,
      emailP,
      alta,
      sintoma
    }

    if(grudPaciente.id){
      //Actualizando registro
      objetoPaciente.id = grudPaciente.id
      const update = paciente.map(todosLosPacientes =>{
        if(todosLosPacientes.id === objetoPaciente.id){
          //Debemos retornar el estado de la funcion ya que no estamos trabajando dentro de la funcion
          return objetoPaciente 
        }else{
          //Debemos retornar el estado de la funcion ya que no estamos trabajando dentro de la funcion
          return todosLosPacientes
        }
      })
      Setpaciente(update)
      SetgrudPaciente({})
    }else{
      //Nuevo registro
      objetoPaciente.id = generarID()
      Setpaciente([objetoPaciente, ...paciente])
    }
    //Recetiamos formulario
    SetnombreM("")
    SetnombreP("")
    SetemailP("")
    Setalta("")
    Setsintoma("")
  }

  return (
    <div className="bg-white mx-auto mt-4 w-full">
      <h2 className="font-black text-3xl text-center">Formulario</h2>
      <p className="text-center text-1xl font-bold mb-5">
        Añade Pacientes y {" "} <span className="text-indigo-600">Administralos</span>
      </p>
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg py-10 px-5 mb-8">
        {
          error && <Error>Todos los campos</Error>
        }
        <div className='mb-4 w-full'>
          <label className="block text-gray-700 uppercase font-bold" htmlFor="mascota">Nombre de Mascota</label>
          <input 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            type="text" 
            id="mascota" 
            placeholder="Nombre de Mascota" 
            value={nombreM}
            onChange={(e)=>SetnombreM(e.target.value)}
          />
        </div>
        <div className='mb-4 w-full'>
          <label className="block text-gray-700 uppercase font-bold" htmlFor="propietario">Nombre de Propietario</label>
          <input 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            type="text" id="propietario" 
            placeholder="Nombre de Propietario" 
            value={nombreP}
            onChange={(e)=>SetnombreP(e.target.value)}
          />
        </div>
        <div className='mb-4 w-full'>
          <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Email de Propietario</label>
          <input 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            type="email" id="email" 
            placeholder="Email de Propietario" 
            value={emailP}
            onChange={(e)=>SetemailP(e.target.value)}
          />
        </div>
        <div className='mb-4 w-full'>
          <label className="block text-gray-700 uppercase font-bold" htmlFor="Alta">Alta</label>
          <input 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            type="date" 
            id="Alta" 
            value={alta}
            onChange={(e)=>Setalta(e.target.value)}
          />
        </div>
        <div className='mb-4 w-full'>
          <label className="text-gray-700 uppercase font-bold" htmlFor="sintomas">sintomas</label>
          <textarea 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            id="sintomas"
            placeholder='Describe los sintomas'
            value={sintoma}
            onChange={(e)=>Setsintoma(e.target.value)}
          />  
        </div>
        {
          grudPaciente.id ? (
            <input 
              type="submit" 
              className=" bg-green-500 w-full p-3 text-white uppercase font-bold hover:bg-green-700 cursor-pointer translate-all rounded"
              value={"Actulizar Paciente"}
            />
          ):
          (
            <input 
              type="submit" 
              className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer translate-all rounded'
              value={"agregar Paciente"}
            />
          )
        }
      </form>
    </div>
    
  )
}
