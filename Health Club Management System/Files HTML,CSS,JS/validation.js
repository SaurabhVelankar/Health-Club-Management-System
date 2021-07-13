function validation()
{
    var result=true;
    
    var a=document.getElementsByTagName("input");
    
    
    if(a[0].value.length == 0) //validation name
    {
        alert("Enter valid User Name");
        result=false;
            
    }
    
    if(a[1].value.length < 10 )//validation for phone no
    {
        alert("Enter valid Phone Number");
        result=false;
    }
    
    if(a[2].value < 0 )//validation Age
    {
        alert("Enter valid Age");
        result=false;
    }
    
    
    
    return(result);
    
}