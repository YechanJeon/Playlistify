/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        eleGray : "#363636",
        bgGray : "#2c2c2c",
        selectedGray : "#595959",
      },
      fontFamily:{
        sans: ['Spoqa Han Sans Neo', 'sans-serif']
      },
      screens : {
        result6fix: {min : "1805px"},
        result5fix: {max : "1650px" , min : "1559px"},
        result4fix: {max : "1382px" , min : "1217"},
        // fix - 줄지 않는 시점
        result6: {min : "1651px"},
        result5: {max : "1650px",min : "1383px"},
        result4: {max : "1382px"},
      },
      backgroundImage : {
        ListIcon : 'url("/public/icons/ListIcon.svg")',
        NexstSongIcon : 'url("/public/icons/NextSongIcon.svg")',
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