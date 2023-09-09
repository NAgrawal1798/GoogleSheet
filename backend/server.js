const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { GoogleSpreadsheet } = require("google-spreadsheet");
const { JWT } = require("google-auth-library");

// Set up CORS and bodyParser
app.use(cors());
app.use(bodyParser.json());

async function accessSpreadsheet() {
    try {
        const serviceAccountAuth = new JWT({
            email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            key: process.env.GOOGLE_PRIVATE_KEY,
            scopes: [
              'https://www.googleapis.com/auth/spreadsheets',
            ],
          });
        
        const doc = new GoogleSpreadsheet("11_efsGYJ9S5A_oxhGQtqB_XTmVe2MulrnnmgM8eJWew", serviceAccountAuth);

        // Load the Google Sheets document
        await doc.loadInfo();
        console.log(doc.title);


        // Access the first sheet of the Google Sheets document
        const sheet = doc.sheetsByIndex[0];

        // Define the endpoint for form submission
        app.post("/submit", async (req, res) => {
            const { name, mobile } = req.body;

            try {
                // Add a new row with the user's data
                await sheet.addRow({ "Name": name, "Mobile Number": mobile });

                res.json({ success: true });
            } catch (error) {
                console.error(error);
                res.status(500).json({ success: false, error: "Internal Server Error" });
            }
        });
    } catch (error) {
        console.error(error);
    }
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

accessSpreadsheet();

