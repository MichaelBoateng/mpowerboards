import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Boards', href: getPermalink('/#boards') },
    { text: 'Demo', href: getPermalink('/#demo') },
    { text: 'About', href: getPermalink('/#about') },
    { text: 'Team', href: getPermalink('/#team') },
  ],
  actions: [{ text: 'Contact us', href: getPermalink('/#contact') }],
};

export const footerData = {
  links: [
    {
      title: 'Boards',
      links: [
        { text: 'Ghana Grid (Gh1)', href: getPermalink('/#boards') },
        { text: 'Interconnections (ISO1)', href: getPermalink('/#boards') },
        { text: 'Education Board (USA1)', href: getPermalink('/#boards') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/#about') },
        { text: 'Team', href: getPermalink('/#team') },
        { text: 'Contact', href: getPermalink('/#contact') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
    { text: 'Terms', href: getPermalink('/terms') },
  ],
  socialLinks: [{ ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:hello@mpowerboards.com' }],
  footNote: `© ${new Date().getFullYear()} MPowerBoards. Built at Georgia Tech.`,
};
