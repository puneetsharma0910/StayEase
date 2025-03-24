const sampleListings = [
  {
    title: "Modern Apartment in City Center",
    description:
      "A stylish and modern apartment located in the heart of the city, close to all major attractions.",
    price: 12000,
    location: "New York, NY",
    country: "USA", // Add this field
    image:
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Cozy Cabin in the Woods",
    description:
      "Escape to this cozy cabin surrounded by nature, perfect for a relaxing getaway.",
    price: 90,
    location: "Asheville, NC",
    country: "USA", // Add this field
    image:
     "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Luxury Beachfront Villa",
    description: "A stunning villa with ocean views and private beach access.",
    price: 350,
    location: "Malibu, CA",
    country: "USA", // Add this field
    image:
     "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      
  },
  {
    title: "Spacious Family Home",
    description:
      "A perfect home for families, featuring a large backyard and plenty of space.",
    price: 200,
    location: "Austin, TX",
    country: "USA", // Add this field
    image:
     "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Charming Cottage",
    description: "A charming and peaceful cottage ideal for a quiet retreat.",
    price: 110,
    location: "Nashville, TN",
    country: "USA", // Add this field
    image:
     "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Penthouse with Skyline View",
    description: "A luxurious penthouse with an amazing skyline view.",
    price: 500,
    location: "Los Angeles, CA",
    country: "USA", // Add this field
    image:
     "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Rustic Farmhouse",
    description:
      "A beautiful rustic farmhouse, perfect for a countryside escape.",
    price: 150,
    location: "Dallas, TX",
    country: "USA", // Add this field
    image:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Bohemian Loft",
    description:
      "A unique loft with a bohemian vibe, located in a vibrant area.",
    price: 220,
    location: "San Francisco, CA",
    country: "USA", // Add this field
    image:
     "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Mountain Retreat",
    description: "A peaceful retreat in the mountains, ideal for relaxation.",
    price: 180,
    location: "Denver, CO",
    country: "USA", // Add this field
    image:
      "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Urban Studio Apartment",
    description: "A compact and stylish studio in the heart of the city.",
    price: 140,
    location: "Chicago, IL",
    country: "USA", // Add this field
    image:
      "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Beach Bungalow",
    description:
      "A charming bungalow right on the beach, great for ocean lovers.",
    price: 275,
    location: "Miami, FL",
    country: "USA", // Add this field
    image:
     "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Ski Lodge",
    description: "A cozy ski lodge perfect for winter sports enthusiasts.",
    price: 300,
    location: "Aspen, CO",
    country: "USA", // Add this field
    image:
     "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Desert Oasis",
    description: "A unique and luxurious home in the middle of the desert.",
    price: 400,
    location: "Phoenix, AZ",
    country: "USA", // Add this field

    image:
      "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Historic Townhouse",
    description:
      "A beautifully preserved historic townhouse in a charming district.",
    price: 190,
    location: "Boston, MA",
    country: "USA", // Add this field
    image:
      "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Lakeside Cottage",
    description: "A quiet cottage with stunning lake views.",
    price: 130,
    location: "Minneapolis, MN",
    country: "USA", // Add this field
    image:
      "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
];

module.exports = sampleListings;