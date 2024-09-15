/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    './pages/**/*.{html,js}',
    "./node_modules/tw-elements/js/**/*.js",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
        // biru
        biru1: '#d2e0f0',
        biru2: '#b3cbe6',
        biru3: '#8eb2da',
        biru4: '#6898cd',
        biru5: '#427ec1',
        biru6: '#1c64b4',
        biru7: '#175396',
        biru8: '#134378',
        biru9: '#0e325a',
        biru10: '#09213c',
        biru11: '#061424',
        // biruLangit
        biruLangit1: '#E6F1F9',
        biruLangit2: '#D6E8F6',
        biruLangit3: '#C2DDF1',
        biruLangit4: '#ADD2EC',
        biruLangit5: '#99C6E8',
        biruLangit6: '#84BBE3',
        biruLangit7: '#6E9CBD',
        biruLangit8: '#587D97',
        biruLangit9: '#425E72',
        biruLangit10: '#2C3E4C',
        biruLangit11: '#1A252D',
        // biruTua
        biruTua1: '#d3dbe4',
        biruTua2: '#b6c3d1',
        biruTua3: '#92a5bb',
        biruTua4: '#6d87a4',
        biruTua5: '#49698d',
        biruTua6: '#244b76',
        biruTua7: '#1e3f62',
        biruTua8: '#18324f',
        biruTua9: '#12263b',
        biruTua10: '#0c1927',
        biruTua11: '#070f18',
        // biruLaut
        biruLaut1: '#f2fbff',
        biruLaut2: '#eaf8ff',
        biruLaut3: '#dff5ff',
        biruLaut4: '#d4f2ff',
        biruLaut5: '#caeeff',
        biruLaut6: '#bfebff',
        biruLaut7: '#9fc4d5',
        biruLaut8: '#7f9daa',
        biruLaut9: '#607680',
        biruLaut10: '#404e55',
        biruLaut11: '#262f33',
        // hijau
        hijau1: '#e8f8f6',
        hijau2: '#c7eeea',
        hijau3: '#9ADFD8',
        hijau4: '#6cd2c7',
        hijau5: '#3fc5b6',
        hijau6: '#15b8a6',
        hijau7: '#129c8d',
        hijau8: '#0f8376',
        hijau9: '#0c695f',
        hijau10: '#09534b',
        hijau11: '#023A34',
        // kuning
        kuning1: '#fdf0ce',
        kuning2: '#fbe6ae',
        kuning3: '#fad985',
        kuning4: '#f8cc5c',
        kuning5: '#f6c034',
        kuning6: '#f4b30b',
        kuning7: '#cb9509',
        kuning8: '#a37707',
        kuning9: '#7a5a06',
        kuning10: '#513c04',
        kuning11: '#312402',
        // violet
        violet1: '#f5f2fe',
        violet2: '#e6dffd',
        violet3: '#d2c5fb',
        violet4: '#bdaaf9',
        violet5: '#a990f7',
        violet6: '#9678f5',
        violet7: '#8066d0',
        violet8: '#6b55ae',
        violet9: '#56448c',
        violet10: '#44366e',
        violet11: '#2F2352',
       },
       
       backgroundImage: {
         // biru
         'gr-biru-86': 'linear-gradient(to right, theme(colors.biru8) 0%, theme(colors.biru6) 100%)',
         'gr-biru-108': 'linear-gradient(to right, theme(colors.biru10) 0%, theme(colors.biru8) 100%)',
         'gr-biru-12': 'linear-gradient(to right, theme(colors.biru1) 0%, theme(colors.biru2) 100%)',
         
         // biruLangit
         'gr-biruLangit-86': 'linear-gradient(to right, theme(colors.biruLangit8) 0%, theme(colors.biruLangit6) 100%)',
         'gr-biruLangit-108': 'linear-gradient(to right, theme(colors.biruLangit10) 0%, theme(colors.biruLangit8) 100%)',
         'gr-biruLangit-12': 'linear-gradient(to right, theme(colors.biruLangit1) 0%, theme(colors.biruLangit2) 100%)',
         
         // biruTua
         'gr-biruTua-86': 'linear-gradient(to right, theme(colors.biruTua8) 0%, theme(colors.biruTua6) 100%)',
         'gr-biruTua-108': 'linear-gradient(to right, theme(colors.biruTua10) 0%, theme(colors.biruTua8) 100%)',
         'gr-biruTua-12': 'linear-gradient(to right, theme(colors.biruTua1) 0%, theme(colors.biruTua2) 100%)',
         
         // biruLaut
         'gr-biruLaut-86': 'linear-gradient(to right, theme(colors.biruLaut8) 0%, theme(colors.biruLaut6) 100%)',
         'gr-biruLaut-108': 'linear-gradient(to right, theme(colors.biruLaut10) 0%, theme(colors.biruLaut8) 100%)',
         'gr-biruLaut-12': 'linear-gradient(to right, theme(colors.biruLaut1) 0%, theme(colors.biruLaut2) 100%)',
         
         // hijau
         'gr-hijau-86': 'linear-gradient(to right, theme(colors.hijau8) 0%, theme(colors.hijau6) 100%)',
         'gr-hijau-108': 'linear-gradient(to right, theme(colors.hijau10) 0%, theme(colors.hijau8) 100%)',
         'gr-hijau-12': 'linear-gradient(to right, theme(colors.hijau1) 0%, theme(colors.hijau2) 100%)',
         
         // kuning
         'gr-kuning-86': 'linear-gradient(to right, theme(colors.kuning8) 0%, theme(colors.kuning6) 100%)',
         'gr-kuning-108': 'linear-gradient(to right, theme(colors.kuning10) 0%, theme(colors.kuning8) 100%)',
         'gr-kuning-12': 'linear-gradient(to right, theme(colors.kuning1) 0%, theme(colors.kuning2) 100%)',

         // violet
         'gr-violet-86': 'linear-gradient(to right, theme(colors.violet8) 0%, theme(colors.violet6) 100%)',
         'gr-violet-108': 'linear-gradient(to right, theme(colors.violet10) 0%, theme(colors.violet8) 100%)',
         'gr-violet-12': 'linear-gradient(to right, theme(colors.violet1) 0%, theme(colors.violet2) 100%)',
       },

       boxShadow: {
        'box1': '0 12px 24px 0 theme(colors.violet8 / 25%)',
        'box2': '0 12px 24px 0 theme(colors.violet10 / 25%)',
       },

       dropShadow: {
        'drop1': '-8px 8px 12px theme(colors.violet10 / 33%)',
        'drop2': '0 8px 24px theme(colors.violet8 / 25%)',
       }
       
    },
  },
  plugins: [
    require("tw-elements/plugin.cjs"),
     require('flowbite/plugin')
  ],
  darkMode: "class"
}

