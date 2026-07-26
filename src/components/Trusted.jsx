import { motion } from 'framer-motion';
import { Star, ThumbsUp, Users, Clock } from 'lucide-react';
import styles from './Trusted.module.css';

const STATS = [
  { icon: Star, value: '4.5', label: 'Google Rating' },
  { icon: ThumbsUp, value: '165+', label: 'Happy Reviews' },
  { icon: Users, value: '5,000+', label: 'Happy Clients' },
  { icon: Clock, value: '8+', label: 'Years of Experience' },
];

export default function Trusted() {
  return (
    <section id="trusted" className={styles.trusted} aria-label="Why clients trust Saura Salon">
      <div className="container">
        <div className={styles.grid}>
          {STATS.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className={styles.card}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Icon size={26} className={styles.icon} strokeWidth={1.5} />
                <span className={styles.value}>{stat.value}</span>
                <span className={styles.label}>{stat.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
