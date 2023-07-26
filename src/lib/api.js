export const sendFormContact = (data) =>
  fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (res.status === 200) {
      return res.json();
    }
    throw new Error('Failed to send Message');
  });
