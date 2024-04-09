import logo from '../images/header/logo.svg'
import phone from '../images/header/phone.webp'
import '../css/header.css'


export default function Header() {
	return (
		<div>
			<header>
				<div className="logo">
					<a href="#">
						<img src={logo} alt="Logo" />
					</a>
					<span>Современные методики диагностики</span>
				</div>
				<nav>
					<ul>
						<li>
							<a className='active-link' href="#laboratory" alt="">Лаборатория</a>
							<a href="#gallery" alt="">Галерея</a>
							<a href="#application" alt="">Оставить заявку</a>
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

// Плаваня прокрутка к ссылкам.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});