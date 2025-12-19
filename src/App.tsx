import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans max-w-md mx-auto relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-20%] w-[80vw] h-[80vw] bg-purple-900/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-[-10%] left-[-20%] w-[80vw] h-[80vw] bg-indigo-900/20 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 p-6 flex-grow flex flex-col justify-center">
        
        {/* Header */}
        <header className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-gradient-to-tr from-purple-500 to-indigo-600 rounded-2xl mb-6 shadow-xl shadow-purple-900/20" />
            <h1 className="text-4xl font-bold tracking-tight mb-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">
                Pixel Artisan.
              </span>
            </h1>
            <p className="text-neutral-400 text-lg leading-relaxed">
              Designing interfaces that breathe. <br/>
              Full-stack engineering meets visionary motion.
            </p>
          </motion.div>
        </header>

        {/* Links */}
        <section className="space-y-4 mb-12">
           <SocialLink href="#" icon={<Github size={20} />} label="GitHub" delay={0.1} />
           <SocialLink href="#" icon={<Twitter size={20} />} label="Twitter" delay={0.2} />
           <SocialLink href="#" icon={<Linkedin size={20} />} label="LinkedIn" delay={0.3} />
           <SocialLink href="#" icon={<Mail size={20} />} label="Email Me" delay={0.4} />
        </section>

        {/* Featured Placeholder */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="p-6 rounded-3xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm"
        >
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">Project Alpha</h3>
                <span className="px-3 py-1 bg-green-900/30 text-green-400 text-xs rounded-full border border-green-900/50">Active</span>
            </div>
            <div className="h-32 bg-neutral-800/50 rounded-xl mb-4 flex items-center justify-center border border-neutral-700/50 border-dashed text-neutral-500 text-sm">
                Placeholder Preview
            </div>
            <p className="text-sm text-neutral-400">
                A stealth startup interface focused on micro-interactions and radical accessibility.
            </p>
        </motion.div>

      </div>

      {/* Footer */}
      <footer className="relative z-10 p-6 text-center">
         <p className="text-xs text-neutral-600">© 2024 Pixel Artisan. Mobile-First.</p>
      </footer>
    </div>
  );
};

const SocialLink = ({ href, icon, label, delay }: { href: string; icon: React.ReactNode; label: string; delay: number }) => (
  <motion.a
    href={href}
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.4 }}
    whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
    whileTap={{ scale: 0.98 }}
    className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-sm"
  >
    <div className="text-neutral-400 group-hover:text-white transition-colors">{icon}</div>
    <span className="font-medium text-neutral-300">{label}</span>
  </motion.a>
);

export default App;