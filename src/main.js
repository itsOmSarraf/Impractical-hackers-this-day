const currentDate = document.getElementById("currentDate");
const eventDataContainer = document.getElementById("event-container"); // Event container
const birthDataContainer = document.getElementById("birth-container"); // Birth container
const deathDataContainer = document.getElementById("death-container"); // Death container

const getData = async () => {
  var url = "https://history.muffinlabs.com/date";
  const response = await fetch(url);
  const allData = await response.json();

  var dataTypes = ["Events", "Deaths", "Births"];

  currentDate.innerHTML = allData.date;

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
              <div class="card">
              <!-- date -->
              <div class="">
                <p class="card-date">
                ${allData["data"][dataType][randomIndex]["year"]}
                </p>
              </div>
              <!-- title -->
              <div class="card-title">
                <p>${allData["data"][dataType][randomIndex]["text"]}</p>
              </div>
              <!-- desc -->
              
              <!-- learn more btn -->
              <a href="https://wikipedia.org/wiki/${allData.date}" class="learn-more-btn">Learn More</a>
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
