import { useEffect, useRef } from "react";
import Styles from "./CloudinaryWidget.module.css";

export function CloudinaryWidget() {
	const widgetRef = useRef();

	useEffect(() => {
		widgetRef.current = globalThis.cloudinary.createUploadWidget(
			{
				cloudName: "dzytxwyft",
				uploadPreset: "novelas_subida_unsigned",
				multiple: false,
				sources: ["local", "url"],
			},
			(error, result) => {
				if (!error && result && result.event === "success") {
					console.log(result.info);
				}
			}
		);
	}, []);

	return (
		<button
			className={Styles["cloudinary-widget"]}
			type="button"
			onClick={() => widgetRef.current.open()}
		>
			Imagen
		</button>
	);
}
