import '../css/gallery.css'
import img1 from '../images/gallery/img1.png'
import img2 from '../images/gallery/img2.png'
import img3 from '../images/gallery/img3.png'
import img4 from '../images/gallery/img4.png'
import img5 from '../images/gallery/img5.png'
import img6 from '../images/gallery/img6.png'
import img7 from '../images/gallery/img7.png'



export default function Gallery() {
	return (
		<div>
			<section className="gallery" id='gallery'>
				<h1>Галерея</h1>
				<div className="grid-content">

					<div className="gallery-item span rows">
						<img src={img1} alt="Img1" />
					</div>
					<div className="gallery-item span">
						<img src={img2} alt="Img2" />
					</div>
					<div className="gallery-item ">
						<img src={img3} alt="Img3" />
					</div>
					<div className="gallery-item">
						<img src={img4} alt="Img4" />
					</div>

				</div>
				<div className="gallery-content">

					<div className="gallery-item">
						<img src={img5} alt="Img5" />
					</div>
					<div className="gallery-item">
						<img src={img6} alt="Img6" />
					</div>
					<div className="gallery-item">
						<img className='full' src={img7} alt="Img7" />
					</div>

				</div>

			</section>
		</div>
	)
}