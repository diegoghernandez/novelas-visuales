import { useDialogo } from "@/Hooks/useDialogos.js";
import { CajaDialogo } from "@/Components/dialogos/CajaDialogo/";

export function AdministradorDialogo() {
	const dialogos = useDialogo((state) => state.dialogos);

	return <>{dialogos ? <CajaDialogo arbolDialogo={dialogos} /> : null}</>;
}
