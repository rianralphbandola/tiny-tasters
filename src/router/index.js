import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from '@/views/RegisterView.vue'
import LoginView from '@/views/LoginView.vue'
import BookingFormView from '@/views/BookingFormView.vue'
import Browsing1View from '@/views/Browsing-1View.vue'
import Browsing2View from '@/views/Browsing2View.vue'
import Browsing3View from '@/views/Browsing3View.vue'
import Browsing4View from '@/views/Browsing4View.vue'
import Browsing5View from '@/views/Browsing5View.vue'
import Browsing6View from '@/views/Browsing6View.vue'
import Browsing8View from '@/views/Browsing8View.vue'
import Browsing7View from '@/views/Browsing7View.vue'
import RBrowsingView from '@/views/RBrowsingView.vue'
import ElsaDetailsView from '@/views/ElsaDetailsView.vue'
import ArielDetailsView from '@/views/ArielDetailsView.vue'
import RapunzelDetailsView from '@/views/RapunzelDetailsView.vue'
import SofiaDetailsView from '@/views/SofiaDetailsView.vue'
import AnnaDetailsView from '@/views/AnnaDetailsView.vue'
import CinderellaDetailsView from '@/views/CinderellaDetailsView.vue'
import MiraculousDetailsView from '@/views/MiraculousDetailsView.vue'
import MinionDetailsView from '@/views/MinionDetailsView.vue'
import SnowWhiteDetailsView from '@/views/SnowWhiteDetailsView.vue'
import MickeyMouseDetailsView from '@/views/MickeyMouseDetailsView.vue'
import TinkerbellDetailsView from '@/views/TinkerbellDetailsView.vue'
import CarsDetailsView from '@/views/CarsDetailsView.vue'
import Spiderman1ViewDetailsView from '@/views/Spiderman1ViewDetailsView.vue'
import Spiderman2DetailsView from '@/views/Spiderman2DetailsView.vue'
import Spiderman3DetailsView from '@/views/Spiderman3DetailsView.vue'
import Spiderman4DetailsView from '@/views/Spiderman4DetailsView.vue'
import Spiderman5DetailsView from '@/views/Spiderman5DetailsView.vue'
import Hulk1DetailsView from '@/views/Hulk1DetailsView.vue'
import Hulk2DetailsView from '@/views/Hulk2DetailsView.vue'
import Batman1DetailsView from '@/views/Batman1DetailsView.vue'
import Batman2DetailsView from '@/views/Batman2DetailsView.vue'
import CaptainAmericaDetailsView from '@/views/CaptainAmericaDetailsView.vue'
import FlowBut1DetailsView from '@/views/FlowBut1DetailsView.vue'
import FlowBut2DetailsView from '@/views/FlowBut2DetailsView.vue'
import FlowBut3DetailsView from '@/views/FlowBut3DetailsView.vue'
import FlowBut4DetailsView from '@/views/FlowBut4DetailsView.vue'
import FlowBut5DetailsView from '@/views/FlowBut5DetailsView.vue'
import FlowBut6DetailsView from '@/views/FlowBut6DetailsView.vue'
import FlowBut7DetailsView from '@/views/FlowBut7DetailsView.vue'
import FlowBut8DetailsView from '@/views/FlowBut8DetailsView.vue'
import FlowBut9DetailsView from '@/views/FlowBut9DetailsView.vue'
import FlowBut10DetailsView from '@/views/FlowBut10DetailsView.vue'
import Barbie1DetailsView from '@/views/Barbie1DetailsView.vue'
import Barbie2DetailsView from '@/views/Barbie2DetailsView.vue'
import Barbie3DetailsView from '@/views/Barbie3DetailsView.vue'
import Barbie4DetailsView from '@/views/Barbie4DetailsView.vue'
import Barbie5DetailsView from '@/views/Barbie5DetailsView.vue'
import Barbie6DetailsView from '@/views/Barbie6DetailsView.vue'
import Game1DetailsView from '@/views/Game1DetailsView.vue'
import Game2DetailsView from '@/views/Game2DetailsView.vue'
import Game3DetailsView from '@/views/Game3DetailsView.vue'
import Game4DetailsView from '@/views/Game4DetailsView.vue'
import Game5DetailsView from '@/views/Game5DetailsView.vue'
import Game6DetailsView from '@/views/Game6DetailsView.vue'
import Cartoons1DetailsView from '@/views/Cartoons1DetailsView.vue'
import Cartoons2DetailsView from '@/views/Cartoons2DetailsView.vue'
import Cartoons3DetailsView from '@/views/Cartoons3DetailsView.vue'
import Cartoons4DetailsView from '@/views/Cartoons4DetailsView.vue'
import Cartoons5DetailsView from '@/views/Cartoons5DetailsView.vue'
import Cartoons6DetailsView from '@/views/Cartoons6DetailsView.vue'
import Cartoons7DetailsView from '@/views/Cartoons7DetailsView.vue'
import Cartoons8DetailsView from '@/views/Cartoons8DetailsView.vue'
import RegularCake1DetailsView from '@/views/RegularCake1DetailsView.vue'
import RegularCake2DetailsView from '@/views/RegularCake2DetailsView.vue'
import RegularCake3DetailsView from '@/views/RegularCake3DetailsView.vue'
import RegularCake4DetailsView from '@/views/RegularCake4DetailsView.vue'
import RegularCake5DetailsView from '@/views/RegularCake5DetailsView.vue'
import RegularCake6DetailsView from '@/views/RegularCake6DetailsView.vue'
import RegularCake7DetailsView from '@/views/RegularCake7DetailsView.vue'
import RegularCake8DetailsView from '@/views/RegularCake8DetailsView.vue'
import RegularCake9DetailsView from '@/views/RegularCake9DetailsView.vue'
import RegularCake10DetailsView from '@/views/RegularCake10DetailsView.vue'
import RegularCake11DetailsView from '@/views/RegularCake11DetailsView.vue'
import RegularCake12DetailsView from '@/views/RegularCake12DetailsView.vue'
import RegularCake13DetailsView from '@/views/RegularCake13DetailsView.vue'
import RegularCake14DetailsView from '@/views/RegularCake14DetailsView.vue'
import AboutTinyTasterView from '@/views/AboutTinyTasterView.vue'
import UserProfileView from '@/views/UserProfileView.vue'
import UserProfileEditView from '@/views/UserProfileEditView.vue'
import MyBookingsView from '@/views/MyBookingsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    //{
    //  path: '/login',
    //  name: 'login',
    //  component: LoginView,
    //},
    {
      path: '/booking-form',
      name: 'booking-form',
      component: BookingFormView,
    },
    {
      path: '/browsing-1',
      name: 'browsing-1',
      component: Browsing1View,
    },
    {
      path: '/browsing-2',
      name: 'browsing-2',
      component: Browsing2View,
    },
    {
      path: '/browsing-3',
      name: 'browsing-3',
      component: Browsing3View,
    },
    {
      path: '/browsing-4',
      name: 'browsing-4',
      component: Browsing4View,
    },
    {
      path: '/browsing-5',
      name: 'browsing-5',
      component: Browsing5View,
    },
    {
      path: '/browsing-6',
      name: 'browsing-6',
      component: Browsing6View,
    },
    {
      path: '/browsing-7',
      name: 'browsing-7',
      component: Browsing7View,
    },

    {
      path: '/browsing-8',
      name: 'browsing-8',
      component: Browsing8View,
    },

    {
      path: '/regular-browsing',
      name: 'regular-browsing',
      component: RBrowsingView,
    },
    {
      path: '/elsa-details',
      name: 'elsa-details',
      component: ElsaDetailsView,
    },
    {
      path: '/ariel-details',
      name: 'ariel-details',
      component: ArielDetailsView,
    },
    {
      path: '/rapunzel-details',
      name: 'rapunzel-details',
      component: RapunzelDetailsView,
    },
    {
      path: '/sofia-details',
      name: 'sofia-details',
      component: SofiaDetailsView,
    },
    {
      path: '/anna-details',
      name: 'anna-details',
      component: AnnaDetailsView,
    },
    {
      path: '/cinderella-details',
      name: 'cinderella-details',
      component: CinderellaDetailsView,
    },
    {
      path: '/miraculous-details',
      name: 'miraculous-details',
      component: MiraculousDetailsView,
    },
    {
      path: '/minion-details',
      name: 'minion-details',
      component: MinionDetailsView,
    },
    {
      path: '/snow-white-details',
      name: 'snow-white-details',
      component: SnowWhiteDetailsView,
    },
    {
      path: '/mickey-mouse-details',
      name: 'mickey-mouse-details',
      component: MickeyMouseDetailsView,
    },
    {
      path: '/tinkerbell-details',
      name: 'tinkerbell-details',
      component: TinkerbellDetailsView,
    },
    {
      path: '/cars-details',
      name: 'cars-details',
      component: CarsDetailsView,
    },
    {
      path: '/spiderman-1-details',
      name: 'spiderman-1-details',
      component: Spiderman1ViewDetailsView,
    },
    {
      path: '/spiderman-2-details',
      name: 'spiderman-2-details',
      component: Spiderman2DetailsView,
    },
    {
      path: '/spiderman-3-details',
      name: 'spiderman-3-details',
      component: Spiderman3DetailsView,
    },
    {
      path: '/spiderman-4-details',
      name: 'spiderman-4-details',
      component: Spiderman4DetailsView,
    },
    {
      path: '/spiderman-5-details',
      name: 'spiderman-5-details',
      component: Spiderman5DetailsView,
    },
    {
      path: '/hulk-1-details',
      name: 'hulk-1-details',
      component: Hulk1DetailsView,
    },
    {
      path: '/hulk-2-details',
      name: 'hulk-2-details',
      component: Hulk2DetailsView,
    },
    {
      path: '/batman-1-details',
      name: 'batman-1-details',
      component: Batman1DetailsView,
    },
    {
      path: '/batman-2-details',
      name: 'batman-2-details',
      component: Batman2DetailsView,
    },
    {
      path: '/captain-america-details',
      name: 'captain-america-details',
      component: CaptainAmericaDetailsView,
    },
    {
      path: '/flowers-and-butterflies-1-details',
      name: 'flowers-and-butterflies-1-details',
      component: FlowBut1DetailsView,
    },
    {
      path: '/flowers-and-butterflies-2-details',
      name: 'flowers-and-butterflies-2-details',
      component: FlowBut2DetailsView,
    },
    {
      path: '/flowers-and-butterflies-3-details',
      name: 'flowers-and-butterflies-3-details',
      component: FlowBut3DetailsView,
    },
    {
      path: '/flowers-and-butterflies-4-details',
      name: 'flowers-and-butterflies-4-details',
      component: FlowBut4DetailsView,
    },
    {
      path: '/flowers-and-butterflies-5-details',
      name: 'flowers-and-butterflies-5-details',
      component: FlowBut5DetailsView,
    },
    {
      path: '/flowers-and-butterflies-6-details',
      name: 'flowers-and-butterflies-6-details',
      component: FlowBut6DetailsView,
    },
    {
      path: '/flowers-and-butterflies-7-details',
      name: 'flowers-and-butterflies-7-details',
      component: FlowBut7DetailsView,
    },
    {
      path: '/flowers-and-butterflies-8-details',
      name: 'flowers-and-butterflies-8-details',
      component: FlowBut8DetailsView,
    },
    {
      path: '/flowers-and-butterflies-9-details',
      name: 'flowers-and-butterflies-9-details',
      component: FlowBut9DetailsView,
    },
    {
      path: '/flowers-and-butterflies-10-details',
      name: 'flowers-and-butterflies-10-details',
      component: FlowBut10DetailsView,
    },
    {
      path: '/barbie-1-details',
      name: 'barbie-1-details',
      component: Barbie1DetailsView,
    },
    {
      path: '/barbie-2-details',
      name: 'barbie-2-details',
      component: Barbie2DetailsView,
    },
    {
      path: '/barbie-3-details',
      name: 'barbie-3-details',
      component: Barbie3DetailsView,
    },
    {
      path: '/barbie-4-details',
      name: 'barbie-4-details',
      component: Barbie4DetailsView,
    },
    {
      path: '/barbie-5-details',
      name: 'barbie-5-details',
      component: Barbie5DetailsView,
    },
    {
      path: '/barbie-6-details',
      name: 'barbie-6-details',
      component: Barbie6DetailsView,
    },
    {
      path: '/minecraft-1-details',
      name: 'minecraft-1-details',
      component: Game1DetailsView,
    },
    {
      path: '/minecraft-2-details',
      name: 'minecraft-2-details',
      component: Game2DetailsView,
    },
    {
      path: '/roblox-details',
      name: 'roblox-details',
      component: Game3DetailsView,
    },
    {
      path: '/biker-street-details',
      name: 'biker-street-details',
      component: Game4DetailsView,
    },
    {
      path: '/moto-x3m-details',
      name: 'moto-x3m-details',
      component: Game5DetailsView,
    },
    {
      path: '/mobile-legends-details',
      name: 'mobile-legends-details',
      component: Game6DetailsView,
    },
    {
      path: '/paw-patrol-details',
      name: 'paw-patrol-details',
      component: Cartoons1DetailsView,
    },
    {
      path: '/hello-kitty-details',
      name: 'hello-kitty-details',
      component: Cartoons2DetailsView,
    },
    {
      path: '/spongebob-details',
      name: 'spongebob-details',
      component: Cartoons3DetailsView,
    },
    {
      path: '/peppa-pig-details',
      name: 'peppa-pig-details',
      component: Cartoons4DetailsView,
    },
    {
      path: '/kuromi-details',
      name: 'kuromi-details',
      component: Cartoons5DetailsView,
    },
    {
      path: '/unicorn-details',
      name: 'unicorn-details',
      component: Cartoons6DetailsView,
    },
    {
      path: '/little-charmers-details',
      name: 'little-charmers-details',
      component: Cartoons7DetailsView,
    },
    {
      path: '/cocomelon-details',
      name: 'cocomelon-details',
      component: Cartoons8DetailsView,
    },
    {
      path: '/regular-cake-1-details',
      name: 'regular-cake-1-details',
      component: RegularCake1DetailsView,
    },
    {
      path: '/regular-cake-2-details',
      name: 'regular-cake-2-details',
      component: RegularCake2DetailsView,
    },
    {
      path: '/regular-cake-3-details',
      name: 'regular-cake-3-details',
      component: RegularCake3DetailsView,
    },
    {
      path: '/regular-cake-4-details',
      name: 'regular-cake-4-details',
      component: RegularCake4DetailsView,
    },
    {
      path: '/regular-cake-5-details',
      name: 'regular-cake-5-details',
      component: RegularCake5DetailsView,
    },
    {
      path: '/regular-cake-6-details',
      name: 'regular-cake-6-details',
      component: RegularCake6DetailsView,
    },
    {
      path: '/regular-cake-7-details',
      name: 'regular-cake-7-details',
      component: RegularCake7DetailsView,
    },
    {
      path: '/regular-cake-8-details',
      name: 'regular-cake-8-details',
      component: RegularCake8DetailsView,
    },
    {
      path: '/regular-cake-9-details',
      name: 'regular-cake-9-details',
      component: RegularCake9DetailsView,
    },
    {
      path: '/regular-cake-10-details',
      name: 'regular-cake-10-details',
      component: RegularCake10DetailsView,
    },
    {
      path: '/regular-cake-11-details',
      name: 'regular-cake-11-details',
      component: RegularCake11DetailsView,
    },
    {
      path: '/regular-cake-12-details',
      name: 'regular-cake-12-details',
      component: RegularCake12DetailsView,
    },
    {
      path: '/regular-cake-13-details',
      name: 'regular-cake-13-details',
      component: RegularCake13DetailsView,
    },
    {
      path: '/regular-cake-14-details',
      name: 'regular-cake-14-details',
      component: RegularCake14DetailsView,
    },
    {
      path: '/about-tiny-tasters',
      name: '/about-tiny-tasters',
      component: AboutTinyTasterView,
    },
    {
      path: '/profile',
      name: '/profile',
      component: UserProfileView,
    },
    {
      path: '/edit-profile',
      name: '/edit-profile',
      component: UserProfileEditView,
    },
    {
      path: '/my-bookings',
      name: '/my-bookings',
      component: MyBookingsView,
    },
  ],
})

export default router
