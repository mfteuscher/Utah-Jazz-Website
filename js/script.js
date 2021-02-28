var Gobertmodal = document.getElementById("GobertInfo");
var Gobertbtn = document.getElementById("Gobert");
var Gobertoriginal = document.getElementById("GobertStats").innerHTML;
var Mitchellmodal = document.getElementById("MitchellInfo");
var Mitchellbtn = document.getElementById("Mitchell");
var Mitchelloriginal = document.getElementById("MitchellStats").innerHTML;
//var Mitchellspan = document.getElementById("mitchellclose");
var Bogdanovicmodal = document.getElementById("BogdanovicInfo");
var Bogdanovicbtn = document.getElementById("Bogdanovic");
var Bogdanovicoriginal = document.getElementById("BogdanovicStats").innerHTML;
var Brantleymodal = document.getElementById("BrantleyInfo");
var Brantleybtn = document.getElementById("Brantley");
var Brantleyoriginal = document.getElementById("BrantleyStats").innerHTML;
var Clarksonmodal = document.getElementById("ClarksonInfo");
var Clarksonbtn = document.getElementById("Clarkson");
var Clarksonoriginal = document.getElementById("ClarksonStats").innerHTML;
var Conleymodal = document.getElementById("ConleyInfo");
var Conleybtn = document.getElementById("Conley");
var Conleyoriginal = document.getElementById("ConleyStats").innerHTML;
var Favorsmodal = document.getElementById("FavorsInfo");
var Favorsbtn = document.getElementById("Favors");
var Favorsoriginal = document.getElementById("FavorsStats").innerHTML;
var Inglesmodal = document.getElementById("InglesInfo");
var Inglesbtn = document.getElementById("Ingles");
var Inglesoriginal = document.getElementById("InglesStats").innerHTML;
var Niangmodal = document.getElementById("NiangInfo");
var Niangbtn = document.getElementById("Niang");
var Niangoriginal = document.getElementById("NiangStats").innerHTML;
var Roycemodal = document.getElementById("RoyceInfo");
var Roycebtn = document.getElementById("Royce");
var Royceoriginal = document.getElementById("RoyceStats").innerHTML;
var Onimodal = document.getElementById("OniInfo");
var Onibtn = document.getElementById("Oni");
var Morganmodal = document.getElementById("MorganInfo");
var Morganbtn = document.getElementById("Morgan");
var Hughesmodal = document.getElementById("HughesInfo");
var Hughesbtn = document.getElementById("Hughes");
var Forrestmodal = document.getElementById("ForrestInfo");
var Forrestbtn = document.getElementById("Forrest");
var Azubuikemodal = document.getElementById("AzubuikeInfo");
var Azubuikebtn = document.getElementById("Azubuike");

// Bojan Bogdanovic
Bogdanovicbtn.onclick = function() {
    Bogdanovicmodal.style.display = "flex";
    fetch("https://nba-stats4.p.rapidapi.com/per_game_regular_season/202711", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "288df9b9efmshaf7a0c981bc4cd0p19e367jsn06dae213fba0",
            "x-rapidapi-host": "nba-stats4.p.rapidapi.com"
        }
    })
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log(json);
        let results = document.getElementById("BogdanovicStats").innerHTML;
        results += "<div> <h4> Season Statistics </h4>";
        results += "<br class=\"break\">Points Per Game: " + json.pts_per_game;
        results += "<br> Rebounds Per Game: " + json.reb_per_game;
        results += "<br> Assists Per Game: " + json.ast_per_game;
        results += "<br> Steals Per Game: " + json.stl_per_game;
        results += "<br> Blocks Per Game:" + json.blk_per_game;
        results += "<br> Field Goal Percentage: " + (json.fg_pct*100).toFixed(2) + "%";
        results += "<br> Free Throw Percentage: " + json.ft_pct*100 + "% </div>";
        document.getElementById("BogdanovicStats").innerHTML = results;
    });
}

