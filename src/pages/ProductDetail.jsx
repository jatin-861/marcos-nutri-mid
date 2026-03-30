import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const ProductDetail = () => {
  const { id } = useParams()
  const [selectedFlavor, setSelectedFlavor] = useState('Dutch Chocolate')
  const [selectedSize, setSelectedSize] = useState('2.5 KG')
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  const flavors = ['Dutch Chocolate', 'Vanilla Bean', 'Cookies & Cream']
  const sizes = [
    { name: '1 KG', servings: '30 Servings' },
    { name: '2.5 KG', servings: '75 Servings' }
  ]

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Side: Product Gallery */}
        <div className="lg:col-span-7 space-y-8">
          <div className="relative aspect-square bg-surface-container-high overflow-hidden rounded-lg group">
            <img 
              alt="Kinetic Whey Protein" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdZcGOuZTpD1XoT91Ix-sxrpHo2eREzZa7wKUzYwK7X1rBuUXQnzIUqz6__zvUz-pzWAybJsK5H5DsQSLlWTfKPdvLIKj9csXEY2aQVONlqMfooJEVF94tDMhen-Z2onf9xsFlbaV1A6Ffz_eBql-iIu75mG9-ZrWcyyTrYS-5l5LdWSGRB7p3s9CJ63skRxN_n0SP5IbJcS4ebZ8QfJuVVZdRHoofg7_EpKyDp1o4HsIs77AQQ1XHAE7gxVK68WU2CtgcmGhyRoOS"
            />
            <div className="absolute top-6 left-6">
              <span className="bg-primary-container text-on-primary-fixed px-3 py-1 font-headline font-black text-xs tracking-widest uppercase rounded">Elite Series</span>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-square bg-surface-container rounded cursor-pointer border border-transparent hover:border-primary-dim transition-all overflow-hidden">
                <img 
                  className="w-full h-full object-cover opacity-60 hover:opacity-100" 
                  src={`https://lh3.googleusercontent.com/aida-public/AB6AXuDjbjmyrgt1sEf3EfbrxQD45zDkZUEqA8dqMiC8uTgHvqLKUOkE6Sh72wOEnNBmj4kpolJP1FjyB68Tlfx9UcTF0zB8bUHe1M_NxxjbdxEpnwkTE0OVocQi3i4ac4CpcfrHfxOtQpafyc6oxbCX9GyGVqR2Wdq29tAWvrVuCNN2yWijxC2czjTpBWz-M0ZDIGyC_W72oM5T8C6SpsSGGz4v2Mwojx6EuQ_2pQPnnE36mGV1VMCYsw5Y0vMaKZhyGRShdoVa1yT0fGo9`}
                />
              </div>
            ))}
            <div className="aspect-square bg-surface-container rounded cursor-pointer border border-transparent hover:border-primary-dim transition-all flex items-center justify-center">
              <span className="material-symbols-outlined text-outline">play_circle</span>
            </div>
          </div>
        </div>

        {/* Right Side: Product Details */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          <div className="mb-2 flex items-center gap-2">
            <div className="flex text-primary-dim">
              {[1, 2, 3, 4, 5].map(i => (
                <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              ))}
            </div>
            <span className="text-xs font-label text-on-surface-variant tracking-wider uppercase">4.9 (1,240 REVIEWS)</span>
          </div>
          <h1 className="text-5xl font-headline font-black tracking-tighter uppercase mb-2 leading-none">Kinetic Whey Protein</h1>
          <p className="text-xl font-body text-secondary-fixed mb-8">Ultra-Filtered Isolate & Concentrate Blend</p>
          <div className="mb-10">
            <span className="text-4xl font-headline font-bold text-on-surface">$54.99</span>
            <span className="text-lg text-on-surface-variant line-through ml-3">$69.99</span>
          </div>
          
          {/* Flavor Selector */}
          <div className="mb-8">
            <h3 className="text-xs font-headline font-bold tracking-widest text-on-surface-variant uppercase mb-4">Select Flavor</h3>
            <div className="flex flex-wrap gap-3">
              {flavors.map(flavor => (
                <button 
                  key={flavor}
                  onClick={() => setSelectedFlavor(flavor)}
                  className={`px-6 py-2 rounded-full border-2 transition-all text-xs font-black uppercase tracking-wider ${
                    selectedFlavor === flavor 
                      ? 'border-primary-dim bg-primary-container/10 text-primary-dim' 
                      : 'border-outline-variant text-on-surface-variant hover:border-secondary-fixed hover:text-secondary-fixed'
                  }`}
                >
                  {flavor}
                </button>
              ))}
            </div>
          </div>

          {/* Size Selector */}
          <div className="mb-10">
            <h3 className="text-xs font-headline font-bold tracking-widest text-on-surface-variant uppercase mb-4">Select Size</h3>
            <div className="flex gap-4">
              {sizes.map(size => (
                <button 
                  key={size.name}
                  onClick={() => setSelectedSize(size.name)}
                  className={`flex-1 py-4 border-2 rounded-lg flex flex-col items-center transition-all ${
                    selectedSize === size.name
                      ? 'border-primary-dim bg-primary-container/5'
                      : 'border-outline-variant hover:border-secondary-fixed'
                  }`}
                >
                  <span className={`text-sm font-headline font-black uppercase ${selectedSize === size.name ? 'text-primary-dim' : ''}`}>
                    {size.name}
                  </span>
                  <span className={`text-[10px] uppercase ${selectedSize === size.name ? 'text-primary-dim/70' : 'text-on-surface-variant'}`}>
                    {size.servings}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <button 
              onClick={handleAddToCart}
              className="gradient-cta w-full py-5 rounded-md text-on-primary-fixed font-headline font-black uppercase tracking-widest text-sm shadow-xl shadow-primary-container/10 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
            >
              <span className="material-symbols-outlined">shopping_bag</span>
              {isAdded ? 'Added to Cart!' : 'Add to Cart'}
            </button>
            
            {isAdded && (
              <Link to="/checkout" className="text-center text-primary-dim font-headline font-black uppercase text-xs tracking-widest hover:underline">
                Go to Checkout
              </Link>
            )}
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 py-8 border-y border-outline-variant/20">
            {[
              { val: '25G', label: 'Protein' },
              { val: '5.5G', label: 'BCAAs' },
              { val: '120', label: 'Calories' }
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-headline font-black text-primary-dim">{stat.val}</div>
                <div className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
