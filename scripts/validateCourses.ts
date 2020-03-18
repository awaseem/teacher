import Avj from "ajv";
import JSONSchema from "../JSONSchema/schema.json";
import CourseTest from "../data/subjects/javascript/courses/numbers.json";

try {
  const ajv = new Avj();

  const validate = ajv.compile(JSONSchema);
  const valid = validate(CourseTest);

  if (!valid) {
    console.error(validate.errors);
    process.exit(1);
  }
} catch (error) {
  console.error(error);
  process.exit(1);
}
