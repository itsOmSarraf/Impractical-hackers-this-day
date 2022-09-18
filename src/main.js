const currentDate = document.getElementById("currentDate");
const eventDataContainer = document.getElementById("event-container"); // Event container
const birthDataContainer = document.getElementById("birth-container"); // Birth container
const deathDataContainer = document.getElementById("death-container"); // Death container

const getData = async () => {
  var url = "https://history.muffinlabs.com/date";
  const response = await fetch(url);
  const allData = await response.json();

  var dataTypes = ["Events", "Deaths", "Births"];

  currentDate.textContent = allData.date;

  // Renders data to html
  const renderData = (dataType, dataContainer) => {
    Object.keys(allData["data"][dataType])
      .slice(0, 6)
      .map(() => {
        //  Random Index for event array
        let randomIndex = Math.floor(
          Math.random() * Object.keys(allData["data"][dataType]).length
        );

        let container = document.createElement("div");

        container.innerHTML = `
              <div class="flex flex-wrap w-[400px] p-5 border border-[#93C5FD] rounded-lg data-card">
              <!-- date -->
              <div class="p-2 mb-2 font-semibold text-xl rounded-md bg-[#e46b6b] text-white">
                <p class="">
                ${allData["data"][dataType][randomIndex]["year"]}
                </p>
              </div>
              <!-- title -->
              <div class="text-lg font-medium">
                <p>${allData["data"][dataType][randomIndex]["text"]}</p>
              </div>
              <!-- desc -->
              <div class="text-md my-2 inline-block">
              ${allData["data"][dataType][randomIndex]["html"]}
              </div>
              <!-- learn more btn -->
              <a href="" class="p-3 bg-blue-400 rounded-md text-white ">Learn More</a>
              </div>`;

        dataContainer.appendChild(container);
      });
  };

  // calling functions
  renderData(dataTypes[0], eventDataContainer);
  renderData(dataTypes[1], birthDataContainer);
  renderData(dataTypes[2], deathDataContainer);
};

getData();
