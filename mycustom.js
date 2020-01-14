function pageRefresh(pagename='')
{
  location.reload();
}

$(document).ready(function(){
  $("input").keypress(function(){
    $(".error").html('');
  });
});

function successMessage(message='',url=''){
  swal({
    position: 'center',
    title: message,
    icon: "success",
    timer: 1500
  });
  setTimeout(function() {
      if(url==''){
        location.reload();
      }else{
      window.location.href = url;
    }
      
  },1400);
}

function errorMessage(message='Opps! operation is failed...'){
  swal({
    position: 'center',
    title: message,
    icon: "warning",
    timer: 1300
  });
}

function recordDelete(pagename,id,type='')
{
    if(!confirm("Do you want to delete?")){
      return false;
    }

    if(pagename=='receive_orders' || pagename=='my_orders')
    {
      $.ajax({
        method:"post",
        url:base_url+'front/orderDelete',
        data:{id:id},
        success:function(data){
          if(data==1){            
            successMessage('Record deleted successfully...');
          }else{
            errorMessage();
          }
        }

      });
    }
}

function statusChange(pagename,id,type='')
{
    if(!confirm("Are you sure?")){
      return false;
    }

    if(type=='Cancel')
    {
      $.ajax({
        method:"post",
        url:base_url+'front/receiveOrderStatus',
        data:{id:id,type:type},
        success:function(data){
          if(data==1){
            successMessage('Order cancelled successfully...');            
          }else{
            errorMessage('Order cancelation failed...');
          }          
        }
      });    
    }
    else if(type=='Accept')
    {
      $.ajax({
        method:"post",
        url:base_url+'front/receiveOrderStatus',
        data:{id:id,type:type},
        success:function(data){
          if(data==1){
            var redirect = base_url+'receive_orders/ongoing';
            successMessage('Order accepted...',redirect);            
          }else{
            errorMessage();
          }
        }
      });
    }
    else if(type=='Completed')
    {
      $.ajax({
        method:"post",
        url:base_url+'front/receiveOrderStatus',
        data:{id:id,type:type},
        success:function(data){
          if(data==1){
            successMessage('Order completed...');
          }else{
            errorMessage('Order failed...');
          }            
        }
      });    
    }
    else if(type=='Rejected')
    {
      $.ajax({
        method:"post",
        url:base_url+'front/receiveOrderStatus',
        data:{id:id,type:type},
        success:function(data){
          if(data==1){
            successMessage('Order rejected successfully...');
          }else{
            errorMessage('Order rejection failed...');            
          }          
        }
      });    
    }
    else
    {
      errorMessage('Opps! Invalid action..');
      return false;      
    }
}
function onlyNumbers(type='')
{
    var regex = new RegExp("^[0-9+.]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }else{
        return true;
    }
}

function onlyLatters(type='')
{
    var regex = new RegExp("^[a-zA-Z0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }else{
        return true;
    }
}


function generateCaptch(){
    var a = Math.floor(100000 + Math.random() * 900000);   
    a = String(a);
    a = a.substring(0,6);
    $('#new_captcha').val(a);    
}

function validateForm(pageName='')
{
  if(pageName=='booking')
  {
    var new_captcha = $('input[name="new_captcha"]').val();
    var captcha   = $('input[name="captcha"]').val();
    if(captcha==""){
      $('#captchaError').html('Please enter captcha...');
      return false;
    }
    else if(new_captcha!=captcha){
      $('#captchaError').html('Please enter valid captcha...');
      return false;
    } 
  }   
}