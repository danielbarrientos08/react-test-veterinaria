import { useEffect, useState } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) || [];
  const [pacientes, setPacientes] = useState(pacientesLS);
  const [paciente, setPaciente] = useState({});


  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  },[pacientes])

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter((pacienteState) => pacienteState.id !== id)
    setPacientes(pacientesActualizados);
  }

    return (
        <div className="container mx-auto mt-20">
        <Header />
        <div className="mt-12 md:flex">
            <Formulario 
            pacientes={pacientes}
            paciente={paciente}
            setPaciente={setPaciente}
            setPacientes={setPacientes}
            
            />
            <ListadoPacientes 
            pacientes = {pacientes}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
            />
        </div>
        
        </div>
    )
}

export default App
