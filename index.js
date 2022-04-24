const PORT = 8000;

const axios = require('axios');
const express = require('express');
const cherio = require('cherio');

const app = express();

const url = "https://www.justicia2030.es/";

axios(url)
    .then(response => {
        const html = response.data;
        const $ = cherio.load(html);
        const data = [];
        $('img', html).each(function () {
            const image = $(this).attr('src');
            const alt = $(this).attr('alt');
            data.push({
                image,
                alt
            });

        });
        console.log(data);
    })


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

