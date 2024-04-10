import '../css/application.css'
import '../css/form.css'
import ok from '../images/application/ok.png'
import { useState } from 'react'
import { Element } from 'react-scroll';
import chek from '../images/application/checkmark-big-circle.png'

export default function Application() {
	return (
		<div>
			<Element name='application' className='application' id='application'>
				<h1>Заявка на диагностику</h1>
				<p>Доверьте свои медицинские исследования надежным капибарам-лаборантам и получите <br /> качественные результаты в кратчайшие сроки!</p>
				<div className="form">
					<MyForm />
				</div>
			</Element>
		</div>
	)
}


function MyForm() {
	const [surname, setSurname] = useState('');
	const [name, setName] = useState('');
	const [patronymic, setPatronymic] = useState('');
	const [showModal, setShowModal] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		// Действия при отправке формы
		console.log(`Фамилия: ${surname}, Имя: ${name}, Отчество: ${patronymic}`);
		setShowModal(true);
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="surname"></label>
				<input type="text" id="surname" placeholder='Введите вашу фамилию' value={surname} onChange={(e) => setSurname(e.target.value)} required />

				<label htmlFor="name"></label>
				<input type="text" id="name" placeholder='Введите ваше имя' value={name} onChange={(e) => setName(e.target.value)} required />

				<label htmlFor="patronymic"></label>
				<input type="text" id="patronymic" placeholder='Введите ваше отчество' value={patronymic} onChange={(e) => setPatronymic(e.target.value)} />

				<button type="submit">Отправить <img src={ok} alt="Ok" /></button>

				{showModal &&
					<div className="modal">
						<div className="modal-title">
						<img src={chek} alt="Chek" />
							<p>Спасибо за предоставленную информацию, мы свяжемся с вами в ближайшее время.</p>
						</div>
						<button onClick={() => setShowModal(false)}>Закрыть</button>
					</div>
				}

			</form>


		</div>
	);
}
