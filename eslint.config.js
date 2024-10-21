import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReactRefresh from "eslint-plugin-react-refresh";

/** @type { import('eslint').Linter.Config[] } */
export default [
	{ files: ["./resources/js/**/*.{js,mjs,cjs,jsx}"] },
	{
		languageOptions: {
			ecmaVersion: 2023,
			globals: globals.browser,
			parserOptions: {
				ecmaVersion: "latest",
				ecmaFeatures: { jsx: true },
				sourceType: "module",
			},
		},
		settings: { react: { version: "18.3" } },
		plugins: {
			"react-hooks": pluginReactHooks,
			"react-refresh": pluginReactRefresh,
		},
		rules: {
			...pluginReactHooks.configs.recommended.rules,
			"react-refresh/only-export-components": "warn",
		},
	},
	pluginJs.configs.recommended,
	pluginReact.configs.flat.recommended,
];
