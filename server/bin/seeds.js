const mongoose = require('mongoose');
const Ingredient = require('../models/brain');
const {dbURL} = require('./config');

mongoose.connect(dbURL);

const tags = [
    {
        tag:['greetings'],
        question:[{value:'Hi,how are you?',tag:'greetings'}],
        answer:[
            {value:'Hi',tag:'greetings'},
            {value:'Hello',tag:'greetings'}
        ]
    },
    {
        tag:['feeling','negative'],
        question:[{value:'How are you?',tag:'feeling'}],
        answer:[
            {value:'Bad',tag:'negative'},
            {value:'Not so good',tag:'negative'},
        ]
    },
    {
        tag:['feeling','positive'],
        question:[{value:'How are you?',tag:'feeling'}],
        answer:[
            {value:'Good',tag:'positive'},
            {value:'Great',tag:'positive'},
            {value:'Amazing',tag:'positive'}
        ]
    }
]