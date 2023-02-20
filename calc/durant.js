import data2015 from '../data/2015_2-14.json' assert {type: 'json'}
import data2016 from '../data/2016_2-14.json' assert {type: 'json'}
import data2017 from '../data/2017_2-14.json' assert {type: 'json'}
import data2018 from '../data/2018_2-14.json' assert {type: 'json'}
import data2020 from '../data/2020_2-14.json' assert {type: 'json'}
import data2021 from '../data/2021_2-14.json' assert {type: 'json'}

import fs from 'fs';

// calc from 2015-2018 (before) for kevin durant

function indexOfPlayer(id) {
    for (let i = 0; i < data2015.data.length; i++) {
        if (data2015.data[i].player_id == id) return i;
    }
    return -1;
}

let e = indexOfPlayer(140);

let bfGP = ((data2015.data[e].games_played + data2016.data[e].games_played + data2017.data[e].games_played + data2018.data[e].games_played) / 4);
let bfPTS = ((data2015.data[e].pts + data2016.data[e].pts + data2017.data[e].pts + data2018.data[e].pts) / 4);
let bfAST = ((data2015.data[e].ast + data2016.data[e].ast + data2017.data[e].ast + data2018.data[e].ast) / 4);
let bfREB = ((data2015.data[e].reb + data2016.data[e].reb + data2017.data[e].reb + data2018.data[e].reb) / 4);
let bfBLK = ((data2015.data[e].blk + data2016.data[e].blk + data2017.data[e].blk + data2018.data[e].blk) / 4);
let bfSTL = ((data2015.data[e].stl + data2016.data[e].stl + data2017.data[e].stl + data2018.data[e].stl) / 4);
let bfFG_PCT = ((data2015.data[e].fg_pct + data2016.data[e].fg_pct + data2017.data[e].fg_pct + data2018.data[e].fg_pct) / 4);
let bfFG3_PCT = ((data2015.data[e].fg3_pct + data2016.data[e].fg3_pct + data2017.data[e].fg3_pct + data2018.data[e].fg3_pct) / 4);
let bfTURNOVER = ((data2015.data[e].turnover + data2016.data[e].turnover + data2017.data[e].turnover + data2018.data[e].turnover) / 4);

let bf_data = {"gp" : bfGP,
               "ppg" : bfPTS,
               "ast" : bfAST,
               "reb" : bfREB,
               "blk" : bfBLK,
               "stl" : bfSTL,
               "fg_pct" : bfFG_PCT,
               "fg3_pct" : bfFG3_PCT,
               "turnover" : bfTURNOVER,
               "seasons" : "2015-2019"
}

let bf_data_string = JSON.stringify(bf_data);
fs.writeFile("return data/before data/durant.json", bf_data_string, function(err, result) {
    if(err) console.log('error', err);
});

// calc from 2020-2022 (after)

let afGP = ((data2020.data[e].games_played + data2021.data[e].games_played) / 2);
let afPTS = ((data2020.data[e].pts + data2021.data[e].pts) / 2);
let afAST = ((data2020.data[e].ast + data2021.data[e].ast ) / 2);
let afREB = ((data2020.data[e].reb + data2021.data[e].reb ) / 2);
let afBLK = ((data2020.data[e].blk + data2021.data[e].blk ) / 2);
let afSTL = ((data2020.data[e].stl + data2021.data[e].stl ) / 2);
let afFG_PCT = ((data2020.data[e].fg_pct + data2021.data[e].fg_pct ) / 2);
let afFG3_PCT = ((data2020.data[e].fg3_pct + data2021.data[e].fg3_pct) / 2);
let afTURNOVER = ((data2020.data[e].turnover + data2021.data[e].turnover) / 2);

let af_data = {"gp" : afGP,
               "ppg" : afPTS,
               "ast" : afAST,
               "reb" : afREB,
               "blk" : afBLK,
               "stl" : afSTL,
               "fg_pct" : afFG_PCT,
               "fg3_pct" : afFG3_PCT,
               "turnover" : afTURNOVER,
               "seasons" : "2020-2022"
}

let af_data_string = JSON.stringify(af_data);
fs.writeFile("return data/after data/durant.json", af_data_string, function(err, result) {
    if(err) console.log('error', err);
});