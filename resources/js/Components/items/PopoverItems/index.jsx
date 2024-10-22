import { useDialogo } from "@/Hooks/useDialogos";
import { useItems } from "@/Hooks/useItems";
import { obtenerItem } from "@/Services/items";
import { useEffect, useState } from "react";

export function PopoverItems() {
	/** @type {ReturnType<typeof import("react").useState<Item[]>>} */
	const [itemQueue, setItemsQueue] = useState([]);
	const agregarItem = useItems((state) => state.agregarItem);
	const dialogos = useDialogo((state) => state.dialogos);

	useEffect(() => {
		if (dialogos?.["item_id"]) {
			obtenerItem({ id: dialogos["item_id"] }).then((itemDeseado) => {
				setItemsQueue((prev) => [...prev, itemDeseado]);
				agregarItem(itemDeseado);

				const timeoutID = setTimeout(() => {
					setItemsQueue((prev) =>
						prev.filter(
							(item) => item["item_id"] !== itemDeseado["item_id"]
						)
					);
				}, 800);

				return () => clearTimeout(timeoutID);
			});
		}
	}, [dialogos]);

	return (
		<ul>
			{itemQueue.map((item) => (
				<li
					key={item.id}
					style={{
						position: "absolute",
						right: "16px",
						top: "16px",
						zIndex: 20,
						width: "100px",
						height: "30px",
						backgroundColor: "blue",
					}}
				>
					{item.nombre}
				</li>
			))}
		</ul>
	);
}
