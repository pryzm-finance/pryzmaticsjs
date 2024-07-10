# PryzmaticsJs: Javascript SDK for pryzm-finance/pryzmatics

PryzmaticsJs is a JavaScript software development kit (SDK) that enables the development of applications that interact with the Pryzm blockchain indexer (Pryzmatics) from both Node.js and web browsers.

# Install

```bash
pnpm install @pryzm-finance/pryzmaticsjs
```

# Usage

## PryzmaticsClient

```tsx
import { createPryzmaticsClient } from "@pryzm-finance/pryzmaticsjs";

const pryzmaticsClient = await createPryzmaticsClient({restEndpoint: PRISMATICS_ENDPOINT})

const syncInfo = (await pryzmaticsClient.pryzmatics.syncInfo()).sync_info
```

## Example Project

[example](https://github.com/pryzm-finance/pryzmaticsjs/tree/main/example) is a sample project that depends on `@pryzm-finance/pryzmaticsjs` and contains examples on how to query data.

# Developing

When first cloning the repo:

```bash
pnpm install
```

## Codegen

Proto files live in `./proto`. Look inside of `scripts/codegen.js` and configure the settings for bundling your SDK into `@pryzm-finance/pryzmaticsjs`:

```bash
pnpm codegen
```

## Publishing

Build the types and then publish:

```
pnpm compile
pnpm publish
```

# Credits

🛠 Built by Cosmology — if you like our tools, please consider delegating to [our validator ⚛️](https://cosmology.tech/validator)

Code built with the help of these related projects:

- [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) for generated CosmWasm contract Typescript classes
- [@osmonauts/telescope](https://github.com/osmosis-labs/telescope) a "babel for the Cosmos", Telescope is a TypeScript Transpiler for Cosmos Protobufs.
- [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit) A wallet connector for the Cosmos ⚛️
