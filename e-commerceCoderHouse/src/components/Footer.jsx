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
								className="logo"
							/>
						</Link>
						<p className="text-menu">
							{" "}
							25 de Mayo 295 | General Paz | Córdoba{" "}
						</p>
					</div>
					<div className="section-links">
						<h4 className="text-menu">Links</h4>

						<li className="text-nav">
							{" "}
							<i className="fi fi-rr-user"></i> Mi perfil
						</li>
						<li className="text-nav">
							{" "}
							<i className="fi fi-rr-tags"></i>Ofertas
						</li>
						<h4 className="text-nav">
							<i class="fi fi-rr-comment-dollar"></i> Ver medios de pago
						</h4>
						<h4 className="text-nav">
							<i class="fi fi-rr-box-open-full"></i> Seguir mi envío
						</h4>
					</div>

					<div className="section-contact">
						<h4 className="text-menu">Seguinos en nuestras redes sociales </h4>
						<ul>
							<li>
								<p className="text-nav">
									{" "}
									<i className="fi fi-brands-instagram"> </i> Ohmydog.cba{" "}
								</p>
							</li>
						</ul>
						<h4 className="text-menu">Contacto</h4>
						<ul>
							<li>
								{" "}
								<a href="https://api.whatsapp.com/send/?phone=5493517634798&text&type=phone_number&app_absent=0">
									<p className="text-nav">
										{" "}
										<i className="fi fi-rr-phone-call"> </i> +5493517634798{" "}
									</p>
								</a>
							</li>
							<li>
								<a href="https://mailto:travelrentcar@gmail.com">
									<p className="text-nav">
										{" "}
										<i className="fi fi-rr-envelope"></i>ohmydog@gmail.com
									</p>
								</a>{" "}
							</li>
						</ul>
					</div>
				</div>
				<div className="section-copyright">
					Oh My Dog! | TODOS LOS DERECHOS RESERVADOS
				</div>
			</footer>
		</div>
	);
}

export default Footer;
