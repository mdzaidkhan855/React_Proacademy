import { useState } from "react"

function ProductForm(props){

    // document.getElementById('name').addEventListener('change', function(event){
    //     alert(event.target.value);
    // })

    // Either use multiple state for each element 
    let[pName, updateName] = useState('');
    let[pPrice, updatePrice] = useState('');
    let[pDescription, updateDescription] = useState('');
    let[pAvailable, updateAvailability] = useState('');
    let[pImageUrl, updateImageUrl] = useState('');

    // OR use Single state approach
    // let [userInput, updateuserInput] = useState({
    //     pName:'',
    //     pPrice:'',
    //     pDescription:'',
    //     pAvailable:'',
    //     pImageUrl:''
    // })

    function nameInputHandler(event){
        //  Multiple state approach
        updateName(event.target.value)

        // Single State approch
            // Approach 1 : But react might refer snapshot so not latest state
        //updateuserInput({...userInput ,pName:event.target.value})
            // Approach 2 : Better approach to avoid any old sbapshot
        // updateuserInput((previousState)=>{
        //     return {...previousState, pName:event.target.value}
        // })
    }

    function priceInputHandler(event){
        //  Multiple state approach
        updatePrice(event.target.value)

        //updateuserInput({...userInput ,pPrice:event.target.value})
    }

    function descriptionInputHandler(event){
        //  Multiple state approach
        updateDescription(event.target.value)
        
        
        //updateuserInput({...userInput ,pDescription:event.target.value})
    }

    function availabilityInputHandler(event){
        //  Multiple state approach
        updateAvailability(event.target.checked)


        //updateuserInput({...userInput ,pAvailable:event.target.value})
    }

    function imageInputHandler(event){
        //  Multiple state approach
        updateImageUrl(event.target.value)


        //updateuserInput({...userInput ,pImageUrl:event.target.value})
    }
    function createProductEventHandler(event){
        event.preventDefault()

        let product = {
            pName: pName, 
            desc: pDescription,
            isAvailable: Boolean(pAvailable),
            image: pImageUrl,
            price: Number(pPrice)
        }

        updateName('');
        updatePrice('');
        updateDescription('')
        updateAvailability(false);
        updateImageUrl('')
        

        props.createProduct(product)
        props.onCancel();
    }
    return(
        <form className="row g-3" onSubmit={createProductEventHandler}>
        <div className="col-md-6">
            <label for="name">Product Name</label>
            <input type="text" 
                    className="form-control" 
                    id="name" 
                    placeholder="Product Name"
                    value={pName}
                    onChange={nameInputHandler}
                     />
        </div>
        <div className="col-md-6">
            <label for="price">Product Price</label>
            <input type="number" 
                    min="0.01" step="0.01" 
                    className="form-control" 
                    id="price" 
                    placeholder="Product Price"
                    value={pPrice}
                    onChange={priceInputHandler}
                     />
        </div>

        <div className="form-group">
            <label for="description">Product Description</label>
            <input type="text" 
                    className="form-control" 
                    id="description" 
                    placeholder="Product Description"
                    value={pDescription}
                    onChange={descriptionInputHandler}

                    />
        </div>
        <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="isAvailable"
            checked={pAvailable}
            onChange={availabilityInputHandler}
            />
            <label class="form-check-label" for="isAvailable">Is product available in stock?</label>
        </div>

        <div className="form-group">
            <label for="select-image">Select product image</label>
            <input type="file" className="form-control" id="select-image"
            value={pImageUrl}
            onChange={imageInputHandler}
             />
        </div>
        

        <button type="submit" className="btn btn-primary">Add Product</button>
        <button type="button" onClick={props.onCancel}>Cancel</button>
    </form>
    )
}
export default ProductForm