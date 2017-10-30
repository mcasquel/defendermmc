$(document).ready(function(){
    $("#btn").click(function(){
        $("#psg").animate({
            left: 'auto',
            top: 'auto',
            opacity: '3',
            height: '200px',
            width: '300px',

        });
    });
});
$(document).ready(function(){
  $("#previa2").hide();
    $("#btn").click(function(){
        $("#font1").css("fontSize","+=5");

    });
    $("#btn2").click(function(){
        $("#font1").css("fontSize","-=5");

    });

    $("#previa").click(function(){

        $("#previa").hide();
        $("#previa2").show();
         var nome = $("#nome").val();
         var email = $("#email").val();
         var msg = $("#msg").val();


         $("#set").append("Nome: "+nome);
         $("#set1").append("Email: "+email);
         $("#set2").append("Mensagem: "+msg);
    alert("Nome: "+nome +"\nEmail: "+email+ "\nMensagem: "+msg);
     });
});
