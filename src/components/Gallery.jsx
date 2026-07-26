import { motion } from 'framer-motion';
import styles from './Gallery.module.css';

const IMAGES = [
  { src: 'https://picsum.photos/seed/hair-styling-session/800/800', alt: 'Hair styling session' },
  { src: 'https://picsum.photos/seed/bridal-makeup-brush/800/800', alt: 'Bridal makeup application' },
  { src: 'https://picsum.photos/seed/salon-interior-chair/800/800', alt: 'Salon interior styling chair' },
  { src: 'https://picsum.photos/seed/hair-color-treatment/800/800', alt: 'Hair color treatment' },
  { src: 'https://picsum.photos/seed/nail-art-service/800/800', alt: 'Nail art service' },
  { src: 'https://picsum.photos/seed/skin-facial-treatment/800/800', alt: 'Skin care facial treatment' },
  { src: 'https://picsum.photos/seed/precision-haircut/800/800', alt: 'Precision haircut in progress' },
  { src: 'https://picsum.photos/seed/bridal-jewellery-finish/800/800', alt: 'Bridal jewellery and finishing touches' },
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
              transition={{ duration: 0.5, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
