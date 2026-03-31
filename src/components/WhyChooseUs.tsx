export default function WhyChooseUs() {
  return (
    <section className="py-32 bg-surface-container-low px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          <div className="md:col-span-5 flex flex-col justify-center">
            <h2 className="font-headline text-5xl text-primary mb-8 leading-tight">Where Vision <br /> Meets Value.</h2>
            <p className="font-body text-outline-variant text-lg mb-12 max-w-md">Our firm operates as a curated gallery, connecting discerning collectors with the world&apos;s most significant residential architectures.</p>
          </div>
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-surface-container-lowest p-12 flex flex-col justify-between aspect-square">
              <span className="material-symbols-outlined text-secondary text-4xl" style={{ fontVariationSettings: "'wght' 100" }}>verified_user</span>
              <div>
                <h4 className="font-headline text-xl mb-4">Expert Curators</h4>
                <p className="font-body text-sm text-outline leading-relaxed">Agents trained in both architectural history and market dynamics.</p>
              </div>
            </div>
            <div className="bg-primary p-12 flex flex-col justify-between aspect-square text-on-primary">
              <span className="material-symbols-outlined text-secondary text-4xl" style={{ fontVariationSettings: "'wght' 100" }}>lock</span>
              <div>
                <h4 className="font-headline text-xl mb-4 text-white">Off-Market Exclusivity</h4>
                <p className="font-body text-sm text-on-primary-container leading-relaxed">Access to properties never listed on public registries.</p>
              </div>
            </div>
            <div className="bg-secondary p-12 flex flex-col justify-between aspect-square text-white sm:translate-y-8">
              <span className="material-symbols-outlined text-white text-4xl" style={{ fontVariationSettings: "'wght' 100" }}>sync_alt</span>
              <div>
                <h4 className="font-headline text-xl mb-4">Seamless Acquisitions</h4>
                <p className="font-body text-sm text-secondary-fixed leading-relaxed">White-glove concierge service from initial view to final title.</p>
              </div>
            </div>
            <div className="bg-surface-container-highest p-12 flex flex-col justify-between aspect-square sm:translate-y-8">
              <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'wght' 100" }}>insights</span>
              <div>
                <h4 className="font-headline text-xl mb-4">Data Precision</h4>
                <p className="font-body text-sm text-outline leading-relaxed">Real-time valuation models built on proprietary global data.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
