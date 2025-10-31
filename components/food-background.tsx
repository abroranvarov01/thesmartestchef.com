"use client"

export function FoodBackground() {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-white">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `repeating-linear-gradient(90deg, #f8f8f8 0px, #fff 2px, #f8f8f8 4px, #fff 100px),
                           repeating-linear-gradient(0deg, #f5f5f5 0px, #fff 1px, #f5f5f5 2px, #fff 50px)`,
          }}
        />
      </div>

      {/* Top left - Prosciutto salad */}
      <img
        src="/prosciutto-salad-with-fresh-greens-on-black-slate-.jpg"
        alt=""
        className="absolute top-8 left-8 w-72 h-72 object-cover rounded-full shadow-2xl"
      />

      {/* Top center - Tomato slices with basil */}
      <img
        src="/fresh-tomato-slices-with-basil-leaves-on-black-sla.jpg"
        alt=""
        className="absolute top-4 left-1/2 -translate-x-1/2 w-96 h-48 object-cover rounded-lg shadow-2xl"
      />

      {/* Top right - Grilled salmon */}
      <img
        src="/grilled-salmon-with-vegetables-on-black-slate-plat.jpg"
        alt=""
        className="absolute top-8 right-8 w-72 h-72 object-cover rounded-full shadow-2xl"
      />

      {/* Bottom left - Grilled chicken */}
      <img
        src="/grilled-chicken-breast-with-herbs-on-black-slate.jpg"
        alt=""
        className="absolute bottom-12 left-12 w-64 h-64 object-cover rounded-full shadow-2xl"
      />

      {/* Bottom center - Cherry tomatoes and herbs */}
      <img
        src="/cherry-tomatoes-on-vine-with-fresh-herbs-and-olive.jpg"
        alt=""
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-80 h-40 object-cover rounded-lg shadow-2xl"
      />

      {/* Bottom right - Grilled fish */}
      <img
        src="/grilled-fish-with-herbs-on-black-slate-plate.jpg"
        alt=""
        className="absolute bottom-12 right-12 w-64 h-64 object-cover rounded-full shadow-2xl"
      />

      {/* Scattered ingredients */}
      <img
        src="/red-onion-on-white-wooden-table.jpg"
        alt=""
        className="absolute top-1/3 left-1/4 w-20 h-20 object-cover rounded-full shadow-lg"
      />

      <img
        src="/olive-oil-in-small-glass-on-white-table.jpg"
        alt=""
        className="absolute bottom-1/3 left-1/3 w-16 h-16 object-cover rounded-full shadow-lg"
      />

      <img
        src="/fresh-basil-and-parsley-herbs.jpg"
        alt=""
        className="absolute top-1/2 right-1/4 w-24 h-24 object-cover rounded-lg shadow-lg"
      />
    </div>
  )
}
