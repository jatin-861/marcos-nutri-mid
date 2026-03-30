import { useState } from 'react'
import { Link } from 'react-router-dom'

const Checkout = () => {
  const [isSuccess, setIsSuccess] = useState(false)

  if (isSuccess) {
    return (
      <div className="pt-48 pb-24 px-6 text-center max-w-xl mx-auto space-y-8 min-h-[60vh] flex flex-col justify-center">
        <div className="w-24 h-24 bg-primary-container rounded-full flex items-center justify-center mx-auto mb-12">
          <span className="material-symbols-outlined text-on-primary-fixed text-5xl">check_circle</span>
        </div>
        <h1 className="text-5xl font-headline font-black tracking-tighter uppercase italic">Performance Secured.</h1>
        <p className="text-on-surface-variant leading-relaxed">
          Your order has been precision-logged. A verification manuscript has been sent to your digital inbox. Welcome to the elite.
        </p>
        <Link to="/" className="inline-block bg-primary text-on-primary-fixed px-12 py-5 font-headline font-black uppercase tracking-widest text-sm rounded-md hover:scale-105 active:scale-95 transition-all w-fit mx-auto">
          Return to Dashboard
        </Link>
      </div>
    )
  }

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
      {/* Left Column: Checkout Form */}
      <div className="lg:col-span-7 space-y-12">
        {/* Progress Indicator */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-primary-container text-on-primary-fixed flex items-center justify-center font-bold text-xs">1</span>
            <span className="font-headline font-bold text-xs tracking-widest uppercase text-primary-dim">Shipping</span>
          </div>
          <div className="h-[1px] w-12 bg-outline-variant opacity-30"></div>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-bold text-xs">2</span>
            <span className="font-headline font-bold text-xs tracking-widest uppercase text-on-surface-variant">Payment</span>
          </div>
          <div className="h-[1px] w-12 bg-outline-variant opacity-30"></div>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-bold text-xs">3</span>
            <span className="font-headline font-bold text-xs tracking-widest uppercase text-on-surface-variant">Confirm</span>
          </div>
        </div>

        {/* Shipping Section */}
        <section className="space-y-8">
          <header>
            <h1 className="text-4xl font-headline font-black tracking-tighter uppercase mb-2">Delivery Details</h1>
            <p className="text-on-surface-variant text-sm">Enter your shipping destination to calculate performance delivery times.</p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {['First Name', 'Last Name', 'Street Address', 'City', 'Postal Code'].map((label, idx) => (
              <div key={label} className={`space-y-2 ${label === 'Street Address' ? 'md:col-span-2' : ''}`}>
                <label className="font-label text-[10px] font-bold uppercase tracking-widest text-on-surface-variant ml-1">{label}</label>
                <input 
                  className="w-full bg-surface-container-highest border-none focus:ring-0 focus:border-b-2 focus:border-primary px-4 py-3 text-sm placeholder:text-zinc-600" 
                  placeholder={label} 
                  type="text"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Payment Section */}
        <section className="pt-8 border-t border-outline-variant/10 space-y-8">
          <header>
            <h2 className="text-2xl font-headline font-black tracking-tighter uppercase mb-2">Secure Payment</h2>
            <p className="text-on-surface-variant text-sm">High-performance encryption for your financial security.</p>
          </header>
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 bg-white text-black py-4 rounded-md font-bold text-sm hover:opacity-90 transition-opacity">
              <span>Apple Pay</span>
            </button>
            <button className="flex items-center justify-center gap-3 bg-white text-black py-4 rounded-md font-bold text-sm hover:opacity-90 transition-opacity">
              <span>Google Pay</span>
            </button>
          </div>
          
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-outline-variant/20"></div></div>
            <div className="relative flex justify-center text-xs uppercase tracking-widest font-bold text-on-surface-variant bg-surface px-4 w-fit mx-auto">Or pay with card</div>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="font-label text-[10px] font-bold uppercase tracking-widest text-on-surface-variant ml-1">Card Number</label>
              <div className="relative">
                <input className="w-full bg-surface-container-highest border-none focus:ring-0 focus:border-b-2 focus:border-primary px-4 py-3 text-sm placeholder:text-zinc-600" placeholder="0000 0000 0000 0000" type="text" />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-zinc-600">credit_card</span>
              </div>
            </div>
          </div>
        </section>

        <div className="pt-8">
          <button 
            onClick={() => setIsSuccess(true)}
            className="w-full kinetic-gradient text-on-primary-fixed py-5 font-headline font-black uppercase tracking-tighter text-lg rounded-md shadow-xl shadow-primary-container/10 active:scale-[0.98] transition-all"
          >
            Complete Performance Purchase
          </button>
          <p className="text-center mt-6 text-[10px] text-on-surface-variant font-medium tracking-wide flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[14px]">lock</span>
            ENCRYPTED WITH 256-BIT SSL PROTOCOL
          </p>
        </div>
      </div>

      {/* Right Column: Order Summary */}
      <aside className="lg:col-span-5">
        <div className="sticky top-32 bg-surface-container-high p-8 border border-outline-variant/10 rounded-lg">
          <h3 className="text-xl font-headline font-black tracking-tighter uppercase mb-8 border-b border-outline-variant/10 pb-4">Order Summary</h3>
          <div className="space-y-8 mb-10">
            {/* Items */}
            {[
              { name: 'Nitro-Blast Gen 3', price: '54.99', desc: 'Quantity: 1 • 500g', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOHbJkxMdvDpVdOQzlqi4ENsNwxRWcv2WLTED4Xuph7l__QGqScUrxBRjAUs-8lY-PiGTliiOgTGXhKRla1wkmaHvtBC_3LtsmdL2TZorXyiXdE2z2idCrvjJnPfRf8YaSZpeunKnlvdSilObBmtyKTvOO1L3Pkx_9VGhBiznT4-sH1SocLM1D33BeK2K4TYneRYW-edb_PAE5j_prF2unOacszi4enChbmdu9tyVbvzqj5PbHWSMZsLKYOWB6Wzk55x947-YvTzbh' },
              { name: 'Hydro-Fuel BCAA', price: '39.98', desc: 'Quantity: 2 • Blood Orange', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3m_5SCgGe0FfJ_eOLDcpA27b_wE1mbtSqkWTrxk1HdJLU8Hi0IOlrZrXhcnrZiYECqIE8TCBmFvguxTklb86u4XuipMnCo5C0MN_i0buSAFB5lCTyU4anB9NEWgsuduHJS-Ko9azY12ypyW7osFbBQAaoT9Hoso-Jwj_DtdfUcmxa16NCBpys_SXeHpr4MJkGgUodSFJAj53ScqKzQyGHb6iEsL28k44jMnwJwV1oJ-r0qhfBJQS4KiDC6D8SZpu448UP1SGWBTae' }
            ].map((item) => (
              <div key={item.name} className="flex gap-4">
                <div className="w-20 h-20 bg-surface-container-highest overflow-hidden rounded">
                  <img src={item.img} className="w-full h-full object-cover grayscale contrast-125" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-headline font-bold text-xs uppercase tracking-wider text-primary-dim">{item.name}</h4>
                    <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mt-1">{item.desc}</p>
                  </div>
                  <p className="font-headline font-black text-sm">${item.price}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="space-y-3 pt-6 border-t border-outline-variant/10">
            <div className="flex justify-between text-xs font-bold tracking-widest uppercase text-on-surface-variant">
              <span>Subtotal</span>
              <span>$94.97</span>
            </div>
            <div className="flex justify-between text-xs font-bold tracking-widest uppercase text-on-surface-variant">
              <span>Shipping</span>
              <span className="text-primary-dim">FREE</span>
            </div>
            <div className="flex justify-between items-end pt-4">
              <span className="font-headline font-black text-xl uppercase tracking-tighter">Total</span>
              <div className="text-right">
                <span className="text-[10px] font-bold text-on-surface-variant block mb-1">USD</span>
                <span className="font-headline font-black text-3xl tracking-tighter text-primary-fixed">$102.57</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </main>
  )
}

export default Checkout
