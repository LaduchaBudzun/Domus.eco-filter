





async function getResponseFilter() {

    if (document.readyState == 'loading') {//при обновлении страницы возвращает значения sessionStorage в 'по умолчанию'

        sessionStorage.setItem('filterStoreys', 0)
        sessionStorage.setItem('filterArea', 250)

    }



    let filterStoreys = sessionStorage.getItem('filterStoreys')
    let filterArea = sessionStorage.getItem('filterArea')

    if (filterStoreys == null) {
        filterStoreys = 0
    }
    if (filterArea == null) {
        filterArea = 250
    }

    let filterAreaStart

    if (filterArea == 100) {
        filterAreaStart = 0
    } else if (filterArea == 150) {
        filterAreaStart = 100
    } else if (filterArea == 200) {
        filterAreaStart = 150
    } else if (filterArea == 250) {
        filterAreaStart = 0
    }




    let priceStart = sessionStorage.getItem('priceStart')
    let priceEnd = sessionStorage.getItem('priceEnd')

    if (priceStart == null) {
        priceStart = 0
    }
    if (priceEnd == null) {
        priceEnd = 9999999
    }




    console.log('http://cloud-desk.ru/DB_Dealers_Domus_Dev/hs/CalcAPI/ProjectsToSite/' + filterStoreys + '/' + filterAreaStart + '/' + filterArea + '/' + priceStart + '/' + priceEnd)
    let response = await fetch('http://cloud-desk.ru/DB_Dealers_Domus_Dev/hs/CalcAPI/ProjectsToSite/' + filterStoreys + '/' + filterAreaStart + '/' + filterArea + '/' + priceStart + '/' + priceEnd)



    let content = await response.json()



    let contentCards = content[1].МассивПроектов
    let list = document.querySelector('.gallery-grid')

    list.innerHTML = ``// стираем все ячейки и выводим в зависимости от фильтра

    contentCards.forEach(item => {

        let pictures = item.МассивСсылокНаКартинки

        let firstP
        let secondP
        let thirdP

        if (pictures.length == 0) {

            firstP = 'https://st4.depositphotos.com/2381417/26959/i/600/depositphotos_269592714-stock-photo-no-thumbnail-image-placeholder-for.jpg'
            secondP = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9E3cZiqQw5v4z-NsSL-h-os1gzakQdeTYeQ&usqp=CAU'
            thirdP = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9E3cZiqQw5v4z-NsSL-h-os1gzakQdeTYeQ&usqp=CAU'
        } else {
            firstP = pictures[0].СсылкаНаКартинку
            secondP = pictures[1]
            thirdP = pictures[2]
        }

        // list.innerHTML = ``
        list.innerHTML += `
        <div class="grid-item ${item.Этажность} ">
        
        <img src="${firstP}" alt=""
            class="grid-item__img" class="btn-primary" data-toggle="modal"
            data-target="#exampleModal" onclick = "showAll()">

            <div class="grid-content">
            <div class="d-name">
                        <h4 class="name" id="name-1">${item.Наименование}</h4>
            </div>
            <div class="br"></div>
             <div class="item_area">
                <p>Площадь:</p>
                <div class="n-area">${item.Площадь}</div><span>м²</span>
            </div>
            <div class='house'>
            <div class="house_area">
                <p>Длина:</p>
                <div class="">${item.Длина}</div >
            </div >
            <div class="house_area"">
                <p>Ширина:</p>
                <div class="">${item.Ширина}</div>
            </div>
            </div>
            
            
            <div class="house_price">
                <p>Цена:</p>
            <div class="item_price">${item.Цена}</div><span>₽</span>
         </div>

        </div>
        </div>
            `


    })

}
getResponseFilter()