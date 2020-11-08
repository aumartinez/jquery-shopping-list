//JS script

$(document).ready(function(){
  
  $("form").submit(function(e){
    e.preventDefault;
  });
  
  function addItem() {
    let $ul;
    let $li;
    let $label;
    let $div;
    let value;
    
    value = $(".js-new-item").val().trim();
    
    // Empty values
    if (value.length == 0) {
      return;
    }
    
    $ul = $("ul");
    $li = $("<li>").appendTo($ul);
    
    $div = $("<div>")
          .addClass("checkbox")
          .appendTo($li);
          
    $label = $("<label>").appendTo($div);
    
    $("<input>")
    .attr("type", "checkbox")
    .addClass("item")
    .attr("name", "list")
    .click(checkedItem)
    .appendTo($label);
    
    $label.append(value);
    
    $(".js-new-item").val("");    
  }
  
  function checkedItem(e) {
    let $el;
    
    $el = $(e.currentTarget);
    $el.closest("li").toggleClass("removed");
  }
  
  $(".js-add").click(addItem);
  $(".js-item").click(checkedItem);
  
});