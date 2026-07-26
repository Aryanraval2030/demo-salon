import { motion } from "framer-motion";
import styles from "./Bridal.module.css";
const IMAGES = [
  {
    src: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=900",
    tall: true,
  },
  {
    src: "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=900",
    tall: false,
  },
  {
    src: "https://images.pexels.com/photos/7755655/pexels-photo-7755655.jpeg?auto=compress&cs=tinysrgb&w=900",
    tall: false,
  },
  {
    src: "https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=900",
    tall: true,
  },
  {
    src: "https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg?auto=compress&cs=tinysrgb&w=900",
    tall: false,
  },
  {
    src: "https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=900",
    tall: true,
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
