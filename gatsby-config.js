/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env`,
})
module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-source-google-spreadsheet",
      options: {
        // https://docs.google.com/spreadsheets/d/<spreadsheetId>/edit#gid=0
        spreadsheetId: "1_cf5CZKzouzChMQCEEmUvuE_KAn4778Rbzbi9Du8oV0",
        // The `credentials` are only needed when you need to be authenticated to read the document.
        // It's an object with the following shape:
        // {
        //   client_email: "<your service account email address>",
        //   private_key: "<the prive key for your service account>"
        // }
        //   - https://github.com/googleapis/google-api-nodejs-client#service-to-service-authentication
        //   - https://developers.google.com/identity/protocols/OAuth2ServiceAccount
        credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS),
      },
    },
  ],
}
