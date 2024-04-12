const Footer = {
  name: 'Footer',
  template: /*html*/`
      <footer class="section">
      <div class="container">
        <div class="pb-5 is-flex is-flex-wrap-wrap is-justify-content-between is-align-items-center">
          <div class="mr-auto mb-2">
            <router-link to="/" class="is-inline-block">
              <div v-html="svgIcon"></div>
            </router-link>
          </div>
          <div>
            <ul class="is-flex is-flex-wrap-wrap is-align-items-center is-justify-content-center">
              <li class="mr-4"><a class="button is-white" href="#">About</a></li>
              <li class="mr-4"><a class="button is-white" href="#">Company</a></li>
              <li class="mr-4"><a class="button is-white" href="#">Services</a></li>
              <li><a class="button is-white" href="#">Testimonials</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="pt-5" style="border-top: 1px solid #dee2e6;"></div>
      <div class="container">
        <div class="is-flex-tablet is-justify-content-between is-align-items-center">
          <p>All rights reserved © Jogjawae 2024</p>
          <div class="py-2 is-hidden-tablet"></div>
          <div class="ml-auto">
            <a class="mr-4 is-inline-block" href="#">
              <img src="bulma-plain-assets/socials/facebook.svg" alt="">
            </a>
            <a class="mr-4 is-inline-block" href="#">
              <img src="bulma-plain-assets/socials/twitter.svg" alt="">
            </a>
            <a class="mr-4 is-inline-block" href="#">
              <img :src="require('@/assets/svg/social-github.svg')" alt="">
            </a>
            <a class="mr-4 is-inline-block" href="#">
              <img src="bulma-plain-assets/socials/instagram.svg" alt="">
            </a>
            <a class="is-inline-block" href="#">
              <img src="bulma-plain-assets/socials/linkedin.svg" alt="">
            </a>
          </div>
        </div>
      </div>
    </footer>
  `,
  data() {
    return {
      svgIcon: `<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 300.000000 300.000000" preserveAspectRatio="xMidYMid meet">
                <metadata>Created by potrace 1.10, written by Peter Selinger 2001-2011</metadata>
                <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                <path d="M1511 2854 c-11 -14 -23 -34 -26 -44 -5 -15 -19 -20 -68 -24 -58 -5 -450 -22 -581 -26 -79 -2 -99 -13 -91 -50 5 -22 10 -137 15 -324 0 -5 26 -6 58 -3 115 13 624 34 685 29 42 -4 47 -7 47 -28 0 -13 5 -24 11 -24 7 0 9 10 7 25 -4 21 -1 25 19 25 13 0 31 4 41 9 9 6 136 15 281 20 146 6 267 15 270 20 9 13 226 158 267 177 19 9 34 18 34 19 0 2 -24 15 -52 29 -29 14 -98 53 -153 86 -98 59 -101 60 -160 55 -33 -3 -157 -11 -275 -19 -191 -12 -216 -11 -227 2 -35 43 -64 72 -72 72 -5 0 -19 -12 -30 -26z m73 -58 c-1 -8 7 -18 17 -21 25 -8 323 2 459 15 102 11 106 10 155 -14 77 -39 186 -110 187 -121 0 -5 -53 -47 -118 -91 -137 -93 -115 -88 -439 -100 -130 -4 -189 -10 -213 -21 -29 -14 -113 -14 -227 -1 -5 0 -68 -2 -140 -6 -71 -3 -182 -9 -245 -12 -63 -4 -124 -10 -137 -15 -20 -7 -23 -5 -28 24 -4 26 -25 271 -25 296 0 4 55 8 123 9 67 0 208 6 312 11 189 10 271 24 243 43 -10 7 -8 13 11 28 21 18 26 19 45 6 12 -8 20 -21 20 -30z m-760 -192 c3 -61 9 -132 12 -158 7 -48 0 -55 -29 -33 -18 13 -25 68 -28 221 -1 65 2 90 12 97 21 13 26 -6 33 -127z"/>
                <path d="M2310 2773 c58 -31 129 -67 158 -81 28 -14 52 -29 52 -34 0 -4 -15 -15 -32 -24 -18 -9 -69 -40 -113 -69 -44 -29 -102 -65 -130 -81 l-50 -29 41 -3 c37 -3 55 6 173 83 73 47 143 90 156 95 13 5 26 13 29 18 3 5 -40 33 -97 61 -56 29 -131 68 -165 87 -35 19 -78 34 -95 34 -27 0 -17 -9 73 -57z"/>
                <path d="M1470 2375 c0 -23 2 -24 20 -15 18 10 19 13 6 25 -21 21 -26 19 -26 -10z"/>
                <path d="M1602 2388 c-10 -13 -8 -18 12 -32 21 -13 56 -16 223 -15 109 0 224 4 257 8 38 5 59 4 62 -3 2 -6 5 -85 7 -176 1 -92 7 -166 12 -167 10 -3 9 166 -1 293 l-6 71 -273 -5 -273 -5 -4 23 c-3 20 -5 21 -16 8z"/>
                <path d="M2180 2362 c0 -4 4 -12 9 -17 6 -6 11 -88 13 -182 2 -95 6 -173 11 -173 4 0 7 24 8 53 0 28 2 108 3 177 2 69 -1 131 -7 138 -10 13 -37 17 -37 4z"/>
                <path d="M713 2350 c-18 -4 -68 -31 -111 -59 -43 -28 -84 -51 -90 -51 -7 0 -12 -4 -12 -8 0 -5 -27 -22 -60 -38 -33 -16 -60 -33 -60 -37 0 -4 16 -15 35 -22 18 -8 87 -46 153 -83 83 -48 133 -71 167 -76 31 -4 46 -3 40 3 -14 13 -146 85 -227 124 -98 46 -94 55 57 152 181 116 176 112 108 95z"/>
                <path d="M1045 2350 l-260 -5 -70 -45 c-38 -24 -96 -63 -127 -85 -31 -22 -65 -45 -75 -51 -16 -11 -15 -13 12 -20 30 -7 162 -81 243 -135 l43 -29 182 0 c252 0 468 11 460 23 -4 6 -120 8 -317 5 l-311 -5 -50 25 c-68 34 -225 132 -225 141 0 6 69 50 149 96 20 11 57 33 83 49 46 27 50 27 117 17 67 -10 455 -7 529 5 58 9 23 24 -51 22 -40 -1 -189 -5 -332 -8z"/>
                <path d="M1647 2013 c-9 -3 -15 -9 -11 -14 6 -10 222 -11 406 -2 190 10 104 23 -140 22 -130 -1 -245 -4 -255 -6z"/>
                <path d="M1479 1996 c-1 -3 -3 -10 -4 -16 -1 -5 -3 -30 -4 -54 l-1 -45 -42 -5 c-24 -3 -86 -8 -138 -11 -52 -3 -147 -9 -210 -15 -63 -5 -145 -10 -181 -10 -72 0 -124 -14 -132 -35 -3 -7 -1 -30 4 -51 5 -22 13 -97 17 -169 l7 -130 30 2 c69 5 287 23 380 33 55 5 133 12 173 14 39 3 77 8 82 11 6 3 10 1 10 -6 0 -7 10 -9 30 -5 l30 6 1 -88 2 -87 8 65 c5 36 7 75 4 88 -5 20 -2 22 35 22 22 0 40 5 40 11 0 7 -20 8 -63 4 -35 -4 -79 -3 -99 3 -22 6 -61 6 -104 1 -38 -5 -154 -14 -259 -20 -125 -7 -199 -16 -217 -25 -26 -13 -28 -13 -32 8 -8 37 -26 225 -26 272 l0 43 133 6 c73 4 167 11 208 16 41 5 125 12 187 14 62 3 119 10 126 16 9 7 14 32 13 64 0 42 3 53 18 56 14 2 17 -1 11 -20 -3 -13 -9 -37 -11 -54 l-5 -30 14 30 c9 17 15 41 16 53 0 14 5 22 12 20 8 -3 11 -22 10 -54 -2 -36 0 -45 7 -34 6 8 11 32 11 53 0 31 3 38 18 35 13 -2 16 -11 14 -35 -2 -17 1 -34 7 -38 7 -4 11 10 11 39 l0 46 -54 0 c-30 0 -61 3 -70 6 -9 3 -17 3 -17 0z m-666 -366 c5 -159 -4 -120 -18 75 -5 65 -4 97 3 90 5 -5 12 -80 15 -165z"/>
                <path d="M2250 1950 c0 -5 6 -10 13 -12 6 -2 72 -34 144 -73 82 -43 133 -76 133 -85 -1 -14 -179 -140 -248 -174 -37 -19 -35 -38 2 -28 32 9 324 204 325 217 1 6 -38 26 -86 45 -48 19 -115 49 -149 67 -67 35 -134 56 -134 43z"/>
                <path d="M2095 1940 c-27 -5 -70 -11 -94 -14 -44 -6 -256 -26 -278 -26 -7 0 -13 -5 -13 -11 0 -13 219 -5 330 12 156 23 159 23 240 -16 41 -20 99 -52 129 -72 51 -34 52 -36 35 -54 -41 -40 -94 -72 -229 -142 -20 -10 -99 -21 -230 -32 -110 -9 -218 -20 -240 -26 -22 -5 -56 -10 -75 -11 -19 -2 -33 -7 -30 -13 3 -5 8 -9 11 -8 3 1 46 5 95 8 49 3 105 7 124 10 36 6 77 9 245 21 85 6 103 11 125 31 14 13 34 26 44 29 10 4 68 39 128 79 l109 73 -68 37 c-37 21 -93 52 -123 68 -30 17 -68 39 -85 49 -31 19 -67 21 -150 8z"/>
                <path d="M1625 1890 c-25 -5 -27 -7 -12 -13 10 -4 31 -4 45 0 25 6 26 5 13 -11 -12 -15 -12 -19 1 -32 12 -13 20 -14 37 -5 24 13 26 24 8 39 -23 19 -61 28 -92 22z"/>
                <path d="M1822 1820 c-41 -9 -44 -13 -36 -34 4 -12 13 -15 28 -10 32 11 48 10 53 -1 2 -6 -17 -16 -41 -23 -52 -14 -66 -40 -42 -77 19 -28 57 -33 80 -10 9 9 17 11 21 5 3 -5 16 -10 27 -10 18 0 20 4 14 38 -3 20 -6 49 -6 63 0 50 -38 73 -98 59z m56 -102 c-6 -16 -36 -34 -44 -26 -3 4 -4 14 -1 23 7 17 51 21 45 3z"/>
                <path d="M1203 1781 c4 -16 9 -70 13 -120 7 -88 6 -91 -15 -91 -16 0 -21 -6 -21 -26 0 -24 2 -26 33 -20 54 10 70 40 63 116 -18 178 -15 170 -48 170 -28 0 -30 -2 -25 -29z"/>
                <path d="M1688 1803 c-14 -3 -15 -13 -10 -61 10 -87 8 -125 -5 -129 -8 -3 -13 4 -13 15 0 31 -23 43 -69 36 -47 -7 -58 10 -14 21 40 10 53 24 53 56 0 16 5 29 10 29 6 0 10 7 10 16 0 14 -9 16 -60 11 -34 -3 -67 -11 -75 -17 -21 -17 -19 -76 1 -84 13 -5 14 -9 4 -21 -10 -12 -10 -18 0 -30 10 -12 9 -16 -4 -21 -19 -7 -21 -35 -4 -52 20 -20 92 -15 122 9 21 17 26 18 26 5 0 -23 46 -20 71 5 13 13 19 29 16 42 -3 12 -9 57 -12 100 -7 77 -10 80 -47 70z m-101 -77 c-10 -25 -37 -19 -37 7 0 13 3 27 7 31 11 11 36 -21 30 -38z m33 -110 c0 -19 -58 -32 -73 -17 -9 9 -8 14 3 21 23 15 70 12 70 -4z"/>
                <path d="M1353 1770 c-48 -19 -58 -95 -18 -135 26 -27 60 -32 99 -13 50 22 43 122 -10 147 -29 13 -41 13 -71 1z m52 -81 c0 -32 -4 -44 -15 -44 -18 0 -30 53 -18 78 16 31 33 13 33 -34z"/>
                <path d="M1607 1493 c-4 -3 -7 -16 -7 -28 0 -11 -9 -38 -20 -60 -22 -43 -25 -65 -10 -65 6 0 10 8 10 18 0 10 7 27 16 38 15 19 15 19 10 -1 -2 -11 -7 -30 -11 -42 -5 -17 -2 -23 9 -23 13 0 16 14 16 85 0 85 -1 91 -13 78z"/>
                <path d="M1470 1420 c0 -64 2 -70 21 -70 13 0 18 4 13 12 -5 7 -9 33 -10 58 -3 67 -3 70 -14 70 -6 0 -10 -30 -10 -70z"/>
                <path d="M820 1419 c-30 -10 -64 -23 -75 -29 -11 -5 -40 -14 -65 -21 -25 -6 -49 -14 -55 -19 -5 -4 -27 -13 -47 -19 -21 -7 -38 -16 -37 -19 2 -20 296 -245 309 -237 7 4 -10 23 -38 43 -107 81 -202 167 -202 184 0 21 3 22 179 84 68 24 126 46 129 49 12 11 -46 2 -98 -16z"/>
                <path d="M912 1405 c-46 -18 -86 -36 -89 -39 -13 -13 25 -5 88 19 l66 26 94 -22 c92 -21 154 -31 254 -43 28 -4 69 -9 93 -12 25 -4 42 -2 42 4 0 10 -79 26 -180 37 -66 7 -249 44 -270 55 -9 5 -47 -5 -98 -25z"/>
                <path d="M712 1336 l-83 -32 68 -60 c37 -33 88 -76 113 -95 45 -34 54 -42 69 -68 8 -13 101 -33 149 -32 12 0 22 -4 22 -10 0 -5 4 -8 9 -5 4 3 35 1 67 -5 32 -6 73 -12 89 -14 17 -2 76 -11 132 -19 57 -9 107 -16 113 -16 7 0 10 -146 10 -424 0 -451 -1 -439 46 -432 17 3 20 16 25 112 3 60 2 136 -2 169 -5 33 -9 120 -9 193 0 93 -3 132 -12 132 -8 0 -9 -42 -2 -167 9 -160 8 -412 -1 -421 -2 -2 -9 -1 -14 3 -16 9 -14 818 2 812 8 -2 10 -32 8 -93 -1 -49 1 -85 5 -81 8 8 11 28 13 115 1 42 4 52 19 52 11 0 24 -17 37 -47 11 -26 22 -51 23 -55 2 -4 -3 -5 -11 -2 -10 3 -22 -4 -33 -21 -18 -27 -17 -70 5 -310 8 -83 0 -339 -12 -373 -3 -9 6 -12 42 -12 26 0 28 3 25 33 -1 17 -3 204 -3 414 l-1 382 -57 6 c-32 3 -71 12 -87 21 -27 14 -234 53 -474 89 -101 16 -95 12 -246 141 -39 33 -71 67 -71 74 0 8 28 25 63 39 34 13 62 28 62 33 0 12 -6 10 -98 -26z m876 -556 c-3 -29 -1 -51 5 -53 16 -5 16 -562 0 -578 -10 -10 -12 33 -10 202 1 133 -3 256 -12 325 -10 84 -10 117 -2 133 18 33 24 25 19 -29z"/>
                <path d="M1634 1305 c11 -8 30 -15 42 -15 12 0 61 -7 110 -16 49 -9 145 -24 214 -35 69 -11 136 -22 150 -25 14 -3 58 -8 99 -11 l74 -5 -6 -62 c-11 -110 -27 -220 -37 -250 -6 -18 -7 -33 -1 -39 11 -11 26 54 47 216 11 81 21 124 27 118 11 -11 -20 -261 -39 -308 -11 -28 -11 -33 1 -33 16 0 20 16 30 95 3 28 7 61 10 75 12 68 25 157 25 171 0 17 -18 28 -55 34 -27 4 -112 16 -155 21 -19 3 -143 23 -275 44 -133 22 -250 40 -260 40 -20 -1 -20 -1 -1 -15z"/>
                <path d="M1185 1234 c10 -137 12 -141 47 -148 17 -3 33 -5 34 -3 2 2 14 32 27 66 l24 63 6 -67 c4 -37 8 -70 11 -72 2 -2 15 -5 30 -6 24 -2 30 6 70 96 41 88 43 97 25 99 -10 0 -24 1 -31 2 -12 1 -46 -85 -47 -121 -1 -13 -5 -23 -11 -23 -6 0 -10 33 -10 80 0 62 -3 80 -14 80 -8 0 -20 2 -28 5 -9 4 -21 -15 -37 -57 -13 -35 -27 -72 -31 -83 -6 -13 -9 11 -9 68 -1 68 -4 87 -15 87 -8 0 -22 3 -31 6 -14 6 -15 -2 -10 -72z"/>
                <path d="M1500 1153 c-40 -74 -48 -98 -38 -104 23 -15 50 -10 55 12 4 15 11 19 27 15 11 -3 29 -6 39 -6 11 0 17 -8 17 -24 0 -19 6 -25 30 -28 20 -3 29 -1 27 7 -3 6 -11 53 -18 105 -7 52 -15 98 -18 101 -3 4 -20 9 -38 12 -31 6 -32 5 -83 -90z m90 12 c0 -46 -2 -51 -20 -47 -20 5 -20 3 -7 45 15 47 27 48 27 2z"/>
                <path d="M1701 1129 c-7 -51 -15 -98 -18 -105 -2 -7 11 -14 34 -18 21 -4 50 -9 64 -12 22 -4 27 -1 31 20 4 22 1 26 -18 26 -38 0 -52 10 -47 31 5 17 11 20 39 14 31 -5 34 -4 34 20 0 21 -4 25 -31 25 -24 0 -30 4 -27 18 4 18 7 18 51 8 24 -6 27 -4 27 18 0 25 -2 26 -90 41 l-36 6 -13 -92z"/>
                <path d="M1650 952 c16 -11 296 -57 440 -74 47 -5 102 -13 123 -18 20 -4 39 -4 42 0 7 12 -44 29 -110 36 -33 3 -134 17 -225 31 -202 30 -291 38 -270 25z"/> </g>
                </svg>`
    };
  }
}

export default Footer