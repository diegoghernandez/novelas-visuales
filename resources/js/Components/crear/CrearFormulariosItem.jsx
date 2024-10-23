import { useState } from "react";
import { FormularioDialogo } from "@/Components/crear/FormularioDialogo";
import { FormularioItem } from "./FormularioItem";

export function CrearFormulariosItem() {
	const [escenasIds, setEscenasIds] = useState([crypto.randomUUID()]);

	const crearOtraEscena = () => {
		setEscenasIds((prev) => prev.concat(crypto.randomUUID()));
	};

	return (
		<>
			{escenasIds.map((id) => (
				<FormularioItem key={id} id={id} />
			))}
			<button onClick={crearOtraEscena}>Crear otra item</button>
		</>
	);
}
