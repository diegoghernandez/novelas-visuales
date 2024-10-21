/**
 * @typedef {{
 * id: string
 * titulo: string
 * descripcion: string
 * imagen: string
 * }} Novela
 *
 * @typedef {{
 * dialogoID: string
 * condiciones: {
 *    dialogosID: string[]
 *    itemsID: string | null
 * }
 * }} DialogoEscena
 *
 * @typedef {{
 * id: string
 * imagen: string
 * coordenadas: number[]
 * dialogos: DialogoEscena[]
 * }} Escena
 *
 * @typedef {{
 * id?: string
 * tipo: typeof import("./constants/TiposDialogo.js").TIPOS_DIALOGO
 * dialogo: string
 * itemID: string | null
 * personaje: {
 *    nombre: string
 *    imagen: string
 * } | null
 * children: ArbolDialogo[] | null
 * }} ArbolDialogo
 *
 * @typedef {{
 * id: string
 * nombre: string
 * imagen: string
 * }} Item
 *
 * @typedef {{
 * id: number
 * name: string
 * email: string
 * email_verified_at: Date
 * created_at: Date
 * updated_at: Date
 * }} User
 *
 * @typedef {{
 * user: User | null
 * }} Auth
 */
