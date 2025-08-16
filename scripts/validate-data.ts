import fs from 'fs';
import Ajv from 'ajv';
import { IntegritySchema } from '../src/types/integrity';
import schema from '../schema/integrity-test.schema.json';

const ajv = new Ajv();
const validate = ajv.compile(schema);

const rawData = fs.readFileSync('./data/integrity-test.json', 'utf8');
const data = JSON.parse(rawData);

if (!validate(data)) {
  console.error(validate.errors);
  process.exit(1);
}

try {
  IntegritySchema.parse(data);
} catch (error) {
  console.error(error);
  process.exit(1);
}

console.log('Validation passed');