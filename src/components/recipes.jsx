import React,{ Component } from 'react'

export default class recipes extends Component{
    render() {
        return (
            <div>
            <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#">Recipe</a>
    </li>
    <li class="nav-item dropdown" style="display: none;">
      <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
        aria-expanded="false">Dropdown</a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
        <li>
          <hr class="dropdown-divider"/>
        </li>
        <li><a class="dropdown-item" href="#">Separated link</a></li>
      </ul>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">About</a>
    </li>
  </ul>
  {/*  <!-- nav---> */}
  <h4>Recipe</h4>
  {/*  <!<!-- carousel--> */}|
  <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="images/HD-Wallpaper-Food_ cropped.jpg" class="d-block w-100" alt="food"/>
      </div>
    </div>
  </div>
  {/*  <!-- carousel --> */}
  <div class="container">
      <div class="input-group mb-3">
        <input type="text" id="searchbar" class="form-control" placeholder="Search Recipe" aria-label="Search Recipe"
          aria-describedby="button-addon2"/>
        <button class="btn btn-outline-secondary" type="button" id="search">Search</button>
      </div>
        <div id="content" class="row row-cols-1 row-cols-md-4 g-4" style="height: 20%"></div>
  </div>
            </div>
        )
    }
}