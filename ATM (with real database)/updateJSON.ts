import * as fs from 'fs';
export let updateData = (i: number, updateData1: number, j?: number, updateData2?: number) => {
    const filePath = './accounts.json';
    fs.readFile(filePath, 'utf8', (err, data) => {
        let accounts = JSON.parse(data);
        accounts[i].balance = updateData1;
        if (j) {
            accounts[j].balance = updateData2;
        }
        fs.writeFile(filePath, JSON.stringify(accounts, null, 2), 'utf8', (writeErr) => {
        });
    });
}