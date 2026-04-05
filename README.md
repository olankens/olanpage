<hr>

# OVERVIEW

![](.assets/social.png)

Developer portfolio showcasing projects and technical expertise. Built with [Astro](https://astro.build) for fast
performance and [Tailwind CSS](https://tailwindcss.com) for a modern, responsive design. Initialized with
[Hubsetup](https://github.com/olankens/hubsetup) to streamline development and improve the Astro application workflow.

<hr>

### Website Previews

<img src=".assets/308x640.png" width="24.0625%"><img src=".assets/1x1.gif" width="1.25%"><img src=".assets/956x640.png" width="74.6875%">

<hr>

### Desktop Previews

<img src=".assets/desktop1.png" width="49.375%"><img src=".assets/1x1.gif" width="1.25%"><img src=".assets/desktop2.png" width="49.375%">

<hr>

### Mobile Previews

<img src=".assets/mobile1.png" width="24.0625%"><img src=".assets/1x1.gif" width="1.25%"><img src=".assets/mobile2.png" width="24.0625%"><img src=".assets/1x1.gif" width="1.25%"><img src=".assets/mobile3.png" width="24.0625%"><img src=".assets/1x1.gif" width="1.25%"><img src=".assets/mobile4.png" width="24.0625%">

<hr>

# GUIDANCE

### Trigger GitHub Workflow

```shell
gh workflow run "create-previews.yml"
gh workflow run "deploy-gh-pages.yml"
```

<hr>

### Watch Latest Workflow

```shell
gh run watch "$(gh run list --limit 1 --json databaseId --jq '.[0].databaseId')"
```

<hr>
