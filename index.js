var listProgress = $("#tdlProgress ul");
var MaskProgress = "tdl1_";

var listTodo = $("#tdlTodo ul");
var MaskTodo = "tdl2_";

var listWork = $("#tdlWork ul");
var MaskWork = "tdl3_";

var listGroceries = $("#tdlGroceries ul");
var MaskGroceries = "tdl4_";

function populateTaskList() {
    var storageSize = localStorage.length;
    if(storageSize > 0) {
        for (let i=0; i<storageSize; i++){
            let key = localStorage.key(i);
            if(key.indexOf(MaskTodo) == 0) {
                $('<li></li>').addClass('tdItem')
                    .attr('data-itemid', key)
                    .text(localStorage.getItem(key))
                    .appendTo(listTodo)
            }

            if(key.indexOf(MaskProgress) == 0) {
                $('<li></li>').addClass('tdItem')
                    .attr('data-itemid', key)
                    .text(localStorage.getItem(key))
                    .appendTo(listProgress)
            }

            if(key.indexOf(MaskWork) == 0) {
                $('<li></li>').addClass('tdItem')
                    .attr('data-itemid', key)
                    .text(localStorage.getItem(key))
                    .appendTo(listWork)
            }

            if(key.indexOf(MaskGroceries) == 0) {
                $('<li></li>').addClass('tdItem')
                    .attr('data-itemid', key)
                    .text(localStorage.getItem(key))
                    .appendTo(listGroceries)
            }
        }
    }
}

populateTaskList()


// In progress column added new task
$('#tdlProgress input').on('keydown', function(e) {
    if(e.keyCode != 13) return;
    let str = e.target.value;
    e.target.value = ""

    if(str.length > 0){
        let numberId1 = 0;
        listProgress.children().each(function(index, el){
            let elementId1 = $(el).attr('data-itemId').slice(4);
            if(elementId1 > numberId1) {
                numberId1 = elementId1
            }
        })
        numberId1++;
        localStorage.setItem(MaskProgress + numberId1, str);
        $('<li></li>').addClass('tdItem')
            .attr('data-itemId', MaskProgress + numberId1)
            .text(str).appendTo(listProgress)
    }
});

// todo column added
$('#tdlTodo input').on('keydown', function(e) {
    if(e.keyCode != 13) return;
    let str = e.target.value;
    e.target.value = ""

    if(str.length > 0){
        let numberId2 = 0;
        listTodo.children().each(function(index, el){
            let elementId2 = $(el).attr('data-itemId').slice(4);
            if(elementId2 > numberId2) {
                numberId2 = elementId2
            }
        })
        numberId2++;
        localStorage.setItem(MaskTodo + numberId2, str);
        $('<li></li>').addClass('tdItem')
            .attr('data-itemId', MaskTodo + numberId2)
            .text(str).appendTo(listTodo)
    }
});

//list work tasks
$('#tdlWork input').on('keydown', function(e) {
    if(e.keyCode != 13) return;
    let str = e.target.value;
    e.target.value = ""

    if(str.length > 0){
        let numberId3 = 0;
        listWork.children().each(function(index, el){
            let elementId3 = $(el).attr('data-itemId').slice(4);
            if(elementId3 > numberId3) {
                numberId3 = elementId3
            }
        })
        numberId3++;
        localStorage.setItem(MaskWork + numberId3, str);
        $('<li></li>').addClass('tdItem')
            .attr('data-itemId', MaskWork + numberId3)
            .text(str).appendTo(listWork)
    }
});

$('#tdlGroceries input').on('keydown', function(e) {
    if(e.keyCode != 13) return;
    let str = e.target.value;
    e.target.value = ""

    if(str.length > 0){
        let numberId4 = 0;
        listGroceries.children().each(function(index, el){
            let elementId4 = $(el).attr('data-itemId').slice(4);
            if(elementId4 > numberId4) {
                numberId4 = elementId4
            }
        })
        numberId4++;
        localStorage.setItem(MaskGroceries + numberId4, str);
        $('<li></li>').addClass('tdItem')
            .attr('data-itemId', MaskGroceries + numberId4)
            .text(str).appendTo(listGroceries)
    }
});

$(document).on('click', '.tdItem', function (e) { 
    var jet = $(e.target); 
    localStorage.removeItem(jet.attr('data-itemid'));
    jet.remove(); 
})