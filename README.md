# Replace Placeholders with Secrets or Environment Variables

[![GitHub Marketplace](https://img.shields.io/badge/GitHub%20Marketplace-Action-blue?logo=github)](https://github.com/marketplace/actions/replace-vars-action)

This GitHub Action replaces placeholders like `#{VAR}` in a given file using environment variables or GitHub secrets.

## 📦 Features

- Replace `#{VAR}` style placeholders in files.
- Supports GitHub secrets and environment variables.
- Outputs the processed file content.

## 🛠️ Inputs

| Name          | Required | Description                   |
| ------------- | -------- | ----------------------------- |
| `input-file`  | ✅ Yes   | Path to the input file        |
| `output-file` | ❌ No    | Path to write the output file |

## 🧾 Outputs

| Name     | Description                         |
| -------- | ----------------------------------- |
| `result` | Final processed content as a string |

## 📄 Example Usage

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
        uses: Somasundar-Projects/replace-vars-action@v1.1.0
        with:
          file: "./config/template.txt"
          output: "./config/processed.txt"
        env:
          API_KEY: ${{ secrets.API_KEY }}
          BASE_URL: ${{ secrets.BASE_URL }}
```

## 👨‍💻 Author

**Somasundar**  🔗 [GitHub](https://github.com/Somasundar-Projects)
