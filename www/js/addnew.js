

function usersubmit(){
	
	var name = document.getElementById('name').value;
	var msg = document.getElementById('message').value;	

	//Store the values in the database

	if(name==''||msg=='')
	{
		document.getElementById('error_msg').innerHTML = '*All field are required';
	}
	else
	{
		var localStorage = window.localStorage;

		localStorage.setItem(name,msg);

		window.location = '../index.html';
	}
}
