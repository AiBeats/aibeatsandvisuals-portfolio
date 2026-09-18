import { useState } from 'react';

type Video = {
  id: string;
  title: string;
  label: string;
};

const featured: Video = {
  id: 'qU71NpfEztk',
  title: 'Don’t Make Me Choose',
  label: 'Featured film',
};

const transmissions: Video[] = [
  { id: 'MXTvc1xqwgc', title: 'It’s Not Okay', label: 'Music film' },
  { id: 'aLPugJ4Ollg', title: 'Speak Up', label: 'Harmony / ABV' },
  { id: 'RaiAYly03Ec', title: 'Solo Hearts', label: 'Music film' },
];

function FilmPlayer({ video, featured = false }: { video: Video; featured?: boolean }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className={featured ? 'aspect-video border border-border bg-black' : 'aspect-video bg-black'}>
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className={`group relative block w-full overflow-hidden bg-black text-left ${featured ? 'aspect-video border border-border' : 'aspect-[16/10]'}`}
      aria-label={`Play ${video.title}`}
    >
      <img
        className="h-full w-full object-cover grayscale contrast-125 brightness-75 transition duration-700 group-hover:scale-[1.03] group-hover:grayscale-0 group-hover:brightness-90"
        src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
        alt={`Still from ${video.title}, an ABV music film`}
      />
      <span className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="border border-accent bg-background/70 px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-accent backdrop-blur-sm transition group-hover:bg-accent group-hover:text-background">Play <b className="ml-2">▶</b></span>
      </span>
      {!featured && <span className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.18em] text-text-primary">{video.label}</span>}
    </button>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-background text-text-primary selection:bg-accent selection:text-background">
      <div className="grain-overlay" aria-hidden="true" />
      <header className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12">
        <a href="#top" className="text-xl font-black tracking-tighter text-accent">ABV<span className="text-text-primary">.</span></a>
        <p className="hidden text-xs uppercase tracking-[0.22em] text-text-muted sm:block">AI Beats And Visuals</p>
        <a className="border-b border-accent pb-1 text-xs uppercase tracking-[0.16em] text-text-primary hover:text-accent" href="https://www.youtube.com/@AIBeatsAndVisuals" target="_blank" rel="noreferrer">YouTube ↗</a>
      </header>

      <section id="top" className="relative flex min-h-[72svh] items-end overflow-hidden border-b border-border px-6 pb-14 pt-24 md:min-h-[78svh] md:px-12 md:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_76%_42%,rgba(0,229,255,.15),transparent_42%),linear-gradient(120deg,#080b0d_12%,#0c1719_55%,#07090a_100%)]" />
        <div className="relative max-w-5xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-accent">Music · Film · Transmission</p>
          <h1 className="max-w-4xl text-5xl font-black uppercase leading-[.88] tracking-[-.07em] sm:text-7xl md:text-9xl">We didn’t invent this universe.<br />We remembered it.</h1>
          <a href="#featured" className="mt-10 inline-flex border-b border-accent pb-2 text-sm font-bold uppercase tracking-[0.2em] text-text-primary hover:text-accent">Watch the latest film ↓</a>
        </div>
      </section>

      <section id="featured" className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-7 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-accent">{featured.label}</p>
              <h2 className="text-4xl font-black uppercase tracking-[-.05em] md:text-6xl">{featured.title}</h2>
            </div>
            <p className="hidden max-w-xs text-right text-sm leading-6 text-text-muted md:block">Press play when you are ready. Sound stays off until you choose it.</p>
          </div>
          <FilmPlayer video={featured} featured />
          <p className="mt-4 text-xs uppercase tracking-[0.16em] text-text-muted md:hidden">Sound stays off until you choose it.</p>
        </div>
      </section>

      <section className="border-y border-border bg-surface px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-accent">Start here</p>
          <h2 className="max-w-xl text-4xl font-black uppercase leading-[.9] tracking-[-.05em] md:text-6xl">The work is the archive.</h2>
          <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
            {transmissions.map((video) => (
              <article key={video.id} className="bg-background p-4">
                <FilmPlayer video={video} />
                <h3 className="mt-5 text-xl font-bold uppercase tracking-tight">{video.title}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-text-muted">{video.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 text-center md:px-12 md:py-28">
        <p className="mx-auto max-w-xl text-lg leading-8 text-text-muted">ABV is a home for music, visual stories, and the work still taking shape.</p>
        <a className="mt-8 inline-flex border-b border-accent pb-2 text-sm font-bold uppercase tracking-[0.2em] text-accent hover:text-text-primary" href="https://www.youtube.com/@AIBeatsAndVisuals" target="_blank" rel="noreferrer">Explore the channel ↗</a>
      </section>

      <footer className="flex flex-col gap-3 border-t border-border px-6 py-8 text-xs uppercase tracking-[0.16em] text-text-muted sm:flex-row sm:items-center sm:justify-between md:px-12">
        <p>ABV / AI Beats And Visuals</p>
        <a className="hover:text-accent" href="mailto:aibeatsandvisuals@gmail.com">aibeatsandvisuals@gmail.com</a>
      </footer>
    </main>
  );
}
