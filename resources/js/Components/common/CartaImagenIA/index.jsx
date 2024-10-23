import { Carta } from "@/Components/common/Carta";
import { CustomSelect } from "@/Components/common/CustomSelect";
import { CLD } from "@/Constants/CloudinaryInstance";
import { AdvancedImage } from "@cloudinary/react";
import { generativeBackgroundReplace } from "@cloudinary/url-gen/actions/effect";
import { useForm } from "@inertiajs/react";
import "ldrs/dotWave";
import { useState } from "react";
import "two-up-element";
import Styles from "./CartaImagenIA.module.css";

/**
 * @typedef {{
 * obtenerImagen: (url: string) => void
 * children: import("react").ReactElement
 * }}
 */

/**
 * @param {Props} props
 * @returns
 */
export function CartaImagenIA({ obtenerImagen, children }) {
	const { data, setData } = useForm({
		clima: "",
		criaturas: "",
	});
	const [imagenIA, setImagenIA] = useState();
	const [estaCargando, setEstaCargando] = useState(false);
	const imagen = CLD.image("tsijlgo9cbalb7ruulqq");
	imagen.format("auto").quality("auto");

	const crearNuevaImagen = (evento) => {
		evento.preventDefault();

		const prompt = `\
				${data.criaturas ? `Add aggressive ${data.criaturas} to the background` : ""}\
				${data.clima ? `with a ${data.clima} weather` : ""}\
				and Halloween aesthetic
			`
			.replaceAll(/\s+/g, " ")
			.trim();

		const preImagenIA = CLD.image("tsijlgo9cbalb7ruulqq");
		preImagenIA
			.format("auto")
			.quality("auto")
			.effect(generativeBackgroundReplace().prompt(prompt));

		setEstaCargando(true);
		obtenerImagen(preImagenIA.toURL());
		setImagenIA(preImagenIA.toURL());
	};

	return (
		<Carta estilos={Styles["carta-imagen"]}>
			<div className={Styles["imagen-contenedor"]}>
				{imagenIA ? (
					<two-up>
						<AdvancedImage cldImg={imagen} />
						<img src={imagenIA} onLoad={() => setEstaCargando(false)} />
					</two-up>
				) : (
					<AdvancedImage cldImg={imagen} />
				)}
				<div className={Styles["imagen-cargador"]}>
					{estaCargando ? (
						<l-dot-wave size="47" speed="1" color="purple"></l-dot-wave>
					) : null}
				</div>
			</div>
			{children}
			<div>
				<h3>Filtros</h3>
				<form onSubmit={crearNuevaImagen}>
					<CustomSelect
						label="Clima"
						values={["sunny", "cloudy", "misty", "rainy", "stormy"]}
						options={[
							"Soleado",
							"Niebla",
							"Nublado",
							"Lluvia",
							"Tormenta",
						]}
						onChange={(e) => setData("clima", e.target.value)}
					/>
					<CustomSelect
						label="Criaturas"
						values={[
							"zombies",
							"ghosts",
							"tarantulas",
							"cockroaches",
							"wolves",
							"vampires",
							"mummies",
							"witches",
						]}
						options={[
							"Zombis",
							"Fantasmas",
							"Tarantulas",
							"Cucarachas",
							"Lobos",
							"Vampiros",
							"Momias",
							"Brujas",
						]}
						onChange={(e) => setData("criaturas", e.target.value)}
					/>
					<button>Aplicar filtros</button>
				</form>
			</div>
		</Carta>
	);
}
