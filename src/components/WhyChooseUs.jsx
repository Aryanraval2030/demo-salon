import { motion } from "framer-motion";
import { Award, Package, ShieldCheck, UserCheck, Gem } from "lucide-react";
import styles from "./WhyChooseUs.module.css";

const POINTS = [
  {
    icon: Award,
    title: "Experienced Staff",
    desc: "A team trained across leading academies in hair, makeup, and skin care.",
  },
  {
    icon: Package,
    title: "Premium Products",
    desc: "We use only trusted, dermat-approved and internationally recognized brands.",
  },
  {
    icon: ShieldCheck,
    title: "Hygienic Environment",
    desc: "Sanitized tools and a spotless, comfortable studio for every visit.",
  },
  {
    icon: UserCheck,
    title: "Personalized Service",
    desc: "Consultations tailored to your features, skin tone, and occasion.",
  },
  {
    icon: Gem,
    title: "Affordable Luxury",
    desc: "Premium results and experience, priced to be enjoyed often, not rarely.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className={styles.section}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.imageCol}>
            <motion.img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900"
              alt="Stylist attending to a client at Saura Salon"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <div className={styles.listCol}>
            <p className="eyebrow">Why Saura Salon</p>
            <h2 className={styles.heading}>The Details That Set Us Apart</h2>

            <ul className={styles.list}>
              {POINTS.map((point, index) => {
                const Icon = point.icon;
                return (
                  <motion.li
                    key={point.title}
                    className={styles.item}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Icon size={20} strokeWidth={1.5} className={styles.icon} />
                    <div>
                      <h3 className={styles.itemTitle}>{point.title}</h3>
                      <p className={styles.itemDesc}>{point.desc}</p>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
