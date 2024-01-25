window.addEventListener("load", solve);

function solve() {

 
  const input = {

    device: document.getElementById('type-product'),
    describtion: document.getElementById('description'),
    clientName: document.getElementById('client-name'),
    clientPhone: document.getElementById('client-phone')

  }

  const lists = {

    receivedOrder: document.getElementById('received-orders'),
    completedOrders: document.getElementById('completed-orders'),

  }

  document.querySelector('button[type="submit"]').addEventListener('click', sendForm);
  document.querySelector('.clear-btn').addEventListener('click', clear);

  function sendForm(event) {

    event.preventDefault();

    const device = input.device.value;
    const describtion = input.describtion.value;
    const clientName = input.clientName.value;
    const clientPhone = input.clientPhone.value;

    

    if (describtion == '' || clientName == '' || clientPhone == '') {
      return;
    }

    const div = document.createElement('div');
    div.className = "container";
    div.innerHTML = `
        <h2>Product type for repair: ${device}</h2>
        <h3>Client information: ${clientName}, ${clientPhone}</h3>
        <h4>Description of the problem: ${describtion}</h4>
        <button class="start-btn">Start repair</button>
        <button class="finish-btn" disabled>Finish repair</button>`;

    const startBtn = div.querySelector('.start-btn');
    const finishBtn = div.querySelector('.finish-btn');
    startBtn.addEventListener('click', startRepair);
    finishBtn.addEventListener('click', finishRepair);

    lists.receivedOrder.appendChild(div);

    input.describtion.value = '';
    input.clientName.value = '';
    input.clientPhone.value = '';

    function startRepair(){

      startBtn.disabled = true;
      finishBtn.disabled = false;
    }

    function finishRepair(){

      div.remove();
      lists.completedOrders.appendChild(div);

      startBtn.remove();
      finishBtn.remove();

    }

  }

  function clear(){

    lists.completedOrders.innerHTML = '';
  }


}

