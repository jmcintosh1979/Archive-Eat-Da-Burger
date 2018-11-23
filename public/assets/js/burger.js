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


  // Function that will update the devoured status(True/False)
  $('.change-status').on('click', function (event) {
    let id = $(this).data('id'),
      newStatus = $(this).data('newStatus'),
      newValue = {
        devoured: newStatus
      }

    $.ajax('/api/burgers' + id, {
      type: 'PUT',
      data: newValue
    }).then(function () {
      location.reload()
    })
  })

})