import { useState } from 'react'


const AddProduit = ({onAdd, title}) => {

    
    const [nom, setNom] = useState('')
    const [description, setDescription] = useState('')
    const [categorie, setCategorie] = useState('')
    const [prix, setPrix] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
            if(!nom){
                alert('svp ajouter un produit')
            }

        onAdd({ nom, description, prix, categorie})
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
               
                <input type="submit" className="btn btn-primary" value="Ajouter" />
            </form>
        </div>
 )
}


export default AddProduit

   