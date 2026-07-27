import { MapPin, Phone, Mail } from "lucide-react";
import styles from "./Footer.module.css";

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M15 8.5h2V5.2c-.35-.05-1.55-.15-2.95-.15-2.92 0-4.92 1.78-4.92 5.05v2.65H6.2v3.7h2.93V21h3.8v-4.55h2.82l.45-3.7h-3.27v-2.3c0-1.07.29-1.8 1.07-1.8z" />
    </svg>
  );
}

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Bridal", href: "#bridal" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brandCol}>
          <div className={styles.logo}>
            <span className={styles.logoMark}>S</span>
            <span className={styles.logoText}>Saura Salon</span>
          </div>
          <p className={styles.tagline}>
            Premium hair, bridal makeup, nails, and skin care in the heart of
            nyc.
          </p>
          <div className={styles.socials}>
            <a
              href="#"
              aria-label="Saura Salon on Instagram"
              className={styles.socialIcon}
            >
              <InstagramIcon />
            </a>
            <a
              href="#"
              aria-label="Saura Salon on Facebook"
              className={styles.socialIcon}
            >
              <FacebookIcon />
            </a>
          </div>
        </div>

        <div className={styles.col}>
          <h3>Quick Links</h3>
          <ul>
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h3>Contact</h3>
          <ul className={styles.contactList}>
            <li>
              <MapPin size={16} strokeWidth={1.5} />
              <span>
                Beside Joe's Pizza, Opp. Washington Square Park, Greenwich
                Village, New York.
              </span>{" "}
            </li>
            <li>
              <Phone size={16} strokeWidth={1.5} />
              <a href="tel:+917990754015">+91 79907 11111</a>
            </li>
            <li>
              <Mail size={16} strokeWidth={1.5} />
              <a href="mailto:hello@saurasalon.com">hello@saurasalon.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; {year} Saura Salon. All rights reserved.</p>
      </div>
    </footer>
  );
}
