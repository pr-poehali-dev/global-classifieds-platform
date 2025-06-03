import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface AboutProps {
  currentCountry: string;
  currentLanguage: string;
  user: any;
  onCountryChange: (country: string) => void;
  onLanguageChange: (language: string) => void;
  onShowAuth: () => void;
  onShowCreateListing: () => void;
}

const About = ({
  currentCountry,
  currentLanguage,
  user,
  onCountryChange,
  onLanguageChange,
  onShowAuth,
  onShowCreateListing,
}: AboutProps) => {
  const t = {
    ru: {
      title: "О WorldMarket",
      subtitle: "Глобальная торговая площадка для всего мира",
      mission: "Наша миссия",
      missionText:
        "Мы стремимся соединить людей по всему миру через безопасную и удобную торговую площадку, где каждый может найти то, что ищет, или продать то, что больше не нужно.",
      features: "Наши возможности",
      feature1: "Глобальный охват",
      feature1Text: "Торгуйте с людьми из 195 стран мира",
      feature2: "Безопасность",
      feature2Text: "Проверенные пользователи и защищенные транзакции",
      feature3: "Удобство",
      feature3Text: "Интуитивно понятный интерфейс на 50+ языках",
      stats: "Наша статистика",
      stat1: "2.4M+ объявлений",
      stat2: "195 стран",
      stat3: "50+ языков",
      stat4: "1M+ пользователей",
      team: "Наша команда",
      teamText:
        "Мы - команда профессионалов, работающих над созданием лучшей торговой площадки в мире.",
      contact: "Связаться с нами",
    },
    en: {
      title: "About WorldMarket",
      subtitle: "Global marketplace for the entire world",
      mission: "Our Mission",
      missionText:
        "We strive to connect people worldwide through a safe and convenient marketplace where everyone can find what they're looking for or sell what they no longer need.",
      features: "Our Features",
      feature1: "Global Reach",
      feature1Text: "Trade with people from 195 countries worldwide",
      feature2: "Security",
      feature2Text: "Verified users and secure transactions",
      feature3: "Convenience",
      feature3Text: "Intuitive interface in 50+ languages",
      stats: "Our Statistics",
      stat1: "2.4M+ listings",
      stat2: "195 countries",
      stat3: "50+ languages",
      stat4: "1M+ users",
      team: "Our Team",
      teamText:
        "We are a team of professionals working to create the best marketplace in the world.",
      contact: "Contact Us",
    },
  };

  const text = t[currentLanguage as keyof typeof t] || t.en;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        currentCountry={currentCountry}
        currentLanguage={currentLanguage}
        onCountryChange={onCountryChange}
        onLanguageChange={onLanguageChange}
        user={user}
        onShowAuth={onShowAuth}
        onShowCreateListing={onShowCreateListing}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {text.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {text.subtitle}
          </p>
        </div>

        {/* Mission */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            {text.mission}
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto text-center leading-relaxed">
            {text.missionText}
          </p>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {text.features}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Globe" size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {text.feature1}
                </h3>
                <p className="text-gray-600">{text.feature1Text}</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {text.feature2}
                </h3>
                <p className="text-gray-600">{text.feature2Text}</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Sparkles" size={32} className="text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {text.feature3}
                </h3>
                <p className="text-gray-600">{text.feature3Text}</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 mb-16 text-white">
          <h2 className="text-3xl font-bold text-center mb-8">{text.stats}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">
                {text.stat1.split(" ")[0]}
              </div>
              <div className="text-lg opacity-90">
                {text.stat1.split(" ").slice(1).join(" ")}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                {text.stat2.split(" ")[0]}
              </div>
              <div className="text-lg opacity-90">
                {text.stat2.split(" ").slice(1).join(" ")}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                {text.stat3.split(" ")[0]}
              </div>
              <div className="text-lg opacity-90">
                {text.stat3.split(" ").slice(1).join(" ")}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                {text.stat4.split(" ")[0]}
              </div>
              <div className="text-lg opacity-90">
                {text.stat4.split(" ").slice(1).join(" ")}
              </div>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{text.team}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            {text.teamText}
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <Icon name="Mail" size={20} className="mr-2" />
            {text.contact}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
