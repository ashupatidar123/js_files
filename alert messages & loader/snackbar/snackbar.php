<!-- set on header -->
<div id="snackbar"></div>


<script type="text/javascript">
	snackbarMsg('Deleted successfully..');
</script>

<!-- custom js file set -->
<script type="text/javascript">
	function snackbarMsg(msg='success',reload='',time='3000') {        
	    $('#snackbar').html('');
	    $('#snackbar').html(msg);
	    var x = document.getElementById("snackbar");
	    x.className = "show";
	    setTimeout(function(){ x.className = x.className.replace("show","");},time);
	    if(reload=='refresh'){
	    	setTimeout(function () { location.reload(1); }, time);    	
	    }
	    else if(reload!=''){
	    	setTimeout(function () { window.location=reload; }, time);
	    }else{
	    	return false;
	    }

	}
</script>


<!-- custom css file set -->