# Usage

`gh` command example

```
gh repo create my-project --public --template utamori/vtemp
gh repo clone my-project
```

# Styling

This template is styled with [Pico.css](https://picocss.com/)
If you want to adapt your own styling, remove the following from `index.html`

```diff
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/src/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
-    <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css" />
    <title>Vite App</title>
  </head>

```
