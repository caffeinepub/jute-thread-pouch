import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, ChevronDown, Leaf, Mail, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Product", href: "#product" },
  { label: "Customization", href: "#customization" },
  { label: "Pricing", href: "#pricing" },
  { label: "Impact", href: "#impact" },
  { label: "Contact", href: "#contact" },
];

const POUCH_COLORS = [
  { label: "Natural", value: "natural", bg: "#E8DCC3", border: "#C9B89A" },
  { label: "Forest Green", value: "green", bg: "#234A2F", border: "#1A3821" },
  { label: "Brown", value: "brown", bg: "#8B5E3C", border: "#6B4828" },
  { label: "Mustard", value: "mustard", bg: "#D4A017", border: "#B08010" },
  { label: "Rose", value: "rose", bg: "#C97B8A", border: "#A55E6D" },
  { label: "Sky Blue", value: "skyblue", bg: "#87CEEB", border: "#5BB3D9" },
  { label: "Lavender", value: "lavender", bg: "#B39DDB", border: "#9575CD" },
  { label: "Coral", value: "coral", bg: "#FF7F6E", border: "#E05A4A" },
  { label: "Teal", value: "teal", bg: "#26A69A", border: "#1A7A70" },
  { label: "Sunflower", value: "sunflower", bg: "#FFD54F", border: "#FFC107" },
  { label: "Maroon", value: "maroon", bg: "#880E4F", border: "#6A0036" },
  { label: "Slate Blue", value: "slateblue", bg: "#5C6BC0", border: "#3949AB" },
  { label: "Peach", value: "peach", bg: "#FFAB76", border: "#FF8C42" },
  { label: "Mint", value: "mint", bg: "#A8E6CF", border: "#6FCF97" },
  { label: "Crimson", value: "crimson", bg: "#DC143C", border: "#A50E2D" },
  { label: "Navy", value: "navy", bg: "#1A237E", border: "#0D1257" },
  { label: "Olive", value: "olive", bg: "#808000", border: "#5C5C00" },
  { label: "Plum", value: "plum", bg: "#8E24AA", border: "#6A1B7B" },
  { label: "Gold", value: "gold", bg: "#FFD700", border: "#CCA800" },
  { label: "Turquoise", value: "turquoise", bg: "#40E0D0", border: "#20B2AA" },
  { label: "Hot Pink", value: "hotpink", bg: "#FF69B4", border: "#D44D8E" },
  { label: "Charcoal", value: "charcoal", bg: "#36454F", border: "#1C2B33" },
  { label: "Ivory", value: "ivory", bg: "#FFFFF0", border: "#D4D4B8" },
  { label: "Salmon", value: "salmon", bg: "#FA8072", border: "#D45F52" },
  { label: "Indigo", value: "indigo", bg: "#4B0082", border: "#30005A" },
  { label: "Lime", value: "lime", bg: "#32CD32", border: "#228B22" },
  { label: "Orange", value: "orange", bg: "#FF6600", border: "#CC5200" },
  { label: "Magenta", value: "magenta", bg: "#FF00FF", border: "#CC00CC" },
  { label: "Sienna", value: "sienna", bg: "#A0522D", border: "#7A3C1F" },
  { label: "Baby Blue", value: "babyblue", bg: "#89CFF0", border: "#5AAED1" },
  { label: "Mauve", value: "mauve", bg: "#E0B0FF", border: "#B57BCC" },
  { label: "Sage", value: "sage", bg: "#87AE73", border: "#628A4F" },
  { label: "Ruby", value: "ruby", bg: "#9B111E", border: "#740D17" },
  { label: "Caramel", value: "caramel", bg: "#C68642", border: "#9E6830" },
  {
    label: "Periwinkle",
    value: "periwinkle",
    bg: "#CCCCFF",
    border: "#9999E0",
  },
  { label: "Tangerine", value: "tangerine", bg: "#F28500", border: "#C06800" },
  { label: "Blush", value: "blush", bg: "#F4A7B9", border: "#D4788A" },
  { label: "Cobalt", value: "cobalt", bg: "#0047AB", border: "#003380" },
  { label: "Fern", value: "fern", bg: "#4F7942", border: "#365429" },
  { label: "Amber", value: "amber", bg: "#FFBF00", border: "#CC9900" },
  { label: "Lilac", value: "lilac", bg: "#C8A2C8", border: "#A07AA0" },
  { label: "Denim", value: "denim", bg: "#1560BD", border: "#0E4593" },
  { label: "Copper", value: "copper", bg: "#B87333", border: "#8C5520" },
  { label: "Cerise", value: "cerise", bg: "#DE3163", border: "#B01E49" },
  { label: "Aqua", value: "aqua", bg: "#00FFFF", border: "#00CCCC" },
  { label: "Taupe", value: "taupe", bg: "#483C32", border: "#2E2620" },
  { label: "Champagne", value: "champagne", bg: "#F7E7CE", border: "#D4BF9A" },
  { label: "Jade", value: "jade", bg: "#00A86B", border: "#007A4E" },
  { label: "Russet", value: "russet", bg: "#80461B", border: "#5C3212" },
  {
    label: "Powder Pink",
    value: "powderpink",
    bg: "#FFB6C1",
    border: "#E08090",
  },
  { label: "Steel Blue", value: "steelblue", bg: "#4682B4", border: "#2E5F8A" },
  { label: "Moss", value: "moss", bg: "#8A9A5B", border: "#697845" },
  { label: "Burgundy", value: "burgundy", bg: "#800020", border: "#5A0016" },
  { label: "Custom", value: "custom", bg: "#FFFFFF", border: "#CCCCCC" },
];

