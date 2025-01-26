import dani from '../../assets/dani.jpg'
import portfolio2 from '../../assets/portfolio2.jpg'
import portfolio3 from '../../assets/portfolio3.jpg'
import portfolio4 from '../../assets/portfolio4.jpg'
import portfolio5 from '../../assets/portfolio5.jpg'
import portfolio6 from '../../assets/portfolio6.jpg'
import portfolio7 from '../../assets/portfolio7.jpg'
import portfolio8 from '../../assets/portfolio8.jpg'
import portfolio9 from '../../assets/portfolio9.jpg'

const cardData = [
    {
      imageSrc: dani, // Replace with the actual image path
      altText: 'Dani Hotels Image',
      title: 'Dani Hotels',
      description: 'Discover luxury and comfort at Dani Hotels.',
    //   link: '/portfolio/Dani-hotels',
      link: "/portfolio/Dani-hotels",
      category: "Residential",
    },
    {
      imageSrc: portfolio2,
      altText: 'Project Placeholder',
      title: 'Dr. Chingsui’s House',
      description: 'Learn more about our exciting projects.',
    //   link: '/portfolio/another-project',
      link: "/portfolio/residential1",
      category: "Commercial",
    },
    {
      imageSrc: portfolio3,
      altText: 'Sample Image',
      title: 'Colonial Abode.',
      description: 'Explore this sample project in detail.',
    //   link: '/portfolio/sample-project',
      link: "/portfolio/labs1",
      category: "Labs",
    },
    {
        imageSrc: portfolio4,
        altText: 'Sample Image',
        title: 'The Powai Home.',
        description: 'Explore this sample project in detail.',
        // link: '/portfolio/sample-project',
        link: "/portfolio/residential1",
        category: "Residential",
    },
    {
        imageSrc: portfolio5,
        altText: 'Sample Image',
        title: 'Oberoi Exquisite',
        description: 'Explore this sample project in detail.',
        // link: '/portfolio/sample-project',
        link: "/portfolio/architecture1",
        category: "Architecture",
    },
    {
        imageSrc: portfolio6,
        altText: 'Sample Image',
        title: 'Standard Greases',
        description: 'Explore this sample project in detail.',
        // link: '/portfolio/sample-project',
        link: "/portfolio/residential1",
        category: "Labs",
    },
    {
        imageSrc: portfolio7,
        altText: 'Sample Image',
        title: 'VLSR',
        description: 'Explore this sample project in detail.',
        // link: '/portfolio/sample-project',
        link: "/portfolio/architecture1",
        category: "Architecture",
    },
    {
        imageSrc: portfolio8,
        altText: 'Sample Image',
        title: "cordelier's Cafe",
        description: 'Explore this sample project in detail.',
        // link: '/portfolio/sample-project',
        link: "/portfolio/residential1",
        category: "Labs",
    },
    {
        imageSrc: portfolio9,
        altText: 'Sample Image',
        title: 'Iyer’s House',
        description: 'Explore this sample project in detail.',
        // link: '/portfolio/sample-project',
        link: "/portfolio/residential1",
        category: "Labs",
    },
  ];

export default cardData;