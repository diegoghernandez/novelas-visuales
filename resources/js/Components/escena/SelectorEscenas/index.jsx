import { IconoFlecha } from "@/Components/iconos/IconoFlecha";
import { useDialogo } from "@/Hooks/useDialogos";
import { useHayDireccion } from "@/Hooks/useHayDireccion";
import Styles from "./SelectorEscenas.module.css";

/**
 * @typedef {{
 * escenas: Escena[]
 * coordenadas: [number, number]
 * setCoordenadas: import("react").SetStateAction<[number, number]>
 * }} Props
 */

/**
 * @param {Props} props
 * @returns
 */
export function SelectorEscenas({ escenas, coordenadas, setCoordenadas }) {
	const dialogos = useDialogo((state) => state.dialogos);
	const direccion = useHayDireccion({ escenas, coordenadas });

	return (
		<div className={Styles["selector-container"]}>
			<button
				data-direccion="izquierda"
				disabled={!direccion.hayIzquierda || dialogos !== null}
				onClick={() => setCoordenadas((prev) => [prev[0] - 1, prev[1]])}
			>
				<IconoFlecha />
			</button>
			<button
				data-direccion="abajo"
				disabled={!direccion.hayAbajo || dialogos !== null}
				onClick={() => setCoordenadas((prev) => [prev[0], prev[1] - 1])}
			>
				<IconoFlecha />
			</button>
			<button
				data-direccion="arriba"
				disabled={!direccion.hayArriba || dialogos !== null}
				onClick={() => setCoordenadas((prev) => [prev[0], prev[1] + 1])}
			>
				<IconoFlecha />
			</button>
			<button
				data-direccion="derecha"
				disabled={!direccion.hayDerecha || dialogos !== null}
				onClick={() => setCoordenadas((prev) => [prev[0] + 1, prev[1]])}
			>
				<IconoFlecha />
			</button>
		</div>
	);
}
