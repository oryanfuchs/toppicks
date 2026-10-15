export type HostCategory = "beginner" | "wordpress" | "cheap" | "vps" | "managed" | "ecommerce";

export type Host = {
  slug: string;
  name: string;
  rank: number;
  badge: string;
  tagline: string;
  fromPrice: string;
  priceNote: string;
  bestFor: string;
  score: number;
  websiteKey: keyof AffiliateMap;
  categories: HostCategory[];
  accent: string;
  productType: string;
  specs: { label: string; value: string }[];
  buyIf: string;
  skipIf: string;
  ratings: { label: string; value: number }[];
  pros: string[];
  cons: string[];
  summary: string;
  body: string[];
  faqs: { q: string; a: string }[];
};

export type AffiliateMap = {
  hostinger: string;
  hetzner: string;
  cloudways: string;
  digitalocean: string;
  namecheap: string;
};

export function affiliateUrl(host: Host): string {
  const urls: AffiliateMap = {
    hostinger:
      import.meta.env.PUBLIC_AFFILIATE_HOSTINGER ||
      "https://www.hostinger.com/web-hosting",
    hetzner:
      import.meta.env.PUBLIC_AFFILIATE_HETZNER || "https://www.hetzner.com/cloud",
    cloudways:
      import.meta.env.PUBLIC_AFFILIATE_CLOUDWAYS ||
      "https://www.awin1.com/cread.php?awinmid=89935&awinaffid=3121479&ued=https%3A%2F%2Fplatform.cloudways.com%2Fsignup",
    digitalocean:
      import.meta.env.PUBLIC_AFFILIATE_DIGITALOCEAN ||
      "https://www.digitalocean.com/",
    namecheap:
      import.meta.env.PUBLIC_AFFILIATE_NAMECHEAP ||
      "https://namecheap.pxf.io/c/7952628/1632743/5618",
  };
  return urls[host.websiteKey];
}

