import { useState } from "react";
import {
  Menu, X, ChevronDown, ChevronUp, ImageIcon, Check,
  Phone, Mail, MapPin, Instagram, Facebook, Linkedin,
  Package, Users, Leaf, ShoppingBag,
} from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import imgBeveragePack from "@/imports/beverage-pack.jpg";
import imgFullMealCateringPkg from "@/imports/ChatGPT_Image_Jul_18__2026__01_35_11_PM.png";
// Catering add-on tray photos
import imgChipsSalsaTray from "@/imports/ChatGPT_Image_Jul_18__2026__01_32_48_PM__1_.png";
import imgChipsGuacTray from "@/imports/ChatGPT_Image_Jul_18__2026__01_32_49_PM__2_.png";
import imgChipsQuesoTray from "@/imports/ChatGPT_Image_Jul_18__2026__01_32_50_PM__3_.png";
import imgFajitaVegTray from "@/imports/ChatGPT_Image_Jul_18__2026__01_32_50_PM__4_.png";
import imgChurroBitesTray from "@/imports/ChatGPT_Image_Jul_18__2026__01_32_50_PM__5_.png";
import imgBeveragePackNew from "@/imports/ChatGPT_Image_Jul_18__2026__01_32_51_PM__6_.png";
import imgBlackBeansSide from "@/imports/black-beans-side.jpg";
import imgBlackBeansTray from "@/imports/black-beans-tray.jpg";
import imgBottledWater from "@/imports/bottled-water.jpg";
import imgCannedSoda from "@/imports/canned-soda.jpg";
// Batch 1 â€” bowls, spreads, catering
import imgSpread from "@/imports/ChatGPT_Image_Jul_18__2026__01_09_17_PM__1_.png";
import imgRiceBowls from "@/imports/ChatGPT_Image_Jul_18__2026__01_09_17_PM__2_.png";
import imgRiceBowlsCategory from "@/imports/ChatGPT_Image_Jul_18__2026__01_09_17_PM__9_-1.png";
import imgBurritoHero from "@/imports/ChatGPT_Image_Jul_18__2026__01_09_17_PM__3_.png";
import imgTraySetup from "@/imports/ChatGPT_Image_Jul_18__2026__01_09_17_PM__5_.png";
import imgChickenBowl from "@/imports/ChatGPT_Image_Jul_18__2026__01_09_17_PM__6_.png";
import imgSteakBowl from "@/imports/ChatGPT_Image_Jul_18__2026__01_09_17_PM__7_.png";
import imgVeggieBowl from "@/imports/ChatGPT_Image_Jul_18__2026__01_09_17_PM__8_.png";
import imgComboBowl from "@/imports/ChatGPT_Image_Jul_18__2026__01_09_17_PM__9_.png";
import imgComboBowl2 from "@/imports/ChatGPT_Image_Jul_18__2026__01_09_17_PM__10_.png";
// Batch 2 â€” individual burritos & salads
import imgChickenBurrito from "@/imports/ChatGPT_Image_Jul_18__2026__01_18_47_PM__1_.png";
import imgSteakBurrito from "@/imports/ChatGPT_Image_Jul_18__2026__01_18_47_PM__2_.png";
import imgVeggieBurrito from "@/imports/ChatGPT_Image_Jul_18__2026__01_18_48_PM__3_.png";
import imgComboBurrito from "@/imports/ChatGPT_Image_Jul_18__2026__01_18_48_PM__4_.png";
import imgBurritoCategory from "@/imports/ChatGPT_Image_Jul_18__2026__01_18_48_PM__4_-1.png";
import imgDoubleProteinBurrito from "@/imports/ChatGPT_Image_Jul_18__2026__01_18_49_PM__5_.png";
import imgChickenSalad from "@/imports/ChatGPT_Image_Jul_18__2026__01_18_49_PM__6_.png";
import imgSteakSalad from "@/imports/ChatGPT_Image_Jul_18__2026__01_18_49_PM__7_.png";
import imgVeggieSalad from "@/imports/ChatGPT_Image_Jul_18__2026__01_18_49_PM__8_.png";
import imgComboSalad from "@/imports/ChatGPT_Image_Jul_18__2026__01_18_49_PM__9_.png";
import imgDoubleProteinSalad from "@/imports/ChatGPT_Image_Jul_18__2026__01_18_50_PM__10_.png";

// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// DATA
// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const NAV_LINKS = [
  { label: "Menu", href: "#menu" },
  { label: "Boxed Meals", href: "#menu" },
  { label: "Tray Catering", href: "#catering" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#quote" },
];

const TRUST_POINTS = [
  { Icon: Package, title: "Individually Packaged Meals", desc: "Easy to distribute during meetings and office lunches." },
  { Icon: Users, title: "Tray Catering", desc: "Buffet-style packages for groups of 10 to 100+." },
  { Icon: Leaf, title: "Freshly Prepared", desc: "Made for each order with customizable ingredients." },
  { Icon: ShoppingBag, title: "Built for Teams", desc: "Simple ordering for meetings, trainings, and events." },
];

const ORDER_CATEGORIES = [
  { title: "Rice Bowls", desc: "White rice, beans, your choice of protein, fresh toppings, and sauces.", price: "Starting at $15.50", image: "category-rice-bowls.jpg" },

  { title: "Burritos", desc: "Large flour tortillas filled with rice, beans, protein, toppings, and sauce.", price: "Starting at $15.50", image: "category-burritos.jpg" },
  { title: "Salad Bowls", desc: "Crisp greens with beans, protein, fresh toppings, and sauces.", price: "Starting at $15.50", image: "category-salads.jpg" },
  { title: "Tray Catering", desc: "Build-your-own Mexican catering packages with proteins, rice, beans, toppings, tortillas, chips, and sauces.", price: "Starting at $15.50", image: "category-tray-catering.jpg" },
];

interface MenuItem { title: string; price: string; desc: string; image: string; label?: string; }
interface MenuData { [key: string]: MenuItem[]; }