// Jarrell Brantley
Brantleybtn.onclick = function() {
    Brantleymodal.style.display = "flex";
    fetch("https://nba-stats4.p.rapidapi.com/per_game_regular_season/1629714", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "288df9b9efmshaf7a0c981bc4cd0p19e367jsn06dae213fba0",
            "x-rapidapi-host": "nba-stats4.p.rapidapi.com"
        }
    })
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log(json);
        let results = document.getElementById("BrantleyStats").innerHTML;
        results += "<div> <h4> Season Statistics </h4>";
        results += "<br class=\"break\">Points Per Game: " + json.pts_per_game;
        results += "<br> Rebounds Per Game: " + json.reb_per_game;
        results += "<br> Assists Per Game: " + json.ast_per_game;
        results += "<br> Steals Per Game: " + json.stl_per_game;
        results += "<br> Blocks Per Game:" + json.blk_per_game;
        results += "<br> Field Goal Percentage: " + (json.fg_pct*100).toFixed(2) + "%";
        results += "<br> Free Throw Percentage: " + json.ft_pct*100 + "%";
        document.getElementById("BrantleyStats").innerHTML = results;
    });
}

// Jordan Clarkson
Clarksonbtn.onclick = function() {
    Clarksonmodal.style.display = "flex";
    fetch("https://nba-stats4.p.rapidapi.com/per_game_regular_season/203903", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "288df9b9efmshaf7a0c981bc4cd0p19e367jsn06dae213fba0",
            "x-rapidapi-host": "nba-stats4.p.rapidapi.com"
        }
    })
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log(json);
        let results = document.getElementById("ClarksonStats").innerHTML;
        results += "<div> <h4> Season Statistics </h4>";
        results += "<br class=\"break\">Points Per Game: " + json.pts_per_game;
        results += "<br> Rebounds Per Game: " + json.reb_per_game;
        results += "<br> Assists Per Game: " + json.ast_per_game;
        results += "<br> Steals Per Game: " + json.stl_per_game;
        results += "<br> Blocks Per Game:" + json.blk_per_game;
        results += "<br> Field Goal Percentage: " + (json.fg_pct*100).toFixed(2) + "%";
        results += "<br> Free Throw Percentage: " + (json.ft_pct*100).toFixed(2) + "%";
        document.getElementById("ClarksonStats").innerHTML = results;
    });
}

// Mike Conley

Conleybtn.onclick = function() {
    Conleymodal.style.display = "flex";
    fetch("https://nba-stats4.p.rapidapi.com/per_game_regular_season/201144", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "288df9b9efmshaf7a0c981bc4cd0p19e367jsn06dae213fba0",
            "x-rapidapi-host": "nba-stats4.p.rapidapi.com"
        }
    })
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log(json);
        let results = document.getElementById("ConleyStats").innerHTML;
        results += "<div> <h4> Season Statistics </h4>";
        results += "<br class=\"break\">Points Per Game: " + json.pts_per_game;
        results += "<br> Rebounds Per Game: " + json.reb_per_game;
        results += "<br> Assists Per Game: " + json.ast_per_game;
        results += "<br> Steals Per Game: " + json.stl_per_game;
        results += "<br> Blocks Per Game:" + json.blk_per_game;
        results += "<br> Field Goal Percentage: " + (json.fg_pct*100).toFixed(2) + "%";
        results += "<br> Free Throw Percentage: " + (json.ft_pct*100).toFixed(2) + "%";
        document.getElementById("ConleyStats").innerHTML = results;
    });
}

// Derrick Favors

Favorsbtn.onclick = function() {
    Favorsmodal.style.display = "flex";
    fetch("https://nba-stats4.p.rapidapi.com/per_game_regular_season/202324", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "288df9b9efmshaf7a0c981bc4cd0p19e367jsn06dae213fba0",
            "x-rapidapi-host": "nba-stats4.p.rapidapi.com"
        }
    })
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log(json);
        let results = document.getElementById("FavorsStats").innerHTML;
        results += "<div> <h4> Season Statistics </h4>";
        results += "<br class=\"break\">Points Per Game: " + json.pts_per_game;
        results += "<br> Rebounds Per Game: " + json.reb_per_game;
        results += "<br> Assists Per Game: " + json.ast_per_game;
        results += "<br> Steals Per Game: " + json.stl_per_game;
        results += "<br> Blocks Per Game:" + json.blk_per_game;
        results += "<br> Field Goal Percentage: " + (json.fg_pct*100).toFixed(2) + "%";
        results += "<br> Free Throw Percentage: " + (json.ft_pct*100).toFixed(2) + "%";
        document.getElementById("FavorsStats").innerHTML = results;
    });
}


