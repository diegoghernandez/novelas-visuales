import { Navbar } from "@/Components/common/Navbar";
import { ContenedorNovelas } from "@/Components/inicio/ContenedorNovelas";
import { Head } from "@inertiajs/react";

export default function Inicio({ novelas }) {
	return (
		<>
			<Head title="Novelas" />
			<Navbar />
			<main>
				<h1>Novelas</h1>
				<ContenedorNovelas novelas={novelas} />
			</main>
		</>
	);
}
