import { useState } from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedListings from "@/components/FeaturedListings";
import AuthModal from "@/components/AuthModal";
import CreateListingModal from "@/components/CreateListingModal";
import { COUNTRIES, TRANSLATIONS, Listing } from "@/types/global";

interface IndexProps {
  currentCountry: string;
  currentLanguage: string;
  user: any;
  listings: Listing[];
  onCountryChange: (country: string) => void;
  onLanguageChange: (language: string) => void;
  onLogin: (email: string, password: string) => void;
  onRegister: (name: string, email: string, password: string) => void;
  onCreateListing: (listing: any) => void;
  onFavoriteClick: (id: string) => void;
}

const Index = ({
  currentCountry,
  currentLanguage,
  user,
  listings,
  onCountryChange,
  onLanguageChange,
  onLogin,
  onRegister,
  onCreateListing,
  onFavoriteClick,
}: IndexProps) => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showCreateListingModal, setShowCreateListingModal] = useState(false);

  const country =
    COUNTRIES.find((c) => c.code === currentCountry) || COUNTRIES[0];
  const t =
    TRANSLATIONS[currentLanguage as keyof typeof TRANSLATIONS] ||
    TRANSLATIONS.en;

  const handleSearch = (query: string, category: string, location: string) => {
    console.log("Search:", { query, category, location });
  };

  const handleCategoryClick = (categoryId: string) => {
    window.location.href = `/category/${categoryId}`;
  };

  const handleShowCreateListing = () => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }
    setShowCreateListingModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header
        currentCountry={currentCountry}
        currentLanguage={currentLanguage}
        onCountryChange={onCountryChange}
        onLanguageChange={onLanguageChange}
        user={user}
        onShowAuth={() => setShowAuthModal(true)}
        onShowCreateListing={handleShowCreateListing}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            {t.findAnything}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            {t.description}
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm opacity-80">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>
                {currentLanguage === "ru"
                  ? `${listings.length}+ объявлений`
                  : `${listings.length}+ listings`}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>
                {currentLanguage === "ru" ? "195 стран" : "195 countries"}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span>
                {currentLanguage === "ru" ? "50+ языков" : "50+ languages"}
              </span>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <SearchBar language={currentLanguage} onSearch={handleSearch} />
        </div>
      </section>

      {/* Categories */}
      <CategoryGrid
        language={currentLanguage}
        onCategoryClick={handleCategoryClick}
      />

      {/* Featured Listings */}
      <FeaturedListings
        language={currentLanguage}
        currency={country.currencySymbol}
        listings={listings.slice(0, 6)}
        onFavoriteClick={onFavoriteClick}
      />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">W</span>
                </div>
                <span className="text-xl font-bold">WorldMarket</span>
              </div>
              <p className="text-gray-400 text-sm">
                {currentLanguage === "ru"
                  ? "Глобальная торговая площадка для всех стран мира"
                  : "Global marketplace for all countries worldwide"}
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">
                {currentLanguage === "ru" ? "Компания" : "Company"}
              </h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {currentLanguage === "ru" ? "О нас" : "About us"}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {currentLanguage === "ru" ? "Карьера" : "Careers"}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {currentLanguage === "ru" ? "Пресс-центр" : "Press"}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">
                {currentLanguage === "ru" ? "Поддержка" : "Support"}
              </h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {currentLanguage === "ru" ? "Помощь" : "Help"}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {currentLanguage === "ru" ? "Безопасность" : "Safety"}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {currentLanguage === "ru" ? "Контакты" : "Contact"}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">
                {currentLanguage === "ru"
                  ? "Мобильные приложения"
                  : "Mobile Apps"}
              </h3>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block bg-gray-800 rounded-lg p-2 hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <div className="text-xl">📱</div>
                    <div>
                      <div className="text-xs text-gray-400">App Store</div>
                      <div className="text-sm font-medium">iOS</div>
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  className="block bg-gray-800 rounded-lg p-2 hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <div className="text-xl">🤖</div>
                    <div>
                      <div className="text-xs text-gray-400">Google Play</div>
                      <div className="text-sm font-medium">Android</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>
              &copy; 2024 WorldMarket.{" "}
              {currentLanguage === "ru"
                ? "Все права защищены."
                : "All rights reserved."}
            </p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        language={currentLanguage}
        onLogin={onLogin}
        onRegister={onRegister}
      />

      <CreateListingModal
        isOpen={showCreateListingModal}
        onClose={() => setShowCreateListingModal(false)}
        language={currentLanguage}
        currency={country.currencySymbol}
        onCreateListing={onCreateListing}
      />
    </div>
  );
};

export default Index;
