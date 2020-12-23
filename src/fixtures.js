const restaurants = [
  {
    id: 'a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2',
    name: 'Dishoom',
    location: {
      lat: 51.51307933813641,
      lng: -0.13968944549560547,
    },
    image:
      'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/12065623_177150569292352_3493242754411252126_n.jpg?_nc_cat=108&_nc_ht=scontent-waw1-1.xx&oh=94f9c77559a2f31edf4fd68a89b6dda7&oe=5D6D6D4A',
    menu: [
      {
        id: 'd75f762a-eadd-49be-8918-ed0daa8dd024',
        name: 'Chicken tikka masala',
        price: 12,
        ingredients: ['chicken', 'rice'],
      },
      {
        id: 'c3cb8f92-a2ed-4716-92a1-b6ea813e9049',
        name: 'Naan',
        price: 3,
        ingredients: ['bread'],
      },
      {
        id: 'bd129641-c0eb-432b-84b6-8b81d2930358',
        name: 'Samosa',
        price: 8,
        ingredients: ['chicken', 'bread'],
      },
    ],
    reviews: [
      {
        id: '5909796d-5030-4e36-adec-68b8f9ec2d96',
        user: 'Antony',
        text: 'Not bad',
        rating: 5,
      },
      {
        id: '429dea85-11dd-4054-a31e-c60c92e17255',
        user: 'Sam',
        text: 'No burgers',
        rating: 3,
      },
    ],
  },

  {
    id: 'bb8afbec-2fec-491f-93e9-7f13950dd80b',
    name: 'Homeslice',
    location: {
      lat: 51.51847684708113,
      lng: -0.13999606534701844,
    },
    image:
      'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/14492346_873920782710134_3797018371088115698_n.jpg?_nc_cat=108&_nc_ht=scontent-waw1-1.xx&oh=31de8f2906284981f858f7fdf36b0235&oe=5D6AA774',
    menu: [
      {
        id: '25402233-0095-49ea-9939-1e67ed89ffb9',
        name: 'Margarita',
        price: 9,
        ingredients: ['bread', 'cheese', 'tomatoes'],
      },
      {
        id: '90902233-0095-49ea-9939-1e67ed89ffb9',
        name: 'Chef pizza',
        price: 10,
        ingredients: ['bread', 'cheese', 'tomatoes', 'chicken'],
      },
    ],
    reviews: [
      {
        id: '53b642d7-5e86-4717-a466-0640a1dee076',
        user: 'Diana',
        text: 'Perfect Margarita',
        rating: 5,
      },
      {
        id: 'c27ab88e-375c-4e98-aa94-8a180150a797',
        user: 'Sam',
        text: 'No burgers again. But Chef Pizza is the best one',
        rating: 4,
      },
      {
        id: 'abc0c5e1-cd57-4f0a-99d9-00e6b4533b3a',
        user: 'Lolly',
        text: 'Good for lunch',
        rating: 5,
      },
    ],
  },
  {
    id: '982bfbce-c5e0-41a0-9f99-d5c20ecee49d',
    name: 'Fabrique',
    location: {
      lat: 51.513614456342495,
      lng: -0.1284961359927072,
    },
    image: 'http://fabrique.co.uk/wp-content/uploads/2012/11/our22.png',
    menu: [
      {
        id: '08c9ffa0-d003-4310-9e15-20978743296e',
        name: 'Cinnamon buns',
        price: 5,
        ingredients: ['bread'],
      },
      {
        id: '64a4967c-2080-4a99-9074-4655a4569a95',
        name: 'Semlor',
        price: 2,
        ingredients: ['bread', 'cream'],
      },
      {
        id: '4bc8528e-26d1-46c3-a522-8e18d10c8c84',
        name: 'Saffron bun',
        price: 4,
        ingredients: ['bread'],
      },
    ],
    reviews: [
      {
        id: '53b642d7-5e86-4717-a466-0640a1dee076',
        user: 'Agata',
        text: 'Best bakery',
        rating: 5,
      },
    ],
  },
  {
    id: 'd9241927-09e1-44f3-8986-a76346869037',
    name: 'Flat Iron',
    location: {
      lat: 51.51084146746025,
      lng: -0.12409270211070839,
    },
    image:
      'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/602319_106412009502974_1112399097_n.jpg?_nc_cat=110&_nc_ht=scontent-waw1-1.xx&oh=c23931271965e9edd3921d559f7440ba&oe=5D6CC921',
    menu: [
      {
        id: '6c02c2ce-b868-4191-b4a7-8686429f4bac',
        name: 'Flat Iron Steak',
        price: 10,
        ingredients: ['beef'],
      },
      {
        id: '99bb6fbb-e53b-4b7e-b9c2-23b63b77385d',
        name: 'Flat Iron Burger',
        price: 10,
        ingredients: ['bread', 'beef'],
      },
    ],
    reviews: [
      {
        id: '5db6247b-ab1c-49db-be1f-8dd27fd38b81',
        user: 'Sam',
        text:
          'Finally! This place is amazing place for breakfast, lunch, dinner and supper',
        rating: 5,
      },
      {
        id: '381b0c31-6360-43ff-80d1-581a116159d8',
        user: 'Rebeca',
        text: 'Meat here is extremely delicious',
        rating: 5,
      },
    ],
  },
];

export { restaurants };
