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
}));
