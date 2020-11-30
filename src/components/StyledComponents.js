import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100vw;
  position: relative;
  max-width: 100%;
  height: 80px;
  overflow: hidden;
  background-color: #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > svg {
    font-size: 1.4rem;
    margin-left: 40px;
  }
`;

export const BgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 60px);
  background-image: url("https://www.unsplash.it/1400/600");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ShopNowWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 95%;
  width: 600px;
  height: 200px;
  background-color: #fff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
`;
export const ShowNowText = styled.h1`
  line-height: normal;
  color: #222;
`;

export const ShowNowButton = styled.button`
  border: none;
  outline: none;
  padding: 7px 12px;
  background-color: orange;
  color: #222;
  font-size: 1.3rem;
  cursor: pointer;
`;
export const ProductTitle = styled.h1`
  text-align: center;
  line-height: normal;
  font-size: 2.3rem;
`;

export const ProductContainer = styled.div`
  width: 1600px;
  max-width: 95%;
  position: relative;
  height: auto;
  margin: 30px auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  > a:not(:first-child) {
    text-decoration: none;
    color: #fff;
  }
`;

export const ProductWrapper = styled.div`
  position: relative;
  width: 350px;
  max-width: 95%;
  height: 250px;
  background-color: #b81566;
  margin: 20px;
  z-index: 1;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    > div {
      opacity: 1;
    }
  }
  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }
  > span {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 10px;
  }
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`;

export const CartButton = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 100px;
  height: 40px;
  background-color: orange;
  color: #222;
  cursor: pointer;
  display: flex;
  opacity: 0;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  z-index: 2;
`;

export const ShoppingBtn = styled.button`
  position: relative;
  border: none;
  outline: none;
  background-color: transparent;
  margin: 0 40px;
  cursor: pointer;
  svg {
    font-size: 1.4rem;
  }
`;

export const ShoppingSpan = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  border-radius: 50%;
  color: #fff;
  width: 15px;
  height: 15px;
  right: 0px;
  top: 0px;
  pointer-events: none;
`;

export const SidebarWrapper = styled.div`
  width: 400px;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding-top: 80px;
  top: 0;
  z-index: 2;
  right: 0;
  background-color: #f2f2f2;
  transform: ${(props) =>
    props.showSidebar ? "translateX(0)" : "translateX(100%)"};
  transition: all 0.4s ease-in-out;
`;

export const CloseBtn = styled.span`
  position: absolute;
  top: 30px;
  transform: translateY(-50%);
  left: 15px;
  font-size: 1.4rem;
  color: #333;
  cursor: pointer;
`;

export const ProductViewWrapper = styled.div`
  position: relative;
  width: 95%;
  height: 100px;
  box-shadow: 0px 0px 5px #ccc;
  overflow: hidden;
  margin: 10px 0;
  border-radius: 10px;
  display: flex;
  transition: all 0.2s ease;
  align-items: center;
  a {
    height: 100%;
  }
  img {
    cursor: pointer;
  }
  &:hover {
    box-shadow: 0px 0px 8px #ccc;
  }
`;

export const InfoWrapper = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 10px;
`;

export const ProductImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  object-position: center;
`;

export const ProductViewRemove = styled.span`
  position: absolute;
  top: 5px;
  right: 5px;
  color: #ccc;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    color: #555;
  }
`;

export const CounterWrapper = styled.div`
  position: absolute;
  right: 5px;
  bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  > svg {
    margin: 0 3px;
    cursor: pointer;
    color: #555;
    transition: all 0.2s ease;
    &:hover {
      color: orange;
    }
  }
  span {
    font-size: 1.1rem;
    color: #555;
  }
`;

export const DetailProduct = styled.div`
  width: 1600px;
  position: relative;
  max-width: 95%;
  margin: 150px auto 70px;
  height: auto;
  border: 1px solid #ccc;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const DetailInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

export const DetailDesc = styled.div`
  width: 98%;
  margin: 20px 0;
  text-align: justify;
`;

export const DetailProperty = styled.div`
  flex-grow: 1;
  margin-left: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 20px;
  h1,
  p {
    margin: 40px 0;
  }
  h1 {
    font-size: 4rem;
  }
  p {
    font-size: 1.2rem;
  }
`;

export const DetailImg = styled.img`
  flex-grow: 1;
  width: fit-content;
  object-fit: cover;
  height: 480px;
`;

export const RelatedProducts = styled.div`
  width: 1600px;
  position: relative;
  max-width: 95%;
  margin: 10px auto 20px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border: 1px solid #ccc;
  > a {
    text-decoration: none;
    color: #fff;
  }
`;
export const RelatedTitle = styled.h2`
  width: 1700px;
  position: relative;
  max-width: 95%;
  margin: 10px auto 20px;
  text-align: center;
`;

export const DiscountPrice = styled.span`
  color: #aaa;
  text-decoration: line-through;
`;

export const SeeMore = styled.span`
  position: absolute;
  right: 40px;
  top: -15px;
  font-size: 1.3rem;
  cursor: pointer;
  text-decoration: none;
`;

export const ShopWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  width: calc(100% - 300px);
  max-width: 100%;
  margin: 10px auto 10px auto;
  > a {
    text-decoration: none;
    color: #fff;
  }
`;

export const Wrapper = styled.div`
  width: 93%;
  height: auto;
  margin: 100px auto;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  @media (max-width: 680px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Filters = styled.div`
  width: 300px;
  height: auto;
  display: flex;
  margin: 30px;
  padding: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid #ccc;
  flex-direction: column;
  > span {
    width: 100%;
    padding: 10px 0;
    cursor: pointer;
    > button {
      cursor: pointer;
    }
  }
  > span:not(:last-child) {
    border-bottom: 1px solid #ccc;
  }
  > span:first-child,
  > span:last-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  > span:nth-child(3) {
    padding: 10px 0 0 0;
    border-bottom: none;
  }
  > ul:nth-child(4) {
    list-style: none;
    width: 80%;
    padding: 0 20px 10px 20px;
    border-bottom: 1px solid #ccc;
    li {
      cursor: pointer;
    }
  }
  > span:last-child {
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    > div {
      > input {
        outline: none;
        border: 1px solid #ccc;
        width: 60px;
        height: 25px;
        margin: 5px;
        padding: 0 3px;
        &::-webkit-inner-spin-button,
        &::-webkit-inner-spin-button {
          appearance: none;
        }
      }
    }
    > span {
      margin-right: 10px;
    }
  }
`;

