import logo from '../images/header/logo.svg'
import phone from '../images/header/phone.webp'
import '../css/header.css'


export default function Header() {
	return (
		<div>
			<header>
				<div className="logo">
					<img src={logo} alt="Logo" />
					<span>Современные методы <br /> диагностики</span>
				</div>
				<nav>
					<ul>
						<li>
							<a className='active-link' href="#" alt="">Лаборатория</a>
							<a href="#" alt="">Галерея</a>
							<a href="#" alt="">Оставить заявку</a>
						</li>
					</ul>
				</nav>
				<div className="phone-contact">
					<img src={phone} alt="Phone" />
					<div className="contact-link" >
						<a href="tel:+7 123 456 7890">+7 123 456 7890</a>
						<span>Звонок бесплатный</span>
					</div>
				</div>
			</header>
		</div>
	)
}