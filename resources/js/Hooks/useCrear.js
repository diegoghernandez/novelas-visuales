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
 * agregarEscena: (escena: Escena) => void
 * dialogos: Dialogo[],
 * agregarDialogo: (dialogo: Dialogo) => void
 * items: Item[],
 * agregarItem: (dialogo: Item) => void
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

			return {
				escenas: [...restEscenas, escena],
			};
		}),

	dialogos: [],
	agregarDialogo: (dialogo) =>
		set((prev) => {
			const restDialogos = prev.escenas.filter(
				(item) => item.id !== dialogo.id
			);

			return {
				dialogos: [...restDialogos, dialogo],
			};
		}),

	items: [],
	agregarItem: (item) =>
		set((prev) => {
			const restItems = prev.escenas.filter((rest) => rest.id !== item.id);

			return {
				dialogos: [...restItems, item],
			};
		}),
}));
