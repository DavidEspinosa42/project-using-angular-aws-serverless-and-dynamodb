You will need to install Node (versión LTS): https://nodejs.org/en/ and Java Runtime Environment: https://www.java.com/download/

I also recommend you install Visual Studio Code: https://code.visualstudio.com/ and Git: https://git-scm.com/

After doing that, inside of the Backend folder go to: File -> Open Windows Powershell

Type the following command to install Serverless globally:
npm install serverless -g

To install all of the libraries the backend needs type:
npm install

Then to install dynamoDB locally type:
serverless dynamodb install

Now you will need to create an AWS account (if you don't have it):
https://aws.amazon.com/

Create an access key:
https://docs.aws.amazon.com/general/latest/gr/managing-aws-access-keys.html

And configure this generated credentials in your PC with the following command (replacing the values of key and secret):
serverless config credentials --provider aws --key AKIAIOSFODNN7EXAMPLE --secret wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY

And that's it!
You can start the backend locally for development with: 
npm start

And for deployment you can use the following commands:
npm run deploy:dev
npm run deploy:test
npm run deploy:stage
npm run deploy:prod

If you run a deploy, make sure to save the URL of the endpoint that you'll see in the console:
https://SAVETHISVALUE.execute-api.us-east-2.amazonaws.com/dev/author
You will need that value in the frontend project.
