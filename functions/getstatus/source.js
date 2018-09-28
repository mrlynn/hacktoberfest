exports = function(arg){
  const http = context.services.get("stitchbadge");
  const rtn = "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='99' height='20'><linearGradient id='b' x2='0' y2='100%'><stop offset='0' stop-color='#bbb' stop-opacity='.1'/><stop offset='1' stop-opacity='.1'/></linearGradient><clipPath id='a'><rect width='99' height='20' rx='3' fill='#fff'/></clipPath><g clip-path='url(#a)'><path fill='#e05d44' d='M0 0h0v20H0z'/><path fill='#e05d44' d='M0 0h99v20H0z'/><path fill='url(#b)' d='M0 0h99v20H0z'/></g><g fill='#fff' text-anchor='middle' font-family='DejaVu Sans,Verdana,Geneva,sans-serif' font-size='110'> <text x='495' y='150' fill='#010101' fill-opacity='.3' transform='scale(.1)' textLength='890'>MongoDB Stitch</text><text x='495' y='140' transform='scale(.1)' textLength='890'>MongoDB Stitch</text></g> </svg>";
  
  return http
    .get({ url: "http://www.mongodb.com/" })
    .then(resp => {
      // Shorten the response body
      resp.body = resp.body.text().substring(0, 10) + "...";
      console.log("Status: " + resp.status);
      if (resp.status == "200 OK") {
        const rtn= "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='99' height='20'><linearGradient id='b' x2='0' y2='100%'><stop offset='0' stop-color='#bbb' stop-opacity='.1'/><stop offset='1' stop-opacity='.1'/></linearGradient><clipPath id='a'><rect width='99' height='20' rx='3' fill='#fff'/></clipPath><g clip-path='url(#a)'><path fill='#4c1' d='M0 0h0v20H0z'/><path fill='#4c1' d='M0 0h99v20H0z'/><path fill='url(#b)' d='M0 0h99v20H0z'/></g><g fill='#fff' text-anchor='middle' font-family='DejaVu Sans,Verdana,Geneva,sans-serif' font-size='110'> <text x='495' y='150' fill='#010101' fill-opacity='.3' transform='scale(.1)' textLength='890'>MongoDB Stitch</text><text x='495' y='140' transform='scale(.1)' textLength='890'>MongoDB Stitch</text></g> </svg>"
      }
      return rtn;
    })
};