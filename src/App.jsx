import react, { useEffect, useState } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'

function App() {
  const [paciente, Setpaciente] = useState([])
  const [grudPaciente, SetgrudPaciente] = useState({})

  const eliminarPaciente = (id) => {
    const pacientesEliminados = paciente.filter(delite=> id !== delite.id )
    Setpaciente(pacientesEliminados)
  }

  //En localStorage ay algo?
  useEffect(() => {
    // Intentar cargar datos desde el localStorage solo si pacientes está vacío o el localStorage no tiene datos
    const pacientesLs = JSON.parse(localStorage.getItem('paciente')) || [];
  
    // Actualizar el estado de pacientes solo si hay datos en el localStorage
    if (pacientesLs.length > 0) {
      Setpaciente(pacientesLs);
    }
  }, []);
  
  
  
  //localStorage 
  //con JSON.stringify convertimos el objeto a string
  
  useEffect(()=>{
    localStorage.setItem('paciente', JSON.stringify( paciente ));
  },[ paciente ])
  return (
    <div className="container mx-auto mt-12 max-lg:mt-6 p-6">
      <Header/>
      <div className="flex justify-center items-start h-full max-lg:flex-wrap content-center gap-3">
        <Formulario
          paciente={paciente}
          Setpaciente={Setpaciente}
          grudPaciente={grudPaciente}
          SetgrudPaciente={SetgrudPaciente}
        />
        <ListadoPacientes
          paciente={paciente}
          SetgrudPaciente={SetgrudPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
      
    </div>
  )
}

export default App
