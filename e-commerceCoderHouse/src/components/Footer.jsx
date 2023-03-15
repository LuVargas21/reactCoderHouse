import { Link } from "react-router-dom";

function Footer() {
	return (
		<div>
			<footer className="footer">
				<div className="container-footer">
					<div className="section-logo">
						<Link to="/">
							<img
								src="../src/assets/logo.png"
								alt="Logo"
								width="130"
								height="70"
								classNameName="logo"
							/>
						</Link>
						<p> 25 de Mayo 295 | General Paz | Córdoba </p>
					</div>
					<div className="section-links">
						<h4>Links</h4>

						<li> Mi perfil</li>
						<li>Ofertas</li>
						<h4>Medios de pago</h4>
						<img
							src="../src/assets/tarjeta-de-credito.png"
							alt="Logo"
							width="20"
							classNameName="d-inline-block"
						/>

						<img
							src="../src/assets/othersImg/pago.png"
							alt="Logo"
							width="30"
							className="d-inline-block"
						/>
						<img
							src="../src/assets/othersImg/transferencia.png"
							alt="Logo"
							width="20"
							classNameName="d-inline-block"
						/>
					</div>

					<div className="section-contact">
						<h4>Seguinos en nuestras redes sociales </h4>
						<ul>
							<li>
							<i className="fi fi-brands-instagram"/>
								Ohmydog.cba</li>
						</ul>
						<h4>Contacto</h4>
						<ul>
							<li>
								{" "}
								<a href="https://api.whatsapp.com/send/?phone=5493517634798&text&type=phone_number&app_absent=0">
								<i className="fi fi-rr-phone-call">	+5493517634798 </i>
								</a>
							</li>
							<li>
							<i className="fi fi-brands-instagram">
								<a href="https://mailto:travelrentcar@gmail.com">
									ohmydog@gmail.com
								</a> </i>
							</li>
						</ul>
					</div>
				</div>
				<div className="section-copyright">
					Oh My Dog! | TODOS LOS DERECHOS RESERVADOS
				</div>
			</footer>

			{/* <div classNameName="footer">
				<div classNameName="container-footer">
					<div classNameName="container-footer">
						<Link to="/">
							<img
								src="../src/assets/logo.png"
								alt="Logo"
								width="130"
								height="70"
								classNameName="logo"
							/>
						</Link>
						<div classNameName="">
							<i classNameName="fi fi-rr-marker">
								<p classNameName="text-nav">
									{" "}
									25 de Mayo 295 | General Paz | Córdoba
								</p>
							</i>
						</div>
					</div>

					<div classNameName="container-footer2">
						<div classNameName="">
							<img
								src="../src/assets/othersImg/visa.png"
								alt="Logo"
								width="60"
								classNameName="d-inline-block"
							/>
							<img
								src="../src/assets/othersImg/american-express.png"
								alt="Logo"
								width="60"
								classNameName="d-inline-block"
							/>
							<img
								src="../src/assets/othersImg/master.png"
								alt="Logo"
								width="70"
								classNameName="d-inline-block"
							/>

							<img
								src="../src/assets/othersImg/mercadopago.png"
								alt="Logo"
								width="120"
								classNameName="d-inline-block"
							/>
							<img
								src="../src/assets/othersImg/rapipago.png"
								alt="Logo"
								width="121"
								classNameName="d-inline-block"
							/>
						</div>
						<p classNameName="text-nav"> EFECTIVO Y TRANSFERENCIA</p>
						<img
							src="../src/assets/othersImg/pago.png"
							alt="Logo"
							width="50"
							classNameName="d-inline-block"
						/>
						<img
							src="../src/assets/othersImg/transferencia.png"
							alt="Logo"
							width="40"
							classNameName="d-inline-block"
						/>
					 </div>
					 <div classNameName="container-footer">
						<h2 classNameName="text-menu">Redes sociales</h2>
						<i classNameName="fi fi-brands-instagram">
							{" "}
							<p classNameName="text-nav"> Ohmydog.petstore</p>
						</i>
						<i classNameName="fi fi-rr-envelope">
							<p classNameName="text-nav"> ohmydog@gmail.com</p>
						</i>
						<i classNameName="fi fi-rr-phone-call">
							<p classNameName="text-nav">+5493517634798 </p>
						</i>
					</div>
				</div>
			</div> */}
		</div>
	);
}

export default Footer;