export const hosts: Host[] = [
  {
    slug: "hostinger",
    name: "Hostinger",
    rank: 1,
    badge: "Best for most people",
    tagline: "Cheap shared hosting and VPS with a simple panel.",
    fromPrice: "$2.99",
    priceNote: "Intro price on a long term. Renewal costs more.",
    bestFor: "First site, WordPress, small shop",
    score: 9.2,
    websiteKey: "hostinger",
    categories: ["beginner", "wordpress", "cheap", "ecommerce"],
    accent: "#673DE6",
    productType: "Shared, VPS, cloud",
    specs: [
      { label: "Plans", value: "Shared, VPS, cloud" },
      { label: "From", value: "$2.99/mo intro" },
      { label: "Best for", value: "WordPress, first site" },
      { label: "Panel", value: "hPanel, one-click WP" },
      { label: "Catch", value: "Renewal costs more" },
      { label: "Skill", value: "No Linux required" },
    ],
    buyIf: "You want a site live this week and you do not want to manage Linux.",
    skipIf: "You already think in Docker or bare Nginx — take Hetzner instead.",
    ratings: [
      { label: "Ease", value: 5 },
      { label: "Value", value: 5 },
      { label: "WordPress", value: 5 },
      { label: "Control", value: 3 },
    ],
    pros: [
      "Easy to launch with no server skills",
      "Low intro pricing and affordable VPS plans",
      "Domain, SSL, and backups on many plans",
    ],
    cons: [
      "The real price shows up at renewal",
      "Less control than a bare VPS like Hetzner",
    ],
    summary:
      "If you want a site live this week and do not want to manage Linux, Hostinger is the default pick on this list.",
    body: [
      "Hostinger is built for people who need hosting without becoming a sysadmin. The hPanel, the WordPress installer, and the price ladder are aimed at a brochure site, a blog, or a small shop — not at people who want to compile software on a box they own.",
      "That is why it sits at number one here. The ranking is not “best computer in the cloud.” It is “most people can publish this week without a tutorial rabbit hole.” Hostinger still wins that job in 2026, ahead of Namecheap, because you get more disk, more sites on the plan, and a less awkward jump to VPS later in the same account.",
      "The catch is the screenshot price. The number on the homepage is almost always a promo for 12, 24, or 48 months. Month 13 can look like a different product. Read the renewal, not just the hero banner, and decide if you are comfortable prepaying for the term that makes the math work.",
      "Email, SSL, and backups are easy to take for granted until a cheaper host hides them behind add-ons. Hostinger bundles enough of that stack that a first-time buyer is less likely to assemble a frankenstein checkout. It is still shared hosting: noisy neighbors and rigid PHP settings show up if the site gets popular.",
      "Skip it if you already think in Docker, Terraform, or bare Nginx. Hetzner or DigitalOcean will give you more machine and fewer opinions. For everyone else — especially WordPress — this is the lowest-friction path on the list.",
      "Once the site is up, the next purchase is usually a list, not another host. Hostinger will send mail; it is not an ESP. If you need a form and a welcome sequence, start with the email ranking — Kit if you write, Brevo if you need cheap volume or SMTP.",
    ],
    faqs: [
      {
        q: "Is Hostinger the best cheap web hosting in 2026?",
        a: "For a first WordPress site or small shop, yes — it is #1 on this ranking. The advertised $2.99/mo figure is an intro price on a long term. It is still usually cheaper than Cloudways and more capable than Namecheap hosting for a real site.",
      },
      {
        q: "Is Hostinger good for WordPress?",
        a: "Yes. One-click install, a panel that does not assume Linux, and a later VPS path in the same account. Shared plans are enough for a brochure, a blog, and many light WooCommerce shops. Move to Cloudways or a VPS when you need staging isolation and dedicated resources.",
      },
      {
        q: "Hostinger vs Namecheap: which should I buy?",
        a: "Buy Namecheap if you mainly need a domain and a tiny brochure. Buy Hostinger if the website is the point of the purchase. Full comparison: Hostinger vs Namecheap.",
      },
      {
        q: "Does Hostinger replace an email marketing tool?",
        a: "No. Use Hostinger to publish. Use Kit, Brevo, or Mailchimp to keep the list. The email ranking is the next page after this one.",
      },
    ],
  },
  {
    slug: "hetzner",
    name: "Hetzner",
    rank: 2,
    badge: "Best hardware per dollar",
    tagline: "Cheap German cloud with lots of RAM and included traffic.",
    fromPrice: "€5.49",
    priceNote: "CX23 is about 4GB RAM. No built-in WordPress panel.",
    bestFor: "VPS, side projects, people who can install a stack",
    score: 9.0,
    websiteKey: "hetzner",
    categories: ["vps", "cheap"],
    accent: "#D50C2D",
    productType: "Cloud VPS",
    specs: [
      { label: "Plans", value: "Cloud VPS, dedicated" },
      { label: "From", value: "€5.49/mo (CX23)" },
      { label: "Best for", value: "RAM, traffic, APIs" },
      { label: "Panel", value: "Console — you install" },
      { label: "Regions", value: "EU + US cloud" },
      { label: "Skill", value: "SSH required" },
    ],
    buyIf: "You can patch a box and you care about RAM and traffic per euro.",
    skipIf: "You only want one-click WordPress. This is not shared hosting.",
    ratings: [
      { label: "Ease", value: 2 },
      { label: "Value", value: 5 },
      { label: "WordPress", value: 2 },
      { label: "Control", value: 5 },
    ],
    pros: [
      "One of the best performance-to-price ratios",
      "Generous traffic compared with AWS/DO",
      "GDPR-friendly datacenters in Europe and the US",
    ],
    cons: [
      "You manage the server, or add an extra panel",
      "Not friendly if you only want one-click WordPress",
    ],
    summary:
      "If you are comfortable with SSH, Hetzner almost always gives you more machine than DigitalOcean at the same budget.",
    body: [
      "Hetzner is not shared hosting. You get a virtual machine (or a dedicated server, if you go up the catalog), you install the stack, and you pay relatively little for RAM, disk, and included traffic. The company is German, the docs are drier than DigitalOcean’s, and the hardware-per-euro ratio is why developers keep recommending it in 2026.",
      "The comparison that matters is the 4GB tier. A Hetzner CX cloud instance typically undercuts a DigitalOcean droplet with similar RAM, and the traffic allotment is more generous than the hyperscalers. If you are running an API, a bot, a staging app, or a static site behind Caddy, that gap shows up on the invoice every month.",
      "What you do not get is a consumer control panel that hides Linux. There is a console, ISO rescue, and solid networking — but nobody is going to one-click WordPress and walk away. If that sentence made you nervous, this is the wrong row. Take Hostinger or Cloudways.",
      "Datacenters in Europe (and US locations on cloud) make it a reasonable default if GDPR and latency to EU users matter. It is less of a default if your whole audience is on the US west coast and you wanted a managed database two clicks away.",
      "Use Hetzner when you can patch a box. Use it as a first VPS, not as a first website host. The score is high because, for that job, almost nothing on this list is as efficient.",
    ],
    faqs: [
      {
        q: "Is Hetzner the cheapest VPS in Europe?",
        a: "For RAM, disk, and included traffic, Hetzner is usually cheaper than DigitalOcean and far cheaper than AWS at the same size. CX23 around €5.49/mo for 4GB is the comparison people mean. You still have to install and patch the server yourself.",
      },
      {
        q: "Does Hetzner have one-click WordPress?",
        a: "Not in the Hostinger sense. You get a cloud VM. You can install WordPress on it, or add a panel, but that is extra work. If you only want WordPress without SSH, Hostinger or Cloudways is the better row.",
      },
      {
        q: "Hetzner vs DigitalOcean: which VPS should I pick?",
        a: "Pick Hetzner when the invoice and EU hardware matter. Pick DigitalOcean when tutorials, managed databases, and extra regions matter. They are both VPS clouds, not shared hosting.",
      },
    ],
  },
  {
    slug: "cloudways",
    name: "Cloudways",
    rank: 3,
    badge: "Cloud without babysitting the server",
    tagline: "DigitalOcean, AWS, or Google underneath, a management panel on top.",
    fromPrice: "$11",
    priceNote: "Managed entry plan. Pricier than shared, cheaper than hiring DevOps.",
    bestFor: "Business sites that need staging, backups, and support",
    score: 8.4,
    websiteKey: "cloudways",
    categories: ["managed", "wordpress", "ecommerce"],
    accent: "#2C39BD",
    productType: "Managed cloud",
    specs: [
      { label: "Plans", value: "Managed cloud VMs" },
      { label: "From", value: "$11/mo entry" },
      { label: "Best for", value: "Staging, shops, clients" },
      { label: "Panel", value: "Cloudways UI" },
      { label: "Underneath", value: "DO, AWS, Google" },
      { label: "Skill", value: "No SSH required" },
    ],
    buyIf: "The site already makes money and shared hosting feels fragile.",
    skipIf: "You are still validating an idea. Hostinger will get you online cheaper.",
    ratings: [
      { label: "Ease", value: 4 },
      { label: "Value", value: 3 },
      { label: "WordPress", value: 4 },
      { label: "Control", value: 4 },
    ],
    pros: [
      "Real cloud servers without running them yourself",
      "Staging, SSL, backups, and monitoring in one UI",
      "Switch infrastructure providers without switching panels",
    ],
    cons: [
      "More expensive than Hostinger or bare Hetzner",
      "Still not full agency-grade managed hosting",
    ],
    summary:
      "The middle ground between shared hosting and a naked VPS: you pay a premium so you do not have to run the box.",
    body: [
      "Cloudways is the compromise product on this list. Underneath you get DigitalOcean, AWS, Google Cloud, or another IaaS provider. On top you get a panel that handles servers, staging, SSL, backups, and the usual PHP/MySQL chores without asking you to live in SSH.",
      "That shape is for sites that already have consequences. A personal blog does not need it. A WooCommerce shop, a client WordPress install, or a marketing site that cannot be down on Monday morning often does. You are paying to not be the person who finds out about a failed upgrade at 11pm.",
      "The price is the objection. Entry plans start well above Hostinger’s shared promo, and the bill rises when you pick a larger cloud instance. Compared with hiring even a fraction of a sysadmin, it is still cheap. Compared with a €5 Hetzner VM you maintain yourself, it is a luxury.",
      "The panel is not the same as agency-grade managed WordPress (WP Engine, Kinsta, and friends). You still make more decisions. You also keep the option to change the underlying cloud without throwing away the workflow — which is the feature people miss when they only look at the monthly number.",
      "Pick Cloudways when shared hosting feels fragile and a naked VPS feels like a second job. Skip it when you are still validating an idea and Hostinger would get you online this afternoon.",
    ],
    faqs: [
      {
        q: "Is Cloudways worth it vs Hostinger?",
        a: "Yes once the site has consequences: staging, backups, and a box that is not shared with random neighbors. No if you are still validating a brochure or a side project. Hostinger is cheaper and faster to start; Cloudways is the upgrade when shared hosting feels fragile.",
      },
      {
        q: "Is Cloudways good for WordPress?",
        a: "Yes. It is one of the cleaner ways to run WordPress on a real cloud VM without becoming the sysadmin. You still pay more than shared hosting and less than hiring DevOps or moving to WP Engine-class managed WordPress.",
      },
      {
        q: "What cloud is under Cloudways?",
        a: "You pick it. DigitalOcean is the common entry. AWS and Google Cloud are options in the same panel if you need those regions or compliance stories later.",
      },
    ],
  },
  {
    slug: "digitalocean",
    name: "DigitalOcean",
    rank: 4,
    badge: "Best documentation",
    tagline: "Droplets, managed databases, and tutorials that actually work.",
    fromPrice: "$4",
    priceNote: "Entry droplet. 4GB is already around $24/month.",
    bestFor: "Developers, APIs, containers, learning",
    score: 8.1,
    websiteKey: "digitalocean",
    categories: ["vps"],
    accent: "#0080FF",
    productType: "Developer cloud",
    specs: [
      { label: "Plans", value: "Droplets + managed extras" },
      { label: "From", value: "$4/mo droplet" },
      { label: "Best for", value: "APIs, docs, databases" },
      { label: "Panel", value: "Cloud control panel" },
      { label: "Catch", value: "4GB is ~$24/mo" },
      { label: "Skill", value: "SSH / tutorials" },
    ],
    buyIf: "You want managed databases and tutorials that actually paste-and-run.",
    skipIf: "You are shopping for cheap WordPress or the lowest VPS invoice.",
    ratings: [
      { label: "Ease", value: 3 },
      { label: "Value", value: 3 },
      { label: "WordPress", value: 2 },
      { label: "Control", value: 5 },
    ],
    pros: [
      "Some of the best docs in the industry",
      "Extras around the VM: databases, Spaces, Kubernetes",
      "Easy global regions",
    ],
    cons: [
      "Much more expensive than Hetzner at the same RAM",
      "Traffic and overage are less generous",
    ],
    summary:
      "A good pick when the ecosystem and tutorials matter more than RAM per dollar.",
    body: [
      "DigitalOcean is the developer cloud people learned on. Droplets are straightforward VMs. Around them sit managed databases, Spaces object storage, load balancers, Kubernetes, and a documentation library that still beats most of the industry at “paste this, it works.”",
      "That ecosystem is the reason it is on this ranking at all. On raw RAM and traffic, Hetzner is usually cheaper. If the only variable is the monthly number and a European VM is fine, Hetzner should win. DigitalOcean wins when you want the next thing after the VM without leaving the account, or when you are following a tutorial that assumes a droplet.",
      "The 4GB comparison is unkind. What looks like a $4 entry droplet becomes a much larger invoice once you add a managed database and bandwidth. Read the extras. Traffic overage is less forgiving than Hetzner’s included transfer on similarly sized instances.",
      "Regions are a practical advantage: it is easy to put a droplet near users in more places than Hetzner covers well. For a US-heavy product, that can matter more than a few euros of RAM.",
      "Choose DigitalOcean as a learning cloud and as a product cloud when you like the surrounding services. Do not choose it as a cheap WordPress host — Hostinger will be simpler — and do not choose it to win a price war with Hetzner.",
    ],
    faqs: [
      {
        q: "Is DigitalOcean cheaper than Hetzner?",
        a: "Usually no, at the same RAM. A 4GB droplet plus bandwidth is typically more expensive than a similar Hetzner CX instance. DigitalOcean wins on docs, managed databases, and region coverage, not on the hardware invoice.",
      },
      {
        q: "Is DigitalOcean good for beginners?",
        a: "For developers learning Linux and deploying apps, yes — the tutorials are the product. For someone who only wants WordPress, no. Use Hostinger instead of a droplet.",
      },
      {
        q: "Should I use DigitalOcean or Cloudways?",
        a: "Use DigitalOcean if you want to run the VM (or you want managed Postgres next to a droplet). Use Cloudways if you want a DigitalOcean-sized machine with a panel, staging, and backups and you do not want SSH to be the weekly ritual.",
      },
    ],
  },
  {
    slug: "namecheap",
    name: "Namecheap",
    rank: 5,
    badge: "Cheapest start + domain",
    tagline: "Cheap domains and low-cost shared hosting.",
    fromPrice: "$1.98",
    priceNote: "Promo price. Check domain and hosting renewal together.",
    bestFor: "First domain, tiny site, minimum budget",
    score: 7.6,
    websiteKey: "namecheap",
    categories: ["cheap", "beginner"],
    accent: "#FF7A59",
    productType: "Domain + shared",
    specs: [
      { label: "Plans", value: "Shared + domains" },
      { label: "From", value: "$1.98/mo intro" },
      { label: "Best for", value: "Domain + tiny site" },
      { label: "Panel", value: "Shared cPanel-style" },
      { label: "Catch", value: "Thin resources" },
      { label: "Skill", value: "No Linux required" },
    ],
    buyIf: "You need a domain today and maybe a brochure page on the same bill.",
    skipIf: "The website is the point of the purchase. Hostinger has more room.",
    ratings: [
      { label: "Ease", value: 4 },
      { label: "Value", value: 4 },
      { label: "WordPress", value: 3 },
      { label: "Control", value: 2 },
    ],
    pros: [
      "One of the cheapest entry points",
      "Domain and privacy in one place",
      "Enough for a simple brochure site",
    ],
    cons: [
      "Fewer resources than Hostinger on comparable plans",
      "Not the place if you will outgrow shared hosting fast",
    ],
    summary:
      "Fine if you need a domain and a small site today. Not a base for a product.",
    body: [
      "Namecheap’s real product is domains. Cheap names, WHOIS privacy that is not a nasty surprise, and a cart people already trust. Shared hosting rides along as a way to park a page on that name without opening a second account.",
      "For a business-card site, an event page, or “I bought the domain today and need something at the apex,” that combination is enough. The intro hosting price is often the lowest on this list. The resources behind it are also the thinnest, which is why it is fifth rather than first.",
      "If you compare equivalent WordPress plans, Hostinger usually gives you more disk, more sites, and a clearer upgrade into VPS without changing brands. That is the trade: Namecheap wins the first invoice; Hostinger usually wins the first year of actually using the site.",
      "Renewals matter twice here — domain and hosting. A promo that looks like $2 hosting plus a $1 domain can become a different story when both renew. Add them together before you call it the cheapest option.",
      "Keep Namecheap as a registrar even if you host elsewhere. Plenty of people buy the name there and point DNS at Hostinger, Vercel, or Cloudflare. Use Namecheap hosting only when the site is small and you want one bill. The list still belongs in an ESP — see the email ranking — not in the registrar’s incidental mailbox.",
    ],
    faqs: [
      {
        q: "Is Namecheap good for web hosting?",
        a: "For a domain plus a tiny brochure, yes. For WordPress you will actually grow, Hostinger is usually the better host. Namecheap’s strength is the registrar, not the ceiling of the shared plan.",
      },
      {
        q: "Should I buy my domain at Namecheap and host somewhere else?",
        a: "Often yes. Register the name at Namecheap if the price is right, then point DNS at Hostinger, Cloudflare, or whatever runs the site. You do not have to keep domain and hosting in one cart.",
      },
      {
        q: "Is Namecheap cheaper than Hostinger?",
        a: "The screenshot often looks cheaper, especially with a promo domain. Add year-two domain plus year-two hosting. Hostinger frequently wins once you want a real WordPress site, not the lowest day-one number.",
      },
    ],
  },
];

export function hostBySlug(slug: string): Host | undefined {
  return hosts.find((host) => host.slug === slug);
}
