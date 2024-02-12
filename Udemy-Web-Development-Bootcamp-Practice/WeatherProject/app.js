const express = require("express");
const https = require("https"); // native node module
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
    
});

app.post("/", function(req, res){
    console.log(req.body.cityName);
    const query = req.body.cityName;
    const unit = "metric"
    const apiKey = "ca3dcbd0490d4253c4fe23aee7e34858";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=" + unit + "&appid=" + apiKey;
    https.get(url, function(response){
        // console.log(response.statusCode);

        response.on("data", function(data){
            // 這邊得到的資料會是一連串的16進制碼
            // 利用JSON.parse()把資料轉換成容易看的JSON格式
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            console.log(temp);
            console.log(weatherDescription);
            console.log(icon);
            res.write("<p>The weather is currently " + weatherDescription + "</p>");
            res.write("<h1>The temperature in " + query + " is " + temp + " degrees Celcius.</h1>");
            res.write("<img src=" + imageURL + ">")
            res.send();
        });
    });
});


app.listen(3000, function(){
    console.log("Server is running on port 3000");
});


// const query = "London";
//     const unit = "metric"
//     const apiKey = "ca3dcbd0490d4253c4fe23aee7e34858";
//     const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=" + unit + "&appid=" + apiKey;
//     https.get(url, function(response){
//         // console.log(response.statusCode);

//         response.on("data", function(data){
//             // 這邊得到的資料會是一連串的16進制碼
//             // 利用JSON.parse()把資料轉換成容易看的JSON格式
//             const weatherData = JSON.parse(data);
//             const temp = weatherData.main.temp;
//             const weatherDescription = weatherData.weather[0].description;
//             const icon = weatherData.weather[0].icon;
//             const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
//             console.log(temp);
//             console.log(weatherDescription);
//             console.log(icon);
//             res.write("<p>The weather is currently " + weatherDescription + "</p>");
//             res.write("<h1>The temperature in London is " + temp + " degrees Celcius.</h1>");
//             res.write("<img src=" + imageURL + ">")
//             res.send();
//         });
//     });