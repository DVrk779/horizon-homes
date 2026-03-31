export default function Testimonials() {
  return (
    <section className="py-32 px-8 bg-primary text-on-primary">
      <div className="max-w-4xl mx-auto text-center">
        <span className="material-symbols-outlined text-secondary text-6xl mb-12 block mx-auto" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
        <blockquote className="font-headline text-3xl md:text-5xl italic leading-tight mb-12">
          &quot;Horizon Homes doesn&apos;t just sell property; they curate the backdrop for your life&apos;s greatest moments. Their eye for architecture is unparalleled.&quot;
        </blockquote>
        <cite className="not-italic">
          <span className="block font-label text-sm uppercase tracking-widest text-secondary mb-2">Alistair Graham</span>
          <span className="font-body text-on-primary-container text-xs">Architectural Digest Contributor</span>
        </cite>
      </div>
    </section>
  );
}
