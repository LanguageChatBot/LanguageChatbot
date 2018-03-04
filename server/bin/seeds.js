const mongoose = require('mongoose');
const Frases = require('../models/Brain');
const {dbURL} = require('../config');

mongoose.connect(dbURL);

const tags = [
    {
        tag:['welcome'],
        question:[
            {value:'how are you?',tag:'welcome'},
            {value:'hi, how are you?',tag:'welcome'},
            {value:'hello, how are you?',tag:'welcome'},
            {value:'hey!!, how are you?',tag:'welcome'},
            {value:'wassup!, ,how are you?',tag:'welcome'}
        ],
        answer:[
            {value:'hi',tag:'welcome'},
            {value:'hello',tag:'welcome'},
            {value:'hey',tag:'welcome'},
            {value:'wassup',tag:'welcome'}
        ],
        reply:[
            {value:'really good couse I\'m a bot, and you?',tag:'welcome'}
        ]
    },
    {
        tag:['greetings'],
        question:[{value:'Thanks but I\'m just a bot',tag:'greetings'}],
        answer:[
            {value:'you are amazing',tag:'greetings'},
            {value:'you are incredible',tag:'greetings'},
            {value:"i love you",tag:'positive'}
        ]
    },
    {
        tag:['negative'],
        question:[{value:'why?',tag:'feeling'}],
        answer:[
            {value:'bad',tag:'negative'},
            {value:'not so good',tag:'negative'},
            {value:'sad',tag:'negative'}
        ]
    },
    {
        tag:[ 'positive'],
        question:[{value:'alsome!!, Why?',tag:'feeling'}],
        answer:[
            {value:'good',tag:'positive'},
            {value:'great',tag:'positive'},
            {value:'amazing',tag:'positive'},
            {value:'fine',tag:'positive'}
        ]
    },
    {
        tag:['apologize'],
        question:[{value:'why are you asking sorry?',tag:'apologize'}],
        answer:[
            {value:'sorry',tag:'apologize'},
            {value:"i'm sorry",tag:'apologize'},
        ]
    },
    {
        tag:['because'],
        question:[{value:'',tag:''}],
        answer:[{value:'',tag:''}],
        reply:[{value:'',tag:''}],
    },
    {
        tag:['game'],
        question:[{value:'we play?',tag:'game'}],
        answer:[{value:'yes',tag:'game'}],
        reply:[{value:'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb'}]
    },{
        tag:['placesToBuy'],
        question:[{value:'Where do you usually go?',tag:'placesToBuy'},
                  {value:'What are you going to buy?',tag:''}],
        answer:[
            {value:'supermarket',tag:'placesToBuy'},
            {value:'mall',tag:'placesToBuy'},
        ]
    },{
        tag:['placesToEnjoy'],
        question:[{value:'Can I join to you?',tag:'positive'}],
        answer:[
            {value:'cinema',tag:'placesToEnjoy'},
            {value:'home',tag:'placesToEnjoy'},
        ]
    },{
        tag:['food'],
        question:[{value:'I love ***',tag:'positive'}],
        answer:[
            {value:'bananas',tag:'food'},
            {value:'oranges',tag:'food'}
        ]
    }
]

Frases.collection.drop();

Frases.create(tags, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${tags.length} tag`)
  });