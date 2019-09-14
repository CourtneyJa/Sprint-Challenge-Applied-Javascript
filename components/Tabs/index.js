// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
let allTopics = document.querySelector('.topics')

axios.get('https://lambda-time-backend.herokuapp.com/topics')
    .then ((response) =>{
        response.data.topics.forEach((data) => {
            let tabs=tab(data)
            allTopics.appendChild(tabs);            
        })
    });

function newTab(topic){
    const tabSec = document.createElement('div');
    tabSec.classList.add('tab');
    tabSec.textContent= topic;
    allTopics.appendChild(tab);
    tab.dataset.tab=topic

    return tabSec;
}