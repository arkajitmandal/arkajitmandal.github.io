$('.datepicker').each(function(){
	var picker = new Pikaday({
		field: this
	});
});

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function onAgree(){
    var ison = document.getElementById("formCheck-1").checked ;
    if (ison){
    
      var fname = getUrlVars()["f"];
      document.getElementById("download").style.backgroundColor = "#002cff";
      document.getElementById("download").style.borderColor = "#002cff";
    if (fname!==undefined){  document.getElementById("download").disabled = false;
        console.log(fname);
        document.getElementById("dwnlink").href = "../assets/img/work/" + fname + ".png";
         document.getElementById("dwnlink").download = fname + ".pdf";
    }

    } else {

        document.getElementById("download").disabled = true;
        document.getElementById("dwnlink").href = "#";
        document.getElementById("dwnlink").download = undefined;
        document.getElementById("download").style.backgroundColor = "#0ea0ff";
        document.getElementById("download").style.borderColor = "#0ea0ff";
    }

}


