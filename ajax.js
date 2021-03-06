let button = document.querySelector("button");

button.onclick = function(){
    // ajaxWithXHR();
    // ajaxWithAxios();
    ajaxWithFetch();
}

function ajaxWithXHR() {
    let newXHR = new XMLHttpRequest();
    newXHR.addEventListener('load', function(){
        console.log(JSON.parse(newXHR.response));
        let div = document.querySelector("div");
        div.innerText = newXHR.response;
    })
    newXHR.open( 'GET', 'http://api.wunderground.com/api/41c93dff69d2241b/geolookup/conditions/q/CO/Boulder.json' );
    newXHR.send();    
}

function ajaxWithAxios() {
    axios.get('http://api.wunderground.com/api/41c93dff69d2241b/geolookup/conditions/q/CO/Boulder.json')
    .then(function (obj) {
      console.log(obj.data);
      let div = document.querySelector("div");
      div.innerText = JSON.stringify(obj.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function ajaxWithFetch(){
    fetch('http://api.wunderground.com/api/41c93dff69d2241b/geolookup/conditions/q/CO/Boulder.json').then(function(response) {
        return response.json();
      }).then(function(json) {
        console.log(json);
        let div = document.querySelector("div");
        div.innerText = JSON.stringify(json);
    });
}