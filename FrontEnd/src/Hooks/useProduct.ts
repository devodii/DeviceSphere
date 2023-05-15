import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../Firebase";
import { Product } from "..";

interface useProductReturn {
   item: Product[] | null | any;
   loading: boolean;
   error: any;
}
const useProduct = (): useProductReturn => {
   const [item, setItem] = useState<Product[] | null | any>(null);
   const [loading, setLoading] = useState<boolean>(false);
   const [error, setError] = useState<any>(null);
   useEffect((): any => {
      setLoading(true);

      (async () => {
         try {
            const querySnapshot = await getDocs(
               collection(db, "AvailableProducts")
            );
            const documents = querySnapshot.docs.map((doc) => doc.data());
            setItem(documents);
         } catch (error) {
            setError(error);
            console.error("Error retrieving data:", error);
         } finally {
            setLoading(false);
         }
      })();
   }, []);
   console.log(item);
   return { item, loading, error };
};

export default useProduct;
