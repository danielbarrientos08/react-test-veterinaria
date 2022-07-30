import React from 'react'

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
  
    const {nombre,propietario,email,fecha,sintomas, id} = paciente

    const handleEliminar = ()=> {
        const respuesta = confirm('Deseas eliminar este paciente ?')
        if(respuesta){
            eliminarPaciente(id)
        }
    }

    return (
        <div className='mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl'>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre:
                <span className='font-normal normal-case'> {nombre}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario:
                <span className='font-normal normal-case'> {propietario}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Email:
                <span className='font-normal normal-case'> {email}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Alta:
                <span className='font-normal normal-case'> {fecha}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Síntomas:
                <span className='font-normal normal-case text-justify'> {sintomas}</span>
            </p>
            <div className='flex justify-between mt-10'>
                <button 
                    type='button'
                    className='py-2 px-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold uppercase'
                    onClick={() => setPaciente(paciente)}
                >Editar
                </button>
                
                <button 
                    type='button'
                    className='py-2 px-6 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold uppercase'
                    onClick={handleEliminar}
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default Paciente