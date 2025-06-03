import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Category from "./pages/Category";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { Listing } from "@/types/global";

const queryClient = new QueryClient();

const App = () => {
  const [currentCountry, setCurrentCountry] = useState("RU");
  const [currentLanguage, setCurrentLanguage] = useState("ru");
  const [user, setUser] = useState(null);
  const [listings, setListings] = useState<Listing[]>([
    {
      id: "1",
      title: "iPhone 15 Pro Max 256GB Титановый",
      price: 89900,
      currency: "RUB",
      location: "Москва, Центр",
      image:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400",
      category: "Электроника",
      createdAt: "2024-01-15",
      views: 234,
      isFavorite: false,
    },
    {
      id: "2",
      title: "BMW X5 2022 года",
      price: 4500000,
      currency: "RUB",
      location: "Санкт-Петербург",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400",
      category: "Транспорт",
      createdAt: "2024-01-14",
      views: 567,
      isFavorite: true,
    },
  ]);

  const handleLogin = (email: string, password: string) => {
    // Простая имитация входа
    setUser({ name: email.split("@")[0], email });
    console.log("Login:", email);
  };

  const handleRegister = (name: string, email: string, password: string) => {
    // Простая имитация регистрации
    setUser({ name, email });
    console.log("Register:", name, email);
  };

  const handleCreateListing = (newListing: any) => {
    setListings((prev) => [newListing, ...prev]);
  };

  const handleFavoriteClick = (id: string) => {
    setListings((prev) =>
      prev.map((listing) =>
        listing.id === id
          ? { ...listing, isFavorite: !listing.isFavorite }
          : listing,
      ),
    );
  };

  const sharedProps = {
    currentCountry,
    currentLanguage,
    user,
    listings,
    onCountryChange: setCurrentCountry,
    onLanguageChange: setCurrentLanguage,
    onLogin: handleLogin,
    onRegister: handleRegister,
    onCreateListing: handleCreateListing,
    onFavoriteClick: handleFavoriteClick,
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index {...sharedProps} />} />
            <Route
              path="/category/:categoryId"
              element={
                <Category
                  {...sharedProps}
                  currency={listings[0]?.currency || "₽"}
                  onShowAuth={() => {}}
                  onShowCreateListing={() => {}}
                />
              }
            />
            <Route
              path="/about"
              element={
                <About
                  currentCountry={currentCountry}
                  currentLanguage={currentLanguage}
                  user={user}
                  onCountryChange={setCurrentCountry}
                  onLanguageChange={setCurrentLanguage}
                  onShowAuth={() => {}}
                  onShowCreateListing={() => {}}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
