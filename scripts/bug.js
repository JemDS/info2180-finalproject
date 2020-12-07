$( document ).ready(function() {

    var httpRequest = new XMLHttpRequest();
    
    var url = "http://localhost/info2180-finalproject/bug.php?query=";
    var result = document.querySelector("#result");
    var display = document.querySelector("html");

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


    $(document).on('click', '[name="newissue2"]', function(){
        httpRequest.onreadystatechange = IssueClick;
        httpRequest.open('GET', url + "NewIssue");
        httpRequest.send();
     });

     $(document).on('click', '[name="issuelink"]', function(){
        var value = $(this).attr("value");
        /*alert(value); */
        var url = "http://localhost/info2180-finalproject/IssueDetail.php?issueid="
        httpRequest.onreadystatechange = getDetails;
        httpRequest.open('GET', url + value);
        httpRequest.send();

     });

     function getDetails() {
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


    $(document).on('click', '[name="closed"]', function(){
        var stat = "closed";
        var value = $(this).attr("value");
        var url = "http://localhost/info2180-finalproject/status.php?query=" + stat + "&id=" + value;
        alert(url);
        httpRequest.onreadystatechange = updatestat;
        httpRequest.open('GET', url);
        httpRequest.send();

     });

     $(document).on('click', '[name="progress"]', function(){
        var stat = "progress";
        var value = $(this).attr("value");
        var url = "http://localhost/info2180-finalproject/status.php?query=" + stat + "&id=" + value;
        alert(url);
        httpRequest.onreadystatechange = updatestat;
        httpRequest.open('GET', url);
        httpRequest.send();

     });

     function updatestat() {
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