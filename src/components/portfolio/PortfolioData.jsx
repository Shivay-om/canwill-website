import dani from '../../assets/dani.jpg'
import portfolio2 from '../../assets/portfolio2.jpg'
import portfolio3 from '../../assets/portfolio3.jpg'
import portfolio4 from '../../assets/portfolio4.jpg'
import portfolio5 from '../../assets/portfolio5.jpg'
import portfolio6 from '../../assets/portfolio6.jpg'
import portfolio7 from '../../assets/portfolio7.jpg'
import portfolio8 from '../../assets/cordelia/cordeliaCover.webp'
import portfolio9 from '../../assets/portfolio9.jpg'
import portfolio10 from '../../assets/dhruv/dhruvCover.webp'
import portfolio11 from '../../assets/forestCover.webp'



const cardData = [
    {
      imageSrc: dani, // Replace with the actual image path
      altText: 'Dani Hotels Image',
      title: 'Dani Hotels',
      description: 'Imphal, Manipur',
    //   link: '/portfolio/Dani-hotels',
      link: "/portfolio/Dani-hotels",
      category: "Architecture",
    },
    {
      imageSrc: portfolio2,
      altText: 'Project Placeholder',
      title: 'Dr. Chingsui’s House',
      description: 'Manipur',
    //   link: '/portfolio/another-project',
      link: "/portfolio/chingsui-house",
      category: "Architecture",
    },
    {
      imageSrc: portfolio3,
      altText: 'Sample Image',
      title: 'Colonial Abode.',
      description: 'Mumbai',
    //   link: '/portfolio/sample-project',
      link: "/portfolio/colonial-abode",
      category: "Residential",
    },
    {
        imageSrc: portfolio4,
        altText: 'Sample Image',
        title: 'The Powai Home.',
        description: 'Mumbai',
        // link: '/portfolio/sample-project',
        link: "/portfolio/powai-residence",
        category: "Residential",
    },
    {
        imageSrc: portfolio5,
        altText: 'Sample Image',
        title: 'Oberoi Exquisite',
        description: 'Mumbai',
        // link: '/portfolio/sample-project',
        link: "/portfolio/exquisite-home",
        category: "Residential",
    },
    {
        imageSrc: portfolio6,
        altText: 'Sample Image',
        title: 'Standard Greases',
        description: 'Silvassa',
        // link: '/portfolio/sample-project',
        link: "/portfolio/standard-greases",
        category: "Commercial",
    },
    // {
    //     imageSrc: portfolio7,
    //     altText: 'Sample Image',
    //     title: 'VLSR',
    //     description: 'Mumbai',
    //     // link: '/portfolio/sample-project',
    //     link: "/portfolio/architecture1",
    //     category: "Labs",
    // },
    {
        imageSrc: portfolio8,
        altText: 'Sample Image',
        title: "Cordelier's Cafe",
        description: 'Mumbai',
        // link: '/portfolio/sample-project',
        link: "/portfolio/cordelia",
        category: "Commercial",
    },
    {
        imageSrc: portfolio9,
        altText: 'Sample Image',
        title: 'Iyer’s House',
        description: 'Mumbai',
        // link: '/portfolio/sample-project',
        link: "/portfolio/iyer-house",
        category: "Residential",
    },
    {
      imageSrc: portfolio10,
      altText: 'Sample Image',
      title: 'Dhruv Residence',
      description: 'Mumbai',
      // link: '/portfolio/sample-project',
      link: "/portfolio/dhruv-residence",
      category: "Residential",
    },
    {
      imageSrc: portfolio11,
      altText: 'Sample Image',
      title: 'House overlooking the Forest',
      description: 'Mumbai',
      // link: '/portfolio/sample-project',
      link: "/portfolio/house-of-forest",
      category: "Residential",
    },
  ];

export default cardData;