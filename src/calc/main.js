import data2015 from '../data/2015_2-14.json' assert {type: 'json'}
import data2016 from '../data/2016_2-14.json' assert {type: 'json'}
import data2017 from '../data/2017_2-14.json' assert {type: 'json'}
import data2018 from '../data/2018_2-14.json' assert {type: 'json'}
import data2020 from '../data/2020_2-14.json' assert {type: 'json'}
import data2021 from '../data/2021_2-14.json' assert {type: 'json'}

let year = [data2015, data2016, data2017, data2018, data2020, data2021];

let playerIDs = [107, 140, 165, 172, 204, 268, 274, 285, 357, 362, 417, 443];
let tempIDs = [];
let yearlyGp = [[], [], [], [], [], []];
let yearlyPpg = [[], [], [], [], [], []];
let yearlyAst = [[], [], [], [], [], []];
let yearlyReb = [[], [], [], [], [], []];
let yearlyBlk = [[], [], [], [], [], []];
let yearlyStl = [[], [], [], [], [], []];
let yearlyFg_pct = [[], [], [], [], [], []];
let yearlyFg3_pct = [[], [], [], [], [], []];
let yearlyTurnover = [[], [], [], [], [], []];

for (let i = 0; i < year.length; i++) {
    for (let j = 0; j < year[i].data.length; j++) {
        for (let k = 0; k < playerIDs.length; k++) {
            if (year[i].data[j].player_id == playerIDs[k]) {
                tempIDs.push(playerIDs[k]);
            }
        }
        if (year[i].data[j].player_id == tempIDs[j]) {
            yearlyGp[i][j] = year[i].data[j].games_played;
            yearlyPpg[i][j] = year[i].data[j].pts;
            yearlyAst[i][j] = year[i].data[j].ast;
            yearlyReb[i][j] = year[i].data[j].reb;
            yearlyBlk[i][j] = year[i].data[j].blk;
            yearlyStl[i][j] = year[i].data[j].stl;
            yearlyFg_pct[i][j] = year[i].data[j].fg_pct;
            yearlyFg3_pct[i][j] = year[i].data[j].fg3_pct;
            yearlyTurnover[i][j] = year[i].data[j].turnover;
        } else {
            yearlyPpg[i][j] = 0;
        }
    }
    tempIDs = [];
}
