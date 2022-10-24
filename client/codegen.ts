import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4000/graphql",
  documents: ["src/**/*.graphql"],
  generates: {
    "./src/generated/graphql.tsx": {
      // generated file path must end in .tsx or .ts
      // preset: "client", // remove since we have plugins. also download the plugins separately
      plugins: ["typescript", "typescript-operations", "typescript-urql"],
    },
  },
};

export default config;
