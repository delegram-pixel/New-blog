
import './App.css';
import React from 'react';
import Navbar from './components/navbar';





function App() {
  return (
    
    <div className="App">
      <Navbar/>
    
{/*search bar*/}
<div className="search-bar" data-search-bar>
      <div className="input-wrapper">
        <input type="search" name="search" placeholder="Search" className="input-field" />

        <button className="search-close-btn" aria-label="close search bar" data-search-toggler>
          <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
        </button>
      </div>

      <p className="search-bar-text">Search keywords</p>
    </div>

    <div className="overlay" data-overlay data-search-toggler></div>



{/* HERO*/}
    <main>
    <article>

    

      <section class="section hero" aria-label="home">
        <div class="container">

          <h1 class="h1 hero-title">
            <strong class="strong">we’re Iventverse•</strong> See our thoughts on, Events stories and ideas.
          </h1>
        </div>
      </section>


{/* FEATURED POST*/}
      <section className="section featured" aria-label="featured post">
      <div className="container">

        <p className="section-subtitle">
          Get started with our <strong className="strong">Best all event stories</strong>
        </p>

        <ul className="has-scrollbar">

          <li className="scrollbar-item">
            <div className="blog-card">

              <figure className="card-banner img-holder" style={{ '--width': 500, '--height': 600 }}>
                <img
                  src="./images/featured-1.jpg"
                  width="500"
                  height="600"
                  loading="lazy"
                  alt="New technology is not good or evil in and of itself"
                  className="img-cover"
                />

                <ul className="avatar-list absolute">

                  <li className="avatar-item">
                    <a href="#" className="avatar img-holder" style={{ '--width': 100, '--height': 100 }}>
                      <img
                        src="./images/author-1.jpg"
                        width="100"
                        height="100"
                        loading="lazy"
                        alt="Author"
                        className="img-cover"
                      />
                    </a>
                  </li>

                  <li className="avatar-item">
                    <a href="#" className="avatar img-holder" style={{ '--width': 100, '--height': 100 }}>
                      <img
                        src="./images/author-2.jpg"
                        width="100"
                        height="100"
                        loading="lazy"
                        alt="Author"
                        className="img-cover"
                      />
                    </a>
                  </li>
                </ul>
              </figure>
              
<div className='card-content'>
  <ul className='card-meta-list'>
  <li>
                      <a href="#" class="card-tag">Design</a>
                    </li>

                    <li>
                      <a href="#" class="card-tag">Idea</a>
                    </li>

                    <li>
                      <a href="#" class="card-tag">Review</a>
                    </li>   
                    
  </ul>

  <h3 class="h4">
                    <a href="#" class="card-title hover:underline font-bold">
                      Dealing with bad weather at the outdoor events
                    </a>
                  </h3>

                  <p class="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magnam eligendi doloribus laudantium quis asperiores ipsum vitae temporibus sed quia debitis deserunt ex commodi ipsa, beatae illum, vel sequi? Quo?
                  </p>
    </div>


            </div>
  
            
          </li>
{/**next card */}
<li class="scrollbar-item">
              <div class="blog-card">

              <figure className="card-banner img-holder" style={{ '--width': 500, '--height': 600 }}>
      <img
        src="./images/images (4).png"
        width="500"
        height="600"
        loading="lazy"
        alt="New technology is not good or evil in and of itself"
        className="img-cover"
      />

      <ul className="avatar-list absolute">
        <li className="avatar-item">
          <a href="#" className="avatar img-holder" style={{ '--width': 100, '--height': 100 }}>
            <img
              src="./images/author-1.jpg"
              width="100"
              height="100"
              loading="lazy"
              alt="Author"
              className="img-cover"
            />
          </a>
        </li>

        <li className="avatar-item">
          <a href="#" className="avatar img-holder" style={{ '--width': 100, '--height': 100 }}>
            <img
              src="./images/author-2.jpg"
              width="100"
              height="100"
              loading="lazy"
              alt="Author"
              className="img-cover"
            />
          </a>
        </li>
      </ul>
    </figure>
                <div class="card-content">

                  <ul class="card-meta-list">

                    <li>
                      <a href="#" class="card-tag">Design</a>
                    </li>

                    <li>
                      <a href="#" class="card-tag">Idea</a>
                    </li>

                    <li>
                      <a href="#" class="card-tag">Review</a>
                    </li>

                  </ul>

                  <h3 class="h4">
                    <a href="#" class="card-title hover:underline font-bold">
                      Dealing with bad weather at the outdoor events
                    </a>
                  </h3>

                  <p class="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magnam eligendi doloribus laudantium quis asperiores ipsum vitae temporibus sed quia debitis deserunt ex commodi ipsa, beatae illum, vel sequi? Quo?
                  </p>

                </div>

              </div>
            </li>

{/**third */}
            <li class="scrollbar-item">
              <div class="blog-card">
              <figure className="card-banner img-holder" style={{ '--width': 500, '--height': 600 }}>
      <img
        src="./images/images (4).png"
        width="500"
        height="600"
        loading="lazy"
        alt="New technology is not good or evil in and of itself"
        className="img-cover"
      />

      <ul className="avatar-list absolute">
        <li className="avatar-item">
          <a href="#" className="avatar img-holder" style={{ '--width': 100, '--height': 100 }}>
            <img
              src="./images/author-1.jpg"
              width="100"
              height="100"
              loading="lazy"
              alt="Author"
              className="img-cover"
            />
          </a>
        </li>

        <li className="avatar-item">
          <a href="#" className="avatar img-holder" style={{ '--width': 100, '--height': 100 }}>
            <img
              src="./images/author-2.jpg"
              width="100"
              height="100"
              loading="lazy"
              alt="Author"
              className="img-cover"
            />
          </a>
        </li>
      </ul>
    </figure>

    <div class="card-content">

<ul class="card-meta-list">

  <li>
    <a href="#" class="card-tag">Design</a>
  </li>

  <li>
    <a href="#" class="card-tag">Idea</a>
  </li>

  <li>
    <a href="#" class="card-tag">Review</a>
  </li>

</ul>

<h3 class="h4">
  <a href="#" class="card-title hover:underline font-bold">
      How to choose a venue for wedding reception?
  </a>
</h3>

<p class="card-text">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, dicta? Necessitatibus iste velit atque similique, nulla ex rem dolorum sed fugit ut eos cupiditate ullam maiores eum, pariatur culpa? Dolor.
</p>

</div>

</div>
</li>

<li class="scrollbar-item">
              <div class="blog-card">
              <figure className="card-banner img-holder" style={{ '--width': 500, '--height': 600 }}>
      <img
        src="./images/images (4).png"
        width="500"
        height="600"
        loading="lazy"
        alt="New technology is not good or evil in and of itself"
        className="img-cover"
      />

      <ul className="avatar-list absolute">
        <li className="avatar-item">
          <a href="#" className="avatar img-holder" style={{ '--width': 100, '--height': 100 }}>
            <img
              src="./images/author-1.jpg"
              width="100"
              height="100"
              loading="lazy"
              alt="Author"
              className="img-cover"
            />
          </a>
        </li>

        <li className="avatar-item">
          <a href="#" className="avatar img-holder" style={{ '--width': 100, '--height': 100 }}>
            <img
              src="./images/author-2.jpg"
              width="100"
              height="100"
              loading="lazy"
              alt="Author"
              className="img-cover"
            />
          </a>
        </li>
      </ul>
    </figure>

                <div class="card-content">

                  <ul class="card-meta-list">

                    <li>
                      <a href="#" class="card-tag">Design</a>
                    </li>

                    <li>
                      <a href="#" class="card-tag">Idea</a>
                    </li>

                    <li>
                      <a href="#" class="card-tag">Review</a>
                    </li>

                  </ul>

                  <h3 class="h4">
                    <a href="#" class="card-title hover:underline font-bold">
                        Creating a list of the top 10 things you wish you knew when you started
                     
                    </a>
                  </h3>

                  <p class="card-text">
                    Vestibulum vehicula dui venenatis neque tempor, accumsan iaculis sapien ornare. Sed at ante porta,
                    ullamcorper massa eu,
                    ullamcorper sapien. Donec pretium tortor augue. Integer egestas ut tellus sed pretium. Nullam
                    tristique augue ut mattis
                    vulputate. Duis et lorem in odio ultricies porttitor.
                  </p>

                </div>

              </div>
            </li>
            <li class="scrollbar-item">
              <div class="blog-card">

              <figure className="card-banner img-holder" style={{ '--width': 500, '--height': 600 }}>
      <img
        src="./images/featured-2.jpg"
        width="500"
        height="600"
        loading="lazy"
        alt="It’s a new era in design, there are no rules"
        className="img-cover"
      />

      <ul className="avatar-list absolute">
        <li className="avatar-item">
          <a href="#" className="avatar img-holder" style={{ '--width': 100, '--height': 100 }}>
            <img
              src="./assets/images/author-3.jpg"
              width="100"
              height="100"
              loading="lazy"
              alt="Author"
              className="img-cover"
            />
          </a>
        </li>
      </ul>
    </figure>
{/**perfection starts */}
                <div class="card-content">

                  <ul class="card-meta-list">

                    <li>
                      <a href="#" class="card-tag">Creative</a>
                    </li>

                    <li>
                      <a href="#" class="card-tag">Product</a>
                    </li>

                  </ul>

                  <h3 class="h4">
                    <a href="#" class="card-title hover:underline font-bold">
                      It’s a new era in ticket design, there are no rules
                    </a>
                  </h3>

                  <p class="card-text">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptates perferendis natus laborum corporis. Dolorem fugit quis sint quisquam libero adipisci sapiente error quidem eum? Ea sequi inventore placeat magnam.
                  </p>

                </div>

              </div>
            </li>



            <li class="scrollbar-item">
              <div class="blog-card">

              <figure className="card-banner img-holder mr-0 ml-0" style={{ width: 320, height: 407, }}>
      <img
        src="./images/featured-3.jpg"
        width="100"
        height="100"
        loading="lazy"
        alt="Perfection has to do with the end product"
        className="img-cover"
      />

      <ul className="avatar-list absolute">
        <li className="avatar-item">
          <a href="#" className="avatar img-holder" style={{ width: 50, height: 50 }}>
            <img
              src="./images/author-4.jpg"
              width="100"
              height="100"
              loading="lazy"
              alt="Author"
              className="img-cover"
            />
          </a>
        </li>
      </ul>
    </figure>

                <div class="card-content">

                  <ul class="card-meta-list">

                    <li>
                      <a href="#" class="card-tag">Design</a>
                    </li>

                    <li>
                      <a href="#" class="card-tag">Creative</a>
                    </li>

                    <li>
                      <a href="#" class="card-tag">Idea</a>
                    </li>

                  </ul>

                  <h3 class="h4">
                    <a href="#" class="card-title hover:underline font-bold">
                      Perfection has to do with the end product
                    </a>
                  </h3>

                  <p class="card-text">
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi debitis ullam placeat cumque recusandae neque iusto hic amet odit vero voluptates, necessitatibus ducimus quia nisi delectus culpa dolore, aut ipsa.
                  </p>

                </div>

              </div>
            </li>

            <li class="scrollbar-item">
              <div class="blog-card">

              <figure className="card-banner img-holder" style={{ width: 320, height: 407 }}>
      <img
        src="./images/featured.jpg"
        width="500"
        height="600"
        loading="lazy"
        alt="Everyone has a different life story"
        className="img-cover"
      />

      <ul className="avatar-list absolute">
        <li className="avatar-item">
          <a href="#" className="avatar img-holder" style={{ width: 50, height: 50 }}>
            <img
              src="./images/author-5.jpg"
              width="100"
              height="100"
              loading="lazy"
              alt="Author"
              className="img-cover"
            />
          </a>
        </li>

        <li className="avatar-item">
          <a href="#" className="avatar img-holder" style={{ width: 50, height: 50 }}>
            <img
              src="./images/author-2.jpg"
              width="100"
              height="100"
              loading="lazy"
              alt="Author"
              className="img-cover"
            />
          </a>
        </li>
      </ul>
    </figure>

                <div class="card-content">

                  <ul class="card-meta-list">

                    <li>
                      <a href="#" class="card-tag">People</a>
                    </li>

                    <li>
                      <a href="#" class="card-tag">Story</a>
                    </li>

                  </ul>

                  <h3 class="h4">
                    <a href="#" class="card-title hover:underline font-bold">
                      Everyone has a different life story
                    </a>
                  </h3>

                  <p class="card-text">
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos alias a nobis? Vel maiores sapiente cum illum omnis enim ex molestiae minus vitae quisquam, accusantium repellendus quibusdam, voluptates saepe dolorem!
                  </p>

                </div>

              </div>
            </li>
            <li class="scrollbar-item">
              <div class="blog-card">

              <figure className="card-banner img-holder" style={{ width: 320, height: 407 }}>
      <img
        src="./images/featured2.jpg"
        width="500"
        height="600"
        loading="lazy"
        alt="The difference is quality"
        className="img-cover"
      />

      <ul className="avatar-list absolute">
        <li className="avatar-item">
          <a href="#" className="avatar img-holder" style={{ width: 50, height: 50 }}>
            <img
              src="./images/author-6.jpg"
              width="100"
              height="100"
              loading="lazy"
              alt="Author"
              className="img-cover"
            />
          </a>
        </li>
      </ul>
    </figure>

                <div class="card-content">

                  <ul class="card-meta-list">

                    <li>
                      <a href="#" class="card-tag">Design</a>
                    </li>

                    <li>
                      <a href="#" class="card-tag">Lifestyle</a>
                    </li>

                    <li>
                      <a href="#" class="card-tag">Idea</a>
                    </li>

                  </ul>

                  <h3 class="h4">
                    <a href="#" class="card-title hover:underline font-bold">
                      The difference is quality
                    </a>
                  </h3>

                  <p class="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae molestias atque fugiat ab nam illo minima rerum cum, labore optio. Hic vitae impedit cumque omnis eligendi itaque nemo pariatur culpa?
                  </p>

                </div>

              </div>
            </li>
            <li class="scrollbar-item">
              <div class="blog-card">

              <figure className="card-banner img-holder" style={{ width: 320, height: 407 }}>
      <img
        src="./images/featured3.jpg"
        width="500"
        height="600"
        loading="lazy"
        alt="Problems are not stop signs, they are guidelines"
        className="img-cover"
      />

      <ul className="avatar-list absolute">
        <li className="avatar-item">
          <a href="#" className="avatar img-holder" style={{ width: 50, height: 50 }}>
            <img
              src="./images/author-3.jpg"
              width="100"
              height="100"
              loading="lazy"
              alt="Author"
              className="img-cover"
            />
          </a>
        </li>
      </ul>
    </figure>

                <div class="card-content">

                  <ul class="card-meta-list">

                    <li>
                      <a href="#" class="card-tag">Idea</a>
                    </li>

                    <li>
                      <a href="#" class="card-tag">Creating</a>
                    </li>

                  </ul>

                  <h3 class="h4">
                    <a href="#" class="card-title hover:underline font-bold">
                      Problems are not stop signs, they are guidelines
                    </a>
                  </h3>

                  <p class="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero earum ducimus eligendi vitae tempore quasi voluptatum rem obcaecati odit quas cum, magnam facilis nemo quae sapiente corporis eum vel quia!
                  </p>

                </div>

              </div>
            </li>
        </ul>
        
      </div>
     
      
    </section>


{/**RECENT POST */}
<section className='section recent' aria-label='recent post'>
<div className='container'>

<div className='title-wrapper'>

<h2 className='h2 section-title '>
See what we’ve <strong class="strong">written lately</strong>
</h2>



<div className='top-author'>
<ul className='avatar-list'>
<li className='avatar-item'>
<a href="#" class="avatar large img-holder" style={{ width: 100, height: 100 }}>
                    <img src="./images/featured.jpg" width="100" height="100" alt="top author" class="img-cover"/>
                  </a>
</li>


<li class="avatar-item">
                  <a href="#" class="avatar large img-holder" style={{width: 100, height: 100}}>
                    <img src="./images/featured2.jpg" width="100" height="100" alt="top author" class="img-cover"/>
                  </a>
                </li>

                <li class="avatar-item">
                  <a href="#" class="avatar large img-holder" style={{width: 100, height: 100}}>
                    <img src="./images/featured3.jpg" width="100" height="100" alt="top author" class="img-cover"/>
                  </a>
                </li>

                <li class="avatar-item">
                  <a href="#" class="avatar large img-holder" style={{width: 100, height: 100}}>
                    <img src="./images/author-4.jpg" width="100" height="100" alt="top author" class="img-cover"/>
                  </a>
                </li>

                <li class="avatar-item">
                  <a href="#" class="avatar large img-holder" style={{width: 100, height: 100}}>
                    <img src="./images/author5.jpg" width="100" height="100" alt="top author" class="img-cover"/>
                  </a>
                </li>
</ul>

<span class="span">Meet our top authors</span>
</div>
</div>

<ul className='grid-list'>
  
  <li className='tiles'>
      <div className='blog-card'>
      <figure class="card-banner img-holder" style={{width: 330, height: 460}}>
                  <img src="./images/featured2.jpg" width="550" height="660" loading="lazy"
                    alt="Creating is a privilege but it’s also a gift" class="img-cover"/>

        <ul className='avatar-list absolute'>
            <li className='avatar-item'>
            <a href="#" class="avatar img-holder" style={{width:50, height: 50}}>
                        <img src="./images/author-3.jpg" width="100" height="100" loading="lazy" alt="Author"
                          class="img-cover"/>
                      </a>
            </li>

            <li class="avatar-item">
                      <a href="#" class="avatar img-holder" style={{width: 50, height: 50}}>
                        <img src="./images/author5.jpg" width="100" height="100" loading="lazy" alt="Author"
                          class="img-cover"/>
                      </a>
                    </li>
        </ul>
                    </figure>

<div className='card-content'>
    <ul className='card-meta-list'>
    <li>
                      <a href="#" class="card-tag">Lifestyle</a>
                    </li>

                    <li>
                      <a href="#" class="card-tag">People</a>
                    </li>

                    <li>
                      <a href="#" class="card-tag">Review</a>
                    </li>
    </ul>

    <h3 class="h4">
                    <a href="#" class="card-title hover:underline font-bold">
                      Creating is a privilege but it’s also a gift
                    </a>
                  </h3>

                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere molestiae, ratione cum recusandae similique molestias voluptates quia aliquid obcaecati doloribus. Esse necessitatibus est aspernatur! Voluptate ipsam ullam eius odio blanditiis.
                  </p>

</div>

      </div>
  </li>

  <li>
    <div className='blog-card'>
      <figure className='card-banner img-holder' style={{width: 330, height: 460}}>
      <img src="./images/recent-2.jpg" width="550" height="660" loading="lazy"
                    alt="Being unique is better than being perfect" class="img-cover"/>

      <ul className='avatar-list absolute'>
        <li className='avatar-item'>
        <a href="#" class="avatar img-holder" style={{width: 50, height: 50}}>
                        <img src="./images/author5.jpg" width="100" height="100" loading="lazy" alt="Author"
                          class="img-cover"/>
                      </a>
        </li>
      </ul>

      </figure>
<div className='card-content'>
    <ul className='card-meta-list'>
      <li>
      <a href="#" class="card-tag">Design</a>
      </li>

      <li>
                      <a href="#" class="card-tag">Product</a>
                    </li>

                    <li>
                      <a href="#" class="card-tag">Idea</a>
                    </li>
    </ul>
    <h3 class="h4">
                    <a href="#" class="card-title hover:underline font-bold">
                      Being unique is better than being perfect
                    </a>
                  </h3>

                  <p class="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et debitis quaerat hic, ea culpa adipisci modi ipsam amet aspernatur dolore quam possimus exercitationem voluptates est sequi ab veniam fuga voluptatum.
                  </p>

</div>

    </div>
  </li>

  <li>
    <div className='blog-card'>
      <figure className='card-banner img-holder m-0' style={{width: 330, height: 460}}>
      <img src="./images/recent-3.jpg" width="550" height="660" loading="lazy"
                    alt="Now we’re getting somewhere" class="img-cover"/>

      <ul className='avatar-list absolute'>
        <li className='avatar-item'>
        <a href="#" class="avatar img-holder" style={{width: 50, height: 50}}>
                        <img src="./images/author-2.jpg" width="100" height="100" loading="lazy" alt="Author"
                          class="img-cover"/>
                      </a>
        </li>

        <li class="avatar-item">
                      <a href="#" class="avatar img-holder" style={{width: 50, height: 50}}>
                        <img src="./images/author5.jpg" width="100" height="100" loading="lazy" alt="Author"
                          class="img-cover"/>
                      </a>
                    </li>

                    <li class="avatar-item">
                      <a href="#" class="avatar img-holder" style={{width: 50, height: 50}}>
                        <img src="./images/author-1.jpg" width="100" height="100" loading="lazy" alt="Author"
                          class="img-cover"/>
                      </a>
                    </li>


      </ul>

      </figure>


      <div className='card-content'>
        <ul className='card-meta-list'>
        <li>
                      <a href="#" class="card-tag">Idea</a>
                    </li>

                    <li>
                      <a href="#" class="card-tag">Product</a>
                    </li>

                    <li>
                      <a href="#" class="card-tag">Review</a>
                    </li>   
        </ul>

        <h3 class="h4">
                    <a href="#" class="card-title hover:underline font-bold">
                      Now we’re getting somewhere
                    </a>
                  </h3>

                  <p class="card-text">
                   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nisi quidem, quibusdam aperiam magnam, amet doloremque labore nobis ipsam hic officia cumque, cum dicta ratione! A sit magnam nesciunt dicta!
                  </p>

      </div>

    </div>
  </li>

  <li>
              <div class="blog-card">

                <figure class="card-banner img-holder" style={{width: 330, height: 460}}>
                  <img src="./images/recent-4.jpg" width="550" height="660" loading="lazy"
                    alt="The trick to getting more done is to have the freedom to roam around" class="img-cover"/>

                  <ul class="avatar-list absolute">

                    <li class="avatar-item">
                      <a href="#" class="avatar img-holder" style={{width: 50, height: 50}}>
                        <img src="./images/author-3.jpg" width="100" height="100" loading="lazy" alt="Author"
                          class="img-cover"/>
                      </a>
                    </li>

                  </ul>
                </figure>

                <div class="card-content">

                  <ul class="card-meta-list">

                    <li>
                      <a href="#" class="card-tag">Lifestyle</a>
                    </li>

                    <li>
                      <a href="#" class="card-tag">Design</a>
                    </li>

                  </ul>

                  <h3 class="h4">
                    <a href="#" class="card-title hover:underline font-bold">
                      The trick to getting more done is to have the freedom to roam around
                    </a>
                  </h3>

                  <p class="card-text">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum harum, enim itaque autem quia porro asperiores vero iusto assumenda sint repellat sed molestias, blanditiis repudiandae quos ullam soluta, quo eveniet.
                  </p>

                </div>

              </div>
            </li>


<li>
  <div className='blog-card'>
    <figure className='card-banner img-holder' style={{width: 330, height: 460}}>
    <img src="./images/featured.jpg" width="550" height="660" loading="lazy"
                    alt="Every day, in every city and town across the country" class="img-cover"/>

    <ul className='avatar-list absolute'>
      <li className='avatar-item'>
      <a href="#" class="avatar img-holder" style={{width: 50, height: 50}}>
                        <img src="./images/author-1.jpg" width="100" height="100" loading="lazy" alt="Author"
                          class="img-cover"/>
                      </a>
      </li>
      <li class="avatar-item">
                      <a href="#" class="avatar img-holder" style={{width: 50, height: 50}}>
                        <img src="./images/author-6.jpg" width="100" height="100" loading="lazy" alt="Author"
                          class="img-cover"/>
                      </a>
                    </li>


    </ul>
    </figure>

    <div className='card-content'>
      <ul className='card-meta-list'>
      <li>
                      <a href="#" class="card-tag">People</a>
                    </li>

                    <li>
                      <a href="#" class="card-tag">Story</a>
                    </li>

                    <li>
                      <a href="#" class="card-tag">Lifestyle</a>
                    </li>


      </ul>
      <h3 class="h4">
                    <a href="#" class="card-title hover:underline font-bold">
                      Every day, in every city and town across the country
                    </a>
                  </h3>

                  <p class="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quas modi accusantium explicabo amet rem, adipisci non totam aut minima cum, facilis laudantium deserunt iste impedit expedita voluptatum alias ex.
                  </p>

    </div>

  </div>
</li>

<li>
  <div className='blog-card'>
    <figure className='card-banner img-holder' style={{width: 330, height: 460}}>
    <img src="./images/recent-6.jpg" width="550" height="660" loading="lazy"
                    alt="Your voice, your mind, your story, your vision" class="img-cover"/>
    
    <ul className='avatar-list absolute'>
    <li class="avatar-item">
                      <a href="#" class="avatar img-holder" style={{width: 50, height: 50}}>
                        <img src="./images/author-6.jpg" width="100" height="100" loading="lazy" alt="Author"
                          class="img-cover"/>
                      </a>
                    </li>
    </ul>
    </figure>

<div className='card-content'>
  <ul className='card-meta-list'>
  <li>
                      <a href="#" class="card-tag">People</a>
                    </li>

                    <li>
                      <a href="#" class="card-tag">Review</a>
                    </li>

                    <li>
                      <a href="#" class="card-tag">Story</a>
                    </li>
  </ul>

  <h3 class="h4">
                    <a href="#" class="card-title hover:underline font-bold">
                      Your voice, your mind, your story, your vision
                    </a>
                  </h3>

                  <p class="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore tenetur voluptas delectus dolorem cumque, modi exercitationem sint laudantium consectetur earum laboriosam hic. Porro voluptas inventore explicabo sed, eligendi facere odio?
                  </p>
  
</div>
  </div>
</li>
  
</ul>

<button class="btn">Load more</button>

</div>
</section>


{/** #RECOMMENDED POST*/}
<section className='section recommended' aria-label="recommended post">
  <div className='container'>

  <p class="section-subtitle">
            <strong class="strong text-left">Recent update</strong>
          </p>

  <ul className='grid-list'>
    
    <li>
      <div className='blog-card'>
        <figure className='card-banner img-holder' style={{width: 150, height: 200}}>

        <img src="./images/recommended-2.jpg" width="300" height="360" loading="lazy"
                    alt="The trick to getting more done is to have the freedom to roam around " class="img-cover"/>

<ul class="avatar-list absolute">

<li class="avatar-item">
  <a href="#" class="avatar img-holder" style={{width: 40, height: 40}}>
    <img src="./images/author5.jpg" width="100" height="100" loading="lazy" alt="Author"
      class="img-cover"/>
  </a>
</li>

<li class="avatar-item">
  <a href="#" class="avatar img-holder" style={{width: 40, height: 40}}>
    <img src="./images/author-2.jpg" width="100" height="100" loading="lazy" alt="Author"
      class="img-cover"/>
  </a>
</li>

</ul>

        </figure>
        <div class="card-content">

<h3 class="h5">
  <a href="#" class="card-title hover:underline font-bold">
    The trick to getting more done is to have the freedom to roam around
  </a>
</h3>

</div>

      </div>
    </li>

    <li>
      <div className='blog-card'>
      <figure class="card-banner img-holder" style={{width: 150, height: 200}}>
                  <img src="./images/recommended-4.jpg" width="300" height="360" loading="lazy"
                    alt="Every day, in every city and town across the country " class="img-cover"/>

                  <ul class="avatar-list absolute">

                    <li class="avatar-item">
                      <a href="#" class="avatar img-holder" style={{width: 40, height: 40}}>
                        <img src="./images/author-3.jpg" width="100" height="100" loading="lazy" alt="Author"
                          class="img-cover"/>
                      </a>
                    </li>

                  </ul>
                </figure>
                <div class="card-content">

                  <h3 class="h5">
                    <a href="#" class="card-title hover:underline font-bold font-bold">
                        How much does the online repuation of a meetings venue matters?
                    </a>
                  </h3>

                </div>
      </div>
    </li>

    <li>
              <div class="blog-card">

                <figure class="card-banner img-holder" style={{width: 150, height: 200}}>
                  <img src="./images/recommended-3.jpg" width="300" height="360" loading="lazy"
                    alt="How event technology can benefit your event? " class="img-cover"/>

                  <ul class="avatar-list absolute">

                    <li class="avatar-item">
                      <a href="#" class="avatar img-holder" style={{width: 40, height: 40}}>
                        <img src="./images/author-1.jpg" width="100" height="100" loading="lazy" alt="Author"
                          class="img-cover"/>
                      </a>
                    </li>

                  </ul>
                </figure>

                <div class="card-content">

                  <h3 class="h5">
                    <a href="#" class="card-title hover:underline font-bold">
                        How event technology can benefit your event?
                    </a>
                  </h3>

                </div>

              </div>
            </li>
            <li>
              <div class="blog-card">

                <figure class="card-banner img-holder" style={{width: 150 , height: 200}}>
                  <img src="./images/recommended-5.jpg" width="300" height="360" loading="lazy"
                    alt="How to get media attention to your events?" class="img-cover"/>

                  <ul class="avatar-list absolute">

                    <li class="avatar-item">
                      <a href="#" class="avatar img-holder" style={{width: 40, height: 40}}>
                        <img src="./images/author-4.jpg" width="100" height="100" loading="lazy" alt="Author"
                          class="img-cover"/>
                      </a>
                    </li>

                    <li class="avatar-item">
                      <a href="#" class="avatar img-holder" style={{width: 40, height: 40}}>
                        <img src="./images/author-3.jpg" width="100" height="100" loading="lazy" alt="Author"
                          class="img-cover"/>
                      </a>
                    </li>

                  </ul>
                </figure>

                <div class="card-content">

                  <h3 class="h5">
                    <a href="#" class="card-title hover:underline font-bold">
                        How to get media attention to your events?
                    </a>
                  </h3>

                </div>

              </div>
            </li>
            <li>
              <div class="blog-card">

                <figure class="card-banner img-holder" style={{width: 150, height: 200}}>
                  <img src="./images/recommended-3.jpg" width="300" height="360" loading="lazy"
                    alt=" How-To-Post About Something In Your Niche" class="img-cover"/>

                  <ul class="avatar-list absolute">

                    <li class="avatar-item">
                      <a href="#" class="avatar img-holder" style={{width: 40, height: 40}}>
                        <img src="./images/author-6.jpg" width="100" height="100" loading="lazy" alt="Author"
                          class="img-cover"/>
                      </a>
                    </li>

                  </ul>
                </figure>

                <div class="card-content">

                  <h3 class="h5">
                    <a href="#" class="card-title hover:underline font-bold">
                        How-To-Post About Something In Your Niche
                    </a>
                  </h3>

                </div>

              </div>
            </li>

            <li>
              <div class="blog-card">

                <figure class="card-banner img-holder" style={{width: 150, height: 200}}>
                  <img src="./images/recommended-6.jpg" width="300" height="360" loading="lazy"
                    alt=" Share How A Famous Person Does Something In The Event Planning Business niche" class="img-cover"/>

                  <ul class="avatar-list absolute">

                    <li class="avatar-item">
                      <a href="#" class="avatar img-holder" style={{width: 40, height: 40}}>
                        <img src="./images/author-3.jpg" width="100" height="100" loading="lazy" alt="Author"
                          class="img-cover"/>
                      </a>
                    </li>

                  </ul>
                </figure>

                <div class="card-content">

                  <h3 class="h5">
                    <a href="#" class="card-title hover:underline font-bold">
                        Share How A Famous Person Does Something In The Event Planning Business niche
                    </a>
                  </h3>

                </div>

              </div>
            </li>

  </ul>

  </div>

</section>


<section className='section recommended' aria-label="recommended post">
  <div className='container'>
  <p class="section-subtitle">
            <strong class="strong">Recommended</strong>
          </p>

          <ul className='grid-list'>
            <li>
              <div className='blog-card'>
                <figure className='card-banner img-holder' style={{width: 150, height: 200}}>
                <img src="./images/recommended-1.jpg" width="300" height="360" loading="lazy"
                    alt="How To Use A Specific Event Planning Business Tool" class="img-cover"/>

<ul class="avatar-list absolute">

<li class="avatar-item">
  <a href="#" class="avatar img-holder" style={{width: 40, height: 40}}>
    <img src="./images/author5.jpg" width="100" height="100" loading="lazy" alt="Author"
      class="img-cover"/>
  </a>
</li>

<li class="avatar-item">
  <a href="#" class="avatar img-holder" style={{width: 40, height: 40}}>
    <img src="./images/author-2.jpg" width="100" height="100" loading="lazy" alt="Author"
      class="img-cover"/>
  </a>
</li>

</ul>

                </figure>
                <div class="card-content">

<h3 class="h5">
  <a href="#" class="card-title hover:underline font-bold">
      How To Use A Specific Event Planning Business Tool
  </a>
</h3>

</div>

              </div>
            </li>

            <li>
              <div class="blog-card">

                <figure class="card-banner img-holder" style={{width: 150, height: 200}}>
                  <img src="./images/featured.jpg" width="300" height="360" loading="lazy"
                    alt=" A day in the life of a event planning business" class="img-cover"/>

                  <ul class="avatar-list absolute">

                    <li class="avatar-item">
                      <a href="#" class="avatar img-holder" style={{width: 40, height: 40}}>
                        <img src="./images/author-3.jpg" width="100" height="100" loading="lazy" alt="Author"
                          class="img-cover"/>
                      </a>
                    </li>

                  </ul>
                </figure>

                <div class="card-content">

                  <h3 class="h5">
                    <a href="#" class="card-title hover:underline font-bold">
                        A day in the life of a event planning business


                    </a>
                  </h3>

                </div>

              </div>
            </li>

            <li>
              <div class="blog-card">

                <figure class="card-banner img-holder" style={{width: 150, height: 200}}>
                  <img src="./images/featured2.jpg" width="300" height="360" loading="lazy"
                    alt="Event Planning Business history and evolution over time" class="img-cover"/>

                  <ul class="avatar-list absolute">

                    <li class="avatar-item">
                      <a href="#" class="avatar img-holder" style={{width: 40, height: 40}}>
                        <img src="./images/author-1.jpg" width="100" height="100" loading="lazy" alt="Author"
                          class="img-cover"/>
                      </a>
                    </li>

                  </ul>
                </figure>

                <div class="card-content">

                  <h3 class="h5">
                    <a href="#" class="card-title hover:underline font-bold">
                        Event Planning Business history and evolution over time
                    </a>
                  </h3>

                </div>

              </div>
            </li>

            <li>
              <div class="blog-card">

                <figure class="card-banner img-holder" style={{width: 150, height: 200}}>
                  <img src="./images/featured3.jpg" width="300" height="360" loading="lazy"
                    alt="What are some questions that people should be asking you, but aren’t? " class="img-cover"/>

                  <ul class="avatar-list absolute">

                    <li class="avatar-item">
                      <a href="#" class="avatar img-holder" style={{width: 40, height: 40}}>
                        <img src="./images/author-4.jpg" width="100" height="100" loading="lazy" alt="Author"
                          class="img-cover"/>
                      </a>
                    </li>

                    <li class="avatar-item">
                      <a href="#" class="avatar img-holder" style={{width: 40, height: 40}}>
                        <img src="./images/author-3.jpg" width="100" height="100" loading="lazy" alt="Author"
                          class="img-cover"/>
                      </a>
                    </li>

                  </ul>
                </figure>

                <div class="card-content">

                  <h3 class="h5">
                    <a href="#" class="card-title hover:underline font-bold">
                        What are some questions that people should be asking you, but aren’t?
                    </a>
                  </h3>

                </div>

              </div>
            </li>

            <li>
              <div class="blog-card">

                <figure class="card-banner img-holder" style={{width: 150, height: 200}}>
                  <img src="./images/recommended-6.jpg" width="300" height="360" loading="lazy"
                    alt=" Walk your audience through a process, step by step?" class="img-cover"/>

                  <ul class="avatar-list absolute">

                    <li class="avatar-item">
                      <a href="#" class="avatar img-holder" style={{width: 40, height: 40}}>
                        <img src="./images/author-6.jpg" width="100" height="100" loading="lazy" alt="Author"
                          class="img-cover"/>
                      </a>
                    </li>

                  </ul>
                </figure>

                <div class="card-content">

                  <h3 class="h5">
                    <a href="#" class="card-title hover:underline font-bold">
                        Walk your audience through a process, step by step?
                    </a>
                  </h3>

                </div>

              </div>
            </li>

            <li>
              <div class="blog-card">

                <figure class="card-banner img-holder" style={{width: 150, height: 200}}>
                  <img src="./images/recommended-3.jpg" width="300" height="360" loading="lazy"
                    alt="How to get a job in the event planning business industry. " class="img-cover"/>

                  <ul class="avatar-list absolute">

                    <li class="avatar-item">
                      <a href="#" class="avatar img-holder" style={{width: 40, height: 40}}>
                        <img src="./images/author-3.jpg" width="100" height="100" loading="lazy" alt="Author"
                          class="img-cover"/>
                      </a>
                    </li>

                  </ul>
                </figure>

                <div class="card-content">

                  <h3 class="h5">
                    <a href="#" class="card-title hover:underline font-bold">
                        How to get a job in the event planning business industry.
                    </a>
                  </h3>

                </div>

              </div>
            </li>

          </ul>
  </div>

</section>

{/**NEWSLETTER */}

<section className='section newsletter'>
<h2 class="h2 section-title">
          Subscribe to <strong class="strong">new posts</strong>
        </h2>

        <form action="" class="newsletter-form">
          <input type="email" name="email_address" placeholder="Your email address" required class="email-field"/>

          <button type="submit" class="btn">Subscribe</button>
        </form>

</section>
      </article>
      </main>
    </div>
    
  );
}


export default App;
