const colorPicker = document.getElementById("color-picker")
const schemeMode = document.getElementById("scheme-mode")
const getSchemeBtn = document.getElementById("get-scheme-btn")
const colorContainer = document.getElementById("color-container")

function getColorScheme(){
    const selectedColor = colorPicker.value.slice(1)
    const selectedMode = schemeMode.value
    console.log(selectedColor)
    console.log(selectedMode)

    fetch(`https://www.thecolorapi.com/scheme?hex=${selectedColor}&mode=${selectedMode}&count=5`)
        .then(res => res.json())
        .then(data => {
            let html= ``

            for(let color of data.colors){
                html +=`
                <div class="color">
                <div 
                    class="color-box"
                    style="background-color: ${color.hex.value}" >
                </div>
                <p>${color.hex.value}</p>
                </div>
                `
            
            }
            colorContainer.innerHTML = html

        })
}

getSchemeBtn.addEventListener("click", getColorScheme)
getColorScheme()