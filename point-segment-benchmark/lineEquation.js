export const lineEquation = (p0, p1, p2) => {
  const distanceToLine = (x0, y0, x1, y1, x2, y2) => {
    const A = y2 - y1;
    const B = x1 - x2;
    const C = x2 * y1 - x1 * y2;
    return Math.abs(A * x0 + B * y0 + C) / Math.sqrt(A * A + B * B);
  };

  const dist = distanceToLine(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y);
  if (dist > Number.EPSILON) return false;

  const minX = Math.min(p1.x, p2.x),
    maxX = Math.max(p1.x, p2.x);
  const minY = Math.min(p1.y, p2.y),
    maxY = Math.max(p1.y, p2.y);

  return p0.x >= minX && p0.x <= maxX && p0.y >= minY && p0.y <= maxY;
};
