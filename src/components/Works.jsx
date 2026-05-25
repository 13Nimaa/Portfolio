import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 16,
      delay: i * 0.18,
    },
  }),
};

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  const handleOpen = () => window.open(source_code_link, "_blank", "noopener,noreferrer");

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{
        y: -10,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      onClick={handleOpen}
      className="cursor-pointer sm:w-[360px] w-full"
    >
      <div className="bg-tertiary p-5 rounded-2xl w-full h-full relative overflow-hidden group
                      shadow-lg hover:shadow-[0_0_30px_rgba(145,94,255,0.25)]
                      transition-shadow duration-300">

        {/* image */}
        <div className="relative w-full h-[230px] overflow-hidden rounded-2xl">
          <motion.img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.07 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          />

          {/* overlay gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

          {/* link icon */}
          <motion.div
            className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100
                        black-gradient w-10 h-10 rounded-full flex justify-center items-center
                        transition-opacity duration-300"
            whileHover={{ scale: 1.15 }}
            onClick={(e) => { e.stopPropagation(); handleOpen(); }}
          >
            <img src={github} alt="open" className="w-1/2 h-1/2 object-contain" />
          </motion.div>
        </div>

        {/* title */}
        <motion.h3
          className="text-white font-bold text-[22px] mt-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.18 + 0.3 }}
        >
          {name}
        </motion.h3>

        {/* description */}
        <p className="mt-2 text-secondary text-[14px] leading-[22px]">{description}</p>

        {/* tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <motion.p
              key={`${name}-${tag.name}`}
              className={`text-[13px] font-medium ${tag.color}`}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.18 + 0.4 + i * 0.07 }}
              viewport={{ once: true }}
            >
              #{tag.name}
            </motion.p>
          ))}
        </div>

        {/* animated bottom border on hover */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#915EFF] to-[#00cea8]"
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Real-world projects I've built — each one reflects my focus on clean UI,
        solid architecture, and smooth user experience. Click any card to visit the live site.
      </motion.p>

      <motion.div
        variants={staggerContainer(0.15, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-20 flex flex-wrap gap-7"
      >
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "");
