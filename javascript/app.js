scrollTopButton('.btn-subir')

function scrollTopButton(btn){
    const ScrollBtn = $(btn);


    $(window).scroll(function(){
        let scrollTop = $(this).scrollTop();
        scrollTop > 700 ? ScrollBtn.removeClass('hidden') : ScrollBtn.addClass('hidden')
    })

    $ScrollBtm.click(function(){
    // '.btn-subir' -> 'btn-subir'
    let btnClass = btn.substr(1);
    if($(this).hasClass(btnClass)){
        window.scrollTo({
            behavior: 'smooth',
            top: 0
        })
    }
    })

}
