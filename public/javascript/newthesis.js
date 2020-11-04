async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="thesis-title"]').value;
    const thesis_text = document.querySelector('textarea[name="thesis-contents"]').value;
    const security_id = document.querySelector('input[name="thesis-security"]').value;
  
    const response = await fetch(`/api/thesis/`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        thesis_text,
        security_id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/security/:security_id');
    } else {
      alert(response.statusText);
    }
}
  
document.querySelector('.new-thesis').addEventListener('submit', newFormHandler);