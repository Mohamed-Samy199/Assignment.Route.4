var frist = document.getElementById("frist")
var second = document.getElementById("second")
var allQuote = [
    {auther: "― Krishamurit",
    quote : "“A mind that is full of conclusions is a dead mind, it is not a living mind. A living mind is a free mind, learning, never concluding.”"}
    
    ,{auther : "― Frank Zappa",
    quote : "“So many books, so little time.”"}
    
    ,{auther : "― Mahatma Gandhi",
    quote : "“Live as if you were to die tomorrow, learn as if you were to life forever.”"}
    
    ,{auther : "―El Da7e7",
    quote : "“الملل خطر ، المخ بيكرهه لدرجة أنه ممكن يئذي نفسه ولا يحس بيه”"}
    
    ,{auther : "―Mohamed Rateb El Nabolsy",
    quote : "“إذا لم يوقظك الله لصلاة الفجر، راجع نفسك وأعمالك، فأهل الفجر لهم منزلة خاصة عند الله.”"}
]


function quoteFun(){
    var x = Math.floor(Math.random() * allQuote.length);
console.log(x)
    frist.innerHTML = allQuote[x].auther
    second.innerHTML = allQuote[x].quote
}