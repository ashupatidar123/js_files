function recordDelete(pagename,id,type)
{
    if(!confirm("Do you want to delete?")){
      return false;
    }
    $.ajax({
      method:"post",
      url:base_url+'front/receiveOrderDelete',
      data:{id:id},
      success:function(data){
        if(data==1){
          swal({
            position: 'center',
            title: "Record deleted successfully...",
            icon: "success",
            timer: 1500
          });
          setTimeout(function() {
              location.reload();
          },1400);
        }else{
          swal({
            position: 'center',
            title: "Record deletion failed...",
            icon: "warning",
            timer: 1300
          });
        }
      }

    });
}