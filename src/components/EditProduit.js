import { useState } from 'react'


const EditProduit = ({onChange, title, produit}) => {

    //console.log(produit[0].nom);
    const [id, setId] = useState(produit[0].id)
    const [nom, setNom] = useState(produit[0].nom)
    const [description, setDescription] = useState(produit[0].description)
    const [categorie, setCategorie] = useState(produit[0].categorie)
    const [prix, setPrix] = useState(produit[0].prix)

    const onSubmit = (e) => {
        e.preventDefault()
            if(!nom){
                alert('svp ajouter un produit')
            }
        onChange({ nom, description, prix, categorie, id})
        setId('')
        setNom('')
        setDescription('')
        setCategorie('')
        setPrix('')

    }

    return (
        <div className="container">
           
            <h3>{title}</h3>
            <form className='add-form mt-5' onSubmit={onSubmit}>
                <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} className="form-control" placeholder="Nom du produit"/>
                
         
                    <input type="text"  value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" placeholder="Description"/>
            
                
                    <input type="number" value={prix} onChange={(e) => setPrix(e.target.value)} className="form-control" placeholder="Prix"/>
            
                
                    <input type="text" value={categorie} onChange={(e) => setCategorie(e.target.value)} className="form-control" placeholder="Categorie"/>
                <input type="submit" className="btn btn-primary" value="Modifier le produit" />
            </form>
        </div>
 )
}


export default EditProduit

   