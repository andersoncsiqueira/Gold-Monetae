

                            // urls para a pegar as cotacoes
 
const url = 'https://economia.awesomeapi.com.br/last/USD-BRL'
const urleur = 'https://economia.awesomeapi.com.br/last/EUR-BRL'
const urlgbp = 'https://economia.awesomeapi.com.br/last/GBP-BRL'
const urlcad = 'https://economia.awesomeapi.com.br/last/CAD-BRL'
const urlarg = 'https://economia.awesomeapi.com.br/last/ARS-BRL'
const urlchf = 'https://economia.awesomeapi.com.br/last/CHF-BRL'
const urlaud = 'https://economia.awesomeapi.com.br/last/AUD-BRL'
const urlclp = 'https://economia.awesomeapi.com.br/last/CLP-BRL'
const urlnzd = 'https://economia.awesomeapi.com.br/last/NZD-BRL'
                    // ids das cotacoes na tabela venda e compra
const usdv1 = document.getElementById('usdv1')

const eurv1 = document.getElementById('eurv1')

const gbpv1 = document.getElementById('gbpv1')

const cadv1 = document.getElementById('cadv1')

const argv1 = document.getElementById('argv1')

const chfv1 = document.getElementById('chfv1')

const audv1 = document.getElementById('audv1')

const clpv1 = document.getElementById('clpv1')

const nzdv1 = document.getElementById('nzdv1')

const getPrice = async (url,coin,place) => {
    const request = await fetch(url)
    const response = await request.json()
    const ask = Number(response[`${coin}BRL`]['ask'])
    const bid = Number(response[`${coin}BRL`]['bid'])
    
    place.innerHTML = ((ask + bid)/2).toFixed(4)
    
}

getPrice(url,'USD',usdv1)
getPrice(urleur,'EUR',eurv1)
getPrice(urlarg,'ARS',argv1)
getPrice(urlgbp,'GBP',gbpv1)
getPrice(urlcad,'CAD',cadv1)
getPrice(urlchf,'CHF',chfv1)
getPrice(urlaud,'AUD',audv1)
getPrice(urlclp,'CLP',clpv1)
getPrice(urlnzd,'NZD',nzdv1)

