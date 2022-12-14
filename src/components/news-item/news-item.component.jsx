import "./news-item.styles.css"

const NewsItem = (props) => {
  return (
    <div className="news">
      <img className="news__img" src={props.img} alt={props.alt} />

      <div className="news__description">
        <h2 className="news__number-heading">{props.number_head}</h2>
        <a href="#" className="news__heading">{props.heading}</a>
        <p className="news__paragraph">{props.paragraph}</p>
      </div>
    </div>
  );
}

export default NewsItem;