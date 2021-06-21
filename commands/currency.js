import fetch from 'node-fetch';

export default function currencyCommand(message, args) {
    const amount = args[1];
    const baseCurrency = args[2];
    const targetCurrency = args[3];
    async function convert() {
        const data = await fetch(`http://free.currconv.com/api/v7/convert?q=${baseCurrency}_${targetCurrency}&compact=ultra&apiKey=cc8786072582cfa6e0e4`);
        const response = await data.json();
        const result = response[`${baseCurrency.toUpperCase()}_${targetCurrency.toUpperCase()}`] * amount;
        const format = new Intl.NumberFormat('en-US', {
            style: "currency",
            currency: targetCurrency
        });
        message.channel.send(`${amount} ${baseCurrency.toUpperCase()} is ${format.format(result)}`);
    }
    convert();
}