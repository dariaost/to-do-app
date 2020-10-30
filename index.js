var list = $("#tdlApp ul");
var Mask = "tdl_";

function populateTaskList() {
    var storageSize = localStorage.length;
    if(storageSize > 0) {
        for (let i=0; i<storageSize; i++){
            let key = localStorage.key(i);
            if(key.indexOf(Mask) == 0) {
                $('<li></li>').addClass('tdItem')
                    .attr('data-itemid', key)
                    .text(localStorage.getItem(key))
                    .appendTo(list)
            }
        }
    }
}

populateTaskList()

$('#tdlApp input').on('keydown', function(e) {
    if(e.keyCode != 13) return;
    let str = e.target.value;
    e.target.value = ""

    if(str.length > 0){
        let numberId = 0;
        list.children().each(function(index, el){
            let elementId = $(el).attr('data-itemId').slice(4);
            if(elementId > numberId) {
                numberId = elementId
            }
        })
        numberId++;
        localStorage.setItem(Mask + numberId, str);
        $('<li></li>').addClass('tdItem')
            .attr('data-itemId', Mask + numberId)
            .text(str).appendTo(list)
    }
});

$(document).on('click', '.tdItem', function (e) { 
    var jet = $(e.target); 
    localStorage.removeItem(jet.attr('data-itemid'));
    jet.remove(); 
})