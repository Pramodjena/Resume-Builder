// console.log(`jay shree ram`);

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
});

let add_ = document.querySelectorAll(".add_");

let prof = document.getElementById("prof");
let academic = document.getElementById("academic");
let project = document.getElementById("project");
let skill = document.getElementById("skill");

const handleControls = (id, container, cloneTo, clone) => {
  let closeBtn = document.createElement("button");
  closeBtn.innerHTML = "close";
  closeBtn.setAttribute("class", "closeBtn");
  clone.appendChild(closeBtn);
  cloneTo.appendChild(clone);

  let inputs = clone.querySelectorAll("input");

  inputs.forEach((element) => {
    element.value = "";
  });

  closeBtn.addEventListener("click", () => {
    cloneTo.removeChild(clone);
  });
};

add_.forEach((element, index) => {
  element.addEventListener("click", (e) => {
    if (e.target.id === "one") {
      let clone = prof.cloneNode(true);
      handleControls("one", prof, prof_jur, clone);
    } else if (e.target.id === "two") {
      let clone = academic.cloneNode(true);
      handleControls("two", academic, academic_id, clone);
    } else if (e.target.id === "three") {
      let clone = project.cloneNode(true);
      handleControls("two", project, project_id, clone);
    } else {
      let clone = skill.cloneNode(true);
      handleControls("two", skill, skill_id, clone);
    }
  });
});

let print_ = document.querySelector(".print_");

print_.addEventListener("click", () => {
  let firstname = document.getElementById("fname").value;
  let middlename = document.getElementById("mname").value;
  let lastname = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let designation = document.getElementById("designation").value;
  let image = document.getElementById("image");
  let address = document.getElementById("address").value;
  let website = document.getElementById("website").value;
  let description = document.getElementById("description").value;

  let imgGet = image.files[0];

  //professional_journy
  let prof_title_value = [...document.querySelectorAll(".prof_title")].map(
    (title) => title.value
  );
  let prof_company_value = [...document.querySelectorAll(".prof_company")].map(
    (prof_company) => prof_company.value
  );
  let prof_location_value = [
    ...document.querySelectorAll(".prof_location"),
  ].map((prof_location) => prof_location.value);
  let prof_start_date_value = [
    ...document.querySelectorAll(".prof_start_date"),
  ].map((prof_start_date) => prof_start_date.value);
  let prof_last_date_value = [
    ...document.querySelectorAll(".prof_last_date"),
  ].map((prof_last_date) => prof_last_date.value);
  let prof_description = [
    ...document.querySelectorAll(".prof_description"),
  ].map((prof_description) => prof_description.value);

  //academic background
  let academic_school = [...document.querySelectorAll(".academic_school")].map(
    (academic_school) => academic_school.value
  );
  let degree = [...document.querySelectorAll(".degree")].map(
    (degree) => degree.value
  );
  let city = [...document.querySelectorAll(".city")].map((city) => city.value);
  let date_start_acedmic = [
    ...document.querySelectorAll(".date_start_acedmic"),
  ].map((date_start_acedmic) => date_start_acedmic.value);
  let date_end_acedmic = [
    ...document.querySelectorAll(".date_end_acedmic"),
  ].map((date_end_acedmic) => date_end_acedmic.value);
  let description_academic = [
    ...document.querySelectorAll(".description_academic"),
  ].map((description_academic) => description_academic.value);

  //project heightlights
  let project_name = [...document.querySelectorAll(".project_name")].map(
    (project_name) => project_name.value
  );
  let project_link = [...document.querySelectorAll(".project_link")].map(
    (project_link) => project_link.value
  );
  let project_description = [
    ...document.querySelectorAll(".project_description"),
  ].map((project_description) => project_description.value);

  //skill section
  let skill_name = [...document.querySelectorAll(".skill_name")].map(
    (skill_name) => skill_name.value
  );

  if (imgGet) {
    const reader = new FileReader();

    reader.onload = function (e) {
      let inputFiles = {
        firstname,
        middlename,
        lastname,
        email,
        phone,
        designation,
        address,
        website,
        description,
        image: e.target.result,
        prof_title_value,
        prof_company_value,
        prof_location_value,
        prof_start_date_value,
        prof_last_date_value,
        prof_description,
        academic_school,
        degree,
        city,
        date_start_acedmic,
        date_end_acedmic,
        description_academic,
        project_name,
        project_link,
        project_description,
        skill_name,
      };

      localStorage.setItem("userinput", JSON.stringify(inputFiles));
      window.location.href = "temp1.html";
    };

    reader.readAsDataURL(imgGet);
  } else {
    alert("Please choose image");
  }
});
