// Burger Bar //
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

// Scroll on top //
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

// Accordion //
const accordion = document.getElementsByClassName ('contentBx');
for (i = 0; i<accordion.length; i++) {
    accordion[i].addEventListener('click', function (){
        this.classList.toggle('active')
    })
}


// Slider //
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

// Form Validation  //
let formELement = document.getElementById("registration-form");

formELement.addEventListener("submit", function (event) {
  event.preventDefault();
  let errors = {};

  //username
  let usernameValue = document.getElementById("username-field").value;
  // let userNameValue2 = document.querySelector('[name ="username"]').value;

  // if (usernameValue.length < 5) {
  //   errors.username = 'Username must be more then 5 charcters'
  // }

  if (usernameValue == "") {
    errors.username = "Username field can not be empty";
  }

  //password
  let passw1 = document.getElementById("password-field1").value;
  let passw2 = document.getElementById("password-field2").value;

  if (passw1 == "") {
    errors.password = "Password field can not be empty";
  }
  if (passw1 != passw2) {
    errors.password2 = "Password do not match";
  }

  //radio
  let userAge = false;

  document.querySelectorAll('[name="age"]').forEach((item) => {
    if (item.checked) {
      userAge = true;
    }
  });

  if (!userAge) {
    errors.age = "Please Selct your Age";
  }

  //checkbox
  let agree = document.getElementById("agree").checked;

  if (!agree) {
    errors.agree = "You must agree our terms and conditions";
  }

  console.log(errors);

  document.querySelectorAll(".error-text").forEach((item) => {
    item.textContent = "";
  });
  for (let objectKey in errors) {
    // console.log(objectKey); // 

    let pErrorElement = document.getElementById("error-" + objectKey);
    console.log(pErrorElement);

    if (pErrorElement) {
      pErrorElement.textContent = errors[objectKey];
    }
  }

  if (Object.keys(errors).length == 0) {
    formELement.submit();
  }
});

// show - hide password
let passwordField = document.getElementById("password-field1");
let toggleIcon = document.getElementById("toggleIcon");

toggleIcon.addEventListener("click", function () {
  if (passwordField.type == "password") {
    passwordField.setAttribute("type", "text");
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  } else {
    passwordField.setAttribute("type", "password");
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  }
});

// email regex
let emailField = document.getElementById("emailField");

emailField.addEventListener("keyup", function () {
  let emailValue = document.getElementById("emailField").value;
  let pErrorEmail = document.getElementById("error-email");
  let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailValue.match(emailPattern)) {
    pErrorEmail.textContent = "Your Email is Valid";
    pErrorEmail.style.color = "green";
    emailField.style.outline = "none";
    emailField.style.border = "2px solid green";
  } else {
    pErrorEmail.textContent = "Your Email is Invalid";
    pErrorEmail.style.color = "red";
    emailField.style.outline = "none";
    emailField.style.border = "2px solid red";
  }

  if (emailValue == "") {
    pErrorEmail.innerHTML = "";
    emailField.style.border = "2px solid black";
  }
});

  


// Cookies //

let cookieBox = document.querySelector(".wrapper"),
    acceptBtn = cookieBox.querySelector(".buttons .item");
    acceptBtn.onclick = () => {
            document.cookie = "cookieBy=mari;" + 60 * 60 * 24 * 30;
            if (document.cookie) {
              cookieBox.classList.add("click");
            } else {
              alert("cookies can not be set");
            }
          };

    // Search/Filter //
    const list = [
        "Plants",
        "Care",
        "Accesories",
        "Gifts",
        "Seeds",
        "Gift-Cards",
        "Gifts",
        "Homeplants",
        "Pots",
      ];

      const output = document.querySelector(".output");
      const search = document.querySelector(".filter-input");
      
      window.addEventListener("DOMContentLoaded", loadList);
      search.addEventListener("input", filter);
      
      function loadList() {
        let temp = `<ul class="list-items">`;
        list.forEach((item) => {
          temp += `<li class="list-item"> ${item} </li>`;
        });
        temp += `</ul>`;
        output.innerHTML = temp;
      }
      
      function filter(e) {
          let temp = '';
          const result  = list.filter(item=> item.toLowerCase().includes(e.target.value.toLowerCase()));
        
          if(result.length>0){
              temp = `<ul class="list-items">`;
              result.forEach((item) => {
                temp += `<li class="list-item"> ${item} </li>`;
              });
              temp += `</ul>`;
          }else{
              temp =`<div class="no-item"> No Item Found </div>`;
          }
          output.innerHTML =temp;
    
      }

    // Dropdown Menu //
function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
      }
            window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      };

 
// async 

let searchFilter = document.getElementById("search");
let ulElement = document.getElementById("results");
let listItem = [];
async function asyncMyFunction() {
  let element = await fetch("https://reqres.in/api/users?page=", {
    method: "get",
  });
  if (element.status !== 200) {
    throw "error";
  }
  let responsInfo = await element.json();
  return responsInfo;
}

asyncMyFunction()
  .then((dataJs) => {
    dataJs.data.forEach((object) => {
      let liElement = document.createElement("li");
      let pTag = document.createElement("p");
      pTag.innerText = `${object.first_name}`;
      let imgUser = document.createElement("img");
      imgUser.classList.add("image");
      imgUser.src = `${object.avatar}`;

      listItem.push(liElement);
      liElement.appendChild(pTag);
      liElement.appendChild(imgUser);
      ulElement.appendChild(liElement);
    });
  })
  .catch((error) => console.log(error));

function searchData(searchItem) {
  listItem.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchItem.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}

searchFilter.addEventListener("input", function (event) {
  console.log();
  searchData(event.target.value);
});
    
