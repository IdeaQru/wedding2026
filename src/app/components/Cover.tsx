import { motion } from "motion/react";
import { FallingPetals } from "./FallingPetals";
import { FloralOrnament } from "./FloralOrnament";

interface CoverProps {
  guestName: string;
  onOpen: () => void;
}

export function Cover({ guestName, onOpen }: CoverProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ background: "linear-gradient(135deg, #FAFAF5 0%, #FDF6EC 30%, #e8dcc8 100%)" }}>
      <FallingPetals />
      <div className="relative z-20 text-center px-6 max-w-md w-full">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <FloralOrnament className="mx-auto w-48 mb-4" />
          <p className="tracking-[0.3em] uppercase mb-2" style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.75rem", color: "#8FAF8A" }}>
            Undangan Pernikahan
          </p>
          <h1 className="mb-2" style={{ fontFamily: "Great Vibes, cursive", fontSize: "3rem", color: "#C9A84C", lineHeight: 1.2 }}>
            Nasikhin
          </h1>
          <p className="mb-1" style={{ fontFamily: "Playfair Display, serif", fontSize: "1.25rem", color: "#8FAF8A" }}>&</p>
          <h1 className="mb-6" style={{ fontFamily: "Great Vibes, cursive", fontSize: "3rem", color: "#C9A84C", lineHeight: 1.2 }}>
            Hannnisa
          </h1>
          <FloralOrnament className="mx-auto w-48 mb-8" flip />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mb-8"
        >
          <p className="mb-1" style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.8rem", color: "#999" }}>
            Kepada Yth,
          </p>
          <p style={{ fontFamily: "Playfair Display, serif", fontSize: "1.1rem", color: "#555" }}>
            {guestName}
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpen}
          className="px-8 py-3 rounded-full border-2 cursor-pointer transition-all duration-300"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "0.9rem",
            color: "#C9A84C",
            borderColor: "#C9A84C",
            background: "transparent",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#C9A84C";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#C9A84C";
          }}
        >
          💌 Buka Undangan
        </motion.button>
      </div>
    </div>
  );
}
