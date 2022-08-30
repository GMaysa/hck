const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms:[
            {kitchen:false},
            {ballroom:false},
            {conservatory:false},
            {'dining room':false},
            {'billiard room':false},
            {library:false},
        ]
    },
    {
        name: 'Mrs White',
        present: false,
        rooms:[
            {kitchen:false},
            {ballroom:false},
            {conservatory:false},
            {'dining room':false},
            {'billiard room':false},
            {library:false},
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms:[
            {kitchen:false},
            {ballroom:false},
            {conservatory:false},
            {'dining room':false},
            {'billiard room':false},
            {library:false},
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms:[
            {kitchen:false},
            {ballroom:false},
            {conservatory:false},
            {'dining room':false},
            {'billiard room':false},
            {library:false},
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms:[
            {kitchen:false},
            {ballroom:false},
            {conservatory:false},
            {'dining room':false},
            {'billiard room':false},
            {library:false},
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms:[
            {kitchen:false},
            {ballroom:false},
            {conservatory:false},
            {'dining room':false},
            {'billiard room':false},
            {library:false},
        ]
    }
]

const hasil = (status) =>{
    let outFil = videoData.map((prsent) => prsent)
    // videoData.filter((prsent) => prsent.present === status, )
    
    let total = outFil.reduce((total, prsent) => total + prsent.present, 0)
    console.log(total);
    console.log(outFil);
}

// hasil(true)
console.log(videoData[0]);