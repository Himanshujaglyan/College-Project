import { useRef } from "react";

const TrendingOffers = () => {
  const scrollRef = useRef(null);

  const offers = [
    {
      id: 1,
      title: "Professional Logo Design",
      description: "I will design a modern, minimalist logo for your brand",
      image: "https://solutiondots.com/wp-content/uploads/2016/10/Logo-Design-Service-in-Saudi-Arabia.jpg",
      tags: ["Logo Design", "Branding"],
      seller: { name: "Alex Morgan", avatar: "https://wallpapers.com/images/hd/man-face-old-indian-man-y4cgk7625hp2i9pj.jpg ", rating: 4.9, reviews: 342 },
      price: 120,
      deliveryTime: "2 days",
    },
    {
      id: 2,
      title: "SEO Website Optimization",
      description: "I will optimize your website for search engines and boost traffic",
      image: "https://miro.medium.com/v2/resize:fit:830/0*5ujemDY6ckuM5H16.png",
      tags: ["SEO", "Marketing"],
      seller: { name: "Sarah Johnson", avatar: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg", rating: 5.0, reviews: 189 },
      price: 85,
      deliveryTime: "3 days",
    },
    {
      id: 3,
      title: "Uk SEO Link Building",
      description: "I will optimize your website for search engines and boost traffic",
      image: "https://innovativeadagency.com/wp-content/uploads/2020/05/ImproveWebsiteDowntime_1000px.jpg",
      tags: ["SEO", "Marketing"],
      seller: { name: "Sarah Johnson", avatar: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?cs=srgb&dl=pexels-olly-3756681.jpg&fm=jpg", rating: 5.0, reviews: 189 },
      price: 85,
      deliveryTime: "3 days",
    },
    {
      id: 4,
      title: "Create Top class banner",
      description: "I will optimize your website for search engines and boost traffic",
      image: "https://www.zilliondesigns.com/blog/wp-content/uploads/Optimize-Your-Website-1280x720.jpg",
      tags: ["SEO", "Marketing"],
      seller: { name: "Sarah Johnson", avatar: "https://static.vecteezy.com/system/resources/thumbnails/035/832/837/small/ai-generated-beautiful-young-business-woman-portrait-woman-face-smiling-cute-girl-with-long-hair-studio-shot-isolated-on-gray-background-photo.jpg", rating: 5.0, reviews: 189 },
      price: 85,
      deliveryTime: "3 days",
    },
    {
      id: 5,
      title: "SEO Website Optimization",
      description: "I will optimize your website for search engines and boost traffic",
      image: "https://cdn.prod.website-files.com/619e15d781b21202de206fb5/64ec57b5a6c63cceaf77c263_Tips-that-help-optimize-user-experience-for-your-websites.webp",
      tags: ["SEO", "Marketing"],
      seller: { name: "Sarah Johnson", avatar: "https://t3.ftcdn.net/jpg/03/77/30/16/360_F_377301660_ClhyVNc3ThqShLjkfk7zq0SeCenc4xb7.jpg", rating: 5.0, reviews: 189 },
      price: 85,
      deliveryTime: "3 days",
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === "left" ? -800 : 800, behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold">Trending Offers</h2>
        <div>
          <button onClick={() => scroll("left")} className="px-3 py-1 border">←</button>
          <button onClick={() => scroll("right")} className="px-3 py-1 border ml-2">→</button>
        </div>
      </div>

      <div ref={scrollRef} className="flex overflow-x-auto gap-4 scrollbar-hide">
        {offers.map((offer) => (
          <div key={offer.id} className="flex-shrink-0 w-72 bg-white p-4 border rounded-md shadow">
            <img src={offer.image} alt={offer.title} className="w-full h-40 object-cover rounded-md" />
            <h3 className="mt-3 text-lg font-semibold">{offer.title}</h3>
            <p className="text-sm text-gray-600">{offer.description}</p>

            <div className="flex items-center mt-3">
              <img src={offer.seller.avatar} alt={offer.seller.name} className="w-8 h-8 rounded-full" />
              <div className="ml-2">
                <p className="text-sm font-medium">{offer.seller.name}</p>
                <p className="text-xs text-gray-500">{offer.seller.rating} ★ ({offer.seller.reviews})</p>
              </div>
            </div>

            <div className="flex justify-between mt-3 text-sm">
              <span>⏳ {offer.deliveryTime}</span>
              <span className="font-bold">${offer.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingOffers;
