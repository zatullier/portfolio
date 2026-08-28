/** Prefix an internal path with Astro's configured base path. */
export function withBase(path = '/') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const normalized = path.startsWith('/') ? path : `/${path}`;

  return normalized === '/' ? `${base}/` : `${base}${normalized}`;
}

export function isActivePath(currentPath: string, targetPath: string) {
  const target = withBase(targetPath);

  if (targetPath === '/') {
    return currentPath === target;
  }

  return currentPath === target || currentPath.startsWith(`${target.replace(/\/$/, '')}/`);
}
