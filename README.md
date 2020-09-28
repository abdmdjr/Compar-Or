# compar-or

> Gold Coin Compare

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## Documentation
Structure d'un document en base de données :
```bash
    _id: 5f0b5d3d35cf077*********
    title: "Vreneli 20 Francs Suisse"
    slug: "vreneli-20-francs-suisse"
    gr: "5,81 grammes d'or pur"
    prices: Object
        Gold Avenue: Array
            0: 309.12
            1: 12.17
            2: 52
            3: 361.12
            4: "https://www.goldavenue.com/fr/acheter/or/produit/piece-d-or-pur-900-0-..."
        Lingor: Array
            0: 314.8
            1: "N/C"
            2: 19.9
            3: "https://www.lingor.fr/piece-or-20-francs-suisse.html"
        Au Coffre: Array
            0: 349
            1: 61.25
            2: 19.9
            3: 368.9
            4: "https://www.aucoffre.com/pieces/franc-suisse/20-francs-suisse/produits..."
    img: "/img/vreneli20.png"
```
```bash
Signification index array dans l'objet "prices" :
    0: Prix de vente
    1: Prime
    2: Livraison
    3: Prix de vente + livraison
    4: "url de la pièce"
```