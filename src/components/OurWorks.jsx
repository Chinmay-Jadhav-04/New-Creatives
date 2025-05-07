import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Client works data structure
const clientWorks = [
  {
    name: "Sanskariezzz",
    type: "video",
    video: ["/Our Works Creatives/Inhouse/BrandVideo1.mp4"], // Ensure this path is correct
    title: "SANSKARIEZZZ",
    description: "Sanskariezzz is a content creator and influencer brand."
  },
  {
    name: "Console Gaming",
    type: "image",
    images: ["/Our Works Creatives/Console Gaming/Console1.jpg", "/Our Works Creatives/Console Gaming/Console2.jpg", "/Our Works Creatives/Console Gaming/Console3.jpg", "/Our Works Creatives/Console Gaming/Console4.jpg", "/Our Works Creatives/Console Gaming/Console5.jpg"],
    title: "Console Gaming",
    description: "Console Gaming is a gaming cafe in which people can play playstation and pc games."
  },
  {
    name: "Bombay Diner",
    type: "image",
    images: ["/Our Works Creatives/Bombay Diner/BD1.jpg", "/Our Works Creatives/Bombay Diner/BD2.jpg", "/Our Works Creatives/Bombay Diner/BD3.jpg", "/Our Works Creatives/Bombay Diner/BD4.jpg", "/Our Works Creatives/Bombay Diner/BD5.jpg"],
    title: "Bombay-Diner",
    description: "Bombay Diner is a multi-cuisine restaurant with great taste and ambience."
  },
  {
    name: "Ocean Bright",
    type: "image",
    images: ["/Our Works Creatives/Ocean Bright/OB1.jpg", "/Our Works Creatives/Ocean Bright/OB2.jpg", "/Our Works Creatives/Ocean Bright/OB3.jpg", "/Our Works Creatives/Ocean Bright/OB4.jpg", "/Our Works Creatives/Ocean Bright/OB5.jpg"],
    title: "Ocean Bright",
    description: "Ocean Bright is a school of primary education."
  },
  {
    name: "Dr Vrishali Piles Care Clinic",
    type: "image",
    images: ["/Our Works Creatives/Dr Vrishali Piles Care Clinic/DR1.jpg", "/Our Works Creatives/Dr Vrishali Piles Care Clinic/DR2.jpg", "/Our Works Creatives/Dr Vrishali Piles Care Clinic/DR3.jpg", "/Our Works Creatives/Dr Vrishali Piles Care Clinic/DR4.jpg", "/Our Works Creatives/Dr Vrishali Piles Care Clinic/DR5.jpg"],
    title: "Dr Vrishali Piles Care Clinic",
    description: "Dr Vrishali Piles Care Clinic is a clinic for piles treatment."
  },
  {
    name: "Jio Games",
    type: "image",
    images: [`/Our Works Creatives/Jio Games/JG.jpg`],
    title: "Jio Games",
    description: "JioGames is an online gaming platform by Reliance Jio that offers a wide range of mobile, cloud, and casual games for users across India."
  },
  {
    name: "Fitness Mantra",
    type: "image",
    images: ["/Our Works Creatives/Fitness Mantra/FM1.jpg", "/Our Works Creatives/Fitness Mantra/FM2.jpg", "/Our Works Creatives/Fitness Mantra/FM3.jpg", "/Our Works Creatives/Fitness Mantra/FM4.jpg", "/Our Works Creatives/Fitness Mantra/FM5.jpg"],
    title: "Fitness Mantra",
    description: "Fitness Mantra is a fitness center for people of all ages."
  },
  {
    name: "Level Up the Next Gen Gaming",
    type: "image",
    images: ["/Our Works Creatives/Level Up the Next Gen Gaming/LG1.jpg", "/Our Works Creatives/Level Up the Next Gen Gaming/LG2.jpg", "/Our Works Creatives/Level Up the Next Gen Gaming/LG3.jpg", "/Our Works Creatives/Level Up the Next Gen Gaming/LG4.jpg", "/Our Works Creatives/Level Up the Next Gen Gaming/LG5.jpg"],
    title: "Level up the Next Gen Gaming",
    description: "Level Up the Next Gen Gaming is a gaming cafe in which people can play playstation, ps and tablepool games."
  },
  {
    name: "Wartex Esports",
    type: "image",
    images: ["/Our Works Creatives/Wartex Esports/WE1.jpg", "/Our Works Creatives/Wartex Esports/WE2.jpg", "/Our Works Creatives/Wartex Esports/WE3.jpg"] ,
    title: "Wartex Esports",
    description: "Wartex Esports is an esports organization that organizes esports tournaments and provides coaching and training services."
  },
  {
    name: "Yahoom",
    type: "image",
    images: ["/Our Works Creatives/Yahoom/Yahoom1.jpg", "/Our Works Creatives/Yahoom/Yahoom2.jpg", "/Our Works Creatives/Yahoom/Yahoom3.jpg", "/Our Works Creatives/Yahoom/Yahoom4.jpg", "/Our Works Creatives/Yahoom/Yahoom5.jpg"],
    title: "Yahoom",
    description: "Yahoom is a clothing brand for those who dare to be different."
  }
];

