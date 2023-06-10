const userList = document.querySelector('.userList');

const API_URL = 'https://gorest.co.in/';
const ALL_USERS = 'public/v2/users';

async function getUserList() {
    
    const ul = document.createElement('ul');
    userList.appendChild(ul);

    const allFriends = await fetch(API_URL + ALL_USERS);
    const friends = await allFriends.json();
    console.log(friends)

    friends.forEach(friend => {
        function addUser() {
            let li = document.createElement('li');
            li.innerHTML = `<a href="${friend.id}">${friend.name}</a>`;
            // li.setAttribute('class','');
            ul.appendChild(li);

        }
        addUser()
    });
    
}
getUserList ()
