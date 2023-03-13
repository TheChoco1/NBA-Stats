import data2015 from '../data/2015_2-14.json' assert {type: 'json'}
import data2016 from '../data/2016_2-14.json' assert {type: 'json'}
import data2017 from '../data/2017_2-14.json' assert {type: 'json'}
import data2018 from '../data/2018_2-14.json' assert {type: 'json'}
import data2020 from '../data/2020_2-14.json' assert {type: 'json'}
import data2021 from '../data/2021_2-14.json' assert {type: 'json'}

import fs from 'fs';

let year = [data2015, data2016, data2017, data2018, data2020, data2021];
let playerIDs = [27, 104, 107, 115, 140, 145, 165, 172, 176, 189, 196, 204, 228, 268, 274, 285, 315, 357, 362, 367, 378, 401, 417, 443, 447];

let yearlyGp = [[], [], [], [], [], []];
let yearlyPpg = [[], [], [], [], [], []];
let yearlyAst = [[], [], [], [], [], []];
let yearlyReb = [[], [], [], [], [], []];
let yearlyBlk = [[], [], [], [], [], []];
let yearlyStl = [[], [], [], [], [], []];
let yearlyFg_pct = [[], [], [], [], [], []];
let yearlyFg3_pct = [[], [], [], [], [], []];
let yearlyTurnover = [[], [], [], [], [], []];

const retrieveStats = () => {
    for (let i = 0; i < year.length; i++) {
        for (let j = 0; j < playerIDs.length; j++) {
            for (let k = 0; k < year[i].data.length; k++) {
                if (year[i].data[k].player_id == playerIDs[j]) {
                yearlyGp[i][j] = year[i].data[k].games_played;
                yearlyPpg[i][j] = year[i].data[k].pts;
                yearlyAst[i][j] = year[i].data[k].ast;
                yearlyReb[i][j] = year[i].data[k].reb;
                yearlyBlk[i][j] = year[i].data[k].blk;
                yearlyStl[i][j] = year[i].data[k].stl;
                yearlyFg_pct[i][j] = year[i].data[k].fg_pct;
                yearlyFg3_pct[i][j] = year[i].data[k].fg3_pct;
                yearlyTurnover[i][j] = year[i].data[k].turnover;
                }
            }
            if (yearlyPpg[i][j] == undefined) {
                yearlyGp[i][j] = 0;
                yearlyPpg[i][j] = 0;
                yearlyAst[i][j] = 0;
                yearlyReb[i][j] = 0;
                yearlyBlk[i][j] = 0;
                yearlyStl[i][j] = 0;
                yearlyFg_pct[i][j] = 0;
                yearlyFg3_pct[i][j] = 0;
                yearlyTurnover[i][j] = 0;
            }
        }

    }
}

retrieveStats();

let newData = {
    "yearlyGp": yearlyGp,
    "yearlyPpg": yearlyPpg,
    "yearlyAst": yearlyAst,
    "yearlyReb": yearlyReb,
    "yearlyBlk": yearlyBlk,
    "yearlyStl": yearlyStl,
    "yearlyFg_pct": yearlyFg_pct,
    "yearlyFg3_pct": yearlyFg3_pct,
    "yearlyTurnover": yearlyTurnover,
}

let wee = JSON.stringify(newData);

fs.writeFile("./src/return data/newData.json", wee, function(err, result) {
    if(err) console.log('error', err);
});