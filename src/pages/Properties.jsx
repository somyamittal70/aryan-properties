import { useState } from "react";
import {
  MapPin, Bed, Bath, Car, Maximize2, TreePine, Calendar,
  Phone, Mail, MessageSquare, Star, ChevronRight, ArrowLeft,
  Shield, Zap, Wifi, Wind, Dumbbell, Waves, Sun, Leaf,
  TrendingUp, Home, Search, SlidersHorizontal,
  MoveRight, CheckCircle2, User, Clock, Award, Eye, Heart, Menu, X
} from "lucide-react";
import { Link } from "react-router-dom";
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Jost:wght@300;400;500;600&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; }
    body { background: #F4F7F2; font-family: 'DM Sans', sans-serif; color: #000000; }
    ::selection { background: rgba(93,143,68,0.25); color: #000000; }
    ::-webkit-scrollbar { width: 5px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #5d8f44; border-radius: 99px; }

    .btn-gold { transition: all 0.3s cubic-bezier(0.16,1,0.3,1); }
    .btn-gold:hover { background: #4a7535 !important; transform: translateY(-2px); box-shadow: 0 12px 32px rgba(93,143,68,0.35) !important; }
    .btn-outline { transition: all 0.3s cubic-bezier(0.16,1,0.3,1); }
    .btn-outline:hover { background: #5d8f44 !important; color: #fff !important; transform: translateY(-2px); }

    .nav-item { transition: color 0.2s; cursor: pointer; }
    .nav-item:hover { color: #5d8f44 !important; }

    .thumb-item { transition: all 0.2s; cursor: pointer; }
    .thumb-item:hover { opacity: 1 !important; }

    .amenity-chip { transition: all 0.25s; }
    .amenity-chip:hover { border-color: #5d8f44 !important; background: rgba(93,143,68,0.06) !important; }

    .spec-row { transition: background 0.15s; }
    .spec-row:hover { background: rgba(93,143,68,0.04) !important; }

    .input-field { transition: border-color 0.2s, box-shadow 0.2s; }
    .input-field:focus { outline: none; border-color: #5d8f44 !important; box-shadow: 0 0 0 3px rgba(93,143,68,0.12) !important; }

    @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    .anim-1 { animation: fadeUp 0.6s ease both; }
    .anim-2 { animation: fadeUp 0.6s 0.1s ease both; }
    .anim-3 { animation: fadeUp 0.6s 0.2s ease both; }

    .serif { font-family: 'Cormorant Garamond', serif; }
    .eyebrow { font-size: 10px; font-weight: 500; letter-spacing: 3.5px; text-transform: uppercase; color: #5d8f44; }

    .divider-gold { display: block; width: 40px; height: 1.5px; background: #5d8f44; margin-top: 16px; margin-bottom: 24px; }
    .divider-gold-center { display: block; width: 40px; height: 1.5px; background: #5d8f44; margin: 16px auto 24px; }

    .filter-select { appearance: none; cursor: pointer; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23718096' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 14px center; }

    .gallery-main { position: relative; overflow: hidden; border-radius: 20px; }

    .tag-pill { display: inline-flex; align-items: center; gap: 5px; padding: 5px 12px; border-radius: 99px; font-size: 11px; font-weight: 500; letter-spacing: 0.5px; }

    .invest-card { transition: all 0.3s; }
    .invest-card:hover { transform: translateY(-4px); }

    .pc-card {
      position: relative; height: 460px; border-radius: 0px 60px 0px 60px;
      overflow: hidden; cursor: pointer; background: #0d0d0d;
      transition: transform 0.5s cubic-bezier(0.16,1,0.3,1);
    }
    .pc-card:hover { transform: translateY(-6px); }
    .pc-img {
      width: 100%; height: 100%; object-fit: cover;
      filter: brightness(0.88) saturate(1.05);
      transition: transform 0.9s cubic-bezier(0.16,1,0.3,1);
    }
    .pc-card:hover .pc-img { transform: scale(1.06); }

    .pc-default {
      position: absolute; inset: 0; z-index: 2;
      display: flex; flex-direction: column; justify-content: flex-end;
      padding: 24px;
      background: linear-gradient(to top, rgba(5,5,5,0.78) 0%, rgba(5,5,5,0.18) 40%, transparent 70%);
      transition: opacity 0.38s ease;
    }
    .pc-card:hover .pc-default { opacity: 0; pointer-events: none; }

    .pc-hover {
      position: absolute; inset: 0; z-index: 3;
      display: flex; flex-direction: column; justify-content: flex-end;
      padding: 24px 26px;
      background: linear-gradient(to top, rgba(4,4,4,0.97) 0%, rgba(4,4,4,0.70) 38%, rgba(4,4,4,0.06) 72%, transparent 100%);
      opacity: 0;
      transition: opacity 0.42s cubic-bezier(0.16,1,0.3,1);
    }
    .pc-card:hover .pc-hover { opacity: 1; }

    .pc-inner {
      transform: translateY(16px);
      transition: transform 0.48s cubic-bezier(0.16,1,0.3,1);
    }
    .pc-card:hover .pc-inner { transform: translateY(0); }

    .pc-save {
      position: absolute; top: 14px; right: 14px; z-index: 4;
      width: 36px; height: 36px; border-radius: 50%;
      background: rgba(255,255,255,0.10);
      border: 0.5px solid rgba(255,255,255,0.20);
      display: flex; align-items: center; justify-content: center;
      cursor: pointer; color: rgba(255,255,255,0.7);
      backdrop-filter: blur(8px);
      transition: all 0.25s;
    }
    .pc-save:hover { background: rgba(93,143,68,0.25); border-color: rgba(93,143,68,0.5); color: #5d8f44; }
    .pc-save.saved { background: rgba(93,143,68,0.25); border-color: rgba(93,143,68,0.5); color: #5d8f44; }

    .pc-cta-arrow {
      width: 32px; height: 32px; border-radius: 50%;
      border: 0.5px solid rgba(93,143,68,0.4);
      display: flex; align-items: center; justify-content: center;
      color: #5d8f44; transition: all 0.3s;
    }
    .pc-card:hover .pc-cta-arrow { background: rgba(93,143,68,0.15); border-color: rgba(93,143,68,0.6); }

    .mobile-menu {
      position: fixed; inset: 0; z-index: 200;
      background: rgba(0,0,0,0.97);
      display: flex; flex-direction: column;
      padding: 24px 28px;
      animation: fadeUp 0.25s ease;
    }

    .map-iframe {
      width: 100%; height: 220px; border: none;
      border-radius: 14px; filter: saturate(0.85);
    }

    @media (min-width: 1200px) {
      .hero-inner { max-width: 720px; }
    }

    @media (max-width: 1023px) {
      .detail-hero-grid { grid-template-columns: 1fr !important; }
      .detail-sticky { position: static !important; top: auto !important; }
      .specs-form-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
      .advisor-form-grid { grid-template-columns: 1fr !important; }
      .footer-grid { grid-template-columns: 1fr 1fr !important; }
      .similar-grid { grid-template-columns: repeat(auto-fill, minmax(280px,1fr)) !important; }
    }

    @media (max-width: 767px) {
      .nav-links { display: none !important; }
      .nav-cta-desktop { display: none !important; }
      .nav-hamburger { display: flex !important; }

      .page-pad { padding-left: 20px !important; padding-right: 20px !important; }
      .hero-section { padding: 72px 20px 60px !important; }
      .hero-h1 { font-size: clamp(32px,8vw,52px) !important; }
      .hero-btns { flex-wrap: wrap !important; gap: 10px !important; }
      .hero-btns button { flex: 1 1 140px !important; }

      .filter-bar { padding: 16px 20px !important; gap: 10px !important; }
      .filter-bar > div { flex: 1 1 100% !important; }
      .filter-select-wrap { flex: 1 1 calc(50% - 5px) !important; }

      .results-pad { padding: 36px 20px 60px !important; }
      .card-grid { grid-template-columns: 1fr !important; }

      .pc-card { height: 400px; }

      .detail-back-bar { padding: 24px 20px 0 !important; }
      .detail-breadcrumb { display: none !important; }
      .gallery-main { border-radius: 14px !important; height: 280px !important; }
      .thumb-strip { grid-template-columns: repeat(4,1fr) !important; gap: 6px !important; margin-top: 8px !important; }
      .thumb-strip > div { height: 64px !important; }

      .price-box { padding: 18px 20px !important; }
      .price-box .serif { font-size: 32px !important; }
      .spec-mini-grid { grid-template-columns: repeat(3,1fr) !important; gap: 8px !important; }
      .spec-mini-card { padding: 10px 8px !important; }

      .section-title { font-size: 28px !important; }
      .amenities-grid { grid-template-columns: repeat(auto-fill, minmax(130px,1fr)) !important; gap: 10px !important; }

      .invest-grid { grid-template-columns: 1fr 1fr !important; gap: 10px !important; }
      .form-2col { grid-template-columns: 1fr !important; }

      .footer-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
      .footer-bottom { flex-direction: column !important; gap: 8px !important; text-align: center !important; }
      .footer-links-row { display: none !important; }

      .similar-grid { grid-template-columns: 1fr !important; }
      .location-invest-grid { grid-template-columns: 1fr !important; gap: 40px !important; }

      .advisor-form-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
      .advisor-card { order: 2; }
      .form-card { order: 1; }

      .trust-row { flex-wrap: wrap !important; gap: 8px !important; justify-content: flex-start !important; }

      .map-iframe { height: 180px; }
    }

    @media (max-width: 399px) {
      .spec-mini-grid { grid-template-columns: repeat(2,1fr) !important; }
      .invest-grid { grid-template-columns: 1fr !important; }
    }
  `}</style>
);

const properties = [
  {
    id: 1,
    name: "Aranya Farmhouses",
    type: "Farmhouse",
    location: "Chhatarpur Pahari, New Delhi",
    price: "₹5.85 Cr",
    priceNote: "All-inclusive, RERA registered",
    bedrooms: 5,
    bathrooms: 6,
    land: "2.2 Acres",
    built: "6,800 sq.ft",
    parking: 6,
    status: "Ready to Move",
    furnishing: "Fully Furnished",
    yearBuilt: 2022,
    description: "A verdant farmhouse estate on 2.2 acres of private land in the heart of Chhatarpur, blending Rajasthani sandstone craftsmanship with contemporary interiors.",
    longDesc: "Aranya Estate is set behind discreet gates on one of Chhatarpur's most coveted green lanes, just 8 km from Saket. The main house spans 6,800 sq.ft across two floors, anchored by a double-height living court with original Kota stone floors and ceiling-to-floor glazing that frame the walled garden. Five bedroom suites — each finished with Jodhpur joinery, Italian marble bathrooms and individual climate control — open onto private balconies. A 14-metre salt-water pool, sun-deck, outdoor kitchen, and fully landscaped orchard complete an estate that rarely comes to market at this address.",
    img: "https://i.pinimg.com/736x/d1/46/c6/d146c656d30b6bbb8df9a2bcfcf606c3.jpg",
    gallery: [
      "https://i.pinimg.com/736x/d1/46/c6/d146c656d30b6bbb8df9a2bcfcf606c3.jpg",
      "https://i.pinimg.com/736x/33/69/bf/3369bf1f7252cb7545fd47c146cd8c71.jpg",
    ],
    mapLat: 28.4997,
    mapLng: 77.1776,
    mapQuery: "Chhatarpur+Pahari,+New+Delhi,+India",
    nearbyPlaces: [
      { Icon: Award, cat: "Education", places: "Vasant Valley School (4 km) · JNU Campus (7 km)" },
      { Icon: Shield, cat: "Healthcare", places: "Fortis Vasant Kunj (5 km) · Max Saket (8 km)" },
      { Icon: MoveRight, cat: "Connectivity", places: "Chhattarpur Metro (3 km) · NH-48 (6 km)" },
      { Icon: Home, cat: "Shopping", places: "Ambience Vasant Kunj (5 km) · Select City Walk (9 km)" },
    ],
    investment: [
      { Icon: TrendingUp, val: "16–20%", label: "Annual Appreciation" },
      { Icon: Home, val: "₹3.5 L/mo", label: "Rental Yield" },
      { Icon: MapPin, val: "Top 3%", label: "Delhi Location Index" },
      { Icon: Calendar, val: "2027", label: "Metro Phase IV" },
      { Icon: Award, val: "RERA", label: "Fully Compliant" },
      { Icon: Zap, val: "₹1,200 Cr", label: "Zone Investment" },
    ],
  },
  {
    id: 2,
    name: "Shivalik Crown Villa",
    type: "Villa",
    location: "DLF Phase 5, Gurugram",
    price: "₹9.40 Cr",
    priceNote: "Price on request for registered buyers",
    bedrooms: 6,
    bathrooms: 7,
    land: "667 sq.yd",
    built: "9,200 sq.ft",
    parking: 4,
    status: "Ready to Move",
    furnishing: "Fully Furnished",
    yearBuilt: 2023,
    description: "A gated builder floor villa in DLF Phase 5 with Italian marble interiors, rooftop terrace and a 15,000 sq.ft private plot — one of Gurugram's most prestigious micro-markets.",
    longDesc: "Shivalik Crown occupies a commanding corner plot in DLF Phase 5 — the address of choice for top corporate leaders and diplomats in the NCR. Designed by Delhi-based Studio Lotus, the villa's façade of Agaria limestone and black steel introduces a considered restraint that continues through every room. Six suites finished in Calacatta marble and wide-plank teak flooring overlook either the private pool courtyard or the leafy sector road. The rooftop terrace — with alfresco dining, a bar counter, and city views — is an entertainer's canvas unlike any other in this neighbourhood.",
    img: "https://i.pinimg.com/736x/54/ee/bb/54eebb6a7a13ec18734dd8d0e9e37bea.jpg",
    gallery: [
      "https://i.pinimg.com/736x/54/ee/bb/54eebb6a7a13ec18734dd8d0e9e37bea.jpg",
      "https://i.pinimg.com/736x/d6/de/cf/d6decf839f6985201cbe7f57de95c700.jpg",
      "https://i.pinimg.com/736x/af/b8/14/afb8142a0070e1ab0686a752a1733167.jpg",
    ],
    mapLat: 28.4595,
    mapLng: 77.0966,
    mapQuery: "DLF+Phase+5,+Gurugram,+Haryana,+India",
    nearbyPlaces: [
      { Icon: Award, cat: "Education", places: "GD Goenka World School (3 km) · Shri Ram School (5 km)" },
      { Icon: Shield, cat: "Healthcare", places: "Medanta (6 km) · Artemis Hospital (4 km)" },
      { Icon: MoveRight, cat: "Connectivity", places: "NH-48 (2 km) · IGI Airport (28 km via Dwarka Expwy)" },
      { Icon: Home, cat: "Shopping", places: "DLF Cyber Hub (4 km) · Ambience Mall (6 km)" },
    ],
    investment: [
      { Icon: TrendingUp, val: "19–24%", label: "Annual Appreciation" },
      { Icon: Home, val: "₹6 L/mo", label: "Rental Yield" },
      { Icon: MapPin, val: "Top 1%", label: "Gurugram Index" },
      { Icon: Calendar, val: "2026", label: "Rapid Metro Ext." },
      { Icon: Award, val: "RERA HR", label: "Compliant" },
      { Icon: Zap, val: "₹2,400 Cr", label: "Zone Investment" },
    ],
  },
  {
    id: 3,
    name: "Nirvana Greens Farmhouse",
    type: "Farmhouse",
    location: "Dera Mandi Road, New Delhi",
    price: "₹7.20 Cr",
    priceNote: "Inclusive of full landscaping & pool",
    bedrooms: 4,
    bathrooms: 5,
    land: "3.1 Acres",
    built: "5,600 sq.ft",
    parking: 8,
    status: "Ready to Move",
    furnishing: "Semi-Furnished",
    yearBuilt: 2021,
    description: "Three private acres along Dera Mandi Road — the Bali-inspired farmhouse features a 20-metre infinity pool, meditation garden and certified organic kitchen garden, just 12 km from Vasant Vihar.",
    longDesc: "Nirvana Greens was conceived as a wellness sanctuary — a private world of 3.1 acres where mature neem and jamun groves create natural privacy on all sides. The central pavilion is designed after traditional haveli planning: an open courtyard at the heart, with wings extending to four bedroom suites, a yoga studio, and an independent guest cottage. The 20-metre infinity pool is oriented east, catching the morning light over the orchard. A 2,000 sq.ft organic kitchen garden supplies the household year-round. This is countryside living without compromise — 12 km from South Delhi's finest restaurants and private schools.",
    img: "https://i.pinimg.com/736x/13/63/07/136307e2ffc4579288818a995a9ba875.jpg",
    gallery: [
      "https://i.pinimg.com/736x/13/63/07/136307e2ffc4579288818a995a9ba875.jpg",
      "https://i.pinimg.com/736x/84/9c/7f/849c7f56acc772145bc1c8507af485dd.jpg",
    ],
    mapLat: 28.5120,
    mapLng: 77.1650,
    mapQuery: "Dera+Mandi,+New+Delhi,+India",
    nearbyPlaces: [
      { Icon: Award, cat: "Education", places: "The Mother's International (8 km) · Sanskriti School (10 km)" },
      { Icon: Shield, cat: "Healthcare", places: "AIIMS (14 km) · Primus Super Specialty (7 km)" },
      { Icon: MoveRight, cat: "Connectivity", places: "Chattarpur Metro (6 km) · NH-48 via Mehrauli (8 km)" },
      { Icon: Home, cat: "Shopping", places: "Garden of Five Senses (4 km) · MGF Metropolitian (12 km)" },
    ],
    investment: [
      { Icon: TrendingUp, val: "14–18%", label: "Annual Appreciation" },
      { Icon: Home, val: "₹4 L/mo", label: "Event Rental" },
      { Icon: MapPin, val: "Top 5%", label: "South Delhi Index" },
      { Icon: Calendar, val: "2028", label: "Ring Road Upgrade" },
      { Icon: Award, val: "Clear Title", label: "No Encumbrance" },
      { Icon: Zap, val: "₹900 Cr", label: "Zone Investment" },
    ],
  },
  {
    id: 4,
    name: "Magnolia Grand Villa",
    type: "Villa",
    location: "Sector 46, Gurugram",
    price: "₹14.50 Cr",
    priceNote: "Price on application — by appointment only",
    bedrooms: 7,
    bathrooms: 9,
    land: "1,000 sq.yd",
    built: "12,400 sq.ft",
    parking: 10,
    status: "Ready to Move",
    furnishing: "Fully Furnished",
    yearBuilt: 2023,
    description: "Gurugram's most palatial independent villa across four floors, with a rooftop infinity pool, home theatre, and interiors by Delhi-based Sussanne Khan Design Studio.",
    longDesc: "Magnolia Grand stands as the definitive statement of luxury in the NCR. Conceived across four meticulous floors, the 12,400 sq.ft villa unfolds as a series of cinematic spaces — a 30-ft double-height entrance foyer, a climate-controlled wine room, a home theatre for 18 guests, and an entire floor dedicated to wellness (gym, steam, plunge pool, and meditation deck). Seven suites — each with a private lounge and wardrobe room — overlook either the canopied front garden or the rear 500 sq.yd private garden. The rooftop infinity pool is among the largest on a private Delhi NCR residence, commanding an uninterrupted 270° skyline view.",
    img: "https://i.pinimg.com/736x/16/54/ac/1654ac2d1df12d6d4c2f83246b60f591.jpg",
    gallery: [
      "https://i.pinimg.com/736x/16/54/ac/1654ac2d1df12d6d4c2f83246b60f591.jpg",
      "https://i.pinimg.com/736x/b6/db/eb/b6dbeb84b7c88f7d13939e246bb56fe0.jpg",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900&q=85",
    ],
    mapLat: 28.4178,
    mapLng: 77.0543,
    mapQuery: "Sector+46,+Gurugram,+Haryana,+India",
    nearbyPlaces: [
      { Icon: Award, cat: "Education", places: "DPS Sector 45 (2 km) · Heritage Xperiential (4 km)" },
      { Icon: Shield, cat: "Healthcare", places: "Medanta Medicity (5 km) · Columbia Asia (6 km)" },
      { Icon: MoveRight, cat: "Connectivity", places: "Huda City Centre Metro (3 km) · NH-48 (4 km)" },
      { Icon: Home, cat: "Shopping", places: "Ambience Mall (3 km) · Galleria Market (2 km)" },
    ],
    investment: [
      { Icon: TrendingUp, val: "22–28%", label: "Annual Appreciation" },
      { Icon: Home, val: "₹10 L/mo", label: "Rental Potential" },
      { Icon: MapPin, val: "Top 1%", label: "NCR Prime Index" },
      { Icon: Calendar, val: "2026", label: "Global City Phase" },
      { Icon: Award, val: "RERA HR", label: "Compliant" },
      { Icon: Zap, val: "₹4,200 Cr", label: "Zone Investment" },
    ],
  },
  {
    id: 5,
    name: "Aravalli Heritage Farmhouse",
    type: "Farmhouse",
    location: "Andheria More, Mehrauli, Delhi",
    price: "₹4.25 Cr",
    priceNote: "Best entry price in Mehrauli belt",
    bedrooms: 4,
    bathrooms: 4,
    land: "1.7 Acres",
    built: "4,400 sq.ft",
    parking: 5,
    status: "Ready to Move",
    furnishing: "Semi-Furnished",
    yearBuilt: 2020,
    description: "A heritage-restoration farmhouse on the Mehrauli-Gurgaon ridge with original Delhi quartzite stonework and views of the 14th-century Qutb complex silhouette.",
    longDesc: "Aravalli Heritage was painstakingly built using traditional Delhi quartzite and lime plaster — the same materials that built the Qutb Minar 800 metres away. The result is a farmhouse that looks as if it has always stood here, yet carries every modern comfort within. Thick rubble-stone walls keep interiors naturally cool; arched verandahs dissolve the boundary between inner and outer living. The 1.7-acre plot borders the Mehrauli Archaeological Park forest, meaning the southern and eastern boundaries will remain forest forever — an irreplaceable quality of privacy and green outlook.",
    img: "https://i.pinimg.com/736x/ae/39/32/ae39322beaab5100e4f166769b77e8ce.jpg",
    gallery: [
      "https://i.pinimg.com/736x/ae/39/32/ae39322beaab5100e4f166769b77e8ce.jpg",
      "https://i.pinimg.com/736x/09/5d/8f/095d8f686e11e4bd3acfe0d8b2a5dc67.jpg",
    ],
    mapLat: 28.5240,
    mapLng: 77.1853,
    mapQuery: "Andheria+More,+Mehrauli,+New+Delhi,+India",
    nearbyPlaces: [
      { Icon: Award, cat: "Education", places: "Sanskriti School (5 km) · British School (8 km)" },
      { Icon: Shield, cat: "Healthcare", places: "Max Saket (6 km) · Fortis Vasant Kunj (7 km)" },
      { Icon: MoveRight, cat: "Connectivity", places: "Qutb Minar Metro (2 km) · NH-48 (5 km)" },
      { Icon: Home, cat: "Shopping", places: "Select City Walk (8 km) · DLF Promenade (7 km)" },
    ],
    investment: [
      { Icon: TrendingUp, val: "13–17%", label: "Annual Appreciation" },
      { Icon: Home, val: "₹2.5 L/mo", label: "Rental Yield" },
      { Icon: MapPin, val: "Heritage Zone", label: "Protected Belt" },
      { Icon: Calendar, val: "Perennial", label: "Forest Boundary" },
      { Icon: Award, val: "Clear Title", label: "No Encumbrance" },
      { Icon: Zap, val: "₹600 Cr", label: "Zone Investment" },
    ],
  },
  {
    id: 6,
    name: "Suncrest Villa Sector 57",
    type: "Villa",
    location: "Sector 57, Gurugram",
    price: "₹8.70 Cr",
    priceNote: "Launch pricing — 2 units remaining",
    bedrooms: 5,
    bathrooms: 6,
    land: "750 sq.yd",
    built: "8,000 sq.ft",
    parking: 5,
    status: "Under Construction",
    furnishing: "Fully Furnished",
    yearBuilt: 2025,
    description: "A contemporary villa by DADA Partners architects in Gurugram's quietest luxury sector — triple-height atrium, heated lap pool and a 1,500 sq.ft sky lounge on the third floor.",
    longDesc: "Suncrest Villa is the final signature project from the desk of DADA Partners, the firm celebrated for Gurugram's Aralias and The Camellias. The triple-height atrium at the home's centre floods every floor with natural light, while floor-to-ceiling glass on the south façade opens the living floor entirely to the heated lap pool and garden. Five suites are distributed across two upper floors, each with bespoke walk-in wardrobes and private balconies. The crown jewel is a 1,500 sq.ft sky lounge on the third floor — with a retractable roof, bar, and 360° views over the Sector 57 treeline — a space with no parallel in private Gurugram residences.",
    img: "https://i.pinimg.com/736x/fa/2b/f6/fa2bf6c1f4cd3779ac03d401b78c1f43.jpg",
    gallery: [
      "https://i.pinimg.com/736x/fa/2b/f6/fa2bf6c1f4cd3779ac03d401b78c1f43.jpg",
      "https://i.pinimg.com/736x/75/0d/08/750d08ec68de8b5effb63cb44a76b07a.jpg",
      "https://i.pinimg.com/736x/ba/9a/01/ba9a010db8d15828feeb1b8fc34fad11.jpg",
    ],
    mapLat: 28.4230,
    mapLng: 77.0980,
    mapQuery: "Sector+57,+Gurugram,+Haryana,+India",
    nearbyPlaces: [
      { Icon: Award, cat: "Education", places: "Pathways World School (4 km) · Lancers Convent (3 km)" },
      { Icon: Shield, cat: "Healthcare", places: "CK Birla (5 km) · Paras Hospitals (4 km)" },
      { Icon: MoveRight, cat: "Connectivity", places: "Sohna Road (1 km) · Golf Course Ext. Rd (2 km)" },
      { Icon: Home, cat: "Shopping", places: "Omaxe Gurgaon Mall (3 km) · South Point Mall (4 km)" },
    ],
    investment: [
      { Icon: TrendingUp, val: "20–26%", label: "Annual Appreciation" },
      { Icon: Home, val: "₹7 L/mo", label: "Rental Potential" },
      { Icon: MapPin, val: "Top 2%", label: "Gurugram Index" },
      { Icon: Calendar, val: "2026", label: "Possession Date" },
      { Icon: Award, val: "RERA HR", label: "Compliant" },
      { Icon: Zap, val: "₹1,800 Cr", label: "Zone Investment" },
    ],
  },
  {
    id: 7,
    name: "Nirvana Greens Farmhouse",
    type: "Farmhouse",
    location: "Dera Mandi Road, New Delhi",
    price: "₹7.20 Cr",
    priceNote: "Inclusive of full landscaping & pool",
    bedrooms: 4,
    bathrooms: 5,
    land: "3.1 Acres",
    built: "5,600 sq.ft",
    parking: 8,
    status: "Ready to Move",
    furnishing: "Semi-Furnished",
    yearBuilt: 2021,
    description: "Three private acres along Dera Mandi Road — the Bali-inspired farmhouse features a 20-metre infinity pool, meditation garden and certified organic kitchen garden, just 12 km from Vasant Vihar.",
    longDesc: "Nirvana Greens was conceived as a wellness sanctuary — a private world of 3.1 acres where mature neem and jamun groves create natural privacy on all sides. The central pavilion is designed after traditional haveli planning: an open courtyard at the heart, with wings extending to four bedroom suites, a yoga studio, and an independent guest cottage. The 20-metre infinity pool is oriented east, catching the morning light over the orchard. A 2,000 sq.ft organic kitchen garden supplies the household year-round. This is countryside living without compromise — 12 km from South Delhi's finest restaurants and private schools.",
    img: "https://i.pinimg.com/736x/13/63/07/136307e2ffc4579288818a995a9ba875.jpg",
    gallery: [
      "https://i.pinimg.com/736x/13/63/07/136307e2ffc4579288818a995a9ba875.jpg",
      "https://i.pinimg.com/736x/84/9c/7f/849c7f56acc772145bc1c8507af485dd.jpg",
    ],
    mapLat: 28.5120,
    mapLng: 77.1650,
    mapQuery: "Dera+Mandi,+New+Delhi,+India",
    nearbyPlaces: [
      { Icon: Award, cat: "Education", places: "The Mother's International (8 km) · Sanskriti School (10 km)" },
      { Icon: Shield, cat: "Healthcare", places: "AIIMS (14 km) · Primus Super Specialty (7 km)" },
      { Icon: MoveRight, cat: "Connectivity", places: "Chattarpur Metro (6 km) · NH-48 via Mehrauli (8 km)" },
      { Icon: Home, cat: "Shopping", places: "Garden of Five Senses (4 km) · MGF Metropolitian (12 km)" },
    ],
    investment: [
      { Icon: TrendingUp, val: "14–18%", label: "Annual Appreciation" },
      { Icon: Home, val: "₹4 L/mo", label: "Event Rental" },
      { Icon: MapPin, val: "Top 5%", label: "South Delhi Index" },
      { Icon: Calendar, val: "2028", label: "Ring Road Upgrade" },
      { Icon: Award, val: "Clear Title", label: "No Encumbrance" },
      { Icon: Zap, val: "₹900 Cr", label: "Zone Investment" },
    ],
  },{
    id: 8,
    name: "Nirvana Greens Farmhouse",
    type: "Farmhouse",
    location: "Dera Mandi Road, New Delhi",
    price: "₹7.20 Cr",
    priceNote: "Inclusive of full landscaping & pool",
    bedrooms: 4,
    bathrooms: 5,
    land: "3.1 Acres",
    built: "5,600 sq.ft",
    parking: 8,
    status: "Ready to Move",
    furnishing: "Semi-Furnished",
    yearBuilt: 2021,
    description: "Three private acres along Dera Mandi Road — the Bali-inspired farmhouse features a 20-metre infinity pool, meditation garden and certified organic kitchen garden, just 12 km from Vasant Vihar.",
    longDesc: "Nirvana Greens was conceived as a wellness sanctuary — a private world of 3.1 acres where mature neem and jamun groves create natural privacy on all sides. The central pavilion is designed after traditional haveli planning: an open courtyard at the heart, with wings extending to four bedroom suites, a yoga studio, and an independent guest cottage. The 20-metre infinity pool is oriented east, catching the morning light over the orchard. A 2,000 sq.ft organic kitchen garden supplies the household year-round. This is countryside living without compromise — 12 km from South Delhi's finest restaurants and private schools.",
    img: "https://i.pinimg.com/736x/13/63/07/136307e2ffc4579288818a995a9ba875.jpg",
    gallery: [
      "https://i.pinimg.com/736x/13/63/07/136307e2ffc4579288818a995a9ba875.jpg",
      "https://i.pinimg.com/736x/84/9c/7f/849c7f56acc772145bc1c8507af485dd.jpg",
    ],
    mapLat: 28.5120,
    mapLng: 77.1650,
    mapQuery: "Dera+Mandi,+New+Delhi,+India",
    nearbyPlaces: [
      { Icon: Award, cat: "Education", places: "The Mother's International (8 km) · Sanskriti School (10 km)" },
      { Icon: Shield, cat: "Healthcare", places: "AIIMS (14 km) · Primus Super Specialty (7 km)" },
      { Icon: MoveRight, cat: "Connectivity", places: "Chattarpur Metro (6 km) · NH-48 via Mehrauli (8 km)" },
      { Icon: Home, cat: "Shopping", places: "Garden of Five Senses (4 km) · MGF Metropolitian (12 km)" },
    ],
    investment: [
      { Icon: TrendingUp, val: "14–18%", label: "Annual Appreciation" },
      { Icon: Home, val: "₹4 L/mo", label: "Event Rental" },
      { Icon: MapPin, val: "Top 5%", label: "South Delhi Index" },
      { Icon: Calendar, val: "2028", label: "Ring Road Upgrade" },
      { Icon: Award, val: "Clear Title", label: "No Encumbrance" },
      { Icon: Zap, val: "₹900 Cr", label: "Zone Investment" },
    ],
  },
];

const amenities = [
  { icon: Waves, label: "Private Pool" },
  { icon: Leaf, label: "Landscaped Gardens" },
  { icon: Wifi, label: "Smart Home" },
  { icon: Shield, label: "24×7 Security" },
  { icon: Wind, label: "Climate Control" },
  { icon: Dumbbell, label: "Private Gym" },
  { icon: Car, label: "Private Parking" },
  { icon: Sun, label: "Outdoor Lounge" },
  { icon: Zap, label: "Power Backup" },
  { icon: TreePine, label: "Organic Garden" },
  { icon: Eye, label: "CCTV Surveillance" },
  { icon: Home, label: "Clubhouse" },
];

// ─── SHARED UI ─────────────────────────────────────────────────────────────
const Eyebrow = ({ children, center }) => (
  <p className="eyebrow" style={{ textAlign: center ? "center" : "left" }}>{children}</p>
);
const GoldDivider = ({ center }) =>
  center ? <span className="divider-gold-center" /> : <span className="divider-gold" />;

const TypeBadge = ({ type }) => (
  <span className="tag-pill" style={{
    background: "rgba(93,143,68,0.10)", border: "1px solid rgba(93,143,68,0.35)",
    color: "#5d8f44", letterSpacing: "1.5px", textTransform: "uppercase", fontSize: 10,
  }}>{type}</span>
);

const StatusBadge = ({ status }) => {
  const ready = status === "Ready to Move";
  return (
    <span className="tag-pill" style={{
      background: ready ? "rgba(52,168,83,0.08)" : "rgba(251,146,60,0.08)",
      border: `1px solid ${ready ? "rgba(52,168,83,0.3)" : "rgba(251,146,60,0.3)"}`,
      color: ready ? "#1E8449" : "#C05621",
      fontSize: 10, textTransform: "uppercase", letterSpacing: "1.5px",
    }}>{status}</span>
  );
};

const BtnGold = ({ children, onClick, full, sm, icon: Icon }) => (
  <button className="btn-gold" onClick={onClick} style={{
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    gap: 8, cursor: "pointer", border: "none",
    background: "#5d8f44", color: "#fff", borderRadius: 10,
    fontFamily: "'DM Sans', sans-serif",
    padding: sm ? "10px 18px" : "14px 24px",
    fontSize: sm ? 11 : 13, fontWeight: 500,
    letterSpacing: "1px", textTransform: "uppercase",
    width: full ? "100%" : "auto",
    whiteSpace: "nowrap",
  }}>
    {Icon && <Icon size={15} />}{children}
  </button>
);

const BtnOutline = ({ children, onClick, full, icon: Icon }) => (
  <button className="btn-outline" onClick={onClick} style={{
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    gap: 8, cursor: "pointer",
    background: "transparent", color: "#5d8f44",
    border: "1.5px solid #5d8f44", borderRadius: 10,
    fontFamily: "'DM Sans', sans-serif", padding: "13px 24px",
    fontSize: 13, fontWeight: 500, letterSpacing: "1px", textTransform: "uppercase",
    width: full ? "100%" : "auto",
    whiteSpace: "nowrap",
  }}>
    {Icon && <Icon size={15} />}{children}
  </button>
);

// ─── NAVBAR ────────────────────────────────────────────────────────────────
const Navbar = ({ onBack, onFilterType }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(244,247,242,0.92)", backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(93,143,68,0.15)",
      }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", flexShrink: 0 }}>
            <div style={{ width: 32, height: 32, background: "#000000", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#5d8f44", fontSize: 14, lineHeight: 1 }}>◆</span>
            </div>
            <div>
              <div className="serif" style={{ fontSize: 18, fontWeight: 500, color: "#000000", lineHeight: 1 }}>EstateElite</div>
              <div style={{ fontSize: 8, letterSpacing: "2.5px", color: "#5d8f44", textTransform: "uppercase", marginTop: 2 }}>Luxury Collection</div>
            </div>
          </div>

          <div className="nav-links" style={{ display: "flex", gap: 28 }}>
            {[
              { label: "Villas", type: "Villa" },
              { label: "Farmhouses", type: "Farmhouse" },
              { label: "All Estates", type: "All" },
            ].map(({ label, type }) => (
              <span
                key={label}
                className="nav-item"
                onClick={() => { onFilterType(type); onBack(); }}
                style={{ fontSize: 11, fontWeight: 500, letterSpacing: "1.5px", textTransform: "uppercase", color: "#4A4A4A" }}
              >
                {label}
              </span>
            ))}
            <span className="nav-item" style={{ fontSize: 11, fontWeight: 500, letterSpacing: "1.5px", textTransform: "uppercase", color: "#4A4A4A" }}>Contact</span>
          </div>

          <div className="nav-cta-desktop">
            <BtnGold sm onClick={() => {}}>Private Viewing</BtnGold>
          </div>

          <button className="nav-hamburger" onClick={() => setMenuOpen(true)} style={{
            display: "none", background: "none", border: "none", cursor: "pointer",
            color: "#000000", padding: 4,
          }}>
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 36 }}>
            <div className="serif" style={{ fontSize: 20, color: "#5d8f44" }}>EstateElite</div>
            <button onClick={() => setMenuOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", color: "#fff" }}>
              <X size={22} />
            </button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {[
              { label: "Villas", type: "Villa" },
              { label: "Farmhouses", type: "Farmhouse" },
              { label: "All Estates", type: "All" },
              { label: "Contact", type: null },
            ].map(({ label, type }, i) => (
              <div key={label} onClick={() => { setMenuOpen(false); if (type) { onFilterType(type); onBack(); } }} style={{
                fontSize: 28, fontFamily: "'Cormorant Garamond', serif", fontWeight: 400,
                color: "#fff", padding: "14px 0",
                borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none",
                cursor: "pointer",
              }}>{label}</div>
            ))}
          </div>
          <div style={{ marginTop: "auto", paddingTop: 32 }}>
            <BtnGold full icon={Phone}>Private Viewing</BtnGold>
          </div>
        </div>
      )}
    </>
  );
};

// ─── PROPERTY CARD ─────────────────────────────────────────────────────────
const PropertyCard = ({ p, onView }) => {
  return (
    <div className="pc-card" onClick={() => onView(p)}>
      <img src={p.img} alt={p.name} className="pc-img" />
      <div style={{
        position: "absolute", top: 16, left: 16, zIndex: 4,
        fontFamily: "'DM Sans', sans-serif", fontSize: 9, fontWeight: 500,
        letterSpacing: "2.5px", textTransform: "uppercase", color: "#fff",
        background: "rgba(255,255,255,0.11)", border: "0.5px solid rgba(255,255,255,0.22)",
        borderRadius: 99, padding: "5px 12px", backdropFilter: "blur(8px)",
      }}>{p.status}</div>

      <div className="pc-default">
        <h3 style={{ fontFamily: "'Jost', sans-serif", fontSize: 24, fontWeight: 600, color: "#fff", lineHeight: 1.2, marginBottom: 6 }}>{p.name}</h3>
        <div style={{ display: "flex", alignItems: "center", gap: 5, fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>
          <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#5d8f44", flexShrink: 0 }} />
          {p.location}
        </div>
      </div>
      <div className="pc-hover">
        <div className="pc-inner">
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: "#5d8f44", marginBottom: 5 }}>{p.type} · {p.land}</div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 34, fontWeight: 400, color: "#fff", lineHeight: 1, marginBottom: 4 }}>
            {p.price}
          </div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 17, fontWeight: 300, color: "rgba(255,255,255,0.55)", marginBottom: 12 }}>{p.name}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 5, fontFamily: "'Jost', sans-serif", fontSize: 10, letterSpacing: "1px", textTransform: "uppercase", color: "rgba(255,255,255,0.42)", marginBottom: 14 }}>
            <MapPin size={11} color="#5d8f44" strokeWidth={1.5} />{p.location}
          </div>
          <div style={{ width: 32, height: 0.5, background: "rgba(93,143,68,0.4)", marginBottom: 12 }} />
          <div style={{ display: "flex", marginBottom: 16 }}>
            {[{ val: p.bedrooms, label: "Beds" }, { val: p.bathrooms, label: "Baths" }, { val: p.built, label: "Sq.ft" }, { val: p.parking, label: "Park" }].map(({ val, label }, i, arr) => (
              <div key={label} style={{ display: "flex", flexDirection: "column", gap: 2, paddingRight: i < arr.length - 1 ? 14 : 0, marginRight: i < arr.length - 1 ? 14 : 0, borderRight: i < arr.length - 1 ? "0.5px solid rgba(255,255,255,0.10)" : "none" }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 17, fontWeight: 500, color: "#fff", lineHeight: 1 }}>{val}</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 8.5, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.32)" }}>{label}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 12, borderTop: "0.5px solid rgba(93,143,68,0.18)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "'DM Sans', sans-serif", fontSize: 9.5, fontWeight: 500, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: p.status === "Ready to Move" ? "#4ade80" : "#fb923c" }} />{p.status}
            </div>
            <div className="pc-cta-arrow"><MoveRight size={14} /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── LISTING PAGE ──────────────────────────────────────────────────────────
const ListingPage = ({ onView, defaultType }) => {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState(defaultType || "All");
  const [bedFilter, setBedFilter] = useState("Any");

  const filtered = properties.filter(p => {
    const q = search.toLowerCase();
    const matchQ = p.name.toLowerCase().includes(q) || p.location.toLowerCase().includes(q);
    const matchT = typeFilter === "All" || p.type === typeFilter;
    const matchB = bedFilter === "Any" || p.bedrooms >= parseInt(bedFilter);
    return matchQ && matchT && matchB;
  });

  const inputStyle = {
    border: "1px solid rgba(0,0,0,0.10)", borderRadius: 10,
    padding: "12px 16px", fontSize: 13, fontFamily: "'DM Sans', sans-serif",
    background: "#fff", color: "#000000", width: "100%",
  };

  return (
    <div>
      {/* HERO */}
      <div className="hero-section" style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=85")`,
        backgroundSize: "cover", backgroundPosition: "center",
        padding: "90px 36px 72px", position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)", zIndex: 1 }} />
        <div className="anim-1 hero-inner" style={{ maxWidth: 640, position: "relative", zIndex: 3 }}>
          <Eyebrow>Curated Estates · NCR India</Eyebrow>
          <h1 className="serif hero-h1" style={{ fontSize: "clamp(36px,5vw,66px)", fontWeight: 700, color: "#fff", lineHeight: 1.1, marginTop: 14 }}>
            DISCOVER LUXURY<br />
            <span style={{ color: "#5d8f44" }}>VILLAS & FARMHOUSES</span>
          </h1>
          <span className="divider-gold" style={{ marginTop: 24, marginBottom: 20 }} />
          <p style={{ color: "#E5E5E5", fontSize: 15, lineHeight: 1.8, maxWidth: 480 }}>
            Exclusive estates in Delhi, Gurugram and Noida — handpicked for privacy, provenance and uncompromising luxury.
          </p>
          <div className="hero-btns" style={{ display: "flex", gap: 12, marginTop: 32 }}>
            <Link to="/about">
            <BtnGold icon={Search}>Explore Us</BtnGold></Link>
            <Link to="/contact">
            <BtnOutline icon={Phone}>Speak to Advisor</BtnOutline></Link>
          </div>
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="filter-bar" style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)", padding: "16px 24px" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ position: "relative", flex: "1 1 200px", minWidth: 0 }}>
            <Search size={13} style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)", color: "#9A9A9A" }} />
            <input className="input-field" style={{ ...inputStyle, paddingLeft: 36 }}
              placeholder="Search by name or location…"
              value={search} onChange={e => setSearch(e.target.value)} />
          </div>
          {[
            { label: "Type", value: typeFilter, onChange: setTypeFilter, opts: [["All", "All Types"], ["Villa", "Villa"], ["Farmhouse", "Farmhouse"]] },
            { label: "Budget", value: "", onChange: () => {}, opts: [["", "Any Budget"], ["5cr", "Under ₹5 Cr"], ["10cr", "₹5–10 Cr"], ["up", "Above ₹10 Cr"]] },
            { label: "Beds", value: bedFilter, onChange: setBedFilter, opts: [["Any", "Any Beds"], ["4", "4+ Beds"], ["5", "5+ Beds"], ["6", "6+ Beds"]] },
          ].map(({ label, value, onChange, opts }) => (
            <div key={label} className="filter-select-wrap" style={{ position: "relative", flex: "1 1 130px", minWidth: 0 }}>
              <select className="input-field filter-select" style={{ ...inputStyle, paddingRight: 32 }}
                value={value} onChange={e => onChange(e.target.value)}>
                {opts.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
              </select>
            </div>
          ))}
          <BtnGold icon={SlidersHorizontal} sm>Filter</BtnGold>
        </div>
      </div>

      {/* RESULTS */}
      <div className="results-pad" style={{ maxWidth: 1320, margin: "0 auto", padding: "48px 24px 72px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32, flexWrap: "wrap", gap: 12 }}>
          <div>
            <Eyebrow>Exclusive Listings</Eyebrow>
            <h2 style={{ fontSize: 32, fontWeight: 700, color: "#000000", marginTop: 8, fontFamily: "'Jost',sans-serif" }}>{filtered.length} Premium Estates</h2>
          </div>
        </div>
        <div className="card-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
          {filtered.map(p => <PropertyCard key={p.id} p={p} onView={onView} />)}
        </div>
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "80px 0", color: "#8A8A8A" }}>
            <p style={{ fontSize: 18, fontFamily: "'Cormorant Garamond', serif", marginBottom: 8 }}>No estates match your search.</p>
            <p style={{ fontSize: 13 }}>Try adjusting your filters or search term.</p>
          </div>
        )}
      </div>
    </div>
  );
};

// ─── DETAIL PAGE ───────────────────────────────────────────────────────────
const DetailPage = ({ property: p, onBack, onView }) => {
  const [activeImg, setActiveImg] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const sameType = properties.filter(x => x.id !== p.id && x.type === p.type);
  const otherType = properties.filter(x => x.id !== p.id && x.type !== p.type);
  const similar = [...sameType, ...otherType].slice(0, 4);

  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBVizdQeh3udy11xDc5Ao2YStR2gLc-rfc&q=Milak%20Lachchhi%2C%20Milak%20Lachhi%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20203207%2C%20India&maptype=roadmap&zoom=14`;

  const inputStyle = {
    width: "100%", border: "1px solid rgba(0,0,0,0.10)", borderRadius: 10,
    padding: "13px 16px", fontSize: 13, fontFamily: "'DM Sans', sans-serif",
    background: "#F4F7F2", color: "#000000",
  };

  return (
    <div style={{ background: "#F4F7F2" }}>
      <div className="page-pad" style={{ maxWidth: 1320, margin: "0 auto", padding: "32px 24px 0" }}>

        {/* Back + Breadcrumb */}
        <div className="detail-back-bar" style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 28 }}>
          <button onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", cursor: "pointer", color: "#8A8A8A", fontSize: 13, fontFamily: "'DM Sans', sans-serif", whiteSpace: "nowrap" }}>
            <ArrowLeft size={15} strokeWidth={2} />Back
          </button>
          <span className="detail-breadcrumb" style={{ display: "flex", alignItems: "center", gap: 8, color: "#C0B89A", fontSize: 13 }}>
            <ChevronRight size={12} color="#C0B89A" />
            <span style={{ cursor: "pointer", color: "#5d8f44" }} onClick={onBack}>{p.type}s</span>
            <ChevronRight size={12} color="#C0B89A" />
            <span style={{ color: "#000000", fontWeight: 500 }}>{p.name}</span>
          </span>
        </div>

        {/* Two-column hero */}
        <div className="detail-hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: 32, alignItems: "start", marginBottom: 64 }}>

          {/* Gallery */}
          <div>
            <div className="gallery-main" style={{ height: 460 }}>
              <img key={activeImg} src={p.gallery[activeImg]} alt={p.name}
                style={{ width: "100%", height: "100%", objectFit: "cover", animation: "fadeUp 0.35s ease" }} />
              <div style={{ position: "absolute", top: 18, left: 18, display: "flex", gap: 8, flexWrap: "wrap" }}>
                <TypeBadge type={p.type} />
                <StatusBadge status={p.status} />
              </div>
            </div>
            <div className="thumb-strip" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8, marginTop: 10 }}>
              {p.gallery.map((img, i) => (
                <div key={i} className="thumb-item" onClick={() => setActiveImg(i)} style={{
                  height: 80, borderRadius: 10, overflow: "hidden",
                  border: `2px solid ${i === activeImg ? "#5d8f44" : "transparent"}`,
                  opacity: i === activeImg ? 1 : 0.55,
                }}>
                  <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              ))}
            </div>
          </div>

          {/* Info panel */}
          <div className="detail-sticky" style={{ position: "sticky", top: 80 }}>
            <h1 className="serif" style={{ fontSize: "clamp(26px,3.5vw,36px)", fontWeight: 500, color: "#000000", lineHeight: 1.15, marginBottom: 10 }}>{p.name}</h1>
            <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#8A8A8A", fontSize: 13, marginBottom: 20 }}>
              <MapPin size={13} strokeWidth={2} color="#5d8f44" />{p.location}
            </div>
            <div className="price-box" style={{ background: "#000000", borderRadius: 14, padding: "22px 24px", marginBottom: 20 }}>
              <div style={{ fontSize: 10, color: "#8A8A8A", letterSpacing: "2px", textTransform: "uppercase", marginBottom: 5 }}>Starting Price</div>
              <div className="serif" style={{ fontSize: 36, fontWeight: 600, color: "#5d8f44", lineHeight: 1 }}>{p.price}</div>
              <div style={{ fontSize: 12, color: "#6A6A6A", marginTop: 5 }}>{p.priceNote}</div>
            </div>
            <div className="spec-mini-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: 18 }}>
              {[
                { Icon: Bed, label: "Bedrooms", val: p.bedrooms },
                { Icon: Bath, label: "Bathrooms", val: p.bathrooms },
                { Icon: Car, label: "Parking", val: p.parking },
                { Icon: TreePine, label: "Land", val: p.land },
                { Icon: Maximize2, label: "Built-up", val: p.built },
                { Icon: Calendar, label: "Built", val: p.yearBuilt },
              ].map(({ Icon, label, val }) => (
                <div key={label} className="spec-mini-card" style={{ background: "#fff", borderRadius: 10, padding: "12px 10px", textAlign: "center", border: "1px solid rgba(0,0,0,0.06)" }}>
                  <Icon size={15} strokeWidth={1.5} color="#5d8f44" style={{ margin: "0 auto 5px" }} />
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#000000", fontFamily: "'Cormorant Garamond', serif" }}>{val}</div>
                  <div style={{ fontSize: 9, color: "#A0A0A0", textTransform: "uppercase", letterSpacing: "0.8px", marginTop: 2 }}>{label}</div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 18 }}>
              <Link to="/contact">
              <BtnOutline full icon={Phone}>Contact Advisor</BtnOutline></Link>
            </div>
            <div className="trust-row" style={{ display: "flex", justifyContent: "space-around", paddingTop: 14, borderTop: "1px solid rgba(0,0,0,0.07)", flexWrap: "wrap", gap: 8 }}>
              {["RERA Verified", "Title Clear", "VAT Inclusive"].map(b => (
                <div key={b} style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: "#6A6A6A" }}>
                  <CheckCircle2 size={11} color="#5d8f44" />{b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* OVERVIEW + SPECS */}
      <div style={{ background: "#fff", borderTop: "1px solid rgba(0,0,0,0.06)", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div className="specs-form-grid page-pad" style={{ maxWidth: 1320, margin: "0 auto", padding: "56px 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }}>
          <div>
            <Eyebrow>The Estate</Eyebrow>
            <GoldDivider />
            <h2 className="serif section-title" style={{ fontSize: 34, fontWeight: 400, color: "#000000", lineHeight: 1.3, marginBottom: 22 }}>
              A Residence Beyond <span style={{ color: "#5d8f44" }}>Comparison</span>
            </h2>
            <p style={{ fontSize: 15, color: "#5A5A5A", lineHeight: 1.85 }}>{p.longDesc}</p>
          </div>
          <div>
            <Eyebrow>Specifications</Eyebrow>
            <GoldDivider />
            <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid rgba(0,0,0,0.07)" }}>
              {[
                ["Property Type", p.type], ["Status", p.status], ["Land Area", p.land],
                ["Built-up Area", p.built], ["Bedrooms", p.bedrooms], ["Bathrooms", p.bathrooms],
                ["Furnishing", p.furnishing], ["Year Built", p.yearBuilt],
              ].map(([k, v], i) => (
                <div key={k} className="spec-row" style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "13px 18px",
                  background: i % 2 === 0 ? "#F6FAF4" : "#fff",
                  borderBottom: i < 7 ? "1px solid rgba(0,0,0,0.05)" : "none",
                }}>
                  <span style={{ fontSize: 12, color: "#9A9A9A", textTransform: "uppercase", letterSpacing: "0.8px" }}>{k}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#000000" }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* AMENITIES */}
      <div className="page-pad" style={{ maxWidth: 1320, margin: "0 auto", padding: "56px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <Eyebrow center>What's Included</Eyebrow>
          <GoldDivider center />
          <h2 className="serif section-title" style={{ fontSize: 34, fontWeight: 500, color: "#000000" }}>Luxury Amenities</h2>
        </div>
        <div className="amenities-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 12 }}>
          {amenities.map(({ icon: Icon, label }) => (
            <div key={label} className="amenity-chip" style={{
              background: "#fff", borderRadius: 14, border: "1px solid rgba(0,0,0,0.07)", padding: "20px 14px", textAlign: "center",
            }}>
              <Icon size={20} strokeWidth={1.5} color="#5d8f44" style={{ margin: "0 auto 8px", display: "block" }} />
              <div style={{ fontSize: 12, color: "#3A3A3A", fontWeight: 500, lineHeight: 1.3 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* LOCATION + INVESTMENT */}
      <div style={{ background: "#fff", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <div className="location-invest-grid page-pad" style={{ maxWidth: 1320, margin: "0 auto", padding: "56px 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 52 }}>
          <div>
            <Eyebrow>Where You'll Live</Eyebrow>
            <GoldDivider />
            <h2 className="serif section-title" style={{ fontSize: 30, fontWeight: 500, color: "#000000", marginBottom: 22 }}>Location & Connectivity</h2>

            <div style={{ borderRadius: 14, overflow: "hidden", marginBottom: 18, border: "1px solid rgba(93,143,68,0.25)", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
              <iframe
                className="map-iframe"
                title={`Map - ${p.name}`}
                src={mapSrc}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16, padding: "10px 14px", background: "#F4F7F2", borderRadius: 10, border: "1px solid rgba(93,143,68,0.18)" }}>
              <MapPin size={13} color="#5d8f44" strokeWidth={1.8} style={{ flexShrink: 0 }} />
              <span style={{ fontSize: 12, color: "#4A4A4A" }}>{p.location}</span>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${p.mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: "auto", fontSize: 11, color: "#5d8f44", textDecoration: "none", fontWeight: 500, letterSpacing: "0.5px", whiteSpace: "nowrap" }}
              >
                Open in Maps →
              </a>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {(p.nearbyPlaces || []).map(({ Icon, cat, places }) => (
                <div key={cat} style={{ display: "flex", gap: 12, padding: "11px 14px", background: "#F4F7F2", borderRadius: 10 }}>
                  <Icon size={15} color="#5d8f44" strokeWidth={1.5} style={{ flexShrink: 0, marginTop: 1 }} />
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "#000000", marginBottom: 2 }}>{cat}</div>
                    <div style={{ fontSize: 11, color: "#8A8A8A" }}>{places}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Eyebrow>Why Invest</Eyebrow>
            <GoldDivider />
            <h2 className="serif section-title" style={{ fontSize: 30, fontWeight: 500, color: "#000000", marginBottom: 22 }}>Investment Case</h2>
            <div className="invest-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {(p.investment || []).map(({ Icon, val, label }) => (
                <div key={label} className="invest-card" style={{ background: "#000000", borderRadius: 14, padding: "18px 16px", border: "1px solid rgba(93,143,68,0.15)" }}>
                  <Icon size={16} color="#5d8f44" strokeWidth={1.5} style={{ marginBottom: 8 }} />
                  <div className="serif" style={{ fontSize: 24, fontWeight: 600, color: "#5d8f44", lineHeight: 1 }}>{val}</div>
                  <div style={{ fontSize: 10, color: "#6A6A6A", marginTop: 5, textTransform: "uppercase", letterSpacing: "0.8px" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ADVISOR + FORM */}
      <div className="page-pad" style={{ maxWidth: 1320, margin: "0 auto", padding: "56px 24px" }}>
        <div className="advisor-form-grid" style={{ display: "grid", gridTemplateColumns: "320px 1fr", gap: 24 }}>
          <div className="advisor-card" style={{ background: "#fff", borderRadius: 18, border: "1px solid rgba(0,0,0,0.07)", padding: "28px 24px", height: "fit-content" }}>
            <Eyebrow>Your Advisor</Eyebrow>
            <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "18px 0" }}>
              <div style={{ width: 58, height: 58, borderRadius: "50%", background: "#000000", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span className="serif" style={{ fontSize: 20, color: "#5d8f44", fontWeight: 600 }}>RK</span>
              </div>
              <div>
                <div className="serif" style={{ fontSize: 19, fontWeight: 600, color: "#000000" }}>Rahul Khanna</div>
                <div style={{ fontSize: 12, color: "#5d8f44", fontWeight: 500, marginTop: 2 }}>Senior Luxury Advisor · NCR</div>
                <div style={{ display: "flex", gap: 2, marginTop: 5 }}>
                  {[1,2,3,4,5].map(i => <Star key={i} size={10} fill="#5d8f44" color="#5d8f44" />)}
                  <span style={{ fontSize: 11, color: "#9A9A9A", marginLeft: 4 }}>4.9 / 5</span>
                </div>
              </div>
            </div>
            <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)", paddingTop: 18, display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
              {[
                { Icon: Phone, val: "+91 98112 45678" },
                { Icon: Mail, val: "rahul@estateelite.in" },
                { Icon: MessageSquare, val: "WhatsApp Available" },
                { Icon: Clock, val: "Mon–Sat, 9am–7pm IST" },
              ].map(({ Icon, val }) => (
                <div key={val} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "#4A4A4A" }}>
                  <Icon size={13} color="#5d8f44" strokeWidth={1.8} />{val}
                </div>
              ))}
            </div>
            <BtnGold full icon={User}>Speak to Advisor</BtnGold>
          </div>

          <div className="form-card" style={{ background: "#fff", borderRadius: 18, border: "1px solid rgba(0,0,0,0.07)", padding: "32px 28px" }}>
            <Eyebrow>Get in Touch</Eyebrow>
            <h3 className="serif" style={{ fontSize: 28, fontWeight: 500, color: "#000000", marginTop: 8, marginBottom: 24 }}>Request a Private Consultation</h3>
            <div className="form-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {[
                { key: "name", label: "Full Name", placeholder: "Your full name", type: "text" },
                { key: "email", label: "Email", placeholder: "Email address", type: "email" },
                { key: "phone", label: "Phone", placeholder: "+91 XXXXX XXXXX", type: "tel" },
              ].map(({ key, label, placeholder, type }) => (
                <div key={key}>
                  <label style={{ display: "block", fontSize: 10, color: "#B0B0B0", textTransform: "uppercase", letterSpacing: "2px", marginBottom: 7 }}>{label}</label>
                  <input className="input-field" type={type} placeholder={placeholder}
                    value={formData[key]} onChange={e => setFormData({ ...formData, [key]: e.target.value })}
                    style={inputStyle} />
                </div>
              ))}
              <div style={{ gridColumn: "1/-1" }}>
                <label style={{ display: "block", fontSize: 10, color: "#B0B0B0", textTransform: "uppercase", letterSpacing: "2px", marginBottom: 7 }}>Message</label>
                <textarea className="input-field" rows={4} placeholder="Tell us your preferred location, budget range, or any specific requirements…"
                  value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}
                  style={{ ...inputStyle, resize: "vertical" }} />
              </div>
            </div>
            <div style={{ marginTop: 18 }}>
              <BtnGold full icon={Mail}>Send Consultation Request</BtnGold>
            </div>
            <p style={{ fontSize: 11, color: "#C0C0C0", textAlign: "center", marginTop: 12 }}>
              We respond within 2 business hours · Private & confidential
            </p>
          </div>
        </div>
      </div>

      {/* SIMILAR ESTATES */}
      <div style={{ background: "#fff", borderTop: "1px solid rgba(0,0,0,0.06)", padding: "56px 24px" }}>
        <div className="page-pad" style={{ maxWidth: 1320, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32, flexWrap: "wrap", gap: 12 }}>
            <div>
              <Eyebrow>Explore More</Eyebrow>
              <GoldDivider />
              <h2 className="serif section-title" style={{ fontSize: 34, fontWeight: 500, color: "#000000" }}>Similar Estates</h2>
            </div>
            <BtnOutline icon={MoveRight} onClick={onBack}>View All</BtnOutline>
          </div>
          <div className="similar-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px,1fr))", gap: 20 }}>
            {similar.map(x => (
              <PropertyCard key={x.id} p={x} onView={onView} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── FOOTER ────────────────────────────────────────────────────────────────
const Footer = () => (
  <footer style={{ background: "#000000", padding: "48px 24px 24px" }}>
    <div className="footer-grid" style={{ maxWidth: 1320, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 36, marginBottom: 40, color: "#6A6A6A" }}>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          <div style={{ width: 28, height: 28, background: "#5d8f44", borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#fff", fontSize: 12 }}>◆</span>
          </div>
          <span className="serif" style={{ fontSize: 17, color: "#fff" }}>EstateElite</span>
        </div>
        <p style={{ fontSize: 13, lineHeight: 1.8, maxWidth: 220 }}>
          NCR's premier platform for luxury villas and farmhouses. Curated for the discerning few.
        </p>
        <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
          {[Mail, Phone, MessageSquare].map((Icon, i) => (
            <div key={i} style={{ width: 32, height: 32, borderRadius: 8, border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
              <Icon size={13} color="#6A6A6A" />
            </div>
          ))}
        </div>
      </div>
      <div className="footer-links-row">
        {[
          { title: "Properties", links: ["Luxury Villas", "Premium Farmhouses", "Estate Homes", "Weekend Retreats"] },
          { title: "Company", links: ["About Us", "Our Advisors", "Success Stories", "Careers"] },
          { title: "Support", links: ["Contact Us", "Privacy Policy", "Terms of Use", "RERA Info"] },
        ].map(({ title, links }) => (
          <div key={title} style={{ display: "contents" }}>
            <div>
              <div style={{ fontSize: 10, color: "#5d8f44", fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: 16 }}>{title}</div>
              {links.map(l => (
                <div key={l} className="nav-item" style={{ fontSize: 13, marginBottom: 9, color: "#6A6A6A" }}>{l}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="footer-bottom" style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 22, maxWidth: 1320, margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
      <span style={{ fontSize: 12, color: "#4A4A4A" }}>© 2026 WALORA GROUPS Pvt. Ltd. All rights reserved.</span>
      <span style={{ fontSize: 12, color: "#5d8f44", letterSpacing: "1px" }}>Crafted for Luxury Living ◆</span>
    </div>
  </footer>
);

// ─── APP ───────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState("listing");
  const [selected, setSelected] = useState(null);
  const [navTypeFilter, setNavTypeFilter] = useState("All");

  const goDetail = (p) => {
    setSelected(p);
    setPage("detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goBack = () => {
    setPage("listing");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <GlobalStyles />
      <div style={{ minHeight: "100vh", background: "#F4F7F2" }}>
        {/* <Navbar onBack={goBack} onFilterType={setNavTypeFilter} /> */}
        {page === "listing" && <ListingPage onView={goDetail} defaultType={navTypeFilter} />}
        {page === "detail" && selected && (
          <DetailPage property={selected} onBack={goBack} onView={goDetail} />
        )}
        {/* <Footer /> */}
      </div>
    </>
  );
}