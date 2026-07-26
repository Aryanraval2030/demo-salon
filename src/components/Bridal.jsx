import { motion } from "framer-motion";
import styles from "./Bridal.module.css";

const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=900",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=900",
    tall: false,
  },
];
export default function Bridal() {
  return (
    <section id="bridal" className={styles.bridal}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.copy}>
            <p className="eyebrow">Bridal Studio</p>
            <h2 className={styles.heading}>
              Make Your Special Day Unforgettable
            </h2>
            <p className={styles.text}>
              From the first look to the last dance, our bridal artists craft a
              look that feels entirely you — refined, radiant, and
              photograph-ready for every ritual.
            </p>
            <a href="#contact" className={styles.cta}>
              Book Your Bridal Trial
            </a>
          </div>
        </div>

        <div className={styles.masonry}>
          {IMAGES.map((img, index) => (
            <motion.div
              key={img.src}
              className={`${styles.tile} ${img.tall ? styles.tall : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <img
                src={img.src}
                alt="Bridal makeup and hair styling look by Saura Salon"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
