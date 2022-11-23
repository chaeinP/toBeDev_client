export default function Space({
  vertical = true,
  height,
  width,
}: {
  vertical?: boolean;
  height?: string;
  width?: string;
}) {
  return vertical ? (
    <div style={{ height }}></div>
  ) : (
    <div style={{ width }}></div>
  );
}
