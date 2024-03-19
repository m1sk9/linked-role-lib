/**
[![build](https://github.com/m1sk9/linked-role-lib/actions/workflows/build.yaml/badge.svg)](https://github.com/m1sk9/linked-role-lib/actions/workflows/build.yaml)
[![publish](https://github.com/m1sk9/linked-role-lib/actions/workflows/publish.yaml/badge.svg)](https://github.com/m1sk9/linked-role-lib/actions/workflows/publish.yaml)
[![release](https://github.com/m1sk9/linked-role-lib/actions/workflows/release.yaml/badge.svg)](https://github.com/m1sk9/linked-role-lib/actions/workflows/release.yaml)

## Installation

```sh
# npm
npm install @m1sk9/linked-role-lib

# yarn
yarn add @m1sk9/linked-role-lib

# pnpm
pnpm install @m1sk9/linked-role-lib

# Bun
bun install @m1sk9/linked-role-lib
```

### Deno (Not supported)
```ts
export * from 'npm:@m1sk9/linked-role-lib';
```

Using Import map:

```json
{
  "imports": {
    "linked-role-lib": "npm:@m1sk9/linked-role-lib"
  }
}
```

@module index
*/
export * from "./register";
export * from "./get";
export * from "./types";
