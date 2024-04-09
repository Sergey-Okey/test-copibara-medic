import '../css/application.css'
import '../css/form.css'
import ok from '../images/application/ok.png'
import { useState } from 'react'

export default function Application() {
	return (
		<div>
			<article className='application'>
				<h1>Заявка на диагностику</h1>
				<p>Доверьте свои медицинские исследования надежным капибарам-лаборантам и получите <br /> качественные результаты в кратчайшие сроки!</p>
				<div className="form">
					<MyForm />
				</div>
			</article>
		</div>
	)
}


function MyForm() {
	const [surname, setSurname] = useState('');
	const [name, setName] = useState('');
	const [patronymic, setPatronymic] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		// Действия при отправке формы
		console.log(`Фамилия: ${surname}, Имя: ${name}, Отчество: ${patronymic}`);
	}

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="surname"></label>
			<input type="text" id="surname" placeholder='Имя:' value={surname}
				onChange={(e) => setSurname(e.target.value)}
			/>

			<label htmlFor="name"></label>
			<input type="text" id="name" placeholder='Фамилия:' value={name}
				onChange={(e) => setName(e.target.value)}
			/>

			<label htmlFor="patronymic"></label>
			<input type="text" id="patronymic" placeholder='Отчество:' value={patronymic}
				onChange={(e) => setPatronymic(e.target.value)}
			/>

			<button type="submit">Отправить <img src={ok} alt="Ok" /></button>
		</form>
	);
}
