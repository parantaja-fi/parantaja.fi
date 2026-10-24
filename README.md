# Astro Based parantaja.fi Site

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `yarn install`            | Installs dependencies                            |
| `yarn dev`                | Starts local dev server at `localhost:4321`      |
| `yarn build`              | Build your production site to `./dist/`          |
| `yarn preview`            | Preview your build locally, before deploying     |
| `yarn astro ...`          | Run CLI commands like `astro add`, `astro check` |
| `yarn astro -- --help`    | Get help using the Astro CLI                     |

## Staging

First commit all changes you want to see at staging, then:
```
   git push staging main
   sleep 2
   gh --repo pekkanikander/staging run watch --exit-status &&
   open https://staging.pnr.iki.fi
```

## Production

Make first sure staging looks good, then:
```
   git push production main
   sleep 2
   gh --repo parantaja-fi/parantaja.fi run watch --exit-status &&
   open https://parantaja.fi
```
