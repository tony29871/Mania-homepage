var exe_img = document.querySelectorAll(".executivesbox img")
const sea_btn = document.querySelector("#season")
const not_btn = document.querySelector("#not_season")

console.log(exe_img)

function change_Season(){
    sea_btn.style.backgroundColor ="#948f8f"
    not_btn.style.backgroundColor= "transparent";

    $('#dosik').css('opacity','0').stop().attr('src','images/임원진/도식2.jpg').animate({opacity:1},700);
    $('#jaehyun').css('opacity','0').stop().attr('src','images/임원진/재현2.jpg').animate({opacity:1},700);
    $('#jisoo').css('opacity','0').stop().attr('src','images/임원진/지수2.jpg').animate({opacity:1},700);
    $('#seuongbin').css('opacity','0').stop().attr('src','images/임원진/승빈3.JPG').animate({opacity:1},700);
    $('#jaeyoung').css('opacity','0').stop().attr('src','images/임원진/재영2.jpg').animate({opacity:1},700);
    // exe_img[0].src ="images/임원진/도식2.jpg"
    // exe_img[1].src ="images/임원진/재현2.JPG"
    // exe_img[2].src ="images/임원진/지수2.JPG"
    // exe_img[3].src ="images/임원진/승빈3.JPG"
    // exe_img[4].src ="images/임원진/재영2.JPG"

}

function change_notSeason(){
    not_btn.style.backgroundColor ="#948f8f"
    sea_btn.style.backgroundColor= "transparent";
    
    $('#dosik').css('opacity','0').stop().attr('src','images/임원진/윤도식.jpg').animate({opacity:1},700);
    $('#jaehyun').css('opacity','0').stop().attr('src','images/임원진/김재현.jpg').animate({opacity:1},700);
    $('#jisoo').css('opacity','0').stop().attr('src','images/임원진/김지수.jpg').animate({opacity:1},700);
    $('#seuongbin').css('opacity','0').stop().attr('src','images/임원진/이승빈.jpg').animate({opacity:1},700);
    $('#jaeyoung').css('opacity','0').stop().attr('src','images/임원진/최재영.jpg').animate({opacity:1},700);
}

change_Season()