// *****FizzBuzz
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.****

// 1 Per prima cosa bisogna creare un loop che permetta di stampare i numeri da 1 a 100.
// 2 devo sostituire i multipli di 3, 5, e di entrambi ( quindi 3*5=15) con Fizz , Buzz e FizzBuzz utilizzando il resto.
// (es. se il resto di "i" / 3 è uguale a 0 allora è un multiplo di tre).
// 3 mettere prima i multipli di altrimenti sono vere anche le altre due condizioni.
// 4 mostrarli con "console.log()"";
// 5 mettere il "console.log();" nell'else alla fine. Se messo prima dell' "if" stampa tutti i numer compresi i multipli di 3 e 5;


for (var i = 1; i <=100 ; i++) {

    if (i % 15 == 0) {
        document.getElementById('fizzbuzz').innerHTML += "<li>" + "FizzBuzz" + "</li>";
        // console.log("FizzBuzz");
    }else if (i % 3 == 0) {
        document.getElementById('fizzbuzz').innerHTML += "<li>" + "Fizz" + "</li>";
        // console.log("Fizz");
    }else if (i % 5 == 0) {
        document.getElementById('fizzbuzz').innerHTML += "<li>" + "Buzz" + "</li>";
        // console.log("Buzz");
    } else {
        document.getElementById('fizzbuzz').innerHTML += "<li>" + i + "</li>";
        // console.log(i);
    }
}
