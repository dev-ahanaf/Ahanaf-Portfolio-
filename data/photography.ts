export interface PhotographyService {
  title: string;
  description: string;
  icon: "user" | "graduation-cap" | "party-popper" | "heart" | "video" | "clapperboard" | "camera";
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: "Portrait" | "Campus & Convocation" | "Events & Holud" | "Videography & Reels";
  imageUrl: string;
  caption: string;
}

export const photographyData = {
  brandName: "Perfect Click",
  tagline: "Capturing Unforgettable Moments with Vision & Emotion",
  bio: "Founded by Fayek Ahanaf, 'Perfect Click' provides professional photography and videography services across university events, portraits, grand convocations, cultural festivals, and cinematic short reels.",

  services: [
    {
      title: "Portrait Photography",
      description: "Creative studio and outdoor environmental portraits with professional lighting and color grading.",
      icon: "user",
    },
    {
      title: "Campus Photography",
      description: "Capturing the vibrant life, architectural beauty, and daily moments of university campus life.",
      icon: "camera",
    },
    {
      title: "Convocation & Graduation",
      description: "High-resolution graduation portraits, gown shoots, and family celebration photo coverage.",
      icon: "graduation-cap",
    },
    {
      title: "Birthday & Special Events",
      description: "Comprehensive candid coverage for birthdays, celebrations, and private milestone gatherings.",
      icon: "party-popper",
    },
    {
      title: "Holud & Cultural Events",
      description: "Vibrant traditional Gaye Holud, cultural programs, and festive ceremony storytelling.",
      icon: "heart",
    },
    {
      title: "Cinematic Videography",
      description: "Full HD/4K event highlight videos, documentary capture, and after-movie video editing.",
      icon: "video",
    },
    {
      title: "Short-form Content & Reels",
      description: "Engaging vertical videos tailored for Instagram Reels, TikTok, and promotional social media.",
      icon: "clapperboard",
    },
  ] as PhotographyService[],

  gallery: [
    {
      id: "perfect-click-1",
      title: "Traditional Bridal Portrait",
      category: "Portrait",
      imageUrl: "/images/photography/perfect-click-1.jpg",
      caption: "Elegant traditional saree portrait framed by serene outdoor trees and natural depth of field.",
    },
    {
      id: "perfect-click-2",
      title: "Garden Portrait with Fan",
      category: "Portrait",
      imageUrl: "/images/photography/perfect-click-2.jpg",
      caption: "Traditional aesthetic garden portrait capturing soft sunlight, hand fan, and blooming flowers.",
    },
    {
      id: "perfect-click-3",
      title: "Golden Hour Sunlight Portrait",
      category: "Portrait",
      imageUrl: "/images/photography/perfect-click-3.jpg",
      caption: "Warm natural sunlight portrait with vibrant foreground floral bokeh.",
    },
    {
      id: "perfect-click-4",
      title: "Grand Convocation Cap Toss",
      category: "Campus & Convocation",
      imageUrl: "/images/photography/perfect-click-4.png",
      caption: "Graduation caps soaring into the sky - capturing academic celebration and freedom.",
    },
    {
      id: "perfect-click-5",
      title: "Convocation Group Celebration",
      category: "Campus & Convocation",
      imageUrl: "/images/photography/perfect-click-5.jpg",
      caption: "Joyous convocation gown celebration jump captured on campus grounds.",
    },
  ] as GalleryPhoto[],
};
