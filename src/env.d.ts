/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

type Runtime = import('@astrojs/cloudflare').Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {
    runtime: Runtime;
  }
}

interface ImportMetaEnv {
  readonly FORMSPREE_FORM_ID: string;
  readonly STRIPE_SECRET_KEY: string;
  readonly STRIPE_WEBHOOK_SECRET: string;
  readonly ANTHROPIC_API_KEY: string;
  readonly MISTRAL_API_KEY: string;
  readonly WEBFLOW_CMS_SITE_API_TOKEN?: string;
  readonly WEBFLOW_API_HOST?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
