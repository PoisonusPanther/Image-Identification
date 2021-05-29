Webcam.set({
    width: 300,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
Webcam.attach('#camera');
function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="pic" src="'+data_uri+'"/>';
    });
}
classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/M8i2aDrLD/model.json', modelLoaded);
function modelLoaded(){
    console.log("Model Loaded!");
}
function check(){
    img = document.getElementById("pic");
    console.log(classifier)
    classifier.classify(img, gotResult);
}
function gotResult(error, result){
    if (error){
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("object").innerHTML = result[0].label;
        document.getElementById("accuracy").innerHTML = result[0].confidence.toFixed(3);
    }
}
