import Styles from "./Carta.module.css";

/**
 * @typedef {{
 * estilos?: string
 * children: import("react").ReactElement
 * }} Props
 */

/**
 * @param {Props} props
 * @returns
 */
export function Carta({ estilos, children }) {
	return (
		<article className={`${Styles["carta"]} ${estilos}`}>{children}</article>
	);
}
