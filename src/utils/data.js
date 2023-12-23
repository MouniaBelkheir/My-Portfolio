import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  // {
  //   name: "Frontend",
  //   projects: 2,
  //   icon: HiOutlineDesktopComputer,
  //   bg: "#286F6C",
  // },
];

export const WhatDoIHelp = [
  "Into seamless digital experiences, I specialize in frontend web development. I craft not just websites, but strategic solutions that empower businesses to thrive in the digital landscape.",
];

export const workExp = [
  {
    place: "Self-Employed",
    tenure: "Nov 2019 - Present",
    role: "Education Professional",
    detail:
      "Experienced educator dedicated to inclusive teaching, adaptive learning, and community collaboration. Committed to lifelong learning and innovation, I inspire students for success in a dynamic world.",
  },
  {
    place: "Creative Minds Center - CMC",
    tenure: "Mar 2017 - Nov 2019",
    role: "Founder and Head of School",
    detail:
      "Led institution, overseeing curriculum, administration, and compliance. Built a team for academic excellence and growth, adapted to trends, maintained strong community ties, ensuring transformative student experiences.",
  },
  {
    place: "Judicial Council of Biskra",
    tenure: "Sep 2011 - Mar 2017",
    role: "Administration Assistant",
    detail:
      "I managed documentation, organized meetings, and ensured compliance. Facilitated departmental communication and supported legal standards.",
  },
];

export const comments = [
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
 ];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
