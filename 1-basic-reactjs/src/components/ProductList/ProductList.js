import Products from "./Products"

const products = [
    {
        pID: 1,
        pName: 'Fresh Milk',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: true,
        image: 'images/fresh-milk.png',
        price: 14
    },
    {
        pID: 2, 
        pName: 'Cottage Cheese', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: false,
        image: "images/cottage-cheese.png",
        price: 10
    },
    {
        pID: 3, 
        pName: 'Brocoli', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: true,
        image: "images/brocoli.png",
        price: 15
    },
    {
        pID: 4, 
        pName: 'oranges', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: true,
        image: "images/oranges.png",
        price: 20
    },
    {
        pID: 5, 
        pName: 'Olive oil', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: false,
        image: "images/olive-oil.png",
        price: 14
    },
    {
        pID: 6, 
        pName: 'Olive oil Test', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: false,
        image: "images/olive-oil.png",
        price: 14
    }
  ]

function ProductList(props){

    return (<div className='row'>
              <div className='col-g-8 max-auto'>
                <ul className="list-group shadow">
                 <Products 
                  id={products[0].pID} 
                  name={products[0].pName} 
                  description={products[0].desc}
                  isAvailable={products[0].isAvailable} 
                  imageUrl={products[0].image}
                  price={products[0].price}
                  />
                  <Products 
                  id={products[1].pID} 
                  name={products[1].pName} 
                  description={products[1].desc}
                  isAvailable={products[1].isAvailable} 
                  imageUrl={products[1].image}
                  price={products[1].price}
                  />
                  </ul>
              </div>
            
           </div>
        )
}

export default ProductList;