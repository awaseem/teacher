import Avj from "ajv";
import JSONSchema from "../JSONSchema/schema.json";
import glob from "glob";
import { promisify } from "util";

const globPromise = promisify(glob);

async function main() {
  try {
    const ajv = new Avj();
    const validate = ajv.compile(JSONSchema);

    const files: string[] = await globPromise(
      `${__dirname}/../data/subjects/**/courses/*.json`
    );

    const JSONCourses = await Promise.all(files.map(file => import(file)));

    JSONCourses.forEach(JSON => {
      const valid = validate(JSON.default);

      if (!valid) {
        console.error(validate.errors);
        process.exit(1);
      }
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();
