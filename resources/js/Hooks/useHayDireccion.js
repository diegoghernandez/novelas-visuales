/**
 * @typedef {{
 * coordenadas: [number, number],
 * escenas: Escena[]
 * }} Values
 */

import { useMemo } from "react";

/**
 * @param {Values} values
 */
export function useHayDireccion({ coordenadas, escenas }) {
	return useMemo(() => {
		const x = coordenadas[0];
		const y = coordenadas[1];
		let hayIzquierda = false,
			hayArriba = false,
			hayDerecha = false,
			hayAbajo = false;

		for (const element of escenas) {
			const [xEscena, yEscena] = JSON.parse(element.coordenadas);

			if (!hayIzquierda) hayIzquierda = xEscena === x - 1 && y === yEscena;
			if (!hayDerecha) hayDerecha = xEscena === x + 1 && y === yEscena;
			if (!hayArriba) hayArriba = yEscena === y + 1 && x === xEscena;
			if (!hayAbajo) hayAbajo = yEscena === y - 1 && x === xEscena;
		}

		return {
			hayIzquierda,
			hayArriba,
			hayDerecha,
			hayAbajo,
		};
	}, [coordenadas]);
}
