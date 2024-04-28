import image from "./about.jpg"
import prize1 from "./prize1.jpg";
import prize2 from "./prize2.jpg";
import prize3 from "./prize3.jpg";
import quote from "./join.jpg"
const About=()=>{
 return(
    <>
     <div className="about">
        <div className="about-img">
            <img src={image} alt="about-img" className="ig"></img>
        </div>
        <div className="story">
            <h1 id="head_st">Our Story</h1>
            <p className="par">
            One of the leading casual dining chains in India, Barbeque Nation pioneered the concept of “over the table barbeque” live grills embedded in dining tables – allowing guests to grill their own barbecue’s right at their tables. Barbeque Nation was founded in 2006 with the concept of 'all you can eat'. We currently own and operate around 200 outlets in India, 4 outlets in UAE, 1 outlet in Malaysia and 1 outlet in Oman.
            </p>
            <br/>
            <p className="par">Indian cuisine is a natural part of the diet in the markets in which the Barbeque Nation Restaurants operate. We continue to offer new menu options, both vegetarian and non-vegetarian, largely based on Indian cuisine and use seasonal customer preferences to introduce new dishes. We also run popular food festivals at our Barbeque Nation Restaurants, thereby offering our customers a range of Indian and international cuisines.</p>
            <br/>
            <p className="par">Our fixed price ‘all you can eat’ concept at our Barbeque Nation Restaurants offers our customers a varying spread of consistently delicious food at a value-oriented price in a pleasant and casual dining environment. We believe that barbeque cuisine is distinctively attractive as compared with other dining options due to its DIY and cooked-at-the-table nature and the flexibility and fun of mixing and matching a wide variety of meats, vegetables, sauces and condiments to create dishes according to each diner’s individual tastes and preferences. In addition, fixed price dining is very popular amongst relatively larger groups, due to customers’ perception of value for money and the comfort of certainty over the bill amount irrespective of varying individual appetites and consumption</p>
            <br/>
            <p className="par">Our Barbeque Nation Restaurants typically offer customers at least five vegetarian and five non-vegetarian largely pre-cooked appetisers they can season and barbeque on a grill embedded in their table, an all-you-can-eat main course buffet and a selection of desserts.</p>
            <br/>
            <p className="par">Our core values prioritise being customer-focused to provide excellent products and service and employee-focused by maintaining a superior quality work environment. Our Company was ranked 7th among best companies to work for in India across all categories by Economic Times “Great Places to Work” survey for 2022 conducted by Great Places to Work Institute. Our Company was the only company in the retail sector to be ranked amongst the top-10 and 13th among best large workplaces in Asia by Great places to Work Institute.</p>
            <br/>
        </div>
        <div className="awards">
            <p className="tite">AWARDS & RECOGINITION</p>
            <div className="recog">
             <div className="awabox">
                <div className="awaimg">
                    <img src={prize1} alt="prize" className="aww"/>
                </div>
                <div className="awadesc">
                  <div className="awaname">
                   <h2 className="award_name">Retailers association of India</h2>
                  </div>
                  <div className="awah">
                  <p>Barbeque &nbsp;Nation Hospitality limited is recognized as<br/> one of India's top 10 Best workplaces in Retail in the<br/> year 2019.&nbsp;</p>
                  </div>
                 </div>
             </div>
             <div className="awabox">
                <div className="awaimg">
                    <img src={prize2} alt="prize" className="aww"/>
                </div>
                <div className="awadesc">
                  <div className="awaname">
                   <h2 className="award_name">Eazydiner Foodie Award</h2>
                  </div>
                  <div className="awah">
                  <p>Barbeque Nation Hospitality limited is awarded as the<br/> best buffet in the town for the year 2019.&nbsp;</p>
                  <p>Location- Bangalore</p>
                  </div>
                 </div>
             </div>
             <div className="awabox">
                <div className="awaimg">
                    <img src={prize3} alt="prize" className="aww"/>
                </div>
                <div className="awadesc">
                  <div className="awaname">
                   <h2 className="award_name">ET Now- Rise with India</h2>
                  </div>
                  <div className="awah">
                  <p>Barbeque Nation Hospitality Limited is awarded as the <br/>most preferred restaurant and F &amp;B retailer in the year<br/> 2019.&nbsp;</p>
                  </div>
                 </div>
             </div>
            </div>
        </div>
        <div className="quote">
            <img src={quote} alt="quote" className="quote_img"/>
        </div>
     </div>
    </>
 )
}

export default About;