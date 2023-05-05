export interface Testifier {
   name: string;
   ImgUrl: string;
   position?: string;
   testimony: string;
   tweetUrl: string;
   verified?: boolean;
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
   price: number;
   discounted_as_percent: number;
   title: string;
}

export interface Benefits {
   title: string
}