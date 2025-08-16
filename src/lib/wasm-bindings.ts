let initialized = false;

export async function init(): Promise<void> {
  if (initialized) return;
  initialized = true;
}

export function isInitialized(): boolean {
  return initialized;
}
