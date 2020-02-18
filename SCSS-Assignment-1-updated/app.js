const hamclick = document.querySelector('.ham-tab')
const hamopen = document.querySelector('.hamburger')
const hamclose = document.querySelector('.close')

hamopen.addEventListener('click', function() {
    hamclick.className='ham-open ham-tab transition'
    document.querySelector('.ham-links').innerHTML = 
    `<ul>
        <li><a href="#">Politics</a></li>
        <li><a href="#">Sports</a></li>
        <li><a href="#">Travel</a></li>
        <li><a href="#">Media</a></li>
        <li><a href="#">Technology</a></li>
        <li><a href="#">Weather</a></li>
        <li><a href="#">Regional</a></li>
    </ul>`
})

hamclose.addEventListener('click', function() {
    hamclick.className='ham-tab transition'
    document.querySelector('.ham-links').innerHTML =''
})