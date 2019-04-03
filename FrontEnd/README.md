Inside the Frontend folder type the command:
npm install
You can start the frontend for development with:
npm start

If you want to deploy to AWS, first you'll have to add to the environments files the URL of the endpoint you got when deploying the backend.

After that, for deployment you can use the following commands:
npm run deploy:dev
npm run deploy:test
npm run deploy:stage
npm run deploy:prod

Finally, you'll be able to access the deployed app from this URLs:
https://s3.us-east-2.amazonaws.com/dev-angular/index.html
https://s3.us-east-2.amazonaws.com/test-angular/index.html
https://s3.us-east-2.amazonaws.com/stage-angular/index.html
https://s3.us-east-2.amazonaws.com/prod-angular/index.html
