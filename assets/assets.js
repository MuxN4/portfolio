import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import next from './next.png';
import javascript from './javascript.svg';
import react from './react.svg';
import tailwind from './Tailwind.svg';
import python from './Python.svg';
import postgres from './Postgres.svg';
import git from './git.png';
import go from './Go.svg';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.svg';
import logo_dark from './logo_dark.svg';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import download_icon from './download-icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import send_icon_white from './send-icon-white.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    next,
    javascript,
    react,
    tailwind,
    git,
    go,
    python,
    postgres,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    download_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    right_arrow,
    send_icon,
    send_icon_white,
    right_arrow_bold,
    right_arrow_bold_dark
};

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const workData = [
    {
        title: 'Summafy',
        description: 'Built an AI-powered app for quick web article summaries using GPT-4 via RapidAPI.',
        bgImage: '/summafy.png',
        url: 'https://summafy-ai.netlify.app/',
    },
    {
        title: 'Ingredu',
        description: 'Recipe finder app using Edamam API, with detailed recipes, YouTube links, and local favorites.',
        bgImage: '/ingredu.png',
        url: 'https://ingredu.vercel.app/',
    },
    {
        title: 'Linkup',
        description: 'Built a social platform for meaningful connections and seamless interactions.',
        bgImage: '/linkup.png',
        url: 'https://linkup-hub.vercel.app/',
    },
    {
        title: 'Safari Track',
        description: "Designed a stunning landing page for SafariTrack, showcasing Kenya's beauty and enhancing UX.",
        bgImage: '/safaritrack.png',
        url: 'https://safari-track.vercel.app/',
    },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'JavaScript, Python, Go' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolkit = [
    assets.vscode,assets.next, assets.javascript, assets.react, assets.postgres, assets.tailwind, assets.git, assets.go, assets.python
];

export const socialLinks = [
  {
    id: "github",
    href: "https://github.com/MuxN4",
    icon: <FaGithub size={24} />,
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/s-onyango/",
    icon: <FaLinkedin size={24} />,
  },
//   {
//     id: "twitter",
//     href: "https://twitter.com/yourtwitter",
//     icon: <FaTwitter size={24} />,
//   },
];
