import js from "@eslint/js"

export default [
  js.configs.recommended,

  {
    languageOptions: {
      globals: {
        fetch: "readonly",
        document: "readonly",
        console: "readonly",
        setTimeout: "readonly",
        setInterval: "readonly", 
        clearInterval: "readonly", 
        FormData: "readonly",
        location: "readonly",
        URLSearchParams: "readonly",
        window: "readonly",
      },
    },
    rules: {},
  },
]