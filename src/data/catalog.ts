import { affiliateUrl, hostBySlug, hosts, type Host } from "./hosts";
import { emailAffiliateUrl, emailBySlug, emailTools, type EmailTool } from "./email";
import type { RankedPick } from "./ranked";

export type CatalogItem = {
  kind: "host" | "email";
  pick: RankedPick;
  visitUrl: string;
  markSrc: string;
  rankingHref: string;
  rankingLabel: string;
  others: RankedPick[];
};

export function catalogBySlug(slug: string): CatalogItem | undefined {
  const host: Host | undefined = hostBySlug(slug);
  if (host) {
    return {
      kind: "host",
      pick: host,
      visitUrl: affiliateUrl(host),
      markSrc: `/hosts/${host.slug}-mark.svg`,
      rankingHref: "/hosting",
      rankingLabel: "Best web hosting 2026",
      others: hosts.filter((item) => item.slug !== slug),
    };
  }

  const tool: EmailTool | undefined = emailBySlug(slug);
  if (tool) {
    return {
      kind: "email",
      pick: tool,
      visitUrl: emailAffiliateUrl(tool),
      markSrc: `/email/${tool.slug}-mark.svg`,
      rankingHref: "/email",
      rankingLabel: "Best email marketing 2026",
      others: emailTools.filter((item) => item.slug !== slug),
    };
  }

  return undefined;
}

export function allReviewSlugs(): string[] {
  return [...hosts.map((host) => host.slug), ...emailTools.map((tool) => tool.slug)];
}
