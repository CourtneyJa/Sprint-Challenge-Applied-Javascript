// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

let articleCards = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
     .then((response)=>{
         console.log (response);
         response.data.articles.bootstrap.forEach(article =>{
             articleCards.appendChild(makeArticle(article))
         });
         response.data.articles.javascript.forEach(article =>{
            articleCards.appendChild(makeArticle(article))
        });
        response.data.articles.technology.forEach(article =>{
            articleCards.appendChild(makeArticle(article))
        });
        response.data.articles.jquery.forEach(article =>{
            articleCards.appendChild(makeArticle(article))
        });
        response.data.articles.node.forEach(article =>{
            articleCards.appendChild(makeArticle(article))
        });
     })

function makeArticle(data){
    //elements
     let cardCont= document.createElement('div')
     let cardHead= document.createElement('div')
     let cardAuth= document.createElement('div')
     let cardImgCont= document.createElement('div')
     let img= document.createElement('img')
     let cardSpan= document.createElement('span')

    //structure
     cardCont.appendChild(cardHead)
     cardCont.appendChild(cardAuth)
     cardAuth.appendChild(cardImgCont)
     cardImgCont.appendChild(img)
     cardAuth.appendChild(cardSpan)

    //add some class
     cardCont.classList.add('card')
     cardHead.classList.add('headline')
     cardAuth.classList.add('author')
     cardImgCont.classList.add('img-container')
    
    //add text stuff
    cardHead.textContent= data.headline
    img.src= data.authorPhoto
    cardAuth.textContent= 'By ' + data.authorName

    return cardCont;
}