import React from "react";
import Slider from "react-slick";
import gsap from "gsap";
import Logo from "../svgComponents/logo";
// import { useNavigate } from 'react-router-dom';
import Styles from "./productsScreen.module.scss";
import Tart from "../../assets/tart.png";
import Cake from "../../assets/cake.png";
import Cupcake from "../../assets/cupcake.png";
import MiniTart from "../../assets/minitart.png";

function ProductsScreen() {
  // const navigate = useNavigate();
  const slider = React.useRef();
  const [cart, setCart] = React.useState([
    {
      img: Cake,
      index: 0,
      count: 0,
      type: "cake",
    },
    {
      img: Cupcake,
      index: 1,
      count: 0,
      type: "cupcake",
    },
    {
      img: Tart,
      index: 2,
      count: 0,
      type: "tart",
    },
    {
      img: MiniTart,
      index: 3,
      count: 0,
      type: "minitart",
    },
  ]);
  const [title, setTitle] = React.useState("Lemon Cake");
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => {
      if (index === 0) {
        setTitle("Lemon Cake");
      } else if (index === 1) {
        setTitle("Lemon Cupcake");
      } else if (index === 2) {
        setTitle("Lemon Tart");
      } else if (index === 3) {
        setTitle("Mini Lemon Tart");
      }

      setSelectedIndex(index);

      gsap.to("#productTitle", {
        opacity: 1,
        duration: 0.5,
      });
    },
    beforeChange: (next, current) => {
      if (current !== next) {
        const rotationProps = {
          rotate: `${current > next ? "-" : "+"}${
            window.innerWidth > 768 ? 180 : 50
          }`,
          duration: 0.6,
        };

        gsap.to(`#product${current}`, rotationProps);
        gsap.to(`#product${next}`, rotationProps);
        gsap.to("#productTitle", {
          opacity: 0,
          duration: 0.2,
        });
      }
    },
  };

  const navProps = (index) => ({
    className: `${Styles.navImage} ${
      selectedIndex === index ? Styles.selected : null
    }`,
    onClick: () => {
      slider.current.slickGoTo(index);
    },
  });

  function updateCart(index, add) {
    const updateIndex = cart.findIndex((cartItem) => cartItem.index === index);
    const updatedCart = [...cart];

    updatedCart[updateIndex].count += add ? 1 : -1;

    setCart([...updatedCart]);
  }

  return (
    <div className={Styles.mainScreen}>
      <Logo id="ProductsScreenLogo" styles={Styles.logo} />
      <div className={Styles.bgContainer}>
        <div className={Styles.bgContent}>
          <button
            className={`mx-2 mb-1 ${Styles.addButton}`}
            onClick={() => updateCart(selectedIndex, true)}
          >
            Add to bag
          </button>
          <h2 id="productTitle">{title}</h2>
          <div className="d-flex justify-content-center">
            <p>Price: </p>
            <p className={Styles.priceContainer}>
              {selectedIndex === 0 ? "2000 RS" : null}
              {selectedIndex === 1 ? "150 RS" : null}
              {selectedIndex === 2 ? "2000 RS" : null}
              {selectedIndex === 3 ? "100 RS" : null}
            </p>
          </div>
          <div className={Styles.cart}>
            <p className="m-0 px-2">Your Bag: </p>
            <div className="d-flex">
              {cart.map((item) =>
                item.count ? (
                  <div className={Styles.cartItem} key={item.index}>
                    <p className={Styles.count}>{item.count} x</p>
                    <img
                      className={Styles.cartImage}
                      src={item.img}
                      alt="cartItem"
                    />
                    <p
                      className={Styles.removeButton}
                      onClick={() => updateCart(item.index, false)}
                    >
                      -
                    </p>
                  </div>
                ) : null
              )}
            </div>
            {cart.findIndex((item) => item.count) > -1 ? (
              <button className={Styles.checkoutButton}>Checkout</button>
            ) : (
              <p className="m-0">Is Empty</p>
            )}
          </div>
        </div>
        <div className={Styles.navigationContainer}>
          <img {...navProps(0)} src={Cake} alt="lemon cake" />
          <img {...navProps(1)} src={Cupcake} alt="lemon cupcake" />
          <img {...navProps(2)} src={Tart} alt="tart" />
          <img {...navProps(3)} src={MiniTart} alt="tart" />
        </div>
      </div>
      <Slider {...settings} ref={slider}>
        <div className={Styles.section}>
          <img id="product0" src={Cake} alt="lemon cake" />
        </div>
        <div className={Styles.section}>
          <img id="product1" src={Cupcake} alt="lemon cupcake" />
        </div>
        <div className={Styles.section}>
          <img id="product2" src={Tart} alt="tart" />
        </div>
        <div className={Styles.section}>
          <img id="product3" src={MiniTart} alt="tart" />
        </div>
      </Slider>
    </div>
  );
}

export { ProductsScreen };
