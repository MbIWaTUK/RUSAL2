import {
  House,
  Document,
  Invoice,
  Location,
  Clipboard,
  Chat,
  Help,
} from 'assets/svg/';

export const links = [
  {
    id: 1,
    text: 'Main Page',
    link: '/',
    icon: House,
  },
  {
    id: 2,
    text: 'Shipping documents',
    link: '/documents',
    icon: Document,
  },
  {
    id: 3,
    text: 'Payment documents',
    link: '/payment',
    icon: Invoice,
  },
  {
    id: 4,
    text: 'Tracking',
    link: '/tracking',
    icon: Location,
  },
  {
    id: 5,
    text: 'ALLOW Digital Passport',
    link: '/digital-passports',
    icon: Clipboard,
  },
  {
    id: 6,
    text: 'Feedback',
    link: '/feedback',
    icon: Chat,
  },
  {
    id: 7,
    text: 'Instructions',
    link: '/instructions',
    icon: Help,
  },
];
