import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero} aria-label="Introduction">
      <div className={styles.bg}>
        <img
          src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1920"
          alt=""
          aria-hidden="true"
        />
        <div className={styles.overlay} />
      </div>

      <div className={`${styles.content} container`}>
        <motion.p
          className={`eyebrow ${styles.eyebrow}`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Jodhpur Village, New Yourk
        </motion.p>

        <motion.h1
          className={styles.heading}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          Where Beauty Meets Elegance
        </motion.h1>

        <motion.p
          className={styles.subheading}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          Premium Hair, Bridal Makeup, Nails, and Skin Care Services in
          Ahmedabad.
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <a href="#contact" className={styles.primaryBtn}>
            Book Appointment
          </a>
          <a href="#services" className={styles.secondaryBtn}>
            View Services
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#trusted"
        className={styles.scrollHint}
        aria-label="Scroll to explore"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.4, duration: 0.6 },
          y: { delay: 1.6, duration: 1.8, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <ArrowDown size={18} />
      </motion.a>
    </section>
  );
}
