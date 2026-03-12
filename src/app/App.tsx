import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Cover } from "./components/Cover";
import { CouplePhoto } from "./components/CouplePhoto";
import { CoupleDetails } from "./components/CoupleDetails";
import { EventDetails } from "./components/EventDetails";
import { Gallery } from "./components/Gallery";
import { Guestbook } from "./components/Guestbook";
import { DigitalGift } from "./components/DigitalGift";
import { Footer } from "./components/Footer";
import { Music, VolumeX } from "lucide-react";

function getGuestName(): string {
  const params = new URLSearchParams(window.location.search);
  const name = params.get("to");
  if (!name) return "Tamu Undangan";
  return decodeURIComponent(name.replace(/\+/g, " "));
}

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const guestName = getGuestName();

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio(
      "https://ia800605.us.archive.org/33/items/maher-zain-baraka-allahu-lakuma/Maher%20Zain%20-%20Baraka%20Allahu%20Lakuma.mp3"
    );
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsMusicPlaying(true);
      }).catch(() => {
        // Autoplay blocked
      });
    }
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isMusicPlaying) {
      audioRef.current.pause();
      setIsMusicPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsMusicPlaying(true)).catch(() => {});
    }
  };

  return (
    <div className="min-h-screen w-full" style={{ fontFamily: "Poppins, sans-serif", background: "#FAFAF5" }}>
      {/* Cover */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            key="cover"
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
          >
            <Cover guestName={guestName} onOpen={handleOpen} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ scrollBehavior: "smooth" }}
        >
          <CouplePhoto />
          <CoupleDetails />
          <EventDetails />
          <Gallery />
          <Guestbook />
          <DigitalGift />
          <Footer />
        </motion.div>
      )}

      {/* Music Toggle Button */}
      {isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring" }}
          onClick={toggleMusic}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer shadow-lg transition-all duration-300 hover:scale-110"
          style={{
            background: "#C9A84C",
            color: "#fff",
            border: "none",
          }}
        >
          {isMusicPlaying ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Music size={18} />
            </motion.div>
          ) : (
            <VolumeX size={18} />
          )}
        </motion.button>
      )}
    </div>
  );
}
