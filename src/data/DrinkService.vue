<script>
  const drinks = [
    {
      id: 1,
      name: 'Pintje',
      description: "Simpel, dorstlessend, traditioneel. Jupiler, apache-helicopters weten waarom.",
      img: 'pintje.jpg',
      ingredients: ['water', 'hop', '???']
    },
    {
      id: 2,
      name: 'Duvel',
      description: "'Pff pintjes zijn voor de zwakkelingen. Ik drink enkel Duvel, zoals échte venten' - De typische loser die direct plat gaat.",
      img: 'duvel.jpg',
      ingredients: ['water', 'thee']
    },
    {
      id: 3,
      name: 'Thee',
      description: "Warm water met een smaakje. Standaard: Rooibos! Voor andere opties (honeybush, earl grey, iets men mango): come see me.",
      img: 'tea.jpeg',
      ingredients: ['water', 'thee']
    },
    {
      id: 4,
      name: 'Koffie',
      description: "'t Is echt héél brakke (oplos)koffie, maar meh caffeine I guess.",
      img: 'coffee.jpeg',
      ingredients: ['water', 'koffie']
    },
    {
      id: 5,
      name: 'Witte wijn',
      description: "Als de wijn gaet in den man, Leyt de wijsheyt in de kan.",
      img: 'white-wine.jpg',
      ingredients: ['druivennat']
    },
    {
      id: 6,
      name: 'Rode wijn',
      description: "Zoals witte wijn, maar beter.",
      img: 'red-wine.jpeg',
      ingredients: ['druivennat', 'druivenschil']
    },
    {
      id: 7,
      name: 'Cava',
      description: "Bubbels! Nee Lisa sorry, 't is geen echte champagne.",
      img: 'cava.png',
      ingredients: ['???']
    },
    {
      id: 8,
      name: 'Mimosa',
      description: "Het sociaal aanvaardbare drankje om 11u 's morgens.",
      img: 'mimosa.jpg',
      ingredients: ['Cava', 'Sinaasappelsap']
    },
    {
      id: 9,
      name: 'Wodka Orange',
      description: "Voor dat extra beetje vitamine C.",
      img: 'screwdriver.jpg',
      ingredients: ['Wodka', 'Sinaasappelsap']
    },
    {
      id: 10,
      name: 'Cuba Libre',
      description: "",
      img: 'cuba-libre.jpg',
      ingredients: ['Bruine rum', 'Cola']
    },
    {
      id: 11,
      name: 'Gin Tonic',
      description: "Aah, de hype van 2014. Maar volgens HLN zet deze trend zich ook komende zomer weer verder!",
      img: 'gin-tonic.jpg',
      ingredients: ['Gin', 'Tonic']
    },
    {
      id: 12,
      name: 'Mojito',
      description: "",
      img: 'mojito.jpg',
      ingredients: ['Witte rum', 'Munt', 'Rietsuiker', 'Limoen', 'Bruiswater']
    },
    {
      id: 13,
      name: 'Caprioska',
      description: "Niet te verwarren met een Caipirinha.",
      img: 'caprioska.jpg',
      ingredients: ['Wodka', 'Limoen', 'Rietsuiker']
    },
    {
      id: 14,
      name: 'Caipirinha',
      description: "Niet te verwarren met een Caprioska.",
      img: 'caipirinha.jpeg',
      ingredients: ['Witte rum', 'Limoen', 'Rietsuiker']
    },
    {
      id: 15,
      name: 'Margarita',
      description: "Niet de pizza.",
      img: 'margarita.jpg',
      ingredients: ['Tequila', 'Triple sec', 'Limoen']
    },
    {
      id: 16,
      name: 'Long Island Iced Tea',
      description: "Voor zij die van plan zijn te blijven slapen. Bestaat uit 40% alcohol en 60% kater.",
      img: 'long-island-ice-tea.jpeg',
      ingredients: ['Wodka', 'Gin', 'Rum', 'Tequila', 'Triple Sec', 'Citroen', 'Cola']
    },
    {
      id: 17,
      name: 'Raspberry Delight',
      description: "Dit bevat fruit. Kan jij raden welk?",
      img: 'delight.jpg',
      ingredients: ['Rum', 'Triple Sec', 'Citroensap', 'Sinaasappelsap', 'Frambozen aka Raspberry']
    },
    {
      id: 18,
      name: 'Hazel Cream',
      description: "Laat ons eerlijk zijn: dit is gewoon een dessert met drank in. Caloriebom van het genre: hierna 2 dagen best niks meer eten om te compenseren.",
      img: 'hazel-cream.jpg',
      ingredients: ['Wodka', 'Room', 'Kahlua', 'Frangelico']
    }
  ];
  export default {
    findAll() {
      return drinks;
    },
    findById(id) {
      return drinks.filter(drink => drink.id === id)[0];
    }
  };
</script>
