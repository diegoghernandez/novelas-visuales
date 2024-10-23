import { create } from "zustand";

/**
 * @typedef {{
 * titulo: string
 * descripcion: string
 * imagen: string
 * }} NovelaPeticion
 *
 *
 * @typedef {{
 * novela: NovelaPeticion,
 * agregarNovela: (novela: NovelaPeticion) => void
 * escenas: Escena[],
 * agregarEscena: (novela: Escena) => void
 * }} EstadoItem
 *
 * @typedef {import('zustand').UseBoundStore<import('zustand').StoreApi<EstadoItem>>} BoundItem
 */

/**
 * @type {BoundItem}
 */
export const useCrear = create((set) => ({
	novela: null,
	agregarNovela: (novela) => set(() => ({ novela })),

	escenas: [],
	agregarEscena: (escena) =>
		set((prev) => {
			const restEscenas = prev.escenas.filter(
				(item) => item.id !== escena.id
			);
			return restEscenas.concat(escena);
		}),
}));
