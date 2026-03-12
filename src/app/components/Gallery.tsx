import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { FloralOrnament } from "./FloralOrnament";

// Exclude: 1, 11, 15, 18
const EXCLUDED = new Set([1, 11, 15, 18,16]);

const GALLERY_IMAGES = Array.from({ length: 17 }, (_, i) => i + 1)
  .filter((n) => !EXCLUDED.has(n))
  .map((n) => ({
    src: `/${n}.jpg`,
    alt: `Foto Prewed ${n}`,
  }));

// Layout masonry-style: tentukan ukuran tiap item agar bervariasi
const SPAN_PATTERN = [
  "col-span-2 row-span-2", // besar
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-2",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-2 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-2",
  "col-span-1 row-span-1",
];

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  const next = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % GALLERY_IMAGES.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex]);

  return (
    <section className="py-16 px-4" style={{ background: "#FDF6EC" }}>
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="tracking-[0.2em] uppercase mb-2" style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.7rem", color: "#8FAF8A" }}>
            Momen Berharga
          </p>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.5rem", color: "#555" }}>
            Galeri
          </h2>
          <FloralOrnament className="mx-auto w-40 mt-2" />
          <p className="mt-3" style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.8rem", color: "#aaa" }}>
            {GALLERY_IMAGES.length} foto • Klik untuk memperbesar
          </p>
        </motion.div>

        {/* Grid Masonry - Desktop */}
        <div className="hidden md:grid grid-cols-4 gap-3 auto-rows-[180px]">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (i % 8) * 0.07 }}
              viewport={{ once: true }}
              className={`${SPAN_PATTERN[i % SPAN_PATTERN.length]} relative cursor-pointer overflow-hidden rounded-xl group`}
              style={{ border: "2px solid rgba(201,168,76,0.15)" }}
              onClick={() => openLightbox(i)}
            >
              <ImageWithFallback
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                style={{ background: "rgba(201,168,76,0.25)" }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.9)" }}>
                  <ZoomIn size={18} style={{ color: "#C9A84C" }} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Grid Mobile - 2 kolom uniform */}
        <div className="md:hidden grid grid-cols-2 gap-3">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
              viewport={{ once: true }}
              className={`relative cursor-pointer overflow-hidden rounded-xl group ${i === 0 ? "col-span-2 h-56" : "h-40"}`}
              style={{ border: "2px solid rgba(201,168,76,0.15)" }}
              onClick={() => openLightbox(i)}
            >
              <ImageWithFallback
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 active:scale-95"
              />
              {/* Nomor foto */}
              <div className="absolute bottom-2 right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs"
                style={{ background: "rgba(201,168,76,0.85)", color: "#fff", fontFamily: "Poppins, sans-serif" }}>
                {i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center"
            style={{ background: "rgba(0,0,0,0.92)" }}
            onClick={closeLightbox}
          >
            {/* Top bar */}
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-3"
              style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.6), transparent)" }}>
              <span style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.7)" }}>
                Galeri Prewed
              </span>
              <div className="flex items-center gap-3">
                <span style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.85rem", color: "#C9A84C" }}>
                  {lightboxIndex + 1} / {GALLERY_IMAGES.length}
                </span>
                <button
                  onClick={closeLightbox}
                  className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer"
                  style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Gambar utama */}
            <motion.img
              key={lightboxIndex}
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.25 }}
              src={GALLERY_IMAGES[lightboxIndex].src}
              alt={GALLERY_IMAGES[lightboxIndex].alt}
              className="max-w-[90vw] max-h-[80vh] rounded-xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Prev button */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-3 md:left-6 w-11 h-11 rounded-full flex items-center justify-center cursor-pointer transition-all hover:scale-110 active:scale-95"
              style={{ background: "rgba(255,255,255,0.15)", color: "#fff", backdropFilter: "blur(4px)" }}
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next button */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-3 md:right-6 w-11 h-11 rounded-full flex items-center justify-center cursor-pointer transition-all hover:scale-110 active:scale-95"
              style={{ background: "rgba(255,255,255,0.15)", color: "#fff", backdropFilter: "blur(4px)" }}
            >
              <ChevronRight size={24} />
            </button>

            {/* Thumbnail strip */}
            <div
              className="absolute bottom-0 left-0 right-0 flex gap-2 overflow-x-auto px-4 py-3 items-center"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }}
              onClick={(e) => e.stopPropagation()}
            >
              {GALLERY_IMAGES.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setLightboxIndex(i)}
                  className="flex-shrink-0 rounded-lg overflow-hidden transition-all duration-200"
                  style={{
                    width: i === lightboxIndex ? "52px" : "40px",
                    height: i === lightboxIndex ? "52px" : "40px",
                    border: i === lightboxIndex ? "2px solid #C9A84C" : "2px solid transparent",
                    opacity: i === lightboxIndex ? 1 : 0.55,
                  }}
                >
                  <img src={img.src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
