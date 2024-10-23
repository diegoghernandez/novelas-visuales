import { useEffect, useRef } from "react";
import Styles from "./CloudinaryWidget.module.css";

/**
 * @typedef {{
 * setImageCloudinary?: (value: any) => void
 * }} Props
 */

/**
 * @param {Props} props
 * @returns
 */
export function CloudinaryWidget({ setImageCloudinary }) {
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
					setImageCloudinary(result.info.secure_url);
				}
			}
		);
	}, [setImageCloudinary]);

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
