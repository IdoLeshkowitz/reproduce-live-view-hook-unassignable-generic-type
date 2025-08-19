# Phoenix LiveView Hook Generic Type Reproduction

This repository demonstrates a TypeScript error when creating Phoenix LiveView hooks with generic types.

## Use Case

You want to create a Phoenix LiveView hook with a custom interface that has specific properties, using TypeScript's generic type system for better type safety.

## How to Reproduce

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the TypeScript compiler:
   ```bash
   npm run compile
   ```

3. You will see the following error:
   ```
   index.ts(12,3): error TS2322: Type 'Hook<LinksInTab>' is not assignable to type 'typeof ViewHook | Hook<object>'.
     Type 'Hook<LinksInTab>' is not assignable to type 'Hook<object>'.
       Property 'x' is missing in type '{}' but required in type 'LinksInTab'.
   ```

## Code Structure

The reproduction case in `index.ts`:

```typescript
import { Hook, HooksOptions } from "phoenix_live_view";

interface LinksInTab {
  x: string
}

const LinksInTab: Hook<LinksInTab> = {
  x: "x"
};

export const Hooks: HooksOptions = {
  LinksInTab  // Error occurs here
};
```

## Environment

- TypeScript 5.x
- Phoenix LiveView with TypeScript definitions