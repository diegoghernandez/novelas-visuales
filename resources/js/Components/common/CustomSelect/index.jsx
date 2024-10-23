import { useId } from "react";
import UserInputStyles from "../../../../css/UserInput.module.css";

/** @typedef {{
 * values: string[]
 * options: string[]
 * selectedOption?: string
 * defaultValue?: {
 * 	value: string
 * 	text: string
 * }
 * onChange?: (value: string) => void
 * }} SelectProps
 * */

/**
 * @param {SelectProps & UserInputProps} props
 * @returns
 */

export function CustomSelect({
	label,
	values,
	options,
	selectedOption,
	defaultValue,
	description,
	required = true,
	error = "",
	disable = false,
	onChange,
}) {
	const customSelectId = useId();
	return (
		<div className={UserInputStyles["user-input"]}>
			<label htmlFor={customSelectId}>{label}</label>
			{description ? (
				<p id={customSelectId + "-describe"}>{description}</p>
			) : null}
			<select
				id={customSelectId}
				name={label.toLowerCase().replace(" ", "-")}
				defaultValue={selectedOption}
				autoComplete="on"
				required={required}
				disabled={disable}
				onChange={onChange}
				// onChange={(element) => onChange?.(element.target.value)}
				aria-invalid={Boolean(error)}
				aria-describedby={customSelectId + "-describe"}
			>
				{defaultValue ? (
					<option value={defaultValue.value}>{defaultValue.text}</option>
				) : null}
				{values?.map((value, index) => (
					<option key={value} value={value}>
						{options[index]}
					</option>
				))}
			</select>
			<span></span>
			{error ? <p id={customSelectId + "-describe"}>{error}</p> : null}
		</div>
	);
}
