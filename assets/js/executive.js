var exe_img = document.querySelectorAll(".executivesbox img")
const sea_btn = document.querySelector("#season")
const not_btn = document.querySelector("#not_season")

console.log(exe_img)

function change_Season(){
    sea_btn.style.backgroundColor ="#948f8f"
    not_btn.style.backgroundColor= "transparent";

    exe_img[0].src ="images/임원진/도식2.jpg"
    exe_img[1].src ="images/임원진/재현2.JPG"
    exe_img[2].src ="images/임원진/지수2.JPG"
    exe_img[3].src ="images/임원진/승빈3.JPG"
    exe_img[4].src ="images/임원진/재영2.JPG"
    
}

function change_notSeason(){
    not_btn.style.backgroundColor ="#948f8f"
    sea_btn.style.backgroundColor= "transparent";
    
    exe_img[0].src ="images/임원진/윤도식.jpg"
    exe_img[1].src ="images/임원진/김재현.JPG"
    exe_img[2].src ="images/임원진/김지수.JPG"
    exe_img[3].src ="images/임원진/이승빈.JPG"
    exe_img[4].src ="images/임원진/최재영.JPG"
}

change_Season()