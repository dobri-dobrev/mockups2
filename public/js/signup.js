$(function(){
	
	$("#sign_up_button").click(function (){
		data = {};
		data['name'] = $("#name_field").val();
		data['email'] = $("#email_field").val();
		$.ajax({
	      type: 'POST',
	      accepts: "application/json",
		  url: '/send_email',
		  dataType:'json',
		  data: data,
		  success: function(json){
		  	
		  		console.log("greaaaat success");
		  		window.location.replace("/");
		  	
		  },
		  error: function(){
		  	console.log("internal server error");
		  }
		});
	});
});