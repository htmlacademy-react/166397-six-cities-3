import { Offer } from '../types/offer-type';

export const offers: Offer[] = [
  {
    'id': '0',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'apartment',
    'price': 120,
    'previewImage': 'img/apartment-01.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.868610000000004,
      'longitude': 2.342499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4
  },
  {
    'id': '1',
    'title': 'Wood and stone place',
    'type': 'room',
    'price': 80,
    'previewImage': 'img/room.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.868610000000004,
      'longitude': 2.342499,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 4
  },
  {
    'id': '2',
    'title': 'Canal View Prinsengracht',
    'type': 'apartment',
    'price': 132,
    'previewImage': 'img/apartment-02.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.868610000000004,
      'longitude': 2.342499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.6
  },
  {
    'id': '3',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'apartment',
    'price': 180,
    'previewImage': 'img/apartment-03.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.868610000000004,
      'longitude': 2.342499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.9
  },
  {
    'id': '4',
    'title': 'Wood and stone place',
    'type': 'room',
    'price': 80,
    'previewImage': 'img/room.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.868610000000004,
      'longitude': 2.342499,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 4.1
  }
];
