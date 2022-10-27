const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

// const menuOptions = document.querySelectorAll(".menu-option");
// const menuContainer = document.querySelector(".menu");

// menu.filter((item) => {
//   menuContainer.innerHTML += `
//   <img class="food-img" src=${item.img} alt="">
//     <div class="name-price">
//       <p class="name">${item.title}</p>
//       <p class="price">${item.price}</p>
//     </div>
//     <div class="desc">
//       <p>${item.desc}</p>
//     </div>
//   `;
// });

// menuOptions.forEach((menuBtn) => {
//   menuBtn.addEventListener("click", () => {
//     menuContainer.innerHTML = "";
//     if (menuBtn.innerHTML === "All") {
//       menu.filter((item) => {
//         menuContainer.innerHTML += `
//         <img src=${item.img} alt="">
//           <div class="name-price">
//             <p class="name">${item.title}</p>
//             <p class="price">${item.price}</p>
//           </div>
//           <div class="desc">
//             <p>${item.desc}</p>
//           </div>
//         `;
//       });
//     } else {
//       menu.map((item) => {
//         if (menuBtn.innerHTML === item.category) {
//           menuContainer.innerHTML += `
//         <img src=${item.img} alt="">
//           <div class="name-price">
//             <p class="name">${item.title}</p>
//             <p class="price">${item.price}</p>
//           </div>
//           <div class="desc">
//             <p>${item.desc}</p>
//           </div>
//         `;
//         }
//       });
//     }
//   });
// });

const btnContainer = document.querySelector(".btn-container");
const menuContainer = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", () => {
  displayMenu(menu);
  displayMenuButtons();
});

function displayMenu(menuItems) {
  const menuItemHtml = menuItems
    .map((item) => {
      return `
    <article class="menu-item">
    <img src=${item.img} alt="menu item" class="photo" />
    <div class="item-info">
      <header>
        <h4>buttermilk pancakes</h4>
        <h4 class="price">$15</h4>
      </header>
      <p class="item-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Repudiandae, sint quam. Et repbrehenderit fugiat nesciunt inventore
        laboriosam excepturi! Quo, officia.
      </p>
    </div>
  </article>
    `;
    })
    .join("");
  menuContainer.innerHTML = menuItemHtml;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  //console.log(categories);
  const buttonHtml = categories
    .map((item) => {
      return `
    <button type="button" class="filter-btn" data-id=${item}>
    ${item}
    </button>
    `;
    })
    .join("");

  btnContainer.innerHTML = buttonHtml;

  const buttons = btnContainer.querySelectorAll(".filter-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const targetBtn = e.currentTarget.dataset.id;
      const menuItems = menu.filter((item) => {
        if (item.category === targetBtn) {
          return item;
        }
      });
      if (targetBtn === "all") {
        displayMenu(menu);
      } else {
        displayMenu(menuItems);
      }
    });
  });
}
