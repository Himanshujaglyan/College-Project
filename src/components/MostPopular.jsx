import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MostPopular = () => {
  const scrollRef = useRef(null); // Ref for scrolling

  const categories = [
    { id: 1, title: "Content Writing", description: "Engage your community", image: "https://contentwriters.com/blog/wp-content/uploads/PPC2018.jpg" },
    { id: 2, title: "SEO", description: "Boost your traffic", image: "https://inklik.com/wp-content/uploads/2022/04/10-Tips-for-Choosing-the-Best-SEO-Agency-for-your-Business.jpg" },
    { id: 3, title: "Website Development", description: "Build your site", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkdxxNvX0UDxKRBuRe9U7UrwkonpRLGz0nuA&s" },
    { id: 4, title: "Logo Design", description: "Elevate your brand", image: "https://www.onlinelogomaker.com/blog/wp-content/uploads/2018/08/effective-logos.jpeg" },
    { id: 5, title: "Voice-over", description: "Tell your story", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStVvssXU7WEi6H_qdEnpS7QSrFiLvu7uw4UA&s" },
    { id: 6, title: "Illustration Drawing", description: "Picture your idea", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdAWh8qzGweH-sZTvx_oMyXaKaek3X2q5LGg&s" },
    { id: 7, title: "Illustration Drawing", description: "Picture your idea", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdAWh8qzGweH-sZTvx_oMyXaKaek3X2q5LGg&s" },
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Most Popular Categories</h2>
        <div className="flex space-x-2">
          <button onClick={scrollLeft} className="p-2 border rounded-md hover:bg-gray-50 transition-colors">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={scrollRight} className="p-2 border rounded-md hover:bg-gray-50 transition-colors">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-scroll scrollbar-hide scroll-smooth overflow-hidden"
        >
          {categories.map((category) => (
            <div key={category.id} className="flex-shrink-0 w-64">
              <div className="relative overflow-hidden rounded-lg group transition-transform duration-300 hover:scale-105 cursor-pointer hover:shadow-lg">
                <div className="relative h-64 w-full">
                  <img src={category.image} alt={category.title} className="object-cover w-full h-full" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 p-4 flex flex-col justify-between">
                    <p className="text-sm text-white">{category.description}</p>
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostPopular;
