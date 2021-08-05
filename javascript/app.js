scrollTopButton('.btn-subir')

function scrollTopButton(btn){
    const ScrollBtn = $(btn);
    console.log(ScrollBtn);


    $(window).scroll(function(){
        let scrollTop = $(this).scrollTop();
        scrollTop > 700 ? ScrollBtn.removeClass('hidden') : ScrollBtn.addClass('hidden')
    })

}