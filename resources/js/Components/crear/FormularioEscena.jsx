import { useForm } from "@inertiajs/react";
import { CartaImagenIA } from "@/Components/common/CartaImagenIA";
import { CloudinaryWidget } from "@/Components/common/CloudinaryWidget";
import { CustomInput } from "@/Components/common/CustomInput";
import { useCrear } from "@/Hooks/useCrear";

/**
 * @typedef {{
 * id: string
 * }} Props
 */

/**
 * @param {Props} props
 * @returns
 */
export function FormularioEscena({ id }) {
	const agregarEscena = useCrear((state) => state.agregarEscena);
	const { data, setData } = useForm({
		coordenadas: [0, 0],
		imagenUrl: "",
	});

	const obtenerImagenUrl = (url) => {
		setData("imagenUrl", url);
	};

	const onSubmit = (event) => {
		event.preventDefault();

		agregarEscena({ id, ...data });
	};

	return (
		<CartaImagenIA obtenerImagen={obtenerImagenUrl}>
			<form onSubmit={onSubmit}>
				<CustomInput
					label="Coordenadas X"
					required={true}
					type="number"
					onChange={(e) =>
						setData("coordenadas", [
							Number(e.target.value),
							data.coordenadas[1],
						])
					}
				/>
				<CustomInput
					label="Coordenadas Y"
					required={true}
					type="number"
					onChange={(e) =>
						setData("coordenadas", [
							data.coordenadas[0],
							Number(e.target.value),
						])
					}
				/>
				<CloudinaryWidget />
				<button disabled={data.coordenadas.length === 0 || !data.imagenUrl}>
					Guardar
				</button>
			</form>
		</CartaImagenIA>
	);
}
