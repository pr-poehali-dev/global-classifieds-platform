import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

interface CreateListingModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: string;
  currency: string;
  onCreateListing: (listing: any) => void;
}

const CreateListingModal = ({
  isOpen,
  onClose,
  language,
  currency,
  onCreateListing,
}: CreateListingModalProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const t = {
    ru: {
      createListing: "Создать объявление",
      title: "Название",
      description: "Описание",
      price: "Цена",
      category: "Категория",
      location: "Местоположение",
      imageUrl: "Ссылка на изображение",
      publish: "Опубликовать",
      electronics: "Электроника",
      vehicles: "Транспорт",
      realEstate: "Недвижимость",
      fashion: "Одежда и обувь",
      home: "Дом и сад",
      services: "Услуги",
      jobs: "Работа",
      pets: "Животные",
    },
    en: {
      createListing: "Create Listing",
      title: "Title",
      description: "Description",
      price: "Price",
      category: "Category",
      location: "Location",
      imageUrl: "Image URL",
      publish: "Publish",
      electronics: "Electronics",
      vehicles: "Vehicles",
      realEstate: "Real Estate",
      fashion: "Fashion",
      home: "Home & Garden",
      services: "Services",
      jobs: "Jobs",
      pets: "Pets",
    },
  };

  const text = t[language as keyof typeof t] || t.en;

  const categories = [
    { id: "electronics", name: text.electronics },
    { id: "vehicles", name: text.vehicles },
    { id: "real-estate", name: text.realEstate },
    { id: "fashion", name: text.fashion },
    { id: "home", name: text.home },
    { id: "services", name: text.services },
    { id: "jobs", name: text.jobs },
    { id: "pets", name: text.pets },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newListing = {
      id: Date.now().toString(),
      title,
      description,
      price: parseFloat(price),
      currency,
      category,
      location,
      image:
        imageUrl ||
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400",
      createdAt: new Date().toISOString(),
      views: 0,
      isFavorite: false,
    };
    onCreateListing(newListing);
    setTitle("");
    setDescription("");
    setPrice("");
    setCategory("");
    setLocation("");
    setImageUrl("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{text.createListing}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">{text.title}</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="description">{text.description}</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              required
            />
          </div>

          <div>
            <Label htmlFor="price">
              {text.price} ({currency})
            </Label>
            <Input
              id="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div>
            <Label>{text.category}</Label>
            <Select value={category} onValueChange={setCategory} required>
              <SelectTrigger>
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
          </div>

          <div>
            <Label htmlFor="location">{text.location}</Label>
            <Input
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="imageUrl">{text.imageUrl}</Label>
            <Input
              id="imageUrl"
              type="url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <Button type="submit" className="w-full">
            <Icon name="Plus" size={18} className="mr-2" />
            {text.publish}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateListingModal;
