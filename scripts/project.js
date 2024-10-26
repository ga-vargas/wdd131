document.addEventListener('DOMContentLoaded', () => {
    const lastModifiedElement = document.getElementById('last-modified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = document.lastModified;
    }

    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalImage = document.getElementById('modal-image');
    const modalMap = document.getElementById('modal-map');

    function openModal(place) {
        let info;
        let imageUrl;
        let mapUrl;

        switch (place) {
            case 'Buenos Aires':
                info = 'The vibrant capital of Argentina, Buenos Aires, is known for its rich cultural heritage, historic neighborhoods, and lively tango music. From the colorful streets of La Boca to the bustling avenues of Palermo, this city offers an array of experiences. Visitors can explore landmarks like the Obelisco, the historic Teatro Colón, and the famous Plaza de Mayo. Buenos Aires is also a paradise for food lovers, featuring some of the best steakhouses and a lively café culture.';
                imageUrl = 'images/modal-caba.jpg';
                mapUrl = 'https://maps.google.com/maps?width=100%&height=100%&hl=en&q=buenos aires&t=&z=14&ie=UTF8&iwloc=B&output=embed';
                break;
            case 'Iguazú Falls':
                info = 'Located on the border between Argentina and Brazil, Iguazú Falls is one of the most stunning natural wonders of the world. With more than 270 individual waterfalls spanning nearly 3 kilometers, it offers breathtaking views, especially from the Garganta del Diablo (Devil\'s Throat) viewpoint. The surrounding Iguazú National Park is home to diverse wildlife, including jaguars, butterflies, and tropical birds, making it a must-see for nature enthusiasts.';
                imageUrl = 'images/modal-iguazu.jpg';
                mapUrl = 'https://maps.google.com/maps?width=100%&height=100%&hl=en&q=iguazu falls&t=&z=14&ie=UTF8&iwloc=B&output=embed';
                break;
            case 'Mendoza':
                info = 'Known as Argentina’s wine capital, Mendoza is famous for its Malbec wine and beautiful vineyard landscapes set against the Andes mountains. This region attracts wine lovers from all over the world, offering vineyard tours and tastings. Adventure seekers can also explore the nearby Andes for hiking, skiing, and river rafting. The city of Mendoza itself is lively, with tree-lined streets, bustling plazas, and a vibrant cultural scene.';
                imageUrl = 'images/modal-mendoza.jpg';
                mapUrl = 'https://maps.google.com/maps?width=100%&height=100%&hl=en&q=mendoza&t=&z=14&ie=UTF8&iwloc=B&output=embed';
                break;
            case 'Perito Moreno Glacier':
                info = 'Located in Los Glaciares National Park in Patagonia, the Perito Moreno Glacier is a massive ice formation spanning 30 kilometers in length. This glacier is one of the few in the world that is still advancing, offering spectacular views as large chunks of ice periodically break off into Lake Argentino. Visitors can enjoy boat tours, guided hikes, and scenic viewpoints to witness the grandeur of this natural wonder.';
                imageUrl = 'images/modal-perito-moreno-glacier.jpg';
                mapUrl = 'https://maps.google.com/maps?width=100%&height=100%&hl=en&q=perito moreno&t=&z=14&ie=UTF8&iwloc=B&output=embed';
                break;
            case 'Aconcagua Mountain':
                info = 'Standing at nearly 7,000 meters, Aconcagua is the tallest mountain in the Americas and a popular destination for climbers and trekkers. Located in the Andes mountain range near Mendoza, Aconcagua offers challenging expeditions for experienced mountaineers as well as day hikes for casual adventurers. The surrounding area is part of Aconcagua Provincial Park, where visitors can enjoy panoramic views of the Andes and unique high-altitude ecosystems.';
                imageUrl = 'images/modal-aconcagua.jpg';
                mapUrl = 'https://maps.google.com/maps?width=100%&height=100%&hl=en&q=aconcagua&t=&z=14&ie=UTF8&iwloc=B&output=embed';
                break;
            case 'Bariloche':
                info = 'Nestled in the Lake District of Patagonia, Bariloche is famous for its Swiss-like architecture, chocolate shops, and outdoor activities. During winter, it becomes a popular skiing destination, while in the summer, visitors can enjoy hiking, kayaking, and fishing in the surrounding lakes and mountains. Bariloche is also known for its beautiful landscapes and scenic routes, making it a photographer’s paradise.';
                imageUrl = 'images/modal-bariloche.jpg';
                mapUrl = 'https://maps.google.com/maps?width=100%&height=100%&hl=en&q=bariloche&t=&z=14&ie=UTF8&iwloc=B&output=embed';
                break;
            case 'Ushuaia':
                info = 'Ushuaia: Known as the “End of the World,” Ushuaia is the southernmost city in the world and a gateway to Antarctica. This port city in Tierra del Fuego offers unique adventures, from navigating the Beagle Channel to exploring Tierra del Fuego National Park. Visitors can also visit the End of the World Museum, ride the Train to the End of the World, or simply enjoy the dramatic landscapes that surround this one-of-a-kind destination.';
                imageUrl = 'images/modal-ushuaia.jpg';
                mapUrl = 'https://maps.google.com/maps?width=100%&height=100%&hl=en&q=Ushuaia&t=&z=14&ie=UTF8&iwloc=B&output=embed';
                break;
            case 'Cerro de los Siete Colores':
                info = 'The Hill of Seven Colors: Located in the picturesque town of Purmamarca, this mountain is famous for its vibrant layers of color, each representing different geological periods. The striking colors range from deep reds to greens and purples, making it a popular spot for photography. This unique landscape showcases the natural beauty and geological history of the Jujuy region in northern Argentina.';
                imageUrl = 'images/modal-siete-colores.jpg';
                mapUrl = 'https://maps.google.com/maps?width=100%&height=100%&hl=en&q=Cerro Siete Colores&t=&z=14&ie=UTF8&iwloc=B&output=embed';
                break;
            case 'Mount Fitz Roy':
                info = 'Located near the town of El Chaltén in Patagonia, Mount Fitz Roy is one of Argentina\'s most iconic peaks, known for its dramatic shape and challenging climbs. This granite peak attracts climbers and hikers from around the world, offering scenic trails with views of glaciers, lakes, and alpine meadows. Fitz Roy and the surrounding area are a paradise for outdoor enthusiasts and photographers alike.';
                imageUrl = 'images/modal-fitz-roy.jpg';
                mapUrl = 'https://maps.google.com/maps?width=100%&height=100%&hl=en&q=fitz roy&t=&z=14&ie=UTF8&iwloc=B&output=embed';
                break;
            default:
                info = 'Information not available.';
                imageUrl = '';
                mapUrl = '';
        }

        modalTitle.textContent = place;
        modalDescription.textContent = info;
        modalImage.src = imageUrl;
        modalMap.src = mapUrl;

        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    const regionElements = document.querySelectorAll('.explore-region');
    regionElements.forEach(regionElement => {
        const placeName = regionElement.querySelector('h3').textContent;
        regionElement.addEventListener('click', () => openModal(placeName));
    });

    document.querySelector('.close').addEventListener('click', closeModal);
});

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        window.location.href = 'submit.html';
    });
});

