import { useState, useEffect } from 'react'
import Produits from './components/Produits'
import AddProduit from './components/AddProduit'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Navbar from './components/Navbar'
import EditProduit from './components/EditProduit'



const App = () => {

  
  const [produits, setProduits] = useState([])

  useEffect(()=> {
    const getProduits = async () => {
    const produitsFromServer = await fetchProduits()
    setProduits(produitsFromServer)
    }
    getProduits()
    }, [])

    const fetchProduits = async () => {
      const res = await fetch('http://localhost:5000/produits')
      const data = await res.json()
      
      return data

    }
     
  const deleteProduit = async (id) => {

    await fetch(`http://localhost:5000/produits/${id}`, {
      method: 'DELETE',
    })
    setProduits(produits.filter((produit) => produit.id !== id))

  }
  
  
  const addProduit = async (produit) => {
    
    const res = await fetch('http://localhost:5000/produits',{
      method: 'POST',
      headers: {
      'Content-type': 'application/json'
      },
      body: JSON.stringify(produit)
      })
      const newProduit = await res.json() 


    setProduits([...produits, newProduit])
    
  }
  
  const [produitAEditer, setProduitEdit] = useState([]);
  const [showEditProduit, setShowEditProduit]=useState(false)
  
  const fetchProduit = async (id) => {
    const res = await fetch(`http://localhost:5000/produits/${id}`)
    const data = await res.json()
   
    return data

    }


 const changeProduit = async (id) => {

    const produitEditer = await fetchProduit(id)
  
    const res = await fetch(`http://localhost:5000/produits/${id}`,{
      method: 'PUT',
      headers: {
      'Content-type': 'application/json'
      },
      body: JSON.stringify(produitEditer)
    })

    const data = await res.json() 

    setProduits(produits.map((produit) => produit.id === produitEditer.id ? 
    produit = data : produit)) ;

}

const [showAddProduit, setShowAddProduit]=useState(false)


    return (
      <BrowserRouter>
      
          <Navbar onAdd={() => setShowAddProduit(!showAddProduit)} showAdd={showAddProduit}/>
          
          {showAddProduit && <AddProduit title="Ajouter un produit" onAdd={addProduit}/>}

          <Routes>
            
            <Route path='/about' element={<About />}/>
            <Route path='/build' element={produits.length > 0 ?(<><Produits title="Liste de produits" produits={produits} onDelete={deleteProduit}  onEdit={fetchProduit}/>{showEditProduit && <EditProduit title="Modifier un produit" produit={produitAEditer}  onChange={changeProduit}/>}</>):(<div className="container"><h1>Aucun produit a afficher !</h1></div>)}/>
          </Routes>

        
        
      </BrowserRouter>
    )
}


export default App;
