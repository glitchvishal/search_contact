/*function myFunction(){
    var input, filter, ul,li, a, i, textValue;
    input = docoument.getElementById('myinput');
    filter = input.value.toUpperCase();
    ul = docoument.getElementById("myul");
    li = ul.getElementByTagName('li');
    //loop
    for(i=0; i < li.length; i++){
        a = li[i].getElementByTagName("a")[0];
        textValue = a.textconstant || a.innerText;
        if (textValue.toUpperCase().indexof(filter) > -1){
            li[i].style.display = "";
        }
        else {
            li[li].style.display = "none";
        }
    }
}*/
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}