const MENU_ITEMS: MenuData = {
  bowls: [
    { title: "Chicken Rice Bowl", price: "$17.50", desc: "Grilled chicken served with white rice, black beans, fajita vegetables, pico de gallo, corn salsa, shredded cheese, lettuce, sour cream, and salsa.", image: "chicken-rice-bowl.jpg" },
    { title: "Steak Rice Bowl", price: "$17.50", desc: "Seasoned grilled steak served with white rice, black beans, fajita vegetables, pico de gallo, corn salsa, shredded cheese, lettuce, sour cream, and salsa.", image: "steak-rice-bowl.jpg" },
    { title: "Veggie Rice Bowl", price: "$15.50", desc: "Fajita vegetables served with white rice, black beans, pico de gallo, corn salsa, shredded cheese, lettuce, sour cream, guacamole, and salsa.", image: "veggie-rice-bowl.jpg", label: "VEGETARIAN" },
    { title: "Double Protein Bowl", price: "$19.50", desc: "Choose any two proteins with white rice, beans, fajita vegetables, fresh toppings, and salsa.", image: "double-protein-rice-bowl.jpg", label: "HIGH PROTEIN" },
    { title: "Chicken and Steak Combo Bowl", price: "$19.50", desc: "Grilled chicken and seasoned steak with rice, beans, fajita vegetables, pico de gallo, corn salsa, cheese, lettuce, sour cream, and salsa.", image: "chicken-steak-combo-bowl.jpg", label: "OFFICE FAVORITE" },
  ],
  burritos: [
    { title: "Chicken Burrito", price: "$17.50", desc: "Grilled chicken, white rice, black beans, fajita vegetables, pico de gallo, corn salsa, shredded cheese, lettuce, sour cream, and salsa wrapped in a warm flour tortilla.", image: "chicken-burrito.jpg" },
    { title: "Steak Burrito", price: "$17.50", desc: "Seasoned grilled steak, white rice, black beans, fajita vegetables, pico de gallo, corn salsa, shredded cheese, lettuce, sour cream, and salsa wrapped in a warm flour tortilla.", image: "steak-burrito.jpg" },
    { title: "Veggie Burrito", price: "$15.50", desc: "Fajita vegetables, white rice, black beans, pico de gallo, corn salsa, shredded cheese, lettuce, sour cream, guacamole, and salsa wrapped in a warm flour tortilla.", image: "veggie-burrito.jpg", label: "VEGETARIAN" },
    { title: "Double Protein Burrito", price: "$19.50", desc: "Choose any two proteins with white rice, beans, fajita vegetables, toppings, and salsa wrapped in a warm flour tortilla.", image: "double-protein-burrito.jpg", label: "HIGH PROTEIN" },
    { title: "Chicken and Steak Combo Burrito", price: "$19.50", desc: "Grilled chicken and seasoned steak with rice, beans, fajita vegetables, fresh toppings, and salsa wrapped in a warm flour tortilla.", image: "chicken-steak-combo-burrito.jpg", label: "POPULAR" },
  ],
  salads: [
    { title: "Chicken Salad Bowl", price: "$17.50", desc: "Grilled chicken over romaine lettuce with black beans, fajita vegetables, pico de gallo, corn salsa, shredded cheese, tortilla strips, and cilantro-lime dressing.", image: "chicken-salad-bowl.jpg" },
    { title: "Steak Salad Bowl", price: "$17.50", desc: "Seasoned grilled steak over romaine lettuce with black beans, fajita vegetables, pico de gallo, corn salsa, shredded cheese, tortilla strips, and cilantro-lime dressing.", image: "steak-salad-bowl.jpg" },
    { title: "Veggie Salad Bowl", price: "$15.50", desc: "Fajita vegetables over romaine lettuce with black beans, pico de gallo, corn salsa, shredded cheese, guacamole, tortilla strips, and cilantro-lime dressing.", image: "veggie-salad-bowl.jpg", label: "VEGETARIAN" },
    { title: "Double Protein Salad Bowl", price: "$19.50", desc: "Choose any two proteins over romaine lettuce with beans, fajita vegetables, toppings, tortilla strips, and cilantro-lime dressing.", image: "double-protein-salad-bowl.jpg", label: "HIGH PROTEIN" },
    { title: "Chicken and Steak Combo Salad Bowl", price: "$19.50", desc: "Grilled chicken and seasoned steak over romaine lettuce with black beans, fajita vegetables, pico de gallo, corn salsa, shredded cheese, tortilla strips, and cilantro-lime dressing.", image: "steak-salad-bowl.jpg", label: "OFFICE FAVORITE" },
  ],
  fullmeals: [
    { title: "Chicken Bowl Full Meal Box", price: "$20.50", desc: "Chicken rice bowl with individual chips and salsa and churro bites.", image: "chicken-bowl-full-meal-box.jpg" },
    { title: "Steak Bowl Full Meal Box", price: "$20.50", desc: "Steak rice bowl with individual chips and salsa and churro bites.", image: "steak-bowl-full-meal-box.jpg" },
    { title: "Veggie Bowl Full Meal Box", price: "$18.50", desc: "Veggie rice bowl with individual chips and salsa and churro bites.", image: "veggie-bowl-full-meal-box.jpg" },
    { title: "Double Protein Bowl Full Meal Box", price: "$22.50", desc: "Double protein rice bowl with individual chips and salsa and churro bites.", image: "double-protein-rice-bowl.jpg", label: "HIGH PROTEIN" },
    { title: "Chicken and Steak Combo Bowl Full Meal Box", price: "$22.50", desc: "Chicken and steak combo rice bowl with individual chips and salsa and churro bites.", image: "chicken-steak-combo-bowl.jpg", label: "OFFICE FAVORITE" },
    { title: "Chicken Burrito Full Meal Box", price: "$20.50", desc: "Chicken burrito with individual chips and salsa and churro bites.", image: "chicken-burrito-full-meal-box.jpg" },
    { title: "Steak Burrito Full Meal Box", price: "$20.50", desc: "Steak burrito with individual chips and salsa and churro bites.", image: "steak-burrito-full-meal-box.jpg" },
    { title: "Veggie Burrito Full Meal Box", price: "$18.50", desc: "Veggie burrito with individual chips and salsa and churro bites.", image: "veggie-burrito-full-meal-box.jpg" },
    { title: "Double Protein Burrito Full Meal Box", price: "$22.50", desc: "Double protein burrito with individual chips and salsa and churro bites.", image: "double-protein-burrito.jpg", label: "HIGH PROTEIN" },
    { title: "Chicken and Steak Combo Burrito Full Meal Box", price: "$22.50", desc: "Chicken and steak combo burrito with individual chips and salsa and churro bites.", image: "chicken-steak-combo-burrito.jpg", label: "POPULAR" },
    { title: "Chicken Salad Bowl Full Meal Box", price: "$20.50", desc: "Chicken salad bowl with individual chips and salsa and churro bites.", image: "chicken-salad-bowl.jpg" },
    { title: "Steak Salad Bowl Full Meal Box", price: "$20.50", desc: "Steak salad bowl with individual chips and salsa and churro bites.", image: "steak-salad-bowl.jpg" },
    { title: "Veggie Salad Bowl Full Meal Box", price: "$18.50", desc: "Veggie salad bowl with individual chips and salsa and churro bites.", image: "veggie-salad-bowl.jpg", label: "VEGETARIAN" },
    { title: "Double Protein Salad Bowl Full Meal Box", price: "$22.50", desc: "Double protein salad bowl with individual chips and salsa and churro bites.", image: "double-protein-salad-bowl.jpg", label: "HIGH PROTEIN" },
    { title: "Chicken and Steak Combo Salad Bowl Full Meal Box", price: "$22.50", desc: "Chicken and steak combo salad bowl with individual chips and salsa and churro bites.", image: "chicken-beef-salad-bowl.jpg", label: "OFFICE FAVORITE" },
  ],
  sides: [
    { title: "Chips and Salsa", price: "$3.00", desc: "Crispy tortilla chips served with fresh salsa.", image: "chips-and-salsa.jpg" },
    { title: "Chips and Guacamole", price: "$5.50", desc: "Crispy tortilla chips served with fresh guacamole.", image: "chips-and-guacamole.jpg" },
    { title: "Chips and Queso", price: "$5.00", desc: "Crispy tortilla chips served with warm queso.", image: "chips-and-queso.jpg" },
    { title: "Black Beans", price: "$3.00", desc: "Seasoned black beans served as an individual side.", image: "black-beans-side.jpg" },
  ],
  desserts: [
    { title: "Churro Bites", price: "$3.50", desc: "Warm cinnamon-sugar churro bites served as an individual dessert.", image: "churro-bites.jpg" },
    { title: "Churro Bites Catering Tray", price: "$28.00", desc: "A shareable tray of cinnamon-sugar churro bites for groups.", image: "churro-bites-tray.jpg" },
    { title: "Chocolate Brownie", price: "$4.00", desc: "A rich chocolate brownie individually packaged for meetings and team lunches.", image: "chocolate-brownie.jpg" },
  ],
  drinks: [
    { title: "Bottled Water", price: "$2.00", desc: "Individual bottled water.", image: "bottled-water.jpg" },
    { title: "Mexican Soda", price: "$3.00", desc: "Assorted bottled Mexican sodas.", image: "mexican-soda.jpg" },
    { title: "Lemonade", price: "$3.25", desc: "Refreshing individual lemonade.", image: "lemonade.jpg" },
    { title: "Sparkling Water", price: "$2.50", desc: "Individual sparkling water.", image: "bottled-water.jpg" },
    { title: "Iced Tea", price: "$3.00", desc: "Fresh bottled or canned iced tea.", image: "iced-tea.jpg" },
    { title: "Beverage Pack", price: "$2.75/person", desc: "An assortment of bottled water and canned or bottled beverages for groups.", image: "beverage-pack.jpg" },
  ],
};

