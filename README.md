<hr>

<div align="center">
<img src=".assets/icon.svg" width="128" alt="icon"/>
<h1>OLANPAGE</h1>
</div>

<p align="center">Developer portfolio showcasing projects and technical expertise. Built with <a href="https://astro.build">Astro</a> for fast performance and <a href="https://tailwindcss.com">Tailwind CSS</a> for a modern, responsive design. Initialized with <a href="https://github.com/olankens/hubsetup">Hubsetup</a> to streamline development and improve the Astro application workflow.</p>

<hr>

### Desktop Previews

<img src=".assets/desktop1.png" width="49.375%"><img src=".assets/1x1.gif" width="1.25%"><img src=".assets/desktop2.png" width="49.375%">

<hr>

### Mobile Previews

<img src=".assets/mobile1.png" width="24.0625%"><img src=".assets/1x1.gif" width="1.25%"><img src=".assets/mobile2.png" width="24.0625%"><img src=".assets/1x1.gif" width="1.25%"><img src=".assets/mobile3.png" width="24.0625%"><img src=".assets/1x1.gif" width="1.25%"><img src=".assets/mobile4.png" width="24.0625%">

<hr>

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
