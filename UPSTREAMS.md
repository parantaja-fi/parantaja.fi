# Upstreams

## Purpose

This repository is the curated baseline layer between two upstreams
and a small number of downstream site repositories.

It is designed to keep Astroplate as the obvious main code upstream
while allowing `.github/workflows/deploy.yml` to be refreshed
from the official Astro GitHub Pages source with minimal guesswork.

Downstream site repository strategy is documented separately in `DOWNSTREAMS.md`.

There is intentionally no automatic two-upstream sync system.
Future updates should be handled by explicit fetch, review, and rebase/copy steps.

## Upstream Remotes

Use these remote names in every local clone of this repository:

```bash
git remote add astroplate https://github.com/zeon-studio/astroplate.git
git remote add astro-pages https://github.com/withastro/github-pages.git
```

- `astroplate`: main code upstream for the shared baseline
- `astro-pages`: authoritative upstream for `.github/workflows/deploy.yml`

## Main Upstream Strategy

- Keep the main branch rebased onto `astroplate/main`, not merged.
- Prefer upstream Astroplate behavior unless a baseline requirement forces a local change.
- Enable `git rerere` locally if you want repeated rebase conflict resolution to get easier over time:

```bash
git config rerere.enabled true
```

## Baseline-Owned Files

These files are expected to differ from Astroplate:

- `.github/workflows/deploy.yml`
- `README.md`
- `UPSTREAMS.md`
- `DOWNSTREAMS.md`
- `astro.config.mjs`
- `src/config/config.json`

The local delta in those files should stay small and deliberate.

Additionally, `readme.md` has explicitly been removed.

## Intentionally Kept Upstream Files

The repository intentionally keeps the following Astroplate files,
which are not used for the GitHub Pages deployment here,
because they are harmless and removing them would increase maintenance noise:

- `Dockerfile`
- `netlify.toml`
- `wrangler.jsonc`

Treat them as upstream leftovers unless this repository actually starts using them.

## Rebasing From Astroplate

Recommended update flow:

```bash
git fetch astroplate
git rebase astroplate/main
yarn install
yarn build
```

During conflict resolution:

- Prefer upstream Astroplate content for general site files.
- Preserve the repo-specific baseline deployment and maintenance choices listed here.
- Expect the most likely local conflict points to be
  `astro.config.mjs`,
  `src/config/config.json`,
  and the maintenance documentation files.

## Refreshing The Pages Workflow

`.github/workflows/deploy.yml` is intentionally based on:

```text
astro-pages/main:.github/workflows/deploy.yml
```

Refresh procedure:

```bash
git fetch astro-pages
git show astro-pages/main:.github/workflows/deploy.yml > /tmp/upstream-deploy.yml
```

Then update the local workflow from that diff, as appropriate.

After refreshing the workflow, run:

```bash
yarn build
```

## Baseline Responsibilities

This repository owns:

- upstream synchronization from `astroplate` and `astro-pages`
- shared plumbing and shared theme behavior
- the GitHub Pages deployment workflow
- the baseline validation deployment at `staging.pnr.iki.fi`

## Deployment Assumptions

- Static Astro output only
- Root-path deployment only
- `site.base_path` stays `/`
- No support for GitHub Pages project-site subpaths such as `https://USERNAME.github.io/REPO/`
- Testing should use a custom domain or other root URL, not a project-site URL

The current committed placeholder URL is `https://staging.pnr.iki.fi`.

Before repurposing this baseline repository for a different validation root URL,
update `src/config/config.json` `site.base_url` to match that URL.

## GitHub Pages Custom Domain

For this repository, GitHub Pages is published from a custom GitHub Actions workflow.
In that mode, GitHub Pages custom domains are managed in repository settings,
and GitHub ignores any committed `CNAME` file.

Repository settings procedure:

1. In GitHub, open the repository settings.
2. Open `Pages`.
3. Set the publishing source to `GitHub Actions`.
4. Set the custom domain to `staging.pnr.iki.fi` for the baseline validation deployment.
5. Verify the domain and enable HTTPS after DNS has propagated.

DNS notes:

- For `staging.pnr.iki.fi`, create a DNS `CNAME` record
  that points to the account's default GitHub Pages domain, excluding the repository name.
- For an apex domain used by a downstream site,
  use the GitHub Pages apex-domain DNS records recommended by GitHub,
  such as `ALIAS`, `ANAME`, or `A` and optional `AAAA` records, depending on the DNS provider.
- Reference:
  https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- Do not use wildcard DNS records for this setup.
