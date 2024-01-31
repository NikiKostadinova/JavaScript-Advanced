function solve() {


    const input = {
        recipient: document.getElementById('recipientName'),
        title: document.getElementById('title'),
        message: document.getElementById('message')
    }

    const addBtn = document.getElementById('add');
    const resetBtn = document.getElementById('reset');

    addBtn.addEventListener('click', addMSG);
    resetBtn.addEventListener('click', resetMSG);

    const lists = {
        listMails: document.getElementById('list'),
        listMails: document.querySelector('.sent-list'),
        listMails: document.querySelector('.delete-list')
    }

    function addMSG(e){

        e.preventDefault();

        const recipient = input.recipient.value;
        const title = input.title.value;
        const message = input.message.value;

        if(recipient == '' || title == ''|| message == ''){
            return;
        }

        

    }
}
solve()