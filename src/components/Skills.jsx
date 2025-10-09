import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Palette, Server, Smartphone } from 'lucide-react'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    {
      icon: <Code size={40} />,
      title: 'Frontend',
      description: 'React, Vue.js, Next.js, TypeScript',
      technologies: ['React', 'Vue.js', 'Tailwind CSS', 'Framer Motion', 'GSAP']
    },
    {
      icon: <Server size={40} />,
      title: 'Backend',
      description: 'Node.js, Express, MongoDB, PostgreSQL',
      technologies: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST API']
    },
    {
      icon: <Palette size={40} />,
      title: 'Design',
      description: 'UI/UX, Figma, Adobe XD',
      technologies: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Prototyping']
    },
    {
      icon: <Smartphone size={40} />,
      title: 'Mobile',
      description: 'React Native, Progressive Web Apps',
      technologies: ['React Native', 'PWA', 'Flutter', 'Expo', 'Mobile First']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="skills" className="min-h-screen py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Mes <span className="gradient-text">Compétences</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Technologies et outils que je maîtrise
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-dark p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="text-purple-400 mb-4">
                {skill.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{skill.title}</h3>
              <p className="text-gray-400 mb-6">{skill.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Progress Bars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 space-y-6"
        >
          {[
            { name: 'React & Next.js', level: 90 },
            { name: 'TypeScript', level: 85 },
            { name: 'Node.js & Express', level: 80 },
            { name: 'UI/UX Design', level: 75 }
          ].map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="text-gray-300 font-medium">{skill.name}</span>
                <span className="text-purple-400">{skill.level}%</span>
              </div>
              <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.8 + index * 0.2 }}
                  className="h-full bg-gradient-to-r from-purple-600 to-pink-600"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

