export function formatOutcome(outcome: string): string {
  return outcome.toUpperCase();
}

export function generateAltText(model: string): string {
  return `Screenshot of ${model} response`;
}