# 👷🔧🔩 Hey

> ## 👀 Overview

 An express server with complete inversion control

 - 98% test coverage with advance stubbing.
 - Reduce latency with redis in memory storage from 1037 ms to 28 ms
 - Readable code structured 
 - Containerized application 
 - Automate test and build with Travis ci

![97% test coverage](/coverage.png)/coverage.png



# you can use this commands

- with `docker-compose up` you spin up the mongo, redis and app container. 
- Start server `npm run start` or `yarn start` 
- Start  development server `npm run dev` or `yarn dev`
- Install dependency `npm install` or `yarn install`
- run test `npm run test` or `yarn test`
- run test coverage `npm run test:cov` or `yarn test:cov`
- post is `9000`


other commands 

on mac or linux `sudo apt-get install redis`
start redis-server `sudo redis-server`



#quick pick at
  router inversion [here](https://github.com/ekamanelly/express_server_mongodb/blob/master/src/question/question.route.ts)
  
   
  service inversion [here](https://github.com/ekamanelly/express_server_mongodb/blob/master/src/question/question.serviceAdaptor.ts) 



## endpoint 
http://localhosh:9000/api/questions/{:id}

- post `{text:'just a question'}`
- get 
- patch
- delete 


So I think that all 