
function addItem(){
    let add = $('button');
    let lista = $('ul');

    $(add).on('click', function(e){
        
        e.preventDefault();

        let item = $('input').val();

        $('input').val('');

        let form = $("")

        $(lista).append(
            `<form>
                <fieldset>
                    <div class="item">
                        ${item}
                    </div>
                    <div>
                        <button class="check">
                            Check
                        </button>
                        <button class="delete">
                            Delete
                        </button>
                    </div>
                </fieldset>
            </form>`
        );

    });
}

function checkItem(){
    
    $('ul').on('click', '.check', function(e){

        e.preventDefault();

        $(this).parent().prev().css('text-decoration', 'line-through');

    });

}

function deleteItem(){
    
    $('ul').on('click', '.delete', function(e){

        e.preventDefault();

        $(this).parent().parent().parent().remove();

    });

}

function init(){
    addItem();
    checkItem();
    deleteItem();
}

init();