const stars = document.querySelectorAll('.fa-star');
const emojis = document.querySelectorAll('.fa-regular');
const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"];

updateRating(0);
stars.forEach(function(e, index){
    e.addEventListener('click', function(y){
        console.log("clicked"+ " " + index);
        updateRating(index);
    });
});
function updateRating(index){
    stars.forEach(function(stars, indx){
        if(indx < index + 1){
            stars.classList.add('active');
        }
        else{
            stars.classList.remove('active');
        }
    });
    emojis.forEach(function(element){
        element.style.transform = `translateX(-${index * 50}px)`;
        element.style.color = colorsArray[index];
    });
}