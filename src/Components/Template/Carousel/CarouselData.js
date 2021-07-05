import carousel1 from '../../../assets/images/Carousel1.jpeg';
import carousel2 from '../../../assets/images/Carousel2.jpeg';
import carousel3 from '../../../assets/images/Carousel3.jpeg';
import carousel4 from '../../../assets/images/Carousel4.jpeg';

const CarouselData = [
    {
        heading: "Hell's Kitchen",
        description:"Ordinary chefs compete for a chance to have their own restaurant. Can they handle the heat of Gordon Ramsay's kitchen?",
        tag1: "Recommended",
        tag2: "Stream For Free",
        image: {
          source:carousel1,
          alt: "Hell's Kitchen"
        }
    },
    {
        heading: "Dakshineshwar: Legends of Kali",
        description:"The Goddess Kali holds center stage during the night of Kali Puja.",
        tag1: "All Time Fav",
        tag2: "Try Now",
        image: {
          source: carousel2,
          alt: "Goddess Kali"
        }
    },
    {
        heading: "Bhuj: The Day India Shook",
        description:"Anupam Kher relives the horror of the earthquake that struck Bhuj in 2001.",
        tag1: "Binge Now",
        tag2: "Fan Fave",
        image: {
          source: carousel3,
          alt: "Gold Rush"
        }
      },
      {
        heading: "Man, Women, Wild",
        description:"Mykel and Ruth put their survival skills to the ultimate test.",
        tag1: "Must Try",
        tag2: "Trending",
        image: {
          source: carousel4,
          alt: "Man, Women, Wild"
        }
      }
];

export default CarouselData;
