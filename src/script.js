let isPhoneRequired = false

const phoneLabelSpan = document.querySelector('.phone-label-span')
const phoneField = document.getElementById('phone')

document.querySelector('#phone-checkbox')
  .addEventListener('change', function() {
    if (this.checked) {
      phoneLabelSpan.style.display = 'inline'
    } else {
      phoneLabelSpan.style.display = 'none'
    }
    phoneField.required = !isPhoneRequired
    isPhoneRequired = !isPhoneRequired
  })


    if (!emailField.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      return showAndHideErrorMessage()
    }
    firstNameField.value = ''
    lastNameField.value = ''
    emailField.value = ''
    textareaField.value = ''
    phoneField.value = ''
    productField.selectedIndex = 0
    helpRadio.checked = true
    emailCheckbox.checked = false
    phoneCheckbox.checked = false
    fileField.value = ''
    phoneLabelSpan.style.display = 'none'
    successMessage.style.display = 'block'
    isPhoneRequired = false
    scroll(0,0)
    hideMessageAfterTimeout(successMessage)
  }, false)

function showAndHideErrorMessage() {
  const errorMessage = document.querySelector('.error')
  errorMessage.style.display = 'block'
  scroll(0,0)
  hideMessageAfterTimeout(errorMessage)
  return
}

function hideMessageAfterTimeout(element) {
  setTimeout(function() {
    element.style.display = 'none'
  }, 3000)
}
