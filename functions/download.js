const ytdl = require("ytdl-core");
const fs = require("fs");

exports.handler = async function (event, context, callback) {
  let requestBody = JSON.parse(event.body);
  let videoTitle = requestBody.title;

  ytdl(requestBody.url).pipe(
    fs.createWriteStream(`./downloads/${videoTitle}.mp4`)
  );

  // https://www.youtube.com/results?search_query=fluent+ffmpeg+mp4+to+mp3+

  try {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Canción descargada correctamente ",
      }),
    };
  } catch (error) {
    console.log(error);
  }
};
