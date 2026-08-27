/**
 * Branches share one content source (content/menu.*.ts). A branch only needs an entry
 * here once it has its own route — add its id to BRANCHES and tag any items it doesn't
 * carry with `excludeFrom: ["<id>"]` in the content files. See lib/menu.ts.
 */
export const BRANCHES = ["main", "branch-2"] as const;
export type Branch = (typeof BRANCHES)[number];

export const DEFAULT_BRANCH: Branch = "main";
