import { Carta } from "@/Components/common/Carta";
import Styles from "./ContenedorNovelas.module.css";
import { Link } from "@inertiajs/react";

/**
 * @typedef {{
 * novelas: Novela[]
 * }} Props
 */

/**
 * @param {Props} props
 * @returns
 */
export function ContenedorNovelas({ novelas }) {
	return (
		<div className={Styles["historias-container"]}>
			{novelas.map((novela) => (
				<Carta key={novela.id}>
					<img src={novela.imagen} alt="" loading="lazy" />
					<h3>{novela.titulo}</h3>
					<p>{novela.descripcion}</p>
					<Link href={`/novelas/${novela.id}`}>Comenzar</Link>
				</Carta>
			))}
		</div>
	);
}