const POUCH_FONTS = [
  { label: "Sans Serif", value: "sans", family: "'Arial', sans-serif" },
  { label: "Serif", value: "serif", family: "'Georgia', serif" },
  { label: "Monospace", value: "mono", family: "'Courier New', monospace" },
  { label: "Cursive", value: "cursive", family: "'Brush Script MT', cursive" },
  { label: "Fantasy", value: "fantasy", family: "'Papyrus', fantasy" },
  { label: "Impact", value: "impact", family: "'Impact', sans-serif" },
  { label: "Comic Sans", value: "comic", family: "'Comic Sans MS', cursive" },
  {
    label: "Trebuchet",
    value: "trebuchet",
    family: "'Trebuchet MS', sans-serif",
  },
  {
    label: "Palatino",
    value: "palatino",
    family: "'Palatino Linotype', serif",
  },
  { label: "Garamond", value: "garamond", family: "'Garamond', serif" },
  { label: "Verdana", value: "verdana", family: "'Verdana', sans-serif" },
  { label: "Tahoma", value: "tahoma", family: "'Tahoma', sans-serif" },
  { label: "Gill Sans", value: "gillsans", family: "'Gill Sans', sans-serif" },
  { label: "Optima", value: "optima", family: "'Optima', sans-serif" },
  { label: "Futura", value: "futura", family: "'Futura', sans-serif" },
  { label: "Helvetica", value: "helvetica", family: "'Helvetica', sans-serif" },
  {
    label: "Baskerville",
    value: "baskerville",
    family: "'Baskerville', serif",
  },
  { label: "Bodoni", value: "bodoni", family: "'Bodoni MT', serif" },
  {
    label: "Century Gothic",
    value: "centurygothic",
    family: "'Century Gothic', sans-serif",
  },
  { label: "Candara", value: "candara", family: "'Candara', sans-serif" },
  { label: "Calisto MT", value: "calisto", family: "'Calisto MT', serif" },
  {
    label: "Franklin Gothic",
    value: "franklin",
    family: "'Franklin Gothic Medium', sans-serif",
  },
  { label: "Rockwell", value: "rockwell", family: "'Rockwell', serif" },
  { label: "Segoe UI", value: "segoe", family: "'Segoe UI', sans-serif" },
  { label: "Lucida", value: "lucida", family: "'Lucida Sans', sans-serif" },
  { label: "Cambria", value: "cambria", family: "'Cambria', serif" },
  { label: "Didot", value: "didot", family: "'Didot', serif" },
  { label: "Constantia", value: "constantia", family: "'Constantia', serif" },
  {
    label: "Copperplate",
    value: "copperplate",
    family: "'Copperplate', fantasy",
  },
  { label: "Perpetua", value: "perpetua", family: "'Perpetua', serif" },
  { label: "Broadway", value: "broadway", family: "'Broadway', fantasy" },
  { label: "Bauhaus 93", value: "bauhaus", family: "'Bauhaus 93', fantasy" },
];

const POUCH_STYLES = [
  { label: "Drawstring", value: "drawstring", icon: "🪢" },
  { label: "Zippered", value: "zippered", icon: "🤐" },
  { label: "Button Closure", value: "button", icon: "🔘" },
];

