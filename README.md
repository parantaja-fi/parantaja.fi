# Shared Astroplate GitHub Pages Baseline

This repository is the curated shared plumbing baseline for a small number of
static sites built on [Astroplate](https://github.com/zeon-studio/astroplate)
and deployed on GitHub Pages.

It sits between the true upstreams and the actual site repositories:

```text
astroplate + astro-pages -> this repo -> downstream site repos
```

The current validation deployment for this baseline repository is:

```text
https://staging.pnr.iki.fi
```

## Local Use

```bash
yarn install
yarn run dev
yarn build
```

## Deployment Model

- GitHub Pages is deployed from `.github/workflows/deploy.yml` using GitHub Actions.
- Root-path deployment is assumed. Keep `src/config/config.json` `site.base_path` as `/`.
- This repository does not support `https://USERNAME.github.io/REPO/` project-site subpaths.
- Testing should use a custom domain or other root URL, not a GitHub Pages project URL.
- `staging.pnr.iki.fi` is the baseline validation deployment, not the eventual public site.

## Custom Domain Notes

- With this GitHub Actions publishing model,
  GitHub Pages custom domains are configured in repository settings and DNS,
  not by a committed `CNAME` file.
- For the current staging target, set the GitHub Pages custom domain to `staging.pnr.iki.fi`.
- For a downstream production site such as `parantaja.fi`,
  set that downstream repository's custom domain and `site.base_url` to match.
- For a subdomain such as `staging.pnr.iki.fi`, create a DNS `CNAME` record
  to the account's default GitHub Pages domain, excluding the repository name.
- For an apex domain such as `parantaja.fi`,
  use the GitHub Pages apex-domain DNS records recommended by GitHub,
  not a DNS `CNAME` at the zone apex.
- Reference:
  https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## Documentation Map

- `UPSTREAMS.md`: how this repository tracks `astroplate` and `astro-pages`
- `DOWNSTREAMS.md`: how downstream site repositories should be based on and maintained against this repository

## Upstream Leftovers

Files such as `Dockerfile`, `netlify.toml`, and `wrangler.jsonc` are intentionally kept
as harmless Astroplate upstream leftovers.
They are not used by the GitHub Pages deployment for this repository.
