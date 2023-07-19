export default function loadContactPage() {
    const body = document.getElementById('body');

    // Inside page/body

    const contactHero = document.createElement('div');
    contactHero.setAttribute('id', 'contactHero');

    const contactContent = document.createElement('div');
    contactContent.setAttribute('id', 'contactContent');
    
    body.appendChild(contactHero);
    body.appendChild(contactContent);

    // Inside page/body/contactHero

    const contactPageTitle = document.createElement('div');
    contactPageTitle.setAttribute('id', 'contactPageTitle');
    contactPageTitle.textContent = `Contact Us`;

    contactHero.appendChild(contactPageTitle);

    // Inside page/body/contactContent

    const contactFeedback = document.createElement('div');
    contactFeedback.setAttribute('id', 'contactFeedback');

    const contactInquiries = document.createElement('div');
    contactInquiries.setAttribute('id', 'contactInquiries');
    contactInquiries.innerHTML = `For any other complaints or inquiries that we won't read, please click <span>here</span>.`;
    
    const contactSocialMedia = document.createElement('div');
    contactSocialMedia.setAttribute('id', 'contactSocialMedia');
    
    contactContent.appendChild(contactFeedback);
    contactContent.appendChild(contactInquiries);
    contactContent.appendChild(contactSocialMedia);

    // Inside page/body/contactContent/contactFeedback

    const contactFeedbackTitle = document.createElement('div');
    contactFeedbackTitle.classList.add('title');
    contactFeedbackTitle.innerHTML = `<span>Have something on your mind?</span> We couldn't care less.`;

    const contactFeedbackText = document.createElement('div');
    contactFeedbackText.classList.add('text');
    contactFeedbackText.textContent = `Try submitting feedback below. The button doesn't even work. Ha.`
    
    const contactFeedbackBtn = document.createElement('div');
    contactFeedbackBtn.classList.add('btn');
    contactFeedbackBtn.textContent = `Submit Feedback`;
    
    contactFeedback.appendChild(contactFeedbackTitle);
    contactFeedback.appendChild(contactFeedbackText);
    contactFeedback.appendChild(contactFeedbackBtn);

    // Inside page/body/contactContent/contactSocialMedia

    const contactSocialMediaTitle = document.createElement('div');
    contactSocialMediaTitle.classList.add('title');
    contactSocialMediaTitle.innerHTML = `Social<span>Media</span>`;

    const contactSocialMediaIcons = document.createElement('div');
    contactSocialMediaIcons.classList.add('icons');
    contactSocialMediaIcons.textContent = `Insert Icons Here`
    
    contactSocialMedia.appendChild(contactSocialMediaTitle);
    contactSocialMedia.appendChild(contactSocialMediaIcons);
};