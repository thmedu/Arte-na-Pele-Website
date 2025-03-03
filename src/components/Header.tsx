import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

interface MenuItem {
  label: string;
  href: string;
}

interface HeaderProps {
  logo?: string;
  menuItems?: MenuItem[];
  onAppointmentClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  logo = "Arte na Pele",
  menuItems = [
    { label: "Início", href: "#" },
    { label: "Galeria", href: "#gallery" },
    { label: "Processo", href: "#process" },
    { label: "Artistas", href: "#artists" },
    { label: "Valores", href: "#pricing" },
    { label: "Depoimentos", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contato", href: "#contact" },
  ],
  onAppointmentClick = () => console.log("Appointment button clicked"),
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      } 
    },
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.3 }
    },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { duration: 0.3 } 
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.3 } 
    },
  };

  const navItemVariants = {
    initial: { opacity: 0, y: -10 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.3, 
        delay: 0.1 + i * 0.1 
      },
    }),
  };

  const AppointmentButton = ({ mobile = false }) => (
    <button
      onClick={onAppointmentClick}
      className={`
        flex items-center justify-center gap-2 
        ${mobile 
          ? 'w-full bg-red-600 hover:bg-red-700 text-white mt-2' 
          : 'bg-white text-black px-8 py-4 text-lg font-medium rounded-full hover:bg-opacity-90'}
        transition-all duration-300
        shadow-[0_0_20px_rgba(255,255,255,0.3)]
        hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]
      `}
    >
      <Phone className="h-4 w-4" />
      Agendar
    </button>
  );

  return (
    <motion.header
      className={`
        fixed top-0 left-0 right-0 h-20 text-white z-50 
        transition-all duration-300 
        ${scrolled 
          ? 'bg-zinc-900/95 backdrop-blur-sm shadow-lg' 
          : 'bg-zinc-900 shadow-md'}
      `}
      initial="initial"
      animate="animate"
      variants={headerVariants}
    >
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a href="#" className="text-2xl font-bold tracking-tight">
            {logo}
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {menuItems.map((item, index) => (
              <motion.li 
                key={index} 
                custom={index} 
                variants={navItemVariants}
              >
                <a
                  href={item.href}
                  className="text-zinc-300 hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>
          <motion.div 
            variants={navItemVariants} 
            custom={menuItems.length}
          >
            <AppointmentButton />
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          variants={navItemVariants}
          custom={0}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-zinc-800 absolute top-20 left-0 right-0 shadow-lg overflow-hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="container mx-auto px-4 py-4">
              <ul className="flex flex-col space-y-4">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <a
                      href={item.href}
                      className="block text-zinc-300 hover:text-white transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * menuItems.length }}
                >
                  <AppointmentButton mobile />
                </motion.li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;