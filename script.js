// Write your click handler and conditionals here
// Write your click handler and conditionals here
$("button").click(function() {
    var anime=$("#anime").val();
    var age=$("#age").val();
    if (age>18 && anime==="Fairy Tail") {
        $("#answer-header").text("Your character is Naruto!");
        $("#answer-text").html("<img src='https://www.tvovermind.com/wp-content/uploads/2018/08/Naruto-750x415-750x415.jpg'");
    } 
    else if (age>18 && anime==="Seven Deadly Sins") {
        $("#answer-header").text("Your character is Tanjiro!");
        $("#answer-text").html("<img src='https://i.redd.it/ad3e3pl2z0w31.png'");
    } 
    else if (age<18 && anime==="Fairy Tail") {
        $("#answer-header").text("Your character is Asta!");
        $("#answer-text").html("<img src='http://pm1.narvii.com/7218/9aa397216236bc5288b7781ff4247d0f2badc69er1-444-794v2_uhq.jpg'");
    } 
    else if (age<18 && anime==="Seven Deadly Sins") {
        $("#answer-header").text("Your character is Deku!");
        $("#answer-text").html("<img src='https://pm1.narvii.com/6449/f0aa0dde283669e9d6b87378132fee718d5788ab_hq.jpg'");
    }
    else {
         $("#answer-header").text("Your character is Hinata!");
        $("#answer-text").html("<img src='https://cdn.shopify.com/s/files/1/1878/3879/products/N4473.jpg?v=1556020915'");
    }
})