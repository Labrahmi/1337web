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
      image: '/1710205036991.jpeg',
      title: 'Workshop by Mr Diaa',
      date: '11-03-2024',
      description: language === 'en' 
        ? 'A workshop about securing employment and internships, providing students with practical insights and expert guidance.'
        : 'ورشة حول كيفية الحصول على وظائف وتداريب أطرها السيد ضياء الحق الفلوس، اللي قدم للطلاب نصائح عملية وتوجيهات قيمة.'
    },
    {
      image: '/1704575141651.jpeg',
      title: 'Workshop by amait-ou',
      date: '06-01-2024',
      description: language === 'en'
        ? 'The "Web Dev 2024: The Roadmap" workshop provided essential insights into the latest web development trends and skills.'
        : 'ورشة "تطوير الويب 2024: الخريطة" قدمت نظرة شاملة على أحدث التوجهات والمهارات في تطوير الويب.'
    },
    {
      image: '/10093403.webp',
      title: 'Speed Typing',
      date: '20-12-2023',
      description: language === 'en'
        ? 'Winning Team: Ziyani, Mrital, Mehdi'
        : 'الفريق الفائز: زياني، مريتل، مهدي'
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
      <div className="relative h-[50rem] flex items-center justify-center overflow-hidden">
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
            <a target='_blank' href='https://www.instagram.com/1337webclub/' className="glow-border bg-[hsl(var(--card))] text-[hsl(var(--primary))] font-bold py-3 px-8 transition-all hover:scale-105 hover:text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary))]">
              {t('joinButton')}
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[hsl(var(--background))] to-transparent" />
      </div>

      {/* Features Grid */}
      <div id="features" className="max-w-6xl mx-auto px-4 py-24 relative">
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