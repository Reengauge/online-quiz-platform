# Online Quiz Platform
A tool for educators to engage their students throughout class.

## Running the application with Docker
Make sure you have `docker` and `docker-compose` installed and `docker` up and running.
To run and build the application, run the following command:
```
$ docker-compose up --build
```

## Basic Database Setup (Dev Environment)
### Method #1 - IP Whitelist (faster, less optimal)
1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. After selecting the right project, navigate to SQL
3. Select the right instance
4. Under Connections -> Authorized networks, add your IP Address
5. Don't forget to upload your .env file to /server

### Method #2 - Cloud SQL Proxy (slower, better)
1. Install the [gcloud command-line tool](https://cloud.google.com/sdk/docs#install_the_latest_cloud_sdk_version)
2. Install the [Cloud SQL Proxy client](https://cloud.google.com/sql/docs/postgres/quickstart-proxy-test)
3. Don't forget to upload your .env file to /server

## Basic Server Commands
Prerequisites: 
1. Have Node.js installed on your machine 
2. Make sure you've uploaded the .env file to /server
3. Make sure you're in /server before running the next commands
### Server Setup
```console
$ npm install
```
### Server Start
```console
$ npm start
```
You should be able to access http://localhost:3000/ in your browser.
### Lint Files (Auto Format)
```console
$ npm run lint
```
### Server Test
```console
$ npm run test
```
### Check Test Coverage
```console
$ npm run coverage
```
