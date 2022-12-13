import "./container.styles.css"

import desktopImg from "../../assets/images/image-web-3-desktop.jpg"

import mobileImg from "../../assets/images/image-web-3-mobile.jpg"

import NewItem from "../new-item/new-item.component"
const Container = () => {
  return (
    <main className="container">
      <div className="main-section">
        <picture>
          <source media="(max-width:425px)" srcset={mobileImg} />
          <img style={{ width: "100%" }} src={desktopImg} className="body-img" alt="web3 iamge" />
        </picture>

        <div>
          <h1 className="heading">The Bright Future of Web 3.0?</h1>

          <div>
            <p>
              We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
              But is it really fulfilling its promise?
            </p>

            <button className="btn">Read more</button>
          </div>
        </div>
      </div>

      <div className="new-section">
        <h2 className="new-sectin__heading">New</h2>

        <NewItem new_item_header="Hydrogen VS Electric Cars" new_item_paragraph="Will hydrogen-fueled cars ever catch up to EVs?" />
        <hr />
        <NewItem new_item_header="The Downsides of AI Artistry" new_item_paragraph="What are the possible adverse effects of on-demand AI image generation?" />
        <hr />
        <NewItem new_item_header="Is VC Funding Drying Up?" new_item_paragraph="Private funding by VC firms is down 50% YOY. We take a look at what that means." />
      </div>


    </main>
  );
}

export default Container;