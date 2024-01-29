import { reactive } from "vue";

export const store = reactive({
  apiUrl: 'http://127.0.0.1:8000/api/',
  apartments: [],
  foundApartments: [],
  toSearch:'',
  radius:15,
  services: [],
  autocomplete:[],
  isLoading: false,
  // apiSearchStart:'https://api.tomtom.com/search/2/geocode/',
  // apiSearchEnd: '.json?countrySet=IT&key=mqY8yECF75lXPuk7LVSI3bFjFtyEAbEX',
  // lat:'',
  // lon:'',
  team:[
    {
      name: 'Asia',
      contacts:[
        {
          mail:'asia.viscardii@gmail.com',
          linkedIn:'https://www.linkedin.com/in/asia-viscardi-47a2612a1/',
          gitHub:'Asiaviscardi'
        }
      ]
    },
    {
      name: 'Alessandro',
      contacts:[
        {
          mail:'@gmail.com',
          linkedIn:'https://www.linkedin.com/in/',
          gitHub:'https://github.com/'
        }
      ]
    },
    {
      name: 'Argel',
      contacts:[
        {
          mail:'argeldelacruz86@gmail.com',
          linkedIn:'https://www.linkedin.com/in/argel-dela-cruz-2795122a5',
          gitHub:'https://github.com/R-G2110'
        }
      ]
    },
    {
      name: 'Emanuele',
      contacts:[
        {
          mail:'@gmail.com',
          linkedIn:'https://www.linkedin.com/in/',
          gitHub:'https://github.com/'
        }
      ]
    },
    {
      name: 'Vincenzo',
      contacts:[
        {
          mail:'a95vlc17@gmail.com',
          linkedIn:'https://www.linkedin.com/in/vincenzo-li-calzi-2818b12a4/',
          gitHub:'https://github.com/VikVanDik'
        }
      ]
    },
    {
      name: 'Carmelo',
      contacts:[
        {
          mail:'@gmail.com',
          linkedIn:'https://www.linkedin.com/in/',
          gitHub:'https://github.com/'
        }
      ]
    },
  ]
});