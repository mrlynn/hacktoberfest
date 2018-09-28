/*
  See https://developer.github.com/v3/activity/events/types/#webhook-payload-example for
  examples of payloads.

  Try running in the console below.
*/
  
exports = function(payload) {
  // console.log(JSON.stringify(payload));
  const mongodb = context.services.get("mongodb-atlas");
  const events = mongodb.db("events").collection("log");
  const eventDoc = payload;
  delete eventDoc._id;
  
  eventDoc.date_created = new Date();
  events.insertOne({event: eventDoc});
  
  // return payload.pull_request && payload.action === 'opened';
  return true;
};