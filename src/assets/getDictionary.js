const cedict = require('./cedict-simplified-chn-to-eng.json');
const fs = require("fs");

/**
 *  Script to extract data from cedict
 */

const dictionary = [];

for (const [chn, eng_array] of Object.entries(cedict)) {
  dictionary.push(
    {
      simplified_chn: chn,
      eng: eng_array
    }
  )
}

// converting the JSON object to a string
const data = JSON.stringify(dictionary);

// writing the JSON string content to a file
fs.writeFile("cedict-simplified-chn-to-eng-arr.json", data, (error) => {
  // throwing the error
  // in case of a writing problem
  if (error) {
    // logging the error
    console.error(error);

    throw error;
  }
});

