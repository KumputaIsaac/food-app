import React from 'react'
import './recipe.css'

export default function Recipe({Label,Image,ingredient}) {

    return (
              <div class="card  mx-2 rounded-lg mt-2 border-danger">
                <div className="p-4">
                        <h1>{Label}</h1>
                        <div>
                            <img className='mx-auto' src={Image} alt='food'/>
                        </div>
                        
                            <ul className="list-unstyled mt-4">
                                {ingredient.map((x,i)=>
                                <li> { x.text }</li>
                                )}
                            </ul>
                </div>
             </div>
    )
}