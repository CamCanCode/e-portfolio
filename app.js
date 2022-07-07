// template_48ylnpe
// service_qlkhxiq
// Q_RyNeu2jmf94M_0x

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

