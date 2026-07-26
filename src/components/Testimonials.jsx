import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import styles from './Testimonials.module.css';

const REVIEWS = [
  {
    name: 'Priyanka Mehta',
    role: 'Bridal Client',
    quote: 'The bridal makeup was absolutely stunning! Every ritual look stayed perfect from morning till the last dance.',
  },
  {
    name: 'Ritu Sharma',
    role: 'Regular Client',
    quote: 'Best salon experience in Ahmedabad. The staff genuinely listens to what you want before they begin.',
  },
  {
    name: 'Ananya Desai',
    role: 'Party Makeup Client',
    quote: 'Professional staff and amazing ambience. I always leave feeling more confident than when I walked in.',
  },
  {
    name: 'Kavya Patel',
    role: 'Skin Care Client',
    quote: "My skin has never looked better. Saura Salon's facials are gentle, relaxing, and truly effective.",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p className="eyebrow">Client Love</p>
          <h2 className={styles.heading}>What Our Clients Say</h2>
        </div>

        <div className={styles.grid}>
          {REVIEWS.map((review, index) => (
            <motion.article
              key={review.name}
              className={styles.card}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: (index % 2) * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
            >
              <Quote size={28} className={styles.quoteIcon} strokeWidth={1.5} />
              <div className={styles.stars} aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className={styles.quote}>&ldquo;{review.quote}&rdquo;</p>
              <div className={styles.author}>
                <span className={styles.name}>{review.name}</span>
                <span className={styles.role}>{review.role}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
