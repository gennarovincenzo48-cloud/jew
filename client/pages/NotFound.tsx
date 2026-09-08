import { ArrowLeft, ArrowUpRight, Compass } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="relative flex min-h-screen items-center overflow-hidden bg-ink px-5 py-12 text-cream sm:px-10">
      <div className="pointer-events-none absolute -right-24 top-1/2 size-[28rem] -translate-y-1/2 rounded-full border border-gold/20 sm:size-[42rem]" />
      <div className="pointer-events-none absolute -right-12 top-1/2 size-[18rem] -translate-y-1/2 rounded-full border border-gold/10 sm:size-[30rem]" />
      <div className="relative mx-auto w-full max-w-[1400px]">
        <header className="absolute left-0 right-0 top-0 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-cream" aria-label="Jewelluxe Co home">
            <span className="flex size-9 items-center justify-center border border-gold/70 font-display text-2xl tracking-[-0.06em] text-gold">J</span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em]">Jewelluxe Co</span>
          </Link>
          <span className="text-[9px] uppercase tracking-[0.22em] text-cream/35">Archive / 404</span>
        </header>
        <section className="flex min-h-[80vh] flex-col justify-center pt-16 sm:max-w-2xl">
          <div className="mb-8 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-gold"><Compass size={15} strokeWidth={1.5} /> A little off course</div>
          <p className="font-display text-[clamp(7rem,25vw,15rem)] leading-[0.72] tracking-[-0.1em] text-gold/90">404</p>
          <h1 className="mt-10 max-w-xl font-display text-5xl leading-[0.92] tracking-[-0.06em] sm:text-7xl">This piece has left the <em className="font-editorial font-normal text-gold">collection.</em></h1>
          <p className="mt-7 max-w-md text-sm leading-7 text-cream/55">The page you are looking for may have been archived, moved, or never made it into the edit.</p>
          <div className="mt-10 flex flex-wrap items-center gap-6"><Link to="/" className="group flex min-h-11 items-center gap-3 border-b border-gold pb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">Return to the collection <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link><Link to="/" className="flex min-h-11 items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-cream/55 transition-colors hover:text-cream"><ArrowLeft size={14} /> Go back home</Link></div>
          <p className="mt-20 text-[9px] uppercase tracking-[0.22em] text-cream/25">Requested path: {location.pathname}</p>
        </section>
      </div>
    </main>
  );
};

export default NotFound;
