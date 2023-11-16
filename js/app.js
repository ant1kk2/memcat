import * as sources from './src.js'

document.addEventListener("DOMContentLoaded", function () {
const toggleModeButton = document.querySelector('.header__mode');
const burgerBtn = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const menuItems = document.querySelectorAll('.menu__item');
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menu.classList.remove('active');
    document.documentElement.classList.remove("menu-open")
    burgerBtn.classList.remove('active')
  })
})

toggleModeButton.addEventListener('click', e => {
    e.preventDefault();
    document.body.classList.toggle('light')
});

burgerBtn.addEventListener('click', e => {
  e.preventDefault();
  menu.classList.toggle('active');
  document.documentElement.classList.toggle("menu-open")
  burgerBtn.classList.toggle('active')
});

document.querySelector('#bridge').href = sources.bridgeLink;
document.querySelectorAll('.button').forEach(btn => {
    btn.href = sources.buyNowLink
});


document.querySelector('#link_twitter').href = sources.twitterLink;
document.querySelector('#link_telegram').href = sources.tgLink;
document.querySelector('#link_dextools').href = sources.dextoolsLink;
document.querySelector('#link_etherscan').href = sources.etherscanLink;
document.querySelector('#link_coinmarket').href = sources.coinmarketLink;
document.querySelector('#link_uniswap').href = sources.bridgeLink;
document.querySelector('#link_coinW').href = sources.coinwLink;
document.querySelector('#link_tocenomic').href = sources.tocenomicsLink;

let tokenomicsProgress = document.querySelector('#tokenomics_progrress');
let tokenomicsPercent = document.querySelector('#tokenomics_percent');
tokenomicsProgress.innerHTML = sources.tokenomicsProgress;
tokenomicsPercent.innerHTML = sources.tokenomicsPercent

document.querySelector('#footer_twitter-link').href = sources.twitterLink;
document.querySelector('#footer_telegram-link').href = sources.tgLink;
document.querySelector('#footer_discord-link').href = sources.discordLink;

})