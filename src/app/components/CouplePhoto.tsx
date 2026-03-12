import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const PHOTO_URL = "/1.jpg";

export function CouplePhoto() {
  return (
    <section className="py-16 px-4" style={{ background: "#FAFAF5" }}>
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="p-3 rounded-lg" style={{ border: "2px solid #C9A84C", background: "#FDF6EC" }}>
            <div className="p-1 rounded" style={{ border: "1px solid rgba(201,168,76,0.3)" }}>
              <ImageWithFallback
                src={PHOTO_URL}
                alt="Foto Pasangan"
                className="w-full h-auto rounded object-cover"
                style={{ aspectRatio: "3/4" }}
              />
            </div>
          </div>
          {/* Decorative corners */}
          <div className="absolute -top-3 -left-3 w-8 h-8">
            <svg viewBox="0 0 32 32" fill="none">
              <path d="M0 32 L0 8 Q0 0 8 0 L32 0" stroke="#C9A84C" strokeWidth="2" fill="none" />
            </svg>
          </div>
          <div className="absolute -top-3 -right-3 w-8 h-8">
            <svg viewBox="0 0 32 32" fill="none">
              <path d="M32 32 L32 8 Q32 0 24 0 L0 0" stroke="#C9A84C" strokeWidth="2" fill="none" />
            </svg>
          </div>
          <div className="absolute -bottom-3 -left-3 w-8 h-8">
            <svg viewBox="0 0 32 32" fill="none">
              <path d="M0 0 L0 24 Q0 32 8 32 L32 32" stroke="#C9A84C" strokeWidth="2" fill="none" />
            </svg>
          </div>
          <div className="absolute -bottom-3 -right-3 w-8 h-8">
            <svg viewBox="0 0 32 32" fill="none">
              <path d="M32 0 L32 24 Q32 32 24 32 L0 32" stroke="#C9A84C" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="italic" style={{ fontFamily: "Playfair Display, serif", fontSize: "0.9rem", color: "#8FAF8A" }}>
            "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri, supaya kamu merasa tenteram kepadanya."
          </p>
          <p className="mt-2" style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.75rem", color: "#aaa" }}>
            — QS. Ar-Rum: 21
          </p>
        </motion.div>
      </div>
    </section>
  );
}
