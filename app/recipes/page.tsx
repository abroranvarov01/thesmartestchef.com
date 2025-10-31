import { Footer } from "@/components/footer"
import { Clock, Users, Flame } from "lucide-react"

export default function RecipesPage() {
  const recipes = [
    {
      id: 1,
      name: "Creamy Mushroom Risotto",
      time: "20 min",
      servings: "4",
      difficulty: "Easy",
      image: "/creamy-mushroom-risotto.jpg",
      tags: ["Vegetarian", "Quick", "Elegant"],
      description: "Silky smooth risotto with earthy mushrooms and parmesan cheese",
      ingredients: [
        "2 cups Arborio rice",
        "500g mixed mushrooms, sliced",
        "6 cups vegetable broth",
        "1 cup white wine",
        "1 cup grated Parmesan",
        "4 tbsp butter",
        "1 onion, diced",
      ],
      instructions:
        "Set multicooker to sauté mode. Melt butter and cook onion until soft. Add rice and toast for 2 minutes. Pour in wine and stir until absorbed. Add mushrooms and broth, close lid and cook on rice setting for 15 minutes. Stir in Parmesan and season to taste.",
    },
    {
      id: 2,
      name: "Spicy Thai Curry",
      time: "25 min",
      servings: "6",
      difficulty: "Medium",
      image: "/spicy-thai-curry-with-rice.jpg",
      tags: ["Spicy", "Asian", "Quick"],
      description: "Aromatic Thai curry with coconut milk and fresh vegetables",
      ingredients: [
        "3 tbsp red curry paste",
        "2 cans coconut milk",
        "600g chicken breast, cubed",
        "2 bell peppers, sliced",
        "Fresh basil leaves",
        "2 limes",
        "2 tbsp fish sauce",
      ],
      instructions:
        "Set multicooker to sauté mode and cook curry paste for 1 minute. Add chicken and brown for 3 minutes. Pour in coconut milk, add vegetables, and close lid. Cook on curry setting for 18 minutes. Stir in fish sauce, lime juice, and fresh basil before serving.",
    },
    {
      id: 3,
      name: "Tender Beef Bourguignon",
      time: "30 min",
      servings: "8",
      difficulty: "Medium",
      image: "/rich-beef-bourguignon-with-vegetables.jpg",
      tags: ["French", "Comfort", "Impressive"],
      description: "Classic French beef stew with red wine and pearl onions",
      ingredients: [
        "1kg beef chuck, cubed",
        "2 cups red wine",
        "300g pearl onions",
        "400g mushrooms",
        "200g bacon, diced",
        "3 tbsp tomato paste",
        "3 cups beef broth",
      ],
      instructions:
        "Sauté bacon in multicooker until crispy. Brown beef in batches. Add onions and mushrooms, cook for 3 minutes. Stir in tomato paste, wine, and broth. Close lid and cook on stew setting for 25 minutes. Let pressure release naturally for 10 minutes.",
    },
    {
      id: 4,
      name: "Mediterranean Seafood Pasta",
      time: "18 min",
      servings: "4",
      difficulty: "Easy",
      image: "/fresh-mediterranean-seafood-pasta.jpg",
      tags: ["Seafood", "Healthy", "Quick"],
      description: "Light and fresh pasta with shrimp and Mediterranean herbs",
      ingredients: [
        "500g large shrimp, peeled",
        "400g linguine pasta",
        "6 cloves garlic, minced",
        "400g cherry tomatoes",
        "Fresh basil",
        "1/4 cup olive oil",
        "2 lemons",
      ],
      instructions:
        "Add pasta, tomatoes, garlic, olive oil, and 3 cups water to multicooker. Close lid and cook on pasta setting for 12 minutes. Quick release pressure, stir in shrimp and cook on sauté mode for 4 minutes. Finish with lemon juice and fresh basil.",
    },
    {
      id: 5,
      name: "Slow Cooked Pulled Pork",
      time: "45 min",
      servings: "10",
      difficulty: "Easy",
      image: "/slow-cooked-pulled-pork-sandwich.jpg",
      tags: ["BBQ", "Comfort", "Crowd-pleaser"],
      description: "Tender pulled pork with smoky BBQ sauce, perfect for sandwiches",
      ingredients: [
        "2kg pork shoulder",
        "2 cups BBQ sauce",
        "1 large onion, sliced",
        "8 cloves garlic",
        "2 tbsp smoked paprika",
        "1/4 cup brown sugar",
        "1/2 cup apple cider vinegar",
      ],
      instructions:
        "Rub pork with paprika, brown sugar, salt, and pepper. Place onion and garlic in multicooker, add pork on top. Pour in vinegar and 1 cup water. Cook on meat setting for 40 minutes. Shred meat, mix with BBQ sauce, and cook on sauté mode for 5 minutes to thicken.",
    },
    {
      id: 6,
      name: "Creamy Chicken Marsala",
      time: "22 min",
      servings: "4",
      difficulty: "Medium",
      image: "/creamy-chicken-marsala-with-mushrooms.jpg",
      tags: ["Italian", "Elegant", "Quick"],
      description: "Tender chicken in a rich Marsala wine and mushroom sauce",
      ingredients: [
        "4 chicken breasts",
        "1 cup Marsala wine",
        "400g mushrooms, sliced",
        "1 cup heavy cream",
        "4 tbsp butter",
        "4 cloves garlic, minced",
        "Fresh thyme",
      ],
      instructions:
        "Season and brown chicken in multicooker on sauté mode. Remove and set aside. Add butter, garlic, and mushrooms, cook for 3 minutes. Pour in Marsala wine and scrape bottom. Return chicken, close lid and cook on poultry setting for 15 minutes. Stir in cream and thyme.",
    },
    {
      id: 7,
      name: "Vegetable Minestrone Soup",
      time: "20 min",
      servings: "6",
      difficulty: "Easy",
      image: "/vegetable-minestrone-soup.jpg",
      tags: ["Vegetarian", "Healthy", "Comfort"],
      description: "Hearty Italian vegetable soup with pasta and beans",
      ingredients: [
        "3 cups mixed vegetables (carrots, celery, zucchini)",
        "1 cup small pasta",
        "2 cans white beans",
        "800g crushed tomatoes",
        "6 cups vegetable broth",
        "Fresh basil",
        "1/4 cup olive oil",
      ],
      instructions:
        "Add all vegetables, beans, tomatoes, broth, and olive oil to multicooker. Close lid and cook on soup setting for 15 minutes. Quick release, add pasta and cook on sauté mode for 5 minutes. Garnish with fresh basil and parmesan.",
    },
    {
      id: 8,
      name: "Spiced Lentil Curry",
      time: "25 min",
      servings: "4",
      difficulty: "Easy",
      image: "/spiced-lentil-curry-with-rice.jpg",
      tags: ["Vegetarian", "Vegan", "Healthy"],
      description: "Protein-rich lentil curry with aromatic Indian spices",
      ingredients: [
        "2 cups red lentils",
        "1 can coconut milk",
        "1 onion, diced",
        "6 cloves garlic",
        "2 tbsp fresh ginger",
        "3 tbsp curry powder",
        "2 cups spinach",
      ],
      instructions:
        "Sauté onion, garlic, and ginger in multicooker for 2 minutes. Add curry powder and toast for 30 seconds. Stir in lentils, coconut milk, and 3 cups water. Close lid and cook on bean setting for 20 minutes. Stir in spinach until wilted.",
    },
    {
      id: 9,
      name: "Honey Garlic Chicken",
      time: "20 min",
      servings: "4",
      difficulty: "Easy",
      image: "/honey-garlic-chicken-with-vegetables.jpg",
      tags: ["Asian", "Quick", "Family-friendly"],
      description: "Sweet and savory chicken glazed with honey and garlic",
      ingredients: [
        "8 chicken thighs",
        "1/2 cup honey",
        "8 cloves garlic, minced",
        "1/2 cup soy sauce",
        "2 tbsp fresh ginger",
        "2 tbsp rice vinegar",
        "1 tbsp sesame oil",
      ],
      instructions:
        "Mix honey, soy sauce, garlic, ginger, vinegar, and sesame oil. Place chicken in multicooker and pour sauce over. Close lid and cook on poultry setting for 18 minutes. Remove chicken, set to sauté mode and reduce sauce for 3 minutes. Pour over chicken.",
    },
    {
      id: 10,
      name: "Creamy Tomato Basil Pasta",
      time: "18 min",
      servings: "4",
      difficulty: "Easy",
      image: "/creamy-tomato-basil-pasta.jpg",
      tags: ["Vegetarian", "Italian", "Quick"],
      description: "Classic pasta in a silky tomato and cream sauce with fresh basil",
      ingredients: [
        "400g penne pasta",
        "800g crushed tomatoes",
        "1 cup heavy cream",
        "Fresh basil leaves",
        "6 cloves garlic",
        "1 onion, diced",
        "1 cup grated Parmesan",
      ],
      instructions:
        "Sauté onion and garlic in multicooker for 2 minutes. Add pasta, tomatoes, and 2 cups water. Close lid and cook on pasta setting for 12 minutes. Quick release, stir in cream, basil, and Parmesan. Let sit for 2 minutes to thicken.",
    },
    {
      id: 11,
      name: "Beef Chili Con Carne",
      time: "30 min",
      servings: "8",
      difficulty: "Easy",
      image: "/beef-chili-con-carne.jpg",
      tags: ["Comfort", "Spicy", "Crowd-pleaser"],
      description: "Hearty beef chili with beans and warming spices",
      ingredients: [
        "1kg ground beef",
        "2 cans kidney beans",
        "800g crushed tomatoes",
        "3 tbsp chili powder",
        "2 tbsp cumin",
        "2 onions, diced",
        "8 cloves garlic",
      ],
      instructions:
        "Brown beef in multicooker on sauté mode. Add onions and garlic, cook for 3 minutes. Stir in chili powder and cumin. Add beans, tomatoes, and 1 cup water. Close lid and cook on chili setting for 25 minutes. Natural release for 10 minutes.",
    },
    {
      id: 12,
      name: "Teriyaki Salmon",
      time: "15 min",
      servings: "4",
      difficulty: "Easy",
      image: "/teriyaki-salmon-with-vegetables.jpg",
      tags: ["Seafood", "Healthy", "Quick"],
      description: "Glazed salmon with sweet and savory teriyaki sauce",
      ingredients: [
        "4 salmon fillets",
        "1/2 cup teriyaki sauce",
        "2 tbsp fresh ginger",
        "4 cloves garlic",
        "2 tbsp sesame seeds",
        "4 green onions",
        "2 tbsp soy sauce",
      ],
      instructions:
        "Mix teriyaki sauce, soy sauce, ginger, and garlic. Place salmon in steamer basket in multicooker with 1 cup water. Brush with sauce. Close lid and steam for 12 minutes. Garnish with sesame seeds and green onions.",
    },
    {
      id: 13,
      name: "Vegetable Stir Fry",
      time: "15 min",
      servings: "4",
      difficulty: "Easy",
      image: "/colorful-vegetable-stir-fry.png",
      tags: ["Vegetarian", "Healthy", "Quick"],
      description: "Crispy vegetables in a savory Asian sauce",
      ingredients: [
        "6 cups mixed vegetables (broccoli, peppers, snap peas)",
        "1/4 cup soy sauce",
        "6 cloves garlic",
        "2 tbsp fresh ginger",
        "2 tbsp sesame oil",
        "2 tbsp rice vinegar",
        "1 tbsp cornstarch",
      ],
      instructions:
        "Set multicooker to sauté mode. Heat sesame oil and cook garlic and ginger for 1 minute. Add vegetables and stir-fry for 5 minutes. Mix soy sauce, vinegar, and cornstarch, pour over vegetables. Cook for 3 minutes until sauce thickens.",
    },
    {
      id: 14,
      name: "Lamb Tagine",
      time: "35 min",
      servings: "6",
      difficulty: "Medium",
      image: "/moroccan-lamb-tagine.png",
      tags: ["Moroccan", "Exotic", "Impressive"],
      description: "Moroccan-spiced lamb with dried fruits and warm spices",
      ingredients: [
        "1kg lamb shoulder, cubed",
        "1 cup dried apricots",
        "1/2 cup almonds",
        "2 tsp cinnamon",
        "2 tbsp cumin",
        "2 onions, sliced",
        "3 cups vegetable broth",
      ],
      instructions:
        "Brown lamb in multicooker on sauté mode. Add onions and cook for 3 minutes. Stir in cinnamon and cumin. Add apricots, almonds, and broth. Close lid and cook on stew setting for 30 minutes. Natural release for 10 minutes. Serve over couscous.",
    },
    {
      id: 15,
      name: "Creamy Potato Leek Soup",
      time: "20 min",
      servings: "6",
      difficulty: "Easy",
      image: "/creamy-potato-leek-soup.jpg",
      tags: ["Comfort", "Vegetarian", "Healthy"],
      description: "Silky smooth soup with tender potatoes and leeks",
      ingredients: [
        "6 large potatoes, cubed",
        "3 leeks, sliced",
        "6 cups vegetable broth",
        "1 cup heavy cream",
        "4 tbsp butter",
        "Fresh thyme",
        "Salt and pepper",
      ],
      instructions:
        "Melt butter in multicooker on sauté mode. Add leeks and cook for 3 minutes. Add potatoes, broth, and thyme. Close lid and cook on soup setting for 15 minutes. Blend until smooth, stir in cream and season to taste.",
    },
    {
      id: 16,
      name: "Chicken Tikka Masala",
      time: "28 min",
      servings: "4",
      difficulty: "Medium",
      image: "/chicken-tikka-masala-with-rice.jpg",
      tags: ["Indian", "Spicy", "Elegant"],
      description: "Tender chicken in a creamy tomato-based Indian sauce",
      ingredients: [
        "800g chicken breast, cubed",
        "1 cup plain yogurt",
        "800g tomato sauce",
        "1 cup heavy cream",
        "3 tbsp garam masala",
        "2 tbsp fresh ginger",
        "8 cloves garlic",
      ],
      instructions:
        "Marinate chicken in yogurt and half the garam masala for 10 minutes. Brown chicken in multicooker. Add garlic, ginger, remaining garam masala, and tomato sauce. Close lid and cook on curry setting for 20 minutes. Stir in cream before serving.",
    },
    {
      id: 17,
      name: "Pork Carnitas",
      time: "40 min",
      servings: "8",
      difficulty: "Easy",
      image: "/mexican-pork-carnitas.jpg",
      tags: ["Mexican", "Comfort", "Crowd-pleaser"],
      description: "Tender Mexican-style pork perfect for tacos and burritos",
      ingredients: [
        "2kg pork shoulder, cubed",
        "1 cup orange juice",
        "1/2 cup lime juice",
        "8 cloves garlic",
        "2 tbsp cumin",
        "3 bay leaves",
        "Fresh cilantro",
      ],
      instructions:
        "Season pork with cumin, salt, and pepper. Place in multicooker with garlic, bay leaves, orange juice, and lime juice. Close lid and cook on meat setting for 35 minutes. Shred pork and broil for 5 minutes for crispy edges. Garnish with cilantro.",
    },
    {
      id: 18,
      name: "Vegetable Paella",
      time: "25 min",
      servings: "6",
      difficulty: "Medium",
      image: "/vegetable-paella.jpg",
      tags: ["Spanish", "Vegetarian", "Elegant"],
      description: "Colorful Spanish rice dish with saffron and vegetables",
      ingredients: [
        "2 cups short-grain rice",
        "1/2 tsp saffron threads",
        "4 cups vegetable broth",
        "2 bell peppers, sliced",
        "2 cups peas",
        "1 onion, diced",
        "6 cloves garlic",
      ],
      instructions:
        "Sauté onion and garlic in multicooker for 2 minutes. Add rice and toast for 1 minute. Stir in saffron, broth, peppers, and peas. Close lid and cook on rice setting for 20 minutes. Let sit for 5 minutes before serving.",
    },
    {
      id: 19,
      name: "Beef Stroganoff",
      time: "25 min",
      servings: "4",
      difficulty: "Medium",
      image: "/beef-stroganoff-with-egg-noodles.jpg",
      tags: ["Russian", "Comfort", "Elegant"],
      description: "Tender beef in a creamy sour cream sauce with egg noodles",
      ingredients: [
        "600g beef sirloin, sliced",
        "1 cup sour cream",
        "400g egg noodles",
        "400g mushrooms, sliced",
        "1 onion, diced",
        "2 cups beef broth",
        "2 tbsp paprika",
      ],
      instructions:
        "Brown beef in multicooker on sauté mode. Remove and set aside. Cook onion and mushrooms for 3 minutes. Add paprika, broth, and noodles. Close lid and cook on pasta setting for 15 minutes. Stir in beef and sour cream.",
    },
    {
      id: 20,
      name: "Thai Green Curry Vegetables",
      time: "20 min",
      servings: "4",
      difficulty: "Easy",
      image: "/thai-green-curry-vegetables.jpg",
      tags: ["Thai", "Vegetarian", "Quick"],
      description: "Vibrant green curry with fresh vegetables and coconut milk",
      ingredients: [
        "3 tbsp green curry paste",
        "2 cans coconut milk",
        "6 cups mixed vegetables",
        "Fresh basil leaves",
        "2 limes",
        "2 tbsp fish sauce (or soy sauce)",
        "4 cloves garlic",
      ],
      instructions:
        "Sauté curry paste and garlic in multicooker for 1 minute. Add vegetables and coconut milk. Close lid and cook on curry setting for 15 minutes. Stir in fish sauce, lime juice, and fresh basil. Serve over jasmine rice.",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Fc7hIAMz1EexOCOCibu5D0pzGH5CNz.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/wooden-board-ingredients-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            opacity: 0.9,
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">Multicooker Recipes</h1>
            <p className="text-xl text-gray-100 text-balance">
              Discover 20+ delicious recipes perfect for your multicooker
            </p>
          </div>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Fc7hIAMz1EexOCOCibu5D0pzGH5CNz.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/wooden-board-ingredients-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            opacity: 0.95,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <div
                key={recipe.id}
                className="group rounded-2xl overflow-hidden bg-gray-900/90 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/10"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={recipe.image || "/placeholder.svg"}
                    alt={recipe.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-gray-900 px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                    {recipe.difficulty}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300 leading-tight">
                    {recipe.name}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{recipe.description}</p>

                  <div className="flex items-center gap-6 text-sm text-gray-200 py-2">
                    <div className="flex items-center gap-2">
                      <Clock size={18} className="text-orange-400" />
                      <span className="font-medium">{recipe.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={18} className="text-orange-400" />
                      <span className="font-medium">{recipe.servings}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {recipe.tags.map((tag, index) => {
                      const tagColors = [
                        "bg-red-500/20 text-red-300 border-red-400/30",
                        "bg-orange-500/20 text-orange-300 border-orange-400/30",
                        "bg-pink-500/20 text-pink-300 border-pink-400/30",
                      ]
                      const colorClass = tagColors[index % tagColors.length]

                      return (
                        <span
                          key={tag}
                          className={`text-xs px-3 py-1.5 rounded-full font-semibold border ${colorClass} transition-transform hover:scale-105`}
                        >
                          {tag}
                        </span>
                      )
                    })}
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <p className="text-xs font-bold text-orange-400 uppercase tracking-wide mb-2">Ingredients</p>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {recipe.ingredients.map((ingredient, idx) => (
                        <li key={idx} className="leading-relaxed">
                          • {ingredient}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <p className="text-xs font-bold text-orange-400 uppercase tracking-wide mb-2">Instructions</p>
                    <p className="text-sm text-gray-300 leading-relaxed">{recipe.instructions}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fJu3jIcfA3TrInM5J0Y6foliycThBc.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/wooden-board-ingredients-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            opacity: 0.95,
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-neutral-950">Multicooker Cooking Tips</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <Flame className="flex-shrink-0 mt-1 text-red-600" size={24} />
              <div>
                <h3 className="mb-2 font-bold text-sidebar-foreground opacity-100">Adjust Liquid Levels</h3>
                <p className="text-white font-semibold">
                  Multicookers retain more moisture than traditional cooking. Reduce liquid by 25-30% for best results.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Flame className="flex-shrink-0 mt-1 text-red-600" size={24} />
              <div>
                <h3 className="mb-2 font-bold text-sidebar-foreground">Layer Your Ingredients</h3>
                <p className="text-white font-semibold">
                  Place harder vegetables at the bottom and delicate items on top for even cooking.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Flame className="flex-shrink-0 mt-1 text-red-600" size={24} />
              <div>
                <h3 className="font-semibold mb-2 text-sidebar-foreground">Don't Overfill</h3>
                <p className="text-white font-semibold">
                  Fill your multicooker no more than 2/3 full to allow proper steam circulation.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Flame className="flex-shrink-0 mt-1 text-red-600" size={24} />
              <div>
                <h3 className="font-semibold mb-2 text-sidebar-foreground">Natural Release</h3>
                <p className="text-white font-semibold">
                  Allow pressure to release naturally for 10-15 minutes for tender, juicy results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
