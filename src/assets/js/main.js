document.addEventListener('DOMContentLoaded', function () {
  console.log('loaded')
  // Tab functionality
  // document.querySelectorAll('.tabs .tab-links a').forEach(function (tabLink) {
  //   tabLink.addEventListener('click', function (e) {
  //     e.preventDefault()

  //     var tab_id = this.getAttribute('href')

  //     let parent = this.closest('.tabs')
  //     parent.querySelectorAll('.tab-links a').forEach(function (link) {
  //       link.classList.remove('active')
  //     })
  //     parent.querySelectorAll('.tab-contents > section').forEach(function (content) {
  //       content.classList.add('hidden')
  //     })

  //     this.classList.add('active')
  //     document.querySelector(tab_id).classList.remove('hidden')
  //   })
  // })

  // const tabs = document.querySelectorAll('.tabs .tab-links a')
  // const prevButton = document.getElementById('prevButton')
  // const nextButton = document.getElementById('nextButton')
  // const submitButton = document.getElementById('submitButton')

  // function getActiveTabIndex() {
  //   return Array.from(tabs).findIndex((tab) => tab.classList.contains('active'))
  // }

  // function showTab(index) {
  //   if (index >= 0 && index < tabs.length) {
  //     tabs.forEach((tab) => tab.classList.remove('active'))
  //     document
  //       .querySelectorAll('.tab-contents > section')
  //       .forEach((section) => section.classList.add('hidden'))

  //     tabs[index].classList.add('active')
  //     document.querySelector(tabs[index].getAttribute('href')).classList.remove('hidden')

  //     prevButton.style.display = index === 0 ? 'none' : 'block'
  //     nextButton.style.display = index === tabs.length - 1 ? 'none' : 'block'
  //     submitButton.style.display = index === tabs.length - 1 ? 'block' : 'none'
  //   }
  // }

  // tabs.forEach(function (tabLink, index) {
  //   tabLink.addEventListener('click', function (e) {
  //     e.preventDefault()
  //     showTab(index)
  //   })
  // })

  // prevButton.addEventListener('click', function () {
  //   const currentIndex = getActiveTabIndex()
  //   if (currentIndex > 0) {
  //     showTab(currentIndex - 1)
  //   }
  // })

  // nextButton.addEventListener('click', function () {
  //   const currentIndex = getActiveTabIndex()
  //   if (currentIndex < tabs.length - 1) {
  //     showTab(currentIndex + 1)
  //   }
  // })

  // showTab(0)

  // Dropdown functionality
  function toggleDropdown(dropdown) {
    const dropdownMenu = dropdown.querySelector('.dropdown-menu')
    if (dropdownMenu.style.display === 'block') {
      dropdownMenu.style.display = 'none'
    } else {
      dropdownMenu.style.display = 'block'
    }
  }

  function updateDropdownText(dropdownItem) {
    const dropdown = dropdownItem.closest('.dropdown')
    const text = dropdownItem.textContent
    dropdown.querySelector('.dropdown-text').textContent = text
    dropdown.querySelector('.dropdown-menu').style.display = 'none'
  }

  document.querySelectorAll('.dropdown-toggle').forEach(function (toggle) {
    toggle.addEventListener('click', function () {
      const dropdown = this.closest('.dropdown')
      toggleDropdown(dropdown)
    })
  })

  document.querySelectorAll('.dropdown-item').forEach(function (item) {
    item.addEventListener('click', function () {
      updateDropdownText(this)
    })
  })

  document.addEventListener('click', function (event) {
    document.querySelectorAll('.dropdown').forEach(function (dropdown) {
      if (!dropdown.contains(event.target)) {
        dropdown.querySelector('.dropdown-menu').style.display = 'none'
      }
    })
  })

  // Modal functionality
  document.querySelectorAll('[data-modal-target]').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      const modalId = this.getAttribute('data-modal-target')
      const modal = document.getElementById(modalId)
      openModal(modal)
    })
  })

  document.querySelectorAll('.modal-close').forEach(function (closeButton) {
    closeButton.addEventListener('click', function () {
      const modal = this.closest('.modal')
      closeModal(modal)
    })
  })

  function openModal(modal) {
    console.log('Open modal: ' + modal)
    modal.classList.remove('hidden')
  }

  function closeModal(modal) {
    console.log('Close modal: ' + modal)
    modal.classList.add('hidden')
  }
})
