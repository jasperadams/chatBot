
var q1 = {
    question: '<h1>what is your name?</h1>',
    answer: function(){
        var input = $("#input").val();
        $("#output").html('<h1>hello ' + input + '</h1>');
    },
    time: 2400
};

var q2 = {
    question: '<h1>how much of your last assignment did you do?</h1>',
    answer: function(){
        var input = $("#input").val();
        $("#output").html('<h1>' + input + '? ok that is a 14/15</h1>');
    },
    time: 2400
};

var q3 = {
    question: '<h1>how would you describe the difficulty of this class?</h1>',
    answer: function(){
        var input = $("#input").val();
        $("#output").html('<h1>wow sorry to hear that</h1>');
    },
    time: 2400
};

var q4 = {
    question: '<h1>what is your favorite type of meme?</h1>',
    answer: function(){
        var input = $("#input").val();
        if(input.toLowerCase().includes("albinson")){
            $("#output").html('<h1> hey i like albinson memes too!</h1>');
        } else if(input.toLowerCase().includes("memes") || input.includes("ones")) {
            $("#output").html('<h1> i guess ' + input + ' are cool ... i like albinson memes</h1>');
        } else if(input.toLowerCase().includes("meme")) {
            $("#output").html('<h1> i guess ' + input + ' is cool ... i like albinson memes</h1>');
        } else {
            $("#output").html('<h1> i guess ' + input + ' memes are cool ... i like albinson memes</h1>');
        }
    },
    time: 3500
};

var q5 = {
    question: '<h1>how many times have you played slither.io this week?</h1>',
    answer: function() {
        var input = $("#input").val();
        if(input == "0" || input == "none") {
            $("#output").html('<h1>you are definitely lying. even I play slither</h1>');
        } else if(input.toLowerCase().includes("jasper")) {
            $("#output").html('<h1>damn you crazy</h1>');
        }
        else if(isNaN(input) == false) {
            $("#output").html('<h1>only ' + input + ' times? jasper has played way more than that!</h1>');
        } else {
            $("#output").html('<h1>' + input + '? jasper has played way more than that!</h1>');
        }
    },
    time: 3500
};

var q6 = {
    question: '<h1>have you seen otis recently?</h1>',
    answer: function(){
        var input = $("#input").val();
        if(input.toLowerCase().includes("yes")){
            $("#output").html('<h1>really? then you must have been JUULing with him in the bathroom</h1>');
        }
        else if(input.toLowerCase().includes("no")){
            $("#output").html('<h1>me neither - he is probably JUULing in the bathroom</h1>');
        } else {
            $("#output").html('<h1>well he is defintely vaping</h1>');
        }
    },
    time: 3500
};


var q7 = {
    question: '<h1>who is the worst teacher at berkeley high?</h1>',
    answer: function(){
        var input = $("#input").val();
        if (input.toLowerCase().includes("holston")) {
            $("#output").html('<h1>yes, mr holston is terrible</h1>');
        } else if(input.toLowerCase().includes("you")) {
            $("#output").html('<h1>no, mr holston is definetly worse than me</h1>');
        } else {
            $("#output").html('<h1>you think ' + input + ' is the worst? nah mr holston is</h1>');
        }
    },
    time: 3500
};

var q8 = {
    question: '<h1>what is your favorite website?</h1>',
    answer: function(){
        var input = $("#input").val();
        if(input.toLowerCase().includes("cornhub")) {
            $("#output").html('<h1>nice, me too: </h1><iframe src="https://cornhubpremium.blog/" height="500" width="500"></iframe>');
        } else {
            $("#output").html('<h1>' + input + '? really? I like this: </h1><iframe src="https://cornhubpremium.blog/" height="500" width="500"></iframe>');
        }
    },
    time: 4000
};

var q9 = {
    question: '<h1>want to see my backend?</h1>',
    answer: function(){
        var input = $("#input").val();
        if(input.toLowerCase().includes("yes")){
            $("#output").html('<h1>here you go lol</h1>');
            $('#img').attr('src', 'img/back.png');
        }
        else if(input.toLowerCase().includes("no")){
            $("#output").html('<h1>here you go anyway lol</h1>');
            $('#img').attr('src', 'img/back.png');

        } else {
            $("#output").html('<h1>well here you go</h1>');
            $('#img').attr('src', 'img/back.png');
        }
        setTimeout(timedImage, 3000);
    },
    time: 3000
};

var q10 = {
    question: '<h1>press enter to see a meme</h1>',
    answer: function(){
        var input = $("#input").val();
        var num = Math.floor(Math.random() * 26) + 14;
        var img = '<img src="meme/ALBY%20(' + num + ').jpg" width=428 height="240">';
        $("#output").html(img);
    },
    time: 3500
};

var questions = [q2, q3, q4, q5 ,q6, q7, q8, q9, q10];
