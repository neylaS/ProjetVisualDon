// Les tags dont nous avons besoin pour afficher les artistes
const paysList = document.querySelector('#pays')
const paysListItemTemplate = document.querySelector('#pays-template')

// Affiche un artiste dans la liste
function renderArtist(artist) {
  const paysList = paysListItemTemplate.content.cloneNode(true) // true pour cloner également les enfants du node
  // On modifie le lien pour lui mettre un href du style "#pays-id"
  paysList.querySelector('a').href = '#pays' + pays.id
  // On set la bonne image
  //paysList.querySelector('img').src = pays.image_url
  //paysList.querySelector('.pays-list-item-title').innerText = pays.name
  //artistList.append(paysList)
}

// Itère sur toutes les artistes
function renderArtists(artists) {
  // On vide la liste
  artistList.replaceChildren()

  // On itère sur le tableau pour les insérer dans la liste
  for(const artist of artists) {
    renderArtist(artist)
  }
}

// Charge les artistes et itère dessus
async function renderArtistsSection() {
  const artists = await getArtists()
  renderArtists(artists)
}

export default renderArtistsSection