export function isMobileDevice(): boolean {
  const userAgent = navigator.userAgent || navigator.vendor;
  return /android|iPad|iPhone|iPod/.test(userAgent.toLowerCase());
}

export function isMobileScreen(): boolean {
  return window.innerWidth <= 768;
}
