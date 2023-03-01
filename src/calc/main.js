import data2015 from '../data/2015_2-14.json' assert {type: 'json'}
import data2016 from '../data/2016_2-14.json' assert {type: 'json'}
import data2017 from '../data/2017_2-14.json' assert {type: 'json'}
import data2018 from '../data/2018_2-14.json' assert {type: 'json'}
import data2020 from '../data/2020_2-14.json' assert {type: 'json'}
import data2021 from '../data/2021_2-14.json' assert {type: 'json'}

let year = [data2015, data2016, data2017, data2018, data2020, data2021];

let playerIDs = [107, 140, 165, 172, 204, 268, 274, 285, 357, 362, 417, 443];
let yearlyPts = [[], [], [], [], [], []];
let e;
let f = 0;

for (let i = 0; i < year.length; i++) {
    e = year[i].data.length;
    for (let j = 0; j < e; j++) {
        if (year[i].data[j].player_id == playerIDs[f]) {
            yearlyPts[i][j] = year[i].data[j].pts;
            f++;
        } else {
            yearlyPts[i][j] = 0;
            f++;
        }
    }
    f=0;
}

console.log(yearlyPts);

// figure out why some years are missing data and why some aren't