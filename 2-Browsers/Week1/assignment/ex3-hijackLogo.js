function hijackGoogleLogo() {
  // Try to find the logo image by alt text
  const logo = document.querySelector('img[alt="Google"]');

  if (logo) {
    const hyfLogoUrl = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
    logo.src = hyfLogoUrl;
    logo.srcset = hyfLogoUrl;
    logo.style.width = '200px'; // optional styling
  } else {
    console.log('Google logo not found!');
  }
}

hijackGoogleLogo();
