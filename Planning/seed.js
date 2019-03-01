var faker = require('faker');

// user seed data

users = { 
  user1: {
    id: 1,
    name: "Bob Collins",
    email: "bob@user.com",
  },
  user2: {
    id: 2,
    name: "Suzy Halpert",
    email: "suzy@user.com",
  }
}

trips = {
  trip1: {
    id: 't01',
    name: "Christmas trip",
    dt_start: new Date('December 24, 2019'),
    dt_end: new Date('January 3, 2020'),
    destination: 'Cancun',
    user_id: 2
  },
  trip2: {
    id: 't02',
    name: "Summer holidays in Europe",
    dt_start: new Date('July 1, 2019'),
    dt_end: new Date('July 15, 2020'),
    destination: 'Switzerland',
    user_id: [1,2]
  },
  trip3: {
    id: 't03',
    name: "Valentine day in Paris",
    destination: 'Paris',
    dt_start: new Date('February 10, 2019'),
    dt_end: new Date('February 20, 2019'),
    user_id: [1]
  }
}

itinerary_items = {
  item1: {
    id: 'i01',
    dt_start:  new Date('December 24, 2019 08:20:00'),
    dt_end: new Date('January 3, 2020 10:30:00'),
    type: 'T',
    from: 'Vancouver',
    to: 'Cancun',
    confirmation: 'ABC4YQ',
    trip_id: 't01'
  },
  item2: {
    id: 'i02',
    dt_start:  new Date('December 24, 2019 08:20:00'),
    dt_end: new Date('January 3, 2020 10:30:00'),
    type: 'A',
    title: 'Mariott Cancun Resort',
    details: 'booking pending',
    address: ' Boulevard Kukulcan Retorno Chac, Zona Hotelera, 77500 Cancún, Q.R., Mexico',
    trip_id: 't01',
  },
  item3: {
    id: 'i03',
    dt_start: new Date('December 27, 2019 08:20:00'),
    type: 'E',
    title: 'Day trip to Chechen Itza',
    details: 'Rent a car from hotel. Drive should take 2 hours',
    trip_id: 't01',
  },
  item4: {
    id: 'i04',
    dt_start: new Date('December 31, 2019 20:00:00'),
    dt_end: new Date('January 1, 2020 01:00:00'),
    type: 'E',
    title: 'New year party',
    details: 'www.partyatcancun2019.com',
    trip_id: 't01',
  },
  item5: {
    id: 'i05',
    dt_start: new Date('January 2, 2020 11:30:00'),
    type: 'E',
    title: 'Brunch',
    details: faker.lorem.paragraph(),
    trip_id: 't01',
  },
  item6: {
    id: 'i06',
    dt_start:  new Date('July 1, 2019 06:20:00'),
    dt_end: new Date('July 15, 2020 20:30:00'),
    type: 'T',
    from: 'Vancouver',
    to: 'Basel',
    confirmation: 'ABC4YQ',
    trip_id: 't02',
  },
  item7: {
    id: 'i07',
    dt_start:  new Date('July 1, 2019 14:30:00'),
    dt_end: new Date('July 5, 2019 10:30:00'),
    type: 'A',
    title: 'Basel Sheraton',
    address: faker.address.streetAddress(),
    trip_id: 't02',
  },
  item8: {
    id: 'i08',
    dt_start:  new Date('July 5, 2019 14:30:00'),
    dt_end: new Date('July 15, 2019 10:30:00'),
    type: 'A',
    title: 'Geneva Marriot',
    address: faker.address.streetAddress(),
    trip_id: 't02',
  },
}

// viewing seed data

console.log(users, trips, itinerary_items)
