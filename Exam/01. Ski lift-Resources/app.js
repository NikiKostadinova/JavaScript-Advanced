window.addEventListener('load', solve);

function solve() {

    const input = {
        firstName: document.getElementById('first-name'),
        lastName: document.getElementById('last-name'),
        peopleCount: document.getElementById('people-count'),
        dateFrom: document.getElementById('from-date'),
        daysCount: document.getElementById('days-count'),
    }

    const nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', next);

    const lists = {
        ticketInfo: document.querySelector('.ticket-info-list'),
        ticketConfirmed: document.querySelector('.confirm-ticket')
    }

    function next(e) {

        e.preventDefault();

        const firstName = input.firstName.value;
        const lastName = input.lastName.value;
        const peopleCount = input.peopleCount.value;
        const dateFrom = input.dateFrom.value;
        const daysCount = input.daysCount.value;

        if (firstName == '' || lastName == '' || peopleCount == '' || dateFrom == '' || daysCount == '') {
            return;
        }

        nextBtn.disabled = true;

        const li = document.createElement('li');
        li.className = 'ticket';
        li.innerHTML = `<article>
    <h3>Name: ${firstName} ${lastName}</h3>
    <p>From date: ${dateFrom}</p>
    <p>For ${daysCount} days</p>
    <p>For ${peopleCount} people</p>
    </article>
    <button class="edit-btn">Edit</button>
    <button class="continue-btn">Continue</button>`

        const editBtn = li.querySelector('.edit-btn');
        const continueBtn = li.querySelector('.continue-btn');

        editBtn.addEventListener('click', editInfo);
        continueBtn.addEventListener('click', continueRes);

        lists.ticketInfo.appendChild(li);


        input.firstName.value = '';
        input.lastName.value = '';
        input.peopleCount.value = '';
        input.dateFrom.value = '';
        input.daysCount.value = '';

        function editInfo() {

            input.firstName.value = firstName;
            input.lastName.value = lastName;
            input.peopleCount.value = peopleCount;
            input.dateFrom.value = dateFrom;
            input.daysCount.value = daysCount;

            nextBtn.disabled = false;

            li.remove();

        }

        function continueRes() {

            li.remove();

            lists.ticketConfirmed.appendChild(li);

            editBtn.textContent = 'Confirm';
            editBtn.className = 'confirm-btn';
            continueBtn.textContent = 'Cancel';
            continueBtn.className = 'cancel-btn';

            editBtn.addEventListener('click', confirmRes);
            continueBtn.addEventListener('click', cancelRes);

            function cancelRes() {

                li.remove();

                nextBtn.disabled = false;

            }

            function confirmRes(){

                const mainDiv = document.getElementById('main');
                mainDiv.remove();
                const body = document.getElementById('body');

                const h1 = document.createElement('h1');
                h1.id = 'thank-you';
                h1.textContent = 'Thank you, have a nice day!';

                const backBtn = document.createElement('button');
                backBtn.id = 'back-btn';
                backBtn.textContent = 'Back';
                backBtn.addEventListener('click', goBack);

                body.appendChild(h1);
                body.appendChild(backBtn);

                function goBack(){
                    document.location.reload();
                }

            }


        }
    }

}