// Rudy Gobert
Gobertbtn.onclick = function() {
    Gobertmodal.style.display = "flex";
    fetch("https://nba-stats4.p.rapidapi.com/per_game_regular_season/1628378", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "288df9b9efmshaf7a0c981bc4cd0p19e367jsn06dae213fba0",
            "x-rapidapi-host": "nba-stats4.p.rapidapi.com"
        }
    })
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log(json);
        let results = document.getElementById("GobertStats").innerHTML;
        results += "<div> <h4> Season Statistics </h4>";
        results += "<br class=\"break\">Points Per Game: " + json.pts_per_game;
        results += "<br> Rebounds Per Game: " + json.reb_per_game;
        results += "<br> Assists Per Game: " + json.ast_per_game;
        results += "<br> Steals Per Game: " + json.stl_per_game;
        results += "<br> Blocks Per Game:" + json.blk_per_game;
        results += "<br> Field Goal Percentage: " + json.fg_pct*100 + "%";
        results += "<br> Free Throw Percentage: " + json.ft_pct*100 + "%";
        document.getElementById("GobertStats").innerHTML = results;
    });
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == Gobertmodal) {
        Gobertmodal.style.display = "none";
        document.getElementById("GobertStats").innerHTML = Gobertoriginal;
    }
    else if (event.target == Mitchellmodal) {
        Mitchellmodal.style.display = "none";
        document.getElementById("MitchellStats").innerHTML = Mitchelloriginal;
    }
    else if (event.target == Bogdanovicmodal) {
        Bogdanovicmodal.style.display = "none";
        document.getElementById("BogdanovicStats").innerHTML = Bogdanovicoriginal;
    }
    else if (event.target == Brantleymodal) {
        Brantleymodal.style.display = "none";
        document.getElementById("BrantleyStats").innerHTML = Brantleyoriginal;
    }
    else if (event.target == Clarksonmodal) {
        Clarksonmodal.style.display = "none";
        document.getElementById("ClarksonStats").innerHTML = Clarksonoriginal;
    }
    else if (event.target == Conleymodal) {
        Conleymodal.style.display = "none";        
        document.getElementById("ConleyStats").innerHTML = Conleyoriginal;
    }
    else if (event.target == Favorsmodal) {
        Favorsmodal.style.display = "none";        
        document.getElementById("FavorsStats").innerHTML = Favorsoriginal;
    }
    else if (event.target == Inglesmodal) {
        Inglesmodal.style.display = "none";        
        document.getElementById("InglesStats").innerHTML = Inglesoriginal;
    }
    else if (event.target == Niangmodal) {
        Niangmodal.style.display = "none";        
        document.getElementById("NiangStats").innerHTML = Niangoriginal;
    }
    else if (event.target == Roycemodal) {
        Roycemodal.style.display = "none";        
        document.getElementById("RoyceStats").innerHTML = Royceoriginal;
    }
    else if (event.target == Onimodal) Onimodal.style.display = "none";
    else if (event.target == Azubuikemodal) Azubuikemodal.style.display = "none";
    else if (event.target == Forrestmodal) Forrestmodal.style.display = "none";
    else if (event.target == Hughesmodal) Hughesmodal.style.display = "none";
    else if (event.target == Morganmodal) Morganmodal.style.display = "none";

}


// Joe Ingles
Inglesbtn.onclick = function() {
    Inglesmodal.style.display = "flex";
    fetch("https://nba-stats4.p.rapidapi.com/per_game_regular_season/204060", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "288df9b9efmshaf7a0c981bc4cd0p19e367jsn06dae213fba0",
            "x-rapidapi-host": "nba-stats4.p.rapidapi.com"
        }
    })
    .then(function(response) {
        return response.json();
        }).then(function(json) {
            console.log(json);
            let results = document.getElementById("InglesStats").innerHTML;
            results += "<div> <h4> Season Statistics </h4>";
            results += "<br class=\"break\">Points Per Game: " + json.pts_per_game;
            results += "<br> Rebounds Per Game: " + json.reb_per_game;
            results += "<br> Assists Per Game: " + json.ast_per_game;
            results += "<br> Steals Per Game: " + json.stl_per_game;
            results += "<br> Blocks Per Game:" + json.blk_per_game;
            results += "<br> Field Goal Percentage: " + json.fg_pct*100 + "%";
            results += "<br> Free Throw Percentage: " + json.ft_pct*100 + "%";
            document.getElementById("InglesStats").innerHTML = results;
        });
}

