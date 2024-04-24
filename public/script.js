
const sideBar = document.querySelector("aside")
const menuBtn = document.querySelector("#menu_bar")
const closeBtn = document.querySelector("#close_btn")

const themeToggler = document.querySelector(".theme-toggler")

menuBtn.addEventListener('click',()=>{
    sideBar.style.display="block"
})

closeBtn.addEventListener('click',()=>{

    sideBar.style.display="none"
})

themeToggler.addEventListener('click',()=>{
    document.body.classList.toggle("dark-theme-variables")
    themeToggler.querySelector("span:nth-child(1)").classList.toggle('active')
    themeToggler.querySelector("span:nth-child(2)").classList.toggle('active')
})
window.addEventListener('DOMContentLoaded', async () => {
    console.log('DOMContentLoaded event fired');
    try {
      const response = await fetch('/getDashboardDetails');
      if (response.ok) {
        const data = await response.json();
        details = data.findPickup;
        if (details) {
          const username = user.username;
          const money = user.withdrawableAmount;
          const pts = user.points;
          document.getElementById('username').innerText = username;
          document.getElementById('greetings').innerText = `Hi ${username},`;
          document.getElementById('points').innerText = pts;
          document.getElementById('availableBalance').innerText = money;
          //document.getElementById('modalAvailableBalance').innerText =pts;
        }
      } else {
        console.error('Error fetching user by IP:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching user by IP:', error);
    }
  });
