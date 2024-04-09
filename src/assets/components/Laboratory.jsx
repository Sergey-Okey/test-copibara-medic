import lab from '../images/lab/image-lab.png'
import line from '../images/lab/line.png'
import '../css/laboratory.css'
import { Element } from 'react-scroll';

export default function Laboratory() {
	return (
		<div>
			<Element name="laboratory" className="laboratory" id='laboratory'>
				<div className="content-title">
					<h1>Лаборатория</h1>
					<p>Наша лаборатория предлагает широкий спектр медицинских исследований, проводимых опытными капибарами-лаборантами. Мы специализируемся на анализе биоматериалов, микробиологических исследованиях, генетической диагностике и многом другом.</p>
					<p>Мы используем современное оборудование и  методики и гарантируем точность и <br /> надежность результатов.</p>
					<a href="#application"><button>Оставить заявку <img src={line} alt="Line" /></button> </a>
				</div>
				<div className="content-image">
					<img src={lab} alt="Lab" />
				</div>
			</Element>
		</div>
	)
}
