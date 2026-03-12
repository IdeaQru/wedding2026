import { motion } from "motion/react";
import { FloralOrnament } from "./FloralOrnament";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CoupleDetails() {
  return (
    <section className="py-16 px-4" style={{ background: "#FDF6EC" }}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="tracking-[0.2em] uppercase mb-2" style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.7rem", color: "#8FAF8A" }}>
            Bismillahirrahmanirrahim
          </p>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.5rem", color: "#555" }}>
            Mempelai
          </h2>
          <FloralOrnament className="mx-auto w-40 mt-2" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
          {/* Mempelai Pria */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center p-6"
          >
            {/* Foto Pria */}
            <div
              className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden"
              style={{ border: "3px solid #C9A84C", padding: "3px", background: "rgba(201,168,76,0.1)" }}
            >
              <ImageWithFallback
                src="/15.jpg"
                alt="Mempelai Pria"
                className="w-full h-full rounded-full object-cover object-top"
              />
            </div>
            <h3 style={{ fontFamily: "Great Vibes, cursive", fontSize: "2rem", color: "#C9A84C" }}>
              Muhamad Khoirun Nasikhin
            </h3>
            <p className="mt-2" style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.85rem", color: "#888" }}>
              Putra dari
            </p>
            <p style={{ fontFamily: "Playfair Display, serif", fontSize: "0.95rem", color: "#555" }}>
              Bapak Subendi & Ibu Siti Aminah
            </p>
          </motion.div>

          {/* Ampersand - Desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2"
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "#C9A84C" }}>
              <span style={{ fontFamily: "Great Vibes, cursive", fontSize: "1.5rem", color: "#fff" }}>&</span>
            </div>
          </motion.div>

          {/* Mempelai Wanita */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center p-6"
          >
            {/* Foto Wanita */}
            <div
              className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden"
              style={{ border: "3px solid #C9A84C", padding: "3px", background: "rgba(201,168,76,0.1)" }}
            >
              <ImageWithFallback
                src="/18.jpg"
                alt="Mempelai Wanita"
                className="w-full h-full rounded-full object-cover object-top"
              />
            </div>
            <h3 style={{ fontFamily: "Great Vibes, cursive", fontSize: "2rem", color: "#C9A84C" }}>
              Hannnisa Kautsarani Hamidah
            </h3>
            <p className="mt-2" style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.85rem", color: "#888" }}>
              Putri dari
            </p>
            <p style={{ fontFamily: "Playfair Display, serif", fontSize: "0.95rem", color: "#555" }}>
              Bapak Puji Hermadi (Alm.) & Ibu Sri Utami
            </p>
          </motion.div>
        </div>

        {/* Ampersand - Mobile */}
        <div className="md:hidden flex justify-center -mt-2 mb-2">
          <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "#C9A84C" }}>
            <span style={{ fontFamily: "Great Vibes, cursive", fontSize: "1.25rem", color: "#fff" }}>&</span>
          </div>
        </div>
      </div>
    </section>
  );
}
