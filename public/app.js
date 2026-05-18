const API_MOVIES = "/api/movies";
const API_GENRES = "/api/genres";
const API_CUSTOMERS = "/api/customers";
const API_SALES = "/api/sales";

// =====================
// SALES
// =====================

// LOAD SALES
async function loadSales() {

  const res = await fetch(API_SALES);

  const sales = await res.json();

  const table =
    document.getElementById("salesTable");

  if (!table) return;

  table.innerHTML = "";


  sales.forEach(sale => {

    table.innerHTML += `
      <tr>

        <td>${sale._id}</td>

        <td>
          ${sale.customer_name}
        </td>

        <td>
          ${sale.movie_title}
        </td>

        <td>
          $${sale.price}
        </td>

        <td>
          ${sale.payment_method}
        </td>

        <td>

          <button
            class="btn btn-danger btn-sm"
            onclick="deleteSale(${sale._id})"
          >
            Delete
          </button>

        </td>

      </tr>
    `;
  });
}


// LOAD CUSTOMERS SELECT
async function loadCustomersSelect() {

  const res = await fetch(API_CUSTOMERS);

  const customers = await res.json();

  const select =
    document.getElementById("saleCustomer");

  if (!select) return;

  select.innerHTML = "";


  customers.forEach(customer => {

    select.innerHTML += `
      <option value="${customer._id}">

        ${customer.first_name}
        ${customer.last_name}

      </option>
    `;
  });
}


// LOAD MOVIES SELECT
async function loadMoviesSelect() {

  const res = await fetch(API_MOVIES);

  const movies = await res.json();

  const select =
    document.getElementById("saleMovie");

  if (!select) return;

  select.innerHTML = "";


  movies.forEach(movie => {

    select.innerHTML += `
      <option value="${movie._id}">
        ${movie.title}
      </option>
    `;
  });
}


// CREATE SALE
async function createSale() {

  const customerId = parseInt(
    document.getElementById("saleCustomer").value
  );

  const movieId = parseInt(
    document.getElementById("saleMovie").value
  );

  const price = parseFloat(
    document.getElementById("salePrice").value
  );


  await fetch(API_SALES, {

    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify({

      _id: Date.now(),

      customerId,
      movieId,

      day: new Date()
        .toISOString()
        .split("T")[0],

      app: "Web",

      payment_method: "Card",

      price,

      discount: 0,

      final_price: price

    })

  });

  loadSales();
}


async function deleteSale(id) {

  await fetch(`${API_SALES}/${id}`, {

    method: "DELETE"

  });

  loadSales();
}
// =====================
// CUSTOMERS
// =====================

async function loadCustomers() {

  const search =
    document.getElementById("customerSearch")?.value || "";

  const res = await fetch(
    `${API_CUSTOMERS}?search=${search}`
  );

  const customers = await res.json();

  const table =
    document.getElementById("customersTable");

  if (!table) return;

  table.innerHTML = "";

  customers.forEach(customer => {

    table.innerHTML += `
      <tr>

        <td>
          ${customer.first_name || ""}
          ${customer.last_name || ""}
        </td>

        <td>
          ${customer.email || ""}
        </td>

        <td>
          ${customer.contact?.city || "N/A"}
        </td>

        <td>
          ${customer.profile?.age || "N/A"}
        </td>

        <td>

          <button
            class="btn btn-danger btn-sm"
            onclick="deleteCustomer(${customer._id})"
          >
            Delete
          </button>

        </td>

      </tr>
    `;
  });
}


async function createCustomer() {

  const first_name =
    document.getElementById("firstName").value;

  const last_name =
    document.getElementById("lastName").value;

  const email =
    document.getElementById("email").value;

  const city =
    document.getElementById("city").value;

  const age = parseInt(
    document.getElementById("age").value
  );

  await fetch(API_CUSTOMERS, {

    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify({

      _id: Date.now(),

      first_name,
      last_name,
      email,

      contact: {
        city,
        country: "Mexico"
      },

      profile: {
        age,
        income: 0,
        gender: "N/A",
        job_type: "Student"
      }

    })

  });

  loadCustomers();
}


async function deleteCustomer(id) {

  await fetch(`${API_CUSTOMERS}/${id}`, {
    method: "DELETE"
  });

  loadCustomers();
}


// =====================
// GENRES
// =====================

async function loadGenres() {
  const res = await fetch(API_GENRES);

  const genres = await res.json();

  const table = document.getElementById("genresTable");

  if (!table) return;

  table.innerHTML = "";

  genres.forEach(g => {
    table.innerHTML += `
      <tr>
        <td>${g._id}</td>
        <td>${g.name}</td>

        <td>
          <button
            class="btn btn-danger btn-sm"
            onclick="deleteGenre(${g._id}, '${g.name}')"
          >
            Delete
          </button>
        </td>
      </tr>
    `;
  });
}


async function createGenre() {
  const name = document.getElementById("genreName").value;

  await fetch(API_GENRES, {
    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify({
      _id: Date.now(),
      name
    })
  });

  loadGenres();
}


async function deleteGenre(id, name) {
  const res = await fetch(`${API_GENRES}/${id}?name=${name}`, {
    method: "DELETE"
  });

  const data = await res.json();

  alert(data.message);

  loadGenres();
}


// =====================
// MOVIES
// =====================

async function loadMovies() {
  const search = document.getElementById("search")?.value || "";

  const res = await fetch(`${API_MOVIES}?search=${search}`);

  const movies = await res.json();

  const table = document.getElementById("moviesTable");

  if (!table) return;

  table.innerHTML = "";

  movies.forEach(movie => {
    table.innerHTML += `
      <tr>
        <td>${movie.title}</td>
        <td>${movie.year}</td>
        <td>${movie.genres.join(", ")}</td>

        <td>
          <button
            class="btn btn-danger btn-sm"
            onclick="deleteMovie(${movie._id})"
          >
            Delete
          </button>
        </td>
      </tr>
    `;
  });
}


async function loadGenresSelect() {
  const res = await fetch(API_GENRES);

  const genres = await res.json();

  const select = document.getElementById("genres");

  if (!select) return;

  select.innerHTML = "";

  genres.forEach(g => {
    select.innerHTML += `
      <option value="${g.name}">
        ${g.name}
      </option>
    `;
  });
}


async function createMovie() {
  const title = document.getElementById("title").value;

  const year = parseInt(document.getElementById("year").value);

  const price = parseFloat(document.getElementById("price").value);

  const genreSelect = document.getElementById("genres");

  const genres = [...genreSelect.selectedOptions]
    .map(o => o.value);

  await fetch(API_MOVIES, {
    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify({
      _id: Date.now(),
      title,
      year,
      list_price: price,
      genres
    })
  });

  loadMovies();
}


async function deleteMovie(id) {
  await fetch(`${API_MOVIES}/${id}`, {
    method: "DELETE"
  });

  loadMovies();
}

