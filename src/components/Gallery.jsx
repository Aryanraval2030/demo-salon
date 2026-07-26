import { motion } from "framer-motion";
import styles from "./Gallery.module.css";

const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800",
    alt: "Luxury salon interior",
  },
  {
    src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800",
    alt: "Bridal makeup application",
  },
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800",
    alt: "Hair styling session",
  },
  {
    src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800",
    alt: "Professional makeup artist",
  },
  {
    src: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800",
    alt: "Nail art service",
  },
  {
    src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800",
    alt: "Skin care treatment",
  },
  {
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800",
    alt: "Precision haircut",
  },
  {
    src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800",
    alt: "Bridal beauty session",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p className="eyebrow">Our Work</p>
          <h2 className={styles.heading}>Moments From The Studio</h2>
        </div>

        <div className={styles.grid}>
          {IMAGES.map((img, index) => (
            <motion.div
              key={img.src}
              className={styles.tile}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: (index % 4) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
