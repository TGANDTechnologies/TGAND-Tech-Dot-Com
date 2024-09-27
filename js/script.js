function sendMail(){
    let params = {
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        subject : document.getElementById('subject').value,       
        message : document.getElementById('message').value       
    }
    emailjs.send('service_0j3997j', 'template_dtq1u2b', params).then.alert('Email Sent'); 
}