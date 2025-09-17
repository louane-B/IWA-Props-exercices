# Les composants et les props.

## Les composants

Tu as déjà vu comment on importe les composants jusqu'à présent. Il suffit de faire 

```tsx
const TheComponent = () => {
  return (
    <h2>DuTexte</h2>
  )
}

export default TheComponent
```

Et l'importer ainsi

```tsx
import TheComponent from './components/TheComponent'

//html
<TheComponent />
//etc....
```

Cependant, comment faire pour passer des informations différentes d'un composant à l'autre? Il faut utiliser les props.

## Les props

Afin de faire ça proprement, je vais te donner une procédure qui rendra ton code sexy et facile à maintenir / tester.

1. Penser à ce que tu veux passer à ton composant enfant. Ici, on va passer un boolean. On va créer une interface avec ce boolean.
l'interface se nomme toujours prospInterface.

```tsx
interface PropsInterface 
{ 
  booleanValuePassedInParameter: boolean 
}
```

1. Maintenant qu'on sait ce qu'on veut importer, on doit le passer en paramètre dans la fonction de notre composant. L'interface nous permet d'améliorer la visbilité avec les opérations de déconstruction.

Sans l'interface.
```tsx
const TheComponent = (props: { booleanValuePassedInParameter: boolean }) => {
  return (
    <h2>Mon bool : {props.booleanValuePassedInParameter}</h2>
  )
}

export default TheComponent
```

Sans l'inteface, mais avec déstructuration.
```tsx
const TheComponent = ({booleanValuePassedInParameter}: { booleanValuePassedInParameter: boolean }) => {
  return (
    <h2>Mon bool : {booleanValuePassedInParameter}</h2>
  )
}

export default TheComponent
```

Avec l'interface. Je te laisse imaginer si tu avais plusieurs valeurs à passer dans tes props, tu aurais une très longue ligne dans tes paramètres de fonction de composant. L'interface améliore la lisibilité.
```tsx

interface PropsInterface 
{ 
  booleanValuePassedInParameter: boolean 
}

const TheComponent = ({booleanValuePassedInParameter}: PropsInterface) => {
  return (
    <h2>Mon bool : {booleanValuePassedInParameter}</h2>
  )
}

export default TheComponent
```

## Now what?

Dans le dossier /pages, tu peux y trouver les exercices. Ces derniers importent des composants qui sont dans le dossier components. Bon apprentissage!


## Est-ce que je peux tester tout ça?

OUI! Il te suffit d'installer l'extension playwright dans vs code et d'aller cliquer sur la petite fiole triangulaire qui apparaîtra à gauche. Cette dernière te permet de lancer les tests.

### ATTENTION

Il est possible que tu doive redémarrer visual studio code pour que ça fonctionne.

Lors du prermier lancement des tests, tu devras installer le fureteur chromium lite (pour les tests) avec une ligne de commande qui te sera mentionné dans le message d'erreur.

Finalement, je vais te montrer comment exécuter ces tests sur github de façon automatisée!
