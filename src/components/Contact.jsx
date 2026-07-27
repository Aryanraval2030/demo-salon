import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p className="eyebrow">Visit Us</p>
          <h2 className={styles.heading}>Plan Your Visit</h2>
        </div>

        <div className={styles.layout}>
          <motion.div
            className={styles.info}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.infoItem}>
              <MapPin size={20} className={styles.icon} strokeWidth={1.5} />
              <div>
                <h3>Address</h3>
<p>Beside Joe's Pizza, Opp. Washington Square Park, Greenwich Village, New York.</p>              </div>
            </div>

            <div className={styles.infoItem}>
              <Phone size={20} className={styles.icon} strokeWidth={1.5} />
              <div>
                <h3>Phone</h3>
                <p>
                  <a href="">+91 79907 11111</a>
                </p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <Clock size={20} className={styles.icon} strokeWidth={1.5} />
              <div>
                <h3>Hours</h3>
                <p>Every day &middot; 10:00 AM &ndash; 8:30 PM</p>
              </div>
            </div>

            <a
              // href="https://wa.me/917990754015"
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappInline}
            >
              <MessageCircle size={18} strokeWidth={1.5} />
              Chat on WhatsApp
            </a>
          </motion.div>

          <motion.div
            className={styles.mapWrap}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <iframe
              title="Saura Salon location map"
              src="https://www.google.com/maps/search/?api=1&query=123+5th+Avenue+New+York+NY+10001"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
