console.log("hello console");
function validateForm() {
    var name=document.Myform.user_name.value;
    var email=document.Myform.E_mail.value;  
    var password=document.Myform.pass_word.value;
    var phonenumber=document.Myform.phone_number.value;
    if (name==null || name==""){  
        alert("Username must be filled");  
        return false;  
    }

    if (email==null || email==""){  
        alert("Email must be filled");  
        return false;  
    }

    if (password==null || password==""){  
        alert("Password must be filled");  
        return false;  
    }

    if (phonenumber==null || phonenumber==""){  
        alert("Phonenumber must be filled");  
        return false;  
    }
    }
    function validateform2(){
        var email2=document.register.Em_ail.value;  
        var password2=document.register.passw_ord.value;

    if (email2==null || email2==""){  
        alert("E-mail not filled");  
        return false;  
    }

    if (password2==null || password2==""){  
        alert("Password not filled");  
        return false;  
     }
     
    }
    function addcart(){
        alert("Added To Cart");  
    }
  validateForm();
  validateform2();
  addcart();

