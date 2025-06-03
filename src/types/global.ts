export interface Country {
  code: string;
  name: string;
  flag: string;
  currency: string;
  currencySymbol: string;
  language: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
  count: number;
}

export interface Listing {
  id: string;
  title: string;
  price: number;
  currency: string;
  location: string;
  image: string;
  category: string;
  createdAt: string;
  views: number;
  isFavorite: boolean;
}

export interface Location {
  country: string;
  city: string;
  address?: string;
}

export const COUNTRIES: Country[] = [
  {
    code: "RU",
    name: "Россия",
    flag: "🇷🇺",
    currency: "RUB",
    currencySymbol: "₽",
    language: "ru",
  },
  {
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    currency: "USD",
    currencySymbol: "$",
    language: "en",
  },
  {
    code: "DE",
    name: "Deutschland",
    flag: "🇩🇪",
    currency: "EUR",
    currencySymbol: "€",
    language: "de",
  },
  {
    code: "FR",
    name: "France",
    flag: "🇫🇷",
    currency: "EUR",
    currencySymbol: "€",
    language: "fr",
  },
  {
    code: "CN",
    name: "中国",
    flag: "🇨🇳",
    currency: "CNY",
    currencySymbol: "¥",
    language: "zh",
  },
  {
    code: "JP",
    name: "日本",
    flag: "🇯🇵",
    currency: "JPY",
    currencySymbol: "¥",
    language: "ja",
  },
  {
    code: "GB",
    name: "United Kingdom",
    flag: "🇬🇧",
    currency: "GBP",
    currencySymbol: "£",
    language: "en",
  },
  {
    code: "IN",
    name: "India",
    flag: "🇮🇳",
    currency: "INR",
    currencySymbol: "₹",
    language: "hi",
  },
];

export const TRANSLATIONS = {
  ru: {
    search: "Поиск объявлений",
    categories: "Категории",
    location: "Местоположение",
    currency: "Валюта",
    language: "Язык",
    allCategories: "Все категории",
    newListing: "Подать объявление",
    favorites: "Избранное",
    profile: "Профиль",
    home: "Главная",
    findAnything: "Найдите всё что нужно",
    description:
      "Глобальная торговая площадка для покупки и продажи товаров по всему миру",
  },
  en: {
    search: "Search listings",
    categories: "Categories",
    location: "Location",
    currency: "Currency",
    language: "Language",
    allCategories: "All categories",
    newListing: "Post listing",
    favorites: "Favorites",
    profile: "Profile",
    home: "Home",
    findAnything: "Find anything you need",
    description: "Global marketplace for buying and selling items worldwide",
  },
  de: {
    search: "Anzeigen suchen",
    categories: "Kategorien",
    location: "Standort",
    currency: "Währung",
    language: "Sprache",
    allCategories: "Alle Kategorien",
    newListing: "Anzeige aufgeben",
    favorites: "Favoriten",
    profile: "Profil",
    home: "Startseite",
    findAnything: "Finden Sie alles was Sie brauchen",
    description: "Globaler Marktplatz zum Kaufen und Verkaufen weltweit",
  },
};
