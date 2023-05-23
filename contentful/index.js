const fs = require("fs");
const { createClient } = require("contentful");
const { ENVIRONMENT } = process.env;

const options =
  ENVIRONMENT === "local"
    ? {
        space: "r49vq52m78n1",
        environment: "master",
        accessToken: "Ol2OKd4p5qwraLY141KkC333OqxA9xr1q9HpulMDJj8",
        host: "preview.contentful.com",
      }
    : {
        space: "r49vq52m78n1",
        environment: "master",
        accessToken: "WEf_mYYcgw0A0YIl7shf34UptpKnwBpfbxje6RXrC5o",
      };

const client = createClient(options);

client.getEntries().then((data) => {
  const [siteEntry] = data.items.filter(
    (entry) => entry.sys.contentType.sys.id === "site"
  );
  const jsonString = JSON.stringify(siteEntry);
  const filePath = "./public/data.json";
  fs.writeFile(filePath, jsonString, (err) => {
    if (err) {
      console.error("Failed to save JSON data:", err);
    } else {
      console.log("JSON data saved to file:", filePath);
    }
  });
});
