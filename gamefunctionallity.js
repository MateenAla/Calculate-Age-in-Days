
function getyear()
{

    let age = prompt("What year your are born?");
    let ageinDays= (2023- age)*365;
    //console.log(ageinDays);
    let h1 = document.createElement('h1');
    let result = document.createTextNode('You are' +ageinDays +'days old');
    h1.setAttribute('id','ageinDays');
    h1.appendChild(result);
    document.getElementById('flx-box-result').appendChild(h1);
    //document.getElementById('flx-box-result').append(h1);

    document.getElementById('a').innerText = ageinDays;
//    document.getElementById('flx-box-result').innerText = getyear().ageinDays;
}

// document.getElementById('a').innerText = 'Done';

function reset()
{
    document.getElementById('ageinDays').remove();
}