const CONTACT_EMAILS = [
  "kavya.jethwa@shikhaacademy.org",
  "alia.jethva@shikhaacademy.org",
  "shreya.boble@shikhaacademy.org",
  "rashi.tiwari@shikhaacademy.org",
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState("natural");
  const [selectedStyle, setSelectedStyle] = useState("drawstring");
  const [customName, setCustomName] = useState("");
  const [selectedFont, setSelectedFont] = useState("sans");
  const [customPickerColor, setCustomPickerColor] = useState("#E8DCC3");
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const currentColor =
    selectedColor === "custom"
      ? {
          label: "Custom",
          value: "custom",
          bg: customPickerColor,
          border: customPickerColor,
        }
      : (POUCH_COLORS.find((c) => c.value === selectedColor) ??
        POUCH_COLORS[0]);
  const currentFont =
    POUCH_FONTS.find((f) => f.value === selectedFont) ?? POUCH_FONTS[0];

  const handleContactChange = (field: string, value: string) => {
    setContactForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div
      className="min-h-screen font-sans"
      style={{ backgroundColor: "#FAF6ED" }}
    >
      {/* ==================== NAVBAR ==================== */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-jute-beige shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#home" className="flex items-center">
              <img
                src="/assets/generated/logo-square-transparent.dim_400x400.png"
                alt="Jute Thread Pouch Logo"
                className="h-10 w-auto"
              />
            </a>

            {/* Desktop Nav */}
            <nav
              className="hidden lg:flex items-center gap-6"
              aria-label="Main navigation"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-ocid={`nav.${link.label.toLowerCase()}.link`}
                  className="text-sm font-medium text-gray-700 hover:text-jute-darkGreen transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA + Mobile Menu */}
            <div className="flex items-center gap-3">
              <a href="#pricing">
                <Button
                  data-ocid="nav.shop_now.button"
                  className="hidden sm:flex rounded-full bg-jute-darkGreen text-white hover:bg-jute-darkGreen/90 text-sm px-5"
                >
                  Shop Now
                </Button>
              </a>
              <button
                type="button"
                data-ocid="nav.menu.toggle"
                className="lg:hidden p-2 rounded-lg hover:bg-jute-beige transition-colors"
                onClick={() => setMenuOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                {menuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-white border-t border-jute-beige overflow-hidden"
            >
              <nav className="flex flex-col px-4 py-3 gap-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="py-2 px-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-jute-beige/50 hover:text-jute-darkGreen transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <Button
                  className="w-full mt-2 rounded-full bg-jute-darkGreen text-white hover:bg-jute-darkGreen/90"
                  onClick={() => {
                    setMenuOpen(false);
                    window.location.href = "#pricing";
                  }}
                >
                  Shop Now
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* ==================== HERO ==================== */}
        <section id="home" className="relative">
          <div className="grid lg:grid-cols-2 min-h-[600px]">
            {/* Left: Product Image */}
            <div className="relative overflow-hidden min-h-[320px] lg:min-h-[600px]">
              <img
                src="/assets/generated/hero-pouch.dim_800x600.jpg"
                alt="Jute Thread Pouch - eco-friendly handcrafted pouch"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-jute-darkGreen/20" />
            </div>

            {/* Right: Dark Green Panel */}
            <div className="bg-jute-darkGreen flex items-center px-8 py-16 lg:px-14">
              <div className="max-w-lg">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Badge className="mb-5 bg-jute-green/30 text-jute-green border-jute-green/40 text-xs font-semibold uppercase tracking-wider">
                    🌿 Student Startup
                  </Badge>
                  <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
                    Eco-Friendly
                    <br />
                    <span className="text-jute-green">Jute Thread</span>
                    <br />
                    Pouch
                  </h1>
                  <p className="text-white/80 text-lg leading-relaxed mb-8">
                    A sustainable, reusable alternative to plastic pouches —
                    handcrafted from natural jute fibre for students who care
                    about the planet.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href="#pricing">
                      <Button
                        data-ocid="hero.shop_now.button"
                        className="rounded-full bg-jute-green text-white hover:bg-jute-green/90 font-semibold px-7 py-5 text-base shadow-lg"
                      >
                        Shop Now
                      </Button>
                    </a>
                    <a href="#product">
                      <Button
                        data-ocid="hero.explore.button"
                        variant="outline"
                        className="rounded-full border-jute-beige text-jute-beige hover:bg-jute-beige/20 hover:text-jute-beige font-semibold px-7 py-5 text-base"
                      >
                        Explore Options
                      </Button>
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1 text-white/50">
            <span className="text-xs">Scroll</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </div>
        </section>

        {/* ==================== PROBLEM SECTION ==================== */}
        <section
          id="about"
          className="py-20 px-4"
          style={{ backgroundColor: "#FAF6ED" }}
        >
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl lg:text-4xl font-extrabold text-jute-darkGreen mb-4">
                The Problem with Plastic Pouches
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto text-lg">
                Every day, millions of plastic pouches end up polluting our
                environment. The scale of damage is alarming.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "🌊",
                  title: "Drowning Oceans",
                  desc: "8 million metric tons of plastic enter our oceans every year, devastating marine ecosystems and contaminating water supplies.",
                },
                {
                  icon: "♻️",
                  title: "400+ Year Lifespan",
                  desc: "A single plastic pouch takes over 400 years to decompose, leaving a toxic legacy for hundreds of future generations.",
                },
                {
                  icon: "🏫",
                  title: "Students' Daily Waste",
                  desc: "Schools generate massive amounts of plastic waste daily through stationery pouches, bags, and packaging used by students.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-shadow text-center"
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-jute-darkGreen mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== IMPORTANCE OF ACTION ==================== */}
        <section className="py-20 px-4" style={{ backgroundColor: "#E8DCC3" }}>
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/assets/generated/plastic-problem.dim_600x400.jpg"
                alt="Plastic pollution impact"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-card mb-10 object-cover"
                style={{ maxHeight: 280 }}
              />
              <p className="text-2xl lg:text-3xl font-extrabold text-jute-darkGreen mb-6 leading-tight">
                "1 million plastic bags are used{" "}
                <span className="text-jute-brown">every minute</span> globally."
              </p>
              <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                The clock is ticking. Every single-use plastic pouch you swap
                for a jute alternative removes one more piece of harmful waste
                from our planet. Small choices — especially by the young
                generation — add up to enormous change.
              </p>
              <a href="#product">
                <Button
                  data-ocid="action.be_the_change.button"
                  className="rounded-full bg-jute-darkGreen text-white hover:bg-jute-darkGreen/90 font-semibold px-8 py-5 text-base shadow-lg"
                >
                  Be the Change
                </Button>
              </a>
            </motion.div>
          </div>
        </section>

        {/* ==================== OUR SOLUTION ==================== */}
        <section
          id="product"
          className="py-20 px-4"
          style={{ backgroundColor: "#FAF6ED" }}
        >
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="/assets/generated/products-collection.dim_800x500.jpg"
                  alt="Jute Thread Pouch collection"
                  className="w-full rounded-2xl shadow-card object-cover"
                  style={{ maxHeight: 420 }}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Badge className="mb-4 bg-jute-green/15 text-jute-darkGreen border-jute-green/30 text-xs font-semibold uppercase tracking-wider">
                  Our Solution
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-jute-darkGreen mb-5 leading-tight">
                  Introducing the
                  <br />
                  <span className="text-jute-brown">Jute Thread Pouch</span>
                </h2>
                <p className="text-gray-600 mb-7 leading-relaxed">
                  Handcrafted with love by students, for students. Our jute
                  pouches combine sustainability with style — proving that
                  eco-conscious choices can look amazing.
                </p>
                <ul className="space-y-4">
                  {[
                    "Eco-friendly natural jute fibre",
                    "Reusable and highly durable",
                    "Suitable for everyday daily use",
                    "Better alternative to single-use plastic",
                  ].map((feat) => (
                    <li
                      key={feat}
                      className="flex items-center gap-3 text-gray-700 font-medium"
                    >
                      <div className="w-6 h-6 rounded-full bg-jute-green/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-jute-darkGreen" />
                      </div>
                      {feat}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ==================== PRODUCT FEATURES ==================== */}
        <section className="py-20 px-4" style={{ backgroundColor: "#E8DCC3" }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-jute-darkGreen mb-3">
                Why Choose Our Pouch?
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Everything a student needs — packed into one thoughtfully
                designed product.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: "📏",
                  title: "Small & Large Sizes",
                  desc: "Available in multiple sizes to fit your stationery, travel essentials, or everyday carry items.",
                },
                {
                  icon: "💪",
                  title: "Strong & Durable",
                  desc: "Tightly woven jute fabric that withstands daily wear and tear — built to last for years.",
                },
                {
                  icon: "🎒",
                  title: "Perfect for Stationery & Travel",
                  desc: "Ideal for pens, organizers, toiletries, snacks, or whatever you need on the go.",
                },
                {
                  icon: "💰",
                  title: "Affordable for Students",
                  desc: "Student-friendly pricing starting at ₹30 — because sustainability shouldn't break the bank.",
                },
                {
                  icon: "🔄",
                  title: "Multi-purpose Usage",
                  desc: "Use it as a pencil case, makeup pouch, gift bag, cable organizer, or travel kit.",
                },
                {
                  icon: "🌿",
                  title: "100% Natural Material",
                  desc: "Made from pure jute — biodegradable, carbon-neutral, and fully compostable at end of life.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all hover:-translate-y-0.5"
                >
                  <div className="bg-jute-beige/60 py-6 text-center text-4xl">
                    {item.icon}
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-jute-darkGreen text-base mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== CUSTOMIZATION ==================== */}
        <section
          id="customization"
          className="py-20 px-4"
          style={{ backgroundColor: "#FAF6ED" }}
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-jute-darkGreen mb-3">
                Personalize Your Pouch
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Make it uniquely yours — choose your color, add your name, and
                pick your style.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Preview */}
              <div className="flex flex-col items-center">
                <div
                  className="w-56 h-56 rounded-full shadow-card-hover transition-all duration-500 flex items-center justify-center relative"
                  style={{
                    backgroundColor: currentColor.bg,
                    border: `4px solid ${currentColor.border}`,
                  }}
                >
                  <div className="absolute inset-4 rounded-full border-2 border-white/30" />
                  <div className="text-center">
                    <div className="text-5xl mb-2">🌿</div>
                    {customName ? (
                      <p
                        className="text-white font-bold text-sm drop-shadow-md px-2 text-center break-words"
                        style={{ fontFamily: currentFont.family }}
                      >
                        {customName}
                      </p>
                    ) : (
                      <p className="text-white/70 text-xs">Your name here</p>
                    )}
                  </div>
                </div>
                <p className="mt-5 text-sm text-gray-500 font-medium">
                  {currentColor.label} ·{" "}
                  {POUCH_STYLES.find((s) => s.value === selectedStyle)?.label}
                </p>
              </div>

              {/* Form */}
              <div className="bg-white rounded-2xl p-7 shadow-card">
                {/* Color Swatches */}
                <div className="mb-6">
                  <p className="block text-sm font-bold text-jute-darkGreen mb-3">
                    Color Selection
                    <span className="ml-2 font-normal text-gray-400 text-xs">
                      ({POUCH_COLORS.length - 1} colors + custom)
                    </span>
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {POUCH_COLORS.map((color) => (
                      <button
                        type="button"
                        key={color.value}
                        data-ocid="customization.color.toggle"
                        onClick={() => setSelectedColor(color.value)}
                        title={color.label}
                        className={`w-8 h-8 rounded-full transition-all hover:scale-110 flex items-center justify-center ${
                          selectedColor === color.value
                            ? "ring-2 ring-offset-2 ring-jute-darkGreen scale-110"
                            : ""
                        }`}
                        style={{
                          backgroundColor: color.bg,
                          border: `2px solid ${color.border}`,
                        }}
                      >
                        {color.value === "custom" && (
                          <span className="text-xs text-gray-500">✎</span>
                        )}
                      </button>
                    ))}
                  </div>

                  <p className="mt-2 text-xs text-gray-400">
                    Selected: {currentColor.label}
                  </p>

                  {/* Color Picker - shown when Custom is selected */}
                  {selectedColor === "custom" && (
                    <div className="mt-3 flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-jute-beige">
                      <label
                        htmlFor="color-picker"
                        className="text-xs font-semibold text-jute-darkGreen whitespace-nowrap"
                      >
                        Pick any color:
                      </label>
                      <input
                        id="color-picker"
                        type="color"
                        value={customPickerColor}
                        onChange={(e) => setCustomPickerColor(e.target.value)}
                        className="w-10 h-10 rounded-lg cursor-pointer border-2 border-jute-beige p-0.5 bg-white"
                        title="Choose custom color"
                      />
                      <span className="text-xs font-mono text-gray-500 uppercase">
                        {customPickerColor}
                      </span>
                    </div>
                  )}
                </div>

                {/* Name Printing */}
                <div className="mb-6">
                  <label
                    htmlFor="custom-name"
                    className="block text-sm font-bold text-jute-darkGreen mb-2"
                  >
                    Name Printing{" "}
                    <span className="font-normal text-gray-400">
                      (optional)
                    </span>
                  </label>
                  <Input
                    id="custom-name"
                    data-ocid="customization.name.input"
                    placeholder="e.g. Priya S."
                    value={customName}
                    onChange={(e) => setCustomName(e.target.value)}
                    maxLength={20}
                    className="rounded-xl border-jute-beige focus-visible:ring-jute-green"
                  />
                </div>

                {/* Font Selection */}
                <div className="mb-6">
                  <p className="block text-sm font-bold text-jute-darkGreen mb-3">
                    Font Style
                    <span className="ml-2 font-normal text-gray-400 text-xs">
                      ({POUCH_FONTS.length} fonts available)
                    </span>
                  </p>
                  <div className="grid grid-cols-3 gap-1.5 max-h-48 overflow-y-auto pr-1">
                    {POUCH_FONTS.map((font) => (
                      <button
                        type="button"
                        key={font.value}
                        data-ocid="customization.font.toggle"
                        onClick={() => setSelectedFont(font.value)}
                        className={`py-2 px-1.5 rounded-lg border-2 text-xs transition-all text-center ${
                          selectedFont === font.value
                            ? "border-jute-darkGreen bg-jute-darkGreen/5 text-jute-darkGreen"
                            : "border-jute-beige text-gray-600 hover:border-jute-green/50"
                        }`}
                        style={{ fontFamily: font.family }}
                      >
                        {font.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Style Selection */}
                <div className="mb-7">
                  <p className="block text-sm font-bold text-jute-darkGreen mb-3">
                    Style Selection
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {POUCH_STYLES.map((style) => (
                      <button
                        type="button"
                        key={style.value}
                        data-ocid={`customization.style_${style.value}.toggle`}
                        onClick={() => setSelectedStyle(style.value)}
                        className={`flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl border-2 text-xs font-medium transition-all ${
                          selectedStyle === style.value
                            ? "border-jute-darkGreen bg-jute-darkGreen/5 text-jute-darkGreen"
                            : "border-jute-beige text-gray-500 hover:border-jute-green/50"
                        }`}
                      >
                        <span className="text-xl">{style.icon}</span>
                        {style.label}
                      </button>
                    ))}
                  </div>
                </div>

                <Button
                  data-ocid="customization.request_order.button"
                  className="w-full rounded-full bg-jute-darkGreen text-white hover:bg-jute-darkGreen/90 font-semibold py-5"
                  onClick={() =>
                    alert(
                      "Custom order request sent! We'll reach out via WhatsApp or email. 🌿",
                    )
                  }
                >
                  Request Custom Order
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== TARGET AUDIENCE ==================== */}
        <section className="py-20 px-4 bg-jute-darkGreen">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="mb-5 bg-white/10 text-white border-white/20 text-xs font-semibold uppercase tracking-wider">
              Made for Students
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
              Made for Students, By Students
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-12 text-lg">
              We understand what students need — affordability, durability, and
              the pride of making an eco-conscious choice.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "🎒",
                  title: "School Students",
                  desc: "The perfect pencil case and stationery pouch for everyday school life. Fits all your pens, rulers, and art supplies.",
                },
                {
                  icon: "🧑‍🎓",
                  title: "College Students",
                  desc: "Versatile enough for college essentials — laptop accessories, chargers, notebooks, and more on campus life.",
                },
                {
                  icon: "🌱",
                  title: "Eco-conscious Teenagers",
                  desc: "Show your commitment to the planet. Every purchase sends a message: sustainability is cool, and youth can lead the change.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.12 }}
                  className="bg-white/10 rounded-2xl p-7 text-left backdrop-blur-sm hover:bg-white/15 transition-colors"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-white text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== PRICING ==================== */}
        <section
          id="pricing"
          className="py-20 px-4"
          style={{ backgroundColor: "#FAF6ED" }}
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-jute-darkGreen mb-3">
                Student-Friendly Pricing
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                No hidden costs. Honest, affordable pricing for every student
                and every occasion.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
              {/* Small Pouch */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl p-7 shadow-card"
              >
                <h3 className="text-lg font-bold text-jute-darkGreen mb-1">
                  Small Pouch
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  Essential everyday pouch
                </p>
                <div className="mb-5 space-y-2">
                  <div>
                    <span className="text-3xl font-extrabold text-jute-darkGreen">
                      ₹30
                    </span>
                    <p className="text-xs text-gray-500 mt-0.5">
                      without customization
                    </p>
                  </div>
                  <div>
                    <span className="text-3xl font-extrabold text-jute-green">
                      ₹35
                    </span>
                    <p className="text-xs text-gray-500 mt-0.5">
                      with customization
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 mb-7">
                  {[
                    "Small size",
                    "Handcrafted jute",
                    "Drawstring design",
                    "2–3 day delivery",
                  ].map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2.5 text-sm text-gray-600"
                    >
                      <Check className="w-4 h-4 text-jute-green flex-shrink-0" />{" "}
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact">
                  <Button
                    data-ocid="pricing.small.button"
                    className="w-full rounded-full bg-jute-darkGreen text-white hover:bg-jute-darkGreen/90"
                  >
                    Order Now
                  </Button>
                </a>
              </motion.div>

              {/* Medium Pouch — Popular */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-jute-darkGreen rounded-2xl p-7 shadow-card-hover relative"
              >
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <Badge className="bg-jute-green text-white border-0 text-xs font-bold px-4 py-1">
                    ⭐ Most Popular
                  </Badge>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">
                  Medium Pouch
                </h3>
                <p className="text-white/70 text-sm mb-4">Best for daily use</p>
                <div className="mb-5 space-y-2">
                  <div>
                    <span className="text-3xl font-extrabold text-white">
                      ₹45
                    </span>
                    <p className="text-xs text-white/60 mt-0.5">
                      without customization
                    </p>
                  </div>
                  <div>
                    <span className="text-3xl font-extrabold text-jute-beige">
                      ₹55
                    </span>
                    <p className="text-xs text-white/60 mt-0.5">
                      with customization
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 mb-7">
                  {[
                    "Medium size",
                    "Choice of any color",
                    "Name printing option",
                    "Any closure style",
                    "1–2 day delivery",
                  ].map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2.5 text-sm text-white/90"
                    >
                      <Check className="w-4 h-4 text-jute-green flex-shrink-0" />{" "}
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact">
                  <Button
                    data-ocid="pricing.medium.button"
                    className="w-full rounded-full bg-jute-green text-white hover:bg-jute-green/90 font-semibold"
                  >
                    Order Now
                  </Button>
                </a>
              </motion.div>

              {/* Big Pouch */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-white rounded-2xl p-7 shadow-card"
              >
                <h3 className="text-lg font-bold text-jute-darkGreen mb-1">
                  Big Pouch
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  Spacious &amp; premium
                </p>
                <div className="mb-5 space-y-2">
                  <div>
                    <span className="text-3xl font-extrabold text-jute-darkGreen">
                      ₹55
                    </span>
                    <p className="text-xs text-gray-500 mt-0.5">
                      without customization
                    </p>
                  </div>
                  <div>
                    <span className="text-3xl font-extrabold text-jute-green">
                      ₹60 – ₹65
                    </span>
                    <p className="text-xs text-gray-500 mt-0.5">
                      with customization
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 mb-7">
                  {[
                    "Large size",
                    "Premium jute",
                    "Choice of any color",
                    "Name printing option",
                    "Any closure style",
                    "1–2 day delivery",
                  ].map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2.5 text-sm text-gray-600"
                    >
                      <Check className="w-4 h-4 text-jute-green flex-shrink-0" />{" "}
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact">
                  <Button
                    data-ocid="pricing.big.button"
                    className="w-full rounded-full bg-jute-darkGreen text-white hover:bg-jute-darkGreen/90"
                  >
                    Order Now
                  </Button>
                </a>
              </motion.div>

              {/* Bulk Order */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="bg-white rounded-2xl p-7 shadow-card"
              >
                <h3 className="text-lg font-bold text-jute-darkGreen mb-1">
                  Bulk Order
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  For events &amp; schools
                </p>
                <div className="mb-5">
                  <p className="text-lg font-semibold text-jute-darkGreen">
                    Contact for quote
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    price based on size &amp; quantity
                  </p>
                </div>
                <ul className="space-y-3 mb-7">
                  {[
                    "Custom quantity",
                    "Price based on size & quantity",
                    "Custom logo/name options",
                    "Mixed color options",
                    "Contact for quote",
                  ].map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2.5 text-sm text-gray-600"
                    >
                      <Check className="w-4 h-4 text-jute-green flex-shrink-0" />{" "}
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact">
                  <Button
                    data-ocid="pricing.bulk.button"
                    variant="outline"
                    className="w-full rounded-full border-jute-darkGreen text-jute-darkGreen hover:bg-jute-darkGreen/5"
                  >
                    Get Quote
                  </Button>
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ==================== MARKETING & COMMUNITY ==================== */}
        <section className="py-20 px-4" style={{ backgroundColor: "#E8DCC3" }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-jute-darkGreen mb-3">
                Community & Awareness
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Spreading the green message together — one school, one campus,
                one community at a time.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "🏫",
                  title: "School Events",
                  desc: "We set up campus stalls and eco-awareness booths at school fests, spreading the jute revolution directly to students.",
                },
                {
                  icon: "📱",
                  title: "Social Media",
                  desc: "Join the movement! Share your jute pouch story and tag #JuteThreadPouch on Instagram to inspire your peers.",
                },
                {
                  icon: "🤝",
                  title: "Community Impact",
                  desc: "A portion of every sale proceeds to local eco-causes and tree plantation drives, multiplying your positive impact.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-7 shadow-card text-center"
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-jute-darkGreen text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== IMPACT SECTION ==================== */}
        <section id="impact" className="py-20 px-4 bg-jute-darkGreen">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="mb-5 bg-white/10 text-white border-white/20 text-xs font-semibold uppercase tracking-wider">
              Our Impact
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
              Reduce Plastic Waste
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-14 text-lg">
              Every pouch sold is a step toward a cleaner planet. Here's what
              we've achieved together as a community of eco-conscious students.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-14">
              {[
                { stat: "500+", label: "Pouches Sold", icon: "🌿" },
                { stat: "200+ kg", label: "Plastic Avoided", icon: "♻️" },
                { stat: "50+", label: "Schools Reached", icon: "🏫" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="bg-white/10 rounded-2xl py-8 px-6 backdrop-blur-sm"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <div className="text-4xl font-extrabold text-jute-green mb-1">
                    {item.stat}
                  </div>
                  <div className="text-white/80 font-medium">{item.label}</div>
                </motion.div>
              ))}
            </div>
            <p className="text-white/80 max-w-2xl mx-auto text-base leading-relaxed">
              Our mission is simple: replace every plastic pouch in every school
              bag with a natural, reusable jute alternative. We're a student-led
              startup driven not by profit, but by purpose — and we believe the
              next generation can make the biggest difference.
            </p>
          </div>
        </section>

        {/* ==================== CONTACT ==================== */}
        <section
          id="contact"
          className="py-20 px-4"
          style={{ backgroundColor: "#FAF6ED" }}
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-jute-darkGreen mb-3">
                Get in Touch
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Have a question, custom order, or want to collaborate? We'd love
                to hear from you!
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-10">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <h3 className="font-bold text-jute-darkGreen text-xl mb-6">
                  Send Us a Message
                </h3>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-semibold text-gray-700 mb-1.5"
                    >
                      Your Name
                    </label>
                    <Input
                      id="contact-name"
                      data-ocid="contact.name.input"
                      placeholder="Priya Sharma"
                      value={contactForm.name}
                      onChange={(e) =>
                        handleContactChange("name", e.target.value)
                      }
                      className="rounded-xl border-jute-beige focus-visible:ring-jute-green"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-semibold text-gray-700 mb-1.5"
                    >
                      Email Address
                    </label>
                    <Input
                      id="contact-email"
                      data-ocid="contact.email.input"
                      type="email"
                      placeholder="priya@email.com"
                      value={contactForm.email}
                      onChange={(e) =>
                        handleContactChange("email", e.target.value)
                      }
                      className="rounded-xl border-jute-beige focus-visible:ring-jute-green"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-semibold text-gray-700 mb-1.5"
                    >
                      Message
                    </label>
                    <Textarea
                      id="contact-message"
                      data-ocid="contact.message.textarea"
                      placeholder="I'd like to order 20 custom pouches for our school event..."
                      value={contactForm.message}
                      onChange={(e) =>
                        handleContactChange("message", e.target.value)
                      }
                      rows={4}
                      className="rounded-xl border-jute-beige focus-visible:ring-jute-green resize-none"
                    />
                  </div>
                  <Button
                    data-ocid="contact.send.button"
                    className="w-full rounded-full bg-jute-darkGreen text-white hover:bg-jute-darkGreen/90 font-semibold py-5 mt-1"
                    onClick={() =>
                      alert(
                        "Message sent! We'll get back to you within 24 hours. 🌿",
                      )
                    }
                  >
                    Send Message
                  </Button>
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col gap-4">
                <p className="text-gray-600 leading-relaxed">
                  We're a small student team, but we're fast and responsive.
                  Reach out through any of the channels below and we'll
                  typically respond within a few hours.
                </p>
                {CONTACT_EMAILS.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="contact.email.link"
                    className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-0.5"
                  >
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-blue-50 text-blue-700">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        Email
                      </p>
                      <p className="font-semibold text-jute-darkGreen">
                        {email}
                      </p>
                    </div>
                  </a>
                ))}

                {/* Hashtag */}
                <div className="bg-jute-beige/50 rounded-2xl p-5 border border-jute-beige">
                  <p className="font-bold text-jute-darkGreen mb-1">
                    📣 Share Your Story
                  </p>
                  <p className="text-sm text-gray-600">
                    Tag your jute pouch photos with{" "}
                    <span className="font-bold text-jute-brown">
                      #JuteThreadPouch
                    </span>{" "}
                    to spread the word!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-jute-darkGreen text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 font-bold text-xl mb-3">
                <div className="w-8 h-8 rounded-full bg-jute-green flex items-center justify-center">
                  <Leaf className="w-4 h-4 text-white" />
                </div>
                Jute Thread Pouch
              </div>
              <p className="text-white/70 text-sm leading-relaxed max-w-xs">
                Crafted with care, worn with purpose. A student-led eco startup
                making sustainable lifestyle accessible for every student.
              </p>
              <div className="flex gap-3 mt-5">
                <a
                  href="mailto:kavya.jethwa@shikhaacademy.org"
                  aria-label="Email"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-white/50 mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-white/50 mb-4">
                Products
              </h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Small Jute Pouch</li>
                <li>Large Jute Pouch</li>
                <li>Custom Name Pouch</li>
                <li>Bulk School Orders</li>
                <li>Event Gift Pouches</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Jute Thread Pouch. All rights
              reserved.
            </p>
            <p className="text-white/40 text-xs">
              Built with ❤️ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white/60 transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