// Card component
const Card = ({ data, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const videoRef = useRef(null);

  // Handle slideshow effect on hover for images
  useEffect(() => {
    let slideInterval;

    if (isHovered && data && data.type === 'image' && data.images) {
      if (data.images.length > 1) {
        slideInterval = setInterval(() => {
          setCurrentSlideIndex((prev) => (prev + 1) % data.images.length);
        }, 2000);
      }
    }

    return () => {
      if (slideInterval) clearInterval(slideInterval);
    };
  }, [isHovered, data?.type, data?.images?.length]);

  // Reset slide index when not hovering
  useEffect(() => {
    if (!isHovered) {
      setCurrentSlideIndex(0);
    }
  }, [isHovered]);

  // Handle video play/pause on hover
  useEffect(() => {
    if (data && data.video && data.type === 'video' && videoRef.current) {
      if (isHovered) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((err) => console.error("Video play failed:", err));
        }
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered, data?.type, data?.video?.length]);

  // Get the current background image
  const getBackgroundImage = () => {
    if (data && data.images && data.type === 'image' && data.images.length > 0) {
      const index = currentSlideIndex % data.images.length;
      return data.images[index];
    }
    return null;
  };

  return (
    <div
      className={`flex-shrink-0 w-80 h-96 rounded-lg overflow-hidden relative transition-all duration-500 shadow-lg ${isActive ? 'scale-100 shadow-xl' : 'scale-90 opacity-80'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dark background as fallback */}
      <div className="absolute inset-0 w-full h-full transition-all duration-500 bg-gray-900" />

      {/* Media background with blur effect */}
      <div className={`absolute inset-0 w-full h-full transition-all duration-500 overflow-hidden ${isHovered ? 'scale-105 z-20' : 'blur-xl scale-100 z-0'}`}>
        {data && data.video && data.type === 'video' ? (
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            playsInline
            autoPlay
            muted
            loop
            src={data.video && data.video[currentSlideIndex % data.video.length]}
            onError={(e) => {
              console.error("Video failed to load:", data.video?.[currentSlideIndex]);
            }}
          ></video>
        ) : data && data.images && data.type === 'image' ? (
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={getBackgroundImage()}
            alt={data.title || 'Project image'}
            onError={(e) => {
              console.error("Image failed to load:", getBackgroundImage());
              e.target.style.backgroundColor = '#333';
            }}
          />
        ) : (
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <span className="text-white text-lg font-bold">No media available</span>
          </div>
        )}
      </div>

      {/* Semi-transparent overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-all duration-500 ${isHovered ? 'opacity-20' : 'opacity-80'}`}></div>

      <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10">
        <div className={`transition-all duration-500 ${isHovered ? 'translate-y-0 opacity-50 blur-sm' : 'translate-y-4 opacity-90'}`}>
          {data?.category && (
            <p className="text-sm font-medium mb-1 opacity-80">{data.category}</p>
          )}
          <h3 className="text-2xl font-bold mb-2">{data?.title || 'Project'}</h3>
          <p className={`text-sm transition-all duration-500 ${isHovered ? 'opacity-50 max-h-24' : 'opacity-70 max-h-10 overflow-hidden'}`}>
            {data?.description || 'Client project'}
          </p>
        </div>
      </div>
    </div>
  );
};
export default function WorksCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const scrollPrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else {
      // Loop to the end when at the beginning
      setActiveIndex(clientWorks.length - 1);
    }
  };

  const scrollNext = () => {
    if (activeIndex < clientWorks.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else {
      // Loop to the beginning when at the end
      setActiveIndex(0);
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      const scrollAmount = activeIndex * (320 + 16); // width of card (w-80 = 320px) + gap
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [activeIndex]);

  return (
    <div className="relative w-full mx-auto py-0">
      <div className="mb-0 px-4">
        <h2 className="text-3xl font-bold">Our Works</h2>
      </div>

      <div className="relative w-full">
        <div
          ref={carouselRef}
          className="flex gap-4 overflow-x-hidden py-4 px-0 scroll-smooth w-screen"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {clientWorks.map((work, index) => (
            <Card key={work.name} data={work} isActive={index === activeIndex} />
          ))}
        </div>

        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 backdrop-blur-sm z-20 transition opacity-100"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 backdrop-blur-sm z-20 transition opacity-100"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {clientWorks.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-all ${index === activeIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}