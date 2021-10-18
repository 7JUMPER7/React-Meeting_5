import './Sight.css';

export default function Sight() {
    return(
        <div className="container">
            <div className="sight">
                <img src="https://baza.zruchno.com.ua/upload/b7c3dc6f-4e7c-40f2-af1a-5bf187f8f540_news_mainimg" alt="Лодочная станция"/>
                <h2>Лодочная станция</h2>
            </div>
            <div className="sight">
                <img src="https://ua.igotoworld.com/frontend/webcontent/websites/1/images/gallery/9481_800x600_15052390.jpg" alt="Цветочные часы"/>
                <h2>Цветочные часы</h2>
            </div>
            <div className="sight">
                <img src="https://www.rbc.ua/static/img/1/5/153932427114128827_1300x820.jpg" alt="Карьеры"/>
                <h2>Карьеры</h2>
            </div>
        </div>
    );
}