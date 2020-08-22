import React from "react";
import "../App.css";
import "../main.css";

export default function Photos() {
  return (
    <React.Fragment>
      <section id="photography">
        <img
          className="titleImg"
          src="https://fontmeme.com/permalink/200730/8ff684abb98311c732d57972f99973f5.png"
          alt="calligraphy-fonts"
          border="0"
          style={{ width: "30%" }}
        />

        <p style={{ textShadow: "2px 2px #000" }}>
          Check out my{" "}
          <a
            style={{ textShadow: "0px 0px #000" }}
            href="https://www.instagram.com/joshuadaltonphotography/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            instagram
          </a>{" "}
          for more highlights!
        </p>

        <grid>
          <img
            src="https://instagram.fchc2-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/117333724_164802421798999_3470414266787185202_n.jpg?_nc_ht=instagram.fchc2-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=-47_TE063BoAX-9tGwK&oh=d5da0fcde6242ba19d2c008d75b4d458&oe=5F68FE5C"
            alt="gridPic"
          ></img>

          <img
            src="https://instagram.fchc2-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/109815656_307075417342014_1483191318302649783_n.jpg?_nc_ht=instagram.fchc2-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=Xbbzrk5o8gkAX-t5ykZ&oh=69aa864cd379ce6a3812e05aca4a13bb&oe=5F67D0E6"
            alt="gridPic"
          ></img>

          <img
            src="https://instagram.fchc2-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/117509605_808341759935601_8335457840392712217_n.jpg?_nc_ht=instagram.fchc2-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=2pc4mC3Grp4AX9IQFcl&oh=9a53cabc8d498a2a675f5093319e00b3&oe=5F6A29E6"
            alt="gridPic"
          ></img>
          <img
            src="https://instagram.fchc2-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/116409753_104841284660528_5263877339467570526_n.jpg?_nc_ht=instagram.fchc2-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=FG9zCv3kWn4AX8-UP1d&oh=c9860e5f1e025953bb4f3c506b7f7fda&oe=5F689410"
            alt="gridPic"
          ></img>

          <img
            src="https://instagram.fchc2-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/116142194_301154874466604_5111491770920921665_n.jpg?_nc_ht=instagram.fchc2-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=hK_-UAYKtYgAX-bm9iL&oh=744e32b28027c36409e1cc05426eff77&oe=5F697C90"
            alt="gridPic"
          ></img>

          <img
            src="https://instagram.fchc2-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/116989813_139730717790781_3852198361426046407_n.jpg?_nc_ht=instagram.fchc2-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=myBvo9U1rZAAX8Oad6Q&oh=bb27fb025656a86a114303552b27d60c&oe=5F682509"
            alt="gridPic"
          ></img>
        </grid>
      </section>
    </React.Fragment>
  );
}
