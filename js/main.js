//JS script

$(document).ready(function(){
  
  $("form").submit(function(e){    
    //On form submit prevent form submission, stay on the same page    
    e.preventDefault();    
  });
  
  $("#shopping-list").submit(function(e){
    //Fire add item function
    e.preventDefault();
    addItem();
  });
  
  function addItem() {
    let $ul;
    let $li;
    let $div;
    let $label;    
    let value;
    
    //Capture user INPUT
    value = $(".js-new-item").val().trim();
    
    //Empty values
    if (value.length == 0) {
      return;
    }
    
    $ul = $("ul");
    
    //Create LI element and add it to UL
    $li = $("<li>").appendTo($ul);
    
    //Create container DIV for checkbox group and add it to LI
    $div = $("<div>")
          .addClass("checkbox")
          .appendTo($li);
    
    //Create LABEL and add it to DIV
    $label = $("<label>").appendTo($div);
    
    //Create INPUT, add attributes and add it to LABEL tag
    $("<input>")
    .attr("type", "checkbox")
    .addClass("item")
    .attr("name", "list")
    .click(checkedItem)
    .appendTo($label);
    
    //Finally add the captured value to LABEL tag
    $label.append(value);
    
    $(".js-new-item").val("");    
  }
  
  function checkedItem(e) {
    let $el;
    
    //Capture ELEM firing event
    $el = $(e.currentTarget);
    //On LI element next to firing event element, toggle class to removed
    $el.closest("li").toggleClass("removed");
  }
  
  function changeTitle() {
    if ($(".js-change-title").val().trim().length == 0){
      $("h1").text("A shopping list");
    }
    else{
      $("h1").text($(".js-change-title").val().trim());      
    }
  }
  
  $(".js-add").click(addItem);
  $(".js-item").click(checkedItem);
  $(".js-change-title").keyup(changeTitle);
  
});
