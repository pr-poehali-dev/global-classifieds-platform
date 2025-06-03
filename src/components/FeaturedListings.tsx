import { useState } from "react";
import ListingCard from "./ListingCard";
import { Listing } from "@/types/global";
import { TRANSLATIONS } from "@/types/global";

interface FeaturedListingsProps {
  language: string;
  currency: string;
}

const FeaturedListings = ({ language, currency }: FeaturedListingsProps) => {
  const t =
    TRANSLATIONS[language as keyof typeof TRANSLATIONS] || TRANSLATIONS.en;

  const [listings] = useState<Listing[]>([
    {
      id: "1",
      title:
        language === "ru"
          ? "iPhone 15 Pro Max 256GB Титановый"
          : "iPhone 15 Pro Max 256GB Titanium",
      price: 89900,
      currency: "RUB",
      location: language === "ru" ? "Москва, Центр" : "Moscow, Center",
      image:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400",
      category: language === "ru" ? "Электроника" : "Electronics",
      createdAt: "2024-01-15",
      views: 234,
      isFavorite: false,
    },
    {
      id: "2",
      title: language === "ru" ? "BMW X5 2022 года" : "BMW X5 2022",
      price: 4500000,
      currency: "RUB",
      location: language === "ru" ? "Санкт-Петербург" : "Saint Petersburg",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400",
      category: language === "ru" ? "Транспорт" : "Vehicles",
      createdAt: "2024-01-14",
      views: 567,
      isFavorite: true,
    },
    {
      id: "3",
      title:
        language === "ru"
          ? "3-комнатная квартира в центре"
          : "3-bedroom apartment downtown",
      price: 12500000,
      currency: "RUB",
      location: language === "ru" ? "Екатеринбург" : "Yekaterinburg",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400",
      category: language === "ru" ? "Недвижимость" : "Real Estate",
      createdAt: "2024-01-13",
      views: 892,
      isFavorite: false,
    },
    {
      id: "4",
      title:
        language === "ru"
          ? 'MacBook Pro M3 14" новый'
          : 'MacBook Pro M3 14" brand new',
      price: 189900,
      currency: "RUB",
      location: language === "ru" ? "Новосибирск" : "Novosibirsk",
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400",
      category: language === "ru" ? "Электроника" : "Electronics",
      createdAt: "2024-01-12",
      views: 445,
      isFavorite: false,
    },
    {
      id: "5",
      title:
        language === "ru"
          ? "Дизайнерское кресло Eames"
          : "Designer Eames Chair",
      price: 45000,
      currency: "RUB",
      location: language === "ru" ? "Казань" : "Kazan",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
      category: language === "ru" ? "Дом и сад" : "Home & Garden",
      createdAt: "2024-01-11",
      views: 156,
      isFavorite: true,
    },
    {
      id: "6",
      title:
        language === "ru"
          ? "Nike Air Jordan 1 размер 42"
          : "Nike Air Jordan 1 size 42",
      price: 15900,
      currency: "RUB",
      location: language === "ru" ? "Ростов-на-Дону" : "Rostov-on-Don",
      image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400",
      category: language === "ru" ? "Одежда и обувь" : "Fashion",
      createdAt: "2024-01-10",
      views: 678,
      isFavorite: false,
    },
  ]);

  const handleFavoriteClick = (id: string) => {
    // В реальном приложении здесь будет обновление состояния
    console.log("Toggle favorite for:", id);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {language === "ru"
              ? "Рекомендуемые объявления"
              : "Featured Listings"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {language === "ru"
              ? "Лучшие предложения от проверенных продавцов"
              : "Best offers from verified sellers"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <ListingCard
              key={listing.id}
              listing={listing}
              currency={currency}
              onFavoriteClick={handleFavoriteClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
