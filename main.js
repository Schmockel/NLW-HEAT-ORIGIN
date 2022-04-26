const SocialMedia = {
  github: "Schmockel", //mudar aqui resultara com que a APIs abaixo (ChangeSocialMedia e getGihubProfileInfos) mudem as informações, use o user do github
  youtube: "",
  facebook: "",
  instagram: "danielpschmockel",
  twitter: "",
};

function ChangeSocialMedia() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");
    li.children[0].href = `https://www.${social}.com/${SocialMedia[social]}`;
  }
}

ChangeSocialMedia();

function getGihubProfileInfos () {
    const url = `https://api.github.com/users/${SocialMedia.github}`


    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userProfileGithub.href = data.html_url
        minhaFoto.src = data.avatar_url
        userLogin.textContent = data.login
    })

}

getGihubProfileInfos()