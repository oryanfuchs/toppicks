/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_GA_MEASUREMENT_ID?: string;
  readonly PUBLIC_AFFILIATE_HOSTINGER?: string;
  readonly PUBLIC_AFFILIATE_HETZNER?: string;
  readonly PUBLIC_AFFILIATE_CLOUDWAYS?: string;
  readonly PUBLIC_AFFILIATE_DIGITALOCEAN?: string;
  readonly PUBLIC_AFFILIATE_NAMECHEAP?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
