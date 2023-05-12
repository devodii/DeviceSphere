import { Product } from "..";

export async function getProducts(url: string): Promise<Product[]> {
   const response = await fetch(url, {
      headers: { "Content-Type": "application/json" },
   });
   if (!response.ok) {
      throw {
         message: "Failed to get products",
         statusText: response.statusText,
         status: response.status,
      };
   }
   const data = await response.json();
   return data;
}

// export function loader() {
//    return getProducts("http://localhost:3005/vans");
// }
