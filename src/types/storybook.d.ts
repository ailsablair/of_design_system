import "@storybook/react";

export type DesignTokensManifest = {
  name: string;
  collections: Record<
    string,
    {
      modes: Record<string, string[]>;
    }
  >;
  styles?: Record<string, string[]>;
};

declare module "@storybook/react" {
  interface Globals {
    designTokens: DesignTokensManifest;
  }
}
