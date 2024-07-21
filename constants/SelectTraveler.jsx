const SelectTravelerList = [
    {
      id: 1,
      title: 'Just Me',
      text: 'Traveling solo for some self-discovery.',
      icon: '✈️', // Person icon
      numOfPeople: '1',
    },
    {
      id: 2,
      title: 'Couple',
      text: 'Romantic getaway for two.',
      icon: '❤️', // Heart icon
      numOfPeople: '2',
    },
    {
      id: 3,
      title: 'Family (Small)',
      text: 'Fun adventures for families of 3-4.',
      icon: '‍👨‍👨‍👧‍👦', // Family of 3 icon
      numOfPeople: '3-4',
    },
    {
      id: 4,
      title: 'Family (Large)',
      text: 'Memorable experiences for families of 5 or more.',
      icon: '‍‍‍🏡', // Family of 4 icon
      numOfPeople: '5+',
    },
    {
      id: 5,
      title: 'Friends Group',
      text: 'Unforgettable trips with a group of friends.',
      icon: '🚢', // People group icon
      numOfPeople: '5+',
    },
  ];
  
export const SelectBudgetList = [
    {
      id: 1,
      title: 'Cheap',
      text: 'Explore on a shoestring and embrace adventure.',
      icon: '🎒',
    },
    {
      id: 2,
      title: 'Moderate',
      text: ' Find the perfect balance between affordability and relaxation.',
      icon: '💼', 
    },
    {
      id: 3,
      title: 'Luxury',
      text: 'Indulge in unforgettable experiences and world-class service.',
      icon: '🥂',
    }
  ];

export const GEMINI_PROMPT='Generate travel plan for location: {location} for {totalNoOfDays} Days and {nights} nights for {traveler} with a {budget} budget with a Flight details, Flight Price with booking url, Hotels Options list with HotelName, Hotel addres, Price, hotel image url, geo coordinates, rating, descriptions and places to visit nearby with placeName, Place details, place image url, Geo coordinates, ticket pricing, Time to travel each of the location for {totalNoOfDays} days and {nights} nights with each day plan with best time to visit in JSON format';

export default SelectTravelerList;