# Downstreams

## Purpose

This repository is the curated shared plumbing baseline.

Downstream site repositories should carry:

- brand identity
- site content
- site-specific assets
- only a narrow site-specific customization layer

The intended repository stack is:

```text
astroplate + astro-pages -> this repo -> downstream site repos
```

## Intended Use

This model is meant for a small number of downstream sites that share the same
plumbing baseline but differ in:

- brand assets
- site metadata
- menus and social links
- content collections
- content images and other site assets

## Recommended Downstream Change Boundary

Allowed in downstream repositories:

- content files
- content images and other site assets
- `src/config/config.json`
- `src/config/menu.json`
- `src/config/social.json`
- small explicitly site-specific branding assets

Discouraged in downstream repositories:

- general theme, layout, or component rewrites
- content loader changes
- workflow and deployment plumbing changes

Preferred rule:

If a change would benefit multiple downstreams or affects plumbing or theme behavior,
land it in this repository first.

## Downstream Update Workflow

1. Update this repository from `astroplate` and `astro-pages`.
2. Verify this repository builds and deploys cleanly.
3. Rebase each downstream repository onto the updated baseline.
4. Resolve downstream-specific conflicts in that downstream repository.
5. Verify each downstream repository builds and deploys cleanly.

## Rebase Guidance

- Prefer rebasing, not merging.
- Enable `git rerere` locally in each clone if you want repeated conflict resolution to get easier over time:

```bash
git config rerere.enabled true
```

- Resolve repeated upstream synchronization conflicts in this repository first.
- Resolve only downstream-specific conflicts in downstream repositories.

## Downstream-Specific Placeholders

Each downstream repository must set its own:

- `site.base_url`
- custom domain
- branding text, logo, and favicon
- content and content images

For GitHub Pages apex-domain DNS records, see:

https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## Relationship To Deployment

This repository's deployment at `https://staging.pnr.iki.fi`
is the baseline validation deployment.

It validates that the curated plumbing baseline still builds and deploys cleanly.
It is not necessarily the public production site for every downstream repository.

## Repository Contract

This repository owns:

- upstream synchronization
- shared plumbing
- shared Pages workflow
- baseline validation deployment

Downstream repositories own:

- brand identity
- site content
- site-specific assets
- narrowly scoped site-specific settings

Downstream repositories should be rebased onto this repository
and should avoid broad plumbing or theme changes.

Shared improvements should flow upward into this repository
before being consumed downstream.
