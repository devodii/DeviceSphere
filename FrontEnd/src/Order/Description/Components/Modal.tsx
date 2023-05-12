import styled from "styled-components";
import { ModalType } from "../../..";
import { Button } from "../../../Components/wrapper";
import { Link } from "react-router-dom";


const Modal = ({closeModal}: ModalType) => (
    <Container>
        <div className="body">
            <strong>Congratulations!</strong>
            <div>
                { " " }
                <p>Your orders are currently in the processing stage</p>
                <span>We will contact you shortly to provide an update</span>
            </div>

            <footer>
                <Close onClick={ () => closeModal(false) }>
                    <Link to={ ".."}>Close</Link>
                </Close>
            </footer>
        </div>
    </Container>
);

const Container = styled.div`
   backdrop-filter: blur(15px);
   height: 100vh;
   width: 100%;
   position: fixed;
   inset: 0;
   display: flex;
   align-items: center;
   justify-content: center;

   div.body {
      background-color: #fff;
      width: min(100%, 500px);
      box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.1);
      min-height: 200px;
      display: flex;
      margin-inline: 10px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 20px;
      padding: 10px 20px;

      strong {
        font-size: 20px;
        
        @media (max-width: 768px) {
            font-size: 17px;
        }
      }

      div {
        display: flex;
        margin-top: 5px;
        flex-direction: column;
        gap: calc(var(--flex-gap) - 3px)
      }
      footer {
         width: 100%;
         display: flex;
         justify-content: flex-end;
         margin-top: 20px;
      }
   }
`;

const Close = styled(Button)`
    width: min(100%, 120px);
    text-transform: none;
    font-size: 16px;
    padding: 7px 10px;
`
export default Modal;
