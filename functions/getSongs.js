const mysql = require("serverless-mysql")({
  config: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});
exports.handler = async function (event, context, callback) {
  let results = await mysql.query("SELECT * FROM `Canciones` ORDER BY id DESC");
  await mysql.end();
  try {
    return {
      statusCode: 200,
      body: JSON.stringify(results),
    };
  } catch (error) {
    console.log(error);
  }
};
