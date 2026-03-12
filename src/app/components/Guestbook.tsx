import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { FloralOrnament } from "./FloralOrnament";
import { Send, User, MessageSquare } from "lucide-react";

interface WishEntry {
  id: string;
  name: string;
  message: string;
  attendance: string;
  timestamp: number;
}

const STORAGE_KEY = "wedding-wishes-nasikhin-hannnisa";

export function Guestbook() {
  const [wishes, setWishes] = useState<WishEntry[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [attendance, setAttendance] = useState("Hadir");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setWishes(JSON.parse(stored));
      } catch {}
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newWish: WishEntry = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim(),
      attendance,
      timestamp: Date.now(),
    };

    const updated = [newWish, ...wishes];
    setWishes(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setName("");
    setMessage("");
    setAttendance("Hadir");
  };

  const attendanceBadge = (att: string) => {
    const colors: Record<string, { bg: string; text: string }> = {
      Hadir: { bg: "rgba(143,175,138,0.2)", text: "#8FAF8A" },
      "Tidak Hadir": { bg: "rgba(200,100,100,0.15)", text: "#c87070" },
      "Masih Ragu": { bg: "rgba(201,168,76,0.2)", text: "#C9A84C" },
    };
    const c = colors[att] || colors["Masih Ragu"];
    return (
      <span
        className="px-2 py-0.5 rounded-full"
        style={{ background: c.bg, color: c.text, fontFamily: "Poppins, sans-serif", fontSize: "0.65rem" }}
      >
        {att}
      </span>
    );
  };

  return (
    <section className="py-16 px-4" style={{ background: "#FAFAF5" }}>
      <div className="max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.5rem", color: "#555" }}>
            Ucapan & Doa
          </h2>
          <FloralOrnament className="mx-auto w-40 mt-2" />
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="rounded-xl p-6 mb-8"
          style={{ background: "#FDF6EC", border: "1px solid rgba(201,168,76,0.2)" }}
        >
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-1">
              <User size={14} style={{ color: "#8FAF8A" }} />
              <label style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.8rem", color: "#777" }}>Nama</label>
            </div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukkan nama Anda"
              className="w-full px-4 py-2.5 rounded-lg outline-none transition-all duration-300 focus:ring-2"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "0.85rem",
                background: "#FAFAF5",
                border: "1px solid rgba(201,168,76,0.2)",
                color: "#555",
                // @ts-ignore
                "--tw-ring-color": "rgba(143,175,138,0.3)",
              }}
            />
          </div>

          <div className="mb-4">
            <div className="flex items-center gap-2 mb-1">
              <MessageSquare size={14} style={{ color: "#8FAF8A" }} />
              <label style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.8rem", color: "#777" }}>Ucapan & Doa</label>
            </div>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tulis ucapan dan doa Anda..."
              rows={3}
              className="w-full px-4 py-2.5 rounded-lg outline-none resize-none transition-all duration-300 focus:ring-2"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "0.85rem",
                background: "#FAFAF5",
                border: "1px solid rgba(201,168,76,0.2)",
                color: "#555",
              }}
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2" style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.8rem", color: "#777" }}>
              Kehadiran
            </label>
            <div className="flex gap-2 flex-wrap">
              {["Hadir", "Tidak Hadir", "Masih Ragu"].map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setAttendance(opt)}
                  className="px-4 py-1.5 rounded-full transition-all duration-300 cursor-pointer"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "0.8rem",
                    background: attendance === opt ? "#8FAF8A" : "transparent",
                    color: attendance === opt ? "#fff" : "#888",
                    border: attendance === opt ? "1px solid #8FAF8A" : "1px solid rgba(0,0,0,0.1)",
                  }}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer hover:opacity-90"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "0.85rem",
              background: "#C9A84C",
              color: "#fff",
              border: "none",
            }}
          >
            <Send size={14} />
            Kirim Ucapan
          </button>
        </motion.form>

        {/* Wishes List */}
        <div className="space-y-3 max-h-96 overflow-y-auto pr-1" style={{ scrollbarWidth: "thin" }}>
          <AnimatePresence>
            {wishes.map((w) => (
              <motion.div
                key={w.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="rounded-lg p-4"
                style={{ background: "#FDF6EC", border: "1px solid rgba(201,168,76,0.15)" }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span style={{ fontFamily: "Playfair Display, serif", fontSize: "0.9rem", color: "#555" }}>
                    {w.name}
                  </span>
                  {attendanceBadge(w.attendance)}
                </div>
                <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.8rem", color: "#888", lineHeight: 1.6 }}>
                  {w.message}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
          {wishes.length === 0 && (
            <p className="text-center py-4" style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.8rem", color: "#bbb" }}>
              Belum ada ucapan. Jadilah yang pertama! 💐
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
