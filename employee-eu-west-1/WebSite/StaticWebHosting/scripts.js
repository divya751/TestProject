//add your api here below
var API_ENDPOINT = "https://xd7agbrn74.execute-api.eu-west-1.amazonaws.com/Prod/{resourcePath}"

//GET REQUEST
document.getElementById("saveprofile").onclick = function(){
  var inputData = {
    "empId":$('#empid').val(),
        "emp_name":$('#emp_name').val(),
        "password":$('#password').val(),
        "phonenumber":$('#phonenumber').val(),
        "username":$('#username').val()
      };
  $.ajax({
        url: API_ENDPOINT,
        type: 'POST',
        data:  JSON.stringify(inputData)  ,
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
          document.getElementById("profileSaved").innerHTML = "Profile Saved!";
        },
        error: function () {
            alert("error");
        }
    });
}
// GET REQUEST
document.getElementById("getprofile").onclick = function(){
  $.ajax({
        url: API_ENDPOINT,
        type: 'GET',
         contentType: 'application/json; charset=utf-8',
        success: function (response) {
          $('#employeeProfile tr').slice(1).remove();
          jQuery.each(response, function(i,data) {
            $("#employeeProfile").append("<tr> \
                <td>" + data['empId'] + "</td> \
                <td>" + data['emp_name'] + "</td> \
                <td>" + data['password'] + "</td> \
                <td>" + data['phonenumber'] + "</td> \
                <td>" + data['username'] + "</td> \
                </tr>");
          });
        },
        error: function () {
            alert("error");
        }
    });
}
