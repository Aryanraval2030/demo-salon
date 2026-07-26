import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './LoadingScreen.module.css';

const FULL_TEXT = 'SAURA SALON';

export default function LoadingScreen({ onFinish }) {
  const [typed, setTyped] = useState('');
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let i = 0;
    const typeInterval = setInterval(() => {
      i += 1;
      setTyped(FULL_TEXT.slice(0, i));
      if (i >= FULL_TEXT.length) clearInterval(typeInterval);
    }, 95);

    const exitTimer = setTimeout(() => {
      setVisible(false);
      setTimeout(onFinish, 700);
    }, 2000);

    return () => {
      clearInterval(typeInterval);
      clearTimeout(exitTimer);
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.loader}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}
          role="status"
          aria-label="Loading Saura Salon"
        >
          <div className={styles.frame}>
            <span className={styles.text}>
              {typed}
              <span className={styles.cursor} aria-hidden="true" />
            </span>
            <motion.div
              className={styles.rule}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
