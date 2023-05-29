import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Icon } from '@iconify/react';
import "./home_quiz_dabo.css"
const Home = () => {
    const QUIZS = [
        {
            question: 'animal',
            answer: 'animal'
        },
        {
            question: 'bird',
            answer: 'oiseau'
        },
        {
            question: 'dog',
            answer: 'chien'
        },
        {
            question: 'fish',
            answer: 'poisson'
        },
        {
            question: 'food',
            answer: 'nourriture'
        },
        {
            question: 'horse',
            answer: 'cheval'
        },
        {
            question: 'tail',
            answer: 'queue'
        },
        {
            question: 'light',
            answer: 'lumière'
        },
        {
            question: 'sun',
            answer: 'soleil'
        },
        {
            question: 'snow',
            answer: 'neige'
        },
        {
            question: 'boat',
            answer: 'bateau'
        },
        {
            question: 'car',
            answer: 'voiture'
        },
        {
            question: 'door',
            answer: 'porte'
        },
        {
            question: 'course',
            answer: 'terrain'
        },
        {
            question: 'center',
            answer: 'centre'
        },
        {
            question: 'city',
            answer: 'ville'
        },
        {
            question: 'farm',
            answer: 'ferme'
        },
        {
            question: 'home',
            answer: 'maison'
        },
        {
            question: 'house',
            answer: 'maison'
        },
        {
            question: 'room',
            answer: 'chambre'
        },
        {
            question: 'bed',
            answer: 'lit'
        },
        {
            question: 'bed',
            answer: 'lit'
        },
        {
            question: 'plane',
            answer: 'avion'
        },
        {
            question: 'road',
            answer: 'route'
        },
        {
            question: 'way',
            answer: 'chemin'
        },
        {
            question: 'street',
            answer: 'rue'
        },
        {
            question: 'surface',
            answer: 'surface'
        },
        {
            question: 'school',
            answer: 'école'
        },
        {
            question: 'town',
            answer: 'village'
        },
        {
            question: 'travel',
            answer: 'voyage'
        },
        {
            question: 'port',
            answer: 'port'
        },
        {
            question: 'tree',
            answer: 'arbre'
        },
        {
            question: 'sea',
            answer: 'mer'
        },
        {
            question: 'ship',
            answer: 'navire'
        },
        {
            question: 'water',
            answer: 'eau'
        },
        {
            question: 'river',
            answer: 'rivière'
        },
        {
            question: 'land',
            answer: 'terre'
        },
        {
            question: 'island',
            answer: 'île'
        },
        {
            question: 'moon',
            answer: 'lune'
        },
        {
            question: 'mountain',
            answer: 'montagne'
        },
        {
            question: 'plant',
            answer: 'plante'
        },
        {
            question: 'star',
            answer: 'étoile'
        },
        {
            question: 'wind',
            answer: 'vent'
        },
        {
            question: 'fire',
            answer: 'feu'
        },
        {
            question: 'wood',
            answer: 'bois'
        },
        {
            question: 'ground',
            answer: 'sol'
        },
        {
            question: 'boy',
            answer: 'garçon'
        },
        {
            question: 'children',
            answer: 'enfants'
        },
        {
            question: 'family',
            answer: 'famille'
        },
        {
            question: 'friend',
            answer: 'ami'
        },
        {
            question: 'girl',
            answer: 'fille'
        },
        {
            question: 'group',
            answer: 'groupe'
        },
        {
            question: 'man',
            answer: 'homme'
        },
        {
            question: 'men',
            answer: 'hommes'
        },
        {
            question: 'mother',
            answer: 'mère'
        },
        {
            question: 'people',
            answer: 'gens'
        },
        {
            question: 'person',
            answer: 'personne'
        },
        {
            question: 'king',
            answer: 'roi'
        },
        {
            question: 'body',
            answer: 'corps'
        },
        {
            question: 'eye',
            answer: 'yeux'
        },
        {
            question: 'face',
            answer: 'visage'
        },
        {
            question: 'feet',
            answer: 'les pieds'
        },
        {
            question: 'head',
            answer: 'tête'
        },
        {
            question: 'foot',
            answer: 'le pied'
        },
        {
            question: 'age',
            answer: 'age'
        },
        {
            question: 'world',
            answer: 'monde'
        },
        {
            question: 'year',
            answer: 'année'
        },
        {
            question: 'West',
            answer: 'l’ouest'
        },
        {
            question: 'Earth',
            answer: 'la Terre'
        },
        {
            question: 'North',
            answer: 'le nord'
        },
        {
            question: 'East',
            answer: 'l’est'
        },
        {
            question: 'country',
            answer: 'pays'
        },
        {
            question: 'South',
            answer: 'le sud'
        },
        {
            question: 'day',
            answer: 'jour'
        },
        {
            question: 'morning',
            answer: 'matin'
        },
        {
            question: 'night',
            answer: 'nuit'
        },
        {
            question: 'thing',
            answer: 'chose'
        },
        {
            question: 'book',
            answer: 'livre'
        },
        {
            question: 'thing',
            answer: 'chose'
        },
        {
            question: 'box',
            answer: 'boite'
        },
        {
            question: 'class',
            answer: 'classe'
        },
        {
            question: 'color',
            answer: 'couleur'
        },
        {
            question: 'example',
            answer: 'exemple'
        },
        {
            question: 'file',
            answer: 'dossier'
        },
        {
            question: 'form',
            answer: 'forme'
        },
        {
            question: 'line',
            answer: 'ligne'
        },
        {
            question: 'machine',
            answer: 'machine'
        },
        {
            question: 'map',
            answer: 'carte'
        },
        {
            question: 'music',
            answer: 'musique'
        },
        {
            question: 'noun',
            answer: 'nom'
        },
        {
            question: 'figure',
            answer: 'chiffre'
        },
        {
            question: 'air',
            answer: 'air'
        },
        {
            question: 'area',
            answer: 'zone'
        },
        {
            question: 'base',
            answer: 'base'
        },
        {
            question: 'number',
            answer: 'numéro'
        },
        {
            question: 'game',
            answer: 'jeu'
        },
        {
            question: 'list',
            answer: 'liste'
        },
        {
            question: 'object',
            answer: 'objet'
        },
        {
            question: 'order',
            answer: 'commande'
        },
        {
            question: 'paper',
            answer: 'papier'
        },
        {
            question: 'letter',
            answer: 'lettre'
        },
        {
            question: 'story',
            answer: 'histoire'
        },
        {
            question: 'pattern',
            answer: 'modèle'
        },
        {
            question: 'picture',
            answer: 'image'
        },
        {
            question: 'piece',
            answer: 'pièce'
        },
        {
            question: 'towel',
            answer: 'serviette'
        },
        {
            question: 'place',
            answer: 'place'
        },
        {
            question: 'point',
            answer: 'point'
        },
        {
            question: 'name',
            answer: 'nom'
        },
        {
            question: 'word',
            answer: 'mot'
        },
        {
            question: 'round',
            answer: 'rond'
        },
        {
            question: 'rule',
            answer: 'règle'
        },
        {
            question: 'science',
            answer: 'science'
        },
        {
            question: 'sentence',
            answer: 'phrase'
        },
        {
            question: 'song',
            answer: 'chanson'
        },
        {
            question: 'sound',
            answer: 'son'
        },
        {
            question: 'state',
            answer: 'etat'
        },
        {
            question: 'step',
            answer: 'pas'
        },
        {
            question: 'table',
            answer: 'table'
        },
        {
            question: 'test',
            answer: 'test'
        },
        {
            question: 'power',
            answer: 'pouvoir'
        },
        {
            question: 'product',
            answer: 'produit'
        },
        {
            question: 'part',
            answer: 'part'
        },
        {
            question: 'voice',
            answer: 'voix'
        },
        {
            question: 'war',
            answer: 'guerre'
        },
        {
            question: 'wheel',
            answer: 'roue'
        },
        {
            question: 'work',
            answer: 'travail'
        },
        {
            question: 'measure',
            answer: 'mesure'
        },
        {
            question: 'inch',
            answer: 'pouce'
        },
        {
            question: 'time',
            answer: 'temps'
        },
        {
            question: 'unit',
            answer: 'unité'
        },
        {
            question: 'week',
            answer: 'semaine'
        },
        {
            question: 'money',
            answer: 'argent'
        },
        {
            question: 'minute',
            answer: 'minute'
        },
        {
            question: 'hour',
            answer: 'heure'
        },
        {
            question: 'problem',
            answer: 'problème'
        },
        {
            question: 'beauty',
            answer: 'beauté'
        },
        {
            question: 'size',
            answer: 'taille'
        },
        {
            question: 'side',
            answer: 'côté'
        },
        {
            question: 'shape',
            answer: 'forme'
        },
        {
            question: 'heat',
            answer: 'chaleur'
        },
        {
            question: 'thought',
            answer: 'pensée'
        },
        {
            question: 'mind',
            answer: 'esprit'
        },
        {
            question: 'question',
            answer: 'question'
        },
        {
            question: 'notice',
            answer: 'remarque'
        },
        {
            question: 'help',
            answer: 'aide'
        },
        {
            question: 'idea',
            answer: 'idée'
        },
        {
            question: 'interest',
            answer: 'intérêt'
        },
        {
            question: 'love',
            answer: 'amour'
        },
        {
            question: 'force',
            answer: 'force'
        },
        {
            question: 'end',
            answer: 'fin'
        },
        {
            question: 'fact',
            answer: 'un fait'
        },
        {
            question: 'blue',
            answer: 'bleu'
        },
        {
            question: 'black',
            answer: 'noir'
        },
        {
            question: 'dark',
            answer: 'sombre'
        },
        {
            question: 'gold',
            answer: 'or'
        },
        {
            question: 'green',
            answer: 'vert'
        },
        {
            question: 'red',
            answer: 'rouge'
        },
        {
            question: 'white',
            answer: 'blanc'
        },
        {
            question: 'five',
            answer: 'cing'
        },
        {
            question: 'four',
            answer: 'quatre'
        },
        {
            question: 'first',
            answer: 'premier'
        },
        {
            question: 'hundred',
            answer: 'cent'
        },
        {
            question: 'second',
            answer: 'second'
        },
        {
            question: 'six',
            answer: 'six'
        },
        {
            question: 'ten',
            answer: 'dix'
        },
        {
            question: 'thousand',
            answer: 'mille'
        },
        {
            question: 'three',
            answer: 'trois'
        },
        {
            question: 'best',
            answer: 'meilleur'
        },
        {
            question: 'better',
            answer: 'mieux'
        },
        {
            question: 'big',
            answer: 'grand'
        },
        {
            question: 'large',
            answer: 'large'
        },
        {
            question: 'short',
            answer: 'court'
        },
        {
            question: 'little',
            answer: 'peu'
        },
        {
            question: 'long',
            answer: 'long'
        },
        {
            question: 'old',
            answer: 'vieux'
        },
        {
            question: 'young',
            answer: 'jeune'
        },
        {
            question: 'busy',
            answer: 'occupé'
        },
        {
            question: 'clear',
            answer: 'clair'
        },
        {
            question: 'common',
            answer: 'commun'
        },
        {
            question: 'complete',
            answer: 'complet'
        },
        {
            question: 'correctable',
            answer: 'corrigible'
        },
        {
            question: 'deep',
            answer: 'profond'
        },
        {
            question: 'direct',
            answer: 'direct'
        },
        {
            question: 'done',
            answer: 'terminé'
        },
        {
            question: 'dry',
            answer: 'sec'
        },
        {
            question: 'far ',
            answer: 'loin'
        },
        {
            question: 'fast',
            answer: 'rapide'
        },
        {
            question: 'few',
            answer: 'peu'
        },
        {
            question: 'final',
            answer: 'final'
        },
        {
            question: 'fine',
            answer: 'bien'
        },
        {
            question: 'free',
            answer: 'libre'
        },
        {
            question: 'full',
            answer: 'plein'
        },
        {
            question: 'good',
            answer: 'bon'
        },
        {
            question: 'great',
            answer: 'génial'
        },
        {
            question: 'half',
            answer: 'demi'
        },
        {
            question: 'hard',
            answer: 'difficile'
        },
        {
            question: 'hot',
            answer: 'chaud'
        },
        {
            question: 'kind',
            answer: 'gentil'
        },
        {
            question: 'last',
            answer: 'dernier'
        },
        {
            question: 'late',
            answer: 'en retard'
        },
        {
            question: 'less',
            answer: 'moins'
        },
        {
            question: 'low',
            answer: 'faible'
        },
        {
            question: 'new',
            answer: 'nouveau'
        },
        {
            question: 'next',
            answer: 'suivant'
        },
        {
            question: 'numeral',
            answer: 'numéral'
        },
        {
            question: 'other',
            answer: 'autre'
        },
        {
            question: 'plain',
            answer: 'ordinaire'
        },
        {
            question: 'possible',
            answer: 'possible'
        },
        {
            question: 'quick',
            answer: 'rapide'
        },
        {
            question: 'ready',
            answer: 'prêt'
        },
        {
            question: 'real',
            answer: 'réel'
        },
        {
            question: 'rich',
            answer: 'riche'
        },
        {
            question: 'right',
            answer: 'droit'
        },
        {
            question: 'same',
            answer: 'même'
        },
        {
            question: 'several',
            answer: 'nombreux'
        },
        {
            question: 'simple',
            answer: 'simple'
        },
        {
            question: 'slow',
            answer: 'lent'
        },
        {
            question: 'small',
            answer: 'petit'
        },
        {
            question: 'special',
            answer: 'spécial'
        },
        {
            question: 'strong',
            answer: 'fort'
        },
        {
            question: 'top',
            answer: 'haut'
        },
        {
            question: 'usual',
            answer: 'habituel'
        },
        {
            question: 'warm',
            answer: 'chaud'
        },
        {
            question: 'well',
            answer: 'bien'
        },
        {
            question: 'whole',
            answer: 'entier'
        },
        {
            question: 'Be',
            answer: 'être'
        },
        {
            question: 'Have',
            answer: 'avoir'
        },
        {
            question: 'act',
            answer: 'agir'
        },
        {
            question: 'add',
            answer: 'ajouter'
        },
        {
            question: 'answer',
            answer: 'répondre'
        },
        {
            question: 'appear',
            answer: 'apparaître'
        },
        {
            question: 'ask',
            answer: 'demander'
        },
        {
            question: 'begin',
            answer: 'commencer'
        },
        {
            question: 'bring',
            answer: 'apporter'
        },
        {
            question: 'build',
            answer: 'construire'
        },
        {
            question: 'call',
            answer: 'appeler'
        },
        {
            question: 'come',
            answer: 'venir'
        },
        {
            question: 'care',
            answer: 'prendre soin de'
        },
        {
            question: 'carry',
            answer: 'porter'
        },
        {
            question: 'cause',
            answer: 'provoquer'
        },
        {
            question: 'change',
            answer: 'changer'
        },
        {
            question: 'check',
            answer: 'contrôler'
        },
        {
            question: 'close',
            answer: 'fermer'
        },
        {
            question: 'contain',
            answer: 'contenir'
        },
        {
            question: 'cross',
            answer: 'traverser'
        },
        {
            question: 'cry',
            answer: 'pleurer'
        },
        {
            question: 'cut',
            answer: 'couper'
        },

    ]
    const [reponse, setReponse] = useState('')
    const [next, setNext] = useState(0)
    const [error, setError] = useState('')
    const [sucess, setSuccess] = useState('')
    const [quiz, setQuiz] = useState(QUIZS[next])
    const onSubmit = () => {
        if (reponse === '') {
            setError('La reponse obligatoire')
            setTimeout(() => {
                setError('')
            }, 2000);
        } else {
            if (reponse.toLowerCase() === quiz.answer.toLowerCase()) {
                setNext((prevNext) => prevNext + 1)
                setSuccess("Brevo🎉🎉✨")
                setTimeout(() => {
                    setSuccess('')
                    setReponse('')
                    setQuiz(QUIZS[next + 1])
                    localStorage.setItem('lastQuiz', next + 1)
                }, 2000);



            } else {
                setError("Mauvaise reponse😞😞😞")
                setTimeout(() => {
                    setError('')
                }, 2000);
            }
        }
    }
    useEffect(() => {
        if (localStorage.getItem('lastQuiz')!==null) {
            setQuiz(QUIZS[localStorage.getItem('lastQuiz')])
        }
    },[])
    return (
        <div className='content_body d-flex justify-content-center align-items-center flex-column'>
            <div className='text-white my-5'> <h4>QUIZ DABO</h4></div>
            <h2 className='text-white fw-bold mb-4'>{quiz.question}</h2>
            <span className='text-danger fw-bold fs-5 pb-3 text-center'>{error}</span>
            <span className='text-success fw-bold fs-3 pb-3 text-center'>{sucess}</span>
            <div>
                <input type="text" id="anwers" class="form-control fw-bold" value={reponse} onChange={(e) => setReponse(e.target.value)}
                    placeholder='la reponse en français' aria-describedby="passwordHelpBlock" />
            </div>
            <button type="button" class="btn btn-primary mt-4 fs-5 fw-bold" onClick={onSubmit}>Suivant <span><Icon icon="material-symbols:keyboard-double-arrow-right-rounded" width="24" /></span></button>
        </div>
    );
};

export default Home;