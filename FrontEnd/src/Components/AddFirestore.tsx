import React, { ChangeEvent } from "react";
import firebase from "firebase/compat/app";


interface State {
   name: string;
   price: number | null,
}
const AddFirestore = () => {
   const [state, setState] = React.useState<State>({
      name: "",
      price: null 
   });

   const handleChange = (e: ChangeEvent<HTMLInputElement>, field: string) => {
      setState((prev) => ({ ...prev, [field]: e.target.value }));
    };
   const db = firebase.firestore();

   const handleAdd = (e: any) => {
        e.preventDefault();

        db.collection("AvailableProducts").add({
           name: state.name,
           price: state.price,
        }).then((docRef) => {
            const docId = docRef.id;
            console.log(docId)
        }).catch(err => {
            console.log(`Error ${err.message}`)
        })
    }
    let check;
    if (state.price = null) {
        check = 0 
    }
    
   return (
      <div>
         <h1>Add Product as an admin</h1>

         <form action="" onSubmit={handleAdd}>
            <input
               type="text"
               placeholder="Name of product"
                   name="name"
                   value={state.name}
               onChange={(e) => handleChange(e, "name")}
            />
            <input
               type="text"
               name="price"
               id="price"
               value={check}
               onChange={(e) => handleChange(e, "price")}
               placeholder="Enter a price"
               />
            <input type="file" />
            <button role="submit">Save product</button>
         </form>
      </div>
   );
};

export default AddFirestore;



//  allow read: if true
			// allow write: if false;