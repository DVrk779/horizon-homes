import Image from 'next/image';

export default function Curators() {
  return (
    <section className="py-32 px-8 max-w-[1920px] mx-auto overflow-hidden">
      <h2 className="font-headline text-center text-4xl mb-24">The Curators</h2>
      <div className="flex flex-wrap md:flex-nowrap gap-8 justify-center">
        {/* Agent 1 */}
        <div className="w-full md:w-[300px] group">
          <div className="relative overflow-hidden mb-6 aspect-[3/4]">
            <Image className="w-full h-full object-cover filter grayscale group-hover:grayscale-[0%] transition-all duration-500" alt="Professional man in tailored navy suit" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKGize3nhdTT5DRE4GaeKlQ8YQi_VHbrjMj_HDd0ygaU-CSOXA7PNVCocC8mFQeU-CJsEsqLx4x7Ugcytbz4pCs27dt7FSG7rCLWAAcwZVF0zMUQIM6lJ_kDasldrPtSTPXIldys7iFSfwoug-r_jl3Gg_HGx1iqyxa3gdSoYOHI8E7MAD_3CykW6TJZYBlXdEDniuTmkoJGG7dm3N2pBMHlGwhQDOZgv7DtuIyirohUAOOKnv-tl-BDsELgbT35eNwL7nEAtqZfM" fill sizes="300px" />
          </div>
          <h4 className="font-headline text-xl mb-1">Julian Thorne</h4>
          <p className="font-label text-[10px] uppercase tracking-widest text-secondary font-bold">Principal Partner</p>
        </div>
        {/* Agent 2 */}
        <div className="w-full md:w-[300px] group md:mt-12">
          <div className="relative overflow-hidden mb-6 aspect-[3/4]">
            <Image className="w-full h-full object-cover filter grayscale group-hover:grayscale-[0%] transition-all duration-500" alt="Professional woman in white designer blazer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFGIWm6ZiUGcCMnoz-Amjhi3zsIaTKLqG8CLBD-zmJaJz2ufmZudgzA3n_OBz4QeWaoJQUxZqXx_HS08W27KYMd4p8rMFh178CdhtzmDznfeJ4cSadR5CybKdSv3C_QtMD3xj2SQKpqa2zZiuRQxp-VTrmIYEqaVlSL-2QWIV6y01gNb146XxzZ568gPncw3MNRETQfbuGBJ7Xj8aDZZZXRYRm2hCOW2qHHN4VdKlt1HJWiZuGFWsc0Uri7WZ7HQ2fm5_AroA8xLI" fill sizes="300px" />
          </div>
          <h4 className="font-headline text-xl mb-1">Elena Moretti</h4>
          <p className="font-label text-[10px] uppercase tracking-widest text-secondary font-bold">Global Listings Director</p>
        </div>
        {/* Agent 3 */}
        <div className="w-full md:w-[300px] group">
          <div className="relative overflow-hidden mb-6 aspect-[3/4]">
            <Image className="w-full h-full object-cover filter grayscale group-hover:grayscale-[0%] transition-all duration-500" alt="Confident man with modern eyeglasses" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDspaPnmBMjXurYPyzsWDC3kBCMaCmVc-X7_Arh_3AwQoQpP3a4mTsY0LHdcBJ1kR-776ibzAQA48xol1JXCrFBs47LnnNs_4huK6uhF-wO9BHgI1lQVoQ5IlKyW_JRDebmbDNxOpBbcbP4ixVrCUbiKDYgHERGEbs7LB7BNad7CBUz_pQO2mxoGaDs177h_2UKZCZ00M5zmyx4J22Ls1MRD6O16Z0ZxMbdCXqI5b36hcw2JRYrQ0ODPzzmoaVQhULMgxudSODyohM" fill sizes="300px" />
          </div>
          <h4 className="font-headline text-xl mb-1">Marcus Vane</h4>
          <p className="font-label text-[10px] uppercase tracking-widest text-secondary font-bold">Lead Architect Specialist</p>
        </div>
        {/* Agent 4 */}
        <div className="w-full md:w-[300px] group md:mt-12">
          <div className="relative overflow-hidden mb-6 aspect-[3/4]">
            <Image className="w-full h-full object-cover filter grayscale group-hover:grayscale-[0%] transition-all duration-500" alt="Smiling professional woman in office" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxblT2YSGB3xTtAvqryTls5ce59_oUrY43vmjGluANFxAxdy0CWKI_NUdLLL5ir-Nh7Lz8A0hQnlvoXO6efakA8I9xVvVAYCpykpdnYz8HL6pHF-s9-fa-9L_jnajDoKpTAUHF9b3yvTxEidVH8x0KvsdCyGDrXICyUoxsg6Zn-ZsYjONxy2VRiBndid9oT4aSVCTrDDDrVEaWTF-lVhP4o4jrWliYLj0aE4irEUfDStuWmtbRLY8nNNaFxAVKl9vRjBuFHDvWA-M" fill sizes="300px" />
          </div>
          <h4 className="font-headline text-xl mb-1">Sophia Chen</h4>
          <p className="font-label text-[10px] uppercase tracking-widest text-secondary font-bold">Investment Advisory</p>
        </div>
      </div>
    </section>
  );
}
