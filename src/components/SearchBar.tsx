import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { TRANSLATIONS } from "@/types/global";

interface SearchBarProps {
  language: string;
  onSearch: (query: string, category: string, location: string) => void;
}

const SearchBar = ({ language, onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [location, setLocation] = useState("");

  const t =
    TRANSLATIONS[language as keyof typeof TRANSLATIONS] || TRANSLATIONS.en;

  const handleSearch = () => {
    onSearch(query, category, location);
  };

  const categories = [
    { id: "all", name: t.allCategories },
    {
      id: "electronics",
      name: language === "ru" ? "Электроника" : "Electronics",
    },
    { id: "vehicles", name: language === "ru" ? "Транспорт" : "Vehicles" },
    {
      id: "real-estate",
      name: language === "ru" ? "Недвижимость" : "Real Estate",
    },
    { id: "fashion", name: language === "ru" ? "Одежда и обувь" : "Fashion" },
    { id: "home", name: language === "ru" ? "Дом и сад" : "Home & Garden" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 -mt-8 relative z-10 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search Input */}
        <div className="flex-1 relative">
          <Icon
            name="Search"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <Input
            placeholder={t.search}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 h-12 text-lg"
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
          />
        </div>

        {/* Category Selector */}
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-full md:w-48 h-12">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat.id} value={cat.id}>
                {cat.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Location Input */}
        <div className="relative">
          <Icon
            name="MapPin"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <Input
            placeholder={t.location}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="pl-10 h-12 w-full md:w-48"
          />
        </div>

        {/* Search Button */}
        <Button
          onClick={handleSearch}
          className="h-12 px-8 bg-primary hover:bg-primary/90"
        >
          <Icon name="Search" size={20} className="mr-2" />
          {language === "ru" ? "Найти" : "Search"}
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
