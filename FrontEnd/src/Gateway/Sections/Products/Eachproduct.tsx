import { useId } from "react";
import styled from "styled-components";
import { Product } from "../../..";
import { Button } from "../../Components/wrapper";
interface Props {
   product: Product;
}

const EachProduct = ({ product }: Props) => {
   const id: string = useId();
   const { discounted_as_percent, price, title, ImgUrl } = product;

   return (
      <Container key={id}>
         <div className="sale__flag">
            <span>Sale!</span>
         </div>
         <figure>
            <img src={ImgUrl} alt={title} />
            <figcaption>{title}</figcaption>
         </figure>

         <div className="price__container">
            <span>{`-${discounted_as_percent}%`}</span>
            <p>{price}</p>
         </div>

         <Button style={{ padding: "10px", width: "150px", fontSize: "13px" }}>
            Claim yours
         </Button>
      </Container>
   );
};

const Container = styled.div`
   width: 100%;
   transition: all 0.25s;
   border-radius: var(--border-radius-btn);
   display: flex;
   flex-direction: column;
   gap: calc(var(--flex-gap) * 2);
   padding: 10px 15px;

   div.sale__flag {
      background-color: var(--weak-orange);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: auto;
      z-index: 4;
      border-radius: 50%;
      height: 45px;
      width: 48px;

      span {
         color: var(--dark-blue);
         font-weight: 600;
      }
   }

   figure {
      width: 100%;
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      img {
         height: 100%;
         transition: all 300ms;
         &:hover {
            transform: translateX(-20px);
         }
      }
      figcaption {
         font-size: 22px;
         font-weight: 600;
         margin-top: 5px;
         line-height: 1.2;
      }
   }
   div.price__container {
      display: flex;
      gap: (var(--flex-gap) * 2);
      align-items: center;
      margin-top: 20px;

      span {
         font-size: 16px;
         color: #8c8585;
      }
      p {
         color: var(--primary-pink);
         text-decoration: underline;
         font-size: 20px;
         font-weight: 600;
         font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
         letter-spacing: 1px;
         cursor: pointer;
         margin-left: 10px;
         &:before {
            content: "₦";
            font-size: 16px;
         }
      }
   }

   &:hover {
      border: 1px solid var(--primary-pink);

      img {
         transform: translateX(-40px);
      }
   }
`;

export default EachProduct;