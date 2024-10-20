import { Carta } from "@/Components/common/Carta";
import Styles from "./ContenedorNovelas.module.css";

export function ContenedorNovelas({ novelas }) {
	return (
		<div className={Styles["historias-container"]}>
			{novelas.map((historia) => (
				<Carta key={historia.id}>
					<img src={historia.imagen} alt="" loading="lazy" />
					<h3>{historia.titulo}</h3>
					<p>{historia.descripcion}</p>
				</Carta>
			))}
		</div>
	);
}
