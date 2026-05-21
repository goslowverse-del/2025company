import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'HOME', path: '/' },
  { name: '회사 소개', path: '/about' },
  { name: '사업 영역', path: '/business' },
  { name: '연계 기업', path: '/partners' },
  { name: 'ESG', path: '/esg' },
  { name: 'Contact', path: '/contact' },
];

const darkHeroRoutes = ['/about', '/partners', '/contact'];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    // Reset body overflow when route changes (just in case menu was open)
    document.body.style.overflow = '';
  }, [location]);

  // Lock scroll when mobile menu is open to improve UX
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const isDarkHeroPage = darkHeroRoutes.includes(location.pathname);
  
  // Decide active link text/theme color
  const getNavbarStyles = () => {
    if (isScrolled) {
      return {
        navBg: 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 py-3 md:py-4 shadow-sm',
        logoText: 'text-slate-900',
        linkText: 'text-slate-600',
        activeLinkText: 'text-brand',
        toggleBtn: 'text-slate-900',
      };
    }
    
    if (isDarkHeroPage) {
      return {
        navBg: 'bg-transparent py-4 md:py-6',
        logoText: 'text-white',
        linkText: 'text-slate-300',
        activeLinkText: 'text-brand',
        toggleBtn: 'text-white',
      };
    }

    return {
      navBg: 'bg-transparent py-4 md:py-6',
      logoText: 'text-slate-900',
      linkText: 'text-slate-600',
      activeLinkText: 'text-brand',
      toggleBtn: 'text-slate-900',
    };
  };

  const styles = getNavbarStyles();

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${styles.navBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center h-12 md:h-16">
          <Link 
            to="/" 
            className={`text-xl sm:text-2xl font-bold tracking-tighter hover:text-brand transition-colors ${styles.logoText}`}
          >
            2025 <span className="text-brand">company</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-bold tracking-wide transition-colors hover:text-brand ${
                  location.pathname === item.path ? styles.activeLinkText : styles.linkText
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-brand text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-brand/90 transition-all active:scale-95 shadow-lg shadow-brand/20 ml-2"
            >
              문의하기
            </Link>
          </div>

          {/* Mobile Toggle Button with adequate touch targets (>= 44px) */}
          <button
            className={`md:hidden flex items-center justify-center w-11 h-11 rounded-xl transition-all ${styles.toggleBtn} focus:outline-none`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
            id="mobile-menu-toggle"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Fullscreen Overlay to solve clipping/height bugs on iPhone & Android */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-slate-950/40 backdrop-blur-md z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-full bg-white border-b border-slate-200/80 shadow-2xl pt-28 pb-10 px-6 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col space-y-4 max-w-sm mx-auto">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      className={`block py-3.5 px-4 rounded-2xl text-base font-black tracking-wider transition-colors active:bg-slate-50 ${
                        location.pathname === item.path 
                          ? 'text-brand bg-brand/5' 
                          : 'text-slate-800'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: navItems.length * 0.05 }}
                  className="pt-6"
                >
                  <Link
                    to="/contact"
                    className="block text-center bg-brand text-white py-4 rounded-2xl text-base font-black shadow-lg shadow-brand/20 active:scale-95 transition-all"
                  >
                    문의하기
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
