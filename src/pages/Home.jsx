import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden bg-surface-dim">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Gym Environment" 
            className="w-full h-full object-cover opacity-30 grayscale" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFZOc_7mqfPa_2_N5rNMZCpV9UCldD7lhVlQDXcjFNlHl4rUSAbJpEo0ih6BNFTjImBZdgs8e2oSkPt5QblwE9PFZExwymT70MiqDz8rjA1fcmes0WFgoE9vPIZhd-vonSX9FpRKwxAoM4Z8oWGS28BXb6DC5jcwU-3tVSI2noO26zUz3FSnpnIobE33Kyfh1a1DPlkSdkpILevD-WKep6LfdUKLAGHXRisbF1v--Cl44yp8IKytzZeEB3ouXkI9XxcicS1Bey8miq"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-dim via-surface-dim/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-8 z-10 grid grid-cols-12">
          <div className="col-span-12 md:col-span-7">
            <h1 className="font-headline font-black text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter uppercase text-on-surface mb-8">
              POWERED BY <br/>
              <span className="text-primary-container bg-clip-text text-transparent bg-gradient-to-br from-primary to-primary-container">KINETIC</span>
            </h1>
            <p className="text-secondary-fixed text-lg md:text-xl max-w-xl mb-12 font-medium leading-relaxed">
              Precision-engineered nutrition for those who refuse to compromise. Maximum bioavailability. Pharmaceutical grade purity.
            </p>
            <div className="flex gap-4">
              <Link to="/catalog" className="bg-gradient-to-br from-primary to-primary-container text-on-primary-fixed font-headline font-black uppercase px-10 py-5 rounded-md tracking-widest text-sm hover:scale-105 transition-transform active:scale-95 text-center">
                Shop All
              </Link>
              <button className="border border-outline-variant/30 text-on-surface font-headline font-black uppercase px-10 py-5 rounded-md tracking-widest text-sm hover:bg-surface-container transition-colors">
                The Science
              </button>
            </div>
          </div>
          
          <div className="hidden md:block col-span-5 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-primary/5 blur-[120px] rounded-full"></div>
            <img 
              alt="Kinetic Supplement Container" 
              className="relative z-10 w-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.8)]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfb_tNgFN-z-q2RjklKYGBNQsRw0zLXijmhgo8Ln1E5lZhAo0ypYEu04Tj9fNwV0YUQe10odQA57FpEAnkCp0r5PbsNXs8mxcYMBEN9g6WNJOGVQDzu1lhiDOqonOs2fh-YHap9TNjcjK3m-dBwZYrwt5HtGU8iAn8M5t9Fn3LaKwqqS9cE5j6AQ5YBt_6gVajAHUP6ks5K5vfGC9ChZkl60RX-TPiYYE6P9a8sp3B6n7WCl-SXzquEaURIphuvOAmxEX3VEyl-jNC"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-surface-container-low py-32">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-6 group">
              <div className="text-primary-container font-headline font-black text-5xl opacity-20 group-hover:opacity-100 transition-opacity">01</div>
              <h3 className="font-headline font-black text-2xl uppercase tracking-tight">Engineered for Performance</h3>
              <p className="text-on-surface-variant leading-relaxed">Optimized molecular structures designed to trigger immediate ATP synthesis and muscle fiber recruitment.</p>
            </div>
            <div className="space-y-6 group">
              <div className="text-primary-container font-headline font-black text-5xl opacity-20 group-hover:opacity-100 transition-opacity">02</div>
              <h3 className="font-headline font-black text-2xl uppercase tracking-tight">Lab-Tested Purity</h3>
              <p className="text-on-surface-variant leading-relaxed">Every batch undergoes rigorous third-party chromatography to ensure zero contaminants and label accuracy.</p>
            </div>
            <div className="space-y-6 group">
              <div className="text-primary-container font-headline font-black text-5xl opacity-20 group-hover:opacity-100 transition-opacity">03</div>
              <h3 className="font-headline font-black text-2xl uppercase tracking-tight">Real Results</h3>
              <p className="text-on-surface-variant leading-relaxed">Clinically backed dosages that translate into measurable strength gains and accelerated metabolic recovery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-32 bg-surface">
        <div className="container mx-auto px-8">
          <div className="mb-16">
            <span className="text-primary-container font-headline font-black uppercase tracking-[0.3em] text-xs">Categories</span>
            <h2 className="font-headline font-black text-5xl uppercase tracking-tighter mt-4">Precision Selection</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category: Protein */}
            <div className="relative h-[600px] group overflow-hidden bg-surface-container-high rounded-sm">
              <img 
                alt="Protein Category" 
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:scale-110 group-hover:grayscale-0 transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHZD3HVVaWMk8ALqlkvmpnSWd2RBiUP-i9M0Qut7sUkPkHZQP13ml6lUu3hYiStLk4cd83zEJNBq6kCVEY9bOXpc_flwh2pGSzpQRTTiwfsyGNEJOT-QpHsHj9e1V9hZdkEPLzelIBLgFk7T3rgq3n8wXwqvEVpPhoQjY3CoA0fk3VrXw0Vkd21NmcItf-B8az2wtAFwGfWVznvBHttY3YqEIaMDTKZM4JghOkzPJY7KdUtaRrRvvFRseC3EoyZGM5SuDdMI9VjRmL"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-12 left-12 right-12">
                <h4 className="font-headline font-black text-4xl uppercase tracking-tighter mb-4">Protein</h4>
                <p className="text-secondary-fixed/70 mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">Whey Isolate & Vegan blends engineered for hyper-fast absorption.</p>
                <Link to="/catalog" className="bg-white text-black font-headline font-black uppercase text-xs px-6 py-3 tracking-widest hover:bg-primary-container transition-colors inline-block">Explore</Link>
              </div>
            </div>
            
            {/* Category: Strength */}
            <div className="relative h-[600px] group overflow-hidden bg-surface-container-high rounded-sm">
              <img 
                alt="Strength Category" 
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:scale-110 group-hover:grayscale-0 transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaF14EkNuLRvlYTVszJdJy37uFq9CyqYcwBUKT_jH0_N1wO_vzjupFzNMDPtgRVH4YgRMQ6bUUM4dkNfe6rfTpoXCLkb7GWXByhwQ3rsp0WgR1Qx--WjlCynukzNCrXJIxCJny6C1Auwt5HvFstVfQcdQIURlkuSUTZUJrRg9Wr9PndTd62aCNppjXGlK8EImN9fW5jBM1aOyOm1E5sD7dFv14SHnL_wVoJHU2ZjABQOy3vCbd5xiRcGHTX8njd9L1I079_10hEUFn"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-12 left-12 right-12">
                <h4 className="font-headline font-black text-4xl uppercase tracking-tighter mb-4">Strength</h4>
                <p className="text-secondary-fixed/70 mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">Creatine Monohydrate & Pre-Workouts built for absolute power output.</p>
                <Link to="/catalog" className="bg-white text-black font-headline font-black uppercase text-xs px-6 py-3 tracking-widest hover:bg-primary-container transition-colors inline-block">Explore</Link>
              </div>
            </div>

            {/* Category: Recovery */}
            <div className="relative h-[600px] group overflow-hidden bg-surface-container-high rounded-sm">
              <img 
                alt="Recovery Category" 
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:scale-110 group-hover:grayscale-0 transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbV9XOnkiSyjuSLNMSRXdiENpIV-CdyRoyavcMaKSPYbmBXU3Hf_YH6JwYRzTjYS8dPvz4naA7aTAqPqZH4KoPgAfkdc8hi1u8_9-IQlG8kM2PXVrg3q0XS-MWawEKi3bf6ipkIy2zPvRN-HZfcareIfsK2f3pfgq6GXP_ggYPPqF25CFNfxV6QY3cRt2YYpaOYF2iR2IlVtE5j9GdeIB9amicg0SqFdJCm7BC646jcxkguAV2o8l3I_vPyTGQvXBvQvmXdngOOb-V"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-12 left-12 right-12">
                <h4 className="font-headline font-black text-4xl uppercase tracking-tighter mb-4">Recovery</h4>
                <p className="text-secondary-fixed/70 mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">EAAs & Glutamine to minimize downtime and muscle soreness.</p>
                <Link to="/catalog" className="bg-white text-black font-headline font-black uppercase text-xs px-6 py-3 tracking-widest hover:bg-primary-container transition-colors inline-block">Explore</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Carousel Section */}
      <section className="py-32 bg-surface-container-highest">
        <div className="container mx-auto px-8">
          <div className="mb-20">
            <span className="text-primary-container font-headline font-black uppercase tracking-[0.3em] text-xs">Best Sellers</span>
            <h2 className="font-headline font-black text-5xl uppercase tracking-tighter mt-4">Top Formulations</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { id: 'whey', name: 'Kinetic Whey Isolate', price: '59.99', tags: ['25g Protein', 'Zero Sugar'], img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkEDTMzhZj0Bj7PPOYKiYL2FQjK3-NCX6_YnIP0xdvW4YjIcZJ-PhLujH4fk6a6YZZxPzjoRh8cAhhyko2Iz17XRufcgvfzKJhDHsuDoUozf8f6Uj0HMJeLUKulthl_t5RnY7Q1r7e6eTKre3m9rssqlesJaWCQu-NwOpqhxzFPdU0QOZsIf9i9DAVrGMFUGLG9NIK604IE0hEiQxu8TfTqcjsSfkF8-cSckmK7TMlaaiTVJcjzjED7PgINEADF9djHF5PVuHggr93' },
              { id: 'ignite', name: 'Kinetic Ignite Pre', price: '44.99', tags: ['350mg Caffeine', 'Beta-Alanine'], img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcmtXdjB-QAFbbyUnYdTtRvp8M1473i6o3NSdmwnltQ3UX90D2YXrvZXF-KXeC6trvEHzfMPz0pJJ8DF0Beb0NBqrbnlM-DrIB4bL2WE4FocUwoupM7G61IKUVTHKIGYGbVoMU9z7sMQu1vnmtChb22WIz1giDmxmT1IB8MblSbq4klKIe7XIY_7sNmclURO2KKfe2Sq7ebw43mk-90leVHe-vIljrRntebvxsFNVitihYTBV3YdRlx8IYsM0woHNqW-JNL4uhIp8S' },
              { id: 'amino', name: 'Essential EAA+', price: '34.99', tags: ['9 Essential Aminos', 'Hydration Complex'], img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpUjfW2FVqTBJGaAZca-QnRPxX2biz5utskmfNTUop0V8NYAk1qNtH0xbWWhfwjAjFoJCRpj6HVyH8ZRYJpXL_-YUwIXARAs__FxZMRtODhAwjcdvWe0xmH8AsM42qRYmpYkcbFhWSwJoT9_VlA4vPPSPEWuE_yMgddrVv6yBnTLgzLUJt0mda2CfxRfh2-Ga2Qn1-xt4XokM2avMSVsj0CI-1RxUDrF_Na_h2JsXqhQPFSkBFKdT9kQYKUdIoRdpMIRT7PJe6iWZe' }
            ].map((product) => (
              <div key={product.id} className="bg-surface-container-high p-8 rounded-sm relative group">
                <div className="h-80 w-full mb-8 relative">
                  <img 
                    alt={product.name} 
                    className="h-full w-full object-contain -translate-y-4 group-hover:-translate-y-8 transition-transform duration-500" 
                    src={product.img} 
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-headline font-black text-2xl uppercase">{product.name}</h3>
                    <span className="text-primary-container font-headline font-bold text-xl">${product.price}</span>
                  </div>
                  <div className="flex gap-2">
                    {product.tags.map(tag => (
                      <span key={tag} className="bg-zinc-800 text-zinc-400 text-[10px] font-black uppercase px-2 py-1 tracking-widest">{tag}</span>
                    ))}
                  </div>
                  <Link to={`/product/${product.id}`} className="block w-full bg-gradient-to-br from-primary to-primary-container text-on-primary-fixed font-headline font-black uppercase py-4 mt-6 tracking-widest text-xs hover:opacity-90 active:scale-95 transition-all text-center">
                    View Product
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
