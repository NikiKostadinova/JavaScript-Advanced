function solve() {

    const input = {
        firstName: document.getElementById('fname'),
        lastName: document.getElementById('lname'),
        email: document.getElementById('email'),
        birth: document.getElementById('birth'),
        position: document.getElementById('position'),
        salary: document.getElementById('salary'),
    }

    const hireBtn = document.getElementById('add-worker');
    hireBtn.addEventListener('click', hireWorker);
    const table = document.getElementById('tbody');

    function hireWorker(e) {

        e.preventDefault();

        const firstName = input.firstName.value;
        const lastName = input.lastName.value;
        const email = input.email.value;
        const birth = input.birth.value;
        const position = input.position.value;
        let salary = input.salary.value;

        if (firstName == '' || lastName == '' || email == '' || birth == '' || position == '' || salary == '') {
            return;
        }

        const trInfo = document.createElement('tr');

        // tr.innerHTML = `
        // <td>${firstName}</td>
        // <td>${lastName}</td>
        // <td>${email}</td>
        // <td>${birth}</td>
        // <td>${position}</td>
        // <td>${salary}</td>
        // <td><button class="fired">Fired</button> <button class="edit">Edit</button></td>`

        const tdFirstName = document.createElement('td');
        tdFirstName.textContent = `${firstName}`;
        const tdLastName = document.createElement('td');
        tdLastName.textContent = `${lastName}`;
        const tdEmail = document.createElement('td');
        tdEmail.textContent = `${email}`;
        const tdBirth = document.createElement('td');
        tdBirth.textContent = `${birth}`;
        const tdPosition = document.createElement('td');
        tdPosition.textContent = `${position}`;
        const tdSalary = document.createElement('td');
        tdSalary.textContent = `${salary}`;

        const firedBtn = document.createElement('button');
        firedBtn.className = 'fired';
        firedBtn.textContent = 'Fired';
        const editBtn = document.createElement('button');
        editBtn.className = 'edit';
        editBtn.textContent = 'Edit';


        trInfo.appendChild(tdFirstName);
        trInfo.appendChild(tdLastName);
        trInfo.appendChild(tdEmail);
        trInfo.appendChild(tdBirth);
        trInfo.appendChild(tdPosition);
        trInfo.appendChild(tdSalary);

        trInfo.appendChild(firedBtn);
        trInfo.appendChild(editBtn);

        table.appendChild(trInfo); 
        
        
        // const firedBtn = tr.querySelector('.fired');
        // const editBtn = tr.querySelector('.edit');

        firedBtn.addEventListener('click', fired);
        editBtn.addEventListener('click', editInfo);
        
       
        let budget = document.getElementById('sum').textContent;
        
        salary = Number(salary);
        let total = Number(budget);
        total += salary;
        document.getElementById('sum').textContent = total.toFixed(2);

        input.firstName.value = '';
        input.lastName.value = '';
        input.email.value = '';
        input.birth.value = '';
        input.position.value = '';
        input.salary.value = '';

        function editInfo() {

            input.firstName.value = firstName;
            input.lastName.value = lastName;
            input.email.value = email;
            input.birth.value = birth;
            input.position.value = position;
            input.salary.value = salary;

            total -= salary;

            document.getElementById('sum').textContent = total.toFixed(2);

            trInfo.remove();
            firedBtn.remove();
            editBtn.remove();

        }

        function fired() {
            total -= salary;

            document.getElementById('sum').textContent = total.toFixed(2);

            trInfo.remove();
            firedBtn.remove();
            editBtn.remove();
        }


    }

}
solve()