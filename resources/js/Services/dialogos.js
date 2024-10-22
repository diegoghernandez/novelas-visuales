/**
 * @typedef {{
 * id: string
 * }} Params
 */

import axios from "axios";

/**@param {Params} */
export async function obtenerDialogo({ id }) {
	return axios
		.get("http://127.0.0.1:8000/api/dialogo/" + id)
		.then(({ data }) => data);
}
