const currentDate = document.getElementById("currentDate");
const eventDateContainer = document.getElementById("event-container"); // Event container
const birthDateContainer = document.getElementById("birth-container"); // Birth container
const deathDateContainer = document.getElementById("death-container"); // Death container

// fetch("https://history.muffinlabs.com/date")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

const getData = async () => {
  var url = "https://history.muffinlabs.com/date";
  const response = await fetch(url);
  const allData = await response.json();

  // data type - events, death, birth
  var dataType = "Events";

  // Object length of specific data
  var eventLength = Object.keys(allData["data"]["Events"]).length;
  var birthLength = Object.keys(allData["data"]["Births"]).length;
  var deathLength = Object.keys(allData["data"]["Deaths"]).length;

  currentDate.textContent = allData.date;

  //************* Add Event Section ************************

  Object.keys(allData["data"]["Events"])
    .slice(0, 6)
    .map((item, index) => {
      //  Random Index for event array
      var randomeventIndex = Math.floor(Math.random() * eventLength);
      console.log(randomeventIndex);

      let event_container = document.createElement("div");

      event_container.innerHTML = `
  <div class="flex flex-wrap w-[400px] p-5 border border-[#93C5FD] rounded-lg data-card">
  <!-- date -->
  <div class="p-2 mb-2 font-semibold text-xl rounded-md bg-[#e46b6b] text-white">
    <p class="">
    ${allData["data"]["Events"][randomeventIndex]["year"]}
    </p>
  </div>
  <!-- title -->
  <div class="text-lg font-medium">
    <p>${allData["data"]["Events"][randomeventIndex]["text"]}</p>
  </div>
  <!-- desc -->
  <div class="text-md my-2 inline-block">
  ${allData["data"]["Events"][randomeventIndex]["html"]}
  </div>
  <!-- learn more btn -->
  <a href="" class="p-3 bg-blue-400 rounded-md text-white ">Learn More</a>
</div>`;

      eventDateContainer.appendChild(event_container);
    });

  //*************  Add Birth Section  ************************

  Object.keys(allData["data"]["Births"])
    .slice(0, 5)
    .map((item, index) => {
      //  Random Index for birth array
      var randomBirthIndex = Math.floor(Math.random() * birthLength);

      let birth_container = document.createElement("div");

      birth_container.innerHTML = `<div class="flex pt-8 pl-16 gap-x-4">
    <span class="text-blue-600 year font-semibold  text-2xl" id="birth-date">
      ${allData["data"]["Births"][randomBirthIndex]["year"]}
    </span>
    <div >
      <h3 class="font-semibold">${allData["data"]["Births"][randomBirthIndex]["text"]}</h3>
      <div class="w-3/5">${allData["data"]["Births"][randomBirthIndex]["html"]}</div>
    </div>
  </div>`;

      birthDateContainer.appendChild(birth_container);
    });

  //*************  Add Birth Section  ************************

  Object.keys(allData["data"]["Deaths"])
    .slice(0, 5)
    .map((item, index) => {
      //  Random Index for death array
      var randomDeathIndex = Math.floor(Math.random() * deathLength);

      let death_container = document.createElement("div");

      death_container.innerHTML = `<div class="flex pt-8 pl-16 gap-x-4">
    <span class="text-blue-600 year font-semibold  text-2xl" id="death-date">
      ${allData["data"]["Deaths"][randomDeathIndex]["year"]}
    </span>
    <div >
      <h3 class="font-semibold">${allData["data"]["Deaths"][randomDeathIndex]["text"]}</h3>
      <div class="w-3/5">${allData["data"]["Deaths"][randomDeathIndex]["html"]}</div>
    </div>
  </div>`;

      deathDateContainer.appendChild(death_container);
    });
};

//  ************* call the functions ************

getData();
