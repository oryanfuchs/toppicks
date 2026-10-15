import type { RankedPick } from "./ranked";

export type EmailCategory = "creator" | "cheap" | "newsletter" | "automation" | "free";

export type EmailTool = RankedPick & {
  websiteKey: keyof EmailAffiliateMap;
  categories: EmailCategory[];
};

export type EmailAffiliateMap = {
  kit: string;
  brevo: string;
  mailchimp: string;
  beehiiv: string;
  getresponse: string;
};

export function emailAffiliateUrl(tool: EmailTool): string {
  const urls: EmailAffiliateMap = {
    kit: import.meta.env.PUBLIC_AFFILIATE_KIT || "https://kit.com",
    brevo: import.meta.env.PUBLIC_AFFILIATE_BREVO || "https://www.brevo.com",
    mailchimp: import.meta.env.PUBLIC_AFFILIATE_MAILCHIMP || "https://mailchimp.com",
    beehiiv: import.meta.env.PUBLIC_AFFILIATE_BEEHIIV || "https://www.beehiiv.com",
    getresponse: import.meta.env.PUBLIC_AFFILIATE_GETRESPONSE || "https://www.getresponse.com",
  };
  return urls[tool.websiteKey];
}

export const emailTools: EmailTool[] = [
  {
    slug: "kit",
    name: "Kit",
    rank: 1,
    badge: "Best for most people",
    tagline: "Creator email with paid newsletters, tags, and sequences that do not feel like a CRM.",
    fromPrice: "$39",
    priceNote: "Creator plan around 1,000 subscribers. Free newsletter plan exists; paid is where sequences get serious.",
    bestFor: "Creators, paid newsletters, people who just launched a site",
    score: 8.9,
    websiteKey: "kit",
    categories: ["creator", "newsletter", "free"],
    accent: "#FB651E",
    productType: "Creator email",
    specs: [
      { label: "Plans", value: "Free newsletter + Creator" },
      { label: "From", value: "$39/mo paid (1k list)" },
      { label: "Best for", value: "Creators, paid issues" },
      { label: "Meter", value: "Charged by subscribers" },
      { label: "Catch", value: "Price climbs with the list" },
      { label: "Free", value: "Newsletter plan, capped features" },
    ],
    buyIf: "You write, you sell a product, and you want a list that is not trapped in a bloated marketing suite.",
    skipIf: "You need cheap high-volume blasts, SMS, or a full CRM. Take Brevo.",
    ratings: [
      { label: "Ease", value: 5 },
      { label: "Value", value: 3 },
      { label: "Automation", value: 4 },
      { label: "List control", value: 5 },
    ],
    pros: [
      "Built for writers and product people, not enterprise campaigns",
      "Paid newsletters and tagging without a 40-item left nav",
      "A free newsletter plan so you can start before you pay",
    ],
    cons: [
      "Paid Creator pricing is steep once the list grows",
      "Not the cheapest way to send a lot of email",
    ],
    summary:
      "If you just shipped a site and the next job is a list you actually own, Kit is the default pick on this ranking.",
    body: [
      "Kit (the product formerly called ConvertKit) is email for people who publish. Tags, sequences, a paid newsletter, a form on the site you just bought hosting for. It is not trying to be HubSpot. That is why it sits at number one here: most people arriving from a new Hostinger or Namecheap install need a list, not a marketing cloud.",
      "The ranking is not “cheapest thousand emails.” It is “can a non-marketer collect addresses this week and send something that does not look like a 2014 coupon blast.” Kit still wins that job in 2026, ahead of Mailchimp, because the product assumes you have writing and a product, not a retail calendar.",
      "The catch is the meter. Creator pricing is commonly quoted around $39/mo at about 1,000 subscribers, and it climbs with the list. The free newsletter plan is real, with feature limits. If your plan is to mail 40,000 people twice a week on a tight budget, Brevo’s volume pricing will hurt less. If your plan is 400 true fans and a paid issue, Kit’s invoice is the wrong thing to optimize.",
      "Export is ordinary. You are not renting a hostage list. That matters more than another drag-and-drop block. Mailchimp will also let you leave; Kit just makes staying feel like the tool was designed for the job you have.",
      "Skip Kit if you need SMS, a CRM pipeline, and landing-page webinars in one bill. That is GetResponse or Brevo. Skip it if the “newsletter” is actually a store broadcast calendar — Mailchimp still speaks that dialect. For a creator who just launched a site, start here.",
    ],
    faqs: [
      {
        q: "Is Kit the best email marketing tool in 2026?",
        a: "For most people who just launched a site or a paid newsletter, yes — it is #1 on this ranking. It is not the cheapest high-volume sender. Brevo usually wins that invoice. Mailchimp wins name recognition.",
      },
      {
        q: "Is Kit free?",
        a: "There is a free newsletter plan. Paid Creator is where unlimited sequences and the grown-up creator features live, often around $39/mo at 1,000 subscribers. Confirm the current tier on Kit’s site; list-size pricing moves.",
      },
      {
        q: "Kit vs Mailchimp: which should I buy?",
        a: "Buy Mailchimp if your team already lives there or you want the brand everyone has heard of. Buy Kit if you are the writer and the list is the product. Full comparison: Kit vs Mailchimp.",
      },
    ],
  },
  {
    slug: "brevo",
    name: "Brevo",
    rank: 2,
    badge: "Best cheap / SMTP",
    tagline: "Email priced by sends, plus a CRM and transactional SMTP, without creator branding.",
    fromPrice: "$9",
    priceNote: "Starter is billed by email volume, not list size. Free plan: 300 emails/day.",
    bestFor: "Small lists that send often, SMTP, cheap automation",
    score: 8.5,
    websiteKey: "brevo",
    categories: ["cheap", "automation", "free"],
    accent: "#0B996E",
    productType: "Email + CRM",
    specs: [
      { label: "Plans", value: "Free + Starter CRM" },
      { label: "From", value: "$9/mo Starter" },
      { label: "Best for", value: "Volume, SMTP, CRM" },
      { label: "Meter", value: "Charged by emails sent" },
      { label: "Free", value: "300 emails/day" },
      { label: "Catch", value: "Creator features are thinner" },
    ],
    buyIf: "You want a low bill, transactional mail, or a small CRM next to campaigns.",
    skipIf: "The newsletter is the product and you want paid subscriptions in the same app. Take Kit or Beehiiv.",
    ratings: [
      { label: "Ease", value: 4 },
      { label: "Value", value: 5 },
      { label: "Automation", value: 4 },
      { label: "List control", value: 4 },
    ],
    pros: [
      "Priced on sends, so a large quiet list is not punished",
      "Free 300 emails/day is enough to prove the workflow",
      "SMTP and a light CRM in the same account",
    ],
    cons: [
      "Less of a home for a paid newsletter brand",
      "The UI is a marketing suite, not a writing tool",
    ],
    summary:
      "If Kit’s subscriber meter looks like a joke for how you actually send, Brevo is the cheap row that still does automation.",
    body: [
      "Brevo (Sendinblue, if you learned the old name) bills like a post office: you pay for emails sent, not for how many addresses sit in the drawer. Starter is commonly advertised from $9/mo for a few thousand sends. The free plan’s 300 emails/day is enough to wire a form on a new WordPress site and see if anyone cares.",
      "That pricing shape is why it is second, not first. Most people in this ranking’s audience are launching a site and a list, not a send-volume problem. Kit matches that job. Brevo matches the job that shows up when you have 20,000 contacts and a weekly digest, or when you need transactional mail (receipts, password reset) without a second vendor.",
      "You also get a CRM and SMS add-ons. Useful if the “newsletter” is really a small-business pipeline. Noise if you only wanted a write-and-send box. The editor and automation are fine. They are not why writers recommend Beehiiv or Kit on Twitter.",
      "Deliverability is a thing we did not lab. No row on this list gets a fake inbox-placement decimal. What you can check: Brevo is a serious email infrastructure company, not a newsletter social network. If you need SMTP for an app you hosted on Hetzner, this is the row that does not look embarrassed.",
      "Pick Brevo when the invoice and the send volume dominate. Skip it when you want paid subscriptions, a recommendation network, and a public newsletter URL as the product — Beehiiv and Kit are built for that.",
    ],
    faqs: [
      {
        q: "Is Brevo cheaper than Kit?",
        a: "Often, yes, if you send a modest number of emails to a larger list. Kit charges by subscribers. Brevo charges by volume. A quiet 10,000-person list is usually cheaper on Brevo. A high-touch creator list of 800 people is not why you pick Brevo.",
      },
      {
        q: "Is Brevo good for newsletters?",
        a: "It will send them. It will not make the newsletter feel like the product. For a branded publication with paid tiers, Kit or Beehiiv is less of a fight.",
      },
      {
        q: "Can I use Brevo as SMTP for my website?",
        a: "Yes. That is one of the reasons it is on this list. Hostinger will send mail; a dedicated SMTP/API is what you want once the site is real.",
      },
    ],
  },
  {
    slug: "mailchimp",
    name: "Mailchimp",
    rank: 3,
    badge: "Best known starter",
    tagline: "The brand people already have an account for. Fine to start. Easy to outgrow.",
    fromPrice: "$13",
    priceNote: "Essentials around $13/mo at 500 contacts. Free plan is tightly capped. Standard costs more.",
    bestFor: "Beginners who want the familiar logo, small shops",
    score: 8.1,
    websiteKey: "mailchimp",
    categories: ["free", "cheap"],
    accent: "#FFE01B",
    productType: "Email marketing suite",
    specs: [
      { label: "Plans", value: "Free, Essentials, Standard" },
      { label: "From", value: "$13/mo Essentials" },
      { label: "Best for", value: "Familiar, templates" },
      { label: "Meter", value: "Contacts + sends" },
      { label: "Free", value: "Small list, small send cap" },
      { label: "Catch", value: "Price and UI bloat as you grow" },
    ],
    buyIf: "Your accountant already knows the name, or you want templates and a shop integration today.",
    skipIf: "You are a writer building a paid newsletter on purpose. Kit or Beehiiv will fight you less.",
    ratings: [
      { label: "Ease", value: 4 },
      { label: "Value", value: 3 },
      { label: "Automation", value: 4 },
      { label: "List control", value: 4 },
    ],
    pros: [
      "Everyone has heard of it, including the intern",
      "Templates and e-commerce integrations are mature",
      "A real free plan, even if it is small",
    ],
    cons: [
      "The product has become a suite. Simple sends take more clicks than they used to",
      "Contact-based pricing gets expensive in the same way Kit does, with less of a creator home",
    ],
    summary:
      "The default people type into Google. Still a fair way to send the first campaign. Rarely the tool you are glad you standardized on at 10,000 subscribers.",
    body: [
      "Mailchimp is the Kleenex of email marketing. That is both the pitch and the problem. If you have never sent a campaign, the templates, the brand, and the WordPress plugin will get you through Friday. Essentials is widely listed around $13/mo for a few hundred contacts. The free plan still exists, with a tight send and contact cap.",
      "It is third because “best known” is not the same job as “best for a new site.” Kit assumes you are the product. Mailchimp assumes you have a marketing calendar. For a local shop on Hostinger, that calendar is real. For a blog you intend to charge for, you will spend the second month turning features off.",
      "Pricing is contact-based, like Kit, so a growing list is a growing bill. The jump from free to paid, and from Essentials to Standard, is where people start comparing Brevo. Read the contact tier, not the homepage tile.",
      "You can export. You should, before you build five years of tags you do not understand. Switching later is boring but possible. The lock-in is habit and automations, not a blocked CSV.",
      "Use Mailchimp when familiarity is the feature: a client expects it, a theme integrates it, a colleague already has the login. Do not use it because a 2016 tutorial said so. The rest of this ranking exists.",
    ],
    faqs: [
      {
        q: "Is Mailchimp still free?",
        a: "There is a free plan with a small contact and send cap. Most people who send a real newsletter hit paid Essentials, often around $13/mo at 500 contacts. Confirm the current free limits; they get tighter over time.",
      },
      {
        q: "Is Mailchimp good for a new WordPress site?",
        a: "Yes, in the sense that plugins and tutorials are everywhere. Kit is usually a better long-term home if the site is a publication. Brevo is cheaper if you will send a lot.",
      },
      {
        q: "Why isn’t Mailchimp #1?",
        a: "Name recognition is not the ranking. Time to a useful list, price honesty as the list grows, and whether the tool matches a creator or a shop — those are. Mailchimp is the familiar starter, not the best default.",
      },
    ],
  },
  {
    slug: "beehiiv",
    name: "Beehiiv",
    rank: 4,
    badge: "Best for writers",
    tagline: "The newsletter is the product: site, recommendations, ads, paid subs, in one place.",
    fromPrice: "$49",
    priceNote: "Paid Lite/Scale pricing moved in October 2026. Free plan still exists. Confirm the current tier before you commit.",
    bestFor: "Publications, Substack-style newsletters, growth via recommendations",
    score: 8.0,
    websiteKey: "beehiiv",
    categories: ["newsletter", "creator", "free"],
    accent: "#111111",
    productType: "Newsletter platform",
    specs: [
      { label: "Plans", value: "Free, Lite, Pro" },
      { label: "From", value: "$49/mo paid (verify)" },
      { label: "Best for", value: "Publication, growth" },
      { label: "Meter", value: "Plan + subscriber tier" },
      { label: "Free", value: "Send a real newsletter" },
      { label: "Catch", value: "Overkill if you only need a form" },
    ],
    buyIf: "The newsletter is the business: archive, referrals, ads or paid subs.",
    skipIf: "You only need a signup form and a monthly update for a regular website. Kit or Brevo is less platform.",
    ratings: [
      { label: "Ease", value: 4 },
      { label: "Value", value: 3 },
      { label: "Automation", value: 3 },
      { label: "List control", value: 4 },
    ],
    pros: [
      "Designed as a publication, not a campaign tool",
      "Recommendations network and monetization (ads, paid) are first-class",
      "A usable free plan to publish before you pay",
    ],
    cons: [
      "October 2026 repricing makes the paid row a moving target",
      "Heavier than a form-plus-sequence on a WordPress host",
    ],
    summary:
      "If the site exists to support the newsletter, not the other way around, Beehiiv is the publication stack. Too much software if you only needed a welcome sequence.",
    body: [
      "Beehiiv is what you buy when the email is the show. Web archive, signup, paid subscriptions, ad network, recommendation graph. Substack is the comparison readers mean, even when they do not say it. Kit will send a paid newsletter; Beehiiv wants to be the CMS for it.",
      "It is fourth, not first, because most people on this site just bought hosting for a website. They need a list attached to that site. Beehiiv can do that, and then it keeps offering a media company. If you are not going to use recommendations and a public archive, you are paying for a newsroom you will not staff.",
      "Pricing is the honest warning this month. Beehiiv rolled new plans in October 2026 (Free, Lite, Pro, Enterprise). Paid Lite has been reported around $49/mo on annual billing, with subscriber tiers on top. Existing customers were grandfathered for a cycle. Treat every number here as a starting point and open their pricing page before you write a year of issues on the free tier assuming it stays.",
      "The free plan is still the right way to try the product. Send issues, see if the editor feels like writing. Upgrade when ads, paid subs, or the referral network are the growth plan — not because a dashboard badge looks unpaid.",
      "Pick Beehiiv when you would have considered Substack. Pick Kit when the list supports a site and a product you already sell. Pick Brevo when you are not a publication at all.",
    ],
    faqs: [
      {
        q: "Is Beehiiv better than Kit for newsletters?",
        a: "For a publication that wants an archive, referrals, and ads, yes. For a creator list that supports a course or a SaaS, Kit is usually less platform. They overlap; the badge is the job.",
      },
      {
        q: "Is Beehiiv free?",
        a: "Yes, with limits. Paid plans and subscriber tiers changed in October 2026. Do not treat a blog’s $49/mo screenshot as an invoice.",
      },
      {
        q: "Beehiiv vs Substack?",
        a: "Same job, different cut of the money and different recommendations graph. This ranking is email tools you attach to a site you host. Substack is a walled publication host. If you already paid Hostinger for the site, Beehiiv or Kit keeps the domain yours.",
      },
    ],
  },
  {
    slug: "getresponse",
    name: "GetResponse",
    rank: 5,
    badge: "Best automation suite",
    tagline: "Email plus funnels, webinars, and automation. Heavy. Capable. Rarely the first buy.",
    fromPrice: "$19",
    priceNote: "Starter around $19/mo or €16/mo at 1,000 contacts. No lasting free plan — 14-day trial.",
    bestFor: "Funnels, webinars, marketers who want one vendor",
    score: 7.7,
    websiteKey: "getresponse",
    categories: ["automation"],
    accent: "#00A6E8",
    productType: "Marketing automation",
    specs: [
      { label: "Plans", value: "Starter through Max" },
      { label: "From", value: "$19/mo at 1k contacts" },
      { label: "Best for", value: "Funnels, webinars" },
      { label: "Meter", value: "Contacts + plan tier" },
      { label: "Free", value: "Trial only" },
      { label: "Catch", value: "More product than a first list needs" },
    ],
    buyIf: "You already think in funnels and webinars and you want them in one login.",
    skipIf: "You needed a form on a new site this afternoon. Kit, Brevo, or Mailchimp will start faster.",
    ratings: [
      { label: "Ease", value: 3 },
      { label: "Value", value: 3 },
      { label: "Automation", value: 5 },
      { label: "List control", value: 4 },
    ],
    pros: [
      "Automation, landing pages, and webinars without stitching three apps",
      "Contact-based plans with a clear Starter rung",
      "Lifetime-style affiliate terms exist if you care about that as a publisher",
    ],
    cons: [
      "No real free plan — you trial, then you pay",
      "The surface area is a marketing department. Easy to drown on day one",
    ],
    summary:
      "The grown-up marketing cloud on this list. Worth it when webinars and funnels are the job. Too much software when you only needed a welcome email.",
    body: [
      "GetResponse is the opposite of Kit’s restraint. Email, automation workflows, landing pages, webinars, a funnel builder. Starter is commonly about $19/mo (or mid-teens in euros on annual) at 1,000 contacts, with no send cap on that rung. There is a 14-day trial, not a forever free tier.",
      "Fifth is not a quality insult. It is a fit call. People coming from the hosting ranking are attaching a form to a brochure or a blog. They will lose a weekend in GetResponse’s left nav. Marketers who already run webinars will wonder why anyone would pick Mailchimp’s thinner automation.",
      "List-size pricing means the same honesty lecture as Kit and Mailchimp: the 1,000-contact screenshot is not the 10,000-contact invoice. Higher plans unlock the automation depth you probably came for. Starter is easy to outgrow if “automation” meant more than one workflow.",
      "If you publish comparison sites, GetResponse is also the program that has historically paid a fat lifetime rev-share. That does not move this badge. It does mean we have a conflict if we ever sound too excited about funnels. Read the disclosure. The skip-if line is still: do not buy this as your first ESP.",
      "Choose GetResponse when the webinar is on the calendar. Choose Kit when the essay is. Choose Brevo when the invoice is. Mailchimp when the client said Mailchimp.",
    ],
    faqs: [
      {
        q: "Does GetResponse have a free plan?",
        a: "No lasting one. You get a trial, then Starter. If you need to send before you pay, Kit, Brevo, Mailchimp, or Beehiiv still have free rungs.",
      },
      {
        q: "Is GetResponse good for beginners?",
        a: "Only beginners who already think they want funnels. For a first list on a new WordPress host, it is more product than the job.",
      },
      {
        q: "GetResponse vs Mailchimp?",
        a: "GetResponse goes deeper on automation and webinars. Mailchimp is easier to start and easier to explain to a colleague. Neither is the creator-newsletter default — that is Kit or Beehiiv.",
      },
    ],
  },
];

export function emailBySlug(slug: string): EmailTool | undefined {
  return emailTools.find((tool) => tool.slug === slug);
}
