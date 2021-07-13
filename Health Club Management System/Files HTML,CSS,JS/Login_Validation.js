function validation()
{
    var result=true;
    var name =d ocument.myform.uname.value;
    var password = document.myform.pass.value;
    
    /*var username=healthclubemp;
    var pass=pass12345;*/
    
    if(name.length < 5)
    {
        alert("Username is not Valid");
        result=false;
    }
    
    if(password.length < 8)
    {
        alert("Password is not valid Enter valid password");
        result=false;
    }
    
    return(result);
}