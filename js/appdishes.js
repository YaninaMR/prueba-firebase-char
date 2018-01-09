
$(document).ready(function() {

  var distrito = Object.keys(data);           
    var $rests = $('#container-dishes');
    var $title = $('#title-restaurant');
      var did = localStorage.getItem("distrito");
      var cid = localStorage.getItem("categoria");
      var rid = localStorage.getItem("restaurante"); 
 
      var categoria = Object.keys(data[distrito[did]]);
      var restaurantes =data[distrito[did]][categoria[cid]]["restaurants"];                   
      var imagenes = Object.keys(restaurantes[rid]); 
           $title.append(restaurantes[rid][imagenes[0]]);
             for (var i in restaurantes[rid][imagenes[5]]) {

                var $div = $('<div></div>');
                $rests.append($div);                
                var $idish = $('<img id="img-dish">'), $ndish = $('<p><i class="material-icons prefix">restaurant_menu</i></p>'),$cdish = $('<p><span>Costo:</span></p>');
                $idish.attr('src', '../assets/img/platos/' + restaurantes[rid][imagenes[5]][i].photo_dish );
                $div.append($idish);
                $div.append($ndish);
                $div.append($cdish);
                $ndish.append(restaurantes[rid][imagenes[5]][i].dishname);
                $cdish.append(restaurantes[rid][imagenes[5]][i].cost);  
   
                console.log(restaurantes[rid][imagenes[5]][i].dishname);
                console.log(restaurantes[rid][imagenes[5]][i].photo_dish);
                console.log(restaurantes[rid][imagenes[5]][i].cost);
                }        
        
                     
 $('.modal').modal();
   
  function rm_accent(str) {
   var letter={'À':'A','Á':'A','È':'E','É':'E','Ì':'I','Í':'I','Ñ':'N','Ò':'O','Ó':'O','Ù':'U','Ú':'U','à':'a','á':'a','è':'e','é':'e','ì':'i','í':'i','ñ':'n','ò':'o','ó':'o','ù':'u','ú':'u','ý':'y'};
   var res='';
   for (var i=0;i<str.length;i++)
    {c=str.charAt(i);res+=letter[c]||c;}
   return res;}
  


  function deleteContact() {
    $('.basura').click(function() {
       $(this).parent().parent().parent().parent().remove();
    });
  }
    $('#search').keyup(function() {
     var nombre = rm_accent($.trim($(this).eq(0).val().toUpperCase()));
     $('.list-datos').hide();
     $('.list-datos').next().hide(); // otros datos  
       $('.list-datos').each(function() {
         var search = rm_accent($.trim($(this).text().toUpperCase()));
         if (search.indexOf(nombre) !== -1) {
                  $(this).show();
                  $(this).next().show();
           }
     });
     
   });

});
