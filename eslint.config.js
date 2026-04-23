import js from "@eslint/js";

export default [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                document: "readonly",
                window: "readonly",
                localStorage: "readonly",
                console: "readonly",
                setTimeout: "readonly",
                Date: "readonly",
                navigator: "readonly",
                FileReader: "readonly",
                Math: "readonly"
            }
        },
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "error",
            "semi": ["error", "always"],
            "quotes": ["error", "single"]
        }
    }
];
