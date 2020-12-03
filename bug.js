$( document ).ready(function() {

    var httpRequest = new XMLHttpRequest();
    
    var url = "http://localhost/info2180-finalproject/bug.php?query=";
    var result = document.querySelector("#result");

    let home = $("#home");
    let newissue = $("#newissue");
    let add = $("#add");
    let logout = $("#logout");


    //HOME AJAX
    home.on('click', function() {
        httpRequest.onreadystatechange = HomeClick;
        httpRequest.open('GET', url + "Home");
        httpRequest.send();
    });


    function HomeClick() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                var response = httpRequest.responseText;
                result.innerHTML = response;
                      
            } 
            else {
                console.log(httpRequest.status)
                alert('There was a problem with the request.');
             }
        }
    }

    //NEW ISSUE AJAX
    newissue.on('click', function() {
        httpRequest.onreadystatechange = IssueClick;
        httpRequest.open('GET', url + "NewIssue");
        httpRequest.send();
    });


    function IssueClick() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                var response = httpRequest.responseText;
                result.innerHTML = response;
                      
            } 
            else {
                console.log(httpRequest.status)
                alert('There was a problem with the request.');
             }
        }
    }
   

    //ADD AJAX
    add.on('click', function() {
        httpRequest.onreadystatechange = AddClick;
        httpRequest.open('GET', url + "Add");
        httpRequest.send();
    });


    function AddClick() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                var response = httpRequest.responseText;
                result.innerHTML = response;
                      
            } 
            else {
                console.log(httpRequest.status)
                alert('There was a problem with the request.');
             }
        }
    }

    //LOGOUT AJAX
    logout.on('click', function() {
        httpRequest.onreadystatechange = LogoutClick;
        httpRequest.open('GET', url + "Logout");
        httpRequest.send();
    });


    function LogoutClick() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                var response = httpRequest.responseText;
                result.innerHTML = response;
                      
            } 
            else {
                console.log(httpRequest.status)
                alert('There was a problem with the request.');
             }
        }
    }

});