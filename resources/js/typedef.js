/**
 * @typedef {{
 * id: string
 * titulo: string
 * descripcion: string
 * imagen: string
 * }} Novela
 *
 * @typedef {{
 * dialogo_id: string[]
 * item_id: string | null
 * }} EscenaDialogo
 *
 * @typedef {{
 * id: string
 * imagen: string
 * coordenadas: number[]
 * escena_dialogo: EscenaDialogo[]
 * }} Escena
 *
 * @typedef {{
 * tipo: typeof import("@/Constants/TiposDialogo.js").TIPOS_DIALOGO
 * dialogo: string
 * itemID: string | null
 * children: Dialogo[] | null
 * }} Dialogo
 *
 * @typedef {{
 * id: string
 * arbol: Dialogo
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
 *
 * @typedef {{
 * label: string
 * name: string
 * description?: string
 * required?: boolean
 * error?: string
 * disable?: boolean
 * }} UserInputProps
 */
