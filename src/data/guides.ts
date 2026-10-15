export type GuidePick = {
  slug: string;
  ifYou: string;
  note: string;
};

export type Guide = {
  slug: string;
  title: string;
  description: string;
  updated: string;
  vertical?: "hosting" | "email";
  rankingHref?: string;
  rankingLabel?: string;
  paragraphs: string[];
  faqs: { q: string; a: string }[];
  picks?: GuidePick[];
};

export const guides: Guide[] = [
  {
    slug: "hostinger-vs-namecheap",
    title: "Hostinger vs Namecheap: which to pick in 2026",
    description:
      "Hostinger vs Namecheap for cheap web hosting in 2026: intro price, renewal, WordPress, and whether the domain and the site should live in the same account.",
    updated: "2026-10-15",
    paragraphs: [
      "Hostinger vs Namecheap is the comparison most first-time buyers actually need. Both sell themselves as cheap web hosting. That is true on day one and less true once you look at what you are buying: a place to run WordPress, or a place to register a name and park a page.",
      "Namecheap usually wins the screenshot. The combination of a promo domain and a promo shared plan is hard to beat if you need a URL online this afternoon and you do not care about disk, staging, or a later move to VPS. It is a registrar that happens to host.",
      "Hostinger is a host that happens to sell domains. Plans typically include more storage, more websites, and a control panel that is less of a dead end when the blog becomes a shop. The advertised price — often around $2.99/mo on a long term — is still a promo. You are prepaying for a discount, not unlocking a permanently cheap server.",
      "Renewal is the comparison that ranking pages skip. Add year-two hosting and year-two domain for both carts. Namecheap’s advantage often shrinks or reverses once the intro term ends, especially if you stacked every coupon. Hostinger’s jump can be sharp too; the difference is you are jumping from a more capable plan.",
      "WordPress specifically: Hostinger is the more comfortable default. Installer, typical resource limits, and a documented path onto their VPS line if traffic grows. Namecheap hosting will run WordPress; it is just a smaller ceiling. If you already know you want WooCommerce, do not start on the cheapest Namecheap shared tier to “see how it goes.”",
      "You do not have to keep domain and hosting together. A clean split is: buy the name at Namecheap if the price is right, point DNS at Hostinger (or at Cloudflare in front of Hostinger). That uses each company for the job it is actually good at.",
      "If you outgrow both, the next step is not another cheap shared plan. Shared vs VPS is the fork: Cloudways if you want a managed box, Hetzner if you can use SSH.",
      "Short take: pick Namecheap hosting only for a tiny brochure or a domain you might not even build on. Pick Hostinger if the site is the point of the purchase. If you are a developer who found this page by accident, neither of these is your VPS — read Hetzner vs DigitalOcean instead.",
    ],
    faqs: [
      {
        q: "Who wins Hostinger vs Namecheap for WordPress?",
        a: "Hostinger. More disk, more sites, and a less awkward upgrade path. Namecheap is fine for a brochure parked on a cheap domain.",
      },
      {
        q: "Can I buy a domain at Namecheap and host at Hostinger?",
        a: "Yes, and that is often the best cart. Register the name where it is cheapest, then point nameservers or A records at the host that will actually run WordPress.",
      },
      {
        q: "Which is cheaper after the first year?",
        a: "It depends on the term you prepaid and the domain TLD. Add renewal hosting plus renewal domain before you trust either homepage number. Hostinger usually wins once the site is real WordPress, not a parked page.",
      },
    ],
    picks: [
      {
        slug: "namecheap",
        ifYou: "If you need a domain today",
        note: "Register the name where the price is right. Point DNS at the host that will actually run the site.",
      },
      {
        slug: "hostinger",
        ifYou: "If the website is the purchase",
        note: "More disk, more sites, and a less awkward path onto VPS later. Promo pricing still jumps at renewal.",
      },
    ],
  },
  {
    slug: "shared-vs-vps",
    title: "Shared hosting vs VPS: which do you actually need?",
    description:
      "Shared hosting vs VPS in 2026: when a $3 control panel is enough, when you need your own machine, and where managed cloud like Cloudways sits between the two.",
    updated: "2026-10-15",
    paragraphs: [
      "Shared hosting vs VPS is not a prestige contest. Shared hosting means someone else runs the server and you get an account on it: a folder, a database, a panel, maybe one-click WordPress. You share CPU, RAM, and disk with other customers. It is cheap because the provider is packing as many sites as they can onto one box without the support queue exploding.",
      "A VPS (virtual private server) is a slice of a machine that is yours. You get a root login, a public IP, and the right to install Nginx, Caddy, Docker, or whatever else you can break. You also get the duty to patch it. There is no landlord installing PHP for you unless you pay for a panel on top.",
      "The practical test is not “do I feel technical.” It is “do I use SSH in a normal week.” If the answer is no, start on shared hosting — Hostinger on this list. You will waste less time and less money. If the answer is yes, shared hosting will feel like a hotel room: fine until you want to change the furniture.",
      "Shared is enough for a marketing site, a blog, and many small WooCommerce shops with modest traffic. It starts to fail when you need a queue worker, a cron that actually runs, a custom reverse proxy, Node, or isolation from whoever is sharing the box. Those are VPS jobs.",
      "Hetzner is the VPS pick when budget and hardware matter. DigitalOcean is the VPS pick when you want managed databases and tutorials. Neither replaces WordPress-in-a-panel. If you want VPS isolation without running the OS, that is Cloudways: cloud underneath, UI on top, higher invoice.",
      "A common expensive mistake is putting an API with webhooks on shared hosting because it was $3. You save the money and spend it at night when PHP workers fill up. Another mistake is renting a VPS for a five-page brochure because a Reddit thread said shared hosting is for amateurs. Match the machine to the workload.",
      "Rule of thumb for this ranking: no SSH → Hostinger. SSH and a tight budget → Hetzner. SSH and you want the surrounding cloud products → DigitalOcean. Revenue and no desire to be on call → Cloudways.",
    ],
    faqs: [
      {
        q: "Is VPS always faster than shared hosting?",
        a: "Not automatically. A neglected VPS can be slower than a well-tuned shared plan. VPS wins when you need dedicated resources, custom software, or isolation — not because the word “cloud” is on the invoice.",
      },
      {
        q: "Can I start on shared hosting and move to a VPS later?",
        a: "Yes. Hostinger even sells VPS in the same account. The painful migrations are the ones you do in a panic after a traffic spike, not the ones you plan. Start shared if you cannot SSH yet.",
      },
      {
        q: "Where does Cloudways fit in shared vs VPS?",
        a: "It is a managed VPS. You get a real cloud VM without living in SSH. You pay more than Hostinger shared and more than a bare Hetzner box you maintain yourself.",
      },
    ],
    picks: [
      {
        slug: "cloudways",
        ifYou: "If you want a VPS without SSH",
        note: "Cloud underneath, a panel on top. Worth it when the site has consequences and you will not patch PHP on a Saturday.",
      },
    ],
  },
  {
    slug: "hosting-for-side-project",
    title: "Where to host a side project in 2026",
    description:
      "Best hosting for a side project in 2026: free static sites, cheap WordPress, and a VPS for APIs that should not live on shared hosting.",
    updated: "2026-10-15",
    paragraphs: [
      "A side project has a different failure mode than a company website. You will under-maintain it. The host has to survive neglect, a day job, and the moment traffic shows up because a post landed on the wrong subreddit.",
      "If the project is static — Astro, Next export, a marketing page — you may not need anyone on this ranking. Vercel, Netlify, or Cloudflare Pages will serve it for free at a quality that shared hosting will not match. This list starts to matter when you need a process, a database, WordPress, or a long-running worker.",
      "For WordPress or a PHP app you do not want to babysit, Hostinger is still the least drama. You will not learn Linux. You will get SSL and a panel. That is the correct trade for a newsletter landing page or a content site you update on Sundays.",
      "For an API, a bot, a webhook receiver, or anything with cron and background jobs, skip shared hosting. Hetzner is the default if you are comfortable installing Caddy and Docker Compose: more RAM, more traffic, boring invoices. DigitalOcean is the default if you want a managed Postgres next to the droplet and you would rather copy a tutorial than invent a backup story.",
      "Cloudways is rarely the first host for a side project because the meter starts higher. It becomes reasonable the day the side project has customers and you would rather pay than SSH on a Saturday. Do not buy it as a motivational expense before there is revenue.",
      "Namecheap belongs in this conversation as a registrar, not as the forever home of an app. Register the domain there if the price is good, then point it at Cloudflare and whatever actually runs the code.",
      "Minimum-budget rule: static on a free platform, WordPress on Hostinger, always-on compute on Hetzner. Everything else is a convenience tax. Pay it when your time is worth more than the delta — which, for a night project, is later than you think.",
    ],
    faqs: [
      {
        q: "What is the cheapest way to host a side project?",
        a: "If it is static, a free platform. If it is WordPress, Hostinger’s intro shared plan. If it needs a always-on VM, a Hetzner CX instance is usually cheaper than DigitalOcean at the same RAM.",
      },
      {
        q: "Should a side project use Cloudways?",
        a: "Usually not until there is revenue or a client. Cloudways is for not being on call. A night project should start cheaper.",
      },
      {
        q: "Is shared hosting OK for an API?",
        a: "Rarely. Webhooks, workers, and custom runtimes belong on a VPS. Shared hosting is for sites you edit in a panel.",
      },
    ],
    picks: [
      {
        slug: "namecheap",
        ifYou: "If you still need a domain",
        note: "Use Namecheap as a registrar. Point the name at Cloudflare and whatever actually runs the code — not as the forever home of an app.",
      },
    ],
  },
  {
    slug: "hetzner-vs-digitalocean",
    title: "Hetzner vs DigitalOcean: which VPS is cheaper in 2026?",
    description:
      "Hetzner vs DigitalOcean for VPS hosting in 2026: RAM per euro, included traffic, docs, managed databases, and which cloud to pick for Europe vs the US.",
    updated: "2026-10-15",
    paragraphs: [
      "Hetzner vs DigitalOcean is the VPS comparison that actually moves money. Both give you a virtual machine, a public IP, and root. Neither is a WordPress control panel. If you wanted one-click hosting, you are on the wrong page — start with Hostinger instead.",
      "On hardware, Hetzner usually wins. A CX23-class instance with about 4GB of RAM is often around €5.49/mo with generous included traffic. A DigitalOcean droplet with similar RAM is typically more, and bandwidth overage is less forgiving. If the only variable is the monthly number and an EU (or Hetzner US) region is fine, pick Hetzner.",
      "DigitalOcean wins the surrounding product. Managed databases, Spaces, load balancers, Kubernetes, and a documentation library that still beats most of the industry at “paste this, it works.” People stay on DigitalOcean after they could save money on Hetzner because the next service is already in the account.",
      "Traffic is a quiet killer. Hetzner’s included transfer on similarly sized cloud instances is one of the reasons developers recommend it in 2026. DigitalOcean’s entry droplets look cheap until a podcast, a file dump, or a crawler spike shows up as overage.",
      "Regions: DigitalOcean is easier if you need to put a VM near users in more places. Hetzner is the default for Europe-heavy products and GDPR-shaped constraints. If your audience is US west coast and you wanted a managed database two clicks away, DigitalOcean is the less stubborn pick.",
      "Operations: both expect you to patch the OS unless you add a panel or pay Cloudways to sit on top of DigitalOcean. Hetzner’s UI is drier. DigitalOcean’s onboarding is friendlier if this is your first droplet. Neither replaces backups you actually test.",
      "Short take: pick Hetzner for side projects, APIs, and bots where RAM and traffic dominate the bill. Pick DigitalOcean when tutorials, managed Postgres, and extra regions are the product. If you want DigitalOcean-shaped hardware without SSH, that is Cloudways, not a cheaper droplet.",
    ],
    faqs: [
      {
        q: "Is Hetzner cheaper than DigitalOcean?",
        a: "Usually yes at the same RAM, especially once you count included traffic. DigitalOcean can still be the right buy if you need managed databases or a region Hetzner does not cover well.",
      },
      {
        q: "Which is better for a first VPS?",
        a: "DigitalOcean if you will follow tutorials. Hetzner if you already know how to install Caddy or Docker and you care about the invoice.",
      },
      {
        q: "Can I run WordPress on Hetzner or DigitalOcean?",
        a: "Yes, but you install it. For WordPress without Linux, Hostinger or Cloudways is less pain per hour.",
      },
    ],
    picks: [
      {
        slug: "cloudways",
        ifYou: "If you want this hardware without SSH",
        note: "Cloudways can sit on DigitalOcean (or AWS/Google) with staging and backups. Skip it if you already live in the terminal — Hetzner is cheaper then.",
      },
    ],
  },
  {
    slug: "best-cheap-wordpress-hosting",
    title: "Best cheap WordPress hosting in 2026",
    description:
      "Best cheap WordPress hosting in 2026: Hostinger vs Namecheap vs Cloudways, what $3 shared hosting actually includes, and when you should stop being cheap.",
    updated: "2026-10-15",
    paragraphs: [
      "The best cheap WordPress hosting in 2026 is still Hostinger for most people. That is not a mystery: one-click install, a panel, SSL, and an intro price around $2.99/mo on a long term. You can publish this week without SSH. Namecheap can undercut the screenshot. Cloudways is the cheap option only if you compare it with hiring someone to run a VPS.",
      "Cheap has to mean “can run WordPress for a year,” not “lowest number in a Facebook ad.” Shared hosting packs many sites onto one machine. That is fine for a brochure, a blog, and light WooCommerce. It is a bad bet for a shop you cannot afford to have slow on a sale day.",
      "Namecheap belongs on a cheap WordPress shortlist as a domain plus a tiny site. Resource limits are tighter. If the plan is a way to park a page on a name you bought today, it is enough. If you expect plugins, images, and a growing catalog, start on Hostinger instead of migrating in six months.",
      "Renewal is where cheap WordPress hosting stops being cheap. Hostinger and Namecheap both advertise intro terms. Month 13 can look like a different product. Prepay the term that makes the math honest, or budget the renewal before you call it a $3 host.",
      "When to stop being cheap: staging, object caching, and isolation from noisy neighbors. That is Cloudways on this list — managed cloud, higher invoice, fewer 11pm surprises. A bare Hetzner VPS is cheaper still if you can install WordPress yourself, which most cheap-hosting buyers cannot and should not.",
      "WooCommerce specifically: a small catalog on Hostinger shared is normal. A store with real orders should not stay on the cheapest shared tier out of loyalty to the first invoice. Move to Cloudways or a VPS before the checkout page is the thing that fails.",
      "Short take: Hostinger for cheap WordPress you will actually use. Namecheap for a domain and a placeholder. Cloudways when cheap is no longer the goal. Hetzner only if WordPress-on-Linux is a skill you already have.",
    ],
    faqs: [
      {
        q: "What is the cheapest WordPress hosting that is still usable?",
        a: "Hostinger’s intro shared plan is the default on this ranking. Namecheap can be cheaper on day one for a tiny site. Avoid $1 mystery hosts with no upgrade path.",
      },
      {
        q: "Is cheap shared hosting enough for WooCommerce?",
        a: "For a light catalog and light traffic, often yes. For checkout you care about, plan the move to Cloudways or a VPS before the shop is busy.",
      },
      {
        q: "Is Cloudways cheap WordPress hosting?",
        a: "No. It is cheaper than a sysadmin and more expensive than Hostinger. Use it when shared hosting is the risk, not when the budget is the constraint.",
      },
    ],
    picks: [
      {
        slug: "hostinger",
        ifYou: "If you need cheap WordPress you will actually use",
        note: "One-click install, a panel, and an intro price around $2.99/mo on a long term. Still the default on this ranking.",
      },
      {
        slug: "namecheap",
        ifYou: "If you need a domain and a placeholder",
        note: "Fine for a parked page on a name you bought today. Too small a ceiling if WordPress is the actual product.",
      },
      {
        slug: "cloudways",
        ifYou: "If cheap is no longer the goal",
        note: "Staging, isolation, and fewer 11pm surprises. Use it when a shop or client site cannot live on the cheapest shared tier.",
      },
    ],
  },
  {
    slug: "hostinger-vs-cloudways",
    title: "Hostinger vs Cloudways: shared hosting or managed cloud?",
    description:
      "Hostinger vs Cloudways in 2026: when cheap shared WordPress is enough, when managed cloud is worth the extra money, and who should skip both for a VPS.",
    updated: "2026-10-15",
    paragraphs: [
      "Hostinger vs Cloudways is the upgrade question, not the beginner question. Hostinger is cheap shared hosting with a panel. Cloudways is a managed cloud VM with a panel. They overlap only in that both will run WordPress without asking you to live in SSH.",
      "Start on Hostinger if the site does not exist yet. Intro pricing, one-click WordPress, and a first-week time-to-live that Cloudways will not beat. You are buying a folder on a shared box. That is the correct product for a brochure, a blog, or a shop you are still validating.",
      "Move to Cloudways when the site has consequences. Staging, backups, and isolation from noisy neighbors matter once the page going down costs money. You pick DigitalOcean, AWS, or Google underneath and stop being the person who patches PHP on a Saturday. The invoice starts around $11/mo and rises with the instance size.",
      "The mistake is buying Cloudways as a status upgrade for a site that still fits on Hostinger. The other mistake is staying on shared hosting because the intro price was $2.99 while checkout, email, and admin-ajax are already unhappy. Price is not the only axis; operational risk is the one ranking tables hide.",
      "Developers sometimes skip both. If you already use SSH, Hetzner undercuts Cloudways on hardware and Hostinger is irrelevant. If you want tutorials and managed databases, DigitalOcean is the cloud without Cloudways sitting on top. Cloudways is for people who want that cloud and do not want the SSH.",
      "Migration is ordinary. Hostinger to Cloudways is a common WordPress move: backup, point DNS, keep the Namecheap (or Hostinger) domain where it is. You do not have to redo the brand to change the box.",
      "Short take: Hostinger to get the site online. Cloudways when shared hosting is the liability. Hetzner or DigitalOcean when you are the sysadmin on purpose.",
    ],
    faqs: [
      {
        q: "Should I start on Cloudways instead of Hostinger?",
        a: "Only if the site already makes money or you already know shared hosting will not survive the first plugin pile. Otherwise Hostinger is the cheaper way to find out if the site matters.",
      },
      {
        q: "Is Cloudways faster than Hostinger?",
        a: "Often, because you are not sharing the box with as many strangers and you can size the VM. It is not magic. A huge Hostinger plan can still outrun a tiny Cloudways instance.",
      },
      {
        q: "Can I use Hostinger for staging and Cloudways for production?",
        a: "You can, but it is an awkward split. Cloudways already includes staging. Use Hostinger until you migrate, then keep one host.",
      },
    ],
    picks: [
      {
        slug: "hostinger",
        ifYou: "If the site does not exist yet",
        note: "Cheaper, faster to publish, and enough for a brochure, a blog, or a shop you are still validating.",
      },
      {
        slug: "cloudways",
        ifYou: "If the site already makes money",
        note: "Managed cloud when shared hosting is the liability. Staging and backups without living in SSH.",
      },
    ],
  },
  {
    slug: "kit-vs-mailchimp",
    title: "Kit vs Mailchimp: which to pick in 2026",
    description:
      "Kit vs Mailchimp for email marketing in 2026: creator lists vs the familiar suite, free plans, pricing as subscribers grow, and when Brevo is the cheaper third option.",
    updated: "2026-10-15",
    vertical: "email",
    rankingHref: "/email",
    rankingLabel: "Best email marketing 2026",
    paragraphs: [
      "Kit vs Mailchimp is the comparison most people actually need after they buy hosting. Both will collect an address and send a campaign. They are not the same product. Kit (formerly ConvertKit) is email for writers and product people. Mailchimp is the marketing suite whose logo everyone already recognizes.",
      "Mailchimp usually wins the first five minutes. Templates, a WordPress plugin, a free plan, a name you can say on a call without spelling it. Essentials is widely listed around $13/mo at a few hundred contacts. If the job is a shop newsletter and a colleague who already has a login, that is enough.",
      "Kit wins the next twelve months for a creator. Tags, sequences, a paid newsletter, a form that does not feel like a 2014 coupon blast. Paid Creator is commonly around $39/mo at about 1,000 subscribers. There is a free newsletter plan with limits. You are paying for a tool that assumes you write and you sell, not for a retail calendar.",
      "Pricing is where both get honest. They charge by list size. A quiet 10,000-person list is an expensive hobby on either one. That is the moment Brevo belongs in the conversation: it bills on emails sent, not on how many addresses sit in the drawer. If your “email marketing” is a weekly digest to a large list, stop comparing Kit and Mailchimp and open the Brevo review.",
      "Free plans: both have one. Mailchimp’s is tightly capped on contacts and sends. Kit’s newsletter plan lets you publish before you pay for Creator automation. Neither free tier is a forever home at a serious list. Treat them as on-ramps.",
      "You can export from both. Do it before you build five years of automations you do not understand. The lock-in is habit, not a blocked CSV. Switching later is boring and cheaper than staying in the wrong suite because the first form already works.",
      "Short take: pick Mailchimp if familiarity is the feature — a client expects it, a theme integrates it, a shop calendar is the job. Pick Kit if you are the writer and the list supports a product. Pick neither if send volume is the invoice; that is Brevo. If the newsletter is the entire business, read Beehiiv before you standardize.",
    ],
    faqs: [
      {
        q: "Who wins Kit vs Mailchimp for a new website?",
        a: "Kit, if the site is yours and you will write to the list. Mailchimp if someone else has to operate it and they already know Mailchimp.",
      },
      {
        q: "Which is cheaper, Kit or Mailchimp?",
        a: "On a tiny list, Mailchimp’s Essentials screenshot is often lower. At a few thousand engaged subscribers, both hurt. Compare the contact tier you will actually have, then look at Brevo if you send a lot.",
      },
      {
        q: "Should I start on Mailchimp and move to Kit later?",
        a: "You can. Exporting is ordinary. Starting on Kit is less work if you already know you are a creator, not a shop broadcast.",
      },
    ],
    picks: [
      {
        slug: "mailchimp",
        ifYou: "If the name is the feature",
        note: "Templates, plugins, and a login your colleague already has. Fine for a shop calendar. Easy to outgrow as a publication.",
      },
      {
        slug: "kit",
        ifYou: "If you write and you sell",
        note: "The default on the email ranking. Paid Creator climbs with the list. Start on the free newsletter plan if you are not sure yet.",
      },
      {
        slug: "brevo",
        ifYou: "If the invoice is the constraint",
        note: "Volume pricing and SMTP. Not a creator home. The right third option when Kit vs Mailchimp is the wrong question.",
      },
    ],
  },
];
