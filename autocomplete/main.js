class Autocomplete{
  constructor(input_selector, base_url){
    this.input = document.querySelector(input_selector);
    this.url = base_url;
    this.buildDataList();

  }

  buildDataList(){
    this.dataList = document.createElement("datalist");
    this.dataList.id = "datalist-autocomplete"; // todo: el string deberia generarse random
    document.querySelector("body").appendChild(this.dataList);
    this.input.setAttribute("list", "datalist-autocomplete");
  }

  search(){
    Search.get(this.url+"harry")
      .then(results => this.build(results));
  }

  build(response){
    this.dataList.innerHTML = "";
    response.items.forEach(item => {
      let optionEl = document.createElement("option");
      optionEl.value = item.volumeInfo.title;
      if(item.volumeInfo.subtitle)
        optionEl.innerHTML = item.volumeInfo.title;

        this.dataList.appendChild(optionEl);
    });
  }
}

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
  let autocomplete = new Autocomplete("#searcher", GoogleBooksApiURL);
  autocomplete.search();

}) ();

//Search.get("").then(data=>{ })
