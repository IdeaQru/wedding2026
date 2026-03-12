import { motion } from "motion/react";
import { useState } from "react";
import { FloralOrnament } from "./FloralOrnament";
import { Copy, Check, Gift } from "lucide-react";

interface Account {
  bank: string;
  number: string;
  name: string;
  icon: string;
}

const ACCOUNTS: Account[] = [
  { bank: "BCA", number: "5545023200", name: "Muhamad Khoirun Nasikhin", icon: "🏦" },
  { bank: "BNI", number: "1119196275", name: "Muhamad Khoirun Nasikhin", icon: "🏦" },
  { bank: "ShopeePay", number: "085816458483", name: "Muhamad Khoirun Nasikhin", icon: "📱" },
];

export function DigitalGift() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (number: string, bank: string) => {
    try {
      await navigator.clipboard.writeText(number);
      setCopiedId(bank);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // Fallback
      const textArea = document.createElement("textarea");
      textArea.value = number;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopiedId(bank);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <section className="py-16 px-4" style={{ background: "#FDF6EC" }}>
      <div className="max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="w-14 h-14 mx-auto mb-3 rounded-full flex items-center justify-center" style={{ background: "rgba(201,168,76,0.15)" }}>
            <Gift size={24} style={{ color: "#C9A84C" }} />
          </div>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.5rem", color: "#555" }}>
            Kirim Hadiah
          </h2>
          <p className="mt-2" style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.8rem", color: "#999" }}>
            Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika memberi adalah bentuk tanda kasih, Anda dapat mengirimkan melalui:
          </p>
          <FloralOrnament className="mx-auto w-40 mt-2" />
        </motion.div>

        <div className="space-y-4">
          {ACCOUNTS.map((acc, i) => (
            <motion.div
              key={acc.bank}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="rounded-xl p-5 text-center transition-all duration-300 hover:shadow-md"
              style={{ background: "#FAFAF5", border: "1px solid rgba(201,168,76,0.2)" }}
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <span style={{ fontSize: "1.2rem" }}>{acc.icon}</span>
                <span style={{ fontFamily: "Playfair Display, serif", fontSize: "1rem", color: "#C9A84C" }}>
                  {acc.bank}
                </span>
              </div>
              <p className="mb-1" style={{ fontFamily: "Poppins, sans-serif", fontSize: "1.1rem", color: "#555", letterSpacing: "0.1em" }}>
                {acc.number}
              </p>
              <p className="mb-3" style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.75rem", color: "#999" }}>
                a.n. {acc.name}
              </p>
              <button
                onClick={() => handleCopy(acc.number, acc.bank)}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full transition-all duration-300 cursor-pointer"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "0.8rem",
                  background: copiedId === acc.bank ? "#8FAF8A" : "transparent",
                  color: copiedId === acc.bank ? "#fff" : "#8FAF8A",
                  border: "1px solid #8FAF8A",
                }}
              >
                {copiedId === acc.bank ? (
                  <>
                    <Check size={14} />
                    Berhasil disalin!
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    Salin Nomor
                  </>
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
