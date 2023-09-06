import React from 'react'
import Swal from 'sweetalert2'

export default function Paciente({ pacientes, SetgrudPaciente, eliminarPaciente }) {
  //()=>eliminarPaciente(pacientes.id)
  const handelEliminar = () => {
    Swal.fire({
      title: 'Deceas eliminar este paciente',
      icon: 'question',
      iconHtml: '؟',
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
      showCancelButton: true,
      showCloseButton: true
    }).then((result)=>{
      result.isConfirmed && eliminarPaciente(pacientes.id) 
    })
  }
  return (
    <div className="mt-5 bg-white shadow-lg p-6 rounded">
      <p className="block text-gray-700 uppercase font-bold mb-2">
        Mascota: {" "}
        <span className="font-normal normal-case">{pacientes.nombreM}</span>
      </p>
      <p className="block text-gray-700 uppercase font-bold mb-2">
        Propietario: {" "}
        <span className="font-normal normal-case">{pacientes.nombreP}</span>
      </p>
      <p className="block text-gray-700 uppercase font-bold mb-2">
        Email: {" "}
        <span className="font-normal normal-case">{pacientes.emailP}</span>
      </p>
      <p className="block text-gray-700 uppercase font-bold mb-2">
        Alta: {" "}
        <span className="font-normal normal-case">{pacientes.alta}</span>
      </p>
      <p className="block text-gray-700 uppercase font-bold mb-2">
        Sintomas: {" "}
        <span className="font-normal normal-case">
          {pacientes.sintoma}
        </span>
      </p>
      <div className="w-full flex mt-2 justify-around gap-4 px-1">
        <button 
          onClick={()=>SetgrudPaciente(pacientes)} 
          className="p-1 bg-indigo-500 hover:bg-indigo-700 rounded font-bold uppercase w-full text-white">
            Editar
        </button>
        <button 
          onClick={handelEliminar}
          className="p-1 bg-red-500 hover:bg-red-700 rounded font-bold uppercase w-full text-white">
            Eliminar
        </button>
      </div>
    </div>
  )
}
