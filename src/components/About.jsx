import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="min-h-screen flex items-center py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid md:grid-columns-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-2xl opacity-30"
              />
              <img
                src="/Image/Photo de profil.jfif"
                alt="Timao Gourdais"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              À Propos de <span className="gradient-text">Moi</span>
            </h2>
            
            <div className="space-y-4 text-gray-300 text-lg">
              <p>
                Bonjour ! Je suis <strong className="text-white">Timao Gourdais</strong>, 
                développeur web passionné par la création d'expériences numériques 
                innovantes et performantes.
              </p>
              
              <p>
                Spécialisé dans le développement front-end avec <strong className="text-purple-400">React</strong>, 
                je maîtrise également les technologies back-end pour créer des applications 
                web complètes et scalables.
              </p>
              
              <p>
                Mon approche combine créativité, expertise technique et attention aux détails 
                pour transformer vos idées en réalité digitale exceptionnelle.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-dark p-6 rounded-xl"
              >
                <h3 className="text-3xl font-bold text-purple-400 mb-2">5+</h3>
                <p className="text-gray-400">Projets Réalisés</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-dark p-6 rounded-xl"
              >
                <h3 className="text-3xl font-bold text-pink-400 mb-2">10+</h3>
                <p className="text-gray-400">Technologies</p>
              </motion.div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >
              Télécharger mon CV
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

