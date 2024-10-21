import { CLD } from "@/Constants/CloudinaryInstance";
import { AdvancedImage, responsive } from "@cloudinary/react";
import { memo } from "react";

export const ImagenEscena = memo(({ nombreImagen }) => {
	const imagen = CLD.image(nombreImagen);
	imagen.format("auto").quality("auto");

	return <AdvancedImage cldImg={imagen} plugins={[responsive()]} />;
});
