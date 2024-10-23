import { useState } from "react";
import { FormularioDialogo } from "@/Components/crear/FormularioDialogo";

export function CrearFormulariosDialogo() {
	const [escenasIds, setEscenasIds] = useState([crypto.randomUUID()]);

	const crearOtraEscena = () => {
		setEscenasIds((prev) => prev.concat(crypto.randomUUID()));
	};

	return (
		<>
			{escenasIds.map((id) => (
				<FormularioDialogo key={id} id={id} />
			))}
			<button onClick={crearOtraEscena}>Crear otra dialogo</button>
		</>
	);
}
