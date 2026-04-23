/**
 * Splits `**like this**` into <strong> for about copy.
 */
export function RichAbout({ text }: { text: string }) {
  const paragraphs = text.trim().split("\n\n");
  return (
    <div className="space-y-4 text-sm leading-relaxed text-slate-800 sm:text-base sm:leading-[1.7]">
      {paragraphs.map((para, i) => (
        <p key={i} className="m-0">
          <LineWithBold line={para} />
        </p>
      ))}
    </div>
  );
}

function LineWithBold({ line }: { line: string }) {
  const parts = line.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, j) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={j} className="font-semibold text-navy-900">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <span key={j}>{part}</span>;
      })}
    </>
  );
}
