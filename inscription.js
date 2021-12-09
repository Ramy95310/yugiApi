import React from 'react'

export default function form(){
return(
<>

<h1 className='title'></h1>Inscription<div/>


<form className='form-container'>
    <label htmlFor='nom'>Nom</label>
    <input type={"text"} id='nom'
    placeholder='Entrez votre nom'></input>

<label htmlFor='mdp'>mot de passe</label>
    <input type={"text"} id='mdp'
    placeholder='Entrez votre mdp'></input>
    
    <label htmlFor='confirmmdp'></label>
    <input type={"text"} id='confirmmdp'
    placeholder='confirmation mdp '></input>

    <button>Inscription</button>
</form>


</>
)

}