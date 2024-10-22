import { create } from "zustand";

/**
 * @typedef {{
 * items: Item[],
 * agregarItem: (item: Item) => void
 * removerItem: (itemID: string) => void,
 * removerLosItems: () => void,
 * }} EstadoItem
 *
 * @typedef {import('zustand').UseBoundStore<import('zustand').StoreApi<EstadoItem>>} BoundItem
 */

/**
 * @type {BoundItem}
 */
export const useItems = create((set) => ({
	items: [],

	agregarItem: (itemNuevo) =>
		set(({ items }) => ({ items: items.concat(itemNuevo) })),

	removerItem: (itemID) =>
		set(({ items }) => ({
			items: items.filter((item) => item.id !== itemID),
		})),

	removerLosItems: () => set(() => ({ items: [] })),
}));
