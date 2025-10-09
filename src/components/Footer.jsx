import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com/timao-gourdais' },
    { icon: <Linkedin size={20} />, url: 'https://linkedin.com' },
    { icon: <Mail size={20} />, url: 'mailto:contact@exemple.com' }
  ]

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-3xl font-bold gradient-text font-heading"
          >
            TG
          </motion.div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-center flex items-center space-x-2">
            <span>© {currentYear} Timao Gourdais. Fait avec</span>
            <Heart size={16} className="text-red-500" fill="currentColor" />
            <span>et React</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

