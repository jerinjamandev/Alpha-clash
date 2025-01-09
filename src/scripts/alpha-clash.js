function play() {
    //    step 1:hide the home screen.to hide the screen add the hidden to the home section.
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');

    // show the playground
    const playSection = document.getElementById('play-ground');
    playSection.classList.remove('hidden');
}







