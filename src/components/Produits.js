import Produit from './Produit'



const Produits = ({ produits, onDelete, onEdit, title}) => {
    
    return (
        <>
            <div className="mt-5"> 
                <h3 className="text-center">{title}</h3>
                <hr />
                <div className="row">
                    
                    {produits.map((produit)=>(<Produit  key={produit.id} produit={produit} onDelete={onDelete} onEdit={onEdit}/>))}
                   
                </div>
                
            </div>
           
        </>
    )
}
export default Produits 