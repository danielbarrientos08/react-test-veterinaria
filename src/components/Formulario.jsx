import React, { useState, useEffect } from 'react';
import Error from './Error';

const Formulario = ({pacientes, paciente, setPacientes, setPaciente}) => {
  	const [nombre, setNombre] = useState('');
  	const [propietario, setPropietario] = useState('');
  	const [email, setEmail] = useState('');
  	const [fecha, setFecha] = useState('');
  	const [sintomas, setSintomas] = useState('');

	const [error, setError] = useState(false);

	useEffect (() => {
		const {nombre,propietario,email,fecha,sintomas} = paciente

		if(Object.keys(paciente).length > 0){
			setNombre(nombre);
			setPropietario(propietario);
			setEmail(email);
			setFecha(fecha);
			setSintomas(sintomas);
		}

	}, [paciente])

	const generarId = () => {
		const random = Math.random().toString(36).substring(2);
		const fecha = Date.now().toString(36);

		return random + fecha;
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		//validacion de datos
		if([nombre, propietario, email, fecha, sintomas].includes('')){
			setError(true);
			return;
		}
		setError(false);
		//Objeto de paciente
		const objetoPaciente = {
			nombre, 
			propietario, 
			email, 
			fecha, 
			sintomas
		}

		if(paciente.id){
			//editando
			objetoPaciente.id = paciente.id;
			const pacientesActualizados = pacientes.map((pacienteState) => pacienteState.id === paciente.id ? objetoPaciente :  pacienteState)

			setPacientes(pacientesActualizados);

		}else {
			//nuevo registro
			objetoPaciente.id = generarId();
			setPacientes([...pacientes, objetoPaciente]);
		}

		setPaciente({});
		//resetear formulario
		setNombre('');
		setPropietario('');
		setEmail('');
		setFecha('');
		setSintomas('');
		
	}

	return (
		<div className='md:w-1/2 lg:w-2/5'>
			<h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
			<p className='text-lg mt-5 text-center mb-10'>
				Añade pacientes y {''} 
				<span className='text-indigo-600 font-bold '>Adminístralos</span>
			</p>

			<form 
				onSubmit={handleSubmit} 
				className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
				{ error && <Error><p>Todos los campo son obligatorios</p></Error>
				}	
				<div className='mb-5'>
					<label 
						htmlFor='mascota' 
						className='block text-gray-700 uppercase font-bo'>
						Nombre mascota
					</label>
					<input 
						id='mascota'
						type="text" 
						placeholder='Nombre de la mascota'
						className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
						value={nombre}
						onChange={(e) => setNombre(e.target.value)}
					/>
				</div>
				<div className='mb-5'>
					<label 
						htmlFor='propietario' 
						className='block text-gray-700 uppercase font-bo'>
						Nombre propietario
					</label>
					<input 
						id='propietario'
						type="text" 
						placeholder='Nombre del propietario'
						className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
						value={propietario}
						onChange={(e) => setPropietario(e.target.value)}
					/>
				</div>
				<div className='mb-5'>
					<label 
						htmlFor='email' 
						className='block text-gray-700 uppercase font-bo'>
						Email
					</label>
					<input 
						id='email'
						type="email" 
						placeholder='Email del propietario'
						className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className='mb-5'>
					<label 
						htmlFor='alta' 
						className='block text-gray-700 uppercase font-bo'>
						Alta
					</label>
					<input 
						id='alta'
						type="date" 
						className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
						value={fecha}
						onChange={(e) => setFecha(e.target.value)}
					/>
				</div>
				<div className='mb-5'>
					<label 
						htmlFor='alta' 
						className='block text-gray-700 uppercase font-bo'>
						Síntomas
					</label>
					<textarea
						id='sintomas'
						className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
						placeholder='Describe los síntomas'
						value={sintomas}
						onChange={(e) => setSintomas(e.target.value)}
					>
					</textarea>
				</div>
				<button 
					type='submit'
					className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indgo-700 cursor-pointer transition-colors'
				>
					{paciente.id ? 'Guardar cambios' :'Agregar paciente'}
				</button>
			</form>
			
		</div>
	)
}

export default Formulario
