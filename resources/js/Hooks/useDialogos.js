import { create } from "zustand";
import dialogosJSON from "../assets/dialogos/dialogos.json";

/**
 * @typedef {{
 *	dialogos: ArbolDialogo
 * dialogosEscena: DialogoEscena[]
 * agregarDialogosEscena: (dialogosEscena: DialogoEscena) => void
 * asignarDialogo: (dialogoID: string) => void
 * siguiente: () => void
 * }} EstadoDialogo
 *
 * @typedef {import('zustand').UseBoundStore<import('zustand').StoreApi<EstadoDialogo>>} BoundDialogo
 */

/**
 * @type {BoundDialogo}
 */
export const useDialogo = create((set) => ({
	dialogos: null,

	dialogosEscena: [],

	agregarDialogosEscena: (dialogosEscena) => set(() => ({ dialogosEscena })),

	asignarDialogo: (dialogoID) =>
		set(() => {
			const dialogosNuevos = dialogosJSON.filter(
				({ id }) => id === dialogoID
			)[0];

			return { dialogos: dialogosNuevos };
		}),

	siguiente: () =>
		set((state) => {
			return { dialogos: state.dialogos.children };
		}),
}));
