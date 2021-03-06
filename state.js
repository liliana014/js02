var isp = document.getElementById("estado");
var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};
getJSON('//get.geojs.io/v1/ip/geo.json',
function(err, data) {
  if (err !== null) {
    alert('Something went wrong: ' + err);
  } else {
    isp.value = (data.region);
  }
});
