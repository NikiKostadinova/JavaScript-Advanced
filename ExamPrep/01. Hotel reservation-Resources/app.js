window.addEventListener('load', solve);

function solve() {

    const input = {
        firstName: document.getElementById('first-name'),
        lastName: document.getElementById('last-name'),
        dateIn: document.getElementById('date-in'),
        dateOut: document.getElementById('date-out'),
        peopleCount: document.getElementById('people-count'),
    }

    const nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', next);

    const lists = {
        resInfo: document.querySelector('.info-list'),
        confirmRes: document.querySelector('.confirm-list'),
        yourRes: document.getElementById('verification')
    }

    function next(e) {

        e.preventDefault();

        const firstName = input.firstName.value;
        const lastName = input.lastName.value;
        const dateIn = input.dateIn.value;
        const dateOut = input.dateOut.value;
        const peopleCount = input.peopleCount.value;

        if (firstName == '' || lastName == '' || dateIn == '' || dateOut == '' || peopleCount == '' || new Date(dateIn) >= new Date(dateOut)) {
        
           
            return;
        }

        nextBtn.disabled = true;

        const li = document.createElement('li');
        li.className = 'reservation-content';
        li.innerHTML = `
        <article>
        <h3>Name: ${firstName} ${lastName}</h3>
        <p>From date: ${dateIn}</p>
        <p>To date: ${dateOut}</p>
        <p>For ${peopleCount} people</p>
        </article>
        `
        // <button class="edit-btn">Edit</button>
        // <button class="continue-btn">Continue</button>

        // const editBtn = li.querySelector('.edit-btn');
        // const continueBtn = li.querySelector('.continue-btn');

        let editBtn = document.createElement('button');
        editBtn.setAttribute('class', 'edit-btn');
        editBtn.textContent = 'Edit';
        li.appendChild(editBtn);

        let continueBtn = document.createElement('button');
        continueBtn.setAttribute('class', 'continue-btn');
        continueBtn.textContent = 'Continue';
        li.appendChild(continueBtn);

        editBtn.addEventListener('click', edit);
        continueBtn.addEventListener('click', continueRes);

        lists.resInfo.appendChild(li);

        input.firstName.value = '';
        input.lastName.value = '';
        input.dateIn.value = '';
        input.dateOut.value = '';
        input.peopleCount.value = '';

        function edit() {

            input.firstName.value = firstName;
            input.lastName.value = lastName;
            input.dateIn.value = dateIn;
            input.dateOut.value = dateOut;
            input.peopleCount.value = peopleCount;

            nextBtn.disabled = false;
            li.remove();

        }

        function continueRes() {

            li.remove();
            lists.confirmRes.appendChild(li);
            // editBtn.textContent = 'Confirm';
            // continueBtn.textContent = 'Cancel';
            nextBtn.disabled = true;
            // editBtn.className = 'confirm-btn';
            // continueBtn.className = 'cancel-btn';

            editBtn.remove();
            continueBtn.remove();

            const confirmBtn = document.createElement('button');;
            confirmBtn.textContent = 'Confirm'
            confirmBtn.className = 'confirm-btn';
            lists.confirmRes.appendChild(confirmBtn);

            const cancelBtn = document.createElement('button');;
            cancelBtn.textContent = 'Cancel'
            cancelBtn.className = 'cancel-btn';
            lists.confirmRes.appendChild(cancelBtn);

            confirmBtn.addEventListener('click', confirmed);
            continueBtn.addEventListener('click', canceled);

            function confirmed() {

                // input.firstName.value = '';
                // input.lastName.value = '';
                // input.dateIn.value = '';
                // input.dateOut.value = '';
                // input.peopleCount.value = '';
                // lists.confirmRes.innerHTML = '';

                li.remove();

                nextBtn.disabled = false;
                lists.yourRes.className = 'reservation-confirmed';
                lists.yourRes.textContent = 'Confirmed';


            }

            function canceled() {

                // lists.confirmRes.innerHTML = '';
                li.remove();
                nextBtn.disabled = false;
                lists.yourRes.className = 'reservation-cancelled';
                lists.yourRes.textContent = 'Cancelled';
            }
        }
    }
}





