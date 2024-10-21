import { IconoFlecha } from "@/Components/iconos/IconoFlecha";
import { useDialogo } from "@/Hooks/useDialogos";
import { useMemo } from "react";
import Styles from "./SelectorEscenas.module.css";

export function SelectorEscenas({ escenas, coordenadas, setCoordenadas }) {
	const dialogos = useDialogo((state) => state.dialogos);

	const { coordenadasMin, coordenadasMax } = useMemo(() => {
		let maxValorX = Number.MIN_SAFE_INTEGER;
		let minValorX = Number.MAX_SAFE_INTEGER;

		let maxValorY = Number.MIN_SAFE_INTEGER;
		let minValorY = Number.MAX_SAFE_INTEGER;

		for (const element of escenas) {
			const { coordenadas } = element;

			maxValorX = Math.max(coordenadas[0], maxValorX);
			minValorX = Math.min(coordenadas[0], minValorX);

			maxValorY = Math.max(coordenadas[1], maxValorY);
			minValorY = Math.min(coordenadas[1], minValorY);
		}

		return {
			coordenadasMin: [minValorX, minValorY],
			coordenadasMax: [maxValorX, maxValorY],
		};
	}, [coordenadas]);

	return (
		<div className={Styles["selector-container"]}>
			<button
				data-direccion="izquierda"
				disabled={coordenadas[0] === coordenadasMin[0] || dialogos !== null}
				onClick={() => setCoordenadas((prev) => [prev[0] - 1, prev[1]])}
			>
				<IconoFlecha />
			</button>
			<button
				data-direccion="abajo"
				disabled={coordenadas[1] === coordenadasMin[1] || dialogos !== null}
				onClick={() => setCoordenadas((prev) => [prev[0], prev[1] - 1])}
			>
				<IconoFlecha />
			</button>
			<button
				data-direccion="arriba"
				disabled={coordenadas[1] === coordenadasMax[1] || dialogos !== null}
				onClick={() => setCoordenadas((prev) => [prev[0], prev[1] + 1])}
			>
				<IconoFlecha />
			</button>
			<button
				data-direccion="derecha"
				disabled={coordenadas[0] === coordenadasMax[0] || dialogos !== null}
				onClick={() => setCoordenadas((prev) => [prev[0] + 1, prev[1]])}
			>
				<IconoFlecha />
			</button>
		</div>
	);
}
