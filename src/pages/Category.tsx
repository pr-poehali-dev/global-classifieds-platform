import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import ListingCard from "@/components/ListingCard";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Listing } from "@/types/global";

interface CategoryProps {
  currentCountry: string;
  currentLanguage: string;
  currency: string;
  user: any;
  onCountryChange: (country: string) => void;
  onLanguageChange: (language: string) => void;
  onShowAuth: () => void;
  onShowCreateListing: () => void;
  listings: Listing[];
  onFavoriteClick: (id: string) => void;
}

const Category = ({
  currentCountry,
  currentLanguage,
  currency,
  user,
  onCountryChange,
  onLanguageChange,
  onShowAuth,
  onShowCreateListing,
  listings,
  onFavoriteClick,
}: CategoryProps) => {
  const { categoryId } = useParams();
  const [filteredListings, setFilteredListings] = useState<Listing[]>([]);

  const categoryNames = {
    ru: {
      electronics: "Электроника",
      vehicles: "Транспорт",
      "real-estate": "Недвижимость",
      fashion: "Одежда и обувь",
      home: "Дом и сад",
      services: "Услуги",
      jobs: "Работа",
      pets: "Животные",
    },
    en: {
      electronics: "Electronics",
      vehicles: "Vehicles",
      "real-estate": "Real Estate",
      fashion: "Fashion",
      home: "Home & Garden",
      services: "Services",
      jobs: "Jobs",
      pets: "Pets",
    },
  };

  const t =
    categoryNames[currentLanguage as keyof typeof categoryNames] ||
    categoryNames.en;
  const categoryName = t[categoryId as keyof typeof t] || categoryId;

  useEffect(() => {
    const filtered = listings.filter(
      (listing) =>
        listing.category.toLowerCase() === categoryId?.toLowerCase() ||
        listing.category
          .toLowerCase()
          .includes(categoryId?.toLowerCase() || ""),
    );
    setFilteredListings(filtered);
  }, [listings, categoryId]);

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
              <Link to="/" className="hover:text-primary">
                {currentLanguage === "ru" ? "Главная" : "Home"}
              </Link>
              <Icon name="ChevronRight" size={16} />
              <span className="text-gray-900">{categoryName}</span>
            </nav>
            <h1 className="text-3xl font-bold text-gray-900">{categoryName}</h1>
            <p className="text-gray-600 mt-2">
              {currentLanguage === "ru"
                ? `Найдено ${filteredListings.length} объявлений`
                : `Found ${filteredListings.length} listings`}
            </p>
          </div>

          <Button
            onClick={onShowCreateListing}
            className="flex items-center space-x-2"
          >
            <Icon name="Plus" size={18} />
            <span>
              {currentLanguage === "ru" ? "Подать объявление" : "Post Listing"}
            </span>
          </Button>
        </div>

        {filteredListings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredListings.map((listing) => (
              <ListingCard
                key={listing.id}
                listing={listing}
                currency={currency}
                onFavoriteClick={onFavoriteClick}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Icon
              name="Package"
              size={64}
              className="mx-auto text-gray-400 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {currentLanguage === "ru"
                ? "Пока нет объявлений"
                : "No listings yet"}
            </h3>
            <p className="text-gray-600 mb-6">
              {currentLanguage === "ru"
                ? "Станьте первым, кто разместит объявление в этой категории"
                : "Be the first to post a listing in this category"}
            </p>
            <Button onClick={onShowCreateListing}>
              <Icon name="Plus" size={18} className="mr-2" />
              {currentLanguage === "ru"
                ? "Создать объявление"
                : "Create Listing"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
