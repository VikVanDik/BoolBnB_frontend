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
  lat:null,
  lon:null,
  team:[
    {
      name: 'Asia Viscardi',
      img:'/asia-linkedin.jpg',
      contacts:[
        {
          mail:'asia.viscardii@gmail.com',
          linkedIn:'https://www.linkedin.com/in/asia-viscardi-47a2612a1/',
          gitHub:'Asiaviscardi'
        }
      ]
    },
    {
      name: 'Alessandro Cingolani',
      img:'/alessandro-linkedin.jpg',
      contacts:[
        {
          mail:'cingolani.alessandro93@gmail.com',
          linkedIn:'www.linkedin.com/in/alessandro-cingolani-3134b72a8',
          gitHub:'https://github.com/AlessandroCingolani'
        }
      ]
    },
    {
      name: 'Argel Dela Cruz',
      img:'/argel-linkedin.jpg',
      contacts:[
        {
          mail:'argeldelacruz86@gmail.com',
          linkedIn:'https://www.linkedin.com/in/argel-dela-cruz-2795122a5',
          gitHub:'https://github.com/R-G2110'
        }
      ]
    },
    {
      name: 'Emanuele Di Leo',
      img:'/emanuele-linkedin.jpg',
      contacts:[
        {
          mail:'dileoemanuele11@gmail.com',
          linkedIn:'https://www.linkedin.com/in/emanuele-di-leo-142645203/',
          gitHub:'https://github.com/EmanueleDiLeo'
        }
      ]
    },
    {
      name: 'Vincenzo Li Calzi',
      img:'/vincenzo-linkedin.JPG',
      contacts:[
        {
          mail:'a95vlc17@gmail.com',
          linkedIn:'https://www.linkedin.com/in/vincenzo-li-calzi-2818b12a4/',
          gitHub:'https://github.com/VikVanDik'
        }
      ]
    },
    {
      name: 'Carmelo Cammalleri',
      img:'/carmelo-linkedin.jpg',
      contacts:[
        {
          mail:'carmecamma1995@gmail.com',
          linkedIn:'https://www.linkedin.com/in/carmelo-cammalleri-9404a92a5/',
          gitHub:'https://github.com/carmelocammalleri'
        }
      ]
    },
  ]
});