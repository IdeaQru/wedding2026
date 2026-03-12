import { motion } from "motion/react";
import { FloralOrnament } from "./FloralOrnament";
import { FallingPetals } from "./FallingPetals";

export function Footer() {
  return (
    <section className="relative py-20 px-4 overflow-hidden" style={{ background: "linear-gradient(180deg, #FAFAF5 0%, #e8dcc8 100%)" }}>
      <FallingPetals />
      <div className="relative z-20 max-w-lg mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <FloralOrnament className="mx-auto w-48 mb-6" />

          <p className="mb-6 italic" style={{ fontFamily: "Playfair Display, serif", fontSize: "0.9rem", color: "#777", lineHeight: 1.8 }}>
            "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kami."
          </p>

          <p className="mb-1" style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.75rem", color: "#aaa" }}>
            Kami yang berbahagia,
          </p>

          <h2 className="mb-2" style={{ fontFamily: "Great Vibes, cursive", fontSize: "2.5rem", color: "#C9A84C" }}>
            Nasikhin & Hannnisa
          </h2>

          <p className="mb-8" style={{ fontFamily: "Playfair Display, serif", fontSize: "1rem", color: "#8FAF8A" }}>
            Jazakumullahu Khairan Katsiran
          </p>

          <FloralOrnament className="mx-auto w-48" flip />

          <p className="mt-10" style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.65rem", color: "#ccc" }}>
            © 2026 Wedding Invitation
          </p>
        </motion.div>
      </div>
    </section>
  );
}
