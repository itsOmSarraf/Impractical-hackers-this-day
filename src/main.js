const currentDate = document.getElementById("currentDate");
const eventDateContainer = document.getElementById("event-container");

const getData = async () => {
  var url = "https://history.muffinlabs.com/date";
  const response = await fetch(url);
  const allData = await response.json();
  // data type - events, death, birth
  var dataType = "Events";

  // Object length of specific data
  var length = Object.keys(allData["data"]["Events"]).length;

  currentDate.textContent = allData.date;

  Object.keys(allData["data"]["Events"])
    .slice(0, 5)
    .map((item, index) => {
      var randomIndex = Math.floor(Math.random() * length);
      console.log(randomIndex);

      let container = document.createElement("div");

      container.innerHTML = `<div class="flex pt-8 pl-16 gap-x-4">
    <span class="text-blue-600 year font-semibold  text-2xl" id="event-date">
      ${allData["data"]["Events"][randomIndex]["year"]}
    </span>
    <div >
      <h3 class="font-semibold">${allData["data"]["Events"][randomIndex]["text"]}</h3>
      <div class="w-3/5">${allData["data"]["Events"][randomIndex]["html"]}</div>
    </div>
  </div>`;

      eventDateContainer.appendChild(container);
    });
};
getData();
