//ID
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");
const box8 = document.getElementById("box8");
const boxNumber = document.getElementById("boxNumber");
const changeColor = document.getElementById("changeColor");
const colorBtn = document.getElementById("colorBtn");
const resetBtn = document.getElementById("resetBtn");

//Red, Blue, Purple, Brown and Yellow
function colorSelect(){
    console.log(changeColor.value)
    if (changeColor.value == "red")
    {
        return "red";
    } else {
        if (changeColor.value == "blue")
        {
            return "blue";
        } else {
            if (changeColor.value == "purple")
            {
                return "purple";
            } else {
                if (changeColor.value == "brown")
                {
                    return "brown";
                } else {
                    if (changeColor.value == "yellow")
                    {
                        return "yellow";
                    } else {
                        return "";
                    }
                }
            }
        }
    }
}

colorBtn.addEventListener('click', function(){
    let colorSelection = colorSelect();
    console.log(boxNumber);
    if (boxNumber.value == 1)
    {
        box1.style.backgroundColor = colorSelection;
    } else {
        if (boxNumber.value == 2)
        {
            box2.style.backgroundColor = colorSelection;
        } else {
            if (boxNumber.value == 3)
            {
                box3.style.backgroundColor = colorSelection;
            } else {
                if (boxNumber.value == 4)
                {
                    box4.style.backgroundColor = colorSelection;
                } else {
                    if (boxNumber.value == 5)
                    {
                        box5.style.backgroundColor = colorSelection;
                    } else {
                        if (boxNumber.value == 6)
                        {
                            box6.style.backgroundColor = colorSelection;
                        } else {
                            if (boxNumber.value == 7)
                            {
                                box7.style.backgroundColor = colorSelection;
                            } else {
                                if (boxNumber.value == 8)
                                {
                                    box8.style.backgroundColor = colorSelection;
                                } else {
                                    console.log("Box not found");
                                }
                            }
                        }
                    }
                }     
            }
        }
    }

});

resetBtn.addEventListener('click', function(){
    box1.style.backgroundColor = "";
    box2.style.backgroundColor = "";
    box3.style.backgroundColor = "";
    box4.style.backgroundColor = "";
    box5.style.backgroundColor = "";
    box6.style.backgroundColor = "";
    box7.style.backgroundColor = "";
    box8.style.backgroundColor = "";
})