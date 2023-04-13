const linkedinRegex =
  /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

function validateLinkedinUrl(url) {
  if (url.match(linkedinRegex)) {
    console.log(`${url} is a valid LinkedIn profile URL`);
  } else {
    console.log(`${url} is not a valid LinkedIn profile URL`);
  }
}

validateLinkedinUrl("https://www.linkedin.com/in/john_doe123"); // valid
validateLinkedinUrl("https://www.linkedin.com/in/jane-doe"); // valid
validateLinkedinUrl("https://www.linkedin.com/in/john_doe_"); // invalid
validateLinkedinUrl("https://www.linkedin.com/in/john/doe"); // invalid
validateLinkedinUrl("https://www.linkedin.com/in/abcdefghijklmnopqrstu"); // invalid
