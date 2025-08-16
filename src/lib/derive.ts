export function deriveTags(placation: string): string[] {
  // Simple derivation
  return placation.split(' ').filter(word => word.length > 5);
}