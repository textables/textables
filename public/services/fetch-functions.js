export async function fetchWithSource(chosenSource) {
  const data = await fetch(`/api/v1/results/${chosenSource}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json());
  return data;
}

export async function fetchRandom() {
  const data = await fetch('api/v1/results', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json());
  return data;
}

