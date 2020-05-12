// task-5

const checkForSpam = function (message) {
  let findWord =
    message.toUpperCase().includes("SPAM") === true ||
    message.toUpperCase().includes("SALE") === true;

  if (findWord === true) {
    message = "true";
  } else {
    message = "false";
  }

  return message;
};

console.log(checkForSpam("Latest technology news"));

console.log(checkForSpam("JavaScript weekly newsletter"));

console.log(checkForSpam("Get best sale offers now!"));

console.log(checkForSpam("[SPAM] How to earn fast money?"));
