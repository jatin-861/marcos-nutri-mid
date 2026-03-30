import { Link } from 'react-router-dom'

const Layout = ({ children }) => {
  return (
    <div className="flex">
      {/* SideNavBar (Desktop Only) */}
      <aside className="fixed left-0 top-16 h-[calc(100vh-64px)] w-64 bg-zinc-900 border-r border-zinc-800 overflow-y-auto hidden md:block z-40">
        <div className="p-8">
          <div className="mb-10">
            <h2 className="font-headline font-bold uppercase tracking-widest text-[10px] text-zinc-500 mb-2">REFINE SEARCH</h2>
            <p className="text-[11px] text-zinc-600 font-medium">Precision selection</p>
          </div>
          <nav className="space-y-2">
            <button className="w-full flex items-center gap-3 bg-zinc-800 text-[#D4FF00] px-4 py-3 rounded-md font-headline font-bold uppercase tracking-widest text-[10px] hover:translate-x-1 transition-transform active:opacity-80">
              <span className="material-symbols-outlined">tune</span>
              <span>Filters</span>
            </button>
            <button className="w-full flex items-center gap-3 text-zinc-500 px-4 py-3 hover:bg-zinc-800/50 font-headline font-bold uppercase tracking-widest text-[10px] hover:translate-x-1 transition-transform active:opacity-80">
              <span className="material-symbols-outlined">payments</span>
              <span>Price Range</span>
            </button>
            <button className="w-full flex items-center gap-3 text-zinc-500 px-4 py-3 hover:bg-zinc-800/50 font-headline font-bold uppercase tracking-widest text-[10px] hover:translate-x-1 transition-transform active:opacity-80">
              <span className="material-symbols-outlined">science</span>
              <span>Ingredients</span>
            </button>
            <button className="w-full flex items-center gap-3 text-zinc-500 px-4 py-3 hover:bg-zinc-800/50 font-headline font-bold uppercase tracking-widest text-[10px] hover:translate-x-1 transition-transform active:opacity-80">
              <span className="material-symbols-outlined">fitness_center</span>
              <span>Goal</span>
            </button>
            <button className="w-full flex items-center gap-3 text-zinc-500 px-4 py-3 hover:bg-zinc-800/50 font-headline font-bold uppercase tracking-widest text-[10px] hover:translate-x-1 transition-transform active:opacity-80">
              <span className="material-symbols-outlined">verified</span>
              <span>Brand</span>
            </button>
          </nav>
          <div className="mt-12 space-y-8">
            <div>
              <h3 className="font-headline font-bold uppercase tracking-widest text-[10px] text-zinc-400 mb-4">Categories</h3>
              <div className="space-y-3">
                {['Protein', 'Amino Acids', 'Recovery'].map(cat => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="rounded-sm bg-zinc-800 border-zinc-700 text-primary focus:ring-primary" defaultChecked={cat === 'Protein'} />
                    <span className="text-xs text-zinc-400 group-hover:text-zinc-100">{cat}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </aside>
      <div className="md:ml-64 w-full">
        {children}
      </div>
    </div>
  )
}

const Catalog = () => {
  const products = [
    { id: 'protein-choc', name: 'Kinetic Whey (Chocolate)', price: 64.00, rating: 4.9, tags: ['25G Protein', '5.5G BCAA'], img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzjp7gv9LB-ubbe8Bkl45NoQyrePYkoJh12cYc2BnJ-r23_MU_lStWEZ3SYP5AYqXZreKLqWmSwa2MMw-eoyvkcgk_JQdxd91-kPJDD8kRVO5gRh30OtNvUmaREntedaljCFCIsA-5pSp8LsfqVWfe5Ft5-cT1e1Am9ob5W-zYVuQkEtjGPfI-eXWGjLUZkyOrJU2jr5cEZrZNrP0_cILsKWe50EsxPH4tjCO7xSPTS1ya16TfOj3_WVA4H75ujlj2eRXBEASv8WWH' },
    { id: 'protein-vanilla', name: 'Kinetic Whey (Vanilla)', price: 64.00, rating: 4.8, tags: ['25G Protein', 'Isolate Blend'], img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwdoxQoFDFW1b7Q4PiymaPtFjTyIvyFS7j5pUt86zvwaP62pN7aCjgzcfVaZx4nkouiU580_N10VvFdul9hImfJke-ehX5zFet6AIME6N5KiSX3mPySNw24VpBIUIgloRjS_ULvMC_gFUrFawAaxNOzWScnnjCQqcRh0dtLa7F17J3XCuJlEwS0ZCrAhraMxPmsXdhMjhkhTpKD9DCmyvCuMV7H8qakqFHkHnC2uY2lt71fY64-Ih94tmKQP1sY0pcQxYQPar1trtI' },
    { id: 'creatine', name: 'Kinetic Creatine HCL', price: 38.00, rating: 5.0, tags: ['Micro-Dose', 'No Bloat'], img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7TEznK5urO1TehU5fwSsIKQXkSNR6xYDQ808kA0AGUrsS1JqzwK8-mHen2fMqLl48YK9RCYnsEnv0z9YC_DznSnckcOqK7jBqnnydsZ1kLUbpKvZpEproecDFveQQ19v7L5KTWC9fWxkjTDA1iQA4MI9vh0mZShHSzKBPw0Wv6ad2pHZk6za971_pMr8lu_VAgG9g8HLz6SD2A8-Qf84ouNQbZPLetiTN6CXlVCJpKETABgBbSybiSpKs8evhvXLKv5CAmePHkCV0' },
    { id: 'pre-workout', name: 'Kinetic Pre (Sour Apple)', price: 49.00, rating: 4.7, tags: ['350MG Caffeine', 'Nitric Oxide'], img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkvVjnnfg-fDueCtT5YfzkwQuHg3p3htFptzPq7C0LMfw1mg1XU1qNKfHlYnxLMCMOcHoU5mkzZHnzaTxt9y3vcUMlJb29-CB4r_XNNafavhUN1RK-uwoS5rdaHQJXZeZKi9ocG-9bU-VGI4ipMFylIXSAHU-kSe6sDFdTCfQelm0f6OhwN9gvOxFZu4PcW5AjyuGgU_voZTWZCI7zsb4urxwMldxcXXLk2C0IYxjJ_GdMl_7WQM-SWv6t9QZDk6nbudY3FqWmMQtJ' },
  ]

  return (
    <Layout>
      <header className="pt-32 pb-16 px-4 md:px-12">
        <div className="inline-block bg-primary px-2 py-1 mb-4">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-on-primary-fixed">Pro-Grade Formulation</span>
        </div>
        <h1 className="font-headline text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-[0.9] mb-6">
          Engineered<br/><span className="text-primary-dim">Performance.</span>
        </h1>
        <p className="max-w-xl text-secondary-fixed text-sm md:text-base leading-relaxed opacity-80">
          The high-performance manuscript for elite athletes. Every milligram is calculated. Every ingredient is lab-tested. Kinetic is the editorial of human optimization.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12 px-4 md:px-12 pb-32">
        {products.map((product) => (
          <div key={product.id} className="group relative flex flex-col">
            <div className="aspect-[4/5] bg-surface-container-high overflow-hidden relative mb-4">
              <img 
                alt={product.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                src={product.img} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <Link to={`/product/${product.id}`} className="w-full bg-gradient-to-br from-primary to-primary-container py-3 text-on-primary-fixed font-headline font-black uppercase text-xs tracking-widest active:scale-95 transition-all text-center">
                  Quick View
                </Link>
              </div>
            </div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-headline text-lg font-black uppercase tracking-tight group-hover:text-primary transition-colors">{product.name}</h3>
              <span className="font-headline font-bold text-primary">${product.price}</span>
            </div>
            <div className="flex items-center gap-4 text-[10px] font-label font-medium text-zinc-500 uppercase tracking-widest">
              <div className="flex items-center text-primary">
                <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="ml-1 text-on-surface">{product.rating}</span>
              </div>
              {product.tags.map(tag => <span key={tag}>{tag}</span>)}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Catalog
