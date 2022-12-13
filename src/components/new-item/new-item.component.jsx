import './new-item.styles.css'

const NewItem = (props) => {
  return ( 
    <section className="new-item_section">
      <a href='headline' className="new-item__header">{props.new_item_header}</a>
      <p className="new-item__paragraph">{props.new_item_paragraph}</p>
    </section>
   );
}
 
export default NewItem;