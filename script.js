
$(function(){	
	
	$(".c-form").submit(function(){
		alert("Форма отправлена");
		return false;
	});
	$("input[name = 'doclad']").change(function(){
		if($(this).val() === "yes"){
			$(".doclad_line").stop().show();
			$("input[name = 'doclad_name']").prop("disabled",false).removeProp("disabled");
		}else{
			$(".doclad_line").stop().hide();
			$("input[name = 'doclad_name']").prop("disabled","disabled");
		}
	});

	$('input[id= phone]').mask('+7 (999) 999-99-99')	

})


