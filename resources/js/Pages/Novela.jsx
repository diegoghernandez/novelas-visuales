import { AdministradorDialogo } from "@/Components/dialogos/AdministradorDialogo";
import { AdministradorEscenas } from "@/Components/escena/AdministradorEscenas";
import { AdministradorItems } from "@/Components/items/AdministradorItems";
import { Head, Link } from "@inertiajs/react";
import { useEffect, useRef } from "react";
import Styles from "../../css/Novela.module.css";
import { IconoCerrar } from "@/Components/iconos/IconoCerrar";
import { useItems } from "@/Hooks/useItems";

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
export default function Novela({ titulo, escenas }) {
	/** @type {import('react').MutableRefObject<HTMLDialogElement | null>} */
	const dialogRef = useRef(null);
	const removerLosItems = useItems((state) => state.removerLosItems);

	useEffect(() => {
		localStorage.removeItem("dialogos");
		removerLosItems();

		if (dialogRef.current instanceof HTMLDialogElement) {
			dialogRef.current.showModal();
		}
	}, []);

	const cerrarDialog = () => {
		if (dialogRef.current instanceof HTMLDialogElement) {
			dialogRef.current.close();
		}
	};

	return (
		<>
			<Head title="Novelas" />
			<main>
				<dialog ref={dialogRef} className={Styles["novela-dialog"]}>
					<h1>{titulo}</h1>
					<button onClick={cerrarDialog}>Comenzar novela</button>
				</dialog>
				<Link href="/" className={Styles["novela-cerrar"]}>
					<IconoCerrar />
				</Link>
				<AdministradorEscenas escenas={escenas} />
				<AdministradorDialogo />
				<AdministradorItems />
			</main>
		</>
	);
}
