import { Navbar } from "@/Components/common/Navbar";
import { ContenedorNovelas } from "@/Components/inicio/ContenedorNovelas";
import { Head } from "@inertiajs/react";

/**
 * @typedef {{
 * auth: Auth
 * novelas: Novela[]
 * }} Props
 */

/**
 * @param {Props} props
 * @returns
 */
export default function Inicio({ auth, novelas }) {
	return (
		<>
			<Head title="Novelas" />
			<Navbar user={auth.user} />
			<main>
				<h1>Novelas</h1>
				<ContenedorNovelas novelas={novelas} />
			</main>
		</>
	);
}
