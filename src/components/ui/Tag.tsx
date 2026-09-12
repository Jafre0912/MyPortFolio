export default function Tag({ children }: { children: string }) {
  return (
    <span className="font-mono text-xs px-2 py-1 rounded border border-line text-slate-muted bg-white">
      {children}
    </span>
  );
}
