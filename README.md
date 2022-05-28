# Ideal monorepo

Wanted to setup this from scratch to learn what all to use when doing such a thing. So here it is.

## How to run

1. Start a postgres db
2. Create `.env` and add as 'DATABASE_URL=<url>'
3. Run prisma db push

   ```
   pnpm prisma db push
   ```

4. Run the client & server with
   ```
   pnpm client:dev
   ```

## Uses

### Typescript

Main tsconfig exists at the root and all other tsconfigs reference that.

Custom paths are used for referring to packages. Like `@packages/graphql`, `@apps/client` etc.

### Graphql

The schema file is at the root of repo (`schema.graphql`) and `graphql-codegen` is used for generating types for server & client both.

Generated files are available at

- `@packages/graphql/server`: Resolver types (nodejs server)
- `@packages/graphql/client`: Apollo hooks (react client)
- `@packages/graphql/generated.schema.json`: Introspection

### Tailwind

The config exists at the root of repo, and in postcss the custom path is set like

```js
module.exports = {
  plugins: {
    tailwindcss: { config: '../../tailwind.config.js' },
    autoprefixer: {}
  }
}
```

So each app can have the same config, and tailwind will compile styles for the whole project.

### Next.js

A simple nextjs setup with tailwind and graphql (apollo client).

Have added the custom esbuild loader to make it compile files outside `src` directory.

### Prisma

For database prisma is used, default setup at root of repo.

### Turbo

Just used as a glorified parallel task runner when running lint/prettier/dev across packages.

### Eslint/Prettier

For linting these are used, have extended from the config I prefer.
