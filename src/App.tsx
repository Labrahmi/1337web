import React from 'react';
import { Code2, Terminal, Blocks, Cpu, Users, ExternalLink } from 'lucide-react';
import { FeatureCard } from './components/FeatureCard';
import { ActivityCard } from './components/ActivityCard';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { useLanguage } from './contexts/LanguageContext';

function App() {
  const { t, language } = useLanguage();

  const activities = [
    {
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4',
      title: 'React Workshop Series',
      date: language === 'en' ? 'March 2024' : 'مارس ٢٠٢٤',
      description: language === 'en' 
        ? 'Three-day intensive workshop covering React fundamentals and advanced patterns.'
        : 'ورشة عمل مكثفة لمدة ثلاثة أيام تغطي أساسيات React والأنماط المتقدمة.'
    },
    {
      image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0',
      title: language === 'en' ? 'Hackathon 2024' : 'هاكاثون ٢٠٢٤',
      date: language === 'en' ? 'February 2024' : 'فبراير ٢٠٢٤',
      description: language === 'en'
        ? '48-hour coding challenge where teams built innovative web applications.'
        : 'تحدي برمجة لمدة ٤٨ ساعة حيث قامت الفرق ببناء تطبيقات ويب مبتكرة.'
    },
    {
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87',
      title: language === 'en' ? 'Tech Talk: Future of Web' : 'محاضرة تقنية: مستقبل الويب',
      date: language === 'en' ? 'January 2024' : 'يناير ٢٠٢٤',
      description: language === 'en'
        ? 'Industry experts discussed emerging web technologies and career opportunities.'
        : 'ناقش خبراء الصناعة تقنيات الويب الناشئة وفرص العمل.'
    }
  ];

  const features = [
    { icon: <Code2 className="w-8 h-8 text-[hsl(var(--primary))]" />, title: t('learnModernTech'), description: t('learnModernTechDesc') },
    { icon: <Terminal className="w-8 h-8 text-[hsl(var(--primary))]" />, title: t('handsOnProjects'), description: t('handsOnProjectsDesc') },
    { icon: <Blocks className="w-8 h-8 text-[hsl(var(--primary))]" />, title: t('workshopSessions'), description: t('workshopSessionsDesc') },
    { icon: <Users className="w-8 h-8 text-[hsl(var(--primary))]" />, title: t('community'), description: t('communityDesc') },
    { icon: <Cpu className="w-8 h-8 text-[hsl(var(--primary))]" />, title: t('hackathons'), description: t('hackathonsDesc') },
    { icon: <ExternalLink className="w-8 h-8 text-[hsl(var(--primary))]" />, title: t('industryConnect'), description: t('industryConnectDesc') }
  ];

  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-20" />
        <div className="absolute inset-0 hero-glow" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="floating">
            <h1 className="text-7xl font-bold mb-6 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-purple-400">
                {t('title')}
              </span>
            </h1>
            <p className="text-xl text-[hsl(var(--foreground)/.8)] mb-8 font-mono">
              &gt; {t('subtitle')}
              <span className="inline-block w-3 h-8 ml-1 bg-[hsl(var(--primary))] animate-pulse" />
            </p>
            <button className="glow-border bg-[hsl(var(--card))] text-[hsl(var(--primary))] font-bold py-3 px-8 transition-all hover:scale-105 hover:text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary))]">
              {t('joinButton')}
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[hsl(var(--background))] to-transparent" />
      </div>

      {/* Features Grid */}
      <div id="features" className="max-w-6xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>

      {/* Past Activities Section */}
      <div id="activities" className="relative py-24">
        <div className="absolute inset-0 hero-glow opacity-50" />
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('pastActivities')}</h2>
            <p className="text-[hsl(var(--foreground)/.6)] max-w-2xl mx-auto">
              {t('pastActivitiesDesc')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <ActivityCard key={index} {...activity} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;