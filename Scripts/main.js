document.querySelector('.Intro').addEventListener('click', () => {
    document.querySelector('.selected').classList.remove('course', 'hte');
    document.querySelector('iframe').setAttribute('src', 'https://www.youtube.com/embed/bFTIQDCvIrc?si=V-hL2oqqYORy67x_');
});
document.querySelector('.course-butt').addEventListener('click', () => {
    document.querySelector('.selected').classList.add('course');
    document.querySelector('.selected').classList.remove('hte');

    document.querySelector('iframe').setAttribute('src', 'https://www.youtube.com/embed/EuDI3utWDoU?si=ziP-DjfmSC6aSoOa');
});
document.querySelector('.earn').addEventListener('click', () => {
    document.querySelector('.selected').classList.add('hte');
    document.querySelector('.selected').classList.remove('course');

    document.querySelector('iframe').setAttribute('src', 'https://www.youtube.com/embed/NW1MjGGlq9k?si=VHdxthVuy7wK0ZYd');
});
