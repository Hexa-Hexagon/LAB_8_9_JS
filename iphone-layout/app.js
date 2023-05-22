document.addEventListener("DOMContentLoaded", () => {
    const tabs = () => {
        let detailChange = document.getElementById('change');
        let detailTitle = document.getElementById('name');
        let image = document.getElementById('image');
        let price = document.getElementById('price');
        let description = document.getElementById('description');
        const data = [{
                title: "Смартфон Apple iPhone 12 Pro 128GB Graphite",
                img: "img/iPhone-graphite.png",
                screen: "'Экран 6.1'/2532x1170 Пикс",
                tech: "Технология экрана OLED",
                processor: "Тип процессора A14 Bionic",
                memory: "Встроенная память (ROM) 128 ГБ",
                camera: "Основная камера МПикс 12/12/12/LiDAR",
                price: 9999
            },
            {
                title: "Смартфон Apple iPhone 13 Pro 128GB Silver",
                img: "img/iPhone-silver.png",
                screen: "'Экран 6.1'/2532x1170 Пикс",
                tech: "Технология экрана LSD",
                processor: "Тип процессора A14 Bionic",
                memory: "Встроенная память (ROM) 128 ГБ",
                camera: "Основная камера МПикс 12/12/12/LiDAR",
                price: 1599
            },
            {
                title: "Смартфон Apple iPhone 14 Pro 128GB Pacific Blue",
                img: "img/iPhone-blue.png",
                screen: "'Экран 6.1'/2532x1170 Пикс",
                tech: "Технология экрана Amalet",
                processor: "Тип процессора A14 Bionic",
                memory: "Встроенная память (ROM) 128 ГБ",
                camera: "Основная камера МПикс 12/12/12/LiDAR",
                price: 19999
            }
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
                price.children[0].textContent = data[i].price;
                description.children[0].textContent = data[i].screen;
                description.children[1].textContent = data[i].tech;
                description.children[2].textContent = data[i].processor;
                description.children[3].textContent = data[i].memory;
                description.children[4].textContent = data[i].camera;
            }
        }
    }
    const accordeon = () => {
        const characteristicsItemElem = document.querySelector(
            ".characteristics__item"
        );
        const characteristicsDescription = document.querySelector(
            ".characteristics__description"
        );
        const characteristicsListElem = document.querySelector(
            ".characteristics__list"
        );
        const open = (button, dropDown) => {
            if (window.getComputedStyle(dropDown, null).height == "1.6px") {
                dropDown.style.height = `${dropDown.style.scrollHeight-0}px`
            } else {
                dropDown.style.height = "1.6px";
            }
            button.classList.toggle("active");
            dropDown.classList.toggle("active");
        };
        characteristicsListElem.addEventListener("click", (event) => {
            const target = event.target;
            if (target.classList.contains("characteristics__title")) {
                const parent = target.closest(".characteristics__item");
                const description = parent.querySelector(
                    ".characteristics__description"
                );
                open(target, description);
            }
        });
    }
    tabs();
    accordeon();
});