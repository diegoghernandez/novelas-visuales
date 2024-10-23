import { FormularioEscena } from "@/Components/crear/FormularioEscena";
import { useState } from "react";

export function CrearFormularioEscena() {
	const [escenasIds, setEscenasIds] = useState([crypto.randomUUID()]);

	const crearOtraEscena = () => {
		setEscenasIds((prev) => prev.concat(crypto.randomUUID()));
	};

	return (
		<>
			{escenasIds.map((id) => (
				<FormularioEscena key={id} id={id} />
			))}
			<button onClick={crearOtraEscena}>Crear otra escena</button>
		</>
	);
}
