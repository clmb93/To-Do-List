$(document).ready(function(){
	
	Recharge();
	$('#valid').on('click',function(){
		if($('input:text').val()){
			
			$id = parseInt((Math.random())*1000);
			$data = $('input:text').val();
			localStorage.setItem($id,$data);
			$id = 0;
			$data = 0;
			$data = $('input:text').val("");
			Recharge();
			
		}
		
	});	
	
	function Recharge(){
		
		$('#achanger').empty();
		for(var i in localStorage)
			{
   				$('#achanger').append("<div class='col-lg-10 contenu form-control'>"+localStorage.getItem(i)+"</div><div class='col-lg-2'><button class='btn btn-block bouton ' onclick='supp("+i+");'>Supprimer</button></div>");
				
				
			}
		
	}
	
});
	function supp(i){
		localStorage.removeItem(i);
		document.getElementById('achanger').innerHTML="";
		for(var i in localStorage)
			{
   				$('#achanger').append("<div class='col-lg-10 contenu form-control'>"+localStorage.getItem(i)+"</div><div class='col-lg-2'><button class='btn btn-block bouton ' onclick='supp("+i+");'>Supprimer</button></div>");
				
				
			}
	}