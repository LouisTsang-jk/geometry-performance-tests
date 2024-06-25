export const vectorCrossProduct = (p0, p1, p2) => {
  const v0x = p2.x - p1.x,
    v0y = p2.y - p1.y;
  const v1x = p0.x - p1.x,
    v1y = p0.y - p1.y;
  const v2x = p0.x - p2.x,
    v2y = p0.y - p2.y;

  const crossProduct = v0x * v1y - v0y * v1x;
  if (Math.abs(crossProduct) > Number.EPSILON) return false;

  const dot1 = v0x * v1x + v0y * v1y;
  const dot2 = v0x * v2x + v0y * v2y;

  return dot1 >= 0 && dot2 <= 0;
};
