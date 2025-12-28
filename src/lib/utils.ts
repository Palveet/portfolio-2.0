export function getImagePath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio-2.0' : ''
  return `${basePath}${path}`
}

