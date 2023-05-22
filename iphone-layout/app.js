document.addEventListener("DOMContentLoaded", () => {
    const tabs = () => {
        let detailChange = document.getElementById('change');
        let detailTitle = document.getElementById('name');
        let image = document.getElementById('image');
        let price = document.getElementById('price');
        let description = document.getElementById('description');
        const prices = ['99990₽', '100990₽', '91990₽']
        const descriptions = [
            [
                'Экран 6.1"/2532x1170 Пикс',
                'Технология экрана OLED',
                'Тип процессора A14 Bionic',
                'Встроенная память (ROM) 128 ГБ',
                'Основная камера МПикс 12/12/12/LiDAR'
            ],
            [

                'Экран 6.1"/2532x1170 Пикс',
                'Технология экрана OLED',
                'Тип процессора A16 Bionic',
                'Встроенная память (ROM) 256 ГБ',
                'Основная камера МПикс 12/12/12/LiDAR'
            ],
            [

                'Экран 6.1"/2532x1170 Пикс',
                'Технология экрана OLED',
                'Тип процессора A10 Bionic',
                'Встроенная память (ROM) 64 ГБ',
                'Основная камера МПикс 12/12/12/LiDAR'
            ]
        ];
        const hideAll = () => {
            for (let i = 0; i < detailChange.children.length; i++) {
                detailChange.children[i].children[0].classList.remove('active')
                image.children[i].classList.remove('active')
                detailTitle.children[i].classList.remove('active')
            }
        }
        for (let i = 0; i < detailChange.children.length; i++) {
            detailChange.children[i].children[0].onclick = () => {
                hideAll()
                detailChange.children[i].children[0].classList.add('active')
                image.children[i].classList.add('active')
                detailTitle.children[i].classList.add('active')
                price.children[0].textContent = prices[i];
                description.children[0].textContent = descriptions[i][0];
                description.children[1].textContent = descriptions[i][1];
                description.children[2].textContent = descriptions[i][2];
                description.children[3].textContent = descriptions[i][3];
                description.children[4].textContent = descriptions[i][4];
            }
        }
    }
    tabs()
});