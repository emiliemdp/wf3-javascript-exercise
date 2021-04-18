

// Mettre le compteur à jour :
var messageCount = $('p').length;
$('#count').text(messageCount)

// Supprimer les messages :
$('body').on("click", ".trash", function(){
    $(this).parent().remove()
    // Mettre le compteur à jour :
    var messageCount = $('p').length;
    $('#count').text(messageCount)
})


// Créer un message et l'intégrer :
$('#btn-add').click(function(){
    var message = $("#add-message").val();
    $('body').append(`
    
                        <div class="row">
                            <img class="avatar" src="avatar-1.jpg">
                        <div>
                            <h6>Stephen Curry</h6>
                            <p>${message}</p>
                        </div>
                        <img class="trash" src="trash.png">
                        </div>  `

    );
   // Mettre le compteur à jour :
    $('#count').text($('p').length);
    $('#add-message').val("")

})

    // Barre de recherche fonctionelle :
    $('#btn-search').click(function(){
        $("h6").each(function(){
                if($('#search-message').val() != $(this).text()){
                    $(this).parent().parent().fadeOut()
                }else{
                    $(this).parent().parent().show()
                }
        })
    })



