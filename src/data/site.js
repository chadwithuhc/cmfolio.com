import home from './home'
import resume from './resume'
import web from './web'
import photoVideo from './photo-video'
import friends from './friends'

export default {
  siteName: 'cmfolio',
  year: (new Date()).getFullYear(),
  description: 'welcome to cmfolio, the portfolio work of cm',
  ga_account_id: 'UA-5917637-10',

  navLinks: [
    {name: 'Web Development', description: 'UI/UX Development, Prototyping', url: '/web/'},
    {name: 'Photo & Video', description: 'Adventures, Action Sports', url: '/photo-video/'},
    {name: 'Talented Friends', description: 'Creatives, Athletes', url: '/friends/'}
  ],

  pages: {
    home,
    resume,
    web,
    'photo-video': photoVideo,
    friends
  },

  socialLinks: [
    {name: 'Github', icon: 'fa-github', url: 'https://github.com/chadwithuhc'},
    {name: 'Twitter', icon: 'fa-twitter', url: 'https://twitter.com/ched_dev'},
    {name: 'YouTube', icon: 'fa-youtube', url: 'https://www.youtube.com/@ched_dev'},
    {name: 'Twitch', icon: 'fa-twitch', url: 'https://twitch.tv/ched_dev'},
  ]

}
