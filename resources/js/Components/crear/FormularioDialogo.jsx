import { useForm } from "@inertiajs/react";
import { CloudinaryWidget } from "@/Components/common/CloudinaryWidget";
import { CustomInput } from "@/Components/common/CustomInput";
import { CustomSelect } from "../common/CustomSelect";
import { useCrear } from "@/Hooks/useCrear";
import { TIPOS_DIALOGO } from "@/Constants/TiposDialogo";

export function FormularioDialogo({ id }) {
	const escenas = useCrear((state) => state.escenas);
	const agregarDialogo = useCrear((state) => state.agregarDialogo);
	const { data, setData } = useForm({
		escenaId: "",
		tipo: null,
		dialogo: "",
	});

	const onSubmit = (event) => {
		event.preventDefault();

		agregarDialogo({ id, ...data, children: null });
	};

	return (
		<form onSubmit={onSubmit}>
			<CustomSelect
				label="Escena"
				required={true}
				values={["", ...escenas.map((escena) => escena.id)]}
				options={[
					"Elige una opción",
					...escenas.map((escena) => escena.id),
				]}
				onChange={(e) => setData("escenaId", e.target.value)}
			/>
			<CustomSelect
				label="Tipo"
				required={true}
				values={["Escoge un tipo", ...Object.keys(TIPOS_DIALOGO)]}
				options={["Escoge un tipo", ...Object.keys(TIPOS_DIALOGO)]}
				onChange={(e) => setData("tipo", e.target.value)}
			/>
			<label htmlFor="mensaje">Escribe un dialogo:</label>
			<textarea
				id="mensaje"
				rows="3"
				placeholder="Debería ser fácil"
				spellCheck="true"
				required
				onChange={(e) => setData("dialogo", e.target.value)}
			></textarea>
			<button
				disabled={data.escenaId.length === 0 || !data.tipo || !data.dialogo}
			>
				Guardar
			</button>
		</form>
	);
}
