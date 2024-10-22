import { ImagenEscena } from "@/Components/escena/ImagenEscena";
import { SelectorEscenas } from "@/Components/escena/SelectorEscenas";
import { useDialogo } from "@/Hooks/useDialogos.js";
import { useEffect, useMemo, useState } from "react";

/**
 * @typedef {{
 * escenas: Escena[]
 * }} Props
 */

/**
 * @param {Props} props
 * @returns
 */
export function AdministradorEscenas({ escenas }) {
	const [coordenadas, setCoordenadas] = useState([0, 0]);
	const asignarDialogo = useDialogo((state) => state.asignarDialogo);
	const agregarDialogosEscena = useDialogo(
		(state) => state.agregarDialogosEscena
	);

	const escenaActual = useMemo(() => {
		const escenaActual = escenas.filter(
			(escena) =>
				escena.coordenadas.replace(" ", "") === JSON.stringify(coordenadas)
		)[0];

		return {
			coordenadas: JSON.parse(escenaActual.coordenadas),
			...escenaActual,
		};
	}, [coordenadas]);

	useEffect(() => {
		agregarDialogosEscena(escenaActual["escena_dialogo"]);
		const dialogo = escenaActual["escena_dialogo"].filter(
			(elemento) => !elemento["item_id"]
		);

		if (dialogo.length !== 0) {
			asignarDialogo(dialogo[0]["dialogo_id"]);
		}
	}, [escenaActual]);

	return (
		<>
			<SelectorEscenas
				escenas={escenas}
				coordenadas={coordenadas}
				setCoordenadas={setCoordenadas}
			/>
			<ImagenEscena nombreImagen="cld-sample-2" />
		</>
	);
}
