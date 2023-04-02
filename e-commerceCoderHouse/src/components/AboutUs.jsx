import React from "react";
import { Image, Grid, GridItem, Center } from "@chakra-ui/react";

const AboutUs = () => {
	return (
		<div>
			<Grid templateColumns="repeat(6, 1fr)" gap={6}>
				<GridItem colSpan={2} bg="#FDEDE8">
					<div className=" text-title text-nav"> ¿Quienes somos? </div>
					<p>
						{" "}
						Nuestra visión Las mascotas son nuestra pasión. Trabajamos todos los
						días para mejorar su calidad de vida, como así también la relación
						con sus tutores mediante el traspaso de información útil y la
						recomendación de productos adecuados.
					</p>
				</GridItem>
				<GridItem colSpan={2} bg="#FDEDE8">
					<div className=" text-title text-nav">¿ Dónde encontrarnos ?</div>
					<p>
						Podés visitar nuestra sucursal que cuenta con modernas y cómodas
						instalaciones, o navegar por nuestro sitio, donde encontrarás el más
						amplio catálogo de productos, promociones y servicios.
					</p>
				</GridItem>
				<GridItem colSpan={2} bg="#FDEDE8">
					<div className=" text-title text-nav"> Avisos legales </div>
					<p>
						{" "}
						Disponibilidad de Stock y Reemplazo de Productos. La disponibilidad
						de los productos anunciados en puppis.com.ar está sujeta al
						movimiento diario del inventario de la sucursal que recibe y prepara
						el pedido. Por lo tanto algunos de los productos seleccionados
						pueden no encontrarse en stock al momento de preparar la orden
						efectuada por el usuario. Siendo este el caso, Oh My Dog! buscará
						posibles opciones dentro del rango de precio y calidad abonado por
						el cliente y comunicará al comprador. Si de común acuerdo se acepta
						la sustitución del producto, se procederá con el envío. No habiendo
						opciones de reemplazo disponibles o en aquellos casos que el usuario
						prefiera no aceptar la variante sugerida, se procederá al reintegro
						del valor abonado, a través del mismo medio de pago utilizado por el
						comprador. Las órdenes de pedido cursadas por los usuarios deben
						contemplar cantidades compatibles para consumo promedio de las
						mascotas. Precios y Promociones. Los precios de los artículos y
						promociones que figuran en la tienda online pueden diferir de lo
						ofrecido en las tiendas fisicas, así como la variedad de artículos.
					</p>
				</GridItem>
			</Grid>
		</div>
	);
};

export default AboutUs;
