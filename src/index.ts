import * as core from "@actions/core";
import * as fs from "fs";

async function run() {
  try {
    core.info(`Started Swap Process`);
    const fileInput = core.getInput("input-file");
    core.info(`Input file: ${fileInput}`);
    const fileOutput = core.getInput("output-file");
    core.info(`Input output: ${fileOutput}`);

    let content = fs.readFileSync(fileInput, "utf-8");
    core.info(`Loading File: ${fileInput}`);
    for (const [key, value] of Object.entries(process.env)) {
      const regex = new RegExp(`#{${key}}`, "g");
      core.info(`Replacing Value for "#{${key}}`);
      content = content.replace(regex, value || "");
    }
    if (
      fileOutput &&
      fileOutput !== undefined &&
      fileOutput !== null &&
      fileOutput !== ""
    ) {
      core.info(`Writing replaced content to: ${fileOutput}`);
      fs.writeFileSync(fileOutput, content);
      core.info(`Output written to: ${fileOutput}`);
    }
    core.setOutput("result", content);
  } catch (error: any) {
    core.setFailed(`Error: ${error.message}`);
  } finally {
    core.info(`Completed Swap Process`);
  }
}

run();