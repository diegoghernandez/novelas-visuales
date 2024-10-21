import { Link } from "@inertiajs/react";
import Styles from "./Navbar.module.css";

/**
 * @typedef {{
 * user: User | null
 * }} Props
 */

/**
 * @param {Props} props
 * @returns
 */
export function Navbar({ user }) {
	return (
		<nav className={Styles["navbar"]}>
			{user ? (
				<Link>Hola</Link>
			) : (
				<>
					<Link href="/login">Ingresar</Link>
					<Link href="/register">Registrarte</Link>
				</>
			)}
		</nav>
	);
}
