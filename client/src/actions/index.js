 //Random id generator
 const ID = () => {
    return "_" + Math.random().toString(36).substr(2, 9);
  };
  //ACTION GENERATORS
  //ADD_TO_CART
  export const addToCart = ({prodName ='',price=0,imgLink=''}={})=>{
    return{
      type:'ADD_TO_CART',
      item:{
        id:ID(),prodName,price,imgLink
      }
    }
  }

    //REMOVE FROM CART
    export const removeFromCart = (id)=>{
        return {
          type:'REMOVE_FROM_CART',
          id
        }
          }