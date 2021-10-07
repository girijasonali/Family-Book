var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg", "https://image.freepik.com/free-vector/cartoon-young-businessman-posing-white_29190-5483.jpg", "https://cdn4.vectorstock.com/i/1000x1000/90/68/young-woman-student-cartoon-vector-19619068.jpg",  "https://static.vecteezy.com/system/resources/previews/000/366/624/original/little-girl-with-happy-face-vector.jpg"];
var names = ["Family Book","Anant Pednekar", "Sonali Pednekar", "Girija Pednekar"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 3
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
