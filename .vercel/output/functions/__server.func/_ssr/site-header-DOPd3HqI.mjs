import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as useNavigate, m as useRouterState, w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Search, c as Heart, s as Scale } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-header-DOPd3HqI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function normalizeQuery(value) {
	return value.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase().trim();
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,background-color,opacity,transform,border-color] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-accent text-accent-fg hover:bg-accent/90",
			outline: "border border-border bg-surface text-fg hover:border-border-strong hover:bg-surface-2",
			ghost: "text-fg hover:bg-surface-2",
			save: "bg-save text-save-soft hover:bg-save/90",
			link: "text-accent underline-offset-4 hover:underline"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 rounded-sm px-3 text-xs",
			lg: "h-12 px-5",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
var catalog_default = /*#__PURE__*/ JSON.parse("[{\"id\":1,\"title\":\"Essence Mascara Lash Princess\",\"description\":\"The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.\",\"category\":\"beauty\",\"price\":9.99,\"discountPercentage\":10.48,\"rating\":2.56,\"stock\":99,\"brand\":\"Essence\",\"tags\":[\"beauty\",\"mascara\"],\"images\":[\"https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp\"},{\"id\":2,\"title\":\"Eyeshadow Palette with Mirror\",\"description\":\"The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.\",\"category\":\"beauty\",\"price\":19.99,\"discountPercentage\":18.19,\"rating\":2.86,\"stock\":34,\"brand\":\"Glamour Beauty\",\"tags\":[\"beauty\",\"eyeshadow\"],\"images\":[\"https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp\"},{\"id\":3,\"title\":\"Powder Canister\",\"description\":\"The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.\",\"category\":\"beauty\",\"price\":14.99,\"discountPercentage\":9.84,\"rating\":4.64,\"stock\":89,\"brand\":\"Velvet Touch\",\"tags\":[\"beauty\",\"face powder\"],\"images\":[\"https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp\"},{\"id\":4,\"title\":\"Red Lipstick\",\"description\":\"The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.\",\"category\":\"beauty\",\"price\":12.99,\"discountPercentage\":12.16,\"rating\":4.36,\"stock\":91,\"brand\":\"Chic Cosmetics\",\"tags\":[\"beauty\",\"lipstick\"],\"images\":[\"https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp\"},{\"id\":5,\"title\":\"Red Nail Polish\",\"description\":\"The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.\",\"category\":\"beauty\",\"price\":8.99,\"discountPercentage\":11.44,\"rating\":4.32,\"stock\":79,\"brand\":\"Nail Couture\",\"tags\":[\"beauty\",\"nail polish\"],\"images\":[\"https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp\"},{\"id\":6,\"title\":\"Calvin Klein CK One\",\"description\":\"CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.\",\"category\":\"fragrances\",\"price\":49.99,\"discountPercentage\":1.89,\"rating\":4.37,\"stock\":29,\"brand\":\"Calvin Klein\",\"tags\":[\"fragrances\",\"perfumes\"],\"images\":[\"https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp\",\"https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/2.webp\",\"https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp\"},{\"id\":7,\"title\":\"Chanel Coco Noir Eau De\",\"description\":\"Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.\",\"category\":\"fragrances\",\"price\":129.99,\"discountPercentage\":16.51,\"rating\":4.26,\"stock\":58,\"brand\":\"Chanel\",\"tags\":[\"fragrances\",\"perfumes\"],\"images\":[\"https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp\",\"https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/2.webp\",\"https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp\"},{\"id\":8,\"title\":\"Dior J'adore\",\"description\":\"J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.\",\"category\":\"fragrances\",\"price\":89.99,\"discountPercentage\":14.72,\"rating\":3.8,\"stock\":98,\"brand\":\"Dior\",\"tags\":[\"fragrances\",\"perfumes\"],\"images\":[\"https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/1.webp\",\"https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/2.webp\",\"https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/thumbnail.webp\"},{\"id\":9,\"title\":\"Dolce Shine Eau de\",\"description\":\"Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.\",\"category\":\"fragrances\",\"price\":69.99,\"discountPercentage\":0.62,\"rating\":3.96,\"stock\":4,\"brand\":\"Dolce & Gabbana\",\"tags\":[\"fragrances\",\"perfumes\"],\"images\":[\"https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/1.webp\",\"https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/2.webp\",\"https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/thumbnail.webp\"},{\"id\":10,\"title\":\"Gucci Bloom Eau de\",\"description\":\"Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.\",\"category\":\"fragrances\",\"price\":79.99,\"discountPercentage\":14.39,\"rating\":2.74,\"stock\":91,\"brand\":\"Gucci\",\"tags\":[\"fragrances\",\"perfumes\"],\"images\":[\"https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/1.webp\",\"https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/2.webp\",\"https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/thumbnail.webp\"},{\"id\":11,\"title\":\"Annibale Colombo Bed\",\"description\":\"The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.\",\"category\":\"furniture\",\"price\":1899.99,\"discountPercentage\":8.57,\"rating\":4.77,\"stock\":88,\"brand\":\"Annibale Colombo\",\"tags\":[\"furniture\",\"beds\"],\"images\":[\"https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/1.webp\",\"https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/2.webp\",\"https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/thumbnail.webp\"},{\"id\":12,\"title\":\"Annibale Colombo Sofa\",\"description\":\"The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.\",\"category\":\"furniture\",\"price\":2499.99,\"discountPercentage\":14.4,\"rating\":3.92,\"stock\":60,\"brand\":\"Annibale Colombo\",\"tags\":[\"furniture\",\"sofas\"],\"images\":[\"https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/1.webp\",\"https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/2.webp\",\"https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp\"},{\"id\":13,\"title\":\"Bedside Table African Cherry\",\"description\":\"The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.\",\"category\":\"furniture\",\"price\":299.99,\"discountPercentage\":19.09,\"rating\":2.87,\"stock\":64,\"brand\":\"Furniture Co.\",\"tags\":[\"furniture\",\"bedside tables\"],\"images\":[\"https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/1.webp\",\"https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/2.webp\",\"https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/thumbnail.webp\"},{\"id\":14,\"title\":\"Knoll Saarinen Executive Conference Chair\",\"description\":\"The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.\",\"category\":\"furniture\",\"price\":499.99,\"discountPercentage\":2.01,\"rating\":4.88,\"stock\":26,\"brand\":\"Knoll\",\"tags\":[\"furniture\",\"office chairs\"],\"images\":[\"https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/1.webp\",\"https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/2.webp\",\"https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/thumbnail.webp\"},{\"id\":15,\"title\":\"Wooden Bathroom Sink With Mirror\",\"description\":\"The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.\",\"category\":\"furniture\",\"price\":799.99,\"discountPercentage\":8.8,\"rating\":3.59,\"stock\":7,\"brand\":\"Bath Trends\",\"tags\":[\"furniture\",\"bathroom\"],\"images\":[\"https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/1.webp\",\"https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/2.webp\",\"https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/thumbnail.webp\"},{\"id\":16,\"title\":\"Apple\",\"description\":\"Fresh and crisp apples, perfect for snacking or incorporating into various recipes.\",\"category\":\"groceries\",\"price\":1.99,\"discountPercentage\":12.62,\"rating\":4.19,\"stock\":8,\"brand\":\"\",\"tags\":[\"fruits\"],\"images\":[\"https://cdn.dummyjson.com/product-images/groceries/apple/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/groceries/apple/thumbnail.webp\"},{\"id\":17,\"title\":\"Beef Steak\",\"description\":\"High-quality beef steak, great for grilling or cooking to your preferred level of doneness.\",\"category\":\"groceries\",\"price\":12.99,\"discountPercentage\":9.61,\"rating\":4.47,\"stock\":86,\"brand\":\"\",\"tags\":[\"meat\"],\"images\":[\"https://cdn.dummyjson.com/product-images/groceries/beef-steak/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/groceries/beef-steak/thumbnail.webp\"},{\"id\":18,\"title\":\"Cat Food\",\"description\":\"Nutritious cat food formulated to meet the dietary needs of your feline friend.\",\"category\":\"groceries\",\"price\":8.99,\"discountPercentage\":9.58,\"rating\":3.13,\"stock\":46,\"brand\":\"\",\"tags\":[\"pet supplies\",\"cat food\"],\"images\":[\"https://cdn.dummyjson.com/product-images/groceries/cat-food/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/groceries/cat-food/thumbnail.webp\"},{\"id\":19,\"title\":\"Chicken Meat\",\"description\":\"Fresh and tender chicken meat, suitable for various culinary preparations.\",\"category\":\"groceries\",\"price\":9.99,\"discountPercentage\":13.7,\"rating\":3.19,\"stock\":97,\"brand\":\"\",\"tags\":[\"meat\"],\"images\":[\"https://cdn.dummyjson.com/product-images/groceries/chicken-meat/1.webp\",\"https://cdn.dummyjson.com/product-images/groceries/chicken-meat/2.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/groceries/chicken-meat/thumbnail.webp\"},{\"id\":20,\"title\":\"Cooking Oil\",\"description\":\"Versatile cooking oil suitable for frying, sautéing, and various culinary applications.\",\"category\":\"groceries\",\"price\":4.99,\"discountPercentage\":9.33,\"rating\":4.8,\"stock\":10,\"brand\":\"\",\"tags\":[\"cooking essentials\"],\"images\":[\"https://cdn.dummyjson.com/product-images/groceries/cooking-oil/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/groceries/cooking-oil/thumbnail.webp\"},{\"id\":21,\"title\":\"Cucumber\",\"description\":\"Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side.\",\"category\":\"groceries\",\"price\":1.49,\"discountPercentage\":0.16,\"rating\":4.07,\"stock\":84,\"brand\":\"\",\"tags\":[\"vegetables\"],\"images\":[\"https://cdn.dummyjson.com/product-images/groceries/cucumber/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/groceries/cucumber/thumbnail.webp\"},{\"id\":22,\"title\":\"Dog Food\",\"description\":\"Specially formulated dog food designed to provide essential nutrients for your canine companion.\",\"category\":\"groceries\",\"price\":10.99,\"discountPercentage\":10.27,\"rating\":4.55,\"stock\":71,\"brand\":\"\",\"tags\":[\"pet supplies\",\"dog food\"],\"images\":[\"https://cdn.dummyjson.com/product-images/groceries/dog-food/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/groceries/dog-food/thumbnail.webp\"},{\"id\":23,\"title\":\"Eggs\",\"description\":\"Fresh eggs, a versatile ingredient for baking, cooking, or breakfast.\",\"category\":\"groceries\",\"price\":2.99,\"discountPercentage\":11.05,\"rating\":2.53,\"stock\":9,\"brand\":\"\",\"tags\":[\"dairy\"],\"images\":[\"https://cdn.dummyjson.com/product-images/groceries/eggs/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/groceries/eggs/thumbnail.webp\"},{\"id\":24,\"title\":\"Fish Steak\",\"description\":\"Quality fish steak, suitable for grilling, baking, or pan-searing.\",\"category\":\"groceries\",\"price\":14.99,\"discountPercentage\":4.23,\"rating\":3.78,\"stock\":74,\"brand\":\"\",\"tags\":[\"seafood\"],\"images\":[\"https://cdn.dummyjson.com/product-images/groceries/fish-steak/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/groceries/fish-steak/thumbnail.webp\"},{\"id\":25,\"title\":\"Green Bell Pepper\",\"description\":\"Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes.\",\"category\":\"groceries\",\"price\":1.29,\"discountPercentage\":0.16,\"rating\":3.25,\"stock\":33,\"brand\":\"\",\"tags\":[\"vegetables\"],\"images\":[\"https://cdn.dummyjson.com/product-images/groceries/green-bell-pepper/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/groceries/green-bell-pepper/thumbnail.webp\"},{\"id\":26,\"title\":\"Green Chili Pepper\",\"description\":\"Spicy green chili pepper, ideal for adding heat to your favorite recipes.\",\"category\":\"groceries\",\"price\":0.99,\"discountPercentage\":1,\"rating\":3.66,\"stock\":3,\"brand\":\"\",\"tags\":[\"vegetables\"],\"images\":[\"https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/thumbnail.webp\"},{\"id\":27,\"title\":\"Honey Jar\",\"description\":\"Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food.\",\"category\":\"groceries\",\"price\":6.99,\"discountPercentage\":14.4,\"rating\":3.97,\"stock\":34,\"brand\":\"\",\"tags\":[\"condiments\"],\"images\":[\"https://cdn.dummyjson.com/product-images/groceries/honey-jar/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/groceries/honey-jar/thumbnail.webp\"},{\"id\":28,\"title\":\"Ice Cream\",\"description\":\"Creamy and delicious ice cream, available in various flavors for a delightful treat.\",\"category\":\"groceries\",\"price\":5.49,\"discountPercentage\":8.69,\"rating\":3.39,\"stock\":27,\"brand\":\"\",\"tags\":[\"desserts\"],\"images\":[\"https://cdn.dummyjson.com/product-images/groceries/ice-cream/1.webp\",\"https://cdn.dummyjson.com/product-images/groceries/ice-cream/2.webp\",\"https://cdn.dummyjson.com/product-images/groceries/ice-cream/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/groceries/ice-cream/thumbnail.webp\"},{\"id\":29,\"title\":\"Juice\",\"description\":\"Refreshing fruit juice, packed with vitamins and great for staying hydrated.\",\"category\":\"groceries\",\"price\":3.99,\"discountPercentage\":12.06,\"rating\":3.94,\"stock\":50,\"brand\":\"\",\"tags\":[\"beverages\"],\"images\":[\"https://cdn.dummyjson.com/product-images/groceries/juice/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/groceries/juice/thumbnail.webp\"},{\"id\":30,\"title\":\"Kiwi\",\"description\":\"Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes.\",\"category\":\"groceries\",\"price\":2.49,\"discountPercentage\":15.22,\"rating\":4.93,\"stock\":99,\"brand\":\"\",\"tags\":[\"fruits\"],\"images\":[\"https://cdn.dummyjson.com/product-images/groceries/kiwi/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/groceries/kiwi/thumbnail.webp\"},{\"id\":31,\"title\":\"Lemon\",\"description\":\"Zesty and tangy lemons, versatile for cooking, baking, or making refreshing beverages.\",\"category\":\"groceries\",\"price\":0.79,\"discountPercentage\":9.7,\"rating\":3.53,\"stock\":31,\"brand\":\"\",\"tags\":[\"fruits\"],\"images\":[\"https://cdn.dummyjson.com/product-images/groceries/lemon/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/groceries/lemon/thumbnail.webp\"},{\"id\":32,\"title\":\"Milk\",\"description\":\"Fresh and nutritious milk, a staple for various recipes and daily consumption.\",\"category\":\"groceries\",\"price\":3.49,\"discountPercentage\":13.74,\"rating\":2.61,\"stock\":27,\"brand\":\"\",\"tags\":[\"dairy\"],\"images\":[\"https://cdn.dummyjson.com/product-images/groceries/milk/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/groceries/milk/thumbnail.webp\"},{\"id\":33,\"title\":\"Mulberry\",\"description\":\"Sweet and juicy mulberries, perfect for snacking or adding to desserts and cereals.\",\"category\":\"groceries\",\"price\":4.99,\"discountPercentage\":12.87,\"rating\":4.95,\"stock\":99,\"brand\":\"\",\"tags\":[\"fruits\"],\"images\":[\"https://cdn.dummyjson.com/product-images/groceries/mulberry/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/groceries/mulberry/thumbnail.webp\"},{\"id\":34,\"title\":\"Nescafe Coffee\",\"description\":\"Quality coffee from Nescafe, available in various blends for a rich and satisfying cup.\",\"category\":\"groceries\",\"price\":7.99,\"discountPercentage\":1.59,\"rating\":4.82,\"stock\":57,\"brand\":\"\",\"tags\":[\"beverages\",\"coffee\"],\"images\":[\"https://cdn.dummyjson.com/product-images/groceries/nescafe-coffee/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/groceries/nescafe-coffee/thumbnail.webp\"},{\"id\":35,\"title\":\"Potatoes\",\"description\":\"Versatile and starchy potatoes, great for roasting, mashing, or as a side dish.\",\"category\":\"groceries\",\"price\":2.29,\"discountPercentage\":5.38,\"rating\":4.81,\"stock\":13,\"brand\":\"\",\"tags\":[\"vegetables\"],\"images\":[\"https://cdn.dummyjson.com/product-images/groceries/potatoes/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/groceries/potatoes/thumbnail.webp\"},{\"id\":36,\"title\":\"Protein Powder\",\"description\":\"Nutrient-packed protein powder, ideal for supplementing your diet with essential proteins.\",\"category\":\"groceries\",\"price\":19.99,\"discountPercentage\":7.59,\"rating\":4.18,\"stock\":80,\"brand\":\"\",\"tags\":[\"health supplements\"],\"images\":[\"https://cdn.dummyjson.com/product-images/groceries/protein-powder/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/groceries/protein-powder/thumbnail.webp\"},{\"id\":37,\"title\":\"Red Onions\",\"description\":\"Flavorful and aromatic red onions, perfect for adding depth to your savory dishes.\",\"category\":\"groceries\",\"price\":1.99,\"discountPercentage\":9.9,\"rating\":4.2,\"stock\":82,\"brand\":\"\",\"tags\":[\"vegetables\"],\"images\":[\"https://cdn.dummyjson.com/product-images/groceries/red-onions/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/groceries/red-onions/thumbnail.webp\"},{\"id\":38,\"title\":\"Rice\",\"description\":\"High-quality rice, a staple for various cuisines and a versatile base for many dishes.\",\"category\":\"groceries\",\"price\":5.99,\"discountPercentage\":9.29,\"rating\":3.18,\"stock\":59,\"brand\":\"\",\"tags\":[\"grains\"],\"images\":[\"https://cdn.dummyjson.com/product-images/groceries/rice/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/groceries/rice/thumbnail.webp\"},{\"id\":39,\"title\":\"Soft Drinks\",\"description\":\"Assorted soft drinks in various flavors, perfect for refreshing beverages.\",\"category\":\"groceries\",\"price\":1.99,\"discountPercentage\":17.48,\"rating\":4.75,\"stock\":53,\"brand\":\"\",\"tags\":[\"beverages\"],\"images\":[\"https://cdn.dummyjson.com/product-images/groceries/soft-drinks/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/groceries/soft-drinks/thumbnail.webp\"},{\"id\":40,\"title\":\"Strawberry\",\"description\":\"Sweet and succulent strawberries, great for snacking, desserts, or blending into smoothies.\",\"category\":\"groceries\",\"price\":3.99,\"discountPercentage\":1.12,\"rating\":3.08,\"stock\":46,\"brand\":\"\",\"tags\":[\"fruits\"],\"images\":[\"https://cdn.dummyjson.com/product-images/groceries/strawberry/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/groceries/strawberry/thumbnail.webp\"},{\"id\":41,\"title\":\"Tissue Paper Box\",\"description\":\"Convenient tissue paper box for everyday use, providing soft and absorbent tissues.\",\"category\":\"groceries\",\"price\":2.49,\"discountPercentage\":13.28,\"rating\":2.69,\"stock\":86,\"brand\":\"\",\"tags\":[\"household essentials\"],\"images\":[\"https://cdn.dummyjson.com/product-images/groceries/tissue-paper-box/1.webp\",\"https://cdn.dummyjson.com/product-images/groceries/tissue-paper-box/2.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/groceries/tissue-paper-box/thumbnail.webp\"},{\"id\":42,\"title\":\"Water\",\"description\":\"Pure and refreshing bottled water, essential for staying hydrated throughout the day.\",\"category\":\"groceries\",\"price\":0.99,\"discountPercentage\":14.92,\"rating\":4.96,\"stock\":53,\"brand\":\"\",\"tags\":[\"beverages\"],\"images\":[\"https://cdn.dummyjson.com/product-images/groceries/water/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/groceries/water/thumbnail.webp\"},{\"id\":43,\"title\":\"Decoration Swing\",\"description\":\"The Decoration Swing is a charming addition to your home decor. Crafted with intricate details, it adds a touch of elegance and whimsy to any room.\",\"category\":\"home-decoration\",\"price\":59.99,\"discountPercentage\":10.41,\"rating\":3.16,\"stock\":47,\"brand\":\"\",\"tags\":[\"home decor\",\"swing\"],\"images\":[\"https://cdn.dummyjson.com/product-images/home-decoration/decoration-swing/1.webp\",\"https://cdn.dummyjson.com/product-images/home-decoration/decoration-swing/2.webp\",\"https://cdn.dummyjson.com/product-images/home-decoration/decoration-swing/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/home-decoration/decoration-swing/thumbnail.webp\"},{\"id\":44,\"title\":\"Family Tree Photo Frame\",\"description\":\"The Family Tree Photo Frame is a sentimental and stylish way to display your cherished family memories. With multiple photo slots, it tells the story of your loved ones.\",\"category\":\"home-decoration\",\"price\":29.99,\"discountPercentage\":14.87,\"rating\":4.53,\"stock\":77,\"brand\":\"\",\"tags\":[\"home decor\",\"photo frame\"],\"images\":[\"https://cdn.dummyjson.com/product-images/home-decoration/family-tree-photo-frame/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/home-decoration/family-tree-photo-frame/thumbnail.webp\"},{\"id\":45,\"title\":\"House Showpiece Plant\",\"description\":\"The House Showpiece Plant is an artificial plant that brings a touch of nature to your home without the need for maintenance. It adds greenery and style to any space.\",\"category\":\"home-decoration\",\"price\":39.99,\"discountPercentage\":7.46,\"rating\":4.67,\"stock\":28,\"brand\":\"\",\"tags\":[\"home decor\",\"artificial plants\"],\"images\":[\"https://cdn.dummyjson.com/product-images/home-decoration/house-showpiece-plant/1.webp\",\"https://cdn.dummyjson.com/product-images/home-decoration/house-showpiece-plant/2.webp\",\"https://cdn.dummyjson.com/product-images/home-decoration/house-showpiece-plant/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/home-decoration/house-showpiece-plant/thumbnail.webp\"},{\"id\":46,\"title\":\"Plant Pot\",\"description\":\"The Plant Pot is a stylish container for your favorite plants. With a sleek design, it complements your indoor or outdoor garden, adding a modern touch to your plant display.\",\"category\":\"home-decoration\",\"price\":14.99,\"discountPercentage\":6.84,\"rating\":3.01,\"stock\":59,\"brand\":\"\",\"tags\":[\"home decor\",\"plant accessories\"],\"images\":[\"https://cdn.dummyjson.com/product-images/home-decoration/plant-pot/1.webp\",\"https://cdn.dummyjson.com/product-images/home-decoration/plant-pot/2.webp\",\"https://cdn.dummyjson.com/product-images/home-decoration/plant-pot/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/home-decoration/plant-pot/thumbnail.webp\"},{\"id\":47,\"title\":\"Table Lamp\",\"description\":\"The Table Lamp is a functional and decorative lighting solution for your living space. With a modern design, it provides both ambient and task lighting, enhancing the atmosphere.\",\"category\":\"home-decoration\",\"price\":49.99,\"discountPercentage\":7.09,\"rating\":3.55,\"stock\":9,\"brand\":\"\",\"tags\":[\"home decor\",\"lighting\"],\"images\":[\"https://cdn.dummyjson.com/product-images/home-decoration/table-lamp/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/home-decoration/table-lamp/thumbnail.webp\"},{\"id\":48,\"title\":\"Bamboo Spatula\",\"description\":\"The Bamboo Spatula is a versatile kitchen tool made from eco-friendly bamboo. Ideal for flipping, stirring, and serving various dishes.\",\"category\":\"kitchen-accessories\",\"price\":7.99,\"discountPercentage\":2.84,\"rating\":3.27,\"stock\":37,\"brand\":\"\",\"tags\":[\"kitchen tools\",\"utensils\"],\"images\":[\"https://cdn.dummyjson.com/product-images/kitchen-accessories/bamboo-spatula/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/kitchen-accessories/bamboo-spatula/thumbnail.webp\"},{\"id\":49,\"title\":\"Black Aluminium Cup\",\"description\":\"The Black Aluminium Cup is a stylish and durable cup suitable for both hot and cold beverages. Its sleek black design adds a modern touch to your drinkware collection.\",\"category\":\"kitchen-accessories\",\"price\":5.99,\"discountPercentage\":15.65,\"rating\":4.46,\"stock\":75,\"brand\":\"\",\"tags\":[\"drinkware\",\"cups\"],\"images\":[\"https://cdn.dummyjson.com/product-images/kitchen-accessories/black-aluminium-cup/1.webp\",\"https://cdn.dummyjson.com/product-images/kitchen-accessories/black-aluminium-cup/2.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/kitchen-accessories/black-aluminium-cup/thumbnail.webp\"},{\"id\":50,\"title\":\"Black Whisk\",\"description\":\"The Black Whisk is a kitchen essential for whisking and beating ingredients. Its ergonomic handle and sleek design make it a practical and stylish tool.\",\"category\":\"kitchen-accessories\",\"price\":9.99,\"discountPercentage\":10.24,\"rating\":3.9,\"stock\":73,\"brand\":\"\",\"tags\":[\"kitchen tools\",\"utensils\"],\"images\":[\"https://cdn.dummyjson.com/product-images/kitchen-accessories/black-whisk/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/kitchen-accessories/black-whisk/thumbnail.webp\"},{\"id\":51,\"title\":\"Boxed Blender\",\"description\":\"The Boxed Blender is a powerful and compact blender perfect for smoothies, shakes, and more. Its convenient design and multiple functions make it a versatile kitchen appliance.\",\"category\":\"kitchen-accessories\",\"price\":39.99,\"discountPercentage\":7.26,\"rating\":4.56,\"stock\":9,\"brand\":\"\",\"tags\":[\"kitchen appliances\",\"blenders\"],\"images\":[\"https://cdn.dummyjson.com/product-images/kitchen-accessories/boxed-blender/1.webp\",\"https://cdn.dummyjson.com/product-images/kitchen-accessories/boxed-blender/2.webp\",\"https://cdn.dummyjson.com/product-images/kitchen-accessories/boxed-blender/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/kitchen-accessories/boxed-blender/thumbnail.webp\"},{\"id\":52,\"title\":\"Carbon Steel Wok\",\"description\":\"The Carbon Steel Wok is a versatile cooking pan suitable for stir-frying, sautéing, and deep frying. Its sturdy construction ensures even heat distribution for delicious meals.\",\"category\":\"kitchen-accessories\",\"price\":29.99,\"discountPercentage\":6.53,\"rating\":4.05,\"stock\":40,\"brand\":\"\",\"tags\":[\"cookware\",\"woks\"],\"images\":[\"https://cdn.dummyjson.com/product-images/kitchen-accessories/carbon-steel-wok/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/kitchen-accessories/carbon-steel-wok/thumbnail.webp\"},{\"id\":53,\"title\":\"Chopping Board\",\"description\":\"The Chopping Board is an essential kitchen accessory for food preparation. Made from durable material, it provides a safe and hygienic surface for cutting and chopping.\",\"category\":\"kitchen-accessories\",\"price\":12.99,\"discountPercentage\":8.03,\"rating\":3.7,\"stock\":14,\"brand\":\"\",\"tags\":[\"kitchen tools\",\"cutting boards\"],\"images\":[\"https://cdn.dummyjson.com/product-images/kitchen-accessories/chopping-board/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/kitchen-accessories/chopping-board/thumbnail.webp\"},{\"id\":54,\"title\":\"Citrus Squeezer Yellow\",\"description\":\"The Citrus Squeezer in Yellow is a handy tool for extracting juice from citrus fruits. Its vibrant color adds a cheerful touch to your kitchen gadgets.\",\"category\":\"kitchen-accessories\",\"price\":8.99,\"discountPercentage\":12.1,\"rating\":4.63,\"stock\":22,\"brand\":\"\",\"tags\":[\"kitchen tools\",\"juicers\"],\"images\":[\"https://cdn.dummyjson.com/product-images/kitchen-accessories/citrus-squeezer-yellow/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/kitchen-accessories/citrus-squeezer-yellow/thumbnail.webp\"},{\"id\":55,\"title\":\"Egg Slicer\",\"description\":\"The Egg Slicer is a convenient tool for slicing boiled eggs evenly. It's perfect for salads, sandwiches, and other dishes where sliced eggs are desired.\",\"category\":\"kitchen-accessories\",\"price\":6.99,\"discountPercentage\":14.76,\"rating\":3.09,\"stock\":40,\"brand\":\"\",\"tags\":[\"kitchen tools\",\"slicers\"],\"images\":[\"https://cdn.dummyjson.com/product-images/kitchen-accessories/egg-slicer/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/kitchen-accessories/egg-slicer/thumbnail.webp\"},{\"id\":56,\"title\":\"Electric Stove\",\"description\":\"The Electric Stove provides a portable and efficient cooking solution. Ideal for small kitchens or as an additional cooking surface for various culinary needs.\",\"category\":\"kitchen-accessories\",\"price\":49.99,\"discountPercentage\":14.04,\"rating\":4.11,\"stock\":21,\"brand\":\"\",\"tags\":[\"kitchen appliances\",\"cooktops\"],\"images\":[\"https://cdn.dummyjson.com/product-images/kitchen-accessories/electric-stove/1.webp\",\"https://cdn.dummyjson.com/product-images/kitchen-accessories/electric-stove/2.webp\",\"https://cdn.dummyjson.com/product-images/kitchen-accessories/electric-stove/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/kitchen-accessories/electric-stove/thumbnail.webp\"},{\"id\":57,\"title\":\"Fine Mesh Strainer\",\"description\":\"The Fine Mesh Strainer is a versatile tool for straining liquids and sifting dry ingredients. Its fine mesh ensures efficient filtering for smooth cooking and baking.\",\"category\":\"kitchen-accessories\",\"price\":9.99,\"discountPercentage\":3.5,\"rating\":3.04,\"stock\":85,\"brand\":\"\",\"tags\":[\"kitchen tools\",\"strainers\"],\"images\":[\"https://cdn.dummyjson.com/product-images/kitchen-accessories/fine-mesh-strainer/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/kitchen-accessories/fine-mesh-strainer/thumbnail.webp\"},{\"id\":58,\"title\":\"Fork\",\"description\":\"The Fork is a classic utensil for various dining and serving purposes. Its durable and ergonomic design makes it a reliable choice for everyday use.\",\"category\":\"kitchen-accessories\",\"price\":3.99,\"discountPercentage\":8.07,\"rating\":3.11,\"stock\":7,\"brand\":\"\",\"tags\":[\"kitchen tools\",\"utensils\"],\"images\":[\"https://cdn.dummyjson.com/product-images/kitchen-accessories/fork/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/kitchen-accessories/fork/thumbnail.webp\"},{\"id\":59,\"title\":\"Glass\",\"description\":\"The Glass is a versatile and elegant drinking vessel suitable for a variety of beverages. Its clear design allows you to enjoy the colors and textures of your drinks.\",\"category\":\"kitchen-accessories\",\"price\":4.99,\"discountPercentage\":7.92,\"rating\":4.02,\"stock\":46,\"brand\":\"\",\"tags\":[\"drinkware\",\"glasses\"],\"images\":[\"https://cdn.dummyjson.com/product-images/kitchen-accessories/glass/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/kitchen-accessories/glass/thumbnail.webp\"},{\"id\":60,\"title\":\"Grater Black\",\"description\":\"The Grater in Black is a handy kitchen tool for grating cheese, vegetables, and more. Its sleek design and sharp blades make food preparation efficient and easy.\",\"category\":\"kitchen-accessories\",\"price\":10.99,\"discountPercentage\":3.56,\"rating\":3.21,\"stock\":84,\"brand\":\"\",\"tags\":[\"kitchen tools\",\"graters\"],\"images\":[\"https://cdn.dummyjson.com/product-images/kitchen-accessories/grater-black/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/kitchen-accessories/grater-black/thumbnail.webp\"},{\"id\":61,\"title\":\"Hand Blender\",\"description\":\"The Hand Blender is a versatile kitchen appliance for blending, pureeing, and mixing. Its compact design and powerful motor make it a convenient tool for various recipes.\",\"category\":\"kitchen-accessories\",\"price\":34.99,\"discountPercentage\":17.02,\"rating\":3.86,\"stock\":84,\"brand\":\"\",\"tags\":[\"kitchen appliances\",\"blenders\"],\"images\":[\"https://cdn.dummyjson.com/product-images/kitchen-accessories/hand-blender/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/kitchen-accessories/hand-blender/thumbnail.webp\"},{\"id\":62,\"title\":\"Ice Cube Tray\",\"description\":\"The Ice Cube Tray is a practical accessory for making ice cubes in various shapes. Perfect for keeping your drinks cool and adding a fun element to your beverages.\",\"category\":\"kitchen-accessories\",\"price\":5.99,\"discountPercentage\":0.63,\"rating\":4.71,\"stock\":13,\"brand\":\"\",\"tags\":[\"kitchen tools\",\"ice cube trays\"],\"images\":[\"https://cdn.dummyjson.com/product-images/kitchen-accessories/ice-cube-tray/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/kitchen-accessories/ice-cube-tray/thumbnail.webp\"},{\"id\":63,\"title\":\"Kitchen Sieve\",\"description\":\"The Kitchen Sieve is a versatile tool for sifting and straining dry and wet ingredients. Its fine mesh design ensures smooth results in your cooking and baking.\",\"category\":\"kitchen-accessories\",\"price\":7.99,\"discountPercentage\":18.91,\"rating\":3.09,\"stock\":68,\"brand\":\"\",\"tags\":[\"kitchen tools\",\"strainers\"],\"images\":[\"https://cdn.dummyjson.com/product-images/kitchen-accessories/kitchen-sieve/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/kitchen-accessories/kitchen-sieve/thumbnail.webp\"},{\"id\":64,\"title\":\"Knife\",\"description\":\"The Knife is an essential kitchen tool for chopping, slicing, and dicing. Its sharp blade and ergonomic handle make it a reliable choice for food preparation.\",\"category\":\"kitchen-accessories\",\"price\":14.99,\"discountPercentage\":18.86,\"rating\":3.26,\"stock\":7,\"brand\":\"\",\"tags\":[\"kitchen tools\",\"cutlery\"],\"images\":[\"https://cdn.dummyjson.com/product-images/kitchen-accessories/knife/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/kitchen-accessories/knife/thumbnail.webp\"},{\"id\":65,\"title\":\"Lunch Box\",\"description\":\"The Lunch Box is a convenient and portable container for packing and carrying your meals. With compartments for different foods, it's perfect for on-the-go dining.\",\"category\":\"kitchen-accessories\",\"price\":12.99,\"discountPercentage\":10.34,\"rating\":4.93,\"stock\":94,\"brand\":\"\",\"tags\":[\"kitchen tools\",\"storage\"],\"images\":[\"https://cdn.dummyjson.com/product-images/kitchen-accessories/lunch-box/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/kitchen-accessories/lunch-box/thumbnail.webp\"},{\"id\":66,\"title\":\"Microwave Oven\",\"description\":\"The Microwave Oven is a versatile kitchen appliance for quick and efficient cooking, reheating, and defrosting. Its compact size makes it suitable for various kitchen setups.\",\"category\":\"kitchen-accessories\",\"price\":89.99,\"discountPercentage\":12.13,\"rating\":4.82,\"stock\":59,\"brand\":\"\",\"tags\":[\"kitchen appliances\",\"microwaves\"],\"images\":[\"https://cdn.dummyjson.com/product-images/kitchen-accessories/microwave-oven/1.webp\",\"https://cdn.dummyjson.com/product-images/kitchen-accessories/microwave-oven/2.webp\",\"https://cdn.dummyjson.com/product-images/kitchen-accessories/microwave-oven/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/kitchen-accessories/microwave-oven/thumbnail.webp\"},{\"id\":67,\"title\":\"Mug Tree Stand\",\"description\":\"The Mug Tree Stand is a stylish and space-saving solution for organizing your mugs. Keep your favorite mugs easily accessible and neatly displayed in your kitchen.\",\"category\":\"kitchen-accessories\",\"price\":15.99,\"discountPercentage\":9.25,\"rating\":2.64,\"stock\":88,\"brand\":\"\",\"tags\":[\"kitchen tools\",\"organization\"],\"images\":[\"https://cdn.dummyjson.com/product-images/kitchen-accessories/mug-tree-stand/1.webp\",\"https://cdn.dummyjson.com/product-images/kitchen-accessories/mug-tree-stand/2.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/kitchen-accessories/mug-tree-stand/thumbnail.webp\"},{\"id\":68,\"title\":\"Pan\",\"description\":\"The Pan is a versatile and essential cookware item for frying, sautéing, and cooking various dishes. Its non-stick coating ensures easy food release and cleanup.\",\"category\":\"kitchen-accessories\",\"price\":24.99,\"discountPercentage\":3,\"rating\":2.79,\"stock\":90,\"brand\":\"\",\"tags\":[\"cookware\",\"pans\"],\"images\":[\"https://cdn.dummyjson.com/product-images/kitchen-accessories/pan/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/kitchen-accessories/pan/thumbnail.webp\"},{\"id\":69,\"title\":\"Plate\",\"description\":\"The Plate is a classic and essential dishware item for serving meals. Its durable and stylish design makes it suitable for everyday use or special occasions.\",\"category\":\"kitchen-accessories\",\"price\":3.99,\"discountPercentage\":7.31,\"rating\":3.65,\"stock\":66,\"brand\":\"\",\"tags\":[\"dinnerware\",\"plates\"],\"images\":[\"https://cdn.dummyjson.com/product-images/kitchen-accessories/plate/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/kitchen-accessories/plate/thumbnail.webp\"},{\"id\":70,\"title\":\"Red Tongs\",\"description\":\"The Red Tongs are versatile kitchen tongs suitable for various cooking and serving tasks. Their vibrant color adds a pop of excitement to your kitchen utensils.\",\"category\":\"kitchen-accessories\",\"price\":6.99,\"discountPercentage\":14.52,\"rating\":4.42,\"stock\":82,\"brand\":\"\",\"tags\":[\"kitchen tools\",\"tongs\"],\"images\":[\"https://cdn.dummyjson.com/product-images/kitchen-accessories/red-tongs/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/kitchen-accessories/red-tongs/thumbnail.webp\"},{\"id\":71,\"title\":\"Silver Pot With Glass Cap\",\"description\":\"The Silver Pot with Glass Cap is a stylish and functional cookware item for boiling, simmering, and preparing delicious meals. Its glass cap allows you to monitor cooking progress.\",\"category\":\"kitchen-accessories\",\"price\":39.99,\"discountPercentage\":5.7,\"rating\":3.22,\"stock\":40,\"brand\":\"\",\"tags\":[\"cookware\",\"pots\"],\"images\":[\"https://cdn.dummyjson.com/product-images/kitchen-accessories/silver-pot-with-glass-cap/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/kitchen-accessories/silver-pot-with-glass-cap/thumbnail.webp\"},{\"id\":72,\"title\":\"Slotted Turner\",\"description\":\"The Slotted Turner is a kitchen utensil designed for flipping and turning food items. Its slotted design allows excess liquid to drain, making it ideal for frying and sautéing.\",\"category\":\"kitchen-accessories\",\"price\":8.99,\"discountPercentage\":13.35,\"rating\":3.4,\"stock\":88,\"brand\":\"\",\"tags\":[\"kitchen tools\",\"turners\"],\"images\":[\"https://cdn.dummyjson.com/product-images/kitchen-accessories/slotted-turner/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/kitchen-accessories/slotted-turner/thumbnail.webp\"},{\"id\":73,\"title\":\"Spice Rack\",\"description\":\"The Spice Rack is a convenient organizer for your spices and seasonings. Keep your kitchen essentials within reach and neatly arranged with this stylish spice rack.\",\"category\":\"kitchen-accessories\",\"price\":19.99,\"discountPercentage\":12.09,\"rating\":4.87,\"stock\":79,\"brand\":\"\",\"tags\":[\"kitchen tools\",\"organization\"],\"images\":[\"https://cdn.dummyjson.com/product-images/kitchen-accessories/spice-rack/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/kitchen-accessories/spice-rack/thumbnail.webp\"},{\"id\":74,\"title\":\"Spoon\",\"description\":\"The Spoon is a versatile kitchen utensil for stirring, serving, and tasting. Its ergonomic design and durable construction make it an essential tool for every kitchen.\",\"category\":\"kitchen-accessories\",\"price\":4.99,\"discountPercentage\":1.53,\"rating\":4.03,\"stock\":59,\"brand\":\"\",\"tags\":[\"kitchen tools\",\"utensils\"],\"images\":[\"https://cdn.dummyjson.com/product-images/kitchen-accessories/spoon/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/kitchen-accessories/spoon/thumbnail.webp\"},{\"id\":75,\"title\":\"Tray\",\"description\":\"The Tray is a functional and decorative item for serving snacks, appetizers, or drinks. Its stylish design makes it a versatile accessory for entertaining guests.\",\"category\":\"kitchen-accessories\",\"price\":16.99,\"discountPercentage\":7.48,\"rating\":4.62,\"stock\":71,\"brand\":\"\",\"tags\":[\"serveware\",\"trays\"],\"images\":[\"https://cdn.dummyjson.com/product-images/kitchen-accessories/tray/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/kitchen-accessories/tray/thumbnail.webp\"},{\"id\":76,\"title\":\"Wooden Rolling Pin\",\"description\":\"The Wooden Rolling Pin is a classic kitchen tool for rolling out dough for baking. Its smooth surface and sturdy handles make it easy to achieve uniform thickness.\",\"category\":\"kitchen-accessories\",\"price\":11.99,\"discountPercentage\":9.75,\"rating\":2.92,\"stock\":80,\"brand\":\"\",\"tags\":[\"kitchen tools\",\"baking\"],\"images\":[\"https://cdn.dummyjson.com/product-images/kitchen-accessories/wooden-rolling-pin/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/kitchen-accessories/wooden-rolling-pin/thumbnail.webp\"},{\"id\":77,\"title\":\"Yellow Peeler\",\"description\":\"The Yellow Peeler is a handy tool for peeling fruits and vegetables with ease. Its bright yellow color adds a cheerful touch to your kitchen gadgets.\",\"category\":\"kitchen-accessories\",\"price\":5.99,\"discountPercentage\":12.48,\"rating\":4.24,\"stock\":35,\"brand\":\"\",\"tags\":[\"kitchen tools\",\"peelers\"],\"images\":[\"https://cdn.dummyjson.com/product-images/kitchen-accessories/yellow-peeler/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/kitchen-accessories/yellow-peeler/thumbnail.webp\"},{\"id\":78,\"title\":\"Apple MacBook Pro 14 Inch Space Grey\",\"description\":\"The MacBook Pro 14 Inch in Space Grey is a powerful and sleek laptop, featuring Apple's M1 Pro chip for exceptional performance and a stunning Retina display.\",\"category\":\"laptops\",\"price\":1999.99,\"discountPercentage\":4.69,\"rating\":3.65,\"stock\":24,\"brand\":\"Apple\",\"tags\":[\"laptops\",\"apple\"],\"images\":[\"https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/1.webp\",\"https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/2.webp\",\"https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/thumbnail.webp\"},{\"id\":79,\"title\":\"Asus Zenbook Pro Dual Screen Laptop\",\"description\":\"The Asus Zenbook Pro Dual Screen Laptop is a high-performance device with dual screens, providing productivity and versatility for creative professionals.\",\"category\":\"laptops\",\"price\":1799.99,\"discountPercentage\":11.14,\"rating\":3.95,\"stock\":45,\"brand\":\"Asus\",\"tags\":[\"laptops\"],\"images\":[\"https://cdn.dummyjson.com/product-images/laptops/asus-zenbook-pro-dual-screen-laptop/1.webp\",\"https://cdn.dummyjson.com/product-images/laptops/asus-zenbook-pro-dual-screen-laptop/2.webp\",\"https://cdn.dummyjson.com/product-images/laptops/asus-zenbook-pro-dual-screen-laptop/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/laptops/asus-zenbook-pro-dual-screen-laptop/thumbnail.webp\"},{\"id\":80,\"title\":\"Huawei Matebook X Pro\",\"description\":\"The Huawei Matebook X Pro is a slim and stylish laptop with a high-resolution touchscreen display, offering a premium experience for users on the go.\",\"category\":\"laptops\",\"price\":1399.99,\"discountPercentage\":9.38,\"rating\":4.98,\"stock\":75,\"brand\":\"Huawei\",\"tags\":[\"laptops\"],\"images\":[\"https://cdn.dummyjson.com/product-images/laptops/huawei-matebook-x-pro/1.webp\",\"https://cdn.dummyjson.com/product-images/laptops/huawei-matebook-x-pro/2.webp\",\"https://cdn.dummyjson.com/product-images/laptops/huawei-matebook-x-pro/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/laptops/huawei-matebook-x-pro/thumbnail.webp\"},{\"id\":81,\"title\":\"Lenovo Yoga 920\",\"description\":\"The Lenovo Yoga 920 is a 2-in-1 convertible laptop with a flexible hinge, allowing you to use it as a laptop or tablet, offering versatility and portability.\",\"category\":\"laptops\",\"price\":1099.99,\"discountPercentage\":6.55,\"rating\":2.86,\"stock\":40,\"brand\":\"Lenovo\",\"tags\":[\"laptops\"],\"images\":[\"https://cdn.dummyjson.com/product-images/laptops/lenovo-yoga-920/1.webp\",\"https://cdn.dummyjson.com/product-images/laptops/lenovo-yoga-920/2.webp\",\"https://cdn.dummyjson.com/product-images/laptops/lenovo-yoga-920/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/laptops/lenovo-yoga-920/thumbnail.webp\"},{\"id\":82,\"title\":\"New DELL XPS 13 9300 Laptop\",\"description\":\"The New DELL XPS 13 9300 Laptop is a compact and powerful device, featuring a virtually borderless InfinityEdge display and high-end performance for various tasks.\",\"category\":\"laptops\",\"price\":1499.99,\"discountPercentage\":11.89,\"rating\":2.67,\"stock\":74,\"brand\":\"Dell\",\"tags\":[\"laptops\"],\"images\":[\"https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/1.webp\",\"https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/2.webp\",\"https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/thumbnail.webp\"},{\"id\":83,\"title\":\"Blue & Black Check Shirt\",\"description\":\"The Blue & Black Check Shirt is a stylish and comfortable men's shirt featuring a classic check pattern. Made from high-quality fabric, it's suitable for both casual and semi-formal occasions.\",\"category\":\"mens-shirts\",\"price\":29.99,\"discountPercentage\":15.35,\"rating\":3.64,\"stock\":38,\"brand\":\"Fashion Trends\",\"tags\":[\"clothing\",\"men's shirts\"],\"images\":[\"https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/1.webp\",\"https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/2.webp\",\"https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/thumbnail.webp\"},{\"id\":84,\"title\":\"Gigabyte Aorus Men Tshirt\",\"description\":\"The Gigabyte Aorus Men Tshirt is a cool and casual shirt for gaming enthusiasts. With the Aorus logo and sleek design, it's perfect for expressing your gaming style.\",\"category\":\"mens-shirts\",\"price\":24.99,\"discountPercentage\":0.94,\"rating\":3.18,\"stock\":90,\"brand\":\"Gigabyte\",\"tags\":[\"clothing\",\"men's t-shirts\"],\"images\":[\"https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/1.webp\",\"https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/2.webp\",\"https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/thumbnail.webp\"},{\"id\":85,\"title\":\"Man Plaid Shirt\",\"description\":\"The Man Plaid Shirt is a timeless and versatile men's shirt with a classic plaid pattern. Its comfortable fit and casual style make it a wardrobe essential for various occasions.\",\"category\":\"mens-shirts\",\"price\":34.99,\"discountPercentage\":19.5,\"rating\":3.46,\"stock\":82,\"brand\":\"Classic Wear\",\"tags\":[\"clothing\",\"men's shirts\"],\"images\":[\"https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/1.webp\",\"https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/2.webp\",\"https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/thumbnail.webp\"},{\"id\":86,\"title\":\"Man Short Sleeve Shirt\",\"description\":\"The Man Short Sleeve Shirt is a breezy and stylish option for warm days. With a comfortable fit and short sleeves, it's perfect for a laid-back yet polished look.\",\"category\":\"mens-shirts\",\"price\":19.99,\"discountPercentage\":6.83,\"rating\":2.9,\"stock\":2,\"brand\":\"Casual Comfort\",\"tags\":[\"clothing\",\"men's shirts\"],\"images\":[\"https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/1.webp\",\"https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/2.webp\",\"https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/thumbnail.webp\"},{\"id\":87,\"title\":\"Men Check Shirt\",\"description\":\"The Men Check Shirt is a classic and versatile shirt featuring a stylish check pattern. Suitable for various occasions, it adds a smart and polished touch to your wardrobe.\",\"category\":\"mens-shirts\",\"price\":27.99,\"discountPercentage\":11.38,\"rating\":2.72,\"stock\":95,\"brand\":\"Urban Chic\",\"tags\":[\"clothing\",\"men's shirts\"],\"images\":[\"https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/1.webp\",\"https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/2.webp\",\"https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/thumbnail.webp\"},{\"id\":88,\"title\":\"Nike Air Jordan 1 Red And Black\",\"description\":\"The Nike Air Jordan 1 in Red and Black is an iconic basketball sneaker known for its stylish design and high-performance features, making it a favorite among sneaker enthusiasts and athletes.\",\"category\":\"mens-shoes\",\"price\":149.99,\"discountPercentage\":4.12,\"rating\":4.77,\"stock\":7,\"brand\":\"Nike\",\"tags\":[\"footwear\",\"athletic shoes\"],\"images\":[\"https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/1.webp\",\"https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/2.webp\",\"https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/thumbnail.webp\"},{\"id\":89,\"title\":\"Nike Baseball Cleats\",\"description\":\"Nike Baseball Cleats are designed for maximum traction and performance on the baseball field. They provide stability and support for players during games and practices.\",\"category\":\"mens-shoes\",\"price\":79.99,\"discountPercentage\":18.04,\"rating\":3.88,\"stock\":12,\"brand\":\"Nike\",\"tags\":[\"footwear\",\"sports cleats\"],\"images\":[\"https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/1.webp\",\"https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/2.webp\",\"https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/thumbnail.webp\"},{\"id\":90,\"title\":\"Puma Future Rider Trainers\",\"description\":\"The Puma Future Rider Trainers offer a blend of retro style and modern comfort. Perfect for casual wear, these trainers provide a fashionable and comfortable option for everyday use.\",\"category\":\"mens-shoes\",\"price\":89.99,\"discountPercentage\":4.2,\"rating\":4.9,\"stock\":90,\"brand\":\"Puma\",\"tags\":[\"footwear\",\"casual shoes\"],\"images\":[\"https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/1.webp\",\"https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/2.webp\",\"https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/thumbnail.webp\"},{\"id\":91,\"title\":\"Sports Sneakers Off White & Red\",\"description\":\"The Sports Sneakers in Off White and Red combine style and functionality, making them a fashionable choice for sports enthusiasts. The red and off-white color combination adds a bold and energetic touch.\",\"category\":\"mens-shoes\",\"price\":119.99,\"discountPercentage\":4.97,\"rating\":4.77,\"stock\":17,\"brand\":\"Off White\",\"tags\":[\"footwear\",\"athletic shoes\"],\"images\":[\"https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/1.webp\",\"https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/2.webp\",\"https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/thumbnail.webp\"},{\"id\":92,\"title\":\"Sports Sneakers Off White Red\",\"description\":\"Another variant of the Sports Sneakers in Off White Red, featuring a unique design. These sneakers offer style and comfort for casual occasions.\",\"category\":\"mens-shoes\",\"price\":109.99,\"discountPercentage\":0.04,\"rating\":4.69,\"stock\":62,\"brand\":\"Off White\",\"tags\":[\"footwear\",\"casual shoes\"],\"images\":[\"https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/1.webp\",\"https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/2.webp\",\"https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/thumbnail.webp\"},{\"id\":93,\"title\":\"Brown Leather Belt Watch\",\"description\":\"The Brown Leather Belt Watch is a stylish timepiece with a classic design. Featuring a genuine leather strap and a sleek dial, it adds a touch of sophistication to your look.\",\"category\":\"mens-watches\",\"price\":89.99,\"discountPercentage\":5.99,\"rating\":4.19,\"stock\":32,\"brand\":\"Fashion Timepieces\",\"tags\":[\"watches\",\"leather watches\"],\"images\":[\"https://cdn.dummyjson.com/product-images/mens-watches/brown-leather-belt-watch/1.webp\",\"https://cdn.dummyjson.com/product-images/mens-watches/brown-leather-belt-watch/2.webp\",\"https://cdn.dummyjson.com/product-images/mens-watches/brown-leather-belt-watch/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/mens-watches/brown-leather-belt-watch/thumbnail.webp\"},{\"id\":94,\"title\":\"Longines Master Collection\",\"description\":\"The Longines Master Collection is an elegant and refined watch known for its precision and craftsmanship. With a timeless design, it's a symbol of luxury and sophistication.\",\"category\":\"mens-watches\",\"price\":1499.99,\"discountPercentage\":17.24,\"rating\":3.87,\"stock\":100,\"brand\":\"Longines\",\"tags\":[\"watches\",\"luxury watches\"],\"images\":[\"https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/1.webp\",\"https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/2.webp\",\"https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/thumbnail.webp\"},{\"id\":95,\"title\":\"Rolex Cellini Date Black Dial\",\"description\":\"The Rolex Cellini Date with Black Dial is a classic and prestigious watch. With a black dial and date complication, it exudes sophistication and is a symbol of Rolex's heritage.\",\"category\":\"mens-watches\",\"price\":8999.99,\"discountPercentage\":8.88,\"rating\":4.97,\"stock\":40,\"brand\":\"Rolex\",\"tags\":[\"watches\",\"luxury watches\"],\"images\":[\"https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-date-black-dial/1.webp\",\"https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-date-black-dial/2.webp\",\"https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-date-black-dial/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-date-black-dial/thumbnail.webp\"},{\"id\":96,\"title\":\"Rolex Cellini Moonphase\",\"description\":\"The Rolex Cellini Moonphase is a masterpiece of horology, featuring a moon phase complication and exquisite design. It reflects Rolex's commitment to precision and elegance.\",\"category\":\"mens-watches\",\"price\":12999.99,\"discountPercentage\":17.52,\"rating\":2.58,\"stock\":36,\"brand\":\"Rolex\",\"tags\":[\"watches\",\"luxury watches\"],\"images\":[\"https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-moonphase/1.webp\",\"https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-moonphase/2.webp\",\"https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-moonphase/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-moonphase/thumbnail.webp\"},{\"id\":97,\"title\":\"Rolex Datejust\",\"description\":\"The Rolex Datejust is an iconic and versatile timepiece with a date window. Known for its timeless design and reliability, it's a symbol of Rolex's watchmaking excellence.\",\"category\":\"mens-watches\",\"price\":10999.99,\"discountPercentage\":3.73,\"rating\":3.66,\"stock\":86,\"brand\":\"Rolex\",\"tags\":[\"watches\",\"luxury watches\"],\"images\":[\"https://cdn.dummyjson.com/product-images/mens-watches/rolex-datejust/1.webp\",\"https://cdn.dummyjson.com/product-images/mens-watches/rolex-datejust/2.webp\",\"https://cdn.dummyjson.com/product-images/mens-watches/rolex-datejust/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/mens-watches/rolex-datejust/thumbnail.webp\"},{\"id\":98,\"title\":\"Rolex Submariner Watch\",\"description\":\"The Rolex Submariner is a legendary dive watch with a rich history. Known for its durability and water resistance, it's a symbol of adventure and exploration.\",\"category\":\"mens-watches\",\"price\":13999.99,\"discountPercentage\":5.05,\"rating\":2.69,\"stock\":55,\"brand\":\"Rolex\",\"tags\":[\"watches\",\"luxury watches\"],\"images\":[\"https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/1.webp\",\"https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/2.webp\",\"https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/thumbnail.webp\"},{\"id\":99,\"title\":\"Amazon Echo Plus\",\"description\":\"The Amazon Echo Plus is a smart speaker with built-in Alexa voice control. It features premium sound quality and serves as a hub for controlling smart home devices.\",\"category\":\"mobile-accessories\",\"price\":99.99,\"discountPercentage\":12.07,\"rating\":4.99,\"stock\":61,\"brand\":\"Amazon\",\"tags\":[\"electronics\",\"smart speakers\"],\"images\":[\"https://cdn.dummyjson.com/product-images/mobile-accessories/amazon-echo-plus/1.webp\",\"https://cdn.dummyjson.com/product-images/mobile-accessories/amazon-echo-plus/2.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/mobile-accessories/amazon-echo-plus/thumbnail.webp\"},{\"id\":100,\"title\":\"Apple Airpods\",\"description\":\"The Apple Airpods offer a seamless wireless audio experience. With easy pairing, high-quality sound, and Siri integration, they are perfect for on-the-go listening.\",\"category\":\"mobile-accessories\",\"price\":129.99,\"discountPercentage\":15.54,\"rating\":4.15,\"stock\":67,\"brand\":\"Apple\",\"tags\":[\"electronics\",\"wireless earphones\"],\"images\":[\"https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/1.webp\",\"https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/2.webp\",\"https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/thumbnail.webp\"},{\"id\":101,\"title\":\"Apple AirPods Max Silver\",\"description\":\"The Apple AirPods Max in Silver are premium over-ear headphones with high-fidelity audio, adaptive EQ, and active noise cancellation. Experience immersive sound in style.\",\"category\":\"mobile-accessories\",\"price\":549.99,\"discountPercentage\":13.67,\"rating\":3.47,\"stock\":59,\"brand\":\"Apple\",\"tags\":[\"electronics\",\"over-ear headphones\"],\"images\":[\"https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/thumbnail.webp\"},{\"id\":102,\"title\":\"Apple Airpower Wireless Charger\",\"description\":\"The Apple AirPower Wireless Charger provides a convenient way to charge your compatible Apple devices wirelessly. Simply place your devices on the charging mat for effortless charging.\",\"category\":\"mobile-accessories\",\"price\":79.99,\"discountPercentage\":4.48,\"rating\":3.68,\"stock\":1,\"brand\":\"Apple\",\"tags\":[\"electronics\",\"wireless chargers\"],\"images\":[\"https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpower-wireless-charger/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpower-wireless-charger/thumbnail.webp\"},{\"id\":103,\"title\":\"Apple HomePod Mini Cosmic Grey\",\"description\":\"The Apple HomePod Mini in Cosmic Grey is a compact smart speaker that delivers impressive audio and integrates seamlessly with the Apple ecosystem for a smart home experience.\",\"category\":\"mobile-accessories\",\"price\":99.99,\"discountPercentage\":18.1,\"rating\":4.62,\"stock\":27,\"brand\":\"Apple\",\"tags\":[\"electronics\",\"smart speakers\"],\"images\":[\"https://cdn.dummyjson.com/product-images/mobile-accessories/apple-homepod-mini-cosmic-grey/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/mobile-accessories/apple-homepod-mini-cosmic-grey/thumbnail.webp\"},{\"id\":104,\"title\":\"Apple iPhone Charger\",\"description\":\"The Apple iPhone Charger is a high-quality charger designed for fast and efficient charging of your iPhone. Ensure your device stays powered up and ready to go.\",\"category\":\"mobile-accessories\",\"price\":19.99,\"discountPercentage\":18.52,\"rating\":4.15,\"stock\":31,\"brand\":\"Apple\",\"tags\":[\"electronics\",\"chargers\"],\"images\":[\"https://cdn.dummyjson.com/product-images/mobile-accessories/apple-iphone-charger/1.webp\",\"https://cdn.dummyjson.com/product-images/mobile-accessories/apple-iphone-charger/2.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/mobile-accessories/apple-iphone-charger/thumbnail.webp\"},{\"id\":105,\"title\":\"Apple MagSafe Battery Pack\",\"description\":\"The Apple MagSafe Battery Pack is a portable and convenient way to add extra battery life to your MagSafe-compatible iPhone. Attach it magnetically for a secure connection.\",\"category\":\"mobile-accessories\",\"price\":99.99,\"discountPercentage\":17.17,\"rating\":3.62,\"stock\":1,\"brand\":\"Apple\",\"tags\":[\"electronics\",\"power banks\"],\"images\":[\"https://cdn.dummyjson.com/product-images/mobile-accessories/apple-magsafe-battery-pack/1.webp\",\"https://cdn.dummyjson.com/product-images/mobile-accessories/apple-magsafe-battery-pack/2.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/mobile-accessories/apple-magsafe-battery-pack/thumbnail.webp\"},{\"id\":106,\"title\":\"Apple Watch Series 4 Gold\",\"description\":\"The Apple Watch Series 4 in Gold is a stylish and advanced smartwatch with features like heart rate monitoring, fitness tracking, and a beautiful Retina display.\",\"category\":\"mobile-accessories\",\"price\":349.99,\"discountPercentage\":12.02,\"rating\":2.74,\"stock\":33,\"brand\":\"Apple\",\"tags\":[\"electronics\",\"smartwatches\"],\"images\":[\"https://cdn.dummyjson.com/product-images/mobile-accessories/apple-watch-series-4-gold/1.webp\",\"https://cdn.dummyjson.com/product-images/mobile-accessories/apple-watch-series-4-gold/2.webp\",\"https://cdn.dummyjson.com/product-images/mobile-accessories/apple-watch-series-4-gold/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/mobile-accessories/apple-watch-series-4-gold/thumbnail.webp\"},{\"id\":107,\"title\":\"Beats Flex Wireless Earphones\",\"description\":\"The Beats Flex Wireless Earphones offer a comfortable and versatile audio experience. With magnetic earbuds and up to 12 hours of battery life, they are ideal for everyday use.\",\"category\":\"mobile-accessories\",\"price\":49.99,\"discountPercentage\":5.73,\"rating\":4.24,\"stock\":50,\"brand\":\"Beats\",\"tags\":[\"electronics\",\"wireless earphones\"],\"images\":[\"https://cdn.dummyjson.com/product-images/mobile-accessories/beats-flex-wireless-earphones/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/mobile-accessories/beats-flex-wireless-earphones/thumbnail.webp\"},{\"id\":108,\"title\":\"iPhone 12 Silicone Case with MagSafe Plum\",\"description\":\"The iPhone 12 Silicone Case with MagSafe in Plum is a stylish and protective case designed for the iPhone 12. It features MagSafe technology for easy attachment of accessories.\",\"category\":\"mobile-accessories\",\"price\":29.99,\"discountPercentage\":13.85,\"rating\":3.62,\"stock\":69,\"brand\":\"Apple\",\"tags\":[\"electronics\",\"phone accessories\"],\"images\":[\"https://cdn.dummyjson.com/product-images/mobile-accessories/iphone-12-silicone-case-with-magsafe-plum/1.webp\",\"https://cdn.dummyjson.com/product-images/mobile-accessories/iphone-12-silicone-case-with-magsafe-plum/2.webp\",\"https://cdn.dummyjson.com/product-images/mobile-accessories/iphone-12-silicone-case-with-magsafe-plum/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/mobile-accessories/iphone-12-silicone-case-with-magsafe-plum/thumbnail.webp\"},{\"id\":109,\"title\":\"Monopod\",\"description\":\"The Monopod is a versatile camera accessory for stable and adjustable shooting. Perfect for capturing selfies, group photos, and videos with ease.\",\"category\":\"mobile-accessories\",\"price\":19.99,\"discountPercentage\":8.58,\"rating\":4.43,\"stock\":48,\"brand\":\"TechGear\",\"tags\":[\"electronics\",\"camera accessories\"],\"images\":[\"https://cdn.dummyjson.com/product-images/mobile-accessories/monopod/1.webp\",\"https://cdn.dummyjson.com/product-images/mobile-accessories/monopod/2.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/mobile-accessories/monopod/thumbnail.webp\"},{\"id\":110,\"title\":\"Selfie Lamp with iPhone\",\"description\":\"The Selfie Lamp with iPhone is a portable and adjustable LED light designed to enhance your selfies and video calls. Attach it to your iPhone for well-lit photos.\",\"category\":\"mobile-accessories\",\"price\":14.99,\"discountPercentage\":19.4,\"rating\":3.55,\"stock\":58,\"brand\":\"GadgetMaster\",\"tags\":[\"electronics\",\"selfie accessories\"],\"images\":[\"https://cdn.dummyjson.com/product-images/mobile-accessories/selfie-lamp-with-iphone/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/mobile-accessories/selfie-lamp-with-iphone/thumbnail.webp\"},{\"id\":111,\"title\":\"Selfie Stick Monopod\",\"description\":\"The Selfie Stick Monopod is a extendable and foldable device for capturing the perfect selfie or group photo. Compatible with smartphones and cameras.\",\"category\":\"mobile-accessories\",\"price\":12.99,\"discountPercentage\":19.12,\"rating\":3.88,\"stock\":11,\"brand\":\"SnapTech\",\"tags\":[\"electronics\",\"selfie accessories\"],\"images\":[\"https://cdn.dummyjson.com/product-images/mobile-accessories/selfie-stick-monopod/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/mobile-accessories/selfie-stick-monopod/thumbnail.webp\"},{\"id\":112,\"title\":\"TV Studio Camera Pedestal\",\"description\":\"The TV Studio Camera Pedestal is a professional-grade camera support system for smooth and precise camera movements in a studio setting. Ideal for broadcast and production.\",\"category\":\"mobile-accessories\",\"price\":499.99,\"discountPercentage\":8.31,\"rating\":2.78,\"stock\":15,\"brand\":\"ProVision\",\"tags\":[\"electronics\",\"camera accessories\"],\"images\":[\"https://cdn.dummyjson.com/product-images/mobile-accessories/tv-studio-camera-pedestal/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/mobile-accessories/tv-studio-camera-pedestal/thumbnail.webp\"},{\"id\":113,\"title\":\"Generic Motorcycle\",\"description\":\"The Generic Motorcycle is a versatile and reliable bike suitable for various riding preferences. With a balanced design, it provides a comfortable and efficient riding experience.\",\"category\":\"motorcycle\",\"price\":3999.99,\"discountPercentage\":12.1,\"rating\":4.91,\"stock\":34,\"brand\":\"Generic Motors\",\"tags\":[\"motorcycles\"],\"images\":[\"https://cdn.dummyjson.com/product-images/motorcycle/generic-motorcycle/1.webp\",\"https://cdn.dummyjson.com/product-images/motorcycle/generic-motorcycle/2.webp\",\"https://cdn.dummyjson.com/product-images/motorcycle/generic-motorcycle/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/motorcycle/generic-motorcycle/thumbnail.webp\"},{\"id\":114,\"title\":\"Kawasaki Z800\",\"description\":\"The Kawasaki Z800 is a powerful and agile sportbike known for its striking design and performance. It's equipped with advanced features, making it a favorite among motorcycle enthusiasts.\",\"category\":\"motorcycle\",\"price\":8999.99,\"discountPercentage\":9.77,\"rating\":3.98,\"stock\":52,\"brand\":\"Kawasaki\",\"tags\":[\"motorcycles\",\"sportbikes\"],\"images\":[\"https://cdn.dummyjson.com/product-images/motorcycle/kawasaki-z800/1.webp\",\"https://cdn.dummyjson.com/product-images/motorcycle/kawasaki-z800/2.webp\",\"https://cdn.dummyjson.com/product-images/motorcycle/kawasaki-z800/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/motorcycle/kawasaki-z800/thumbnail.webp\"},{\"id\":115,\"title\":\"MotoGP CI.H1\",\"description\":\"The MotoGP CI.H1 is a high-performance motorcycle inspired by MotoGP racing technology. It offers cutting-edge features and precision engineering for an exhilarating riding experience.\",\"category\":\"motorcycle\",\"price\":14999.99,\"discountPercentage\":6.92,\"rating\":2.97,\"stock\":10,\"brand\":\"MotoGP\",\"tags\":[\"motorcycles\",\"sportbikes\"],\"images\":[\"https://cdn.dummyjson.com/product-images/motorcycle/motogp-ci.h1/1.webp\",\"https://cdn.dummyjson.com/product-images/motorcycle/motogp-ci.h1/2.webp\",\"https://cdn.dummyjson.com/product-images/motorcycle/motogp-ci.h1/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/motorcycle/motogp-ci.h1/thumbnail.webp\"},{\"id\":116,\"title\":\"Scooter Motorcycle\",\"description\":\"The Scooter Motorcycle is a practical and fuel-efficient bike ideal for urban commuting. It features a step-through design and user-friendly controls for easy maneuverability.\",\"category\":\"motorcycle\",\"price\":2999.99,\"discountPercentage\":6.27,\"rating\":2.53,\"stock\":84,\"brand\":\"ScootMaster\",\"tags\":[\"motorcycles\",\"scooters\"],\"images\":[\"https://cdn.dummyjson.com/product-images/motorcycle/scooter-motorcycle/1.webp\",\"https://cdn.dummyjson.com/product-images/motorcycle/scooter-motorcycle/2.webp\",\"https://cdn.dummyjson.com/product-images/motorcycle/scooter-motorcycle/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/motorcycle/scooter-motorcycle/thumbnail.webp\"},{\"id\":117,\"title\":\"Sportbike Motorcycle\",\"description\":\"The Sportbike Motorcycle is designed for speed and agility, with a sleek and aerodynamic profile. It's suitable for riders looking for a dynamic and thrilling riding experience.\",\"category\":\"motorcycle\",\"price\":7499.99,\"discountPercentage\":11.58,\"rating\":3.94,\"stock\":0,\"brand\":\"SpeedMaster\",\"tags\":[\"motorcycles\",\"sportbikes\"],\"images\":[\"https://cdn.dummyjson.com/product-images/motorcycle/sportbike-motorcycle/1.webp\",\"https://cdn.dummyjson.com/product-images/motorcycle/sportbike-motorcycle/2.webp\",\"https://cdn.dummyjson.com/product-images/motorcycle/sportbike-motorcycle/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/motorcycle/sportbike-motorcycle/thumbnail.webp\"},{\"id\":118,\"title\":\"Attitude Super Leaves Hand Soap\",\"description\":\"Attitude Super Leaves Hand Soap is a natural and nourishing hand soap enriched with the goodness of super leaves. It cleanses and moisturizes your hands, leaving them feeling fresh and soft.\",\"category\":\"skin-care\",\"price\":8.99,\"discountPercentage\":18.49,\"rating\":3.19,\"stock\":94,\"brand\":\"Attitude\",\"tags\":[\"personal care\",\"hand soap\"],\"images\":[\"https://cdn.dummyjson.com/product-images/skin-care/attitude-super-leaves-hand-soap/1.webp\",\"https://cdn.dummyjson.com/product-images/skin-care/attitude-super-leaves-hand-soap/2.webp\",\"https://cdn.dummyjson.com/product-images/skin-care/attitude-super-leaves-hand-soap/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/skin-care/attitude-super-leaves-hand-soap/thumbnail.webp\"},{\"id\":119,\"title\":\"Olay Ultra Moisture Shea Butter Body Wash\",\"description\":\"Olay Ultra Moisture Shea Butter Body Wash is a luxurious body wash that hydrates and nourishes your skin with the moisturizing power of shea butter. Enjoy a rich lather and silky-smooth skin.\",\"category\":\"skin-care\",\"price\":12.99,\"discountPercentage\":16.39,\"rating\":4.51,\"stock\":34,\"brand\":\"Olay\",\"tags\":[\"personal care\",\"body wash\"],\"images\":[\"https://cdn.dummyjson.com/product-images/skin-care/olay-ultra-moisture-shea-butter-body-wash/1.webp\",\"https://cdn.dummyjson.com/product-images/skin-care/olay-ultra-moisture-shea-butter-body-wash/2.webp\",\"https://cdn.dummyjson.com/product-images/skin-care/olay-ultra-moisture-shea-butter-body-wash/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/skin-care/olay-ultra-moisture-shea-butter-body-wash/thumbnail.webp\"},{\"id\":120,\"title\":\"Vaseline Men Body and Face Lotion\",\"description\":\"Vaseline Men Body and Face Lotion is a specially formulated lotion designed to provide long-lasting moisture to men's skin. It absorbs quickly and helps keep the skin hydrated and healthy.\",\"category\":\"skin-care\",\"price\":9.99,\"discountPercentage\":13.39,\"rating\":3.16,\"stock\":95,\"brand\":\"Vaseline\",\"tags\":[\"personal care\",\"body lotion\"],\"images\":[\"https://cdn.dummyjson.com/product-images/skin-care/vaseline-men-body-and-face-lotion/1.webp\",\"https://cdn.dummyjson.com/product-images/skin-care/vaseline-men-body-and-face-lotion/2.webp\",\"https://cdn.dummyjson.com/product-images/skin-care/vaseline-men-body-and-face-lotion/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/skin-care/vaseline-men-body-and-face-lotion/thumbnail.webp\"},{\"id\":121,\"title\":\"iPhone 5s\",\"description\":\"The iPhone 5s is a classic smartphone known for its compact design and advanced features during its release. While it's an older model, it still provides a reliable user experience.\",\"category\":\"smartphones\",\"price\":199.99,\"discountPercentage\":12.91,\"rating\":2.83,\"stock\":25,\"brand\":\"Apple\",\"tags\":[\"smartphones\",\"apple\"],\"images\":[\"https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/1.webp\",\"https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/2.webp\",\"https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/thumbnail.webp\"},{\"id\":122,\"title\":\"iPhone 6\",\"description\":\"The iPhone 6 is a stylish and capable smartphone with a larger display and improved performance. It introduced new features and design elements, making it a popular choice in its time.\",\"category\":\"smartphones\",\"price\":299.99,\"discountPercentage\":6.69,\"rating\":3.41,\"stock\":60,\"brand\":\"Apple\",\"tags\":[\"smartphones\",\"apple\"],\"images\":[\"https://cdn.dummyjson.com/product-images/smartphones/iphone-6/1.webp\",\"https://cdn.dummyjson.com/product-images/smartphones/iphone-6/2.webp\",\"https://cdn.dummyjson.com/product-images/smartphones/iphone-6/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/smartphones/iphone-6/thumbnail.webp\"},{\"id\":123,\"title\":\"iPhone 13 Pro\",\"description\":\"The iPhone 13 Pro is a cutting-edge smartphone with a powerful camera system, high-performance chip, and stunning display. It offers advanced features for users who demand top-notch technology.\",\"category\":\"smartphones\",\"price\":1099.99,\"discountPercentage\":9.37,\"rating\":4.12,\"stock\":56,\"brand\":\"Apple\",\"tags\":[\"smartphones\",\"apple\"],\"images\":[\"https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/1.webp\",\"https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/2.webp\",\"https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/thumbnail.webp\"},{\"id\":124,\"title\":\"iPhone X\",\"description\":\"The iPhone X is a flagship smartphone featuring a bezel-less OLED display, facial recognition technology (Face ID), and impressive performance. It represents a milestone in iPhone design and innovation.\",\"category\":\"smartphones\",\"price\":899.99,\"discountPercentage\":19.59,\"rating\":2.51,\"stock\":37,\"brand\":\"Apple\",\"tags\":[\"smartphones\",\"apple\"],\"images\":[\"https://cdn.dummyjson.com/product-images/smartphones/iphone-x/1.webp\",\"https://cdn.dummyjson.com/product-images/smartphones/iphone-x/2.webp\",\"https://cdn.dummyjson.com/product-images/smartphones/iphone-x/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/smartphones/iphone-x/thumbnail.webp\"},{\"id\":125,\"title\":\"Oppo A57\",\"description\":\"The Oppo A57 is a mid-range smartphone known for its sleek design and capable features. It offers a balance of performance and affordability, making it a popular choice.\",\"category\":\"smartphones\",\"price\":249.99,\"discountPercentage\":2.43,\"rating\":3.94,\"stock\":19,\"brand\":\"Oppo\",\"tags\":[\"smartphones\",\"oppo\"],\"images\":[\"https://cdn.dummyjson.com/product-images/smartphones/oppo-a57/1.webp\",\"https://cdn.dummyjson.com/product-images/smartphones/oppo-a57/2.webp\",\"https://cdn.dummyjson.com/product-images/smartphones/oppo-a57/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/smartphones/oppo-a57/thumbnail.webp\"},{\"id\":126,\"title\":\"Oppo F19 Pro Plus\",\"description\":\"The Oppo F19 Pro Plus is a feature-rich smartphone with a focus on camera capabilities. It boasts advanced photography features and a powerful performance for a premium user experience.\",\"category\":\"smartphones\",\"price\":399.99,\"discountPercentage\":18.64,\"rating\":3.51,\"stock\":78,\"brand\":\"Oppo\",\"tags\":[\"smartphones\",\"oppo\"],\"images\":[\"https://cdn.dummyjson.com/product-images/smartphones/oppo-f19-pro-plus/1.webp\",\"https://cdn.dummyjson.com/product-images/smartphones/oppo-f19-pro-plus/2.webp\",\"https://cdn.dummyjson.com/product-images/smartphones/oppo-f19-pro-plus/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/smartphones/oppo-f19-pro-plus/thumbnail.webp\"},{\"id\":127,\"title\":\"Oppo K1\",\"description\":\"The Oppo K1 series offers a range of smartphones with various features and specifications. Known for their stylish design and reliable performance, the Oppo K1 series caters to diverse user preferences.\",\"category\":\"smartphones\",\"price\":299.99,\"discountPercentage\":18.29,\"rating\":4.25,\"stock\":55,\"brand\":\"Oppo\",\"tags\":[\"smartphones\",\"oppo\"],\"images\":[\"https://cdn.dummyjson.com/product-images/smartphones/oppo-k1/1.webp\",\"https://cdn.dummyjson.com/product-images/smartphones/oppo-k1/2.webp\",\"https://cdn.dummyjson.com/product-images/smartphones/oppo-k1/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/smartphones/oppo-k1/thumbnail.webp\"},{\"id\":128,\"title\":\"Realme C35\",\"description\":\"The Realme C35 is a budget-friendly smartphone with a focus on providing essential features for everyday use. It offers a reliable performance and user-friendly experience.\",\"category\":\"smartphones\",\"price\":149.99,\"discountPercentage\":15.3,\"rating\":4.2,\"stock\":48,\"brand\":\"Realme\",\"tags\":[\"smartphones\",\"realme\"],\"images\":[\"https://cdn.dummyjson.com/product-images/smartphones/realme-c35/1.webp\",\"https://cdn.dummyjson.com/product-images/smartphones/realme-c35/2.webp\",\"https://cdn.dummyjson.com/product-images/smartphones/realme-c35/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/smartphones/realme-c35/thumbnail.webp\"},{\"id\":129,\"title\":\"Realme X\",\"description\":\"The Realme X is a mid-range smartphone known for its sleek design and impressive display. It offers a good balance of performance and camera capabilities for users seeking a quality device.\",\"category\":\"smartphones\",\"price\":299.99,\"discountPercentage\":6.95,\"rating\":3.7,\"stock\":12,\"brand\":\"Realme\",\"tags\":[\"smartphones\",\"realme\"],\"images\":[\"https://cdn.dummyjson.com/product-images/smartphones/realme-x/1.webp\",\"https://cdn.dummyjson.com/product-images/smartphones/realme-x/2.webp\",\"https://cdn.dummyjson.com/product-images/smartphones/realme-x/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/smartphones/realme-x/thumbnail.webp\"},{\"id\":130,\"title\":\"Realme XT\",\"description\":\"The Realme XT is a feature-rich smartphone with a focus on camera technology. It comes equipped with advanced camera sensors, delivering high-quality photos and videos for photography enthusiasts.\",\"category\":\"smartphones\",\"price\":349.99,\"discountPercentage\":11.51,\"rating\":4.58,\"stock\":80,\"brand\":\"Realme\",\"tags\":[\"smartphones\",\"realme\"],\"images\":[\"https://cdn.dummyjson.com/product-images/smartphones/realme-xt/1.webp\",\"https://cdn.dummyjson.com/product-images/smartphones/realme-xt/2.webp\",\"https://cdn.dummyjson.com/product-images/smartphones/realme-xt/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/smartphones/realme-xt/thumbnail.webp\"},{\"id\":131,\"title\":\"Samsung Galaxy S7\",\"description\":\"The Samsung Galaxy S7 is a flagship smartphone known for its sleek design and advanced features. It features a high-resolution display, powerful camera, and robust performance.\",\"category\":\"smartphones\",\"price\":299.99,\"discountPercentage\":19.55,\"rating\":3.3,\"stock\":67,\"brand\":\"Samsung\",\"tags\":[\"smartphones\",\"samsung galaxy\"],\"images\":[\"https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s7/1.webp\",\"https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s7/2.webp\",\"https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s7/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s7/thumbnail.webp\"},{\"id\":132,\"title\":\"Samsung Galaxy S8\",\"description\":\"The Samsung Galaxy S8 is a premium smartphone with an Infinity Display, offering a stunning visual experience. It boasts advanced camera capabilities and cutting-edge technology.\",\"category\":\"smartphones\",\"price\":499.99,\"discountPercentage\":19.45,\"rating\":4.4,\"stock\":0,\"brand\":\"Samsung\",\"tags\":[\"smartphones\",\"samsung galaxy\"],\"images\":[\"https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s8/1.webp\",\"https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s8/2.webp\",\"https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s8/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s8/thumbnail.webp\"},{\"id\":133,\"title\":\"Samsung Galaxy S10\",\"description\":\"The Samsung Galaxy S10 is a flagship device featuring a dynamic AMOLED display, versatile camera system, and powerful performance. It represents innovation and excellence in smartphone technology.\",\"category\":\"smartphones\",\"price\":699.99,\"discountPercentage\":5.59,\"rating\":3.06,\"stock\":19,\"brand\":\"Samsung\",\"tags\":[\"smartphones\",\"samsung galaxy\"],\"images\":[\"https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s10/1.webp\",\"https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s10/2.webp\",\"https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s10/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s10/thumbnail.webp\"},{\"id\":134,\"title\":\"Vivo S1\",\"description\":\"The Vivo S1 is a stylish and mid-range smartphone offering a blend of design and performance. It features a vibrant display, capable camera system, and reliable functionality.\",\"category\":\"smartphones\",\"price\":249.99,\"discountPercentage\":10.17,\"rating\":3.5,\"stock\":50,\"brand\":\"Vivo\",\"tags\":[\"smartphones\",\"vivo\"],\"images\":[\"https://cdn.dummyjson.com/product-images/smartphones/vivo-s1/1.webp\",\"https://cdn.dummyjson.com/product-images/smartphones/vivo-s1/2.webp\",\"https://cdn.dummyjson.com/product-images/smartphones/vivo-s1/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/smartphones/vivo-s1/thumbnail.webp\"},{\"id\":135,\"title\":\"Vivo V9\",\"description\":\"The Vivo V9 is a smartphone known for its sleek design and emphasis on capturing high-quality selfies. It features a notch display, dual-camera setup, and a modern design.\",\"category\":\"smartphones\",\"price\":299.99,\"discountPercentage\":17.67,\"rating\":3.6,\"stock\":82,\"brand\":\"Vivo\",\"tags\":[\"smartphones\",\"vivo\"],\"images\":[\"https://cdn.dummyjson.com/product-images/smartphones/vivo-v9/1.webp\",\"https://cdn.dummyjson.com/product-images/smartphones/vivo-v9/2.webp\",\"https://cdn.dummyjson.com/product-images/smartphones/vivo-v9/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/smartphones/vivo-v9/thumbnail.webp\"},{\"id\":136,\"title\":\"Vivo X21\",\"description\":\"The Vivo X21 is a premium smartphone with a focus on cutting-edge technology. It features an in-display fingerprint sensor, a high-resolution display, and advanced camera capabilities.\",\"category\":\"smartphones\",\"price\":499.99,\"discountPercentage\":17.41,\"rating\":4.26,\"stock\":7,\"brand\":\"Vivo\",\"tags\":[\"smartphones\",\"vivo\"],\"images\":[\"https://cdn.dummyjson.com/product-images/smartphones/vivo-x21/1.webp\",\"https://cdn.dummyjson.com/product-images/smartphones/vivo-x21/2.webp\",\"https://cdn.dummyjson.com/product-images/smartphones/vivo-x21/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/smartphones/vivo-x21/thumbnail.webp\"},{\"id\":137,\"title\":\"American Football\",\"description\":\"The American Football is a classic ball used in American football games. It is designed for throwing and catching, making it an essential piece of equipment for the sport.\",\"category\":\"sports-accessories\",\"price\":19.99,\"discountPercentage\":4.93,\"rating\":4.91,\"stock\":53,\"brand\":\"\",\"tags\":[\"sports equipment\",\"american football\"],\"images\":[\"https://cdn.dummyjson.com/product-images/sports-accessories/american-football/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/sports-accessories/american-football/thumbnail.webp\"},{\"id\":138,\"title\":\"Baseball Ball\",\"description\":\"The Baseball Ball is a standard baseball used in baseball games. It features a durable leather cover and is designed for pitching, hitting, and fielding in the game of baseball.\",\"category\":\"sports-accessories\",\"price\":8.99,\"discountPercentage\":1.71,\"rating\":2.57,\"stock\":100,\"brand\":\"\",\"tags\":[\"sports equipment\",\"baseball\"],\"images\":[\"https://cdn.dummyjson.com/product-images/sports-accessories/baseball-ball/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/sports-accessories/baseball-ball/thumbnail.webp\"},{\"id\":139,\"title\":\"Baseball Glove\",\"description\":\"The Baseball Glove is a protective glove worn by baseball players. It is designed to catch and field the baseball, providing players with comfort and control during the game.\",\"category\":\"sports-accessories\",\"price\":24.99,\"discountPercentage\":2.9,\"rating\":3.96,\"stock\":22,\"brand\":\"\",\"tags\":[\"sports equipment\",\"baseball\"],\"images\":[\"https://cdn.dummyjson.com/product-images/sports-accessories/baseball-glove/1.webp\",\"https://cdn.dummyjson.com/product-images/sports-accessories/baseball-glove/2.webp\",\"https://cdn.dummyjson.com/product-images/sports-accessories/baseball-glove/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/sports-accessories/baseball-glove/thumbnail.webp\"},{\"id\":140,\"title\":\"Basketball\",\"description\":\"The Basketball is a standard ball used in basketball games. It is designed for dribbling, shooting, and passing in the game of basketball, suitable for both indoor and outdoor play.\",\"category\":\"sports-accessories\",\"price\":14.99,\"discountPercentage\":7.44,\"rating\":4.66,\"stock\":75,\"brand\":\"\",\"tags\":[\"sports equipment\",\"basketball\"],\"images\":[\"https://cdn.dummyjson.com/product-images/sports-accessories/basketball/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/sports-accessories/basketball/thumbnail.webp\"},{\"id\":141,\"title\":\"Basketball Rim\",\"description\":\"The Basketball Rim is a sturdy hoop and net assembly mounted on a basketball backboard. It provides a target for shooting and scoring in the game of basketball.\",\"category\":\"sports-accessories\",\"price\":39.99,\"discountPercentage\":7.74,\"rating\":4.6,\"stock\":43,\"brand\":\"\",\"tags\":[\"sports equipment\",\"basketball\"],\"images\":[\"https://cdn.dummyjson.com/product-images/sports-accessories/basketball-rim/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/sports-accessories/basketball-rim/thumbnail.webp\"},{\"id\":142,\"title\":\"Cricket Ball\",\"description\":\"The Cricket Ball is a hard leather ball used in the sport of cricket. It is bowled and batted in the game, and its hardness and seam contribute to the dynamics of cricket play.\",\"category\":\"sports-accessories\",\"price\":12.99,\"discountPercentage\":8.63,\"rating\":3.53,\"stock\":30,\"brand\":\"\",\"tags\":[\"sports equipment\",\"cricket\"],\"images\":[\"https://cdn.dummyjson.com/product-images/sports-accessories/cricket-ball/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/sports-accessories/cricket-ball/thumbnail.webp\"},{\"id\":143,\"title\":\"Cricket Bat\",\"description\":\"The Cricket Bat is an essential piece of cricket equipment used by batsmen to hit the cricket ball. It is made of wood and comes in various sizes and designs.\",\"category\":\"sports-accessories\",\"price\":29.99,\"discountPercentage\":3.29,\"rating\":3.17,\"stock\":98,\"brand\":\"\",\"tags\":[\"sports equipment\",\"cricket\"],\"images\":[\"https://cdn.dummyjson.com/product-images/sports-accessories/cricket-bat/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/sports-accessories/cricket-bat/thumbnail.webp\"},{\"id\":144,\"title\":\"Cricket Helmet\",\"description\":\"The Cricket Helmet is a protective headgear worn by cricket players, especially batsmen and wicketkeepers. It provides protection against fast bowling and bouncers.\",\"category\":\"sports-accessories\",\"price\":44.99,\"discountPercentage\":9.64,\"rating\":4.69,\"stock\":10,\"brand\":\"\",\"tags\":[\"sports equipment\",\"cricket\"],\"images\":[\"https://cdn.dummyjson.com/product-images/sports-accessories/cricket-helmet/1.webp\",\"https://cdn.dummyjson.com/product-images/sports-accessories/cricket-helmet/2.webp\",\"https://cdn.dummyjson.com/product-images/sports-accessories/cricket-helmet/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/sports-accessories/cricket-helmet/thumbnail.webp\"},{\"id\":145,\"title\":\"Cricket Wicket\",\"description\":\"The Cricket Wicket is a set of three stumps and two bails, forming a wicket used in the sport of cricket. Batsmen aim to protect the wicket while scoring runs.\",\"category\":\"sports-accessories\",\"price\":29.99,\"discountPercentage\":16.93,\"rating\":4.73,\"stock\":25,\"brand\":\"\",\"tags\":[\"sports equipment\",\"cricket\"],\"images\":[\"https://cdn.dummyjson.com/product-images/sports-accessories/cricket-wicket/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/sports-accessories/cricket-wicket/thumbnail.webp\"},{\"id\":146,\"title\":\"Feather Shuttlecock\",\"description\":\"The Feather Shuttlecock is used in the sport of badminton. It features natural feathers and is designed for high-speed play, providing stability and accuracy during matches.\",\"category\":\"sports-accessories\",\"price\":5.99,\"discountPercentage\":2.95,\"rating\":2.85,\"stock\":95,\"brand\":\"\",\"tags\":[\"sports equipment\",\"badminton\"],\"images\":[\"https://cdn.dummyjson.com/product-images/sports-accessories/feather-shuttlecock/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/sports-accessories/feather-shuttlecock/thumbnail.webp\"},{\"id\":147,\"title\":\"Football\",\"description\":\"The Football, also known as a soccer ball, is the standard ball used in the sport of football (soccer). It is designed for kicking and passing in the game.\",\"category\":\"sports-accessories\",\"price\":17.99,\"discountPercentage\":5.15,\"rating\":3.28,\"stock\":96,\"brand\":\"\",\"tags\":[\"sports equipment\",\"football\"],\"images\":[\"https://cdn.dummyjson.com/product-images/sports-accessories/football/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/sports-accessories/football/thumbnail.webp\"},{\"id\":148,\"title\":\"Golf Ball\",\"description\":\"The Golf Ball is a small ball used in the sport of golf. It features dimples on its surface, providing aerodynamic lift and distance when struck by a golf club.\",\"category\":\"sports-accessories\",\"price\":9.99,\"discountPercentage\":17.37,\"rating\":4.3,\"stock\":84,\"brand\":\"\",\"tags\":[\"sports equipment\",\"golf\"],\"images\":[\"https://cdn.dummyjson.com/product-images/sports-accessories/golf-ball/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/sports-accessories/golf-ball/thumbnail.webp\"},{\"id\":149,\"title\":\"Iron Golf\",\"description\":\"The Iron Golf is a type of golf club designed for various golf shots. It features a solid metal head and is used for approach shots, chipping, and other golfing techniques.\",\"category\":\"sports-accessories\",\"price\":49.99,\"discountPercentage\":6.53,\"rating\":4.41,\"stock\":90,\"brand\":\"\",\"tags\":[\"sports equipment\",\"golf\"],\"images\":[\"https://cdn.dummyjson.com/product-images/sports-accessories/iron-golf/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/sports-accessories/iron-golf/thumbnail.webp\"},{\"id\":150,\"title\":\"Metal Baseball Bat\",\"description\":\"The Metal Baseball Bat is a durable and lightweight baseball bat made from metal alloys. It is commonly used in baseball games for hitting and batting practice.\",\"category\":\"sports-accessories\",\"price\":29.99,\"discountPercentage\":19.51,\"rating\":4.66,\"stock\":16,\"brand\":\"\",\"tags\":[\"sports equipment\",\"baseball\"],\"images\":[\"https://cdn.dummyjson.com/product-images/sports-accessories/metal-baseball-bat/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/sports-accessories/metal-baseball-bat/thumbnail.webp\"},{\"id\":151,\"title\":\"Tennis Ball\",\"description\":\"The Tennis Ball is a standard ball used in the sport of tennis. It is designed for bouncing and hitting with tennis rackets during matches or practice sessions.\",\"category\":\"sports-accessories\",\"price\":6.99,\"discountPercentage\":11.76,\"rating\":4.06,\"stock\":28,\"brand\":\"\",\"tags\":[\"sports equipment\",\"tennis\"],\"images\":[\"https://cdn.dummyjson.com/product-images/sports-accessories/tennis-ball/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/sports-accessories/tennis-ball/thumbnail.webp\"},{\"id\":152,\"title\":\"Tennis Racket\",\"description\":\"The Tennis Racket is an essential piece of equipment used in the sport of tennis. It features a frame with strings and a grip, allowing players to hit the tennis ball.\",\"category\":\"sports-accessories\",\"price\":49.99,\"discountPercentage\":19.61,\"rating\":4.03,\"stock\":6,\"brand\":\"\",\"tags\":[\"sports equipment\",\"tennis\"],\"images\":[\"https://cdn.dummyjson.com/product-images/sports-accessories/tennis-racket/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/sports-accessories/tennis-racket/thumbnail.webp\"},{\"id\":153,\"title\":\"Volleyball\",\"description\":\"The Volleyball is a standard ball used in the sport of volleyball. It is designed for passing, setting, and spiking over the net during volleyball matches.\",\"category\":\"sports-accessories\",\"price\":11.99,\"discountPercentage\":12.25,\"rating\":3.84,\"stock\":0,\"brand\":\"\",\"tags\":[\"sports equipment\",\"volleyball\"],\"images\":[\"https://cdn.dummyjson.com/product-images/sports-accessories/volleyball/1.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/sports-accessories/volleyball/thumbnail.webp\"},{\"id\":154,\"title\":\"Black Sun Glasses\",\"description\":\"The Black Sun Glasses are a classic and stylish choice, featuring a sleek black frame and tinted lenses. They provide both UV protection and a fashionable look.\",\"category\":\"sunglasses\",\"price\":29.99,\"discountPercentage\":4.94,\"rating\":4.41,\"stock\":60,\"brand\":\"Fashion Shades\",\"tags\":[\"eyewear\",\"sunglasses\"],\"images\":[\"https://cdn.dummyjson.com/product-images/sunglasses/black-sun-glasses/1.webp\",\"https://cdn.dummyjson.com/product-images/sunglasses/black-sun-glasses/2.webp\",\"https://cdn.dummyjson.com/product-images/sunglasses/black-sun-glasses/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/sunglasses/black-sun-glasses/thumbnail.webp\"},{\"id\":155,\"title\":\"Classic Sun Glasses\",\"description\":\"The Classic Sun Glasses offer a timeless design with a neutral frame and UV-protected lenses. These sunglasses are versatile and suitable for various occasions.\",\"category\":\"sunglasses\",\"price\":24.99,\"discountPercentage\":4.94,\"rating\":3.86,\"stock\":1,\"brand\":\"Fashion Shades\",\"tags\":[\"eyewear\",\"sunglasses\"],\"images\":[\"https://cdn.dummyjson.com/product-images/sunglasses/classic-sun-glasses/1.webp\",\"https://cdn.dummyjson.com/product-images/sunglasses/classic-sun-glasses/2.webp\",\"https://cdn.dummyjson.com/product-images/sunglasses/classic-sun-glasses/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/sunglasses/classic-sun-glasses/thumbnail.webp\"},{\"id\":156,\"title\":\"Green and Black Glasses\",\"description\":\"The Green and Black Glasses feature a bold combination of green and black colors, adding a touch of vibrancy to your eyewear collection. They are both stylish and eye-catching.\",\"category\":\"sunglasses\",\"price\":34.99,\"discountPercentage\":1.01,\"rating\":4.55,\"stock\":24,\"brand\":\"Fashion Shades\",\"tags\":[\"eyewear\",\"sunglasses\"],\"images\":[\"https://cdn.dummyjson.com/product-images/sunglasses/green-and-black-glasses/1.webp\",\"https://cdn.dummyjson.com/product-images/sunglasses/green-and-black-glasses/2.webp\",\"https://cdn.dummyjson.com/product-images/sunglasses/green-and-black-glasses/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/sunglasses/green-and-black-glasses/thumbnail.webp\"},{\"id\":157,\"title\":\"Party Glasses\",\"description\":\"The Party Glasses are designed to add flair to your party outfit. With unique shapes or colorful frames, they're perfect for adding a playful touch to your look during celebrations.\",\"category\":\"sunglasses\",\"price\":19.99,\"discountPercentage\":11.22,\"rating\":2.79,\"stock\":86,\"brand\":\"Fashion Fun\",\"tags\":[\"eyewear\",\"party glasses\"],\"images\":[\"https://cdn.dummyjson.com/product-images/sunglasses/party-glasses/1.webp\",\"https://cdn.dummyjson.com/product-images/sunglasses/party-glasses/2.webp\",\"https://cdn.dummyjson.com/product-images/sunglasses/party-glasses/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/sunglasses/party-glasses/thumbnail.webp\"},{\"id\":158,\"title\":\"Sunglasses\",\"description\":\"The Sunglasses offer a classic and simple design with a focus on functionality. These sunglasses provide essential UV protection while maintaining a timeless look.\",\"category\":\"sunglasses\",\"price\":22.99,\"discountPercentage\":1.51,\"rating\":3.02,\"stock\":27,\"brand\":\"Fashion Shades\",\"tags\":[\"eyewear\",\"sunglasses\"],\"images\":[\"https://cdn.dummyjson.com/product-images/sunglasses/sunglasses/1.webp\",\"https://cdn.dummyjson.com/product-images/sunglasses/sunglasses/2.webp\",\"https://cdn.dummyjson.com/product-images/sunglasses/sunglasses/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/sunglasses/sunglasses/thumbnail.webp\"},{\"id\":159,\"title\":\"iPad Mini 2021 Starlight\",\"description\":\"The iPad Mini 2021 in Starlight is a compact and powerful tablet from Apple. Featuring a stunning Retina display, powerful A-series chip, and a sleek design, it offers a premium tablet experience.\",\"category\":\"tablets\",\"price\":499.99,\"discountPercentage\":3.64,\"rating\":3.18,\"stock\":47,\"brand\":\"Apple\",\"tags\":[\"electronics\",\"tablets\"],\"images\":[\"https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/1.webp\",\"https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/2.webp\",\"https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/thumbnail.webp\"},{\"id\":160,\"title\":\"Samsung Galaxy Tab S8 Plus Grey\",\"description\":\"The Samsung Galaxy Tab S8 Plus in Grey is a high-performance Android tablet by Samsung. With a large AMOLED display, powerful processor, and S Pen support, it's ideal for productivity and entertainment.\",\"category\":\"tablets\",\"price\":599.99,\"discountPercentage\":13.31,\"rating\":4.68,\"stock\":62,\"brand\":\"Samsung\",\"tags\":[\"electronics\",\"tablets\"],\"images\":[\"https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/1.webp\",\"https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/2.webp\",\"https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/thumbnail.webp\"},{\"id\":161,\"title\":\"Samsung Galaxy Tab White\",\"description\":\"The Samsung Galaxy Tab in White is a sleek and versatile Android tablet. With a vibrant display, long-lasting battery, and a range of features, it offers a great user experience for various tasks.\",\"category\":\"tablets\",\"price\":349.99,\"discountPercentage\":18.2,\"rating\":3.72,\"stock\":92,\"brand\":\"Samsung\",\"tags\":[\"electronics\",\"tablets\"],\"images\":[\"https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-white/1.webp\",\"https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-white/2.webp\",\"https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-white/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-white/thumbnail.webp\"},{\"id\":162,\"title\":\"Blue Frock\",\"description\":\"The Blue Frock is a charming and stylish dress for various occasions. With a vibrant blue color and a comfortable design, it adds a touch of elegance to your wardrobe.\",\"category\":\"tops\",\"price\":29.99,\"discountPercentage\":12.13,\"rating\":4.17,\"stock\":52,\"brand\":\"\",\"tags\":[\"clothing\",\"dresses\"],\"images\":[\"https://cdn.dummyjson.com/product-images/tops/blue-frock/1.webp\",\"https://cdn.dummyjson.com/product-images/tops/blue-frock/2.webp\",\"https://cdn.dummyjson.com/product-images/tops/blue-frock/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/tops/blue-frock/thumbnail.webp\"},{\"id\":163,\"title\":\"Girl Summer Dress\",\"description\":\"The Girl Summer Dress is a cute and breezy dress designed for warm weather. With playful patterns and lightweight fabric, it's perfect for keeping cool and stylish during the summer.\",\"category\":\"tops\",\"price\":19.99,\"discountPercentage\":19.2,\"rating\":4.77,\"stock\":43,\"brand\":\"\",\"tags\":[\"clothing\",\"girls' dresses\"],\"images\":[\"https://cdn.dummyjson.com/product-images/tops/girl-summer-dress/1.webp\",\"https://cdn.dummyjson.com/product-images/tops/girl-summer-dress/2.webp\",\"https://cdn.dummyjson.com/product-images/tops/girl-summer-dress/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/tops/girl-summer-dress/thumbnail.webp\"},{\"id\":164,\"title\":\"Gray Dress\",\"description\":\"The Gray Dress is a versatile and chic option for various occasions. With a neutral gray color, it can be dressed up or down, making it a wardrobe staple for any fashion-forward individual.\",\"category\":\"tops\",\"price\":34.99,\"discountPercentage\":14.28,\"rating\":2.72,\"stock\":55,\"brand\":\"\",\"tags\":[\"clothing\",\"dresses\"],\"images\":[\"https://cdn.dummyjson.com/product-images/tops/gray-dress/1.webp\",\"https://cdn.dummyjson.com/product-images/tops/gray-dress/2.webp\",\"https://cdn.dummyjson.com/product-images/tops/gray-dress/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/tops/gray-dress/thumbnail.webp\"},{\"id\":165,\"title\":\"Short Frock\",\"description\":\"The Short Frock is a playful and trendy dress with a shorter length. Ideal for casual outings or special occasions, it combines style and comfort for a fashionable look.\",\"category\":\"tops\",\"price\":24.99,\"discountPercentage\":13.45,\"rating\":3.23,\"stock\":22,\"brand\":\"\",\"tags\":[\"clothing\",\"dresses\"],\"images\":[\"https://cdn.dummyjson.com/product-images/tops/short-frock/1.webp\",\"https://cdn.dummyjson.com/product-images/tops/short-frock/2.webp\",\"https://cdn.dummyjson.com/product-images/tops/short-frock/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/tops/short-frock/thumbnail.webp\"},{\"id\":166,\"title\":\"Tartan Dress\",\"description\":\"The Tartan Dress features a classic tartan pattern, bringing a timeless and sophisticated touch to your wardrobe. Perfect for fall and winter, it adds a hint of traditional charm.\",\"category\":\"tops\",\"price\":39.99,\"discountPercentage\":12.95,\"rating\":4.05,\"stock\":73,\"brand\":\"\",\"tags\":[\"clothing\",\"dresses\"],\"images\":[\"https://cdn.dummyjson.com/product-images/tops/tartan-dress/1.webp\",\"https://cdn.dummyjson.com/product-images/tops/tartan-dress/2.webp\",\"https://cdn.dummyjson.com/product-images/tops/tartan-dress/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/tops/tartan-dress/thumbnail.webp\"},{\"id\":167,\"title\":\"300 Touring\",\"description\":\"The 300 Touring is a stylish and comfortable sedan, known for its luxurious features and smooth performance.\",\"category\":\"vehicle\",\"price\":28999.99,\"discountPercentage\":3.98,\"rating\":4.05,\"stock\":54,\"brand\":\"Chrysler\",\"tags\":[\"sedans\",\"vehicles\"],\"images\":[\"https://cdn.dummyjson.com/product-images/vehicle/300-touring/1.webp\",\"https://cdn.dummyjson.com/product-images/vehicle/300-touring/2.webp\",\"https://cdn.dummyjson.com/product-images/vehicle/300-touring/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/vehicle/300-touring/thumbnail.webp\"},{\"id\":168,\"title\":\"Charger SXT RWD\",\"description\":\"The Charger SXT RWD is a powerful and sporty rear-wheel-drive sedan, offering a blend of performance and practicality.\",\"category\":\"vehicle\",\"price\":32999.99,\"discountPercentage\":8.23,\"rating\":2.58,\"stock\":57,\"brand\":\"Dodge\",\"tags\":[\"sedans\",\"sports cars\",\"vehicles\"],\"images\":[\"https://cdn.dummyjson.com/product-images/vehicle/charger-sxt-rwd/1.webp\",\"https://cdn.dummyjson.com/product-images/vehicle/charger-sxt-rwd/2.webp\",\"https://cdn.dummyjson.com/product-images/vehicle/charger-sxt-rwd/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/vehicle/charger-sxt-rwd/thumbnail.webp\"},{\"id\":169,\"title\":\"Dodge Hornet GT Plus\",\"description\":\"The Dodge Hornet GT Plus is a compact and agile hatchback, perfect for urban driving with a touch of sportiness.\",\"category\":\"vehicle\",\"price\":24999.99,\"discountPercentage\":2.63,\"rating\":2.65,\"stock\":82,\"brand\":\"Dodge\",\"tags\":[\"hatchbacks\",\"compact cars\",\"vehicles\"],\"images\":[\"https://cdn.dummyjson.com/product-images/vehicle/dodge-hornet-gt-plus/1.webp\",\"https://cdn.dummyjson.com/product-images/vehicle/dodge-hornet-gt-plus/2.webp\",\"https://cdn.dummyjson.com/product-images/vehicle/dodge-hornet-gt-plus/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/vehicle/dodge-hornet-gt-plus/thumbnail.webp\"},{\"id\":170,\"title\":\"Durango SXT RWD\",\"description\":\"The Durango SXT RWD is a spacious and versatile SUV, known for its strong performance and family-friendly features.\",\"category\":\"vehicle\",\"price\":36999.99,\"discountPercentage\":16.44,\"rating\":4.07,\"stock\":95,\"brand\":\"Dodge\",\"tags\":[\"suvs\",\"vehicles\"],\"images\":[\"https://cdn.dummyjson.com/product-images/vehicle/durango-sxt-rwd/1.webp\",\"https://cdn.dummyjson.com/product-images/vehicle/durango-sxt-rwd/2.webp\",\"https://cdn.dummyjson.com/product-images/vehicle/durango-sxt-rwd/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/vehicle/durango-sxt-rwd/thumbnail.webp\"},{\"id\":171,\"title\":\"Pacifica Touring\",\"description\":\"The Pacifica Touring is a stylish and well-equipped minivan, offering comfort and convenience for family journeys.\",\"category\":\"vehicle\",\"price\":31999.99,\"discountPercentage\":14.76,\"rating\":3.62,\"stock\":53,\"brand\":\"Chrysler\",\"tags\":[\"minivans\",\"vehicles\"],\"images\":[\"https://cdn.dummyjson.com/product-images/vehicle/pacifica-touring/1.webp\",\"https://cdn.dummyjson.com/product-images/vehicle/pacifica-touring/2.webp\",\"https://cdn.dummyjson.com/product-images/vehicle/pacifica-touring/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/vehicle/pacifica-touring/thumbnail.webp\"},{\"id\":172,\"title\":\"Blue Women's Handbag\",\"description\":\"The Blue Women's Handbag is a stylish and spacious accessory for everyday use. With a vibrant blue color and multiple compartments, it combines fashion and functionality.\",\"category\":\"womens-bags\",\"price\":49.99,\"discountPercentage\":17.88,\"rating\":2.92,\"stock\":76,\"brand\":\"Fashionista\",\"tags\":[\"fashion accessories\",\"handbags\"],\"images\":[\"https://cdn.dummyjson.com/product-images/womens-bags/blue-women's-handbag/1.webp\",\"https://cdn.dummyjson.com/product-images/womens-bags/blue-women's-handbag/2.webp\",\"https://cdn.dummyjson.com/product-images/womens-bags/blue-women's-handbag/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/womens-bags/blue-women's-handbag/thumbnail.webp\"},{\"id\":173,\"title\":\"Heshe Women's Leather Bag\",\"description\":\"The Heshe Women's Leather Bag is a luxurious and high-quality leather bag for the sophisticated woman. With a timeless design and durable craftsmanship, it's a versatile accessory.\",\"category\":\"womens-bags\",\"price\":129.99,\"discountPercentage\":3.87,\"rating\":4.92,\"stock\":99,\"brand\":\"Heshe\",\"tags\":[\"fashion accessories\",\"leather bags\"],\"images\":[\"https://cdn.dummyjson.com/product-images/womens-bags/heshe-women's-leather-bag/1.webp\",\"https://cdn.dummyjson.com/product-images/womens-bags/heshe-women's-leather-bag/2.webp\",\"https://cdn.dummyjson.com/product-images/womens-bags/heshe-women's-leather-bag/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/womens-bags/heshe-women's-leather-bag/thumbnail.webp\"},{\"id\":174,\"title\":\"Prada Women Bag\",\"description\":\"The Prada Women Bag is an iconic designer bag that exudes elegance and luxury. Crafted with precision and featuring the Prada logo, it's a statement piece for fashion enthusiasts.\",\"category\":\"womens-bags\",\"price\":599.99,\"discountPercentage\":14.09,\"rating\":2.71,\"stock\":75,\"brand\":\"Prada\",\"tags\":[\"fashion accessories\",\"designer bags\"],\"images\":[\"https://cdn.dummyjson.com/product-images/womens-bags/prada-women-bag/1.webp\",\"https://cdn.dummyjson.com/product-images/womens-bags/prada-women-bag/2.webp\",\"https://cdn.dummyjson.com/product-images/womens-bags/prada-women-bag/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/womens-bags/prada-women-bag/thumbnail.webp\"},{\"id\":175,\"title\":\"White Faux Leather Backpack\",\"description\":\"The White Faux Leather Backpack is a trendy and practical backpack for the modern woman. With a sleek white design and ample storage space, it's perfect for both casual and on-the-go styles.\",\"category\":\"womens-bags\",\"price\":39.99,\"discountPercentage\":15.2,\"rating\":3.36,\"stock\":39,\"brand\":\"Urban Chic\",\"tags\":[\"fashion accessories\",\"backpacks\"],\"images\":[\"https://cdn.dummyjson.com/product-images/womens-bags/white-faux-leather-backpack/1.webp\",\"https://cdn.dummyjson.com/product-images/womens-bags/white-faux-leather-backpack/2.webp\",\"https://cdn.dummyjson.com/product-images/womens-bags/white-faux-leather-backpack/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/womens-bags/white-faux-leather-backpack/thumbnail.webp\"},{\"id\":176,\"title\":\"Women Handbag Black\",\"description\":\"The Women Handbag in Black is a classic and versatile accessory that complements various outfits. With a timeless black color and functional design, it's a must-have in every woman's wardrobe.\",\"category\":\"womens-bags\",\"price\":59.99,\"discountPercentage\":11.63,\"rating\":2.89,\"stock\":11,\"brand\":\"Elegance Collection\",\"tags\":[\"fashion accessories\",\"handbags\"],\"images\":[\"https://cdn.dummyjson.com/product-images/womens-bags/women-handbag-black/1.webp\",\"https://cdn.dummyjson.com/product-images/womens-bags/women-handbag-black/2.webp\",\"https://cdn.dummyjson.com/product-images/womens-bags/women-handbag-black/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/womens-bags/women-handbag-black/thumbnail.webp\"},{\"id\":177,\"title\":\"Black Women's Gown\",\"description\":\"The Black Women's Gown is an elegant and timeless evening gown. With a sleek black design, it's perfect for formal events and special occasions, exuding sophistication and style.\",\"category\":\"womens-dresses\",\"price\":129.99,\"discountPercentage\":10.48,\"rating\":3.64,\"stock\":25,\"brand\":\"\",\"tags\":[\"clothing\",\"gowns\"],\"images\":[\"https://cdn.dummyjson.com/product-images/womens-dresses/black-women's-gown/1.webp\",\"https://cdn.dummyjson.com/product-images/womens-dresses/black-women's-gown/2.webp\",\"https://cdn.dummyjson.com/product-images/womens-dresses/black-women's-gown/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/womens-dresses/black-women's-gown/thumbnail.webp\"},{\"id\":178,\"title\":\"Corset Leather With Skirt\",\"description\":\"The Corset Leather With Skirt is a bold and edgy ensemble that combines a stylish corset with a matching skirt. Ideal for fashion-forward individuals, it makes a statement at any event.\",\"category\":\"womens-dresses\",\"price\":89.99,\"discountPercentage\":16.26,\"rating\":3.05,\"stock\":30,\"brand\":\"\",\"tags\":[\"clothing\",\"corsets\",\"skirts\"],\"images\":[\"https://cdn.dummyjson.com/product-images/womens-dresses/corset-leather-with-skirt/1.webp\",\"https://cdn.dummyjson.com/product-images/womens-dresses/corset-leather-with-skirt/2.webp\",\"https://cdn.dummyjson.com/product-images/womens-dresses/corset-leather-with-skirt/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/womens-dresses/corset-leather-with-skirt/thumbnail.webp\"},{\"id\":179,\"title\":\"Corset With Black Skirt\",\"description\":\"The Corset With Black Skirt is a chic and versatile outfit that pairs a fashionable corset with a classic black skirt. It offers a trendy and coordinated look for various occasions.\",\"category\":\"womens-dresses\",\"price\":79.99,\"discountPercentage\":15.06,\"rating\":4.52,\"stock\":33,\"brand\":\"\",\"tags\":[\"clothing\",\"corsets\",\"skirts\"],\"images\":[\"https://cdn.dummyjson.com/product-images/womens-dresses/corset-with-black-skirt/1.webp\",\"https://cdn.dummyjson.com/product-images/womens-dresses/corset-with-black-skirt/2.webp\",\"https://cdn.dummyjson.com/product-images/womens-dresses/corset-with-black-skirt/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/womens-dresses/corset-with-black-skirt/thumbnail.webp\"},{\"id\":180,\"title\":\"Dress Pea\",\"description\":\"The Dress Pea is a stylish and comfortable dress with a pea pattern. Perfect for casual outings, it adds a playful and fun element to your wardrobe, making it a great choice for day-to-day wear.\",\"category\":\"womens-dresses\",\"price\":49.99,\"discountPercentage\":17.68,\"rating\":4.88,\"stock\":6,\"brand\":\"\",\"tags\":[\"clothing\",\"dresses\"],\"images\":[\"https://cdn.dummyjson.com/product-images/womens-dresses/dress-pea/1.webp\",\"https://cdn.dummyjson.com/product-images/womens-dresses/dress-pea/2.webp\",\"https://cdn.dummyjson.com/product-images/womens-dresses/dress-pea/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/womens-dresses/dress-pea/thumbnail.webp\"},{\"id\":181,\"title\":\"Marni Red & Black Suit\",\"description\":\"The Marni Red & Black Suit is a sophisticated and fashion-forward suit ensemble. With a combination of red and black tones, it showcases a modern design for a bold and confident look.\",\"category\":\"womens-dresses\",\"price\":179.99,\"discountPercentage\":19.02,\"rating\":4.48,\"stock\":62,\"brand\":\"\",\"tags\":[\"clothing\",\"suits\"],\"images\":[\"https://cdn.dummyjson.com/product-images/womens-dresses/marni-red-&-black-suit/1.webp\",\"https://cdn.dummyjson.com/product-images/womens-dresses/marni-red-&-black-suit/2.webp\",\"https://cdn.dummyjson.com/product-images/womens-dresses/marni-red-&-black-suit/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/womens-dresses/marni-red-&-black-suit/thumbnail.webp\"},{\"id\":182,\"title\":\"Green Crystal Earring\",\"description\":\"The Green Crystal Earring is a dazzling accessory that features a vibrant green crystal. With a classic design, it adds a touch of elegance to your ensemble, perfect for formal or special occasions.\",\"category\":\"womens-jewellery\",\"price\":29.99,\"discountPercentage\":15.24,\"rating\":3.96,\"stock\":54,\"brand\":\"\",\"tags\":[\"fashion accessories\",\"earrings\"],\"images\":[\"https://cdn.dummyjson.com/product-images/womens-jewellery/green-crystal-earring/1.webp\",\"https://cdn.dummyjson.com/product-images/womens-jewellery/green-crystal-earring/2.webp\",\"https://cdn.dummyjson.com/product-images/womens-jewellery/green-crystal-earring/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/womens-jewellery/green-crystal-earring/thumbnail.webp\"},{\"id\":183,\"title\":\"Green Oval Earring\",\"description\":\"The Green Oval Earring is a stylish and versatile accessory with a unique oval shape. Whether for casual or dressy occasions, its green hue and contemporary design make it a standout piece.\",\"category\":\"womens-jewellery\",\"price\":24.99,\"discountPercentage\":15.18,\"rating\":3.57,\"stock\":73,\"brand\":\"\",\"tags\":[\"fashion accessories\",\"earrings\"],\"images\":[\"https://cdn.dummyjson.com/product-images/womens-jewellery/green-oval-earring/1.webp\",\"https://cdn.dummyjson.com/product-images/womens-jewellery/green-oval-earring/2.webp\",\"https://cdn.dummyjson.com/product-images/womens-jewellery/green-oval-earring/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/womens-jewellery/green-oval-earring/thumbnail.webp\"},{\"id\":184,\"title\":\"Tropical Earring\",\"description\":\"The Tropical Earring is a fun and playful accessory inspired by tropical elements. Featuring vibrant colors and a lively design, it's perfect for adding a touch of summer to your look.\",\"category\":\"womens-jewellery\",\"price\":19.99,\"discountPercentage\":0.76,\"rating\":4.4,\"stock\":1,\"brand\":\"\",\"tags\":[\"fashion accessories\",\"earrings\"],\"images\":[\"https://cdn.dummyjson.com/product-images/womens-jewellery/tropical-earring/1.webp\",\"https://cdn.dummyjson.com/product-images/womens-jewellery/tropical-earring/2.webp\",\"https://cdn.dummyjson.com/product-images/womens-jewellery/tropical-earring/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/womens-jewellery/tropical-earring/thumbnail.webp\"},{\"id\":185,\"title\":\"Black & Brown Slipper\",\"description\":\"The Black & Brown Slipper is a comfortable and stylish choice for casual wear. Featuring a blend of black and brown colors, it adds a touch of sophistication to your relaxation.\",\"category\":\"womens-shoes\",\"price\":19.99,\"discountPercentage\":3.33,\"rating\":2.53,\"stock\":3,\"brand\":\"Comfort Trends\",\"tags\":[\"footwear\",\"slippers\"],\"images\":[\"https://cdn.dummyjson.com/product-images/womens-shoes/black-&-brown-slipper/1.webp\",\"https://cdn.dummyjson.com/product-images/womens-shoes/black-&-brown-slipper/2.webp\",\"https://cdn.dummyjson.com/product-images/womens-shoes/black-&-brown-slipper/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/womens-shoes/black-&-brown-slipper/thumbnail.webp\"},{\"id\":186,\"title\":\"Calvin Klein Heel Shoes\",\"description\":\"Calvin Klein Heel Shoes are elegant and sophisticated, designed for formal occasions. With a classic design and high-quality materials, they complement your stylish ensemble.\",\"category\":\"womens-shoes\",\"price\":79.99,\"discountPercentage\":3.19,\"rating\":4.92,\"stock\":93,\"brand\":\"Calvin Klein\",\"tags\":[\"footwear\",\"heel shoes\"],\"images\":[\"https://cdn.dummyjson.com/product-images/womens-shoes/calvin-klein-heel-shoes/1.webp\",\"https://cdn.dummyjson.com/product-images/womens-shoes/calvin-klein-heel-shoes/2.webp\",\"https://cdn.dummyjson.com/product-images/womens-shoes/calvin-klein-heel-shoes/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/womens-shoes/calvin-klein-heel-shoes/thumbnail.webp\"},{\"id\":187,\"title\":\"Golden Shoes Woman\",\"description\":\"The Golden Shoes for Women are a glamorous choice for special occasions. Featuring a golden hue and stylish design, they add a touch of luxury to your outfit.\",\"category\":\"womens-shoes\",\"price\":49.99,\"discountPercentage\":13.93,\"rating\":3.26,\"stock\":88,\"brand\":\"Fashion Diva\",\"tags\":[\"footwear\",\"women's shoes\"],\"images\":[\"https://cdn.dummyjson.com/product-images/womens-shoes/golden-shoes-woman/1.webp\",\"https://cdn.dummyjson.com/product-images/womens-shoes/golden-shoes-woman/2.webp\",\"https://cdn.dummyjson.com/product-images/womens-shoes/golden-shoes-woman/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/womens-shoes/golden-shoes-woman/thumbnail.webp\"},{\"id\":188,\"title\":\"Pampi Shoes\",\"description\":\"Pampi Shoes offer a blend of comfort and style for everyday use. With a versatile design, they are suitable for various casual occasions, providing a trendy and relaxed look.\",\"category\":\"womens-shoes\",\"price\":29.99,\"discountPercentage\":14.14,\"rating\":3.05,\"stock\":49,\"brand\":\"Pampi\",\"tags\":[\"footwear\",\"casual shoes\"],\"images\":[\"https://cdn.dummyjson.com/product-images/womens-shoes/pampi-shoes/1.webp\",\"https://cdn.dummyjson.com/product-images/womens-shoes/pampi-shoes/2.webp\",\"https://cdn.dummyjson.com/product-images/womens-shoes/pampi-shoes/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/womens-shoes/pampi-shoes/thumbnail.webp\"},{\"id\":189,\"title\":\"Red Shoes\",\"description\":\"The Red Shoes make a bold statement with their vibrant red color. Whether for a party or a casual outing, these shoes add a pop of color and style to your wardrobe.\",\"category\":\"womens-shoes\",\"price\":34.99,\"discountPercentage\":17.69,\"rating\":3.25,\"stock\":7,\"brand\":\"Fashion Express\",\"tags\":[\"footwear\",\"women's shoes\"],\"images\":[\"https://cdn.dummyjson.com/product-images/womens-shoes/red-shoes/1.webp\",\"https://cdn.dummyjson.com/product-images/womens-shoes/red-shoes/2.webp\",\"https://cdn.dummyjson.com/product-images/womens-shoes/red-shoes/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/womens-shoes/red-shoes/thumbnail.webp\"},{\"id\":190,\"title\":\"IWC Ingenieur Automatic Steel\",\"description\":\"The IWC Ingenieur Automatic Steel watch is a durable and sophisticated timepiece. With a stainless steel case and automatic movement, it combines precision and style for watch enthusiasts.\",\"category\":\"womens-watches\",\"price\":4999.99,\"discountPercentage\":9.45,\"rating\":2.93,\"stock\":90,\"brand\":\"IWC\",\"tags\":[\"watches\",\"luxury watches\"],\"images\":[\"https://cdn.dummyjson.com/product-images/womens-watches/iwc-ingenieur-automatic-steel/1.webp\",\"https://cdn.dummyjson.com/product-images/womens-watches/iwc-ingenieur-automatic-steel/2.webp\",\"https://cdn.dummyjson.com/product-images/womens-watches/iwc-ingenieur-automatic-steel/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/womens-watches/iwc-ingenieur-automatic-steel/thumbnail.webp\"},{\"id\":191,\"title\":\"Rolex Cellini Moonphase\",\"description\":\"The Rolex Cellini Moonphase watch is a masterpiece of horology. Featuring a moon phase complication, it showcases the craftsmanship and elegance that Rolex is renowned for.\",\"category\":\"womens-watches\",\"price\":15999.99,\"discountPercentage\":4.11,\"rating\":3.83,\"stock\":52,\"brand\":\"Rolex\",\"tags\":[\"watches\",\"luxury watches\"],\"images\":[\"https://cdn.dummyjson.com/product-images/womens-watches/rolex-cellini-moonphase/1.webp\",\"https://cdn.dummyjson.com/product-images/womens-watches/rolex-cellini-moonphase/2.webp\",\"https://cdn.dummyjson.com/product-images/womens-watches/rolex-cellini-moonphase/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/womens-watches/rolex-cellini-moonphase/thumbnail.webp\"},{\"id\":192,\"title\":\"Rolex Datejust Women\",\"description\":\"The Rolex Datejust Women's watch is an iconic timepiece designed for women. With a timeless design and a date complication, it offers both elegance and functionality.\",\"category\":\"womens-watches\",\"price\":10999.99,\"discountPercentage\":15.94,\"rating\":2.86,\"stock\":4,\"brand\":\"Rolex\",\"tags\":[\"watches\",\"luxury watches\",\"women's watches\"],\"images\":[\"https://cdn.dummyjson.com/product-images/womens-watches/rolex-datejust-women/1.webp\",\"https://cdn.dummyjson.com/product-images/womens-watches/rolex-datejust-women/2.webp\",\"https://cdn.dummyjson.com/product-images/womens-watches/rolex-datejust-women/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/womens-watches/rolex-datejust-women/thumbnail.webp\"},{\"id\":193,\"title\":\"Watch Gold for Women\",\"description\":\"The Gold Women's Watch is a stunning accessory that combines luxury and style. Featuring a gold-plated case and a chic design, it adds a touch of glamour to any outfit.\",\"category\":\"womens-watches\",\"price\":799.99,\"discountPercentage\":18.34,\"rating\":4.24,\"stock\":0,\"brand\":\"Fashion Gold\",\"tags\":[\"watches\",\"women's watches\"],\"images\":[\"https://cdn.dummyjson.com/product-images/womens-watches/watch-gold-for-women/1.webp\",\"https://cdn.dummyjson.com/product-images/womens-watches/watch-gold-for-women/2.webp\",\"https://cdn.dummyjson.com/product-images/womens-watches/watch-gold-for-women/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/womens-watches/watch-gold-for-women/thumbnail.webp\"},{\"id\":194,\"title\":\"Women's Wrist Watch\",\"description\":\"The Women's Wrist Watch is a versatile and fashionable timepiece for everyday wear. With a comfortable strap and a simple yet elegant design, it complements various styles.\",\"category\":\"womens-watches\",\"price\":129.99,\"discountPercentage\":12.6,\"rating\":3.52,\"stock\":12,\"brand\":\"Fashion Co.\",\"tags\":[\"watches\",\"women's watches\"],\"images\":[\"https://cdn.dummyjson.com/product-images/womens-watches/women's-wrist-watch/1.webp\",\"https://cdn.dummyjson.com/product-images/womens-watches/women's-wrist-watch/2.webp\",\"https://cdn.dummyjson.com/product-images/womens-watches/women's-wrist-watch/3.webp\"],\"thumbnail\":\"https://cdn.dummyjson.com/product-images/womens-watches/women's-wrist-watch/thumbnail.webp\"}]");
var TITLE_PT = {
	1: "Máscara Essence Lash Princess",
	2: "Paleta de sombras com espelho",
	3: "Pó compacto translúcido",
	4: "Batom vermelho",
	5: "Esmalte vermelho",
	6: "Calvin Klein CK One",
	7: "Chanel Coco Noir Eau de Parfum",
	8: "Dior J'adore",
	9: "Dolce Shine Eau de Parfum",
	10: "Gucci Bloom Eau de Parfum",
	11: "Cama Annibale Colombo",
	12: "Sofá Annibale Colombo",
	13: "Mesa de cabeceira African Cherry",
	14: "Cadeira Knoll Saarinen Executive",
	15: "Gabinete de banheiro com espelho",
	16: "Maçã",
	17: "Bife bovino",
	18: "Ração para gatos",
	19: "Peito de frango",
	20: "Óleo de cozinha",
	21: "Pepino",
	22: "Ração para cães",
	23: "Ovos",
	24: "Filé de peixe",
	25: "Pimentão verde",
	26: "Pimenta verde",
	27: "Pote de mel",
	28: "Sorvete",
	29: "Suco",
	30: "Kiwi",
	31: "Limão",
	32: "Leite",
	33: "Amora",
	34: "Café Nescafé",
	35: "Batata",
	36: "Whey protein",
	37: "Cebola roxa",
	38: "Arroz",
	39: "Refrigerante",
	40: "Morango",
	41: "Caixa de lenços",
	42: "Água",
	43: "Balanço decorativo",
	44: "Porta-retrato árvore da família",
	45: "Planta ornamental",
	46: "Vaso de planta",
	47: "Abajur de mesa",
	48: "Espátula de bambu",
	49: "Caneca de alumínio preta",
	50: "Fouet preto",
	51: "Liquidificador",
	52: "Wok de aço carbono",
	53: "Tábua de corte",
	54: "Espremedor cítrico",
	55: "Fatiador de ovos",
	56: "Fogão elétrico",
	57: "Peneira malha fina",
	58: "Garfo",
	59: "Copo de vidro",
	60: "Ralador preto",
	61: "Mixer de mão",
	62: "Forma de gelo",
	63: "Peneira de cozinha",
	64: "Faca",
	65: "Marmita",
	66: "Forno de micro-ondas",
	67: "Suporte para canecas",
	68: "Frigideira",
	69: "Prato",
	70: "Pinça vermelha",
	71: "Panela de vidro",
	72: "Espátula vazada",
	73: "Porta-temperos",
	74: "Colher",
	75: "Bandeja",
	76: "Rolo de massa de madeira",
	77: "Descascador amarelo",
	78: "MacBook Pro 14\" cinza-espacial",
	79: "Notebook Asus Zenbook Pro Dual Screen",
	80: "Notebook Huawei MateBook X Pro",
	81: "Notebook Lenovo Yoga 920",
	82: "Notebook Dell XPS 13 9300",
	83: "Camisa xadrez azul e preta",
	84: "Camiseta Gigabyte Aorus",
	85: "Camisa xadrez masculina",
	86: "Camisa manga curta masculina",
	87: "Camisa xadrez",
	88: "Nike Air Jordan 1 vermelho e preto",
	89: "Chuteira Nike de beisebol",
	90: "Tênis Puma Future Rider",
	91: "Tênis esportivo off-white e vermelho",
	92: "Tênis esportivo off-white vermelho",
	93: "Relógio pulseira de couro marrom",
	94: "Longines Master Collection",
	95: "Rolex Cellini Date mostrador preto",
	96: "Rolex Cellini Moonphase",
	97: "Rolex Datejust",
	98: "Rolex Submariner",
	99: "Amazon Echo Plus",
	100: "Apple AirPods",
	101: "Apple AirPods Max prata",
	102: "Carregador sem fio Apple AirPower",
	103: "Apple HomePod Mini cinza",
	104: "Carregador Apple para iPhone",
	105: "Apple MagSafe Battery Pack",
	106: "Apple Watch Series 4 dourado",
	107: "Fone Beats Flex sem fio",
	108: "Capa iPhone 12 silicone MagSafe ameixa",
	109: "Monopé",
	110: "Luminária de selfie para iPhone",
	111: "Bastão de selfie monopé",
	112: "Pedestal de câmera para estúdio",
	113: "Motocicleta genérica",
	114: "Kawasaki Z800",
	115: "MotoGP CI.H1",
	116: "Scooter",
	117: "Motocicleta sportbike",
	118: "Sabonete Attitude Super Leaves",
	119: "Body wash Olay Ultra Moisture",
	120: "Loção Vaseline Men rosto e corpo",
	121: "iPhone 5s",
	122: "iPhone 6",
	123: "iPhone 13 Pro",
	124: "iPhone X",
	125: "Oppo A57",
	126: "Oppo F19 Pro Plus",
	127: "Oppo K1",
	128: "Realme C35",
	129: "Realme X",
	130: "Realme XT",
	131: "Samsung Galaxy S7",
	132: "Samsung Galaxy S8",
	133: "Samsung Galaxy S10",
	134: "Vivo S1",
	135: "Vivo V9",
	136: "Vivo X21",
	137: "Bola de futebol americano",
	138: "Bola de beisebol",
	139: "Luva de beisebol",
	140: "Bola de basquete",
	141: "Aro de basquete",
	142: "Bola de críquete",
	143: "Taco de críquete",
	144: "Capacete de críquete",
	145: "Wicket de críquete",
	146: "Peteca de penas",
	147: "Bola de futebol",
	148: "Bola de golfe",
	149: "Taco de golfe de ferro",
	150: "Taco de beisebol de metal",
	151: "Bola de tênis",
	152: "Raquete de tênis",
	153: "Bola de vôlei",
	154: "Óculos de sol pretos",
	155: "Óculos de sol clássicos",
	156: "Óculos verde e preto",
	157: "Óculos de festa",
	158: "Óculos de sol",
	159: "iPad Mini 2021 Starlight",
	160: "Samsung Galaxy Tab S8 Plus cinza",
	161: "Samsung Galaxy Tab branco",
	162: "Vestido azul",
	163: "Vestido infantil de verão",
	164: "Vestido cinza",
	165: "Vestido curto",
	166: "Vestido xadrez tartan",
	167: "Chrysler 300 Touring",
	168: "Dodge Charger SXT RWD",
	169: "Dodge Hornet GT Plus",
	170: "Dodge Durango SXT RWD",
	171: "Chrysler Pacifica Touring",
	172: "Bolsa feminina azul",
	173: "Bolsa de couro Heshe",
	174: "Bolsa Prada feminina",
	175: "Mochila branca de couro sintético",
	176: "Bolsa feminina preta",
	177: "Vestido longo preto",
	178: "Corset de couro com saia",
	179: "Corset com saia preta",
	180: "Vestido verde-ervilha",
	181: "Terno Marni vermelho e preto",
	182: "Brinco de cristal verde",
	183: "Brinco oval verde",
	184: "Brinco tropical",
	185: "Chinelo preto e marrom",
	186: "Salto Calvin Klein",
	187: "Sapato dourado feminino",
	188: "Tênis Pampi",
	189: "Sapato vermelho feminino",
	190: "IWC Ingenieur Automatic Steel",
	191: "Rolex Cellini Moonphase feminino",
	192: "Rolex Datejust feminino",
	193: "Relógio dourado feminino",
	194: "Relógio de pulso feminino"
};
var CATEGORY_META = {
	smartphones: {
		label: "Celulares",
		group: "eletronicos",
		aliases: [
			"celular",
			"smartphone",
			"iphone",
			"galaxy",
			"android"
		]
	},
	laptops: {
		label: "Notebooks",
		group: "eletronicos",
		aliases: [
			"notebook",
			"laptop",
			"macbook",
			"computador"
		]
	},
	tablets: {
		label: "Tablets",
		group: "eletronicos",
		aliases: ["tablet", "ipad"]
	},
	"mobile-accessories": {
		label: "Áudio e acessórios",
		group: "eletronicos",
		aliases: [
			"fone",
			"airpods",
			"carregador",
			"watch",
			"relogio",
			"echo",
			"homepod"
		]
	},
	beauty: {
		label: "Maquiagem",
		group: "beleza",
		aliases: [
			"maquiagem",
			"batom",
			"mascara",
			"sombra",
			"esmalte"
		]
	},
	fragrances: {
		label: "Perfumes",
		group: "beleza",
		aliases: [
			"perfume",
			"fragrance",
			"eau de",
			"colonia"
		]
	},
	"skin-care": {
		label: "Cuidados com a pele",
		group: "beleza",
		aliases: [
			"pele",
			"sabonete",
			"locao",
			"hidratante"
		]
	},
	furniture: {
		label: "Móveis",
		group: "casa",
		aliases: [
			"movel",
			"sofa",
			"cama",
			"cadeira",
			"mesa"
		]
	},
	"home-decoration": {
		label: "Decoração",
		group: "casa",
		aliases: [
			"decoracao",
			"vaso",
			"abajur",
			"planta",
			"quadro"
		]
	},
	"kitchen-accessories": {
		label: "Cozinha",
		group: "casa",
		aliases: [
			"cozinha",
			"liquidificador",
			"panela",
			"microondas",
			"fogao"
		]
	},
	groceries: {
		label: "Mercado",
		group: "mercado",
		aliases: [
			"mercado",
			"alimento",
			"comida",
			"cafe",
			"arroz"
		]
	},
	"mens-shirts": {
		label: "Camisas",
		group: "moda",
		aliases: [
			"camisa",
			"camiseta",
			"roupa"
		]
	},
	"mens-shoes": {
		label: "Tênis e calçados",
		group: "moda",
		aliases: [
			"tenis",
			"sapato",
			"nike",
			"puma",
			"jordan"
		]
	},
	"mens-watches": {
		label: "Relógios",
		group: "moda",
		aliases: [
			"relogio",
			"rolex",
			"watch"
		]
	},
	"womens-watches": {
		label: "Relógios femininos",
		group: "moda",
		aliases: [
			"relogio",
			"rolex",
			"watch"
		]
	},
	"womens-dresses": {
		label: "Vestidos",
		group: "moda",
		aliases: [
			"vestido",
			"roupa",
			"moda"
		]
	},
	tops: {
		label: "Roupas",
		group: "moda",
		aliases: [
			"vestido",
			"roupa",
			"moda"
		]
	},
	"womens-bags": {
		label: "Bolsas",
		group: "moda",
		aliases: [
			"bolsa",
			"mochila",
			"prada"
		]
	},
	"womens-shoes": {
		label: "Calçados femininos",
		group: "moda",
		aliases: [
			"sapato",
			"salto",
			"chinelo",
			"tenis"
		]
	},
	"womens-jewellery": {
		label: "Joias",
		group: "moda",
		aliases: [
			"brinco",
			"joia",
			"acessorio"
		]
	},
	sunglasses: {
		label: "Óculos de sol",
		group: "moda",
		aliases: [
			"oculos",
			"sol",
			"oculos de sol"
		]
	},
	"sports-accessories": {
		label: "Esportes",
		group: "esporte",
		aliases: [
			"esporte",
			"bola",
			"futebol",
			"tenis",
			"basquete"
		]
	},
	motorcycle: {
		label: "Motos",
		group: "auto",
		aliases: [
			"moto",
			"motocicleta",
			"scooter",
			"kawasaki"
		]
	},
	vehicle: {
		label: "Carros",
		group: "auto",
		aliases: [
			"carro",
			"automovel",
			"dodge",
			"chrysler"
		]
	}
};
var GROUP_LABEL = {
	eletronicos: "Eletrônicos",
	beleza: "Beleza",
	casa: "Casa",
	mercado: "Mercado",
	moda: "Moda",
	esporte: "Esportes",
	auto: "Auto"
};
var GROUPS = [
	"eletronicos",
	"beleza",
	"casa",
	"mercado",
	"moda",
	"esporte",
	"auto"
];
var DESCRIPTION_PT = {
	6: "CK One, o clássico unissex cítrico-aromático de Calvin Klein.",
	7: "Coco Noir da Chanel: oriental amadeirado, sofisticado e noturno.",
	8: "J'adore Dior, floral luminoso com assinatura inconfundível.",
	9: "Dolce Shine, floral frutado solar da Dolce & Gabbana.",
	10: "Gucci Bloom, buquê branco de tuberosa, jasmim e rangoon creeper.",
	78: "MacBook Pro de 14 polegadas em cinza-espacial, desempenho profissional.",
	79: "Zenbook Pro com tela dupla para criação e produtividade.",
	80: "MateBook X Pro, notebook fino com tela de alto contraste.",
	81: "Yoga 920 conversível, do notebook ao tablet em um giro.",
	82: "Dell XPS 13 9300, ultraportátil com construção premium.",
	100: "AirPods com estojo de recarga e áudio Apple.",
	101: "AirPods Max prata, fone over-ear com cancelamento de ruído.",
	123: "iPhone 13 Pro, câmera Pro e tela Super Retina XDR.",
	133: "Galaxy S10, tela Infinity e conjunto de câmeras versátil.",
	159: "iPad Mini 2021 Starlight, compacto com chip da linha A."
};
function categoryLabel(category) {
	return CATEGORY_META[category]?.label ?? category;
}
function categoryGroup(category) {
	return CATEGORY_META[category]?.group ?? "outros";
}
var USD_TO_BRL = 5.48;
function toBRL(usd) {
	const rawValue = usd * USD_TO_BRL;
	if (rawValue < 20) return Math.round(rawValue * 2) / 2;
	if (rawValue < 80) return Math.round(rawValue) - .01;
	if (rawValue < 500) return Math.round(rawValue) - .1;
	return Math.round(rawValue);
}
function describe(item, title, brand) {
	if (DESCRIPTION_PT[item.id]) return DESCRIPTION_PT[item.id];
	const cat = categoryLabel(item.category);
	return `${title} no Radar. Comparamos ofertas de ${(brand ? `${brand} · ${cat}` : cat).toLowerCase()} em lojas do Brasil, com PIX, frete e prazo lado a lado.`;
}
var PRODUCTS = catalog_default.map((item) => {
	const title = TITLE_PT[item.id] ?? item.title;
	const brand = item.brand || "Marca própria";
	const discountRate = Math.max(.04, (item.discountPercentage ?? 10) / 100);
	const basePrice = toBRL(item.price);
	const listPrice = toBRL(item.price / (1 - Math.min(discountRate, .35)));
	const aliases = CATEGORY_META[item.category]?.aliases ?? [];
	const searchText = normalizeQuery([
		title,
		item.title,
		brand,
		item.category,
		categoryLabel(item.category),
		...item.tags ?? [],
		...aliases
	].join(" "));
	return {
		id: item.id,
		title,
		titleEn: item.title,
		description: describe(item, title, brand),
		category: item.category,
		categoryLabel: categoryLabel(item.category),
		group: categoryGroup(item.category),
		brand,
		rating: item.rating,
		stock: item.stock,
		tags: item.tags ?? [],
		images: item.images?.length ? item.images : [item.thumbnail],
		thumbnail: item.thumbnail,
		listPrice: Math.max(listPrice, basePrice + 1),
		basePrice,
		discountRate,
		searchText
	};
});
var BY_ID = new Map(PRODUCTS.map((p) => [p.id, p]));
function getProduct(id) {
	return BY_ID.get(id);
}
function featuredProducts(limit = 8) {
	return [...PRODUCTS].sort((a, b) => b.discountRate - a.discountRate).slice(0, limit);
}
function topRated(limit = 8) {
	return [...PRODUCTS].sort((a, b) => b.rating - a.rating).slice(0, limit);
}
function searchProducts(query, category) {
	const q = normalizeQuery(query);
	const pool = category ? PRODUCTS.filter((p) => p.category === category || p.group === category) : PRODUCTS;
	if (!q) return pool.map((p) => ({
		...p,
		score: p.discountRate + p.rating / 10
	})).sort((a, b) => b.score - a.score);
	const tokens = q.split(/\s+/).filter(Boolean);
	const hits = [];
	for (const product of pool) {
		let score = 0;
		const titleN = normalizeQuery(product.title);
		const brandN = normalizeQuery(product.brand);
		if (titleN === q) score += 100;
		else if (titleN.startsWith(q)) score += 60;
		else if (titleN.includes(q)) score += 40;
		if (brandN === q) score += 30;
		else if (brandN.includes(q)) score += 18;
		let tokensHit = 0;
		for (const token of tokens) if (product.searchText.includes(token)) tokensHit += 1;
		if (tokens.length && tokensHit === tokens.length) score += 24;
		else if (tokensHit) score += tokensHit * 6;
		if (score <= 0 && product.searchText.includes(q)) score += 8;
		if (score > 0) hits.push({
			...product,
			score
		});
	}
	return hits.sort((a, b) => b.score - a.score || a.basePrice - b.basePrice);
}
function relatedProducts(product, limit = 4) {
	return PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).sort((a, b) => b.rating - a.rating).slice(0, limit);
}
function categoryCounts() {
	const map = /* @__PURE__ */ new Map();
	for (const product of PRODUCTS) {
		const current = map.get(product.category);
		if (current) current.count += 1;
		else map.set(product.category, {
			category: product.category,
			label: product.categoryLabel,
			group: product.group,
			count: 1
		});
	}
	return [...map.values()].sort((a, b) => b.count - a.count);
}
var SUGGESTED_SEARCHES = [
	"iPhone",
	"notebook",
	"AirPods",
	"perfume",
	"Nike",
	"liquidificador",
	"iPad",
	"Galaxy",
	"Rolex",
	"café"
];
function useHydrated() {
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setHydrated(true), []);
	return hydrated;
}
var MAX_COMPARE = 3;
var MAX_RECENT = 8;
var useRadarStore = create()(persist((set, get) => ({
	saved: [],
	compare: [],
	recent: [],
	toggleSaved: (id) => {
		const saved = get().saved;
		set({ saved: saved.includes(id) ? saved.filter((x) => x !== id) : [id, ...saved] });
	},
	toggleCompare: (id) => {
		const compare = get().compare;
		if (compare.includes(id)) {
			set({ compare: compare.filter((x) => x !== id) });
			return;
		}
		if (compare.length >= MAX_COMPARE) {
			set({ compare: [...compare.slice(1), id] });
			return;
		}
		set({ compare: [...compare, id] });
	},
	clearCompare: () => set({ compare: [] }),
	addRecent: (query) => {
		const q = query.trim();
		if (!q) return;
		set({ recent: [q, ...get().recent.filter((x) => x.toLowerCase() !== q.toLowerCase())].slice(0, MAX_RECENT) });
	},
	clearRecent: () => set({ recent: [] })
}), { name: "radar-ofertas" }));
var badgeVariants = cva("inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium tracking-wide", {
	variants: { variant: {
		default: "bg-surface-2 text-fg",
		accent: "bg-accent text-accent-fg",
		save: "bg-save-soft text-save",
		outline: "border border-border text-muted"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
function ProductImage({ src, alt, className, imgClassName }) {
	const [failed, setFailed] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("relative overflow-hidden bg-surface-2", className),
		children: failed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 grid place-items-center text-subtle",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-3xl italic text-muted/50",
				children: "R"
			})
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			className: cn("size-full object-contain p-3", imgClassName),
			onError: () => setFailed(true)
		})
	});
}
var brl = new Intl.NumberFormat("pt-BR", {
	style: "currency",
	currency: "BRL"
});
new Intl.NumberFormat("pt-BR", {
	style: "currency",
	currency: "BRL",
	maximumFractionDigits: 0
});
function formatBRL(value) {
	return brl.format(value);
}
function formatPercent(value) {
	return `${Math.round(value)}%`;
}
function formatDays(min, max) {
	if (min === max) return min <= 1 ? "chega amanhã" : `${min} dias úteis`;
	return `${min}–${max} dias úteis`;
}
function formatInstallments(count, value) {
	if (count <= 1) return "à vista no cartão";
	return `${count}x de ${formatBRL(value)} sem juros`;
}
var STORE_BY_ID = new Map([
	{
		id: "magalu",
		name: "Magazine Luiza",
		short: "Magalu",
		kind: "magazine",
		personality: {
			price: .97,
			pix: .1,
			shipping: .2,
			speed: .85,
			installments: 10
		}
	},
	{
		id: "amazon",
		name: "Amazon",
		short: "Amazon",
		kind: "oficial",
		personality: {
			price: 1.02,
			pix: .05,
			shipping: 0,
			speed: .92,
			installments: 12
		}
	},
	{
		id: "mercadolivre",
		name: "Mercado Livre",
		short: "Mercado Livre",
		kind: "marketplace",
		personality: {
			price: .94,
			pix: .07,
			shipping: .45,
			speed: .7,
			installments: 12
		}
	},
	{
		id: "americanas",
		name: "Americanas",
		short: "Americanas",
		kind: "magazine",
		personality: {
			price: 1.05,
			pix: .08,
			shipping: .35,
			speed: .55,
			installments: 10
		}
	},
	{
		id: "casasbahia",
		name: "Casas Bahia",
		short: "Casas Bahia",
		kind: "magazine",
		personality: {
			price: 1.08,
			pix: .06,
			shipping: .3,
			speed: .6,
			installments: 12
		}
	},
	{
		id: "kabum",
		name: "KaBuM!",
		short: "KaBuM!",
		kind: "oficial",
		personality: {
			price: .91,
			pix: .12,
			shipping: .55,
			speed: .75,
			installments: 10
		}
	},
	{
		id: "shopee",
		name: "Shopee",
		short: "Shopee",
		kind: "marketplace",
		personality: {
			price: .88,
			pix: .04,
			shipping: .7,
			speed: .35,
			installments: 6
		}
	},
	{
		id: "ponto",
		name: "Ponto",
		short: "Ponto",
		kind: "magazine",
		personality: {
			price: 1.04,
			pix: .09,
			shipping: .25,
			speed: .65,
			installments: 12
		}
	},
	{
		id: "fastshop",
		name: "Fast Shop",
		short: "Fast Shop",
		kind: "oficial",
		personality: {
			price: 1.12,
			pix: .03,
			shipping: .1,
			speed: .9,
			installments: 12
		}
	},
	{
		id: "netshoes",
		name: "Netshoes",
		short: "Netshoes",
		kind: "oficial",
		personality: {
			price: .99,
			pix: .08,
			shipping: .2,
			speed: .72,
			installments: 10
		}
	},
	{
		id: "centauro",
		name: "Centauro",
		short: "Centauro",
		kind: "oficial",
		personality: {
			price: 1.01,
			pix: .07,
			shipping: .22,
			speed: .68,
			installments: 10
		}
	},
	{
		id: "dafiti",
		name: "Dafiti",
		short: "Dafiti",
		kind: "oficial",
		personality: {
			price: .96,
			pix: .1,
			shipping: .28,
			speed: .62,
			installments: 6
		}
	},
	{
		id: "belezanaweb",
		name: "Beleza na Web",
		short: "Beleza na Web",
		kind: "oficial",
		personality: {
			price: 1,
			pix: .08,
			shipping: .18,
			speed: .78,
			installments: 6
		}
	},
	{
		id: "sephora",
		name: "Sephora",
		short: "Sephora",
		kind: "oficial",
		personality: {
			price: 1.14,
			pix: .05,
			shipping: .15,
			speed: .8,
			installments: 6
		}
	},
	{
		id: "drogaraia",
		name: "Droga Raia",
		short: "Droga Raia",
		kind: "oficial",
		personality: {
			price: 1.06,
			pix: .06,
			shipping: .12,
			speed: .88,
			installments: 3
		}
	},
	{
		id: "decathlon",
		name: "Decathlon",
		short: "Decathlon",
		kind: "oficial",
		personality: {
			price: .95,
			pix: .05,
			shipping: .32,
			speed: .66,
			installments: 6
		}
	}
].map((s) => [s.id, s]));
function storeById(id) {
	return STORE_BY_ID.get(id);
}
var STORES_BY_GROUP = {
	eletronicos: [
		"kabum",
		"amazon",
		"magalu",
		"mercadolivre",
		"fastshop",
		"americanas",
		"ponto",
		"casasbahia"
	],
	beleza: [
		"belezanaweb",
		"sephora",
		"amazon",
		"magalu",
		"mercadolivre",
		"drogaraia",
		"americanas"
	],
	casa: [
		"casasbahia",
		"magalu",
		"amazon",
		"ponto",
		"mercadolivre",
		"americanas",
		"shopee"
	],
	mercado: [
		"amazon",
		"magalu",
		"mercadolivre",
		"shopee",
		"americanas"
	],
	moda: [
		"dafiti",
		"netshoes",
		"amazon",
		"magalu",
		"mercadolivre",
		"shopee",
		"americanas"
	],
	esporte: [
		"centauro",
		"netshoes",
		"decathlon",
		"amazon",
		"mercadolivre",
		"magalu"
	],
	auto: [
		"mercadolivre",
		"amazon",
		"magalu",
		"casasbahia"
	]
};
function mulberry32(seed) {
	let a = seed >>> 0;
	return function rand() {
		a |= 0;
		a = a + 1831565813 | 0;
		let t = Math.imul(a ^ a >>> 15, 1 | a);
		t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
		return ((t ^ t >>> 14) >>> 0) / 4294967296;
	};
}
function money(value) {
	if (value <= 0) return 0;
	if (value < 20) return Math.round(value * 2) / 2;
	if (value < 80) return Math.round(value) - .01;
	if (value < 400) return Math.round(value) - .1;
	return Math.round(value);
}
function buildOffers(product) {
	const rand = mulberry32(product.id * 9973 + 17);
	const pool = STORES_BY_GROUP[categoryGroup(product.category)] ?? STORES_BY_GROUP.eletronicos;
	const count = 4 + Math.floor(rand() * 3);
	const chosen = pool.slice(0, Math.min(count + 1, pool.length));
	const offers = [];
	for (const storeId of chosen) {
		const store = storeById(storeId);
		if (!store) continue;
		const jitter = .92 + rand() * .16;
		const price = money(product.basePrice * store.personality.price * jitter);
		const listPrice = money(Math.max(price * (1 + product.discountRate * .8 + rand() * .12), price + 1));
		const pixDiscount = store.personality.pix;
		const pixPrice = money(price * (1 - pixDiscount));
		const freeShip = store.personality.shipping === 0 || rand() > store.personality.shipping;
		let shipping = 0;
		if (!freeShip) shipping = money(product.basePrice > 800 ? 0 : 12.9 + rand() * 22);
		const speed = store.personality.speed;
		const daysMin = speed > .85 ? 1 : speed > .7 ? 2 : speed > .5 ? 3 : 5;
		const daysMax = daysMin + (speed > .8 ? 1 : speed > .6 ? 3 : 7);
		const installments = store.personality.installments;
		const installmentValue = money(price / installments);
		const official = store.kind === "oficial" || rand() > .45;
		const inStock = rand() > .08;
		const rating = Math.round((4.1 + rand() * .8) * 10) / 10;
		const reviews = 80 + Math.floor(rand() * 18e3);
		offers.push({
			id: `${product.id}-${store.id}`,
			storeId: store.id,
			storeName: store.name,
			storeShort: store.short,
			storeKind: store.kind,
			listPrice,
			price,
			pixPrice,
			pixDiscount,
			shipping,
			daysMin,
			daysMax,
			installments,
			installmentValue,
			rating,
			reviews,
			official,
			inStock,
			totalPix: money(pixPrice + shipping),
			totalCard: money(price + shipping)
		});
	}
	return offers.sort((a, b) => a.totalPix - b.totalPix);
}
function bestOffer(offers) {
	return offers.find((o) => o.inStock) ?? offers[0];
}
function savings(offers) {
	if (offers.length < 2) return 0;
	const best = bestOffer(offers);
	const worst = offers[offers.length - 1];
	if (!best || !worst) return 0;
	return Math.max(0, worst.totalPix - best.totalPix);
}
function buildHistory(product, best) {
	const rand = mulberry32(product.id * 4243 + 91);
	const points = [];
	const today = /* @__PURE__ */ new Date();
	let price = best.pixPrice * (1.08 + rand() * .1);
	for (let i = 29; i >= 0; i--) {
		const d = new Date(today);
		d.setDate(today.getDate() - i);
		const drift = (rand() - .48) * product.basePrice * .012;
		price = Math.max(best.pixPrice * .96, price + drift);
		if (i === 4) price = best.pixPrice;
		points.push({
			day: d.toISOString().slice(5, 10),
			price: money(price)
		});
	}
	return points;
}
function filterOffers(offers, filter) {
	if (filter === "frete") return offers.filter((o) => o.shipping === 0);
	if (filter === "prazo") return [...offers].sort((a, b) => a.daysMin - b.daysMin || a.totalPix - b.totalPix);
	if (filter === "pix") return [...offers].sort((a, b) => b.pixDiscount - a.pixDiscount || a.totalPix - b.totalPix);
	return offers;
}
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-12 w-full rounded-md border border-border bg-surface px-4 text-base text-fg shadow-none transition-[border-color,box-shadow] duration-150 placeholder:text-subtle focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/25 disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
function SearchBar({ initial = "", size = "lg", autoFocus = false }) {
	const [value, setValue] = (0, import_react.useState)(initial);
	const navigate = useNavigate();
	const addRecent = useRadarStore((s) => s.addRecent);
	function submit(event) {
		event.preventDefault();
		const q = value.trim();
		if (!q) return;
		addRecent(q);
		navigate({
			to: "/busca",
			search: {
				q,
				cat: void 0,
				sort: "preco"
			}
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: submit,
		className: "relative w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
				className: "pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-subtle",
				strokeWidth: 1.75
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				value,
				onChange: (e) => setValue(e.target.value),
				placeholder: "Produto ou palavra-chave",
				"aria-label": "Buscar produto",
				autoFocus,
				className: cn("border-border-strong bg-surface pr-28 pl-11 shadow-soft", size === "lg" ? "h-14 rounded-lg text-base" : "h-12 rounded-md")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				size: size === "lg" ? "default" : "sm",
				className: "absolute top-1/2 right-1.5 -translate-y-1/2 rounded-md",
				children: "Comparar"
			})
		]
	});
}
function Wordmark({ compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: "flex items-center gap-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid size-8 place-items-center rounded-sm bg-accent font-display text-lg text-accent-fg italic",
			children: "R"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("font-display text-xl tracking-tight italic", compact && "sr-only sm:not-sr-only"),
			children: "Radar"
		})]
	});
}
function SiteHeader({ withSearch = false }) {
	const hydrated = useHydrated();
	const saved = useRadarStore((s) => s.saved.length);
	const compare = useRadarStore((s) => s.compare.length);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const q = useRouterState({ select: (s) => {
		return s.location.search.q ?? "";
	} });
	const savedCount = hydrated ? saved : 0;
	const compareCount = hydrated ? compare : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, { compact: withSearch }),
				withSearch ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden min-w-0 flex-1 md:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, {
						initial: pathname.startsWith("/busca") ? q : "",
						size: "md"
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/salvos",
						className: cn("relative grid size-11 place-items-center rounded-md text-muted transition-colors hover:bg-surface-2 hover:text-fg", pathname === "/salvos" && "text-fg"),
						"aria-label": "Produtos salvos",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
							className: "size-5",
							strokeWidth: 1.75
						}), savedCount > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute top-1.5 right-1.5 grid min-w-4 place-items-center rounded-full bg-accent px-1 font-mono text-[10px] text-accent-fg tabular-nums",
							children: savedCount
						}) : null]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/comparar",
						className: cn("relative grid size-11 place-items-center rounded-md text-muted transition-colors hover:bg-surface-2 hover:text-fg", pathname === "/comparar" && "text-fg"),
						"aria-label": "Comparar produtos",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, {
							className: "size-5",
							strokeWidth: 1.75
						}), compareCount > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute top-1.5 right-1.5 grid min-w-4 place-items-center rounded-full bg-accent px-1 font-mono text-[10px] text-accent-fg tabular-nums",
							children: compareCount
						}) : null]
					})]
				})
			]
		}), withSearch ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border px-4 py-2 md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, {
				initial: pathname.startsWith("/busca") ? q : "",
				size: "md"
			})
		}) : null]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "mt-auto border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-lg italic",
				children: "Radar"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm text-muted",
				children: "Compare ofertas por palavra-chave. PIX, frete e prazo lado a lado — para achar o piso do mercado."
			})]
		})
	});
}
//#endregion
export { savings as C, useRadarStore as D, useHydrated as E, relatedProducts as S, topRated as T, formatBRL as _, ProductImage as a, formatPercent as b, SiteFooter as c, buildHistory as d, buildOffers as f, filterOffers as g, featuredProducts as h, GROUP_LABEL as i, SiteHeader as l, cn as m, Button as n, SUGGESTED_SEARCHES as o, categoryCounts as p, GROUPS as r, SearchBar as s, Badge as t, bestOffer as u, formatDays as v, searchProducts as w, getProduct as x, formatInstallments as y };
