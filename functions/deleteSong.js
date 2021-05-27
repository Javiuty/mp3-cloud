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

  await mysql.query("DELETE FROM Canciones WHERE id = ?", requestBody.id);

  await mysql.end();

  try {
    return {
      statusCode: 204,
      body: JSON.stringify({ message: "Canción eliminada con éxito" }),
    };
  } catch (error) {
    console.log(error);
  }
};
