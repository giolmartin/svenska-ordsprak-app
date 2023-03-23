const randomId = Math.ceil(Math.random() * 3451);

export const navbarData = [
  {
    to: '/',
    text: 'Home Page',
  },
  {
    to: '/quotes',
    text: 'Quotes',
  },
  {
    // to: `/quotes/${randomId}`,
    to: `/quotes/1`,
    text: 'Single Quote',
  },
];
