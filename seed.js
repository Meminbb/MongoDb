require("dotenv").config();

const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGO_URI);

async function seed() {
  try {
    await client.connect();

    console.log("Connected!");

    const db = client.db("DB");


    // =====================
    // GENRES (5)
    // =====================
    const genres = [
      { _id: 1, name: "Action" },
      { _id: 2, name: "Sci-Fi" },
      { _id: 3, name: "Drama" },
      { _id: 4, name: "Comedy" },
      { _id: 5, name: "Thriller" }
    ];

    // =====================
    // MOVIES (20)
    // =====================
    const movies = [
      {
        _id: 101,
        title: "Interstellar",
        year: 2014,
        runtime: 169,
        list_price: 12.99,
        views: 12000,
        summary: "Space exploration mission to save humanity",
        genres: ["Sci-Fi", "Drama"],
        cast: ["Matthew McConaughey", "Anne Hathaway"]
      },
      {
        _id: 102,
        title: "Inception",
        year: 2010,
        runtime: 148,
        list_price: 11.99,
        views: 15000,
        summary: "Dream manipulation heist",
        genres: ["Sci-Fi", "Action"],
        cast: ["Leonardo DiCaprio"]
      },
      {
        _id: 103,
        title: "The Dark Knight",
        year: 2008,
        runtime: 152,
        list_price: 10.99,
        views: 20000,
        summary: "Batman vs Joker",
        genres: ["Action", "Thriller"],
        cast: ["Christian Bale", "Heath Ledger"]
      },
      {
        _id: 104,
        title: "The Matrix",
        year: 1999,
        runtime: 136,
        list_price: 9.99,
        views: 18000,
        summary: "Simulation reality",
        genres: ["Sci-Fi", "Action"],
        cast: ["Keanu Reeves"]
      },
      {
        _id: 105,
        title: "Joker",
        year: 2019,
        runtime: 122,
        list_price: 13.99,
        views: 17000,
        summary: "Origin of Joker",
        genres: ["Drama", "Thriller"],
        cast: ["Joaquin Phoenix"]
      },
      {
        _id: 106,
        title: "Avatar",
        year: 2009,
        runtime: 162,
        list_price: 14.99,
        views: 22000,
        summary: "Pandora adventure",
        genres: ["Sci-Fi", "Action"],
        cast: ["Sam Worthington"]
      },
      {
        _id: 107,
        title: "Titanic",
        year: 1997,
        runtime: 195,
        list_price: 9.99,
        views: 25000,
        summary: "Love story on Titanic",
        genres: ["Drama"],
        cast: ["Leonardo DiCaprio"]
      },
      {
        _id: 108,
        title: "Avengers Endgame",
        year: 2019,
        runtime: 181,
        list_price: 15.99,
        views: 30000,
        summary: "Final battle vs Thanos",
        genres: ["Action", "Sci-Fi"],
        cast: ["Robert Downey Jr"]
      },
      {
        _id: 109,
        title: "Iron Man",
        year: 2008,
        runtime: 126,
        list_price: 10.99,
        views: 21000,
        summary: "Tony Stark becomes Iron Man",
        genres: ["Action", "Sci-Fi"],
        cast: ["Robert Downey Jr"]
      },
      {
        _id: 110,
        title: "Spider-Man",
        year: 2002,
        runtime: 121,
        list_price: 9.99,
        views: 19000,
        summary: "Peter Parker origin",
        genres: ["Action"],
        cast: ["Tobey Maguire"]
      },
      {
        _id: 111,
        title: "Doctor Strange",
        year: 2016,
        runtime: 115,
        list_price: 12.99,
        views: 16000,
        summary: "Magic and multiverse",
        genres: ["Sci-Fi", "Action"],
        cast: ["Benedict Cumberbatch"]
      },
      {
        _id: 112,
        title: "The Wolf of Wall Street",
        year: 2013,
        runtime: 180,
        list_price: 11.99,
        views: 14000,
        summary: "Stock market chaos",
        genres: ["Drama"],
        cast: ["Leonardo DiCaprio"]
      },
      {
        _id: 113,
        title: "Fight Club",
        year: 1999,
        runtime: 139,
        list_price: 10.99,
        views: 17500,
        summary: "Underground fight club",
        genres: ["Drama", "Thriller"],
        cast: ["Brad Pitt"]
      },
      {
        _id: 114,
        title: "Deadpool",
        year: 2016,
        runtime: 108,
        list_price: 12.99,
        views: 15500,
        summary: "Antihero mercenary",
        genres: ["Action", "Comedy"],
        cast: ["Ryan Reynolds"]
      },
      {
        _id: 115,
        title: "The Hangover",
        year: 2009,
        runtime: 100,
        list_price: 8.99,
        views: 13000,
        summary: "Vegas chaos",
        genres: ["Comedy"],
        cast: ["Bradley Cooper"]
      },
      {
        _id: 116,
        title: "Shrek",
        year: 2001,
        runtime: 90,
        list_price: 7.99,
        views: 22000,
        summary: "Ogre fairy tale",
        genres: ["Comedy"],
        cast: ["Mike Myers"]
      },
      {
        _id: 117,
        title: "Toy Story",
        year: 1995,
        runtime: 81,
        list_price: 6.99,
        views: 24000,
        summary: "Toys come alive",
        genres: ["Comedy", "Drama"],
        cast: ["Tom Hanks"]
      },
      {
        _id: 118,
        title: "Gladiator",
        year: 2000,
        runtime: 155,
        list_price: 10.99,
        views: 19500,
        summary: "Roman revenge story",
        genres: ["Action", "Drama"],
        cast: ["Russell Crowe"]
      },
      {
        _id: 119,
        title: "The Social Network",
        year: 2010,
        runtime: 120,
        list_price: 9.99,
        views: 14500,
        summary: "Facebook origin",
        genres: ["Drama"],
        cast: ["Jesse Eisenberg"]
      },
      {
        _id: 120,
        title: "Dune",
        year: 2021,
        runtime: 155,
        list_price: 14.99,
        views: 18500,
        summary: "Desert planet politics",
        genres: ["Sci-Fi", "Drama"],
        cast: ["Timothée Chalamet"]
      }
    ];

    // =====================
    // CUSTOMERS (15)
    // =====================
    const customers = [
  {
    _id: 1,
    first_name: "Kevin",
    last_name: "Francisco",
    email: "kevin@test.com",
    contact: {
      city: "Monterrey",
      country: "Mexico"
    },
    profile: {
      age: 21,
      income: 25000,
      gender: "M",
      job_type: "Student"
    }
  },

  {
    _id: 2,
    first_name: "Ana",
    last_name: "Lopez",
    email: "ana@test.com",
    contact: {
      city: "CDMX",
      country: "Mexico"
    },
    profile: {
      age: 24,
      income: 32000,
      gender: "F",
      job_type: "Designer"
    }
  },

  {
    _id: 3,
    first_name: "Carlos",
    last_name: "Martinez",
    email: "carlos@test.com",
    contact: {
      city: "Guadalajara",
      country: "Mexico"
    },
    profile: {
      age: 29,
      income: 40000,
      gender: "M",
      job_type: "Developer"
    }
  },

  {
    _id: 4,
    first_name: "Sofia",
    last_name: "Ramirez",
    email: "sofia@test.com",
    contact: {
      city: "Monterrey",
      country: "Mexico"
    },
    profile: {
      age: 22,
      income: 28000,
      gender: "F",
      job_type: "Architect"
    }
  },

  {
    _id: 5,
    first_name: "Luis",
    last_name: "Hernandez",
    email: "luis@test.com",
    contact: {
      city: "Puebla",
      country: "Mexico"
    },
    profile: {
      age: 31,
      income: 45000,
      gender: "M",
      job_type: "Engineer"
    }
  },

  {
    _id: 6,
    first_name: "Maria",
    last_name: "Gonzalez",
    email: "maria@test.com",
    contact: {
      city: "CDMX",
      country: "Mexico"
    },
    profile: {
      age: 27,
      income: 36000,
      gender: "F",
      job_type: "Teacher"
    }
  },

  {
    _id: 7,
    first_name: "Diego",
    last_name: "Torres",
    email: "diego@test.com",
    contact: {
      city: "Guadalajara",
      country: "Mexico"
    },
    profile: {
      age: 26,
      income: 39000,
      gender: "M",
      job_type: "Developer"
    }
  },

  {
    _id: 8,
    first_name: "Valeria",
    last_name: "Castro",
    email: "valeria@test.com",
    contact: {
      city: "Merida",
      country: "Mexico"
    },
    profile: {
      age: 23,
      income: 30000,
      gender: "F",
      job_type: "Designer"
    }
  },

  {
    _id: 9,
    first_name: "Jorge",
    last_name: "Navarro",
    email: "jorge@test.com",
    contact: {
      city: "Monterrey",
      country: "Mexico"
    },
    profile: {
      age: 35,
      income: 52000,
      gender: "M",
      job_type: "Manager"
    }
  },

  {
    _id: 10,
    first_name: "Fernanda",
    last_name: "Mendoza",
    email: "fernanda@test.com",
    contact: {
      city: "Queretaro",
      country: "Mexico"
    },
    profile: {
      age: 28,
      income: 41000,
      gender: "F",
      job_type: "Lawyer"
    }
  },

  {
    _id: 11,
    first_name: "Ricardo",
    last_name: "Silva",
    email: "ricardo@test.com",
    contact: {
      city: "Tijuana",
      country: "Mexico"
    },
    profile: {
      age: 33,
      income: 47000,
      gender: "M",
      job_type: "Doctor"
    }
  },

  {
    _id: 12,
    first_name: "Elena",
    last_name: "Vega",
    email: "elena@test.com",
    contact: {
      city: "Cancun",
      country: "Mexico"
    },
    profile: {
      age: 25,
      income: 34000,
      gender: "F",
      job_type: "Photographer"
    }
  },

  {
    _id: 13,
    first_name: "Andres",
    last_name: "Ortega",
    email: "andres@test.com",
    contact: {
      city: "Leon",
      country: "Mexico"
    },
    profile: {
      age: 30,
      income: 43000,
      gender: "M",
      job_type: "Analyst"
    }
  },

  {
    _id: 14,
    first_name: "Camila",
    last_name: "Ruiz",
    email: "camila@test.com",
    contact: {
      city: "Toluca",
      country: "Mexico"
    },
    profile: {
      age: 24,
      income: 31000,
      gender: "F",
      job_type: "Marketing"
    }
  },

  {
    _id: 15,
    first_name: "Miguel",
    last_name: "Reyes",
    email: "miguel@test.com",
    contact: {
      city: "Monterrey",
      country: "Mexico"
    },
    profile: {
      age: 32,
      income: 49000,
      gender: "M",
      job_type: "Consultant"
    }
  }
];

    // =====================
    // SALES (20)
    // =====================
    const sales = Array.from({ length: 20 }).map((_, i) => ({
      _id: 1000 + i,
      customerId: (i % 15) + 1,
      movieId: 101 + (i % 20),
      day: `2026-05-${(i % 28) + 1}`,
      app: "Web",
      payment_method: "Card",
      price: 10 + (i % 5),
      discount: i % 3 === 0 ? 10 : 0,
      final_price: 9 + (i % 5)
    }));

    // =====================
    // INSERT ALL
    // =====================
    await db.collection("genres").deleteMany({});
    await db.collection("movies").deleteMany({});
    await db.collection("customers").deleteMany({});
    await db.collection("sales").deleteMany({});

    await db.collection("genres").insertMany(genres);
    await db.collection("movies").insertMany(movies);
    await db.collection("customers").insertMany(customers);
    await db.collection("sales").insertMany(sales);

    console.log("✅ Database seeded successfully!");
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

seed();