function openTools(){ alert('Tools coming soon. Ask the advisor to deploy the MVP.'); }
function learnMore(){ alert('CreatorX AI — Script Writer, Thumbnail Maker, Voiceover Generator, SEO Helper, Idea Generator.'); }
function demo(type){
  const body = document.getElementById('modal-body');
  let html = '<h3>Demo: '+type+'</h3>';
  if(type==='script'){
    html += '<p>Example Short Script (EN):\\n\\nHook: "Stop scrolling — 3 signs your phone is spying on you!"\\nScene1: Quick visual + text overlay\\nCall: "Like for part 2!"</p>';
  } else if(type==='thumb'){
    html += '<p>Thumbnail idea: Big face + bold text: "TOP 5 HACKS" + purple glow</p>';
  } else if(type==='voice'){
    html += '<p>Voice demo: "Welcome to CreatorX AI — create faster." (download MP3 button will be available in pro)</p>';
  } else if(type==='seo'){
    html += '<p>SEO Title: "5 Quick YouTube Shorts Ideas to Boost Views (2025)"\\nHashtags: #Shorts #YouTube #Creator</p>';
  } else if(type==='idea'){
    html += '<p>Idea: "10 second reaction edits for trending movies" — target: Movie fans</p>';
  }
  body.innerHTML = html;
  document.getElementById('modal').style.display='flex';
}
function closeModal(){ document.getElementById('modal').style.display='none'; }
document.getElementById('lang').addEventListener('click', function(){
  const langs = ['EN','HI','BN','UR','RU'];
  const cur = this.innerText.split(' ')[0];
  const idx = langs.indexOf(cur);
  this.innerText = langs[(idx+1)%langs.length] + ' ▾';
});