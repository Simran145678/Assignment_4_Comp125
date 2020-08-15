(function () {
    // Function scoped Variables
    let stage;
    let assets;
    let slotMachineBackground;
    let spinButton;
    let manifest = [
        { id: "background", src: "../Assets/images/background.png" },
        { id: "banana", src: "../Assets/images/banana.gif" },
        { id: "bar", src: "../Assets/images/bar.gif" },
        { id: "bell", src: "../Assets/images/bell.gif" },
        { id: "bet_line", src: "../Assets/images/bet_line.gif" },
        { id: "bet1Button", src: "../Assets/images/bet1Button.png" },
        { id: "bet10Button", src: "../Assets/images/bet10Button.png" },
        { id: "bet100Button", src: "../Assets/images/bet100Button.png" },
        { id: "betMaxButton", src: "../Assets/images/betMaxButton.png" },
        { id: "blank", src: "../Assets/images/blank.gif" },
        { id: "cherry", src: "../Assets/images/cherry.gif" },
        { id: "grapes", src: "../Assets/images/grapes.gif" },
        { id: "orange", src: "../Assets/images/orange.gif" },
        { id: "seven", src: "../Assets/images/seven.gif" },
        { id: "spinButton", src: "../Assets/images/spinButton.png" }
    ];
    //This function trigers first and preload everything
    function Preload() {
        assets = new createjs.LoadQueue;
        assets.installPlugin(createjs.Sound);
        assets.on("complete", Start);
        assets.loadManifest(manifest);
    }
    //This function is triggered after preload
    // config and initialization
    function Start() {
        console.log("App Started...");
        let canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // 60 FPS or 16.667 ms
        createjs.Ticker.on("tick", Update);
        stage.enableMouseOver(20);
        Config.Globals.AssetManifest = assets;
        Main();
    }
    // called every frame
    function Update() {
        //helloLabel.rotation -= 5;
        stage.update();
    }
    // app logic goes here
    function Main() {
        slotMachineBackground = new Core.GameObject("background", Config.Screen.CENTER_X + 40, Config.Screen.CENTER_y - 240, true);
        stage.addChild(slotMachineBackground);
        spinButton = new UIObjects.Button("spinButton", Config.Screen.CENTER_X + 125, Config.Screen.CENTER_y + 145, true);
        stage.addChild(spinButton);
        spinButton.on("click", () => {
            console.log("SpinButton clicked");
        });
    }
    window.addEventListener("load", Preload);
})();
//# sourceMappingURL=app.js.map