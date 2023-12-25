// Create a style element
const dynamicStyles = document.createElement("style");
dynamicStyles.innerHTML = `
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Poppins:wght@400;500;600&display=swap");
.banner {
  display: grid;
  grid-template-columns: 5fr 1fr;
  max-width: 630px;
  border: 1px solid #033934;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}
.banner_display {
  display: flex;
  justify-content: flex-start;
  gap: 32px;
  background-color: #eff7eb;
  padding: 12px 0 12px 12px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    align-items: center;
    justify-content: center;
    padding: 12px;
    text-align: center;
  }
}
.image_wrapper {
  background-color: #033934;
  text-align: center;
  color: #eff7eb;
  font-family: Poppins;
  font-size: 10px;
  font-weight: 500;
}
.display_picture {
  margin: 0;
  width: 116px;
  height: 98px;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.image_text {
  margin-block: 2px;
  display: block;
}
.banner_info {
  width: 290px;
  @media (max-width: 768px) {
    width: 100%;
  }
}
.banner_title {
  margin-block: 4px 10px;
  color: #033934;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
}
.banner_selector {
  max-width: 216px;
  height: 25px;
  border-radius: 16px;
  border: 1px solid #033934;
  display: flex;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    margin: 0 auto;
    margin-bottom: 10px;
  }
}

.banner_selector button {
  width: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 16px;
  transition: all 0.2s ease-in;
  text-align: center;
  font-family: Poppins;
  font-size: 10px;
  font-weight: 400;
}

.banner_selector .active {
  background: #033934;
  color: white;
}

.banner_selector button:not(.active) {
  color: #033934;
  background: transparent;
}
.slider_header {
  margin: 0 0 12px 2px;
  display: block;
  color: #033934;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 500;
}
.price_highlight {
  font-family: Poppins;
  background-color: #efe3ad;
  border-bottom: 2px solid #f3b51b;
  font-style: italic;
}

.banner_cta {
  background-color: #033934;
  padding: 12px 5px;
  text-align: center;
}
.cta_text {
  display: block;
  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-size: 10px;
  font-weight: 400;
  margin-bottom: 2px;
}
.cta_result {
  display: block;
  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 7px;
}
.company_logo {
  width: 78px;
  height: 32px;
  margin: 0 auto;
  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
.cta_btn {
  background: #f3b51b;
  margin-bottom: 15px;
  > a {
    display: block;
    width: 127px;
    padding-block: 4px;
    color: #033934;
    font-family: Poppins;
    font-size: 10px;
    font-weight: 600;
    text-decoration: none;
  }
  @media (max-width: 768px) {
    margin: 0 auto;
    margin-bottom: 10px;
  }
}
.noUi-connects {
  border-radius: 12px;
}
.noUi-pips-horizontal {
  height: 9px;
}
.noUi-target {
  border-radius: 12px;
  padding-inline: 10px 13px;
  background: rgba(3, 57, 52, 0.15);
  border: none;
  box-shadow: none;
}
.noUi-connect {
  background-color: transparent;
}
.noUi-pips .noUi-marker {
  background: rgba(3, 57, 52, 0.2);
  width: 2px;
  height: 18px;
  top: -90%;
}
.noUi-pips .noUi-marker:first-child {
  margin-left: 13px;
}
.noUi-pips .noUi-marker:nth-child(5) {
  margin-left: -13px;
}
.noUi-pips .noUi-value {
  display: none;
}
.noUi-handle {
  cursor: pointer;
  width: 28px !important;
  height: 28px !important;
  background-color: #033934;
  border-radius: 30px;
  flex-shrink: 0;
  box-shadow: none;
  border: none;
}
.noUi-handle::before {
  display: none;
}
.noUi-handle::after {
  background-image: url("img/horseshoe.png");
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-45%, -45%);
  border-radius: 30px;
  background-color: transparent;
  width: 28px;
  height: 28px;
}
`;

const bannerContainer = document.createElement("div");
bannerContainer.innerHTML = `
<div class="banner">
<div class="banner_display">
  <div class="image_wrapper">
    <figure class="display_picture">
      <img src="img/handsome-horse.jpg" alt="" />
    </figure>
    <span class="image_text" id="horse_price">[Pris på häst]</span>
  </div>
  <div class="banner_info">
    <h5 class="banner_title">Påverka din försäkringskostnad</h5>
    <div class="banner_selector" id="selector">
      <button
        value="25"
        class="quarter-btn active"
      >
        25 % självrisk
      </button>
      <button value="50" class="half-btn">
        50 % självrisk
      </button>
    </div>
    <div class="banner_slider">
      <span class="slider_header">Ditt veterinärvårdsbelopp: <strong class="price_highlight" id="care_price">150 000 kr</strong></span>
      <div id="slider"></div>
    </div>
  </div>
</div>
<div class="banner_cta">
  <span class="cta_text">Pris från:</span>
  <strong class="cta_result"><span class="cta_price" id="final_price">xxx</span>kr/mån</strong>
  <div class="cta_btn"><a href="" target="_blank">Se fördelar ></a></div>
  <figure class="company_logo">
    <img src="img/logo.svg" alt="" />
  </figure>
</div>
</div>
`;
// Create script element for head
const scriptElement = document.createElement("script");
scriptElement.src =
  "https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/14.6.3/nouislider.min.js";

const linkElement = document.createElement("link");
linkElement.rel = "stylesheet";
linkElement.href =
  "https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/14.6.3/nouislider.min.css";

// Append elements to body
document.addEventListener("DOMContentLoaded", function () {
  document.head.appendChild(scriptElement);
  document.head.appendChild(linkElement);
  document.body.appendChild(bannerContainer);
  document.head.appendChild(dynamicStyles);
});

// load logic
scriptElement.onload = function () {
  initializeBanner();
};

//values from spreadsheet
const calculatedValues = {
  small: {
    25: {
      50: 373,
      100: 422,
      150: 604,
    },
    50: {
      50: 215,
      100: 240,
      150: 333,
    },
  },
  medium: {
    25: {
      50: 579,
      100: 627,
      150: 809,
    },
    50: {
      50: 421,
      100: 445,
      150: 538,
    },
  },
  large: {
    25: {
      50: 941,
      100: 989,
      150: 1171,
    },
    50: {
      50: 783,
      100: 807,
      150: 900,
    },
  },
};

//calculator

function initializeBanner() {

  let price = 45001;
  let selectorValue = 25;
  let size = price <= 45000 ? "small" : price <= 90000 ? "medium" : "large";

  document.getElementById("horse_price").innerHTML = price + " kr";

  const calculate = () => {
    document.getElementById("final_price").innerHTML =
      calculatedValues[size][selectorValue][
        parseFloat(connectSlider.noUiSlider.get())
      ];
  };

  const buttons = document.querySelectorAll("#selector button");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      toggleActive(this);
    });
  });

  function toggleActive(btn) {
    buttons.forEach((button) => button.classList.remove("active"));
    btn.classList.add("active");
    selectorValue = parseInt(btn.getAttribute("value"));
    calculate();
  }

  let connectSlider = document.getElementById("slider");

  noUiSlider.create(connectSlider, {
    start: 50,
    connect: "lower",
    range: {
      min: 50,
      max: 150,
    },
    step: 50,
    snap: false,
    pips: {
      mode: "values",
      values: [50, 100, 150],
      density: 50,
    },
  });

  connectSlider.noUiSlider.on("update", function (values, handle) {
    const sliderValue = parseFloat(values[handle]);
    document.getElementById("care_price").innerHTML = sliderValue + " 000 kr";
    calculate();
  });
}
