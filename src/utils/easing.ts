const easeInQuad = (t: number) => t * t;

const easeOutQuad = (t: number) => t * (2 - t);

const easeInOutQuad = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

const easeInCubic = (t: number) => t * t * t;

const easeOutCubic = (t: number) => --t * t * t + 1;

export {
  easeInQuad,
  easeOutQuad,
  easeInOutQuad,
  easeInCubic,
  easeOutCubic
}