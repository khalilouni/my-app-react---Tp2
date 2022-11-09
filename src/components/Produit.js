import Button from './Button'


const Produit = ({ produit, onDelete, onEdit, showEdit }) => {
        return (
                <>
                        <div className="col ">
                                
                                        
                                <div className="card p-3 mb-2 bg-dark text-white">
                                        <div className="card-body">
                                                <h5 className="card-title">{produit.nom}</h5>
                                                <h6 className="card-subtitle mb-2 text-muted">{produit.prix} $</h6>
                                                <hr />
                                                <h6 className="card-subtitle mb-2 text-muted">Description</h6>
                                                <p className="card-text">{produit.description}</p>
                                                <hr />
                                                <h6 className="card-subtitle mb-2 text-muted">Categorie</h6>
                                                <p className="card-text">{produit.categorie}</p>
                                                <Button color="red" text="supprimer" onClick={() => onDelete(produit.id)}/>
                                                <Button color={showEdit ? 'red' : 'green'} text={showEdit ? 'Close' : 'Modifier'} onClick={() => onEdit(produit.id)}/>
                                                
                                        </div>
                                </div>
                        </div>
              
                </>
        )
}
export default Produit
