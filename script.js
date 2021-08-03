const shareBtn = document.getElementById('share-btn')
const shareLinks = document.getElementById('share-links')
const innerBtn = document.getElementById('inner-btn')

shareBtn.addEventListener('click', () => {
  shareLinks.classList.add('click')
})

innerBtn.addEventListener('click', () => {
  shareLinks.classList.remove('click')
})