const MENU_TABS = [
  { id: "bowls", label: "Bowls" },
  { id: "burritos", label: "Burritos" },
  { id: "salads", label: "Salads" },
  { id: "fullmeals", label: "Full Meal Boxes" },
  { id: "sides", label: "Sides & Extras" },
  { id: "desserts", label: "Desserts" },
  { id: "drinks", label: "Drinks" },
];

const PREMIUM_ADDONS = [
  { title: "Extra Grilled Chicken", price: "+$3.00" },
  { title: "Extra Seasoned Steak", price: "+$4.00" },
  { title: "Extra Fajita Vegetables", price: "+$2.00" },
  { title: "Guacamole", price: "+$2.50" },
  { title: "Queso", price: "+$2.50" },
  { title: "Extra Pico de Gallo", price: "+$0.75" },
  { title: "Extra Corn Salsa", price: "+$0.75" },
  { title: "Extra Sour Cream", price: "+$0.75" },
];

const CATERING_PACKAGES = [
  {
    id: "bowl-bar",
    title: "Build-Your-Own Mexican Bowl Bar",
    desc: "A customizable Mexican bowl bar with rice, beans, three filling options, fajita vegetables, fresh toppings, and sauces. Ideal for office lunches, trainings, and team events.",
    price: "$17.50 per person",
    label: "MOST POPULAR",
    image: "build-your-own-bowl-bar-trays.jpg",
    includes: ["White rice", "Black beans", "Grilled chicken", "Seasoned steak", "Fajita vegetables", "Pico de gallo", "Corn salsa", "Shredded cheese", "Lettuce", "Sour cream", "Mild salsa", "Hot salsa", "Serving utensils"],
    pricing: [{ size: "Serves 10", price: "$195" }, { size: "Serves 20", price: "$390" }, { size: "Serves 30", price: "$585" }, { size: "Serves 50", price: "$975" }],
  },
  {
    id: "burrito-bar",
    title: "Build-Your-Own Burrito Bar",
    desc: "A complete burrito bar with warm flour tortillas, rice, beans, three filling options, toppings, and salsas. Guests can build their own burrito or burrito bowl.",
    price: "$17.50 per person",
    label: undefined,
    image: "build-your-own-burrito-bar-trays.jpg",
    includes: ["Large flour tortillas", "White rice", "Black beans", "Grilled chicken", "Seasoned steak", "Fajita vegetables", "Pico de gallo", "Corn salsa", "Shredded cheese", "Lettuce", "Sour cream", "Mild salsa", "Hot salsa", "Serving utensils"],
    pricing: [{ size: "Serves 10", price: "$185" }, { size: "Serves 20", price: "$370" }, { size: "Serves 30", price: "$555" }, { size: "Serves 50", price: "$925" }],
  },
  {
    id: "fajita-fiesta",
    title: "Fajita Fiesta Catering Package",
    desc: "A warm fajita-style catering spread with grilled chicken, seasoned steak, sautÃ©ed peppers and onions, rice, beans, tortillas, toppings, and sauces.",
    price: "$17.50 per person",
    label: undefined,
    image: "fajita-fiesta-catering-trays.jpg",
    includes: ["Grilled chicken", "Seasoned steak", "Fajita vegetables", "White rice", "Black beans", "Warm flour tortillas", "Pico de gallo", "Corn salsa", "Shredded cheese", "Lettuce", "Sour cream", "Mild salsa", "Hot salsa", "Serving utensils"],
    pricing: [{ size: "Serves 10", price: "$205" }, { size: "Serves 20", price: "$410" }, { size: "Serves 30", price: "$615" }, { size: "Serves 50", price: "$1,025" }],
  },
  {
    id: "full-meal",
    title: "Full Meal Catering Package",
    desc: "A complete Mexican catering meal with your choice of bowl bar or burrito bar, plus chips and salsa and churro bites.",
    price: "$17.50 per person",
    label: "BEST VALUE",
    image: "full-meal-catering-package.jpg",
    includes: ["Choice of bowl bar or burrito bar", "Grilled chicken", "Seasoned steak", "Fajita vegetables", "Rice", "Beans", "Toppings", "Salsas", "Chips and salsa", "Churro bites", "Serving utensils"],
    pricing: [{ size: "Serves 10", price: "$225" }, { size: "Serves 20", price: "$450" }, { size: "Serves 30", price: "$675" }, { size: "Serves 50", price: "$1,125" }],
  },
];

const CATERING_ADDONS = [
  { title: "Chips and Salsa Tray", size: "Serves 10", price: "$25", image: "chips-salsa-tray.jpg" },
  { title: "Chips and Guacamole Tray", size: "Serves 10", price: "$45", image: "chips-guac-tray.jpg" },
  { title: "Chips and Queso Tray", size: "Serves 10", price: "$40", image: "chips-queso-tray.jpg" },
  { title: "Black Beans Tray", size: "Serves 10", price: "$30", image: "black-beans-tray.jpg" },
  { title: "Fajita Vegetables Tray", size: "Serves 10", price: "$45", image: "fajita-veg-tray.jpg" },
  { title: "Churro Bites Tray", size: "Serves 10", price: "$28", image: "churro-bites-tray.jpg" },
  { title: "Beverage Pack", size: "Per person", price: "$2.75", image: "beverage-pack-new.jpg" },
];

