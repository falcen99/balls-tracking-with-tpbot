PlanetX_AILens.initModule()
PlanetX_AILens.switchfunc(PlanetX_AILens.FuncList.Ball)
basic.forever(function () {
    PlanetX_AILens.cameraImage()
    if (PlanetX_AILens.checkBall()) {
        if (PlanetX_AILens.ballData(PlanetX_AILens.Ballstatus.Y) > 80) {
            if (PlanetX_AILens.ballData(PlanetX_AILens.Ballstatus.X) < 80) {
                TPBot.setWheels(-30, 0)
            } else if (PlanetX_AILens.ballData(PlanetX_AILens.Ballstatus.X) > 144) {
                TPBot.setWheels(0, -30)
            } else {
                TPBot.setWheels(25, 25)
            }
        } else {
            TPBot.stopCar()
        }
    }
})
