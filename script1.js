$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4
            },
            sname:{
                required:true,
                minlength:4
            },
            emailadd1:{
                required:true,
                email:true
            },
            password1:{
                required:true,
                minlength:6
            },
            date1:{
                required:true
            },
            Gender:{
                required:true
            }
        },
        message:{
            fname:{
                required:"enter the fisrt name",
                minlength:"enter atleast 4 characters"
            }
        }
    })
})