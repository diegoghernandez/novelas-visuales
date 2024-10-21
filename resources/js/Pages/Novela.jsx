import { Navbar } from "@/Components/common/Navbar";
import { Head } from "@inertiajs/react";

/**
 * @typedef {{
 * auth: Auth
 * titulo: string
 * escenas: Escena[]
 * }} Props
 */

/**
 * @param {Props} props
 * @returns
 */
export default function Novela({ auth, titulo, escenas }) {
	console.log(escenas);

	return (
		<>
			<Head title="Novelas" />
			<Navbar user={auth.user} />
			<main>
				<h1>{titulo}</h1>
				<p>{escenas.id}</p>
			</main>
		</>
	);
}
