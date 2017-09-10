		

			$(document).ready(function (){
			  $("#show1").hide();
			  $("#show2").hide();
			  $("#ry").hide(); 
			   $("#div1").hide();
			   $("#div2").hide();

			  
				$("#ul1").mouseover(function(){
					$("#show1").show();
				 
				});
				  $("#ul1").mouseout(function(){
				   
				     $("#show1").hide();
    				 
				});
				  	
			 
    }); 
			$(document).ready(function (){
			var i = 0;
				  $(".flip").click(function(){
				       
				       if(i==0){
				     $(".panel").slideDown("slow");
				  }else{
				     	$(".panel").slideUp("slow");
				     }
				        i++;
				        if(i == 2){
				        	i = 0;
				        }
					});
				});
				 
				 
		function mouseover1(){
		 		 
		 		
		        	if($("#ry")){  
                       $("#ry").show();  
                }  
   					 
   			   }
   		function mouseout1(){
   			    	if($("#ry")){  
                       $("#ry").hide();  
                }   
   			    }
   		 	      	 
   		function mouseover2(){
   			        
		  var div1 = document.getElementById('div1');
		        	 var div2 = document.getElementById('div2');
		        	 div1.style.display = "block";
		        	 div2.style.display = "block";

                      div1.style.width = "1000" + "px" ;
                       div1.style.height = "1100" + "px" ;
                }  
   					 
   			   
   		function mouseout2(){
   			 var div1 = document.getElementById('div1');
		        	 var div2 = document.getElementById('div2');
   			    	 
   			    	 div2.style.display = "none";
                       div1.style.width = "0" + "px" ;
                       div1.style.height = "0" + "px" ;     
   			    } 



   			$(document).ready(function (){
   			 		$("#div3").hide();
			   		var i = 0;
				  $(".she").click(function(){
				       
				       if(i==0){
				     $("#div3").slideDown("slow");
				      // var time = setTimeout	("alert('嗨，你妹！')",2000);
				     
				      
				  }else{
				     	$("#div3").slideUp("slow");
				     }
				        i++;
				        if(i == 2){
				        	i = 0; 
				        }
					});
				});
			 
   			    

 


 

				

		 
