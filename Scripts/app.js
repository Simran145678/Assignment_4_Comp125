(function () {
    // Function scoped Variables
    let stage;
    let helloLabel;
    let clickMeButton;
    // config and initialization
    function Start() {
        console.log("App Started...");
        let canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // 60 FPS or 16.667 ms
        createjs.Ticker.on("tick", Update);
        stage.enableMouseOver(20);
        Main();
    }
    // called every frame
    function Update() {
        //helloLabel.rotation -= 5;
        stage.update();
    }
    // app logic goes here
    function Main() {
        // label
        helloLabel = new createjs.Text("Holla, Mundo!", "60px Consolas", "#000000");
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
        helloLabel.x = 320;
        helloLabel.y = 240;
        stage.addChild(helloLabel);
        // button
        clickMeButton = new createjs.Bitmap("/Assets/images/ClickMeButton.png");
        clickMeButton.regX = clickMeButton.getBounds().width * 0.5;
        clickMeButton.regY = clickMeButton.getBounds().height * 0.5;
        clickMeButton.x = 320;
        clickMeButton.y = 340;
        stage.addChild(clickMeButton);
        clickMeButton.on("click", () => {
            if (helloLabel.text == "Adios, mundo cruel!") {
                helloLabel.text = "Holla, Mundo!";
                helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
                helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
            }
            else {
                helloLabel.text = "Adios, mundo cruel!";
                helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
                helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
            }
        });
        clickMeButton.on("mouseover", () => {
            clickMeButton.alpha = 0.7; // 70% opaque - 30% transparent
        });
        clickMeButton.on("mouseout", () => {
            clickMeButton.alpha = 1.0; // 100% opaque - 0% transparent
        });
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map