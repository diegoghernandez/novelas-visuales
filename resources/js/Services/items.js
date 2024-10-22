import axios from "axios";

/**
 * @typedef {{
 * id: string
 * }} Params
 */

/**@param {Params} */
export async function obtenerItem({ id }) {
	return axios
		.get("http://127.0.0.1:8000/api/items/" + id)
		.then(({ data }) => data);
}
