import "./container.styles.css"

import desktopImg from "../../assets/images/image-web-3-desktop.jpg"

import mobileImg from "../../assets/images/image-web-3-mobile.jpg"

import retroPC from "../../assets/images/image-retro-pcs.jpg"

import imageTopLaptop from "../../assets/images/image-top-laptops.jpg"

import controller from "../../assets/images/image-gaming-growth.jpg"



import NewItem from "../new-item/new-item.component"

import NewsItem from "../news-item/news-item.component"

const Container = () => {
  return (
    <main>
      <div className="container">
        <div className="main-section">
          <picture>
            <source media="(max-width:425px)" srcSet={mobileImg} />
            <img style={{ width: "100%" }} src={desktopImg} className="body-img" alt="web3 iamge" />
          </picture>

          <div className="content">
            <h1 className="content__heading">The Bright Future of Web 3.0?</h1>

            <div>
              <p className="content__paragraph">
                We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>

              <button className="content__btn">Read more</button>
            </div>
          </div>
        </div>

        <div className="new-section">
          <h2 className="new-section__heading">New</h2>

          <NewItem new_item_header="Hydrogen VS Electric Cars" new_item_paragraph="Will hydrogen-fueled cars ever catch up to EVs?" />
          <hr />
          <NewItem new_item_header="The Downsides of AI Artistry" new_item_paragraph="What are the possible adverse effects of on-demand AI image generation?" />
          <hr />
          <NewItem new_item_header="Is VC Funding Drying Up?" new_item_paragraph="Private funding by VC firms is down 50% YOY. We take a look at what that means." />
        </div>
      </div>
      <div className="news__section">
        <NewsItem 
          img={retroPC}
          alt="retro-pc"
          number_head="01"
          heading="Reviving Retro PCs"
          paragraph="What happens when old PCs are given modern upgrades?"
        />
        <NewsItem 
          img={imageTopLaptop}
          alt="laptop keyboard"
          number_head="02"
          heading="Top 10 Laptops of 2022"
          paragraph="Our best picks for various needs and budgets."
        />
        <NewsItem 
          img={controller}
          alt="game controller"
          number_head="03"
          heading="The Growth of Gaming"
          paragraph="How the pandemic has sparked fresh opportunities."
        />
      </div>
    </main>
  );
}

export default Container;