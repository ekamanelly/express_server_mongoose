# 👷🔧🔩 Hey

> ## 👀 Overview

A nodejs server with express middleware. Although I would have love to use Nestjs framework, which would have been much more easier to build clean-structured code.

#please add your mongodb connection string [here](https://github.com/ekamanelly/express_server_mongodb/blob/master/src/index.ts)



#you can make you these commands

Start server `npm run start` or `yarn start` 
Start  development server `npm run dev` or `yarn dev`
Install dependency `npm install` or `yarn install`
run test `npm run test` or `yarn test`
run test coverage `npm run test:cov` or `yarn test:cov`
post is `9000`


I used redis to cache api request with the tag as keys. so, we get stored date on successive request with same key. the data expires 3600s (1hour). you might need to install it on you machine 

on mac or linux `sudo apt-get install redis`
start redis-server `sudo redis-server`


#quick pick at
  router inversion [here](https://github.com/ekamanelly/express_server_mongodb/blob/master/src/question/quetion.route.ts)
  
   
  router inversion [here](https://github.com/ekamanelly/express_server_mongodb/blob/master/src/question/question.serviceAdaptor.ts) 


So I think that all 