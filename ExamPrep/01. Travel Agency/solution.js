window.addEventListener('load', solution);

function solution() {

  const input = {
    fullName: document.getElementById('fname'),
    email: document.getElementById('email'),
    phone: document.getElementById('phone'),
    address: document.getElementById('address'),
    code: document.getElementById('code')
  }

  const submitBtn = document.getElementById('submitBTN');


  // const editBtn = document.getElementsByClassName('actions')[0];
  // const continueBtn = document.getElementsByClassName('actions')[1];


  const list = document.getElementById('infoPreview');

  submitBtn.addEventListener('click', submited);

  function submited(e) {

    e.preventDefault();

    const fullName = input.fullName.value;
    const email = input.email.value;
    const phone = input.phone.value;
    const address = input.address.value;
    const code = input.code.value;

    if (fullName == '' || email == '') {
      return;
    }




    const liFullName = document.createElement('li');
    liFullName.textContent = `Full Name: ${fullName}`;

    const liEmail = document.createElement('li');
    liEmail.textContent = `Email: ${email}`;

    const liPhone = document.createElement('li');
    liPhone.textContent = `Phone Number: ${phone}`;

    const liAddress = document.createElement('li');
    liAddress.textContent = `Address: ${address}`;

    const liCode = document.createElement('li');
    liCode.textContent = `Postal Code: ${code}`;

    list.appendChild(liFullName);
    list.appendChild(liEmail);
    list.appendChild(liPhone);
    list.appendChild(liAddress);
    list.appendChild(liCode);

    input.fullName.value = '';
    input.email.value = '';
    input.phone.value = '';
    input.address.value = '';
    input.code.value = '';

    submitBtn.disabled = true;

    const editBtn = document.getElementById('editBTN');
    const continueBtn = document.getElementById('continueBTN');

    editBtn.addEventListener('click', editInfo);
    continueBtn.addEventListener('click', continueRes);

    editBtn.disabled = false;
    continueBtn.disabled = false;

    function editInfo() {

      liFullName.remove();
      liEmail.remove();
      liPhone.remove();
      liAddress.remove();
      liCode.remove();

      input.fullName.value = fullName;
      input.email.value = email;
      input.phone.value = phone;
      input.address.value = address;
      input.code.value = code;


      editBtn.disabled = true;
      continueBtn.disabled = true;
      submitBtn.disabled = false;

      

    }

    function continueRes() {

      const blockInfo = document.getElementById('block');
      blockInfo.innerHTML = '';
      // Array.from(blockInfo.childNodes).forEach(child => child.remove());
      const h3 = document.createElement('h3');
      h3.textContent = 'Thank You For Your Reservation!'
      blockInfo.appendChild(h3);
    }
  }
}
