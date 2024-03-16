export default function Option({
  children,
  onClick,
  style,
}: {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  style: React.CSSProperties | undefined;
}) {
  return (
    <div
      className="glass flex w-full items-center  justify-start gap-2 rounded-xl p-3"
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  );
}
