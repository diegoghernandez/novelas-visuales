import Styles from "./Carta.module.css";

/**
 * @typedef {{
 * children: import("react").ReactElement
 * }} Props
 */

/**
 * @param {Props} props
 * @returns
 */
export function Carta({ children }) {
	return <article className={Styles["carta"]}>{children}</article>;
}
