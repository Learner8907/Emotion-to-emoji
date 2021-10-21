prediction_1="";
prediction_2="";

Webcam.set({
width: 350,
height: 300,
image_format: "png",
png_quality: 100
});

camera= document.getElementById("camera")

Webcam.attach(camera)
function take_snap()
{
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML= "<img id='captured_img' src="+data_uri+">"
});
}
console.log(ml5.version);

classifyer = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/OXsiyxJqt/model.json", modelLoaded);

function modelLoaded(){
    console.log("model loaded");
}
function identify_pic(){
    img = document.getElementById("captured_img");
    classifyer.classify(img, get_result);
}
function get_result(error, results) {
    console.log(results)
prediction_1= results[0].label;
console.log(prediction_1);
prediction_2= results[1].label;

document.getElementById("emotion_1").innerHTML = prediction_1;
document.getElementById("emotion_2").innerHTML = prediction_2;

if(prediction_1 == "Happy"){
    document.getElementById("emoji_1").innerHTML = "&#128522";
} 
else if(prediction_1 == "Sad"){
    document.getElementById("emoji_1").innerHTML = "&#128532";
}
else if(prediction_1 == "Angry"){
    document.getElementById("emoji_1").innerHTML = "&#128545";
}
else if(prediction_1 == "Suprise"){
    document.getElementById("emoji_1").innerHTML = "&#128558";
}
if(prediction_2 == "Happy"){
    document.getElementById("emoji_2").innerHTML = "&#128522";
} 
else if(prediction_2 == "Sad"){
    document.getElementById("emoji_2").innerHTML = "&#128532";
}
else if(prediction_2 == "Angry"){
    document.getElementById("emoji_2").innerHTML = "&#128545";
}
else if(prediction_2 == "Suprise"){
    document.getElementById("emoji_2").innerHTML = "&#128558";
}
speak();
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data1 = "The first Prediction is "+ prediction_1;
    speak_data2 = "The second Prediction is "+ prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}
