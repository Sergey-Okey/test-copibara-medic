import logo from '../images/header/logo.svg'
import phone from '../images/header/phone.webp'
import '../css/header.css'
import { Link } from 'react-scroll';



export default function Header() {
	return (
		<div>
			<header>
				<div className="logo">
					<a href="/">
						<img src={logo} alt="Logo" />
					</a>
					<span>Современные методики диагностики</span>
				</div>
				<nav>
					<ul>
						<li>
							<Link to='laboratory' className='active-link' smooth={true} duration={500}>Лаборатория</Link>
							<Link to='gallery' smooth={true} duration={500}>Галерея</Link>
							<Link to='application' smooth={true} duration={500}>Оставить заявку</Link>
						</li>
					</ul>
				</nav>
				<div className="phone-contact">
					<a href="tel:+7 123 456 7890">
						<img src={phone} alt="Phone" />
					</a>
					<div className="contact-link" >
						<a href="tel:+7 123 456 7890">+7 123 456 7890</a>
						<span>Звонок бесплатный</span>
					</div>
				</div>
			</header>
		</div>
	)
}
