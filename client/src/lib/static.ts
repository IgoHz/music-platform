
export function formatStaticResourcePath(path: string) {
  return process.env.NEXT_PUBLIC_BACKEND_URL + path;
}