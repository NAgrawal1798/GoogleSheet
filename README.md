# Google Sheets Integration with Express.js

This project demonstrates how to integrate Google Sheets with an Express.js server. It provides a basic setup for connecting to a Google Sheet, adding data to it, and retrieving data from it using the Google Sheets API and Axios.

## Prerequisites

Before running this project, make sure you have the following:

- Node.js installed on your machine.
- A Google Sheets document that you want to interact with.
- Google Sheets API credentials (service account email and private key) in a JSON file.

## Getting Started

1. Clone this repository to your local machine:

   ```shell
   git clone https://github.com/NAgrawal1798/GoogleSheet.git

2. Navigate to the project directory:
   
  ```shell
  cd GoogleSheet/backend

3. Install project dependencies:

   ```shell
   npm install

4.Configure your environment variables:

Create a .env file in the project root.
Add your Google Sheets API credentials to the .env file as follows:

 ```shell
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account-email@your-project-id.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\nYour-Private-Key-Here\n-----END PRIVATE KEY-----

5. Start the Express.js server:

  ```shell
   npm start

6. Your Express server should now be running on http://localhost:3000.

## Usage
Open the HTML page in your browser.
Fill in the form to add data to your Google Sheet.
The submitted data should be added to your Google Sheet via the Express.js server
