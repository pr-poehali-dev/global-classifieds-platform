import ListingCard from "./ListingCard";
import { Listing } from "@/types/global";
import { TRANSLATIONS } from "@/types/global";

interface FeaturedListingsProps {
  language: string;
  currency: string;
  listings: Listing[];
  onFavoriteClick: (id: string) => void;
}

const FeaturedListings = ({
  language,
  currency,
  listings,
  onFavoriteClick,
}: FeaturedListingsProps) => {
  const t =
    TRANSLATIONS[language as keyof typeof TRANSLATIONS] || TRANSLATIONS.en;

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
              onFavoriteClick={onFavoriteClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
