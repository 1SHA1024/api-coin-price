// base api to split
// https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd
const api = 'https://api.coingecko.com/api/v3/simple/price?ids='

// let coin1 = 'bitcoin'
const vs = '&vs_currencies=';
// let coin2 = 'usd';

// get price from api
function getApi(coin1,coin2) {
    return fetch(`${api}${coin1}${vs}${coin2}`)
        .then(res => res.json())
        .catch(err => console.log(err))
}


async function getPrice(){
    coin1 = document.getElementById("coin1").value;
    coin2 = document.getElementById("coin2").value;

    try {
         gifDiv.innerHTML = '<img src="mili.gif">';
        await getApi(coin1, coin2).then(res => {
            console.log(res.bitcoin.usd); 
            sumDiv.innerHTML = res.bitcoin.usd
        });
    } catch (error) {
    console.log(error);
    } finally {
        gifDiv.innerHTML = ''
    }
}





