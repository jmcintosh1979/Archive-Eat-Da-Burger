$(function () {


  // Function that will create a new burger
  $('.create-burger').on('submit', function(event) {
    event.preventDefault()

    newBurger = {
      burger_name: $('#burger-name').val().trim(),
      devoured: 0
    }

    $.ajax('/api/burgers', {
      type: 'POST',
      data: newBurger
    }).then(function() {
      location.reload()
    })
  })


  // Function that will update the devoured status from False to True
  $('.change-status').on('click', function (event) {
    let id = $(this).data('id'),
        newValue = {
          devoured: 1
        }

    $.ajax('/api/burgers/' + id, {
      type: 'PUT',
      data: newValue
    }).then(function () {
      location.reload()
    })
  })

})