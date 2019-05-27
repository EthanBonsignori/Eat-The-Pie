// Document ready
$(function () {
  // Click listener for devour button
  $('.change-devoured').on('click', function (e) {
    const id = $(this).attr('id')
    const state = $(this).attr('state')

    const newDevouredState = {
      devoured: state
    }

    console.log(newDevouredState)
    // Send PUT request based on id
    $.ajax(`/api/pies/${id}`, {
      type: 'PUT',
      data: newDevouredState
    }).then(() => {
      console.log('Devoured state changed to:', state)
      // reload the page to get the updates
      window.location.reload()
    })
  })

  $('.delete-pie').on('click', function (e) {
    const id = $(this).attr('id')

    // Send the DELETE request.
    $.ajax(`/api/cats/${id}`, {
      type: 'DELETE'
    }).then(() => {
      console.log('Deleted pie:', id)
      // Reload the page to get the updated list
      window.location.reload()
    })
  })
})

// // Document ready
// $(function () {
//   // Click listener for devour button
//   $('.change-devoured').on('click', function (e) {
//     const id = $(this).attr('id')
//     const state = $(this).attr('state')

//     const newDevouredState = {
//       devoured: state
//     }

//     console.log(newDevouredState)
//     // Send PUT request based on id
//     window.fetch(`/api/pies/${id}`, {
//       type: 'PUT',
//       data: newDevouredState
//     }).then((res) => {
//       console.log(res)
//       console.log('Devoured state changed to', state)
//       // reload the page to get the updates
//       window.location.reload()
//     })
//   })
// })
