import { obtenerDialogo } from "@/Services/dialogos";
import { create } from "zustand";

/**
 * @typedef {{
 *	dialogos: Dialogo
 * dialogosEscena: EscenaDialogo[]
 * agregarDialogosEscena: (dialogosEscena: EscenaDialogo[]) => void
 * asignarDialogo: async (dialogoID: string) => void
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

	asignarDialogo: async (dialogoID) => {
		const data = await obtenerDialogo({ id: dialogoID });

		set(() => {
			const dialogosCompletados = localStorage.getItem("dialogos")
				? JSON.parse(localStorage.getItem("dialogos"))
				: [];

			if (dialogosCompletados.includes(dialogoID)) {
				return { dialogos: null };
			}

			localStorage.setItem(
				"dialogos",
				JSON.stringify(dialogosCompletados.concat(dialogoID))
			);
			return { dialogos: data };
		});
	},

	siguiente: () =>
		set((state) => {
			return { dialogos: state.dialogos.children };
		}),
}));
