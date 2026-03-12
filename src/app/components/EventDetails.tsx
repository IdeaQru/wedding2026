import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { FloralOrnament } from "./FloralOrnament";
import { Calendar, MapPin, Clock } from "lucide-react";

const TARGET_DATE = new Date("2026-04-04T08:00:00+07:00");

function useCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const now = new Date().getTime();
      const diff = TARGET_DATE.getTime() - now;
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };
    setTimeLeft(calc());
    const timer = setInterval(() => setTimeLeft(calc()), 1000);
    return () => clearInterval(timer);
  }, []);

  return timeLeft;
}

function CountdownBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="w-16 h-16 rounded-lg flex items-center justify-center mb-1"
        style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)" }}
      >
        <span style={{ fontFamily: "Playfair Display, serif", fontSize: "1.5rem", color: "#C9A84C" }}>
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.65rem", color: "#999" }}>{label}</span>
    </div>
  );
}

export function EventDetails() {
  const countdown = useCountdown();

  return (
    <section className="py-16 px-4" style={{ background: "#FAFAF5" }}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.5rem", color: "#555" }}>
            Detail Acara
          </h2>
          <FloralOrnament className="mx-auto w-40 mt-2" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Akad Nikah */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg"
            style={{ background: "#FDF6EC", border: "1px solid rgba(201,168,76,0.2)" }}
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: "rgba(143,175,138,0.2)" }}>
              <span style={{ fontSize: "1.5rem" }}>💍</span>
            </div>
            <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.2rem", color: "#C9A84C" }}>
              Akad Nikah
            </h3>
            <div className="flex items-center justify-center gap-2 mt-3" style={{ color: "#777" }}>
              <Calendar size={14} />
              <span style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.85rem" }}>Sabtu, 04 April 2026</span>
            </div>
            <div className="flex items-center justify-center gap-2 mt-2" style={{ color: "#777" }}>
              <Clock size={14} />
              <span style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.85rem" }}>08:00 WIB - Selesai</span>
            </div>
            <div className="flex items-center justify-center gap-2 mt-2" style={{ color: "#777" }}>
              <MapPin size={14} />
              <span style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.8rem" }}>
                Ds. Ngulanan, Dsn. Cumpleng, RT.7 RW.2, Kec. Dander, Bojonegoro
              </span>
            </div>
          </motion.div>

          {/* Resepsi */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg"
            style={{ background: "#FDF6EC", border: "1px solid rgba(201,168,76,0.2)" }}
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: "rgba(143,175,138,0.2)" }}>
              <span style={{ fontSize: "1.5rem" }}>🎉</span>
            </div>
            <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.2rem", color: "#C9A84C" }}>
              Resepsi
            </h3>
            <div className="flex items-center justify-center gap-2 mt-3" style={{ color: "#777" }}>
              <Calendar size={14} />
              <span style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.85rem" }}>Sabtu, 04 April 2026</span>
            </div>
            <div className="flex items-center justify-center gap-2 mt-2" style={{ color: "#777" }}>
              <Clock size={14} />
              <span style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.85rem" }}>11:00 WIB - Selesai</span>
            </div>
            <div className="flex items-center justify-center gap-2 mt-2" style={{ color: "#777" }}>
              <MapPin size={14} />
              <span style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.8rem" }}>
                Ds. Ngulanan, Dsn. Cumpleng, RT.7 RW.2, Kec. Dander, Bojonegoro
              </span>
            </div>
          </motion.div>
        </div>

        {/* Google Maps Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <a
            href="https://www.google.com/maps/search/Ds.+Ngulanan+Dander+Bojonegoro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-md"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "0.85rem",
              color: "#fff",
              background: "#8FAF8A",
              textDecoration: "none",
            }}
          >
            <MapPin size={16} />
            Buka Maps
          </a>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="mb-4" style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.85rem", color: "#888" }}>
            Menghitung hari menuju kebahagiaan
          </p>
          <div className="flex justify-center gap-4">
            <CountdownBox value={countdown.days} label="Hari" />
            <CountdownBox value={countdown.hours} label="Jam" />
            <CountdownBox value={countdown.minutes} label="Menit" />
            <CountdownBox value={countdown.seconds} label="Detik" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
