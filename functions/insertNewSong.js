const mysql = require("serverless-mysql")({
  config: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});
exports.handler = async function (event, context, callback) {
  const requestBody = JSON.parse(event.body);

  await mysql.query("INSERT INTO Canciones SET ?", requestBody);

  await mysql.end();

  try {
    return {
      statusCode: 200,
      body: JSON.stringify(requestBody),
    };
  } catch (error) {
    console.log(error);
  }
};
