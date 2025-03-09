import React from 'react'

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const freelancers = [
  {
    id: 1,
    name: "Rahul",
    profession: "SEO Expert",
    description: "SEO and digital marketing Expert, Google Certified PPC Consultant - Over 1400 projects completed",
    country: "United Kingdom",
    rating: 4.9,
    reviews: 1167,
    projects: 1812,
    hourlyRate: 96,
    skills: ["link building", "google ranking"],
    avatar: "https://wallpapers.com/images/hd/man-face-old-indian-man-y4cgk7625hp2i9pj.jpg  ",
  },
  {
    id: 2,
    name: "Vishal",
    profession: "Graphic Designer",
    description: "Graphic Designer, Illustrator and Motion Graphic Designer",
    country: "United Kingdom",
    rating: 5.0,
    reviews: 150,
    projects: 135,
    hourlyRate: 13,
    skills: ["ad design", "banner"],
    avatar: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
  },
  {
    id: 3,
    name: "Aarti",
    profession: "Graphic Designer",
    description: "Graphic Designer, Illustrator and Motion Graphic Designer",
    country: "United Kingdom",
    rating: 5.0,
    reviews: 150,
    projects: 135,
    hourlyRate: 13,
    skills: ["ad design", "banner"],
    avatar: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?cs=srgb&dl=pexels-olly-3756681.jpg&fm=jpg",
  },
  {
    id: 4,
    name: "Bharti",
    profession: "Graphic Designer",
    description: "Graphic Designer, Illustrator and Motion Graphic Designer",
    country: "United Kingdom",
    rating: 5.0,
    reviews: 150,
    projects: 135,
    hourlyRate: 13,
    skills: ["ad design", "banner"],
    avatar: "https://static.vecteezy.com/system/resources/thumbnails/035/832/837/small/ai-generated-beautiful-young-business-woman-portrait-woman-face-smiling-cute-girl-with-long-hair-studio-shot-isolated-on-gray-background-photo.jpg",
  },
  {
    id: 4,
    name: "Om Jindal",
    profession: "Graphic Designer",
    description: "Graphic Designer, Illustrator and Motion Graphic Designer",
    country: "United Kingdom",
    rating: 5.0,
    reviews: 150,
    projects: 135,
    hourlyRate: 13,
    skills: ["ad design", "banner"],
    avatar: "https://t3.ftcdn.net/jpg/03/77/30/16/360_F_377301660_ClhyVNc3ThqShLjkfk7zq0SeCenc4xb7.jpg",
  },
];

 const ExpertFreelancer = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto my-2 px-3 py-2">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Expert Freelancers</h2>
        <div className="flex space-x-2">
          <button onClick={() => scroll("left")} className="p-2 border rounded-md">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={() => scroll("right")} className="p-2 border rounded-md">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      <div ref={scrollRef} className="flex overflow-x-auto gap-4 scrollbar-hide">
        {freelancers.map((freelancer) => (
          <div key={freelancer.id} className="flex-shrink-0 w-64 p-4 bg-white border rounded-lg shadow-md">
            <div className="flex flex-col items-center">
              <img  src={freelancer.avatar} alt={freelancer.name} className="w-24 h-24 rounded-full object-cover mb-3" />
              <h3 className="text-lg font-medium">{freelancer.name}</h3>
              <p className="text-sm text-gray-600 text-center">{freelancer.description}</p>
              <p className="text-sm text-gray-500">{freelancer.country}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-3 justify-center">
              {freelancer.skills.map((skill, index) => (
                <span key={index} className="px-2 py-1 text-xs bg-gray-200 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-3 flex justify-between items-center">
              <span className="text-sm text-gray-600">{freelancer.projects} projects</span>
              <span className="text-lg font-bold">${freelancer.hourlyRate}/hr</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default ExpertFreelancer;