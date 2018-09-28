exports = function(payload,response){
  const http = context.services.get("stitchbadge");
  // const rtn = "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='99' height='20'><linearGradient id='b' x2='0' y2='100%'><stop offset='0' stop-color='#bbb' stop-opacity='.1'/><stop offset='1' stop-opacity='.1'/></linearGradient><clipPath id='a'><rect width='99' height='20' rx='3' fill='#fff'/></clipPath><g clip-path='url(#a)'><path fill='#e05d44' d='M0 0h0v20H0z'/><path fill='#e05d44' d='M0 0h99v20H0z'/><path fill='url(#b)' d='M0 0h99v20H0z'/></g><g fill='#fff' text-anchor='middle' font-family='DejaVu Sans,Verdana,Geneva,sans-serif' font-size='110'> <text x='495' y='150' fill='#010101' fill-opacity='.3' transform='scale(.1)' textLength='890'>MongoDB Stitch</text><text x='495' y='140' transform='scale(.1)' textLength='890'>MongoDB Stitch</text></g> </svg>";
  
  var rtn = "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='110' height='20'><linearGradient id='b' x2='0' y2='100%'><stop offset='0' stop-color='#bbb' stop-opacity='.1'/><stop offset='1' stop-opacity='.1'/></linearGradient><clipPath id='a'><rect width='110' height='20' rx='3' fill='#fff'/></clipPath><g clip-path='url(#a)'><path fill='#555' d='M0 0h85v20H0z'/><path fill='#4c1' d='M85 0h25v20H85z'/><path fill='url(#b)' d='M0 0h110v20H0z'/></g><g fill='#fff' text-anchor='middle' font-family='DejaVu Sans,Verdana,Geneva,sans-serif' font-size='110'> <text x='435' y='150' fill='#010101' fill-opacity='.3' transform='scale(.1)' textLength='750'>MongoDB Stitch</text><text x='435' y='140' transform='scale(.1)' textLength='750'>MongoDB Stitch</text><text x='965' y='150' fill='#010101' fill-opacity='.3' transform='scale(.1)' textLength='150'>UP</text><text x='965' y='140' transform='scale(.1)' textLength='150'>"  
  //https://stitch.mongodb.com/api/client/v2.0/app/%3Cclient_app_id%3E/auth/providers
  const appid = payload.query.appid;
  const today = Date(Date.now()); 
  const repo = payload.query.repo || "";
  const log = {
    appid: appid,
    date: today,
    repo: repo
  };
  const mongodb = context.services.get("mongodb-atlas");
  const badgelog = mongodb.db("hacktoberfest").collection("badgelog");
  
  badgelog.insertOne(log);
  return http
    .get({ url: "or GET `https://stitch.mongodb.com/api/client/v2.0/app/" + appid + "/auth/providers`" })
    .then(resp => {
      // Shorten the response body
      resp.body = resp.body.text().substring(0, 10) + "...";
      console.log("Status: " + resp.status);
      if (resp.status == "200 OK") {
        rtn = rtn + "UP</text></g> </svg>";
      } else {
        rtn = rtn + "DOWN</text></g> </svg>";
      }
      response.setHeader("Content-Type", "image/svg+xml");
      response.setBody(rtn);
      // return rtn;
    })
};



// exports = async function(payload, response){

//     var retStr = '<?xml version="1.0" encoding="utf-8"?><rss xmlns:atom="http://www.w3.org/2005/Atom" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:itunesu="http://www.itunesu.com/feed" version="2.0">';
//     retStr = retStr + '<channel> \
//           <link>http://grabosky.net</link> \
//           <language>en-us</language> \
//           <copyright>&#xA9;2018</copyright> \
//           <webMaster>chris@grabosky.net</webMaster> \
//           <managingEditor>chris@grabosky.net</managingEditor> \
//           <image> \
//               <url>http://grabosky.azurewebsites.net/MongoDBRadioLogo.png</url> \
//               <title>Private Podcast Feed</title> \
//               <link>http://grabosky.net</link> \
//           </image> \
//           <itunes:image href="http://grabosky.azurewebsites.net/MongoDBRadioLogo.png" /> \
//           <itunes:author>chris@grabosky.net</itunes:author> \
//           <itunes:subtitle>Private Podcast Feed</itunes:subtitle> \
//           <itunes:summary>Private Podcast Feed</itunes:summary> \
//           <itunes:owner> \
//               <itunes:name>chris@grabosky.net</itunes:name> \
//               <itunes:email>chris@grabosky.net</itunes:email> \
//           </itunes:owner> \
//           <itunes:explicit>No</itunes:explicit> \
//           <atom:link href="https://8hnpdsedf6.execute-api.us-east-1.amazonaws.com/default/privateRSS" rel="self" type="application/rss+xml" /> \
//           <pubDate>Mon, 01 Jan 2018 00:00:00 EST</pubDate> \
//           <title>Private Podcast Feed</title> \
//           <description>Private Podcast Feed</description>';
          
//     var today = Date(Date.now());
//     retStr = retStr + "<lastBuildDate>" + today + "</lastBuildDate>";
    
//     var collection = context.services.get("mongodb-atlas").db("rss").collection("rss");
//     let docs = await collection.find().sort({"pubdate": -1}).toArray();
    
//     for(var i = 0; i < docs.length; i++) {
//       var url = docs[i].url.replace(/&/gi, "&amp;");
//       var pd = Date(docs[i].pubdate);
//       retStr = retStr + "\n<item>";
//       retStr = retStr + "<title>"+docs[i].title+"</title>";
//       retStr = retStr + "<description>"+docs[i].title+"</description>";
//       retStr = retStr + '<enclosure url="'+url+'" type="'+docs[i].mimetype+'" length="'+docs[i].duration+'" />';
//       retStr = retStr + "<itunes:duration>"+docs[i].duration+"</itunes:duration>";
//       retStr = retStr + "<pubDate>"+pd+"</pubDate>";
//       retStr = retStr + "<guid>"+url+"</guid>";
//       retStr = retStr + "</item>";
//     }
//     retStr = retStr+ "</channel></rss>"
//     response.setHeader("Content-Type", "application/xml");
//     response.setBody(retStr);
//     //return {"body": retStr, "Content-Type": [ "application/json" ] };
  
//   };
  
