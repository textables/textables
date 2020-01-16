const listOfRadioButtons = document.querySelectorAll('input');

listOfRadioButtons.forEach(buttonValue => {
  buttonValue.addEventListener('click', (event) => {
    const chosenSource = event.target.value;
    const queryString = window.location.hash.slice(1);

    const searchParams = new URLSearchParams(queryString);
    searchParams.set('sourceId', chosenSource);

    window.location.hash = searchParams.toString();


    //fetch
    fetch(`/api/v1/results/${chosenSource}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json());
  });
});
