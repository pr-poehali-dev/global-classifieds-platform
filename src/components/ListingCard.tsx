import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Listing } from "@/types/global";

interface ListingCardProps {
  listing: Listing;
  currency: string;
  onFavoriteClick: (id: string) => void;
}

const ListingCard = ({
  listing,
  currency,
  onFavoriteClick,
}: ListingCardProps) => {
  return (
    <Card className="group cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={listing.image}
          alt={listing.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
        />
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-2 right-2 bg-white/80 hover:bg-white ${
            listing.isFavorite ? "text-red-500" : "text-gray-600"
          }`}
          onClick={(e) => {
            e.stopPropagation();
            onFavoriteClick(listing.id);
          }}
        >
          <Icon name="Heart" size={18} />
        </Button>
        <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
          {listing.category}
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {listing.title}
        </h3>

        <div className="flex items-center justify-between mb-2">
          <span className="text-2xl font-bold text-primary">
            {listing.price.toLocaleString()} {currency}
          </span>
          <div className="flex items-center text-gray-500 text-sm">
            <Icon name="Eye" size={14} className="mr-1" />
            {listing.views}
          </div>
        </div>

        <div className="flex items-center text-gray-600 text-sm mb-3">
          <Icon name="MapPin" size={14} className="mr-1" />
          {listing.location}
        </div>

        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{new Date(listing.createdAt).toLocaleDateString()}</span>
          <Button
            variant="ghost"
            size="sm"
            className="h-auto p-0 text-primary hover:text-primary/80"
          >
            Подробнее
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ListingCard;
