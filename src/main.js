const currentDate = document.getElementById('currentDate');


const getData = async () => {
  var url = "https://history.muffinlabs.com/date";

  const response = await fetch(url);
  const allData = await response.json();

  // data type - events, death, birth
  var dataType = "Events";

  // Object length of specific data
  var length = Object.keys(allData["data"][dataType]).length;

  // random index value of get data
  var randomIndex = Math.floor(Math.random() * length);

  console.log(allData.date);
  currentDate.textContent = allData.date

  console.log(allData["data"]["Events"][10]);
};
getData();
