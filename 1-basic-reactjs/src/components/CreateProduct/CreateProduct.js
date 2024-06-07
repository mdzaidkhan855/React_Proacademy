import ProductForm from "./ProductForm"

function CreateProduct(){
    return(
        <div className="row">
            <div className="col-g-8 mx-auto" style={{backgroundColor:'white',padding:'10px 20px',margin:20}}>
                <ProductForm></ProductForm>
            </div>
        </div>
    )
}

export default CreateProduct