const recuperaLibri = async function () {
  try {
    let libri = await fetch("https://striveschool-api.herokuapp.com/books");
    if (libri.ok) {
      let data = await libri.json();
      let contenitore = document.querySelector("#container-cards");
      let cardNumber = 1;
      data.forEach((book) => {
        cardNumber++;
        contenitore.innerHTML =
          contenitore.innerHTML +
          `  <div id="${cardNumber}" class="card col-5 col-md-3 m-3 p-0">
                <img src="${book.img}" class="img-fluid" style="height: 60%" alt="Foto Libro">
                <div class="card-body p-3 d-flex flex-column justify-content-between ">
                  <h5 class="card-title">${book.title}</h5>
                  <h3 class="card-text"> ${book.price} €</h3>
                  <a class="btn btn-primary" onclick="removeCard(event)">NASCONDI</a>
                </div>
              </div> `;
      });
    } else {
      console.log("Qualcosa non ha funzionato");
    }
  } catch (error) {
    console.log(error);
  }
};

function removeCard(e) {
  e.target.parentElement.parentElement.style.display = "none";
}

recuperaLibri();
