import { Clock, Users, ChefHat } from "lucide-react"

export function RecipeShowcase() {
  const recipes = [
    {
      id: 1,
      name: "Creamy Mushroom Risotto",
      time: "20 min",
      servings: "4",
      image: "/creamy-mushroom-risotto-plated-beautifully.jpg",
      description:
        "A luxurious Italian classic made effortlessly in your multicooker. Rich, creamy arborio rice infused with earthy mushrooms, parmesan cheese, and fresh herbs creates a restaurant-quality dish that's perfect for any occasion.",
      ingredients: "Arborio rice, mushrooms, parmesan, white wine, vegetable broth",
      difficulty: "Easy",
      tags: ["Vegetarian", "Quick", "Elegant"],
    },
    {
      id: 2,
      name: "Spicy Thai Curry",
      time: "25 min",
      servings: "6",
      image: "/vibrant-spicy-thai-curry-with-rice.jpg",
      description:
        "Transport your taste buds to Thailand with this aromatic coconut curry. Tender chicken or tofu simmered in a fragrant blend of red curry paste, coconut milk, and fresh vegetables. Perfectly balanced heat and creaminess in every bite.",
      ingredients: "Chicken, coconut milk, red curry paste, bell peppers, Thai basil",
      difficulty: "Medium",
      tags: ["Spicy", "Asian", "Quick"],
    },
    {
      id: 3,
      name: "Tender Beef Bourguignon",
      time: "30 min",
      servings: "8",
      image: "/rich-beef-bourguignon-with-vegetables.jpg",
      description:
        "The iconic French stew reimagined for modern cooking. Succulent beef chunks braised in red wine with pearl onions, carrots, and mushrooms. What traditionally takes hours is now ready in 30 minutes while maintaining all the depth and richness.",
      ingredients: "Beef chuck, red wine, pearl onions, carrots, bacon, mushrooms",
      difficulty: "Medium",
      tags: ["French", "Comfort", "Impressive"],
    },
    {
      id: 4,
      name: "Mediterranean Seafood",
      time: "18 min",
      servings: "4",
      image: "/fresh-mediterranean-seafood-pasta.jpg",
      description:
        "A light yet satisfying seafood medley featuring shrimp, mussels, and calamari tossed with al dente pasta in a garlic white wine sauce. Fresh tomatoes, olives, and basil bring the flavors of the Mediterranean coast to your table.",
      ingredients: "Mixed seafood, pasta, white wine, tomatoes, garlic, olives",
      difficulty: "Easy",
      tags: ["Seafood", "Healthy", "Quick"],
    },
  ]

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xreaGO9q6iY6Wu4JKBifbyqqTYTdte.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/dark-rustic-wood-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          opacity: 0.85,
        }}
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-sky-50">Quick & Delicious Recipes</h2>
          <p className="text-lg text-balance text-zinc-50">
            Explore our collection of tested recipes perfect for multicooker cooking
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="group rounded-2xl overflow-hidden bg-gradient-to-br from-amber-950/90 to-orange-950/90 backdrop-blur-sm border border-amber-800/50 hover:border-amber-600 hover:shadow-2xl hover:shadow-amber-600/20 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="relative overflow-hidden md:w-2/5 h-64 md:h-auto">
                  <img
                    src={recipe.image || "/placeholder.svg"}
                    alt={recipe.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
                    <ChefHat size={16} />
                    {recipe.difficulty}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:w-3/5 flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-300 transition">
                    {recipe.name}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">{recipe.description}</p>

                  <div className="mb-4 p-3 bg-amber-950/40 rounded-lg border border-amber-800/40">
                    <p className="text-xs text-amber-300/80 mb-1 font-semibold">Key Ingredients:</p>
                    <p className="text-sm text-gray-200">{recipe.ingredients}</p>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-sm text-gray-300">
                      <div className="flex items-center gap-1.5 bg-amber-950/40 px-3 py-1.5 rounded-lg border border-amber-800/30">
                        <Clock size={16} className="text-amber-400" />
                        <span className="font-medium">{recipe.time}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-amber-950/40 px-3 py-1.5 rounded-lg border border-amber-800/30">
                        <Users size={16} className="text-amber-400" />
                        <span className="font-medium">{recipe.servings} servings</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {recipe.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-amber-500/20 text-amber-200 border border-amber-500/40 px-3 py-1 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
