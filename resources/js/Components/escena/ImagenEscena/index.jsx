import { CLD } from "@/Constants/CloudinaryInstance";
import { AdvancedImage, responsive } from "@cloudinary/react";
import { memo } from "react";
import Styles from "./ImagenEscena.module.css";

export const ImagenEscena = memo(({ nombreImagen }) => {
	const imagen = CLD.image(nombreImagen);
	imagen.format("auto").quality("auto");

	return (
		<div className={Styles["escena-imagen"]}>
			<AdvancedImage cldImg={imagen} plugins={[responsive()]} />
		</div>
	);
});
