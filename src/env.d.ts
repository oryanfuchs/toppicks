/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_GA_MEASUREMENT_ID?: string;
  readonly PUBLIC_AFFILIATE_HOSTINGER?: string;
  readonly PUBLIC_AFFILIATE_HETZNER?: string;
  readonly PUBLIC_AFFILIATE_CLOUDWAYS?: string;
  readonly PUBLIC_AFFILIATE_DIGITALOCEAN?: string;
  readonly PUBLIC_AFFILIATE_NAMECHEAP?: string;
  readonly PUBLIC_AFFILIATE_KIT?: string;
  readonly PUBLIC_AFFILIATE_BREVO?: string;
  readonly PUBLIC_AFFILIATE_MAILCHIMP?: string;
  readonly PUBLIC_AFFILIATE_BEEHIIV?: string;
  readonly PUBLIC_AFFILIATE_GETRESPONSE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
