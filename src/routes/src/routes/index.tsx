import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Carlson pallet Liquidation USA – Wholesale Liquidation Pallets & Truckloads" },
      {
        name: "description",
        content:
          "U.S.-based wholesale supplier of liquidation pallets and truckload inventory for resellers, retailers, and business buyers.",
      },
      { property: "og:title", content: "Carlson pallet Liquidation USA" },
      {
        property: "og:description",
        content: "Wholesale liquidation pallets and truckloads with nationwide freight delivery.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = ["Home", "Shop", "About Us", "How to Order", "Payment", "Contact", "Reviews", "FAQ"];

const SLIDES = [
  {
    img: "https://usapalletliquidators.com/wp-content/uploads/slider/cache/f64f1450a31981adf297a43f9bfbaf38/p1.webp",
    title: "Premium Wholesale Liquidation Pallets & Truckloads",
    text: "Whether you're a reseller, retailer, or business buyer, we offer reliable pallet and truckload liquidation solutions tailored to your inventory needs.",
  },
  {
    img: "https://usapalletliquidators.com/wp-content/uploads/slider/cache/eaff846b4e40c9e8b3e6862ab1144802/p2.png",
    title: "Wholesale Pallets for Resellers & Business Buyers",
    text: "From brick-and-mortar retailers to online marketplace sellers, our liquidation pallets provide dependable inventory solutions for resale.",
  },
  {
    img: "https://usapalletliquidators.com/wp-content/uploads/slider/cache/3e732b3932c13d7ee517a3353751a250/p3.webp",
    title: "Liquidation Pallets Ready for Resale & Business Use",
    text: "Serving businesses of all sizes with flexible pallet and truckload inventory options.",
  },
];

const CATEGORIES = ["All", "Apparel", "Beauty", "Electronics", "Home Goods", "Tools", "Toys"];

const PRODUCTS = [
  {
    img: "https://usapalletliquidators.com/wp-content/uploads/2026/05/Wooden-Pallet.jpeg",
    cat: "Home Goods",
    title: "Heavy Duty Wooden Pallets for Sale – ISPM 15 Export Grade",
    price: "$550.00",
  },
  {
    img: "https://usapalletliquidators.com/wp-content/uploads/2026/04/wholesale-nike-clothing1.jpeg",
    cat: "Home Goods",
    title: "Wholesale Nike Clothing (300 Pieces)",
    price: "$1,000.00",
  },
  {
    img: "https://usapalletliquidators.com/wp-content/uploads/2026/04/fishing-gear.jpg",
    cat: "Tools",
    title: "Fishing Gear Wholesale Pallet (120–150 Items)",
    price: "$600.00",
  },
  {
    img: "https://usapalletliquidators.com/wp-content/uploads/2026/04/IMG_6378.jpeg",
    cat: "Apparel",
    title: "Alo Yoga Apparel Pallet (250 Pieces)",
    price: "$800.00",
    oldPrice: "$1,000.00",
    sale: true,
  },
  {
    img: "https://usapalletliquidators.com/wp-content/uploads/2026/03/wholesale-laundry-detergent-pallets5.jpg",
    cat: "Home Goods",
    title: "Wholesale Laundry Detergent Pallet (150–200 Pieces)",
    price: "$600.00",
  },
  {
    img: "https://usapalletliquidators.com/wp-content/uploads/2026/03/victoria-secret-liquidation-pallets.jpeg",
    cat: "Beauty",
    title: "Wholesale Victoria's Secret Perfume Pallet (500 Pieces)",
    price: "$1,200.00",
  },
  {
    img: "https://usapalletliquidators.com/wp-content/uploads/2026/03/Starlink-pallet-2.webp",
    cat: "Electronics",
    title: "Starlink Satellite Internet Kit Pallet (12 Pieces)",
    price: "$250.00",
  },
  {
    img: "https://usapalletliquidators.com/wp-content/uploads/2026/03/Skims-Wear-Pallets1.jpeg",
    cat: "Home Goods",
    title: "Wholesale SKIMS Clothing Pallet (300 Pieces)",
    price: "$900.00",
  },
  {
    img: "https://usapalletliquidators.com/wp-content/uploads/2026/03/Sephora-Liquidation-Pallets2.jpeg",
    cat: "Beauty",
    title: "Wholesale Sephora Liquidation Pallet (200+ Beauty Products)",
    price: "$1,850.00",
  },
];

const STATS = [
  { pct: 85, label: "High-Resale Products" },
  { pct: 80, label: "Fast Order Processing" },
  { pct: 90, label: "Customer Satisfaction" },
  { pct: 75, label: "Repeat Buyers" },
];

const REVIEWS = [
  { name: "Annabella Ellison", title: "Reliable wholesale supplier", body: "Quality pallets, fair pricing, and professional service. Everything was packed well and ready for resale.", date: "April 18, 2025" },
  { name: "Sofia", title: "Exceeded expectations", body: "Great mix of products with strong demand. This supplier makes liquidation buying easy and profitable.", date: "May 1, 2025" },
  { name: "James R.", title: "Great value and fast shipping", body: "The pallet arrived quickly and the products were exactly as described. Solid resale value and smooth transaction.", date: "March 12, 2025" },
  { name: "Joseff Puckett", title: "Perfect for resellers", body: "Excellent assortment and clear descriptions. I've already sold most of the items and will definitely order again.", date: "April 3, 2025" },
];

const FAQS = [
  { q: "What are liquidation pallets?", a: "Liquidation pallets are bulk quantities of products sourced from overstock, returns, shelf pulls, or closeouts. They are sold at wholesale prices and are ideal for resellers looking to maximize profit." },
  { q: "What types of products do your pallets include?", a: "Our pallets include a wide range of categories such as electronics, toys, tools, home goods, beauty products, apparel, collectibles, and general merchandise. Inventory varies by pallet." },
  { q: "Are the products new or used?", a: "Product conditions vary by pallet and may include new, open-box, shelf-pull, or customer returns. Each listing clearly outlines the expected condition and category." },
  { q: "Can I choose what products I receive?", a: "Pallets are sold as assorted lots. While exact items cannot be selected, we categorize pallets by product type to ensure consistency and resale value." },
  { q: "Who can buy liquidation pallets from you?", a: "Anyone can purchase from us — beginners, online sellers, retailers, and bulk buyers. Our pallets are ideal for Amazon, eBay, Shopify, flea markets, and physical stores." },
  { q: "How does shipping work?", a: "We ship nationwide using trusted freight carriers. Shipping costs depend on pallet size, weight, and destination. Tracking information is provided after dispatch." },
  { q: "Do you offer bulk discounts?", a: "Yes. Discounts are available for bulk and repeat buyers. Contact our sales team for custom pricing on large orders." },
  { q: "Are sales final?", a: "All liquidation pallet sales are final due to the nature of wholesale inventory. However, we ensure transparent listings and accurate descriptions for buyer confidence." },
];

function Stars() {
  return <span className="text-amber-400 tracking-tight">★★★★★</span>;
}

function Index() {
  const [slide, setSlide] = useState(0);
  const [cat, setCat] = useState("All");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const s = SLIDES[slide];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* Top bar */}
      <div className="bg-[#0b1a34] text-white text-xs md:text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 text-center leading-relaxed">
          <span className="font-semibold">Call or Text:</span> +1 (864) 804-4353 · Please place your order directly on our website; no agent will contact you immediately concerning your order. All new client payment terms are prepaid based on the invoice or bank features.

        </div>
      </div>

      {/* Header */}
      <header className="bg-slate-50 border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-2">
            <div className="w-11 h-11 rounded-md bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-black text-xl shadow">C</div>
            <div className="leading-tight">
              <div className="font-extrabold text-[#0b1a34] text-lg tracking-tight">CARLSON PALLET</div>
              <div className="text-[10px] tracking-[0.2em] text-orange-500 font-semibold">LIQUIDATION USA</div>
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#0b1a34]">
            {NAV.map((n, i) => (
              <a key={n} href="#" className={i === 0 ? "text-orange-500" : "hover:text-orange-500"}>
                {n}
              </a>
            ))}
          </nav>
          <button className="relative text-[#0b1a34]" aria-label="Cart">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/></svg>
          </button>
        </div>
      </header>

      {/* Hero slider */}
      <section className="relative h-[560px] md:h-[640px] overflow-hidden">
        <img src={s.img} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto h-full px-6 flex items-center">
          <div className="max-w-xl bg-[#0b1a34]/80 text-white p-8 md:p-10 rounded-md backdrop-blur-sm">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">{s.title}</h1>
            <p className="mt-4 text-slate-200">{s.text}</p>
            <a href="#shop" className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded shadow">
              Browse Our Inventory
            </a>
          </div>
        </div>
        <button onClick={() => setSlide((slide - 1 + SLIDES.length) % SLIDES.length)} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white w-10 h-10 rounded-full grid place-items-center">‹</button>
        <button onClick={() => setSlide((slide + 1) % SLIDES.length)} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white w-10 h-10 rounded-full grid place-items-center">›</button>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => setSlide(i)} className={`w-2.5 h-2.5 rounded-full ${i === slide ? "bg-orange-500" : "bg-white/60"}`} />
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-sky-600">
          Carlson pallet Liquidation USA – Wholesale Liquidation Pallets & Truckloads
        </h2>
        <p className="mt-6 text-slate-700 leading-relaxed">
          <strong>Carlson pallet Liquidation USA</strong> is a U.S.-based wholesale supplier of liquidation pallets and truckload inventory for resellers, retailers, and business buyers. We provide access to surplus, overstock, and liquidation merchandise across multiple categories, with freight delivery available nationwide and international export options for qualified buyers. Our mixed pallets include general merchandise, electronics, tools, toys, appliances, and more — all sold in pallet or truckload quantities. Browse available return pallets for sale in our <a className="text-orange-500 underline" href="#shop">shop</a> or <a className="text-orange-500 underline" href="#">contact us</a> to learn more.
        </p>
      </section>

      {/* Feature strip */}
      <section className="bg-[#0b1a34] text-white">
        <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8 text-center">
          {[
            { icon: "🚚", t: "FAST SHIPPING ON ALL ORDERS" },
            { icon: "🌎", t: "WE SHIP INTERNATIONAL & LOCAL" },
            { icon: "🔒", t: "SECURED PAYMENT METHODS" },
          ].map((f) => (
            <div key={f.t} className="flex flex-col items-center gap-2">
              <div className="text-4xl">{f.icon}</div>
              <div className="font-bold tracking-wide">{f.t}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Info blocks */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-[#0b1a34]">Wholesale Liquidation Inventory for Resellers</h3>
          <p className="mt-4 text-slate-700">We supply wholesale liquidation pallets and full truckloads designed for resale through online marketplaces, brick-and-mortar stores, flea markets, and distribution channels. Our inventory may include a mix of overstock items, shelf pulls, open-box goods, and customer returns, depending on the pallet type and source.</p>
          <p className="mt-3 text-slate-700">Carlson pallet Liquidation USA works with resellers and business buyers looking for scalable inventory solutions rather than single-item purchases. Inventory is sold by the pallet or truckload and best suited for buyers who understand the liquidation process and resale markets.</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-[#0b1a34]">How Our Process Works</h3>
          <p className="mt-4 text-slate-700">Our process is designed for wholesale buyers and resellers. Browse available pallets, request a quote or place an order, and complete payment to secure your inventory. Once confirmed, your order is prepared and scheduled for freight pickup.</p>
          <a href="#" className="inline-block mt-4 text-orange-500 font-semibold">How It Works →</a>

          <div className="mt-8 grid gap-4">
            <div><div className="font-bold text-[#0b1a34]">Premium Liquidation Pallets:</div><div className="text-slate-700">Electronics, home goods, apparel, tools, general merchandise, and more.</div></div>
            <div><div className="font-bold text-[#0b1a34]">Direct Access to Major Retailers:</div><div className="text-slate-700">We work with the biggest retail names to bring you the best stock.</div></div>
            <div><div className="font-bold text-[#0b1a34]">Fast & Affordable Shipping:</div><div className="text-slate-700">Local and international, including freight and container loads.</div></div>
          </div>
        </div>
      </section>

      {/* Shop */}
      <section id="shop" className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#0b1a34]">SHOP BY CATEGORIES</h2>
          <p className="mt-3 text-center text-slate-600 max-w-3xl mx-auto">Browse our selection of wholesale liquidation pallet categories, including electronics, tools, toys, home goods, and general merchandise.</p>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((c) => (
              <button key={c} onClick={() => setCat(c)} className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${cat === c ? "bg-orange-500 text-white border-orange-500" : "bg-white text-[#0b1a34] border-slate-300 hover:border-orange-500"}`}>
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.filter((p) => cat === "All" || p.cat === cat).map((p) => (
              <div key={p.title} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition border border-slate-100">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition" />
                  {p.sale && <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">SALE</span>}
                </div>
                <div className="p-5">
                  <div className="text-xs text-orange-500 font-semibold uppercase">{p.cat}</div>
                  <h3 className="mt-2 font-semibold text-[#0b1a34] leading-snug min-h-[3rem]">{p.title}</h3>
                  <div className="mt-2 text-sm text-slate-400"><Stars /></div>
                  <div className="mt-2 flex items-baseline gap-2">
                    {p.oldPrice && <span className="line-through text-slate-400 text-sm">{p.oldPrice}</span>}
                    <span className="font-bold text-lg text-[#0b1a34]">{p.price}</span>
                  </div>
                  <button className="mt-4 w-full bg-[#0b1a34] hover:bg-[#132749] text-white font-semibold py-2.5 rounded">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="#" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded shadow">Load More</a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0b1a34]">"Maximize value, Reduce risk"</h2>
          <p className="mt-4 text-slate-700">We help resellers source inventory efficiently by offering wholesale liquidation pallets with clear expectations on condition, pricing, and shipping.</p>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-5xl font-extrabold text-orange-500">{s.pct}%</div>
              <div className="mt-2 h-2 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-orange-500" style={{ width: `${s.pct}%` }} />
              </div>
              <div className="mt-3 font-semibold text-[#0b1a34]">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Who we are */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#0b1a34]">Carlson pallet Liquidation USA</h2>
            <p className="mt-4 text-slate-700">We understand there are numerous wholesale alternatives for purchasing inventory from closeout companies like us. Yet, you need to consider the difference between us and any competitors and how strongly we value our relationships with our clients — by building long-term strong partnerships with our customers, vendors, and associates.</p>
            <p className="mt-3 text-slate-700">We provide to small and large businesses alike the highest quality products at the lowest prices. Our company is constantly sourcing overseas to bring back the most innovative and useful products at the most affordable prices.</p>
          </div>
          <img src="https://usapalletliquidators.com/wp-content/uploads/2025/12/p4.webp" alt="wholesale liquidation pallets" loading="lazy" className="rounded-lg shadow-lg w-full" />
        </div>
      </section>

      {/* Reviews */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-[#0b1a34]">WHAT OUR CUSTOMERS SAY ABOUT THEIR EXPERIENCE</h2>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((r) => (
            <div key={r.name} className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
              <div className="font-bold text-[#0b1a34]">{r.name}</div>
              <div className="mt-1"><Stars /></div>
              <div className="mt-3 font-semibold italic text-[#0b1a34]">"{r.title}"</div>
              <p className="mt-2 text-slate-600 text-sm">{r.body}</p>
              <div className="mt-4 text-xs text-slate-400">{r.date}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8"><a href="#" className="text-orange-500 font-semibold">More Reviews →</a></div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#0b1a34]">Frequently Asked Questions</h2>
          <div className="mt-8 space-y-3">
            {FAQS.map((f, i) => (
              <div key={f.q} className="bg-white border border-slate-200 rounded-lg overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex justify-between items-center p-4 text-left font-semibold text-[#0b1a34]">
                  {f.q}<span className="text-orange-500 text-xl">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <div className="px-4 pb-4 text-slate-600 text-sm">{f.a}</div>}
              </div>
            ))}
          </div>
          <div className="text-center mt-6"><a href="#" className="text-orange-500 font-semibold">More FAQs →</a></div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#0b1a34]">Send Us a Message</h2>
          <p className="mt-3 text-center text-slate-600">Questions about pallets, pricing, or shipping? Reach out and our team will get back to you.</p>
          <form
            action="mailto:carlsonpalletliquidation@gmail.com"
            method="POST"
            encType="text/plain"
            className="mt-8 bg-white border border-slate-200 rounded-lg p-6 shadow-sm grid gap-4"
          >
            <input required name="Name" type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-slate-300 rounded" />
            <input required name="Email" type="email" placeholder="Your Email" className="w-full px-4 py-3 border border-slate-300 rounded" />
            <input name="Phone" type="tel" placeholder="Phone (optional)" className="w-full px-4 py-3 border border-slate-300 rounded" />
            <textarea required name="Message" placeholder="Your Message" rows={5} className="w-full px-4 py-3 border border-slate-300 rounded" />
            <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded">Send Message</button>
          </form>

          <div className="mt-10 text-center">
            <h3 className="text-2xl font-bold text-[#0b1a34]">Ready to Start Ordering?</h3>
            <p className="mt-3 text-slate-700">
              WhatsApp / Phone:{" "}
              <a href="https://wa.me/18648044353" className="text-orange-500 font-semibold">+1 (864) 804-4353</a>
            </p>
            <p className="mt-1 text-slate-700">
              Email:{" "}
              <a href="mailto:carlsonpalletliquidation@gmail.com" className="text-orange-500 font-semibold">carlsonpalletliquidation@gmail.com</a>
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#0b1a34] text-white py-16">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold">Stay Ahead in Wholesale Liquidation</h2>
          <p className="mt-3 text-slate-300">Be the first to know about new pallet arrivals, special pricing, and limited stock deals.</p>
          <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded text-slate-900" />
            <button type="submit" className="bg-orange-500 hover:bg-orange-600 font-semibold px-8 py-3 rounded">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050f22] text-slate-400 py-10 text-sm">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div>
            <div className="font-extrabold text-white text-lg">CARLSON PALLET LIQUIDATION USA</div>
            <p className="mt-3">Wholesale liquidation pallets and truckloads for resellers, retailers, and business buyers across the U.S. and internationally.</p>
          </div>
          <div>
            <div className="font-bold text-white mb-3">Quick Links</div>
            <ul className="space-y-2">{NAV.map((n) => <li key={n}><a href="#" className="hover:text-orange-500">{n}</a></li>)}</ul>
          </div>
          <div>
            <div className="font-bold text-white mb-3">Contact</div>
            <p>Call/Text: +1 (864) 804-4353</p>
            <p className="mt-2">carlsonpalletliquidation@gmail.com</p>
          </div>
          <div>
            <div className="font-bold text-white mb-3">Payment Methods</div>
            <p>Zelle · Cash App · Chime · Apple Pay · Credit Cards</p>
            <p className="mt-3 text-xs">Save 10% on orders $200+ with direct payment methods.</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-slate-800 text-center text-xs">
          © {new Date().getFullYear()} Carlson pallet Liquidation USA. All rights reserved.
        </div>
      </footer>

      {/* WhatsApp floater */}
      <a href="https://wa.me/18648044353" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-4 h-14 rounded-full flex items-center gap-2 shadow-lg font-semibold" aria-label="WhatsApp">
        <span className="text-2xl">💬</span> WhatsApp Us
      </a>

    </div>
  );
}
