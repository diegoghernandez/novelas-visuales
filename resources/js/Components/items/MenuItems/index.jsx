import { IconoCerrar } from "@/Components/iconos/IconoCerrar";
import { IconoFlecha } from "@/Components/iconos/IconoFlecha";
import { IconoMochila } from "@/Components/iconos/IconoMochila";
import { CLD } from "@/Constants/CloudinaryInstance";
import { useDialogo } from "@/Hooks/useDialogos";
import { useItems } from "@/Hooks/useItems";
import { AdvancedImage } from "@cloudinary/react";
import useEmblaCarousel from "embla-carousel-react";
import { useRef } from "react";
import Styles from "./MenuItems.module.css";

export function MenuItems() {
	const [emblaRef, emblaApi] = useEmblaCarousel();
	const items = useItems((state) => state.items);
	const removerItem = useItems((state) => state.removerItem);
	const dialogos = useDialogo((state) => state.dialogos);
	const dialogosEscena = useDialogo((state) => state.dialogosEscena);
	const asignarDialogo = useDialogo((state) => state.asignarDialogo);
	/** @type {import('react').MutableRefObject<HTMLDialogElement | null>} */
	const dialogRef = useRef(null);

	const mostrarDialogo = () => {
		if (dialogRef.current instanceof HTMLDialogElement) {
			dialogRef.current.showModal();

			/* setTimeout(() => {
				siguienteItem()
			}, 100) */
		}
	};

	const cerrarDialogo = () => {
		if (dialogRef.current instanceof HTMLDialogElement) {
			dialogRef.current.close();
		}
	};

	const siguienteItem = () => {
		emblaApi.scrollNext();
	};

	const anteriorItem = () => {
		emblaApi.scrollPrev();
	};

	const usarItem = () => {
		const itemDeseado = items[emblaApi.selectedScrollSnap()];
		const dialogoSeleccionado = dialogosEscena.filter(
			(dialogo) => dialogo["item_id"] === itemDeseado?.id
		);
		console.log(dialogoSeleccionado, dialogosEscena);

		if (dialogoSeleccionado.length > 0) {
			cerrarDialogo();
			asignarDialogo(dialogoSeleccionado[0]["dialogo_id"]);
			removerItem(itemDeseado.id);
		}
	};

	return (
		<>
			<button
				aria-label="Items"
				disabled={dialogos !== null}
				className={Styles["button-menu"]}
				onClick={mostrarDialogo}
			>
				<IconoMochila />
			</button>
			<dialog ref={dialogRef} className={Styles["dialogo-menu"]}>
				<aside>
					<button onClick={usarItem}>Usar</button>
				</aside>
				<button data-accion="atras" onClick={anteriorItem}>
					<IconoFlecha />
				</button>
				<div ref={emblaRef}>
					<ul>
						<li></li>
						{items.map((item) => {
							const imagen = CLD.image(item.imagen);
							imagen.format("auto").quality("auto");

							return (
								<li key={item.id}>
									<AdvancedImage cldImg={imagen} />
									<p>{item.nombre}</p>
								</li>
							);
						})}
						<li></li>
					</ul>
				</div>
				<button data-accion="siguiente" onClick={siguienteItem}>
					<IconoFlecha />
				</button>
				<button data-accion="cerrar-dialogo" onClick={cerrarDialogo}>
					<IconoCerrar />
				</button>
			</dialog>
		</>
	);
}