//Donovan Mitchell
Mitchellbtn.onclick = function() {
    Mitchellmodal.style.display = "flex";
    fetch("https://nba-stats4.p.rapidapi.com/per_game_regular_season/1628378", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "288df9b9efmshaf7a0c981bc4cd0p19e367jsn06dae213fba0",
            "x-rapidapi-host": "nba-stats4.p.rapidapi.com"
        }
    })
    .then(function(response) {
        return response.json();
        }).then(function(json) {
            console.log(json);
            let results = document.getElementById("MitchellStats").innerHTML;
            results += "<div> <h4> Season Statistics </h4>";
            results += "<br class=\"break\">Points Per Game: " + json.pts_per_game;
            results += "<br> Rebounds Per Game: " + json.reb_per_game;
            results += "<br> Assists Per Game: " + json.ast_per_game;
            results += "<br> Steals Per Game: " + json.stl_per_game;
            results += "<br> Blocks Per Game:" + json.blk_per_game;
            results += "<br> Field Goal Percentage: " + json.fg_pct*100 + "%";
            results += "<br> Free Throw Percentage: " + json.ft_pct*100 + "%";
            document.getElementById("MitchellStats").innerHTML = results;
        });
}

// Georges Niang

Niangbtn.onclick = function() {
    Niangmodal.style.display = "flex";
    fetch("https://nba-stats4.p.rapidapi.com/per_game_regular_season/1627777", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "288df9b9efmshaf7a0c981bc4cd0p19e367jsn06dae213fba0",
            "x-rapidapi-host": "nba-stats4.p.rapidapi.com"
        }
    })
    .then(function(response) {
        return response.json();
        }).then(function(json) {
            console.log(json);
            let results = document.getElementById("NiangStats").innerHTML;
            results += "<div> <h4> Season Statistics </h4>";
            results += "<br class=\"break\">Points Per Game: " + json.pts_per_game;
            results += "<br> Rebounds Per Game: " + json.reb_per_game;
            results += "<br> Assists Per Game: " + json.ast_per_game;
            results += "<br> Steals Per Game: " + json.stl_per_game;
            results += "<br> Blocks Per Game:" + json.blk_per_game;
            results += "<br> Field Goal Percentage: " + json.fg_pct*100 + "%";
            results += "<br> Free Throw Percentage: " + json.ft_pct*100 + "%";
            document.getElementById("NiangStats").innerHTML = results;
        });
}

// Royce O'Neale

Roycebtn.onclick = function() {
    Roycemodal.style.display = "flex";
    fetch("https://nba-stats4.p.rapidapi.com/per_game_regular_season/1627777", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "288df9b9efmshaf7a0c981bc4cd0p19e367jsn06dae213fba0",
            "x-rapidapi-host": "nba-stats4.p.rapidapi.com"
        }
    })
    .then(function(response) {
        return response.json();
        }).then(function(json) {
            console.log(json);
            let results = document.getElementById("RoyceStats").innerHTML;
            results += "<div> <h4> Season Statistics </h4>";
            results += "<br class=\"break\">Points Per Game: " + json.pts_per_game;
            results += "<br> Rebounds Per Game: " + json.reb_per_game;
            results += "<br> Assists Per Game: " + json.ast_per_game;
            results += "<br> Steals Per Game: " + json.stl_per_game;
            results += "<br> Blocks Per Game:" + json.blk_per_game;
            results += "<br> Field Goal Percentage: " + json.fg_pct*100 + "%";
            results += "<br> Free Throw Percentage: " + json.ft_pct*100 + "%";
            document.getElementById("RoyceStats").innerHTML = results;
        });
}

Azubuikebtn.onclick = function() {
    Azubuikemodal.style.display = "flex";
}

Forrestbtn.onclick = function() {
    Forrestmodal.style.display = "flex";
}

Hughesbtn.onclick = function() {
    Hughesmodal.style.display = "flex";
}

Onibtn.onclick = function() {
    Onimodal.style.display = "flex";
}

Morganbtn.onclick = function() {
    Morganmodal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
/*Mitchellspan.onclick = function() {
    console.log(click);
    Mitchellmodal.style.display = "none";
    document.getElementById("MitchellStats").innerHTML = Mitchelloriginal;
}*/



/*
Donovan Mitchell: 1628378
Bojan Bogdanovic: 202711
Jordan Clarkson: 203903
Mike Conley: 201144
Derrick Favors: 202324
Rudy Gobert: 203497
Joe Ingles: 204060
Georges Niang: 1627777
Royce O'Neale: 1626220
Jarrell Brantley: 1629714
Miye Oni: 1629671
TeamID: 1610612762
*/

/*<h2>Modal Example</h2>

<button id="myBtn">Open Modal</button>

<div id="myModal" class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <p>Some text in the Modal..</p>
    </div>
</div>

<script>
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
</script>*/