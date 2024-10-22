import { useDialogo } from "@/Hooks/useDialogos.js";
import { useTypewriter } from "@/Hooks/useTypewriter.js";
import Styles from "./CajaDialogo.module.css";

/**
 * @typedef {Object} Props
 * @property {ArbolDialogo} arbolDialogo
 */

/**
 * @param {Props} props
 * @returns
 */
export function CajaDialogo({ arbolDialogo }) {
	const siguiente = useDialogo((state) => state.siguiente);
	const { displayText, isWriting, setIsWriting } = useTypewriter(
		arbolDialogo.dialogo,
		32
	);

	const handleClick = () => {
		setIsWriting(false);

		if (!isWriting) {
			siguiente();
		}
	};

	return (
		<div className={Styles["caja-contenedor"]}>
			<div className={Styles["caja-dialogo"]}>
				{/* {arbolDialogo.personaje ? (
					<p>{arbolDialogo.personaje.nombre}</p>
				) : null} */}
				<p>{isWriting ? displayText : arbolDialogo.dialogo}</p>
				<button onClick={handleClick}></button>
			</div>
		</div>
	);
}
