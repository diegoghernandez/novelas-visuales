import { Link } from "@inertiajs/react";
import Styles from "./Navbar.module.css";

export function Navbar() {
	return (
		<nav className={Styles["navbar"]}>
			<Link href="/login">Ingresar</Link>
			<Link href="/register">Registrarte</Link>
		</nav>
	);
}
