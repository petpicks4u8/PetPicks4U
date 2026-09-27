export default function Loading() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 pt-12 sm:px-8" aria-busy="true" aria-label="Loading">
      <div className="img-skeleton h-10 w-2/3 max-w-md rounded-full" />
      <div className="img-skeleton mt-4 h-5 w-1/2 max-w-sm rounded-full" />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className="img-skeleton aspect-[4/5] rounded-[var(--radius-card)]" />
        ))}
      </div>
    </div>
  );
}
