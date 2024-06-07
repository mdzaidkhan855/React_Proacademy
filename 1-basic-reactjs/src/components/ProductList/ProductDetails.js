import React,{useState} from 'react';
import Button from "./Button"


function ProductDetails(props){
    let badgeClass = 'badge-margin-left-240 badge '
    badgeClass += props.isAvailable ?'bg-success':'bg-danger'

    let[productCount,updateCount] = useState(0);
    //let productCount = 0
    function displayproductCount(){
        //return productCount > 0 ? productCount : 'Zero'
        return productCount > 0 ? productCount : 'Zero'
    }

    let incrementproductCount = function(){
        //productCount++;
        //this.count++
        //alert(productCount)
        updateCount(++productCount)
    }
    let deccrementproductCount = function(){
        //productCount--;
        //this.count--;
        updateCount(--productCount)
    }
    return(
        <div  className="d-flex align-item-centre justify-content-start mt-1" >
            <h6 className="font-weight-bold my-2" style={{marginRight:30}}>${props.price}</h6>
            {/* 
                1. <Button children="222">-</Button>
                props.children will give "-" , not 222
                2. <Button children="222"></Button>
                 props.children will give 222
            */ } 
            <Button eventHandler={deccrementproductCount}>-</Button>
            <span style={{padding: "0px 20px",fontSize:30}}>{displayproductCount()}</span>
            <Button eventHandler={incrementproductCount}>+</Button>
            <span className={badgeClass}>{props.isAvailable?'Available' : 'Unavailable'}</span>
            
        </div>
    )

    // Just sample how we could have achieved same as JSX by writing
    // Javascript code that is react element
    // return React.createElement('div',{className:'d-flex align-item-centre       justify-content-start mt-1'},
    //     React.createElement('h6',{className:'font-weight-bold my-2'
    //                                 ,style:{marginRight:30}}
    //                        )
    // )
}

export default ProductDetails;