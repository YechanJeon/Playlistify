/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Spoqa Han Sans Neo', 'sans-serif']
      },
      backgroundImage : {
        ListIcon : 'url("/public/icons/ListIcon.svg")',
        NexstSongIcon : 'url("/public/icons/NexstSongIcon.svg")',
        PauseIcon : 'url("/public/icons/PauseIcon.svg")',
        PlayIcon : 'url("/public/icons/PlayIcon.svg")',
        PrevPageIcon : 'url("/public/icons/PrevPageIcon.svg")',
        PrevSongIcon : 'url("/public/icons/PrevSongIcon.svg")',
        RandomSongIcon : 'url("/public/icons/RandomSongIcon.svg")',
        SearchIcon : 'url("/public/icons/SearchIcon.svg")',
        BlSearchIcon : 'url("/public/icons/BlSearchIcon.svg")',
        VolumeIcon : 'url("/public/icons/VolumeIcon.svg")',
        XIcon : 'url("/public/icons/XIcon.svg")',
      }
    },
  },
  plugins: [],
}