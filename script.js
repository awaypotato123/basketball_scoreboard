let homeScr = document.getElementById("home-score")
let count = 0

function home_inc_one()
{
    
    count +=1;
    homeScr.innerText = count;
    

}

function home_inc_two()
{
    
    count +=2;
    homeScr.innerText = count;
    

}

function home_inc_three()
{
    
    count +=3;
    homeScr.innerText = count;
    

}


let GuestScr = document.getElementById("guest-score")
//guest



function guest_inc_one()
{
    
    count +=1;
    GuestScr.innerText = count;
    

}

function guest_inc_two()
{
    
    count +=2;
    GuestScr.innerText = count;
    

}

function guest_inc_three()
{
    
    count +=3;
    GuestScr.innerText = count;
    

}




function clearScores()
{
    homeScr.textContent = 0
    GuestScr.textContent = 0

   
    
}