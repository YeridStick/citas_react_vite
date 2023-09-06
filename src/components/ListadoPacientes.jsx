import React from 'react'
import Paciente from './Paciente'

export default function ListadoPacientes({ paciente, SetgrudPaciente, eliminarPaciente }) {
  if (paciente && paciente.length) {
    return (
      <div className="mx-auto mt-4 w-full h-screen overflow-y-auto">
        <h2 className="font-black text-3xl text-center">Seguimiento de Pacientes</h2>
        <p className="text-center text-1xl font-bold">
          Administra tus {" "} <span className="text-indigo-600">Pacientes y Citas</span>
        </p>
        { 
          paciente.map((pacientes)=>{
            return <Paciente 
                    key={pacientes.id} 
                    pacientes={pacientes}
                    SetgrudPaciente={SetgrudPaciente} 
                    eliminarPaciente={eliminarPaciente}
                  />
          })
        }
      </div>
    )
  }else{
    return (
      <div className="mx-auto mt-4 w-full h-screen overflow-y-auto">
        <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
        <p className="text-center text-1xl font-bold">
          Comienza agregando pacientes {" "} <span className="text-indigo-600">Se mostraran aqui</span>
        </p>
      </div>
    )
  }
}
