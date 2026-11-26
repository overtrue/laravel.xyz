import profiles from './profiles.json';

type Profile = { github: string; site?: string; x?: string };
const directory: Record<string, Profile> = profiles;

export function profileFor(handle: string) {
  const id = handle.toLowerCase();
  const profile: Profile = directory[id] ?? { github:handle };
  return { ...profile, avatar:directory[id] ? '/people/' + id + '.webp' : undefined };
}
