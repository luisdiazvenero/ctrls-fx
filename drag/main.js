class DOMHelper{
  static move(el,coords){
    el.style.top = (coords.y - (el.clientHeight / 2)) + "px";
    el.style.left = (coords.x - (el.clientWidth / 2)) + "px";
  }
}

class DragList{
  constructor(list_selector, items_selector="li"){
    this.list = document.querySelector(list_selector);
    this.items = this.list.querySelectorAll(items_selector);

    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleDragEnd = this.handleDragEnd.bind(this);

    this.canvas = document.createElement("canvas");

    this.bindEvents();
  }

  bindEvents(){
    this.items.forEach(item=>{
      item.addEventListener("dragstart", this.handleDragStart);
      item.addEventListener("drag", this.handleDrag);
      item.addEventListener("dragend", this.handleDragEnd);
    })
  }

  handleDragStart(ev){
    let el = ev.currentTarget;
    ev.dataTransfer.setDragImage(this.canvas, 0,0);
    console.log(":)")
    el.classList.add("dragging");
  }

  handleDrag(ev){
    DOMHelper.move(ev.currentTarget, {x:ev.clientX, y: ev.clientY});
  }

  handleDragEnd(ev){
    let el = ev.currentTarget;
    el.style.top = "";
    el.style.left = "";
    el.classList.remove("dragging");
    console.log(":(")
  }
}

(function(){
  new DragList("ul", "li");
})();
