# ALERT DASHBOARD BE
this rest API get flickr api to access the image feeds then response data in JSON format

## Prequisition
  1. PostgresSQL run on local machine

## Setup
 1. clone on your local machine using git clone
 2. install dependency using yarn or npm 

> yarn install
or
> npm install

 3. copy file .env.example and save with the name .env
 4. Make some adjustment on the env file like the db url and the others
 5. run migrate and seeder data

 > yarn migrate:run && yarn seeder:run

## Usage

 1. run Application using below command

> yarn dev

