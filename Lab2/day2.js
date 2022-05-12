$(document).ready(function() 
{ 
 
//     $("#mydiv").dialog({ 
//      modal:true, 
//      autoOpen:true, 
//      buttons:{ 
//        save:function() 
//        { 
        
//             var name=$("#name").val() 
//             var pass=$("#passwo").val() 
//            $("#d2").text(name + pass); 
//            $("#mydiv").dialog("close") 
 
  
//        }, 
//        close:function() 
//        { 
//          $("#mydiv").dialog("close") 
//        } 
 
//     } 
 
// }) 
 
//2 
// $("#dthree").css({width:300,height:200,border:"solid 2px",backgroundcolor:"blue"}); 
// $(".drag").draggable({ 
//     revert:"invalid" 
//      }); 
 
//  $("#dthree").droppable({ 
//      accept:"#image1", 
    
      
//  }); 

//3
$("#menu").accordion({
    collapsible: true,
    icons: {
        header: "ui-icon-circle-arrow-e",
        activeHeader: "ui-icon-circle-arrow-s"
    }

})


 
//4
// $.getJSON("https://reqres.in/api/users/",function(items) 
// { 
//     // console.log(items); 
//     $("#idTable").dataTable( 
//         { 
//             data:items.data, 
//             columns:[ 
//             { data: 'id' }, 
//          { data: 'first_name' }, 
//         { data: 'last_name' }, 
//         { data: 'email' }, 
//         { data: 'avatar' }, 
//         { render: function(data){ 
//           return '<img src=" '+ data + ' " class="avatar">' 
//         } },   
 
//             ] 
//          } 
//     ) 
 
 
 
// }) 
 
 
 
 
 
 
 
 
 
 
 
 
 })
