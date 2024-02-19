function switch1()
{
    const button = document.getElementById("btn")
    const lamp = document.getElementById("lamp")

    if(lamp.src.includes("lampoff.jpg")){
        lamp.src="lampon.jpg"
        button.innerHTML = "Turn Off"

    }else{
        lamp.src="lampoff.jpg"
        button.innerHTML = "Turn On"

    }
}
