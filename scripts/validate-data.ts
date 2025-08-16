import { readFileSync } from 'node:fs';
import { IntegritySchema } from '../src/types/integrity';

const raw = readFileSync('data/integrity-test.json', 'utf-8');
const parsed = JSON.parse(raw);
IntegritySchema.parse(parsed);
console.log('Data valid');
