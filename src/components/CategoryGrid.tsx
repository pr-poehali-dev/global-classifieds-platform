import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { TRANSLATIONS } from "@/types/global";

interface CategoryGridProps {
  language: string;
  onCategoryClick: (categoryId: string) => void;
}

const CategoryGrid = ({ language, onCategoryClick }: CategoryGridProps) => {
  const t =
    TRANSLATIONS[language as keyof typeof TRANSLATIONS] || TRANSLATIONS.en;

  const categories = [
    {
      id: "electronics",
      name: language === "ru" ? "Электроника" : "Electronics",
      icon: "Smartphone",
      count: language === "ru" ? "124,580 объявлений" : "124,580 listings",
      color: "bg-blue-50 hover:bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      id: "vehicles",
      name: language === "ru" ? "Транспорт" : "Vehicles",
      icon: "Car",
      count: language === "ru" ? "89,432 объявлений" : "89,432 listings",
      color: "bg-green-50 hover:bg-green-100",
      iconColor: "text-green-600",
    },
    {
      id: "real-estate",
      name: language === "ru" ? "Недвижимость" : "Real Estate",
      icon: "Home",
      count: language === "ru" ? "67,291 объявлений" : "67,291 listings",
      color: "bg-purple-50 hover:bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      id: "fashion",
      name: language === "ru" ? "Одежда и обувь" : "Fashion",
      icon: "Shirt",
      count: language === "ru" ? "156,734 объявлений" : "156,734 listings",
      color: "bg-pink-50 hover:bg-pink-100",
      iconColor: "text-pink-600",
    },
    {
      id: "home",
      name: language === "ru" ? "Дом и сад" : "Home & Garden",
      icon: "TreePine",
      count: language === "ru" ? "98,567 объявлений" : "98,567 listings",
      color: "bg-orange-50 hover:bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      id: "services",
      name: language === "ru" ? "Услуги" : "Services",
      icon: "Wrench",
      count: language === "ru" ? "43,219 объявлений" : "43,219 listings",
      color: "bg-indigo-50 hover:bg-indigo-100",
      iconColor: "text-indigo-600",
    },
    {
      id: "jobs",
      name: language === "ru" ? "Работа" : "Jobs",
      icon: "Briefcase",
      count: language === "ru" ? "78,924 объявлений" : "78,924 listings",
      color: "bg-teal-50 hover:bg-teal-100",
      iconColor: "text-teal-600",
    },
    {
      id: "pets",
      name: language === "ru" ? "Животные" : "Pets",
      icon: "Heart",
      count: language === "ru" ? "21,456 объявлений" : "21,456 listings",
      color: "bg-red-50 hover:bg-red-100",
      iconColor: "text-red-600",
    },
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {t.categories}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {language === "ru"
              ? "Выберите категорию для поиска нужных товаров и услуг"
              : "Choose a category to find the items and services you need"}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card
              key={category.id}
              className={`cursor-pointer transition-all duration-200 hover:shadow-md ${category.color} border-0`}
              onClick={() => onCategoryClick(category.id)}
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${category.color.replace("50", "100").replace("hover:bg-", "bg-")}`}
                >
                  <Icon
                    name={category.icon as any}
                    size={32}
                    className={category.iconColor}
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600">{category.count}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
