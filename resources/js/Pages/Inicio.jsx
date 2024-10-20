import { Navbar } from "@/Components/common/Navbar";
import { HistoriasContainer } from "@/Components/inicio/HistoriasContainer";
import { Head } from "@inertiajs/react";

export default function Inicio({ historias }) {
	return (
		<>
			<Head title="Novelas" />
			<Navbar />
			<main>
				<h1>Historias</h1>
				<HistoriasContainer historias={historias} />
			</main>
		</>
	);
}
