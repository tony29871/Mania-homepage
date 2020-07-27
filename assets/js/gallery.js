let tabs = document.querySelector('.tabs')
let buttons = document.querySelectorAll('.button')
let content = document.querySelector('.content')

$(function() {        
    let itemli = $('.itemli'); //각 버튼
    //button active 클래스 전환
    itemli.click(function () {
        $(this).find('a').addClass('active');
        itemli.not($(this)).find('a').removeClass('active');
    
    //.active 클래스 요소만 보이기
        let a_btn = $(this).find('a') 
        let id_attr = a_btn.attr("id") 

    //id 클래스가 아닌것 숨김    
        function showOne(id) { 
            $('.media').show();
            $('.media').not('.'+id).hide();
        }

        if (a_btn.hasClass("active")) { 
            showOne(id_attr);
        }
    }); 
});

 /* 이미지 클릭 시 */
 var imageTagList = document.querySelectorAll('.all_img');
    
console.log(imageTagList)

 for(var i=0;i<imageTagList.length;i++){
     imageTagList[i].addEventListener('click',function(){
         var modal = document.getElementById('img-modal');
         var content = document.getElementById('img-modal-content');
         modal.style.display='block';
         content.src = this.dataset.img;
     });
 }
    
 /* close 버튼 클릭시*/
 function imgModalClose(){
     var modal = document.getElementById('img-modal');
     var content = document.getElementById('img-modal-content');
     modal.style.display="none";
     content.src = '';
 }