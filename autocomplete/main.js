class AUtocomplete{}

class Search{
  static get(url){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    return new Promise((resolve,reject)=>{
      xhr.onreadystatechange = ()=>{
        if(xhr.readyState == 4) {
          if(xhr.status == 200) return resolve(JSON.parse(xhr.responseText));

          //algo salio mal
          reject(xhr.status);
        }
      }
    });
  }
}

(function () {
  const GoogleBooksApiURL = "https://www.googleapis.com/books/v1/volumes?q=";
  Search.get(GoogleBooksApiURL+"harry")
    .then(results => console.log(results));
}) ();

Search.get("").then(data=>{ })
