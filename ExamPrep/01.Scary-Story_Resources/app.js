window.addEventListener("load", solve);

function solve() {


  const input = {

    firstName: document.getElementById('first-name'),
    lastName: document.getElementById('last-name'),
    age: document.getElementById('age'),
    storyTitle: document.getElementById('story-title'),
    genre: document.getElementById('genre'),
    story: document.getElementById('story'),
  }

  const publishBtn = document.getElementById('form-btn');
  publishBtn.addEventListener('click', publish);

  const previewList = document.getElementById('preview-list');

  function publish(e) {

    e.preventDefault();

    const firstName = input.firstName.value;
    const lastName = input.lastName.value;
    const age = input.age.value;
    const storyTitle = input.storyTitle.value;
    const genre = input.genre.value;
    const story = input.story.value;

    if (firstName == '' || lastName == '' || age == '' || storyTitle == '' || story == '') {
      return;
    }

    publishBtn.disabled = true;

    const li = document.createElement('li');
    li.className = 'story-info';
    li.innerHTML = `<article>
    <h4>Name: ${firstName} ${lastName}</h4>
    <p>Age: ${age}</p>
    <p>Title: ${storyTitle}</p>
    <p>Genre: ${genre}</p>
    <p>${story}</p>
    <article>`
    // <button class="save-btn">Save Story</button>
    // <button class="edit-btn">Edit Story</button>
    // <button class="delete-btn">Delete Story</button>



    // const saveBtn = li.querySelector('.save-btn');
    // const editBtn = li.querySelector('.edit-btn');
    // const deleteBtn = li.querySelector('.delete-btn');

    let saveBtn = document.createElement('button');
    saveBtn.setAttribute('class', 'save-btn');
    saveBtn.textContent = 'Save Story';
    li.appendChild(saveBtn);

    let editBtn = document.createElement('button');
    editBtn.setAttribute('class', 'edit-btn');
    editBtn.textContent = 'Edit Story';
    li.appendChild(editBtn);

    let deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'delete-btn');
    deleteBtn.textContent = 'Delete Story';
    li.appendChild(deleteBtn);

    saveBtn.addEventListener('click', saveStory);
    editBtn.addEventListener('click', editStory);
    deleteBtn.addEventListener('click', deleteStory);

    previewList.appendChild(li);


    input.firstName.value = '';
    input.lastName.value = '';
    input.age.value = '';
    input.storyTitle.value = '';
    input.genre.value = '';
    input.story.value = '';

    function editStory() {

      input.firstName.value = firstName;
      input.lastName.value = lastName;
      input.age.value = age;
      input.storyTitle.value = storyTitle;
      input.genre.value = genre;
      input.story.value = story;

      publishBtn.disabled = false;

      li.remove();

    }

    function saveStory() {

      const mainDiv = document.getElementById('main');
      // mainDiv.textContent = '';
      mainDiv.innerHTML = '';
      const h = document.createElement('h1');
      h.textContent = 'Your scary story is saved!';
      mainDiv.appendChild(h);

    }

    function deleteStory() {

      li.remove();
      publishBtn.disabled = false;

    }


  }

}
