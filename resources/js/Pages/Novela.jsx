import { Navbar } from "@/Components/common/Navbar";
import { AdministradorDialogo } from "@/Components/dialogos/AdministradorDialogo";
import { AdministradorEscenas } from "@/Components/escena/AdministradorEscenas";
import { AdministradorItems } from "@/Components/items/AdministradorItems";
import { Head } from "@inertiajs/react";
import { useEffect } from "react";

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
	useEffect(() => localStorage.removeItem("dialogos"), []);

	return (
		<>
			<Head title="Novelas" />
			<Navbar user={auth.user} />
			<main>
				<h1>{titulo}</h1>
				<AdministradorEscenas escenas={escenas} />
				<AdministradorDialogo />
				<AdministradorItems />
			</main>
		</>
	);
}
