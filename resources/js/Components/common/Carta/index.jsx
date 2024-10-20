import Styles from "./Carta.module.css";

export function Carta({ children }) {
	return <article className={Styles["carta"]}>{children}</article>;
}
