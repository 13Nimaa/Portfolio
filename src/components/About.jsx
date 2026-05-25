import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.92 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 15,
      delay: i * 0.15,
    },
  }),
};

const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    custom={index}
    variants={cardVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    whileHover={{
      y: -8,
      transition: { type: "spring", stiffness: 300, damping: 18 },
    }}
    className="xs:w-[250px] w-full"
  >
    <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card
                    hover:shadow-[0_0_25px_rgba(145,94,255,0.3)] transition-shadow duration-300">
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <motion.img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain"
          whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a Front-End Developer focused on React and TypeScript, with
        hands-on experience designing and building data-driven web
        applications and admin dashboards. I write scalable, reusable
        components, manage application state, and integrate REST APIs to
        ship responsive interfaces with TailwindCSS and Material UI. I care
        deeply about clean code, performance, and crafting smooth user
        experiences. Let's build something great together!
      </motion.p>

      <motion.div
        variants={staggerContainer(0.15, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-20 flex flex-wrap gap-10"
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
