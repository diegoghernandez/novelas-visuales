import { Navbar } from "@/Components/common/Navbar";
import { CrearFormulariosDialogo } from "@/Components/crear/CrearFormulariosDialogo";
import { CrearFormularioEscena } from "@/Components/crear/CrearFormulariosEscena";
import { CrearFormulariosItem } from "@/Components/crear/CrearFormulariosItem";
import { FormularioNovela } from "@/Components/crear/FormularioNovela";
import { useCrear } from "@/Hooks/useCrear";
import { Head } from "@inertiajs/react";
import axios from "axios";
import Styles from "../../css/Crear.module.css";

export default function Crear({ auth }) {
	const novela = useCrear((state) => state.novela);
	const escenas = useCrear((state) => state.escenas);
	const dialogos = useCrear((state) => state.dialogos);
	const items = useCrear((state) => state.items);

	const submit = () => {
		const megaObjeto = {
			novela,
			escenas,
			dialogos,
			items,
		};
		console.log(megaObjeto);

		axios
			.post("novelas", data)
			.then((value) => console.log(JSON.parse(value.request.response)));
	};

	return (
		<>
			<Head title="Novelas" />
			<Navbar user={auth.user} />
			<main className={Styles["crear-main"]}>
				<h1>Crear</h1>
				<button onClick={submit}>Crear Novela</button>
				<h2>Introducción</h2>
				<FormularioNovela />
				<h2>Escenas</h2>
				<CrearFormularioEscena />
				<h2>Diálogos</h2>
				<CrearFormulariosDialogo />
				<h2>Items</h2>
				<CrearFormulariosItem />
			</main>
		</>
	);
}
