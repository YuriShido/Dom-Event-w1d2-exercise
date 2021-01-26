const form = document.querySelector('#tweetForm');

const userInput = document.querySelectorAll('#tweetForm input');

// const post = document.querySelector('button');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log(userInput[0].value);
  console.log(userInput[1].value);
  const li = document.createElement('li');
  li.innerText =` ${userInput[0].value}  --  ${userInput[1].value}`;
  document.body.appendChild(li);
  
  userInput[0].value = '';
  userInput[1].value = '';
})