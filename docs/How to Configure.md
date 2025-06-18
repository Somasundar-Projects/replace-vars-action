# How to Configure

```yaml
name: Replace Vars

on:
  push:
    branches: [main]

jobs:
  replace-vars:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Replace placeholders
        uses: somasundar-projects/replace-vars-action@v1
        with:
          file: "./config/template.txt"
          output: "./config/processed.txt"
        env:
          API_KEY: ${{ secrets.API_KEY }}
          BASE_URL: ${{ secrets.BASE_URL }}
```