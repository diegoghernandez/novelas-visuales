import { Navbar } from "@/Components/common/Navbar";
import { Head } from "@inertiajs/react";

export default function Novela({ auth, titulo, novela }) {
	console.log(novela);

	return (
		<>
			<Head title="Novelas" />
			<Navbar user={auth.user} />
			<main>
				<h1>{titulo}</h1>
				<p>{novela.id}</p>
			</main>
		</>
	);
}
