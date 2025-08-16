import type { Observation } from '../types/integrity';

export interface DerivedObservation extends Observation {
  tags: string[];
}

export function deriveTags(obs: Observation): string[] {
  const tags: string[] = [];
  if (obs.placation) tags.push('placation');
  if (obs.accountability) tags.push('accountability');
  if (obs.solutioning) tags.push('solutioning');
  return tags;
}

export function withDerivedTags(obs: Observation): DerivedObservation {
  return { ...obs, tags: deriveTags(obs) };
}
