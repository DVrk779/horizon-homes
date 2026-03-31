import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { featuredPropertiesQuery } from '@/sanity/lib/queries';
import Image from 'next/image';

interface Property {
  _id: string;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  mainImage?: any;
  staticImage?: string;
  [key: string]: any;
}

export default async function FeaturedListings({ properties: initialProperties }: { properties?: Property[] }) {
  let properties = initialProperties;
  
  if (!properties) {
    try {
      properties = await client.fetch(featuredPropertiesQuery);
    } catch (error) {
      console.error("Failed to fetch properties from Sanity:", error);
    }
  }

  // Fallback to static data if no properties exist (for demonstration before CMS is populated)
  if (!properties || properties.length === 0) {
    properties = [
      {
        _id: '1',
        title: 'The Alabaster Pavilion',
        location: 'Malibu, California',
        price: 12450000,
        bedrooms: 6,
        bathrooms: 8,
        sqft: 8400,
        mainImage: null,
        staticImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuijEzEBeYcmCyuDotaprzsT5pBhXBzwznmX5uyP_S-jr3VgwCYA-BmA_ABRjIS_m6xsvNdw9S_OTxtYV1dCPH2Cvz5sTQmc7810vvqKRHluPO6B8luBXkbkSw7h4qZ-jh-i-7oIGTI5jO5oqaOa05yhFv8wcnUvul0dEPaiQ3ic2gKyOCbrcJV7bEfrdBthQUWRZPCgJ97lDuA6rtWyhpBJpRRHpompPpAfAgXJ2LzCe--p89wO2pPqw0R_a6Lo4RYlGVUujxosc'
      },
      {
        _id: '2',
        title: 'Emerald Sanctuary',
        location: 'Aspen, Colorado',
        price: 8900000,
        bedrooms: 5,
        bathrooms: 5,
        sqft: 6200,
        mainImage: null,
        staticImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWygvzKVGVyKaFhq3_3r03tK1lOnZgK3nC1k5ybHwW3EQR7g27RqQIKHdXRBS0pO2gU3F0Yz8UCNy63a2BmSoY8fxfOHo0tFZb8FZ4QfAJSEwxycKZ05TtNJLLOsEoScBoBx9d83bDFhykEQXSvAIytGCYR12dJk7Y9UUGaltz0PZwV8bmCdHGMn1t3i9IH5o1-GHapiGAPLd95dC7ePnXa_fpXT4usyI7X8fsSNE5NuT2enk_FPGw0tz2RgKWavYXZzuPrAPKOP4'
      },
      {
        _id: '3',
        title: 'The Monolith House',
        location: 'Austin, Texas',
        price: 4200000,
        bedrooms: 4,
        bathrooms: 4,
        sqft: 4800,
        mainImage: null,
        staticImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDV7zlCeHfXKSYsPku5y1rzJwLW88bQazRyJrO7cKIx4QV6tTtpPlS4cvOvK1MhWogD7ZOotjZ4TyCDVqTAzbo0k22TehWJ0xPmN6_cqhZrMnpL5XHWGwURfczs9LAQKO-Ui53vwp2CRVUp0naj7npbLr_NyI50pqQWwVet_hrE2EAfAJ1Z6xB2vxJ9AMHKnbWiH7uigbHPcFWSL7P5rKzMbfFHlPIWNK2avl_dWvhZQe68ILz3e8FRncavmurT7HiWbobumohafdc'
      }
    ];
  }

  return (
    <section className="py-32 px-8 max-w-[1920px] mx-auto bg-surface">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20">
        <div className="max-w-2xl">
          <h2 className="font-label text-xs uppercase tracking-[0.3em] text-secondary font-semibold mb-4 underline underline-offset-8">Featured Collection</h2>
          <h3 className="font-headline text-4xl md:text-6xl text-primary leading-tight">Architecture that defines the horizon.</h3>
        </div>
        <a className="mt-8 md:mt-0 font-label text-sm uppercase tracking-widest border-b border-primary pb-2 hover:text-secondary hover:border-secondary transition-all" href="#">View All Estates</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
        {properties.map((property: Property, index: number) => {
          const image = property.mainImage ? urlForImage(property.mainImage)?.url() : property.staticImage;
          
          return (
            <div key={property._id} className={`group cursor-pointer perspective-card ${index === 1 ? 'md:mt-16' : ''}`}>
              <div className="relative overflow-hidden aspect-[4/5] mb-8">
                <Image 
                  className="w-full h-full object-cover transition-transform duration-700" 
                  alt={property.title} 
                  src={image || ''} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {index === 0 && (
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-1">
                    <span className="font-label text-[10px] uppercase tracking-widest font-semibold">New Listing</span>
                  </div>
                )}
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-headline text-2xl text-primary mb-2">{property.title}</h4>
                  <p className="font-body text-outline mb-4">{property.location}</p>
                </div>
                <span className="font-label text-lg font-semibold text-primary">
                  ${property.price?.toLocaleString()}
                </span>
              </div>
              <div className="flex gap-8 border-t border-outline-variant/20 pt-6 mt-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-outline">bed</span>
                  <span className="font-label text-xs">{property.bedrooms}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-outline">bathtub</span>
                  <span className="font-label text-xs">{property.bathrooms}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-outline">straighten</span>
                  <span className="font-label text-xs">{property.sqft?.toLocaleString()} SQ FT</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
