
let filterOnn = function () {


    document.querySelector('.storeys-btns').addEventListener('click', event => {
        if (event.target.tagName !== 'BUTTON') return false
        let filterClass = event.target.dataset['f']

        let btns = document.querySelectorAll('.btn')
        btns.forEach(item => {
            item.style.backgroundColor = '#fff'
        })

        event.target.style.backgroundColor = '#B8D00A'

        sessionStorage.setItem('filterStoreys', filterClass)


    })
    document.querySelector('.area-btns').addEventListener('click', event => {
        if (event.target.tagName !== 'BUTTON') return false
        let filterClassArea = event.target.dataset['a']
        let btn_area = document.querySelectorAll('.btn-area')

        btn_area.forEach(item => {
            item.style.backgroundColor = '#fff'
        })

        event.target.style.backgroundColor = '#B8D00A'


        sessionStorage.setItem('filterArea', filterClassArea)


    })


    getResponseFilter()

}




