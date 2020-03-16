import Avj from "ajv";
import betterAjvErrors from "better-ajv-errors";
import JSONSchema from "../JSONSchema/schema.json";
import CourseTest from "../data/subjects/javascript/courses/numbers.json";

try {
  const ajv = new Avj();

  const validate = ajv.compile(JSONSchema);
  const valid = validate(CourseTest);

  if (!valid) {
    const output = betterAjvErrors(JSONSchema, CourseTest, validate.errors);
    console.error(validate.errors);
    console.error(output);
  }
} catch (error) {
  console.error(error);
}
