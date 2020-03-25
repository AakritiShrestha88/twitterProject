 var responseText='[{"username":"Kaleb Burd","userHandle":"@kburd","userImageUrl":"https://pythonprogramming.net/static/images/finance/python-programming-language.png","message":"Hello Twitter! Goodbye MySpace"},{"username":"Rando Cardician","userHandle":"@seedNull","userImageUrl":"https://upload.wikimedia.org/wikipedia/commons/a/a0/2006_Quarter_Proof.png","message":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet nisi ac metus imperdiet fermentum at ut sem. Morbi. "},{"username":"Donald J. Trump","userHandle":"@realDonaldTrump","userImageUrl":"https://compote.slate.com/images/abd6b1ce-a885-4f81-a682-214877a93edd.jpeg","message":"*censored*"},{"username":"John Smith","userHandle":"@notRussianBot","userImageUrl":"https://cdn.pixabay.com/photo/2017/03/14/21/00/american-flag-2144392__340.png","message":"Who censored Trump???"}]'





function renderTweets(responseText){
    tweets=JSON.parse(responseText)
    

    var feed="<div id='feed' >"
    
    feed +="</div>"
    
   var i;
    for(i = 0; i < tweets.length; i++){
        feed +="<div id='feed' style='border: 2px solid blue'>"
        feed +="<image class='img' src ="+tweets[i]["userImageUrl"]+"alt='image' width='30' height='40'>"
        feed +="<div >"+tweets[i]["username"]+"</div>"
        feed +="<div>"+tweets[i]["userHandle"]+"</div>"
        feed +="<div>"+tweets[i]["userImageUrl"]+"</div>"
        feed +="<div>"+tweets[i]["message"]+"</div>"+"<br>"
        feed +="</div>"
      
        // id='feed' style='text-align'
     
     }
    
    document.getElementById('feed').innerHTML+=feed;
}
renderTweets(responseText)





