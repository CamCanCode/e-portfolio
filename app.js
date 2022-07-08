let contrastToggle = false;

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
      document.body.classList += " dark-theme"
    }
    else {
      document.body.classList.remove("dark-theme")
    }
  }

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += ' modal__overlay--visible';
    emailjs
        .sendForm(
            'service_qlkhxiq',
            'template_48ylnpe',
            event.target,
            'Q_RyNeu2jmf94M_0x'
        ).then(() => {
            loading.classList.remove('modal__overlay--visible');
            success.classList += ' modal__overlay--visible';
        }).catch(() => {
            loading.classList.remove('modal__overlay--visible');
            alert(
                'the email service is temporarily unavailable. Please contact me directly on email - vandervalk.cameron@gmail.com'
            );

        });

};




let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove('modal__open');
    };
    isModalOpen = true;
    document.body.classList += ' modal__open';
};