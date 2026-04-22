<hr>

<div align="center">
  <p><img src=".assets/icon.svg" width="128"/></p>
  <sub>FRONTEND</sub>
  <h1>OLANPAGE</h1>
  <p><a href="https://olankens.com">Website</a></p><hr>
  <p>Developer portfolio showcasing projects and technical skills. Powered by Astro for fast performance and styled with Tailwind CSS for a modern, fully responsive design that works seamlessly across all devices.</p>
</div>

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
