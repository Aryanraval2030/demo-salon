import { motion } from 'framer-motion';
import { Scissors, Sparkles, Gem, PartyPopper, Hand, Droplets } from 'lucide-react';
import styles from './Services.module.css';

const SERVICES = [
  {
    icon: Scissors,
    title: 'Hair Styling',
    desc: 'Blowouts, updos, and styling crafted to suit your face, occasion, and personality.',
  },
  {
    icon: Sparkles,
    title: 'Hair Cut',
    desc: 'Precision cuts and treatments from stylists trained in the latest global techniques.',
  },
  {
    icon: Gem,
    title: 'Bridal Makeup',
    desc: 'HD and airbrush bridal looks designed to stay flawless through every ritual.',
  },
  {
    icon: PartyPopper,
    title: 'Party Makeup',
    desc: 'Glamorous, long-lasting makeup for engagements, sangeets, and celebrations.',
  },
  {
    icon: Hand,
    title: 'Nail Services',
    desc: 'Manicures, pedicures, and nail art finished with premium, gentle products.',
  },
  {
    icon: Droplets,
    title: 'Skin Care',
    desc: 'Facials and skin therapies that restore radiance using dermat-approved products.',
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <div className={styles.header}>
          <p className="eyebrow">What We Offer</p>
          <h2 className={styles.heading}>Signature Services</h2>
          <p className={styles.intro}>
            Every service at Saura Salon is delivered by trained professionals using premium
            products, tailored to bring out your most confident self.
          </p>
        </div>

        <div className={styles.grid}>
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
              >
                <div className={styles.iconWrap}>
                  <Icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.desc}</p>
                <span className={styles.cardLine} />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
