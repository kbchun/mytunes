// // data.js - Defines an array of data regarding song files and their accompanying details.

//   {
//     url: 'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/04+One+In+A+Million.mp3',
//     title: 'One In A Million',
//     artist: 'Aaliyah',
//   },
//   {
//     url: 'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/03+Age+Ain%27t+Nothing+But+A+Number.mp3',
//     title: 'Age Ain\'t Nothing But A Number',
//     artist: 'Aaliyah',
//   },
//   {
//     url: 'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/05+Hot+Like+Fire.mp3',
//     title: 'Hot Like Fire',
//     artist: 'Aaliyah',
//   },
//   {
//     url: 'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/06+If+Your+Girl+Only+Knew.mp3',
//     title: 'If Your Girl Only Knew',
//     artist: 'Aaliyah',
//   }
// ];
// var songData = [];
// $.ajax({
// // This is the url you should use to communicate with the parse API server.
//   url: 'https://api.parse.com/1/classes/songs/',
//   type: 'GET',
//   contentType: 'application/json',
//   success: function (data) {
//     for (var i = 0; i < data.results.length; i++) {
//       var song = {};
//       song['url'] = data.results[i].url;
//       song['title'] = data.results[i].title;
//       song['artist'] = data.results[i].artist;
//       songData.push(song);
//     }
//     console.log(songData)
//   },
//   error: function (data) {
//     // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
//     console.error('Failed to retrieve songs', data);
//   }
// });

