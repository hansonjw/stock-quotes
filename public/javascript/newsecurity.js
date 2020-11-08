async function securityFormHandler(event) {
    event.preventDefault();
  
    const ticker = document.querySelector('#newsecurity-ticker').value.trim();
    const name = document.querySelector('#newsecurity-name').value.trim();


    const response = await fetch(`/api/security/`, {
        method: 'POST',
        body: JSON.stringify({
          ticker,
          name
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
      if (response.ok) {
        document.location.replace('/security/'+ticker);
      } else {
        alert(response.statusText);
      }
  }

document.querySelector('.newsecurity-form').addEventListener('submit', securityFormHandler);