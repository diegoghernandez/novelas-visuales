import { CartaImagenIA } from "@/Components/common/CartaImagenIA";
import { CloudinaryWidget } from "@/Components/common/CloudinaryWidget";
import { CustomInput } from "@/Components/common/CustomInput";
import { useCrear } from "@/Hooks/useCrear";
import { useForm } from "@inertiajs/react";

export function FormularioNovela() {
	const agregarNovela = useCrear((state) => state.agregarNovela);
	const { data, setData } = useForm({
		titulo: "",
		descripcion: "",
		imagenUrl: "",
	});

	const obtenerImagenUrl = (url) => {
		setData("imagenUrl", url);
	};

	const onSubmit = (event) => {
		event.preventDefault();

		agregarNovela(data);
	};

	return (
		<CartaImagenIA obtenerImagen={obtenerImagenUrl}>
			<form onSubmit={onSubmit}>
				<CustomInput
					label="Título"
					required={true}
					type="text"
					onChange={(e) => setData("titulo", e.target.value)}
				/>
				<CustomInput
					label="Descripción"
					required={true}
					type="text"
					onChange={(e) => setData("descripcion", e.target.value)}
				/>
				<CloudinaryWidget />
				<button
					disabled={!data.titulo || !data.descripcion || !data.imagenUrl}
				>
					Guardar
				</button>
			</form>
		</CartaImagenIA>
	);
}
