// Instructions
// John has just signed in to your website and you want to welcome him.

// Create a Bootstrap Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.

let userName = (signIn) => {
    let name = document.getElementById('name');
    name.append(signIn);
    let picture = document.getElementById('pic');
    picture.src ="./img/cat-1.png";
    // loginPicture.append(picture);
}
userName("John");

