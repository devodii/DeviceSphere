
interface Prop {
    item: any
}
const Checkout = ({ item }: Prop) => {
    console.log(item);
    
  return (
    <div>
          Hello world
          {JSON.stringify(item)}
    </div>
  )
}

export default Checkout
