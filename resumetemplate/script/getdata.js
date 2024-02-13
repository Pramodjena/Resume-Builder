// console.log(`jay shree ram`);

let getData = JSON.parse(localStorage.getItem("userinput"));

let profile_img = document.querySelector(".profile_section img");
let user_phone = document.getElementById("user_phone");
let user_email = document.getElementById("user_email");
let user_web = document.getElementById("user_web");
let user_location = document.getElementById("user_location");
let user_des_about = document.getElementById("user_des_about");
let username = document.querySelector(".header_text h1");
let deg = document.getElementById("deg");

console.log(getData);

profile_img.src = getData.image;
user_phone.innerHTML += getData.phone;
user_email.innerHTML += getData.email;
user_web.innerHTML += getData.website;
user_location.innerHTML += getData.address;
user_des_about.innerHTML += getData.description;
username.innerHTML = `${getData.firstname} ${getData.middlename} ${getData.lastname}`;
deg.innerHTML = getData.designation;

getData.prof_title_value.forEach((element, index) => {
  let x = `<p>${element}</p>
    <small>${getData.prof_start_date_value[index]} / ${getData.prof_last_date_value[index]}</small>

    <div class="com">${getData.prof_company_value[index]}</div>
    <p class="dec_edu">
     ${getData.prof_description[index]}
    </p>
    <hr>`;

  document.querySelector(".work_exp").innerHTML += x;
});
getData.degree.forEach((element, index) => {
  let x = `<p>${element}</p>
    <small>${getData.date_start_acedmic[index]} / ${getData.date_end_acedmic[index]}</small>

    <div class="organization">${getData.academic_school[index]}</div>
    <p class="edu_dec">
      ${getData.description_academic[index]}
    </p>

    <hr />`;

  document.querySelector(".education").innerHTML += x;
});
getData.project_name.forEach((element, index) => {
  let x = `<p>${element}</p>
  <a href="#">${getData.project_link[index]}</a>

  <div class="project-dec">
    ${getData.project_description[index]}
  </div>

  <hr>`;

  document.querySelector(".project_").innerHTML += x;
});
getData.skill_name.forEach((element, index) => {
  let x = `<p>${element}</p>`;

  document.querySelector(".skill_").innerHTML += x;
});
let print = document.querySelector('.print');

print.addEventListener('click', () => {
    print.style.display = "none"
    window.print();
})
