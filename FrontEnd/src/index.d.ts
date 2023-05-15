
export interface Testifier {
   name: string;
   ImgUrl: string;
   position?: string;
   testimony: string;
   tweetUrl: string;
   verified?: boolean;
}

export interface ModalType {
   closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

type Check = string | boolean | number;
export interface Faq {
   question: Check;
   answer: Check;
   precision?: string;
   url?: string;
   id: number;
   state: boolean;
}

export interface Product {
   ImgUrl: string;
   productId: any,
   price: number;
   title: string,
   normalPrice: number
}

export interface Benefits {
   title: string
}

export type FormValues = {
   FirstName: string,
   LastName: string,
   Tel: number,
   email: string,

}