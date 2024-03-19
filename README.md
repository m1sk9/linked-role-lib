# linked-role-lib

[![build](https://github.com/m1sk9/linked-role-lib/actions/workflows/build.yaml/badge.svg)](https://github.com/m1sk9/linked-role-lib/actions/workflows/build.yaml)
[![publish](https://github.com/m1sk9/linked-role-lib/actions/workflows/publish.yaml/badge.svg)](https://github.com/m1sk9/linked-role-lib/actions/workflows/publish.yaml)
[![release](https://github.com/m1sk9/linked-role-lib/actions/workflows/release.yaml/badge.svg)](https://github.com/m1sk9/linked-role-lib/actions/workflows/release.yaml)

## Installation

```sh
# pnpm
pnpm install @m1sk9/linked-role-lib

# Bun
bun install @m1sk9/linked-role-lib
```

<details>
<summary>npm, Yarn</summary>

```sh
# npm
npm install @m1sk9/linked-role-lib

# yarn
yarn add @m1sk9/linked-role-lib
```
</details>

<details>
<summary>Deno (Not supported)</summary>

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

</details>

## Usage

### Register Role Metadata

```ts
import { registerRoleMetadata, type ApplicationRoleConnectionMetadataStructure } from '@m1sk9/linked-role-lib';

const roledata: ApplicationRoleConnectionMetadataStructure[] = [
  {
    type: 7
    name: "role1",
    description: "Role 1",
    key: "role1",
  },
  {
    type: 7
    name: "role1",
    description: "Role 1",
    key: "role1",
  }
]

await registerRoleMetadata(roledata, "<ClientID>", "<TOKEN>");
```

### Get Role Metadata

```ts
import { getRoleMetadata } from '@m1sk9/linked-role-lib';

const data = await getRoleMetadata("<ClientID>", "<TOKEN>"); // Returns ApplicationRoleConnectionMetadataStructure[]
```
