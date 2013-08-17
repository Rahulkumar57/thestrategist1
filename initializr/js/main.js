var listview=function(ul){
this.el=$(ul)
}

ListView.prototype.refreshlist = function (items){
this.el.html('');
this.el.hide()
this.addItems(items);
this.el.facdeIn('slow');

}
ListView.prototype.addItems = function (items){
$.each(items,$.proxy(function (i,items){
this.addItem(item);
},this ));
}

ListView.prototype.addItem = function (items){
this.el.append($("<li/>").html(item,title));
}



var App = {function(){
var listView= new ListView(".main ul");
		function sync(){
		url="";
		$.getJSON(url,function(studios){
		storesinlocalstorage(studios);
		});
		}
		function storesinlocalstorage(studios){
		localStorage.setItem("studios",JSON.stringify(studios))
		}
		function getfromlocalstorage(){
		return JSON.parse.(LocalStorage.getItem("studios"))
		}
		
		
		
		
		function clear(){
		}
		
		return{
		
		sync:sync,
		clear:clear
		getstudios: getfromlocalstorage
			}
			
			}();
			

