import { reactive } from "vue";

export const store = reactive({
  apiUrl: 'http://127.0.0.1:8000/api/',
  apartments: [],
  foundApartments: [],
  toSearch:'',
  radius:15,
  services: [],
  autocomplete:[]
  // apiSearchStart:'https://api.tomtom.com/search/2/geocode/',
  // apiSearchEnd: '.json?countrySet=IT&key=mqY8yECF75lXPuk7LVSI3bFjFtyEAbEX',
  // lat:'',
  // lon:'',
});