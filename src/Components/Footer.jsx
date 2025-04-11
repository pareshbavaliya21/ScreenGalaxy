import { motion } from "framer-motion";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <motion.div
      className={styles.footerContainer}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <footer className="py-3 my-4">
        <motion.ul
          className={styles.navList}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {["Home", "Features", "Pricing", "FAQs", "About"].map(
            (item, index) => (
              <motion.li
                className={styles.navItem}
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="#" className={styles.navLink}>
                  {item}
                </a>
              </motion.li>
            )
          )}
        </motion.ul>
        <motion.p
          className={styles.footerText}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          © 2024 Company, Inc
        </motion.p>
      </footer>
    </motion.div>
  );
};

export default Footer;
