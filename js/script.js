const descriptions = {
  'rujak-cingur': 'A unique traditional salad mixing vegetables, fruits, tofu, tempeh, rice cake, and cingur (cow\'s snout) with spicy-sweet petis dressing. An iconic Surabaya street food with bold flavors that represents the authentic taste of East Javanese cuisine.',
  'pecel-semanggi': 'Boiled water clover leaves served with savory spicy peanut sauce, complemented with kerupuk crackers and rempeyek. A rare and healthy traditional dish from Surabaya that\'s becoming increasingly difficult to find in modern times.',
  'lontong-balap': 'Rice cake served with fried tofu, bean sprouts, lentho (tofu fritters), and savory broth. Topped with petis sambal and crackers. A hearty and popular Surabaya comfort food that\'s perfect for breakfast or lunch.',
  'rawon': 'Traditional black beef soup flavored with kluwek nuts, giving it distinctive dark color and rich umami taste. Served with bean sprouts, salted egg, and prawn crackers. The most famous dish from East Java that represents the region\'s culinary heritage.',
  'tahu-campur': 'Diced fried tofu mixed with rice cake, bean sprouts, cucumber, and petis seasoning. A refreshing and light dish perfect for snacking or light meals. Very popular among locals for its affordable price and fresh taste.',
  'tahu-tek': 'Fried tofu and egg served with rice cake, bean sprouts, and special peanut sauce with petis. A satisfying street food that combines protein with fresh vegetables, making it a complete and nutritious meal for busy people.'
};

function openFoodModal(foodId, foodTitle) {
  document.getElementById('foodModalLabel').textContent = foodTitle;
  document.getElementById('foodModalBody').textContent = descriptions[foodId];
  const foodModal = new bootstrap.Modal(document.getElementById('foodModal'));
  foodModal.show();
}

let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 75,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

let phpProgress = document.querySelector(".php"),
  phpValue = document.querySelector(".php-progress");

let phpStartValue = 0,
  phpEndValue = 80,
  phpspeed = 30;

let progressphp = setInterval(() => {
  phpStartValue++;

  phpValue.textContent = `${phpStartValue}%`;
  phpProgress.style.background = `conic-gradient(#20c997 ${
    phpStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (phpStartValue == phpEndValue) {
    clearInterval(progressphp);
  }
}, phpspeed);

let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
  reactEndValue = 85,
  rjsspeed = 30;

let progressreact = setInterval(() => {
  reactStartValue++;

  reactValue.textContent = `${reactStartValue}%`;
  reactProgress.style.background = `conic-gradient(#3f396d ${
    reactStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (reactStartValue == reactEndValue) {
    clearInterval(progressreact);
  }
}, rjsspeed);

$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});

document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
        document.body.style.paddingTop = '0';
      } 
  });
}); 


let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

