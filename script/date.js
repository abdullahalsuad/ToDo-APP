console.log("date working..");

function showCurrentTime() {
  const date = new Date();
  const timeOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };

  const currentTime = date.toLocaleTimeString("en-US", timeOptions);
  return currentTime;
}

function showCurrentDate() {
  const date = new Date();
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const currentDate = date.toLocaleDateString("en-US", options);
  return currentDate;
}

setInterval(showCurrentTime, 1000);
setInterval(showCurrentDate, 1000);


function getGreeting() {
  const date = new Date();
  const hour = date.getHours();

  if (hour >= 3 && hour < 6) {
    return "Good Early Morning!";
  } else if (hour >= 6 && hour < 12) {
    return "Good Morning!";
  } else if (hour >= 12 && hour < 15) {
    return "Good Afternoon!";
  } else if (hour >= 15 && hour < 18) {
    return "Good Late Afternoon!";
  } else if (hour >= 18 && hour < 22) {
    return "Good Evening!";
  } else {
    return "Good Night!";
  }
}
