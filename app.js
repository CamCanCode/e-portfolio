// template_48ylnpe
// service_qlkhxiq
// Q_RyNeu2jmf94M_0x

function contact(event) {
    event.preventDefault();
    // emailjs
    // .sendForm (
    //     'service_qlkhxiq',
    //     'template_48ylnpe',
    //     event.target,
    //     'Q_RyNeu2jmf94M_0x'
    // ).then (() => {
    //     console.log('this worked1')
    // });
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += ' modal__overlay--visible' 
    setTimeout(() => {
        console.log('it worked 1')
    }, 500);
};

