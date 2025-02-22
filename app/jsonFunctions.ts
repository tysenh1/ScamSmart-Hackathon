import * as fs from 'fs';

export const readJsonFile = () => {
    const data = fs.readFileSync('../userData.json', 'utf-8');
    return JSON.parse(data);
};

export const writeJsonFile = (data: object) => {
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync('../userData.json', jsonData, 'utf-8');
};