const HOW_IT_WORKS = [
  { num: "01", title: "Choose your meal format", desc: "Select individually packaged bowls, burritos, salads, full meal boxes, or a tray catering package." },
  { num: "02", title: "Customize proteins and toppings", desc: "Choose chicken, steak, fajita vegetables, rice, beans, toppings, salsa, sides, desserts, and drinks." },
  { num: "03", title: "We prepare and deliver", desc: "Your order is prepared fresh, organized for your team, and delivered to your workplace." },
];

const OFFICE_FEATURES = [
  "Individually packaged meals",
  "Buffet-style catering trays",
  "Chicken, steak, and vegetarian options",
  "Customizable toppings and sauces",
  "Full meal boxes",
  "Catering packages for 10 to 100+",
  "Easy setup for meetings and trainings",
];

const FAQS = [
  { q: "Do you offer individually packaged meals?", a: "Yes. Rice bowls, burritos, salads, and full meal boxes can be individually packaged for meetings and office lunches." },
  { q: "How many people do your catering packages serve?", a: "Our standard catering packages are available for groups of 10, 20, 30, and 50. Larger orders can be requested through the quote form." },
  { q: "Do you offer vegetarian options?", a: "Yes. Fajita vegetable bowls, burritos, salads, and catering options are available." },
  { q: "Can guests customize their meals?", a: "Yes. Our bowl bars, burrito bars, and fajita packages include customizable bases, beans, toppings, and sauces." },
  { q: "Do catering packages include utensils?", a: "Yes. Catering packages include the appropriate serving utensils. Individual utensils can be added based on the order format." },
  { q: "Can I order drinks and desserts?", a: "Yes. Drinks, churro bites, brownies, chips, salsa, guacamole, queso, and other sides can be added to an order." },
];

const MEAL_TYPES = [
  "Individual Boxes",
  "Tray Catering",
  "Not Sure",
];

// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// REAL IMAGE MAP  (add new entries here as photos arrive)
// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const REAL_IMAGES: Record<string, string> = {
  // Hero & sections
  "hero-mexican-catering-spread.jpg":      imgSpread,
  "office-mexican-catering-setup.jpg":     imgSpread,
  "about-calle-fresca-kitchen.jpg":        imgTraySetup,
  "fajita-fiesta-catering-trays.jpg":      imgTraySetup,
  // Category cards
  "category-rice-bowls.jpg":              imgRiceBowlsCategory,
  "category-burritos.jpg":                imgBurritoCategory,
  "category-salads.jpg":                  imgChickenSalad,
  "category-tray-catering.jpg":           imgSpread,
  // Catering packages
  "build-your-own-bowl-bar-trays.jpg":    imgTraySetup,
  "build-your-own-burrito-bar-trays.jpg": imgSpread,
  "full-meal-catering-package.jpg":       imgFullMealCateringPkg,
  // Rice bowls menu
  "chicken-rice-bowl.jpg":               imgChickenBowl,
  "steak-rice-bowl.jpg":                 imgSteakBowl,
  "veggie-rice-bowl.jpg":                imgVeggieBowl,
  "chicken-steak-combo-bowl.jpg":        imgComboBowl2,
  "double-protein-rice-bowl.jpg":        imgComboBowl,
  // Burritos menu
  "chicken-burrito.jpg":                 imgChickenBurrito,
  "steak-burrito.jpg":                   imgSteakBurrito,
  "veggie-burrito.jpg":                  imgVeggieBurrito,
  "chicken-steak-combo-burrito.jpg":     imgComboBurrito,
  "double-protein-burrito.jpg":          imgDoubleProteinBurrito,
  // Salads menu
  "chicken-salad-bowl.jpg":              imgChickenSalad,
  "steak-salad-bowl.jpg":               imgSteakSalad,
  "veggie-salad-bowl.jpg":              imgVeggieSalad,
  "double-protein-salad-bowl.jpg":      imgDoubleProteinSalad,
  "chicken-beef-salad-bowl.jpg":        imgComboSalad,
  // Full meal boxes â€” reuse matching item photos
  "chicken-bowl-full-meal-box.jpg":              imgChickenBowl,
  "steak-bowl-full-meal-box.jpg":                imgSteakBowl,
  "veggie-bowl-full-meal-box.jpg":               imgVeggieBowl,
  "double-protein-bowl-full-meal-box.jpg":       imgComboBowl,
  "chicken-steak-combo-bowl-full-meal-box.jpg":  imgComboBowl2,
  "chicken-burrito-full-meal-box.jpg":           imgChickenBurrito,
  "steak-burrito-full-meal-box.jpg":             imgSteakBurrito,
  "veggie-burrito-full-meal-box.jpg":            imgVeggieBurrito,
  "double-protein-burrito-full-meal-box.jpg":    imgDoubleProteinBurrito,
  "chicken-steak-combo-burrito-full-meal-box.jpg": imgComboBurrito,
  "chicken-salad-bowl-full-meal-box.jpg":        imgChickenSalad,
  "steak-salad-bowl-full-meal-box.jpg":          imgSteakSalad,
  "veggie-salad-bowl-full-meal-box.jpg":         imgVeggieSalad,
  "double-protein-salad-bowl-full-meal-box.jpg": imgDoubleProteinSalad,
  "chicken-steak-combo-salad-bowl-full-meal-box.jpg": imgComboSalad,
  // Sides menu
  "black-beans-side.jpg":               imgBlackBeansSide,
  // Catering add-on trays
  "chips-salsa-tray.jpg":              imgChipsSalsaTray,
  "chips-guac-tray.jpg":               imgChipsGuacTray,
  "chips-queso-tray.jpg":              imgChipsQuesoTray,
  "fajita-veg-tray.jpg":               imgFajitaVegTray,
  "churro-bites-tray.jpg":             imgChurroBitesTray,
  "beverage-pack-new.jpg":             imgBeveragePackNew,
  "black-beans-tray.jpg":              imgBlackBeansTray,
  // Drinks
  "bottled-water.jpg":                 imgBottledWater,
  "mexican-soda.jpg":                  imgCannedSoda,
  "beverage-pack.jpg":                 imgBeveragePack,
};

// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// MICRO-COMPONENTS
// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function ImgPlaceholder({ filename, ratio = "4/3", className = "", alt }: { filename: string; ratio?: string; className?: string; alt?: string }) {
  const src = REAL_IMAGES[filename];
  if (src) {
    return (
      <div className={`w-full overflow-hidden ${className}`} style={{ aspectRatio: ratio }}>
        <ImageWithFallback
          src={src}
          alt={alt ?? filename.replace(/-/g, " ").replace(/\.jpg$/, "")}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }
  return (
    <div
      className={`flex flex-col items-center justify-center bg-[#EDE1CC] overflow-hidden w-full ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <ImageIcon className="w-8 h-8 text-[#183D2E]/25 mb-2 flex-shrink-0" />
      <span className="text-[10px] font-mono text-[#183D2E]/40 text-center px-3 leading-tight break-all">{filename}</span>
    </div>
  );
}

const BADGE_COLORS: Record<string, string> = {
  "VEGETARIAN": "bg-[#7CA342] text-white",
  "HIGH PROTEIN": "bg-[#183D2E] text-white",
  "OFFICE FAVORITE": "bg-[#F4B942] text-[#222222]",
  "POPULAR": "bg-[#E4572E] text-white",
  "MOST POPULAR": "bg-[#E4572E] text-white",
  "BEST VALUE": "bg-[#F4B942] text-[#222222]",
};

function ItemBadge({ label }: { label: string }) {
  return (
    <span className={`inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full ${BADGE_COLORS[label] || "bg-[#EDE1CC] text-[#183D2E]"}`}>
      {label}
    </span>
  );
}

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <div className="bg-white rounded-[14px] shadow-[0_1px_4px_rgba(0,0,0,0.07)] overflow-hidden flex gap-4 p-4 hover:shadow-[0_4px_12px_rgba(0,0,0,0.11)] transition-shadow">
      <div className="w-20 h-20 flex-shrink-0 rounded-[8px] overflow-hidden bg-[#EDE1CC]">
        <ImgPlaceholder filename={item.image} ratio="1/1" className="rounded-[8px]" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h4 className="font-['Barlow_Condensed'] font-bold text-[#222222] text-[17px] leading-tight">{item.title}</h4>
          <span className="text-[#E4572E] font-bold text-[15px] whitespace-nowrap flex-shrink-0">{item.price}</span>
        </div>
        {item.label && <div className="mb-1.5"><ItemBadge label={item.label} /></div>}
        <p className="text-[13px] text-[#666] leading-snug">{item.desc}</p>
      </div>
    </div>
  );
}

function Eyebrow({ text, light = false }: { text: string; light?: boolean }) {
  return (
    <p className={`text-xs font-bold tracking-[0.2em] uppercase mb-3 ${light ? "text-[#F4B942]" : "text-[#E4572E]"}`}>
      {text}
    </p>
  );
}

// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// MAIN APP
// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const QUOTE_EMAIL = "catering@callefresca.com";
const QUOTE_FORM_ENDPOINT = `https://formsubmit.co/ajax/${QUOTE_EMAIL}`;

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("bowls");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "",
    eventDate: "", deliveryTime: "", deliveryAddress: "",
    guests: "", budget: "", mealType: "", dietary: "", notes: "",
  });

  function setField(key: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm(prev => ({ ...prev, [key]: e.target.value }));
  }

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError("");
    setFormSubmitting(true);

    try {
      const payload = {
        _subject: "New Calle Fresca catering quote request",
        _template: "table",
        _captcha: "false",
        brand: "Calle Fresca Mexican Kitchen",
        ...Object.fromEntries(new FormData(e.currentTarget).entries()),
      };

      const response = await fetch(QUOTE_FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("FormSubmit rejected the quote request.");
      }

      setFormSubmitted(true);
    } catch {
      setFormError(`We could not send your request. Please email ${QUOTE_EMAIL} directly.`);
    } finally {
      setFormSubmitting(false);
    }
  }

  const inputCls = "w-full border border-[#EDE1CC] rounded-[8px] px-3 py-2.5 text-sm focus:outline-none focus:border-[#183D2E] focus:ring-1 focus:ring-[#183D2E] bg-[#FFF8EC]";
  const labelCls = "block text-[11px] font-bold text-[#183D2E] uppercase tracking-wider mb-1";

  return (
    <div className="font-['Manrope'] text-[#222222] bg-[#FFF8EC] min-h-screen pb-20 lg:pb-0">

      {/* â”€â”€ Announcement Bar â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <div className="bg-[#E4572E] text-white text-center text-sm font-semibold py-2.5 px-4 tracking-wide">
        Mexican catering for teams of 10 to 100+
      </div>

      {/* â”€â”€ Navbar â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <nav className="sticky top-0 z-50 bg-[#183D2E] shadow-md" role="navigation" aria-label="Main navigation">
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-16">
          <a href="/" className="flex flex-col leading-none gap-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B942] rounded">
            <span className="font-['Barlow_Condensed'] font-extrabold text-white text-xl tracking-wide uppercase leading-none">Calle Fresca</span>
            <span className="font-['Barlow_Condensed'] font-semibold text-[#F4B942] text-[10px] tracking-[0.2em] uppercase leading-none mt-0.5">Mexican Kitchen</span>
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map(l => (
              <a key={l.label} href={l.href} className="text-white/75 hover:text-[#F4B942] text-sm font-medium transition-colors focus:outline-none focus-visible:text-[#F4B942]">
                {l.label}
              </a>
            ))}
            <a href="#quote" className="bg-[#E4572E] hover:bg-[#c93e20] text-white font-bold text-sm px-5 py-2.5 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
              Order Catering
            </a>
          </div>

          <button
            className="lg:hidden text-white p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B942] rounded"
            onClick={() => setMobileMenuOpen(v => !v)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#183D2E] border-t border-white/10 px-6 py-4 flex flex-col gap-3">
            {NAV_LINKS.map(l => (
              <a key={l.label} href={l.href} className="text-white text-lg font-medium py-1.5 border-b border-white/5" onClick={() => setMobileMenuOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#quote" className="bg-[#E4572E] text-white font-bold text-center py-3 rounded-full mt-2">Order Catering</a>
            <a href="#quote" className="border border-white/30 text-white font-bold text-center py-3 rounded-full" onClick={() => setMobileMenuOpen(false)}>Request a Quote</a>
          </div>
        )}
      </nav>

      {/* â”€â”€ Hero â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="bg-[#FFF8EC] py-16 md:py-24" aria-label="Hero">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow text="Bold Mexican Flavors. Made Fresh for Teams." />
            <h1 className="font-['Barlow_Condensed'] font-extrabold text-[#183D2E] text-[clamp(2.5rem,5vw,3.75rem)] leading-[1.05] uppercase mb-6">
              Fresh Mexican catering for office lunches, meetings, and team events.
            </h1>
            <p className="text-[#555] text-lg leading-relaxed mb-8">
              Customizable rice bowls, burritos, salads, boxed meals, and catering trays prepared fresh for workplace lunches and group events.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <a href="#quote" className="bg-[#E4572E] hover:bg-[#c93e20] text-white font-bold px-8 py-3.5 rounded-full text-base transition-colors">
                Order Catering
              </a>
              <a href="#menu" className="border-2 border-[#183D2E] text-[#183D2E] hover:bg-[#183D2E] hover:text-white font-bold px-8 py-3.5 rounded-full text-base transition-colors">
                View Menu
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {["Individually packaged meals", "Tray catering for groups", "Chicken, steak, and veggie options", "Built for office lunches", "Vegetarian-friendly options"].map(p => (
                <div key={p} className="flex items-center gap-2 text-sm text-[#444]">
                  <Check className="w-4 h-4 text-[#7CA342] flex-shrink-0" aria-hidden="true" />
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[22px] overflow-hidden">
            <ImgPlaceholder filename="hero-mexican-catering-spread.jpg" ratio="16/10" className="rounded-[22px]" />
          </div>
        </div>
      </section>

      {/* â”€â”€ Trust Strip â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="bg-white border-y border-[#EDE1CC]" aria-label="Key features">
        <div className="max-w-[1200px] mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {TRUST_POINTS.map(({ Icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#FFF8EC] border border-[#EDE1CC] flex items-center justify-center">
                <Icon className="w-5 h-5 text-[#183D2E]" aria-hidden="true" />
              </div>
              <div>
                <p className="font-['Barlow_Condensed'] font-bold text-[#183D2E] text-[15px] uppercase leading-tight">{title}</p>
                <p className="text-[13px] text-[#666] mt-1 leading-snug">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* â”€â”€ Order Categories â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-20 bg-[#FFF8EC]" aria-label="Ordering categories">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <Eyebrow text="Order Your Way" />
            <h2 className="font-['Barlow_Condensed'] font-extrabold text-[#183D2E] text-[clamp(2rem,4vw,3rem)] uppercase">
              Fresh options for every type of team meal
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ORDER_CATEGORIES.map(cat => (
              <div key={cat.title} className="bg-white rounded-[14px] overflow-hidden shadow-[0_1px_4px_rgba(0,0,0,0.07)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] transition-shadow group">
                <div className="overflow-hidden">
                  <ImgPlaceholder filename={cat.image} ratio="4/3" className="group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-5">
                  <h3 className="font-['Barlow_Condensed'] font-bold text-[#183D2E] text-xl uppercase mb-1">{cat.title}</h3>
                  <p className="text-[13px] text-[#666] mb-3 leading-snug">{cat.desc}</p>
                  <p className="text-[#E4572E] font-bold text-sm mb-3">{cat.price}</p>
                  <a href="#menu" className="text-[#183D2E] text-sm font-semibold hover:text-[#E4572E] transition-colors">
                    View Menu â†’
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ Full Menu Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section id="menu" className="py-20 bg-white" aria-label="Full menu">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-4">
            <Eyebrow text="Full Menu" />
            <h2 className="font-['Barlow_Condensed'] font-extrabold text-[#183D2E] text-[clamp(2rem,4vw,3rem)] uppercase mb-4">
              Fresh. Bold. Made to order.
            </h2>
            <p className="text-[#666] max-w-xl mx-auto text-[15px]">
              Choose a bowl, burrito, salad, full meal box, or catering package. Customize it with your preferred protein, base, toppings, and salsa.
            </p>
          </div>

          {/* Customization info bar */}
          <div className="bg-[#FFF8EC] border border-[#EDE1CC] rounded-[14px] p-5 mt-8 mb-8 text-sm text-[#444] grid md:grid-cols-2 gap-x-8 gap-y-2">
            <p><span className="font-bold text-[#183D2E]">PROTEINS:</span> Grilled Chicken Â· Seasoned Steak Â· Fajita Vegetables</p>
            <p><span className="font-bold text-[#183D2E]">BASES:</span> White Rice Â· Romaine Lettuce</p>
            <p><span className="font-bold text-[#183D2E]">BEANS:</span> Black Beans</p>
            <p><span className="font-bold text-[#183D2E]">TOPPINGS:</span> Fajita Vegetables Â· Pico de Gallo Â· Corn Salsa Â· Shredded Cheese Â· Lettuce Â· Sour Cream</p>
            <p><span className="font-bold text-[#183D2E]">SAUCES:</span> Mild Salsa Â· Hot Salsa Â· Creamy JalapeÃ±o Â· Cilantro-Lime Dressing</p>
            <p><span className="font-bold text-[#183D2E]">PREMIUM ADD-ONS:</span> Guacamole Â· Queso Â· Extra Protein</p>
            <p className="md:col-span-2 text-[12px] text-[#999] italic mt-1">Double protein available for an additional charge.</p>
          </div>

          {/* Menu tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 mb-8" role="tablist" aria-label="Menu categories">
            {MENU_TABS.map(tab => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-colors flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#183D2E] ${
                  activeTab === tab.id
                    ? "bg-[#183D2E] text-white"
                    : "bg-[#FFF8EC] text-[#555] hover:bg-[#EDE1CC]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Full meal info bar */}
          {activeTab === "fullmeals" && (
            <div className="bg-[#183D2E] text-white rounded-[14px] p-5 mb-6 flex flex-wrap items-center gap-4">
              <div>
                <p className="font-bold text-[#F4B942] text-xs tracking-wider uppercase mb-1">Full Meal Includes:</p>
                <p className="text-sm text-white/80">Your choice of entrÃ©e, one individual chips and salsa, and churro bites.</p>
              </div>
              <span className="ml-auto bg-[#E4572E] text-white font-bold text-sm px-4 py-2 rounded-full whitespace-nowrap">
                Full meal upgrade: +$3.00
              </span>
            </div>
          )}

          {/* Items grid */}
          <div className="grid md:grid-cols-2 gap-4" role="tabpanel">
            {(MENU_ITEMS[activeTab] || []).map(item => (
              <MenuCard key={item.title} item={item} />
            ))}
          </div>

          {/* Premium add-ons */}
          <div className="mt-12 border-t border-[#EDE1CC] pt-8">
            <h3 className="font-['Barlow_Condensed'] font-bold text-[#183D2E] text-2xl uppercase mb-5">Premium Add-Ons</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {PREMIUM_ADDONS.map(a => (
                <div key={a.title} className="bg-[#FFF8EC] border border-[#EDE1CC] rounded-[8px] p-3 flex justify-between items-center gap-2">
                  <span className="text-[13px] font-medium text-[#333] leading-tight">{a.title}</span>
                  <span className="text-[#E4572E] font-bold text-sm flex-shrink-0">{a.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* â”€â”€ Tray Catering â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section id="catering" className="py-20 bg-[#183D2E]" aria-label="Tray catering packages">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <Eyebrow text="Tray Catering" light />
            <h2 className="font-['Barlow_Condensed'] font-extrabold text-white text-[clamp(2rem,4vw,3rem)] uppercase mb-4">
              Mexican catering packages for teams of 10 to 100+
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-[15px]">
              Build a fresh, customizable meal for your office with grilled chicken, seasoned steak, fajita vegetables, rice, beans, toppings, tortillas, chips, salsa, and desserts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {CATERING_PACKAGES.map(pkg => (
              <div key={pkg.id} className="bg-white/5 border border-white/10 rounded-[22px] overflow-hidden hover:border-white/25 transition-colors">
                <div className="relative">
                  <ImgPlaceholder filename={pkg.image} ratio="4/3" className="rounded-t-[22px]" />
                  {pkg.label && (
                    <div className="absolute top-4 left-4">
                      <ItemBadge label={pkg.label} />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-['Barlow_Condensed'] font-extrabold text-white text-2xl uppercase mb-2">{pkg.title}</h3>
                  <p className="text-white/65 text-sm mb-5 leading-relaxed">{pkg.desc}</p>
                  <p className="text-[#F4B942] font-bold text-xs uppercase tracking-wider mb-2">Includes:</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {pkg.includes.map(item => (
                      <span key={item} className="text-[11px] bg-white/8 border border-white/10 text-white/70 px-2 py-0.5 rounded-full">{item}</span>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {pkg.pricing.map(p => (
                      <div key={p.size} className="bg-white/5 rounded-[8px] px-3 py-2.5 flex justify-between items-center">
                        <span className="text-white/50 text-xs">{p.size}</span>
                        <span className="text-[#E4572E] font-bold text-sm">{p.price}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[#F4B942] font-semibold text-sm mb-5">{pkg.price}</p>
                  <a href="#quote" className="block w-full text-center bg-[#E4572E] hover:bg-[#c93e20] text-white font-bold py-3 rounded-full transition-colors text-sm">
                    Request a Quote
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Catering Add-Ons */}
          <div className="mt-16">
            <h3 className="font-['Barlow_Condensed'] font-bold text-white text-2xl uppercase mb-6 text-center">Catering Add-Ons</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {CATERING_ADDONS.map(a => (
                <div key={a.title} className="bg-white/5 border border-white/10 rounded-[8px] overflow-hidden flex items-center gap-3 pr-4">
                  {a.image ? (
                    <div className="w-16 h-16 flex-shrink-0 overflow-hidden">
                      <ImgPlaceholder filename={a.image} ratio="1/1" className="w-16 h-16 rounded-none" alt={a.title} />
                    </div>
                  ) : (
                    <div className="w-16 h-16 flex-shrink-0 bg-white/5 flex items-center justify-center">
                      <ImageIcon className="w-5 h-5 text-white/15" />
                    </div>
                  )}
                  <div className="flex-1 py-2">
                    <p className="text-white text-sm font-medium leading-snug">{a.title}</p>
                    <p className="text-white/35 text-xs mt-0.5">{a.size}</p>
                  </div>
                  <span className="text-[#E4572E] font-bold text-base flex-shrink-0">{a.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* â”€â”€ How It Works â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section id="how-it-works" className="py-20 bg-[#FFF8EC]" aria-label="How ordering works">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <Eyebrow text="Simple Process" />
            <h2 className="font-['Barlow_Condensed'] font-extrabold text-[#183D2E] text-[clamp(2rem,4vw,3rem)] uppercase">
              How ordering works
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {HOW_IT_WORKS.map(step => (
              <div key={step.num} className="relative">
                <p
                  className="font-['Barlow_Condensed'] font-extrabold text-[#EDE1CC] select-none leading-none"
                  style={{ fontSize: "clamp(5rem, 12vw, 8rem)" }}
                  aria-hidden="true"
                >
                  {step.num}
                </p>
                <div className="-mt-6 md:-mt-8">
                  <h3 className="font-['Barlow_Condensed'] font-bold text-[#183D2E] text-2xl uppercase mb-3">{step.title}</h3>
                  <p className="text-[#666] text-[15px] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ Office Catering Callout â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-20 bg-white" aria-label="Office catering">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <Eyebrow text="Office Catering" />
            <h2 className="font-['Barlow_Condensed'] font-extrabold text-[#183D2E] text-[clamp(2rem,4vw,3rem)] uppercase leading-tight mb-6">
              Built for office lunches, meetings, and team events
            </h2>
            <p className="text-[#666] text-[15px] leading-relaxed mb-6">
              From individually packaged meals to buffet-style catering trays, Calle Fresca makes group ordering simple. Choose the meal format, proteins, toppings, sides, desserts, and drinks that work best for your team.
            </p>
            <ul className="mb-8 space-y-2.5">
              {OFFICE_FEATURES.map(item => (
                <li key={item} className="flex items-center gap-3 text-[15px] text-[#444]">
                  <Check className="w-4 h-4 text-[#7CA342] flex-shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <a href="#quote" className="inline-block bg-[#E4572E] hover:bg-[#c93e20] text-white font-bold px-8 py-3.5 rounded-full transition-colors">
              Request a Catering Quote
            </a>
          </div>
          <div className="rounded-[22px] overflow-hidden">
            <ImgPlaceholder filename="office-mexican-catering-setup.jpg" ratio="16/9" className="rounded-[22px]" />
          </div>
        </div>
      </section>

      {/* â”€â”€ About â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section id="about" className="py-20 bg-[#FFF8EC]" aria-label="About Calle Fresca">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div className="rounded-[22px] overflow-hidden order-2 md:order-1">
            <ImgPlaceholder filename="about-calle-fresca-kitchen.jpg" ratio="4/3" className="rounded-[22px]" />
          </div>
          <div className="order-1 md:order-2">
            <Eyebrow text="Our Story" />
            <h2 className="font-['Barlow_Condensed'] font-extrabold text-[#183D2E] text-[clamp(2rem,4vw,3rem)] uppercase leading-tight mb-6">
              Fresh Mexican catering made for the modern workplace
            </h2>
            <p className="text-[#666] text-[15px] leading-relaxed mb-4">
              Calle Fresca Mexican Kitchen was created for office lunches, meetings, trainings, client events, and recurring workplace meals.
            </p>
            <p className="text-[#666] text-[15px] leading-relaxed mb-4">
              Our menu focuses on customizable rice bowls, burritos, salads, boxed meals, sides, desserts, and catering packages that are easy to order and easy to serve.
            </p>
            <p className="text-[#666] text-[15px] leading-relaxed mb-8">
              {"Whether your team prefers grilled chicken, seasoned steak, or fajita vegetables, every order can be customized with rice, beans, toppings, and sauces."}
            </p>
          </div>
        </div>
      </section>

      {/* â”€â”€ Quote Form â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section id="quote" className="py-20 bg-[#183D2E]" aria-label="Request a catering quote">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <Eyebrow text="Get a Quote" light />
            <h2 className="font-['Barlow_Condensed'] font-extrabold text-white text-[clamp(2rem,4vw,3rem)] uppercase leading-tight mb-6">
              {"Let's plan your team's meal"}
            </h2>
            <p className="text-white/65 text-[15px] leading-relaxed mb-8">
              Tell us about your event and we will help you build the right Mexican catering order for your office.
            </p>
            <ul className="space-y-3.5">
              {["Catering for teams of 10+", "Individually packaged and tray options", "Customizable proteins and toppings"].map(p => (
                <li key={p} className="flex items-center gap-3 text-white/80 text-[15px]">
                  <Check className="w-4 h-4 text-[#7CA342] flex-shrink-0" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-[22px] p-8 shadow-xl">
            {formSubmitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-[#7CA342] rounded-full flex items-center justify-center mx-auto mb-5">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-['Barlow_Condensed'] font-bold text-[#183D2E] text-3xl uppercase mb-3">Request Received!</h3>
                <p className="text-[#666] text-[15px] leading-relaxed">
                  Thank you. Your catering request has been received. Our team will contact you with the next steps.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls} htmlFor="name">Name *</label>
                    <input id="name" name="name" required className={inputCls} placeholder="Your name" value={form.name} onChange={setField("name")} />
                  </div>
                  <div>
                    <label className={labelCls} htmlFor="company">Company *</label>
                    <input id="company" name="company" required className={inputCls} placeholder="Company name" value={form.company} onChange={setField("company")} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls} htmlFor="email">Email *</label>
                    <input id="email" name="email" required type="email" className={inputCls} placeholder="email@company.com" value={form.email} onChange={setField("email")} />
                  </div>
                  <div>
                    <label className={labelCls} htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" type="tel" className={inputCls} placeholder="(555) 000-0000" value={form.phone} onChange={setField("phone")} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls} htmlFor="eventDate">Event Date</label>
                    <input id="eventDate" name="event_date" type="date" className={inputCls} value={form.eventDate} onChange={setField("eventDate")} />
                  </div>
                  <div>
                    <label className={labelCls} htmlFor="deliveryTime">Delivery Time</label>
                    <input id="deliveryTime" name="delivery_time" type="time" className={inputCls} value={form.deliveryTime} onChange={setField("deliveryTime")} />
                  </div>
                </div>
                <div>
                  <label className={labelCls} htmlFor="address">Delivery Address</label>
                  <input id="address" name="delivery_address" className={inputCls} placeholder="Office address" value={form.deliveryAddress} onChange={setField("deliveryAddress")} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls} htmlFor="guests">Number of Guests</label>
                    <input id="guests" name="number_of_guests" type="number" min="10" className={inputCls} placeholder="e.g. 25" value={form.guests} onChange={setField("guests")} />
                  </div>
                  <div>
                    <label className={labelCls} htmlFor="budget">Budget Per Person</label>
                    <input id="budget" name="budget_per_person" className={inputCls} placeholder="e.g. $20" value={form.budget} onChange={setField("budget")} />
                  </div>
                </div>
                <div>
                  <label className={labelCls} htmlFor="mealType">Meal Type</label>
                  <select id="mealType" name="meal_type" className={inputCls} value={form.mealType} onChange={setField("mealType")}>
                    <option value="">Select a meal type...</option>
                    {MEAL_TYPES.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelCls} htmlFor="dietary">Dietary Requests</label>
                  <input id="dietary" name="dietary_requests" className={inputCls} placeholder="e.g. vegetarian, no dairy" value={form.dietary} onChange={setField("dietary")} />
                </div>
                <div>
                  <label className={labelCls} htmlFor="notes">Additional Notes</label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    className={`${inputCls} resize-none`}
                    placeholder="Tell us what you are planning and we will help build the right Mexican catering order for your team."
                    value={form.notes}
                    onChange={setField("notes")}
                  />
                </div>
                {formError && (
                  <p className="rounded-[8px] border border-[#E4572E]/30 bg-[#FFF8EC] px-3 py-2 text-sm text-[#9B2F18]">
                    {formError}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={formSubmitting}
                  className="w-full bg-[#E4572E] hover:bg-[#c93e20] disabled:bg-[#E4572E]/60 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-full text-base transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#183D2E]"
                >
                  {formSubmitting ? "Sending..." : "Request Quote"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* â”€â”€ FAQ â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-20 bg-[#FFF8EC]" aria-label="Frequently asked questions">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-10">
            <Eyebrow text="FAQs" />
            <h2 className="font-['Barlow_Condensed'] font-extrabold text-[#183D2E] text-[clamp(2rem,4vw,3rem)] uppercase">
              Frequently asked questions
            </h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white border border-[#EDE1CC] rounded-[14px] overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-[#183D2E] text-[15px] hover:bg-[#FFF8EC] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#183D2E]"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{faq.q}</span>
                  {openFaq === i
                    ? <ChevronUp className="w-5 h-5 text-[#E4572E] flex-shrink-0 ml-4" aria-hidden="true" />
                    : <ChevronDown className="w-5 h-5 text-[#999] flex-shrink-0 ml-4" aria-hidden="true" />
                  }
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 border-t border-[#EDE1CC]">
                    <p className="pt-4 text-[#666] text-[15px] leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ Footer â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <footer className="bg-[#183D2E] text-white pt-16 pb-10" aria-label="Footer">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-1">
              <p className="font-['Barlow_Condensed'] font-extrabold text-white text-2xl uppercase tracking-wide leading-none">Calle Fresca</p>
              <p className="font-['Barlow_Condensed'] font-semibold text-[#F4B942] text-[10px] tracking-[0.2em] uppercase mt-0.5 mb-4">Mexican Kitchen</p>
              <p className="text-white/55 text-sm leading-relaxed mb-6">
                Bold, customizable Mexican catering for office lunches, meetings, and team events.
              </p>
              <div className="flex gap-3">
                {([Instagram, Facebook, Linkedin] as const).map((Icon, i) => (
                  <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B942]" aria-label={["Instagram", "Facebook", "LinkedIn"][i]}>
                    <Icon className="w-4 h-4 text-white/65" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="font-bold text-white/35 text-[10px] uppercase tracking-widest mb-5">Navigation</p>
              <ul className="space-y-2.5">
                {["Menu", "Boxed Meals", "Tray Catering", "How It Works", "About", "Request a Quote", "Order Catering"].map(l => (
                  <li key={l}>
                    <a href="#" className="text-white/60 hover:text-[#F4B942] text-sm transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-bold text-white/35 text-[10px] uppercase tracking-widest mb-5">Contact</p>
              <ul className="space-y-3.5">
                <li className="flex items-start gap-3 text-white/60 text-sm">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#F4B942]" aria-hidden="true" />
                  <span>catering@callefresca.com</span>
                </li>
                <li className="flex items-start gap-3 text-white/60 text-sm">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#F4B942]" aria-hidden="true" />
                  <span>Add phone number</span>
                </li>
                <li className="flex items-start gap-3 text-white/60 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#F4B942]" aria-hidden="true" />
                  <span>Add service area</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-bold text-white/35 text-[10px] uppercase tracking-widest mb-5">Order Now</p>
              <div className="space-y-3">
                <a href="#quote" className="block w-full text-center bg-[#E4572E] hover:bg-[#c93e20] text-white font-bold py-3 rounded-full text-sm transition-colors">
                  Order Catering
                </a>
                <a href="#quote" className="block w-full text-center border border-white/25 hover:border-white/50 text-white font-bold py-3 rounded-full text-sm transition-colors">
                  Request a Quote
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-xs">Â© 2026 Calle Fresca Mexican Kitchen. All rights reserved.</p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms", "Accessibility"].map(l => (
                <a key={l} href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* â”€â”€ Sticky Mobile CTA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#183D2E]/95 backdrop-blur-sm border-t border-white/10 flex gap-3 px-4 py-3" aria-label="Quick order actions">
        <a href="#quote" className="flex-1 text-center bg-[#E4572E] hover:bg-[#c93e20] text-white font-bold py-3 rounded-full text-sm transition-colors">
          Order Catering
        </a>
        <a href="#quote" className="flex-1 text-center border border-white/30 hover:border-white/60 text-white font-bold py-3 rounded-full text-sm transition-colors">
          Request Quote
        </a>
      </div>

    </div>
  );
}
