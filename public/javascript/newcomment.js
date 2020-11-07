async function commentFormHandler(event) {
    event.preventDefault();
  
    const comment_text = document.querySelector('#comment-text').value.trim();
    const comment_opinion = document.querySelector('#comment-opinion').value.trim();


    // get THESIS ID from url...
      
    const thesis_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1];


    const response = await fetch(`/api/comment/`, {
        method: 'POST',
        body: JSON.stringify({
          comment_text,
          comment_opinion,
          thesis_id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
      if (response.ok) {
        document.location.replace('/thesis/'+thesis_id);
      } else {
        alert(response.statusText);
      }
  }

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
