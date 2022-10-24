// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const randomBtn = document.getElementById("randomBtn");

let reviewNum = 0;

img.src = reviews[reviewNum].img;
author.innerHTML = reviews[reviewNum].name;
job.innerHTML = reviews[reviewNum].job;
info.innerHTML = reviews[reviewNum].text;

rightBtn.addEventListener("click", () => {
  if (reviewNum < 4) {
    reviewNum = reviewNum + 1;
  }
  if (reviewNum === 3) {
    reviewNum = 0;
  }
  img.src = reviews[reviewNum].img;
  author.innerHTML = reviews[reviewNum].name;
  job.innerHTML = reviews[reviewNum].job;
  info.innerHTML = reviews[reviewNum].text;
});

leftBtn.addEventListener("click", () => {
  if (reviewNum === 0) {
    reviewNum = 3;
  } else {
    reviewNum = reviewNum - 1;
  }
  img.src = reviews[reviewNum].img;
  author.innerHTML = reviews[reviewNum].name;
  job.innerHTML = reviews[reviewNum].job;
  info.innerHTML = reviews[reviewNum].text;
});

randomBtn.addEventListener("click", () => {
  reviewNum = Math.floor(Math.random() * 3);
  img.src = reviews[reviewNum].img;
  author.innerHTML = reviews[reviewNum].name;
  job.innerHTML = reviews[reviewNum].job;
  info.innerHTML = reviews[reviewNum].text;
});
