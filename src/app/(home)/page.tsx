import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center text-center flex-1 px-4">
      <h1 className="text-4xl font-extrabold mb-4 tracking-tight">🌲 Growtopia Docs</h1>
      <p className="text-muted-foreground text-lg max-w-lg mb-6">
        Technical documentation and specifications for Growtopia networking, packets, and file formats.
      </p>
      <Link
        href="/docs"
        className="inline-flex items-center justify-center rounded-md bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground shadow transition-colors hover:bg-fd-primary/90"
      >
        Explore Documentation →
      </Link>
    </div>
  );
}
