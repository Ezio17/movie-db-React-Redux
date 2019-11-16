export let headerNav = [
  {
    name: "Фильмы",
    to: "/movies/popular"
  },
  {
    name: "Сериалы",
    to: "/tv/popular"
  },
  {
    name: "Актёры",
    to: "/actors"
  },
  {
    name: "Контакты",
    to: "footer"
  },
];

export let slider = [
  {
    url: "n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
    id: 475557
  },
  {
    url: "nRXO2SnOA75OsWhNhXstHB8ZmI3.jpg",
    id: 420818
  },
  {
    url: "5BmcysaAASA00FM0gRjD0ClMUY9.jpg",
    id: 503919
  },
  {
    url: "5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
    id: 429617
  }
];

export function setTitle(engTitle) {
  let rusTitle = "";

  switch (engTitle) {
    case "popular":
      return rusTitle = "Популярные";

    case "top_rated":
      return rusTitle = "Топ рейтинг";

    case "upcoming":
      return rusTitle = "Скоро выйдут";

    case "now_playing":
      return rusTitle = "В кинотеатре";

    default:
      return rusTitle = engTitle;
  }
}

export const options = [
  { value: 'Все', label: 'все' },
  { value: 28, label: "боевик" },
  { value: 12, label: "приключения" },
  { value: 16, label: "мультфильм" },
  { value: 35, label: "комедия" },
  { value: 80, label: "криминал" },
  { value: 99, label: "документальный" },
  { value: 18, label: "драма" },
  { value: 10751, label: "семейный" },
  { value: 14, label: "фэнтези" },
  { value: 36, label: "история" },
  { value: 27, label: "ужасы" },
  { value: 10402, label: "музыка" },
  { value: 9648, label: "детектив" },
  { value: 10749, label: "мелодрама" },
  { value: 878, label: "фантастика" },
  { value: 10770, label: "телевизионный фильм" },
  { value: 53, label: "триллер" },
  { value: 10752, label: "военный" },
  { value: 37, label: "вестерн" },
]
