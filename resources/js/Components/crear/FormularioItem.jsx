import { CloudinaryWidget } from "@/Components/common/CloudinaryWidget";
import { CustomInput } from "@/Components/common/CustomInput";
import { useCrear } from "@/Hooks/useCrear";
import { useForm } from "@inertiajs/react";

export function FormularioItem({ id }) {
	const agregarItem = useCrear((state) => state.agregarItem);

	const { data, setData } = useForm({
		nombre: "",
		imagenUrl: "",
	});

	const obtenerImagenUrl = (url) => {
		setData("imagenUrl", url);
	};

	const onSubmit = (event) => {
		event.preventDefault();

		agregarItem({ id, ...data });
	};

	return (
		<form onSubmit={onSubmit}>
			<img src={data.imagenUrl} />
			<CustomInput
				label="Nombre"
				required={true}
				type="text"
				onChange={(e) => setData("nombre", e.target.value)}
			/>
			<CloudinaryWidget setImageCloudinary={obtenerImagenUrl} />
			<button disabled={!data.nombre || !data.imagenUrl}>Guardar</button>
		</form>
	);
}
