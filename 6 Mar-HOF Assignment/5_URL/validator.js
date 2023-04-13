const urlRegex = /^https?:\/\/[\w\W]+\.[a-zA-Z]+$/;

function validateUrl(url) {
  if (url.match(urlRegex)) {
    console.log(`${url} is a valid URL`);
  } else {
    console.log(`${url} is not a valid URL`);
  }
}

validateUrl("http://www.example.com"); // valid
validateUrl("https://example123.net"); // valid
validateUrl("ftp://example.com"); // invalid
validateUrl("https://.com"); // invalid
