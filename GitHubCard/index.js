/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const followersArray = [
   'https://api.github.com/users/tetondan',
   'https://api.github.com/users/dustinmyers',
   'https://api.github.com/users/justsml',
   'https://api.github.com/users/luishrd',
   'https://api.github.com/users/bigknell',
   'https://api.github.com/users/mikecrbenton'
];

followersArray.forEach( (user) => {

   axios.get( user )
      .then( (response) => {
         document.querySelector('.cards').appendChild( createGitCard(response) ); 
      })
      .catch( (error) => {
         console.log("Error : " + error);
      });
})


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">

      <img src={image url of user}   // avatar_url

      <div class="card-info">
        <h3 class="name">{users name}</h3>  //name
        <p class="username">{users user name}</p>  //login
        <p>Location: {users location}</p>  //location
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>  //url
        </p>
        <p>Followers: {users followers count}</p>  //followers
        <p>Following: {users following count}</p>  //following
        <p>Bio: {users bio}</p>  //bio
      </div>

    </div>
*/

function createGitCard( gitResponse ){
 
   //CREATE ELEMENTS 
   let new_card = document.createElement('div');
   let new_img = document.createElement('img');
   let new_cardInfo = document.createElement('div');
   let new_name = document.createElement('h3');
   let new_username = document.createElement('p');
   let new_location = document.createElement('p');
   let new_profile = document.createElement('p');
   let new_link = document.createElement('a');
   let new_followers = document.createElement('p');
   let new_following = document.createElement('p');
   let new_bio = document.createElement('p');
   //ADD CLASSES
   new_card.classList.add('card');
   new_cardInfo.classList.add('card-info');
   new_name.classList.add('name');
   new_username.classList.add('username');

   //CREATE CONTENT
   new_img.src = gitResponse.data['avatar_url'];

   let name_data = document.createTextNode( gitResponse.data['name']);
   let username_data = document.createTextNode( gitResponse.data['login']);
   let location_data = document.createTextNode( `Location: ${gitResponse.data['location']}`);
   let profile_data = document.createTextNode( `Profile : `);

   new_link.setAttribute('href', gitResponse.data['url']);
   let link_data = document.createTextNode( gitResponse.data['url'] );

   let followers_data = document.createTextNode( `Followers: ${gitResponse.data['followers']}`);
   let following_data = document.createTextNode( `Following: ${gitResponse.data['following']}`);
   let bio_data = document.createTextNode( `Bio: ${gitResponse.data['bio']}`);

   //ADD CONTENT TO ELEMENTS
   new_name.appendChild(name_data);
   new_username.appendChild(username_data);
   new_location.appendChild(location_data);
   new_profile.appendChild(profile_data);  // double check this when the network is up again

     //append to the inner <a> first 
   new_link.appendChild(link_data);
     //then add that to the <p> tag
   new_profile.appendChild(new_link);

   new_followers.appendChild(followers_data);
   new_following.appendChild(following_data);
   new_bio.appendChild(bio_data);

   //ADD ELEMENTS TO INNER DIV 1ST
   new_cardInfo.appendChild(new_name)  
   new_cardInfo.appendChild(new_username)
   new_cardInfo.appendChild(new_location)
   new_cardInfo.appendChild(new_profile)
   new_cardInfo.appendChild(new_followers)
   new_cardInfo.appendChild(new_following)
   new_cardInfo.appendChild(new_bio);

   //ADD <img> AND INNER <div class="card-info"> TO OUTER DIV 
   new_card.appendChild(new_img);
   new_card.appendChild(new_cardInfo)
      
   console.log(new_card);
   return new_card; 
}




