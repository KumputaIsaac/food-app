import React from 'react'
import './cardilist.css'

export default function Cardlist() {
    return (
        <div class="container">
            <h1 class="display-3 text-center">Hello World</h1>
            <h3>
                Fancy display heading  
                <small class="text-muted">  With faded secondary text</small>
            </h3>
            <p class="lead">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis</p>
            <blockquote class="blockquote">
                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            </blockquote>
            <p><u>et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed,</u></p>
            <p><mark>Pellentesque habitant morbi tristique senectus et netus </mark> commodo vitae, <p><abbr title="this one self day">ornare sit amet, wisi. Aenean fermentum, elit eget </abbr> </p>tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
            <ul className="list-unstyled">
                <li>Adeola</li>
                <li>Adewunmi</li>
                <li>Adedapo</li>
            </ul>
            <ul className="list-inline">
                    <li className="list-inline-item text-capitalize">Ayo</li>
                    <li className="list-inline-item text-uppercase">Bros J</li>
                    <li className="list-inline-item text-lowercase">Ife</li>
                    <li className="list-inline-item">Ifeoma</li>
            </ul>
            <hr/>
            <p className="bg-primary">HELLO WORD</p>
            <p className="bg-success">HELLO WORD</p>
            <p className="bg-warning">HELLO WORD</p>
            <p className="text-danger">HELLO WORD</p>
            <p className="text-secondary">HELLO WORD</p>
            <div className="container">
                <button className="btn btn-danger">Default</button>
                <button className="btn btn-primary m-4">Default</button>
                <button className="btn btn-info">Default</button>
                <button className="btn btn-dark m-4">Default</button>
                <a class="btn btn-primary" href="#" role="button">Link</a>
                <button className="btn btn-outline-danger m-4"> Danger </button>
                <hr/>
                <button className="btn btn-danger btn-lg">Large</button>
                <button className="btn btn-success btn-sm m-4" disabled>Large</button>
                <button className="btn btn-danger btn-xl">Extra Large</button>
                <button className="btn btn-danger btn-xs">Extra-Small</button>
            </div>
            <hr/>
            <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false">
                Single toggle
            </button>
            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-secondary active">
                    <input type="radio" name="options" id="option1"/> Active
                </label>
                <label class="btn btn-secondary">
                    <input type="radio" name="options" id="option2"/> Radio
                </label>
                <label class="btn btn-secondary">
                    <input type="radio" name="options" id="option3"/> Radio
                </label>
            </div>
            <div class="container mt-5">
            <form>
                <h2>Contact Us</h2>
                <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                    <label for="first">First Name</label>
                    <input type="text" class="form-control" placeholder="" id="first"/>
                    </div>
                </div>
                

                <div class="col-md-6">
                    <div class="form-group">
                    <label for="last">Last Name</label>
                    <input type="text" class="form-control" placeholder="" id="last"/>
                    </div>
                </div>
                
                </div>


                <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                    <label for="company">Company</label>
                    <input type="text" class="form-control" placeholder="" id="company"/>
                    </div>


                </div>
                

                <div class="col-md-6">

                    <div class="form-group">
                    <label for="phone">Phone Number</label>
                    <input type="tel" class="form-control" id="phone" placeholder="phone"/>
                    </div>
                </div>
                  
                </div>
               


                <div class="row">
                <div class="col-md-6">

                    <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" id="email" placeholder="email"/>
                    </div>
                </div>
                

                <div class="col-md-6">
                    <div class="form-group">
                    <label for="url">Your Website <small>Please include http://</small></label>
                    <input type="url" class="form-control" id="url" placeholder="url"/>
                    </div>

                </div>
                
                </div>
               


                <label for="contact-preference">When is the best time of day to reach you?</label>
                <div class="radio">
                <label>
                    <input type="radio" name="contact-preference" id="contact-preference" value="am" checked/>Morning
                </label>
                </div>
                <div class="radio">
                <label>
                    <input type="radio" name="contact-preference" id="contact-preference" value="pm" checked/>Evening
                </label>
                </div>

                <label for="newsletter">Would you like to recieve our email newsletter?</label>
                <div class="checkbox">

                <label>
                    <input type="checkbox" value="Sure!" id="newsletter"/> Sure!
                </label>
                </div>


                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

            </div>
            <div class="btn-group mt-4">
                <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Action
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Separated link</a>
                </div>
            </div>
            <div class="btn-group dropright">
                <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropright
                </button>
                <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Separated link</a>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-sm-4">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                </div>
            </div>
            <hr/>
            
            
            
            <div style={{height:50}}></div>
        </div>
    )
}
