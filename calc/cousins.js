import data2015 from '../data/2015_2-14.json' assert {type: 'json'}
import data2016 from '../data/2016_2-14.json' assert {type: 'json'}
import data2017 from '../data/2017_2-14.json' assert {type: 'json'}
import data2018 from '../data/2018_2-14.json' assert {type: 'json'}
import data2020 from '../data/2020_2-14.json' assert {type: 'json'}
import data2021 from '../data/2021_2-14.json' assert {type: 'json'}

import fs from 'fs';

// calc from 2015-2018 (before) for demarcus cousins

let bfGP = ((data2015.data[0].games_played + data2016.data[0].games_played + data2017.data[0].games_played + data2018.data[0].games_played) / 4);
let bfPTS = ((data2015.data[0].pts + data2016.data[0].pts + data2017.data[0].pts + data2018.data[0].pts) / 4);
let bfAST = ((data2015.data[0].ast + data2016.data[0].ast + data2017.data[0].ast + data2018.data[0].ast) / 4);
let bfREB = ((data2015.data[0].reb + data2016.data[0].reb + data2017.data[0].reb + data2018.data[0].reb) / 4);
let bfBLK = ((data2015.data[0].blk + data2016.data[0].blk + data2017.data[0].blk + data2018.data[0].blk) / 4);
let bfSTL = ((data2015.data[0].stl + data2016.data[0].stl + data2017.data[0].stl + data2018.data[0].stl) / 4);
let bfFG_PCT = ((data2015.data[0].fg_pct + data2016.data[0].fg_pct + data2017.data[0].fg_pct + data2018.data[0].fg_pct) / 4);
let bfFG3_PCT = ((data2015.data[0].fg3_pct + data2016.data[0].fg3_pct + data2017.data[0].fg3_pct + data2018.data[0].fg3_pct) / 4);
let bfTURNOVER = ((data2015.data[0].turnover + data2016.data[0].turnover + data2017.data[0].turnover + data2018.data[0].turnover) / 4);

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
fs.writeFile("return data/before data/cousins.json", bf_data_string, function(err, result) {
    if(err) console.log('error', err);
});

// calc from 2020-2022 (after)

let afGP = ((data2020.data[0].games_played + data2021.data[0].games_played) / 2);
let afPTS = ((data2020.data[0].pts + data2021.data[0].pts) / 2);
let afAST = ((data2020.data[0].ast + data2021.data[0].ast ) / 2);
let afREB = ((data2020.data[0].reb + data2021.data[0].reb ) / 2);
let afBLK = ((data2020.data[0].blk + data2021.data[0].blk ) / 2);
let afSTL = ((data2020.data[0].stl + data2021.data[0].stl ) / 2);
let afFG_PCT = ((data2020.data[0].fg_pct + data2021.data[0].fg_pct ) / 2);
let afFG3_PCT = ((data2020.data[0].fg3_pct + data2021.data[0].fg3_pct) / 2);
let afTURNOVER = ((data2020.data[0].turnover + data2021.data[0].turnover) / 2);

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
fs.writeFile("return data/after data/cousins.json", af_data_string, function(err, result) {
    if(err) console.log('error', err);
});
