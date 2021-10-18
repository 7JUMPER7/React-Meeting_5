import './Photos.css';

export default function Photos(props) {
    const links = [
        'https://ichef.bbci.co.uk/news/640/cpsprodpb/15B7B/production/_106555988_kryviy_rig_landscape.jpg',
        'https://ua.igotoworld.com/frontend/webcontent/images/tours/158038_800x600_3dH8UhZb-lA311.jpg',
        'https://www.mandria.ua/wp-content/uploads/2017/10/%D0%91%D0%BE%D1%80%D1%82-%D0%98%D0%BD%D0%93%D0%9E%D0%9A%D0%B0_%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B9-%D0%93%D0%BE%D1%80%D0%B8%D0%BD%D0%BE%D0%B2.jpg',
        'https://i.ytimg.com/vi/vmZcmcn2xE4/maxresdefault.jpg',
        'https://ujew.com.ua/assets/image-cache/43_full.76c0bed0.jpg'
    ]
    let buf = links;
    let text = 'Все фото';
    if(props.match.params.photosCount > 0 && props.match.params.photosCount < links.length) {
        let deleteCount = links.length - props.match.params.photosCount;
        buf.splice(links.length - deleteCount, deleteCount);
        text = props.match.params.photosCount + ' фото';
    }
    return(
        <div className="container">
            <h1>{text}</h1>
            {buf.map((link, index) => {
                return(
                    <img key={index} src={link} alt={index}></img>
                );
            })}
        </div>
    );
}