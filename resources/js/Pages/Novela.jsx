import { Navbar } from "@/Components/common/Navbar";
import { AdministradorEscenas } from "@/Components/escena/AdministradorEscenas";
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
	return (
		<>
			<Head title="Novelas" />
			<Navbar user={auth.user} />
			<main>
				<h1>{titulo}</h1>
				<AdministradorEscenas escenas={escenas} />
			</main>
		</>
	);
}
