import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Icon from "@/components/ui/icon";
import { COUNTRIES, TRANSLATIONS } from "@/types/global";

interface HeaderProps {
  currentCountry: string;
  currentLanguage: string;
  onCountryChange: (country: string) => void;
  onLanguageChange: (language: string) => void;
}

const Header = ({
  currentCountry,
  currentLanguage,
  onCountryChange,
  onLanguageChange,
}: HeaderProps) => {
  const t =
    TRANSLATIONS[currentLanguage as keyof typeof TRANSLATIONS] ||
    TRANSLATIONS.en;
  const country =
    COUNTRIES.find((c) => c.code === currentCountry) || COUNTRIES[0];

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-blue-500 rounded-lg flex items-center justify-center">
              <Icon name="Globe" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">WorldMarket</h1>
              <p className="text-xs text-gray-500">Global Marketplace</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" className="flex items-center space-x-2">
              <Icon name="Home" size={18} />
              <span>{t.home}</span>
            </Button>
            <Button variant="ghost" className="flex items-center space-x-2">
              <Icon name="Heart" size={18} />
              <span>{t.favorites}</span>
            </Button>
            <Button className="flex items-center space-x-2 bg-primary hover:bg-primary/90">
              <Icon name="Plus" size={18} />
              <span>{t.newListing}</span>
            </Button>
          </nav>

          {/* User Controls */}
          <div className="flex items-center space-x-4">
            {/* Country/Currency Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="flex items-center space-x-2"
                >
                  <span className="text-lg">{country.flag}</span>
                  <span className="hidden sm:inline">
                    {country.currencySymbol}
                  </span>
                  <Icon name="ChevronDown" size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {COUNTRIES.map((c) => (
                  <DropdownMenuItem
                    key={c.code}
                    onClick={() => {
                      onCountryChange(c.code);
                      onLanguageChange(c.language);
                    }}
                    className="flex items-center space-x-3"
                  >
                    <span className="text-lg">{c.flag}</span>
                    <div className="flex-1">
                      <div className="font-medium">{c.name}</div>
                      <div className="text-sm text-gray-500">
                        {c.currency} {c.currencySymbol}
                      </div>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Profile */}
            <Button variant="outline" size="icon">
              <Icon name="User" size={18} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
