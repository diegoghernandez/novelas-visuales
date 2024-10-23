import { useId } from "react";
import UserInputStyles from "../../../../css/UserInput.module.css";

/** @typedef {{
 * defaultValue?: string
 * placeholder?: string
 * type?: string
 * minValue?: number
 * maxValue?: number
 * accept?: string
 * onChange?: (event: ChangeEvent<HTMLInputElement>) => void
 * }} InputProps
 * */

/**
 *
 * @param {InputProps & UserInputProps} props
 * @returns
 */
export function CustomInput({
	label,
	placeholder = "",
	defaultValue = "",
	minValue,
	maxValue,
	type = "text",
	required = false,
	description,
	error = "",
	disable = false,
	accept,
	onChange,
}) {
	const customInputId = useId();

	return (
		<div className={UserInputStyles["user-input"]}>
			<label htmlFor={customInputId}>{label}</label>
			{description ? (
				<p id={customInputId + "-describe"}>{description}.</p>
			) : null}
			<input
				id={customInputId}
				name={label.toLowerCase().replace(" ", "-")}
				type={type}
				required={required}
				defaultValue={defaultValue}
				min={minValue}
				max={maxValue}
				placeholder={placeholder}
				disabled={disable}
				accept={accept}
				onChange={onChange}
				aria-invalid={Boolean(error)}
				aria-describedby={`${customInputId}-describe ${customInputId}-error`}
			/>
			{error ? <p id={customInputId + "-error"}>{error}</p> : null}
		</div>
	);
}
