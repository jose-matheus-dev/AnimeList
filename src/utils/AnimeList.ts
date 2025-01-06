type AnimeProps = {
  id: number;
  name: string;
  arc: string;
  description: string;
  cover: string;
  colors: [string, string];
  accent: string;
};

const animes: AnimeProps[] = [
  {
    id: 1,
    name: 'Jujutsu Kaisen',
    arc: 'Shibuya Incident',
    description:
      'The Shibuya Incident arc begins on October 31st, when a cursed veil isolates Shibuya. Sorcerers battle spirits and curses in chaotic, high-stakes clashes. Tragedies and shocking plot twists decisively reshape the course of the story.',
    cover:
      'https://m.media-amazon.com/images/M/MV5BZDZkMGQzOWItZGMzZC00MDVhLWI3NTYtN2ZlMDA4ODliMzJhXkEyXkFqcGc@._V1_.jpg',
    colors: ['#be91e7', '#9239e5'],
    accent: '#be91e7',
  },
  {
    id: 2,
    name: 'Demon Slayer',
    arc: 'Tanjiro Kamado, Unwavering Resolve',
    description:
      'Tanjiro fights to cure his sister Nezuko and joins the Demon Slayer Corps, confronting powerful demons with unyielding determination.',
    cover:
      'https://m.media-amazon.com/images/M/MV5BNmQ5Zjg2ZTYtMGZmNC00M2Y3LTgwZGQtYmQ3NWI5MDdhZWNjXkEyXkFqcGc@._V1_.jpg',
    colors: ['#5ed6cb', '#1b352f'],
    accent: '#5ed6cb',
  },
  {
    id: 3,
    name: 'Spy × Family',
    arc: 'Operation Strix',
    description:
      'The first season of Spy × Family follows the story of a spy, an assassin, and a telepathic child who form a fake family for a secret mission.',
    cover:
      'https://m.media-amazon.com/images/M/MV5BZDkwNjc0NWEtNzJlOC00N2YwLTk4MjktZGFlZDE2Y2QzOWI0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    colors: ['#b4effd', '#1b3b67'],
    accent: '#b4effd',
  },
];

export { animes };
export type { AnimeProps };
