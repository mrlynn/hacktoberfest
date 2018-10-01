![Hacktoberfest Header](./stitch-hacktoberfest-header.png)
# Welcome to the MongoDB's Hacktoberfest Repository!

## What is Hacktoberfest?
Hacktoberfest is a month-long celebration of open source software. Started originally by our friends at [Digital Ocean](http://digitalocean.com)

## How is MongoDB Participating?
This year, we're celebrating open source software by hosting a challenge for software developers. Innovation and developer of freely available software is an essential part of our ecosystem. This is why we're incenting developers to create interesting projects leveraging [MongoDB Stitch](http://www.mongodb.com/cloud/stitch) and export the apps for storage on a [GitHub](http://github.com) repository.

## How can you participate?
Simply create an app and leverage [MongoDB Stitch](http://www.mongodb.com/cloud/stitch) as part of the app. Export the source code for the app using the handy export capability from within Stitch. Then, create a README.md file for your project that leverages a [MongoDB Stitch App Badge](./badges.md). Similar to the following examples.

### Working Stitch App Example
![Powered by Stitch](https://webhooks.mongodb-stitch.com/api/client/v2.0/app/stitch-badges-dkhza/service/badgeservice/incoming_webhook/badge?appid=stitch-badges-dkhza)
![Powered by Stitch](http://badge.learnstitch.com/index.php?appid=stitch-badges-dkhza)

### Non-working Stitch App Example
![Powered by Stitch](https://webhooks.mongodb-stitch.com/api/client/v2.0/app/stitch-badges-dkhza/service/badgeservice/incoming_webhook/badge?appid=non-existing-app)

Badges are created using a call to a MongoDB Stitch app that we wrote specifically for Hacktoberfest. You can see the source [here](https://github.com/mrlynn/hacktoberfest/blob/master/stitchapp/services/badgeservice/incoming_webhooks/badge/source.js).  To place a MongoDB Stitch app on your repository, simply create a Stitch App and visit the Getting Started page of your app to find the Stitch App ID. Create an image tag in the markup of your README replacing the <APPID> with your actual App ID:
  
  ```
  ![Powered by Stitch](https://webhooks.mongodb-stitch.com/api/client/v2.0/app/stitch-badges-dkhza/service/badgeservice/incoming_webhook/badge?appid=<APPID>)
```
