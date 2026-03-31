import Image from 'next/image';

export default function Hero() {
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          className="w-full h-full object-cover grayscale-[20%]"
          alt="Modern luxury villa with infinity pool at dusk"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXOtDwSA4HxFvjfaNRzUL8fpr9Nztg-aXNQLUAkD9zWHyrvWj2gBCdVgXXNuBuIIQwQ-OGtsKAKzQDpcYe-GL5_Y5p6ge1PoSMg5zEv6ri73PKDV5QXXp318wQwXS5P48NMBLEenj7Er94UJkDZwwRXajUKfmmV67o3dpMXAqJ19OSulkjNoQ_NdsUDV-1ZVtSvK7e05Qr56cMAUBY6pdxmRsvLibvDY_H1gdaqcNZ7QmVtWVlN0bwq-tHZjZXHtPhnmp6_aHDF_c"
          fill
          priority
        />
        <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
      </div>
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <h1 className="font-headline text-5xl md:text-8xl text-white mb-12 tracking-tight leading-none">
          Find Your <br /> <span className="italic font-normal">Masterpiece</span> Home
        </h1>
        {/* Search Bar */}
        <div className="bg-surface-container-lowest p-2 md:p-4 flex flex-col md:flex-row items-center gap-4 max-w-4xl mx-auto shadow-2xl">
          <div className="w-full flex-1 px-4 py-2 text-left border-r border-outline-variant/30">
            <label className="block font-label text-[10px] uppercase tracking-tighter text-outline mb-1">
              Location
            </label>
            <input
              className="w-full bg-transparent border-none p-0 text-primary font-body focus:ring-0 placeholder:text-outline-variant outline-none"
              placeholder="Beverly Hills, CA"
              type="text"
            />
          </div>
          <div className="w-full flex-1 px-4 py-2 text-left border-r border-outline-variant/30">
            <label className="block font-label text-[10px] uppercase tracking-tighter text-outline mb-1">
              Property Type
            </label>
            <select className="w-full bg-transparent border-none p-0 text-primary font-body focus:ring-0 outline-none">
              <option>Modern Estates</option>
              <option>Penthouse</option>
              <option>Coastal Villa</option>
            </select>
          </div>
          <div className="w-full flex-1 px-4 py-2 text-left border-r border-outline-variant/30 hidden md:block">
            <label className="block font-label text-[10px] uppercase tracking-tighter text-outline mb-1">
              Price Range
            </label>
            <input
              className="w-full bg-transparent border-none p-0 text-primary font-body focus:ring-0 placeholder:text-outline-variant outline-none"
              placeholder="$2M - $10M"
              type="text"
            />
          </div>
          <button className="w-full md:w-auto bg-primary text-on-primary px-10 py-4 hover:bg-primary-container transition-colors duration-300 flex items-center justify-center">
            <span className="material-symbols-outlined align-middle mr-2">search</span>
            Explore
          </button>
        </div>
      </div>
    </header>
  );
}
