const links = [
    "https://belgiproles.by/wp-content/uploads/2021/11/les_nyu_0-640x450.jpg",
    "https://54.vtorproekt.com/upload/iblock/08d/w71mv8770qkmc3ep5dkfwhi257y5qy8r.jpg",
    "https://www.missoffice.org/upload/medialibrary/9be/9beae8048d9779e7f67e7bff98a1ae28.png",
    "https://courier.unesco.org/sites/default/files/styles/paragraph_medium_desktop/article/2023-06/COU-03-23-GA-INTRO-WEB-01.jpg?itok=RRe2KKur",
    "https://gribovka.com/wp-content/uploads/2023/05/gribovka-blacksea-13.jpg",
    "https://www.anywayanyday.com/blog/wp-content/uploads/2021/11/img_4720-1.jpg",
    "https://pochemychki.com.ua/wp-content/uploads/2024/11/1-1-27-1000x600.webp",
    "https://gribovka.com/wp-content/uploads/2023/05/gribovka-blacksea-36.jpg",
    "https://content.skyscnr.com/m/35ad5202340fe2e3/original/GettyImages-175864540.jpg?resize=1224%3Aauto",
    "https://azovsky.ru/uploads/images/articles/chmore09082018-04_big-n.jpg"
];

function addBlocks() {
    const container = document.querySelector("#images-block");
    container.innerHTML = "";
    links.forEach(src => {
        container.innerHTML += `
        <section class="block">
          <img src="${src}" alt="Фото">
        </section>
      `;
    });
}

addBlocks();